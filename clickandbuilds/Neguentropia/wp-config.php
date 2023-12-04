<?php

define('FS_METHOD', 'direct');
define('FORCE_SSL_ADMIN', true);

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dbs11634922' );

/** Database username */
define( 'DB_USER', 'dbu109852' );

/** Database password */
define( 'DB_PASSWORD', '5d38ff9ae0d67043d1333a5109bebe4e' );

/** Database hostname */
define( 'DB_HOST', 'db5013913910.hosting-data.io' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          ')uK[Bn.J`7ia^S~L/QS_6@nf3:DRXwP?|*Ig8`|C-f>M+y}wTzL>OC}8[<)5|0v6' );
define( 'SECURE_AUTH_KEY',   '*nPE:cfKnP;)#*M3bNRF8Q|:S3&,yUV-k83x/1Z1y4qxM9FN) 9dU9+2cDuxe;om' );
define( 'LOGGED_IN_KEY',     '@)7&!Q9]J8w}*8]bC_Pva2iN}I=wNidpYnjmM 2;V41Z%yhm)4IDPYrD%&`Oc 4:' );
define( 'NONCE_KEY',         '6xG*42]xV/Ev{`x9p{sw/Q,|$c,ah/7;c [F}jLR Loaj`D4]c&u40Jh$-*2U=Df' );
define( 'AUTH_SALT',         '|I?o}`Icsuq;6=55m}59cPD5cPq+KBfQtB~K7 !q8eiR.ZyRgkW*=[p#0-lLU74C' );
define( 'SECURE_AUTH_SALT',  '&u5m|M}:ipY)3H/;^Qs0h=i8KCSsO6_zuy Dx[{Nem?;AlKQom?Cit9*#9d0bld]' );
define( 'LOGGED_IN_SALT',    '8XVD/h-|FjH7{DpKZ1VUHp^pEh TcDzD%Gj*]WQ:]0]a5qs;lTx`*6*~o%C-?GE>' );
define( 'NONCE_SALT',        'p~)U5&1inShPMAm}kjV8$o.|ddzNQ`3spz4RULkHE1<I,0w9@wFRH#w{vQ*EJYk9' );
define( 'WP_CACHE_KEY_SALT', 'm,)>0ESZpvQ1nPQm7T~W+3qat_vV8Vrd6r/Dv w$?DKhG)K+X8S#2(B,4.-vUf^8' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = '';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
