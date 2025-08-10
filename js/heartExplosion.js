// ---- Heart Explosion Popup Function ----
function showHeartExplosionPopup(options = {}) {
    // --- Create overlay ---
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.left = "0";
    overlay.style.top = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.background = "rgba(24,18,43,0.6)";
    overlay.style.zIndex = "99999";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.overflow = "hidden";

    // --- Create close button ---
    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "✕";
    closeBtn.setAttribute("aria-label", "Close");
    closeBtn.style.position = "fixed";
    closeBtn.style.top = "30px";
    closeBtn.style.right = "40px";
    closeBtn.style.fontSize = "1.6em";
    closeBtn.style.background = "rgba(30,30,30,0.22)";
    closeBtn.style.color = "#fff";
    closeBtn.style.border = "none";
    closeBtn.style.borderRadius = "2em";
    closeBtn.style.width = "2em";
    closeBtn.style.height = "2em";
    closeBtn.style.lineHeight = "2em";
    closeBtn.style.textAlign = "center";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.zIndex = "100001";
    closeBtn.style.boxShadow = "0 2px 8px #0003";

    // --- Full window canvas ---
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.left = "0";
    canvas.style.top = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.display = "block";
    canvas.style.background = "transparent";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "100000";

    // --- "Thank You" message (hidden initially) ---
    const thankYouMsg = document.createElement("div");
    thankYouMsg.innerText = "Thank You!";
    thankYouMsg.style.position = "fixed";
    thankYouMsg.style.left = "50%";
    thankYouMsg.style.top = "65%";
    thankYouMsg.style.transform = "translate(-50%, 0) scale(0.8)";
    thankYouMsg.style.fontFamily = "'Segoe UI', 'Arial', sans-serif";
    thankYouMsg.style.fontSize = "3.5em";
    thankYouMsg.style.letterSpacing = "0.05em";
    thankYouMsg.style.fontWeight = "bold";
    thankYouMsg.style.color = "#ff467e";
    thankYouMsg.style.opacity = "0";
    thankYouMsg.style.transition =
        "opacity 0.6s cubic-bezier(.4,2,.2,1), transform 0.6s cubic-bezier(.4,2,.2,1)";
    thankYouMsg.style.textShadow = "0 4px 32px #ff467e80, 0 2px 8px #fff8";
    thankYouMsg.style.zIndex = "100002";
    thankYouMsg.style.pointerEvents = "none";

    // --- Assemble overlay ---
    overlay.appendChild(canvas);
    overlay.appendChild(closeBtn);
    overlay.appendChild(thankYouMsg);
    document.body.appendChild(overlay);

    // --- Responsive canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // --- Heart Drawing Utilities
    const ctx = canvas.getContext("2d");

    function drawHeart(ctx, x, y, size, color, angle = 0, shadow = true) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.scale(size, size);
        ctx.beginPath();
        ctx.moveTo(0, -0.5);
        ctx.bezierCurveTo(0.5, -1.1, 1.4, -0.1, 0, 0.8);
        ctx.bezierCurveTo(-1.4, -0.1, -0.5, -1.1, 0, -0.5);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.shadowColor = shadow ? color : "transparent";
        ctx.shadowBlur = shadow ? 18 : 0;
        ctx.fill();
        ctx.restore();
    }

    function drawSign(ctx, x, y, size, type = "+") {
        ctx.save();
        ctx.translate(x, y);
        ctx.lineCap = "round";
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = size * 0.18;
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.moveTo(-size * 0.32, 0);
        ctx.lineTo(size * 0.32, 0);
        ctx.stroke();
        if (type === "+") {
            ctx.beginPath();
            ctx.moveTo(0, -size * 0.32);
            ctx.lineTo(0, size * 0.32);
            ctx.stroke();
        }
        ctx.restore();
    }
    class Particle {
        constructor(x, y, angle, speed, size, color) {
            this.x = x;
            this.y = y;
            this.vx = Math.cos(angle) * speed;
            this.vy = Math.sin(angle) * speed;
            this.size = size;
            this.color = color;
            this.life = 1;
            this.angle = Math.random() * Math.PI * 2;
            this.spin = (Math.random() - 0.5) * 0.09;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.vy += 0.01;
            this.life -= 0.013;
            this.size *= 0.985;
            this.angle += this.spin;
        }
        draw(ctx) {
            ctx.globalAlpha = Math.max(this.life, 0);
            drawHeart(ctx, this.x, this.y, this.size, this.color, this.angle);
            ctx.globalAlpha = 1;
        }
        isAlive() {
            return this.life > 0 && this.size > 0.01;
        }
    }

    function createHeartExplosion(x, y, numParticles = 48) {
        const particles = [];
        for (let i = 0; i < numParticles; i++) {
            const angle = (Math.PI * 2 * i) / numParticles + Math.random() * 0.12;
            const speed = 5 + Math.random() * 3;
            const size = 0.018 + Math.random() * 0.012;
            const colors = ["#ff467e", "#ff7eb3", "#ffadc6", "#ffddf4", "#de2b5b"];
            const color = colors[Math.floor(Math.random() * colors.length)];
            particles.push(
                new Particle(
                    x,
                    y,
                    angle,
                    speed,
                    size * Math.max(canvas.width, canvas.height),
                    color
                )
            );
        }
        return particles;
    }

    // --- Animation State
    let particles = [];
    let centerHeart = null;
    let animationState = "idle";
    let signType = options.signType || "+";
    let heartAnim = {
        scale: 0,
        maxScale: 2.2,
        minScale: 1,
        duration: 900,
        elapsed: 0,
        signDelay: 500,
        signShown: false,
        explosionDelay: 1200
    };
    let lastTimestamp = 0;
    let thankYouShown = false;
    let thankYouTimeout;

    function showThankYou() {
        thankYouMsg.style.opacity = "1";
        thankYouMsg.style.transform = "translate(-50%, 0) scale(1.1)";
        setTimeout(() => {
            thankYouMsg.style.transform = "translate(-50%, 0) scale(1)";
        }, 300);
        thankYouShown = true;
    }

    function maybeShowThankYou() {
        if (thankYouShown) return;
        showThankYou();
    }

    function startHeartAnimation(type = "+") {
        resizeCanvas();
        thankYouMsg.style.opacity = "0";
        thankYouMsg.style.transform = "translate(-50%, 0) scale(0.8)";
        thankYouShown = false;
        if (thankYouTimeout) clearTimeout(thankYouTimeout);

        centerHeart = {
            x: canvas.width / 2,
            y: canvas.height / 2,
            scale: 0,
            signType: type
        };
        heartAnim.elapsed = 0;
        heartAnim.signShown = false;
        animationState = "heart";
        signType = type;
    }

    function animate(timestamp) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (animationState === "heart" && centerHeart) {
            let t = heartAnim.elapsed / heartAnim.duration;
            let scale =
                heartAnim.minScale +
                (heartAnim.maxScale - heartAnim.minScale) *
                Math.sin(Math.PI * Math.min(t, 1));
            centerHeart.scale = scale;
            drawHeart(
                ctx,
                centerHeart.x,
                centerHeart.y,
                (Math.max(canvas.width, canvas.height) / 8) * centerHeart.scale,
                "#ff467e",
                0,
                true
            );
            if (heartAnim.elapsed > heartAnim.signDelay) {
                heartAnim.signShown = true;
                drawSign(
                    ctx,
                    centerHeart.x,
                    centerHeart.y,
                    (Math.max(canvas.width, canvas.height) / 8) * centerHeart.scale,
                    signType
                );
            }
            if (heartAnim.elapsed > heartAnim.explosionDelay) {
                const hearts = createHeartExplosion(centerHeart.x, centerHeart.y, 48);
                particles.push(...hearts);
                animationState = "explode";
                centerHeart = null;

                // After all particles fade, show "Thank You!"
                thankYouTimeout = setTimeout(() => {
                    maybeShowThankYou();
                }, 800);
            }
            heartAnim.elapsed += timestamp - lastTimestamp;
        }
        if (
            animationState === "explode" &&
            particles.length === 0 &&
            !thankYouShown
        ) {
            maybeShowThankYou();
        }
        particles.forEach((p) => {
            p.update();
            p.draw(ctx);
        });
        particles = particles.filter((p) => p.isAlive());
        lastTimestamp = timestamp;
        requestAnimationFrame(animate);
    }

    closeBtn.onclick = () => api.close();

    // Auto-explode on load
    setTimeout(() => {
        if (animationState === "idle") startHeartAnimation(options.signType || "+");
    }, 700);

    animate(performance.now());

    // --- API
    const api = {
        close() {
            window.removeEventListener("resize", resizeCanvas);
            if (thankYouTimeout) clearTimeout(thankYouTimeout);
            if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        },
        trigger(sign) {
            if (animationState !== "idle") return;
            startHeartAnimation(sign || options.signType || "+");
        }
    };

    return api;
}