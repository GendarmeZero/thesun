<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'thesun' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

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
define( 'AUTH_KEY',         'ygZGd9A[[R[5a|a3MFzzKHOG``_W(X#H>g ?S=PSkCq UQAQUXcO7k!&iZbj*91?' );
define( 'SECURE_AUTH_KEY',  'gAcg.sPNh(tNG$W&>X4zV+gRLygQnf@rmn5TyJ@SL:*+,x>F6Dis6C2j|1Z.rCGh' );
define( 'LOGGED_IN_KEY',    'hV%2~6&61#CNyqCmk+5z%MD^<r+,;[3#8PoOh=;L%BmSj+{w|ztd:v phYYI)0$I' );
define( 'NONCE_KEY',        'nid7 [?uOunlSkP(>dL4<90~mFpNf,4os,QZ^RR&u)F[?kAj]t6XZQsj<)k-HiFS' );
define( 'AUTH_SALT',        '5_HhJFzT.g~3;[HEw5m(!f<B[[t*<iz^w&`[25lQ,N*1M.Y|AIG! ]Ndj<bICL|v' );
define( 'SECURE_AUTH_SALT', 'AXf[iBp5)5RA@oSjkw/q3G2m7.4R$LzTsMV~=q.#q/P)m]NsOZ?6[IELe.$r@)?w' );
define( 'LOGGED_IN_SALT',   'L ^5fa0;Rc86lN5G^Ge`&z0AUs_@[>9rnp6m1j6K:@}.MSEqUCABPP5.n[%`d};+' );
define( 'NONCE_SALT',       'Nq4@JkTh39f!6c](gN4w^Fu+ ##OGCj0hn(Td[lSLvj3w>71|qUBw?wnE+];orkq' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
