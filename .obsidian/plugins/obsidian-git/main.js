'use strict';

var child_process_1 = require('child_process');
var obsidian = require('obsidian');
var fs_1 = require('fs');
var tty = require('tty');
var util$1 = require('util');
var os = require('os');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var child_process_1__default = /*#__PURE__*/_interopDefaultLegacy(child_process_1);
var fs_1__default = /*#__PURE__*/_interopDefaultLegacy(fs_1);
var tty__default = /*#__PURE__*/_interopDefaultLegacy(tty);
var util__default = /*#__PURE__*/_interopDefaultLegacy(util$1);
var os__default = /*#__PURE__*/_interopDefaultLegacy(os);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var gitError = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitError = void 0;
/**
 * The `GitError` is thrown when the underlying `git` process throws a
 * fatal exception (eg an `ENOENT` exception when attempting to use a
 * non-writable directory as the root for your repo), and acts as the
 * base class for more specific errors thrown by the parsing of the
 * git response or errors in the configuration of the task about to
 * be run.
 *
 * When an exception is thrown, pending tasks in the same instance will
 * not be executed. The recommended way to run a series of tasks that
 * can independently fail without needing to prevent future tasks from
 * running is to catch them individually:
 *
 * ```typescript
 import { gitP, SimpleGit, GitError, PullResult } from 'simple-git';

 function catchTask (e: GitError) {
   return e.
 }

 const git = gitP(repoWorkingDir);
 const pulled: PullResult | GitError = await git.pull().catch(catchTask);
 const pushed: string | GitError = await git.pushTags().catch(catchTask);
 ```
 */
class GitError extends Error {
    constructor(task, message) {
        super(message);
        this.task = task;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.GitError = GitError;
//# sourceMappingURL=git-error.js.map
});

var gitResponseError = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitResponseError = void 0;

/**
 * The `GitResponseError` is the wrapper for a parsed response that is treated as
 * a fatal error, for example attempting a `merge` can leave the repo in a corrupted
 * state when there are conflicts so the task will reject rather than resolve.
 *
 * For example, catching the merge conflict exception:
 *
 * ```typescript
 import { gitP, SimpleGit, GitResponseError, MergeSummary } from 'simple-git';

 const git = gitP(repoRoot);
 const mergeOptions: string[] = ['--no-ff', 'other-branch'];
 const mergeSummary: MergeSummary = await git.merge(mergeOptions)
      .catch((e: GitResponseError<MergeSummary>) => e.git);

 if (mergeSummary.failed) {
   // deal with the error
 }
 ```
 */
class GitResponseError extends gitError.GitError {
    constructor(
    /**
     * `.git` access the parsed response that is treated as being an error
     */
    git, message) {
        super(undefined, message || String(git));
        this.git = git;
    }
}
exports.GitResponseError = GitResponseError;
//# sourceMappingURL=git-response-error.js.map
});

var gitConstructError = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitConstructError = void 0;

/**
 * The `GitConstructError` is thrown when an error occurs in the constructor
 * of the `simple-git` instance itself. Most commonly as a result of using
 * a `baseDir` option that points to a folder that either does not exist,
 * or cannot be read by the user the node script is running as.
 *
 * Check the `.message` property for more detail including the properties
 * passed to the constructor.
 */
class GitConstructError extends gitError.GitError {
    constructor(config, message) {
        super(undefined, message);
        this.config = config;
    }
}
exports.GitConstructError = GitConstructError;
//# sourceMappingURL=git-construct-error.js.map
});

var gitPluginError = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitPluginError = void 0;

class GitPluginError extends gitError.GitError {
    constructor(task, plugin, message) {
        super(task, message);
        this.task = task;
        this.plugin = plugin;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.GitPluginError = GitPluginError;
//# sourceMappingURL=git-plugin-error.js.map
});

var taskConfigurationError = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskConfigurationError = void 0;

/**
 * The `TaskConfigurationError` is thrown when a command was incorrectly
 * configured. An error of this kind means that no attempt was made to
 * run your command through the underlying `git` binary.
 *
 * Check the `.message` property for more detail on why your configuration
 * resulted in an error.
 */
class TaskConfigurationError extends gitError.GitError {
    constructor(message) {
        super(undefined, message);
    }
}
exports.TaskConfigurationError = TaskConfigurationError;
//# sourceMappingURL=task-configuration-error.js.map
});

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

var ms = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = ms;
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

var common = setup;

var browser = createCommonjsModule(function (module, exports) {
/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = common(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};
});

var hasFlag = (flag, argv = process.argv) => {
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const position = argv.indexOf(prefix + flag);
	const terminatorPosition = argv.indexOf('--');
	return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};

const {env} = process;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false') ||
	hasFlag('color=never')) {
	forceColor = 0;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = 1;
}

if ('FORCE_COLOR' in env) {
	if (env.FORCE_COLOR === 'true') {
		forceColor = 1;
	} else if (env.FORCE_COLOR === 'false') {
		forceColor = 0;
	} else {
		forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
	}
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(haveStream, streamIsTTY) {
	if (forceColor === 0) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (haveStream && !streamIsTTY && forceColor === undefined) {
		return 0;
	}

	const min = forceColor || 0;

	if (env.TERM === 'dumb') {
		return min;
	}

	if (process.platform === 'win32') {
		// Windows 10 build 10586 is the first Windows release that supports 256 colors.
		// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
		const osRelease = os__default['default'].release().split('.');
		if (
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream, stream && stream.isTTY);
	return translateLevel(level);
}

var supportsColor_1 = {
	supportsColor: getSupportLevel,
	stdout: translateLevel(supportsColor(true, tty__default['default'].isatty(1))),
	stderr: translateLevel(supportsColor(true, tty__default['default'].isatty(2)))
};

var node = createCommonjsModule(function (module, exports) {
/**
 * Module dependencies.
 */




/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util__default['default'].deprecate(
	() => {},
	'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
);

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = supportsColor_1;

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty__default['default'].isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util__default['default'].format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = common(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util__default['default'].inspect(v, this.inspectOpts)
		.split('\n')
		.map(str => str.trim())
		.join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util__default['default'].inspect(v, this.inspectOpts);
};
});

var src$2 = createCommonjsModule(function (module) {
/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
	module.exports = browser;
} else {
	module.exports = node;
}
});

var src$1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });

const debug_1 = __importDefault(src$2);
const log = debug_1.default('@kwsites/file-exists');
function check(path, isFile, isDirectory) {
    log(`checking %s`, path);
    try {
        const stat = fs_1__default['default'].statSync(path);
        if (stat.isFile() && isFile) {
            log(`[OK] path represents a file`);
            return true;
        }
        if (stat.isDirectory() && isDirectory) {
            log(`[OK] path represents a directory`);
            return true;
        }
        log(`[FAIL] path represents something other than a file or directory`);
        return false;
    }
    catch (e) {
        if (e.code === 'ENOENT') {
            log(`[FAIL] path is not accessible: %o`, e);
            return false;
        }
        log(`[FATAL] %o`, e);
        throw e;
    }
}
/**
 * Synchronous validation of a path existing either as a file or as a directory.
 *
 * @param {string} path The path to check
 * @param {number} type One or both of the exported numeric constants
 */
function exists(path, type = exports.READABLE) {
    return check(path, (type & exports.FILE) > 0, (type & exports.FOLDER) > 0);
}
exports.exists = exists;
/**
 * Constant representing a file
 */
exports.FILE = 1;
/**
 * Constant representing a folder
 */
exports.FOLDER = 2;
/**
 * Constant representing either a file or a folder
 */
exports.READABLE = exports.FILE + exports.FOLDER;
//# sourceMappingURL=index.js.map
});

var dist$1 = createCommonjsModule(function (module, exports) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(src$1);
//# sourceMappingURL=index.js.map
});

var util = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferToString = exports.prefixedArray = exports.asNumber = exports.asStringArray = exports.asArray = exports.objectToString = exports.remove = exports.including = exports.append = exports.folderExists = exports.forEachLineWithContent = exports.toLinesWithContent = exports.last = exports.first = exports.splitOn = exports.isUserFunction = exports.asFunction = exports.NOOP = void 0;

const NOOP = () => {
};
exports.NOOP = NOOP;
/**
 * Returns either the source argument when it is a `Function`, or the default
 * `NOOP` function constant
 */
function asFunction(source) {
    return typeof source === 'function' ? source : exports.NOOP;
}
exports.asFunction = asFunction;
/**
 * Determines whether the supplied argument is both a function, and is not
 * the `NOOP` function.
 */
function isUserFunction(source) {
    return (typeof source === 'function' && source !== exports.NOOP);
}
exports.isUserFunction = isUserFunction;
function splitOn(input, char) {
    const index = input.indexOf(char);
    if (index <= 0) {
        return [input, ''];
    }
    return [
        input.substr(0, index),
        input.substr(index + 1),
    ];
}
exports.splitOn = splitOn;
function first(input, offset = 0) {
    return isArrayLike(input) && input.length > offset ? input[offset] : undefined;
}
exports.first = first;
function last(input, offset = 0) {
    if (isArrayLike(input) && input.length > offset) {
        return input[input.length - 1 - offset];
    }
}
exports.last = last;
function isArrayLike(input) {
    return !!(input && typeof input.length === 'number');
}
function toLinesWithContent(input, trimmed = true, separator = '\n') {
    return input.split(separator)
        .reduce((output, line) => {
        const lineContent = trimmed ? line.trim() : line;
        if (lineContent) {
            output.push(lineContent);
        }
        return output;
    }, []);
}
exports.toLinesWithContent = toLinesWithContent;
function forEachLineWithContent(input, callback) {
    return toLinesWithContent(input, true).map(line => callback(line));
}
exports.forEachLineWithContent = forEachLineWithContent;
function folderExists(path) {
    return dist$1.exists(path, dist$1.FOLDER);
}
exports.folderExists = folderExists;
/**
 * Adds `item` into the `target` `Array` or `Set` when it is not already present and returns the `item`.
 */
function append(target, item) {
    if (Array.isArray(target)) {
        if (!target.includes(item)) {
            target.push(item);
        }
    }
    else {
        target.add(item);
    }
    return item;
}
exports.append = append;
/**
 * Adds `item` into the `target` `Array` when it is not already present and returns the `target`.
 */
function including(target, item) {
    if (Array.isArray(target) && !target.includes(item)) {
        target.push(item);
    }
    return target;
}
exports.including = including;
function remove(target, item) {
    if (Array.isArray(target)) {
        const index = target.indexOf(item);
        if (index >= 0) {
            target.splice(index, 1);
        }
    }
    else {
        target.delete(item);
    }
    return item;
}
exports.remove = remove;
exports.objectToString = Object.prototype.toString.call.bind(Object.prototype.toString);
function asArray(source) {
    return Array.isArray(source) ? source : [source];
}
exports.asArray = asArray;
function asStringArray(source) {
    return asArray(source).map(String);
}
exports.asStringArray = asStringArray;
function asNumber(source, onNaN = 0) {
    if (source == null) {
        return onNaN;
    }
    const num = parseInt(source, 10);
    return isNaN(num) ? onNaN : num;
}
exports.asNumber = asNumber;
function prefixedArray(input, prefix) {
    const output = [];
    for (let i = 0, max = input.length; i < max; i++) {
        output.push(prefix, input[i]);
    }
    return output;
}
exports.prefixedArray = prefixedArray;
function bufferToString(input) {
    return (Array.isArray(input) ? Buffer.concat(input) : input).toString('utf-8');
}
exports.bufferToString = bufferToString;
//# sourceMappingURL=util.js.map
});

var argumentFilters = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterHasLength = exports.filterFunction = exports.filterPlainObject = exports.filterStringOrStringArray = exports.filterStringArray = exports.filterString = exports.filterPrimitives = exports.filterArray = exports.filterType = void 0;

function filterType(input, filter, def) {
    if (filter(input)) {
        return input;
    }
    return (arguments.length > 2) ? def : undefined;
}
exports.filterType = filterType;
const filterArray = (input) => {
    return Array.isArray(input);
};
exports.filterArray = filterArray;
function filterPrimitives(input, omit) {
    return /number|string|boolean/.test(typeof input) && (!omit || !omit.includes((typeof input)));
}
exports.filterPrimitives = filterPrimitives;
const filterString = (input) => {
    return typeof input === 'string';
};
exports.filterString = filterString;
const filterStringArray = (input) => {
    return Array.isArray(input) && input.every(exports.filterString);
};
exports.filterStringArray = filterStringArray;
const filterStringOrStringArray = (input) => {
    return exports.filterString(input) || (Array.isArray(input) && input.every(exports.filterString));
};
exports.filterStringOrStringArray = filterStringOrStringArray;
function filterPlainObject(input) {
    return !!input && util.objectToString(input) === '[object Object]';
}
exports.filterPlainObject = filterPlainObject;
function filterFunction(input) {
    return typeof input === 'function';
}
exports.filterFunction = filterFunction;
const filterHasLength = (input) => {
    if (input == null || 'number|boolean|function'.includes(typeof input)) {
        return false;
    }
    return Array.isArray(input) || typeof input === 'string' || typeof input.length === 'number';
};
exports.filterHasLength = filterHasLength;
//# sourceMappingURL=argument-filters.js.map
});

var exitCodes = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExitCodes = void 0;
(function (ExitCodes) {
    ExitCodes[ExitCodes["SUCCESS"] = 0] = "SUCCESS";
    ExitCodes[ExitCodes["ERROR"] = 1] = "ERROR";
    ExitCodes[ExitCodes["UNCLEAN"] = 128] = "UNCLEAN";
})(exports.ExitCodes || (exports.ExitCodes = {}));
//# sourceMappingURL=exit-codes.js.map
});

var gitOutputStreams = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitOutputStreams = void 0;
class GitOutputStreams {
    constructor(stdOut, stdErr) {
        this.stdOut = stdOut;
        this.stdErr = stdErr;
    }
    asStrings() {
        return new GitOutputStreams(this.stdOut.toString('utf8'), this.stdErr.toString('utf8'));
    }
}
exports.GitOutputStreams = GitOutputStreams;
//# sourceMappingURL=git-output-streams.js.map
});

var lineParser = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteLineParser = exports.LineParser = void 0;
class LineParser {
    constructor(regExp, useMatches) {
        this.matches = [];
        this.parse = (line, target) => {
            this.resetMatches();
            if (!this._regExp.every((reg, index) => this.addMatch(reg, index, line(index)))) {
                return false;
            }
            return this.useMatches(target, this.prepareMatches()) !== false;
        };
        this._regExp = Array.isArray(regExp) ? regExp : [regExp];
        if (useMatches) {
            this.useMatches = useMatches;
        }
    }
    // @ts-ignore
    useMatches(target, match) {
        throw new Error(`LineParser:useMatches not implemented`);
    }
    resetMatches() {
        this.matches.length = 0;
    }
    prepareMatches() {
        return this.matches;
    }
    addMatch(reg, index, line) {
        const matched = line && reg.exec(line);
        if (matched) {
            this.pushMatch(index, matched);
        }
        return !!matched;
    }
    pushMatch(_index, matched) {
        this.matches.push(...matched.slice(1));
    }
}
exports.LineParser = LineParser;
class RemoteLineParser extends LineParser {
    addMatch(reg, index, line) {
        return /^remote:\s/.test(String(line)) && super.addMatch(reg, index, line);
    }
    pushMatch(index, matched) {
        if (index > 0 || matched.length > 1) {
            super.pushMatch(index, matched);
        }
    }
}
exports.RemoteLineParser = RemoteLineParser;
//# sourceMappingURL=line-parser.js.map
});

var simpleGitOptions = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInstanceConfig = void 0;
const defaultOptions = {
    binary: 'git',
    maxConcurrentProcesses: 5,
    config: [],
};
function createInstanceConfig(...options) {
    const baseDir = process.cwd();
    const config = Object.assign(Object.assign({ baseDir }, defaultOptions), ...(options.filter(o => typeof o === 'object' && o)));
    config.baseDir = config.baseDir || baseDir;
    return config;
}
exports.createInstanceConfig = createInstanceConfig;
//# sourceMappingURL=simple-git-options.js.map
});

var taskOptions = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.trailingFunctionArgument = exports.trailingOptionsArgument = exports.getTrailingOptions = exports.appendTaskOptions = void 0;


function appendTaskOptions(options, commands = []) {
    if (!argumentFilters.filterPlainObject(options)) {
        return commands;
    }
    return Object.keys(options).reduce((commands, key) => {
        const value = options[key];
        if (argumentFilters.filterPrimitives(value, ['boolean'])) {
            commands.push(key + '=' + value);
        }
        else {
            commands.push(key);
        }
        return commands;
    }, commands);
}
exports.appendTaskOptions = appendTaskOptions;
function getTrailingOptions(args, initialPrimitive = 0, objectOnly = false) {
    const command = [];
    for (let i = 0, max = initialPrimitive < 0 ? args.length : initialPrimitive; i < max; i++) {
        if ('string|number'.includes(typeof args[i])) {
            command.push(String(args[i]));
        }
    }
    appendTaskOptions(trailingOptionsArgument(args), command);
    if (!objectOnly) {
        command.push(...trailingArrayArgument(args));
    }
    return command;
}
exports.getTrailingOptions = getTrailingOptions;
function trailingArrayArgument(args) {
    const hasTrailingCallback = typeof util.last(args) === 'function';
    return argumentFilters.filterType(util.last(args, hasTrailingCallback ? 1 : 0), argumentFilters.filterArray, []);
}
/**
 * Given any number of arguments, returns the trailing options argument, ignoring a trailing function argument
 * if there is one. When not found, the return value is null.
 */
function trailingOptionsArgument(args) {
    const hasTrailingCallback = argumentFilters.filterFunction(util.last(args));
    return argumentFilters.filterType(util.last(args, hasTrailingCallback ? 1 : 0), argumentFilters.filterPlainObject);
}
exports.trailingOptionsArgument = trailingOptionsArgument;
/**
 * Returns either the source argument when it is a `Function`, or the default
 * `NOOP` function constant
 */
function trailingFunctionArgument(args, includeNoop = true) {
    const callback = util.asFunction(util.last(args));
    return includeNoop || util.isUserFunction(callback) ? callback : undefined;
}
exports.trailingFunctionArgument = trailingFunctionArgument;
//# sourceMappingURL=task-options.js.map
});

var taskParser = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseStringResponse = exports.callTaskParser = void 0;

function callTaskParser(parser, streams) {
    return parser(streams.stdOut, streams.stdErr);
}
exports.callTaskParser = callTaskParser;
function parseStringResponse(result, parsers, ...texts) {
    texts.forEach(text => {
        for (let lines = util.toLinesWithContent(text), i = 0, max = lines.length; i < max; i++) {
            const line = (offset = 0) => {
                if ((i + offset) >= max) {
                    return;
                }
                return lines[i + offset];
            };
            parsers.some(({ parse }) => parse(line, result));
        }
    });
    return result;
}
exports.parseStringResponse = parseStringResponse;
//# sourceMappingURL=task-parser.js.map
});

var utils = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(argumentFilters, exports);
__exportStar(exitCodes, exports);
__exportStar(gitOutputStreams, exports);
__exportStar(lineParser, exports);
__exportStar(simpleGitOptions, exports);
__exportStar(taskOptions, exports);
__exportStar(taskParser, exports);
__exportStar(util, exports);
//# sourceMappingURL=index.js.map
});

var checkIsRepo = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsBareRepoTask = exports.checkIsRepoRootTask = exports.checkIsRepoTask = exports.CheckRepoActions = void 0;

var CheckRepoActions;
(function (CheckRepoActions) {
    CheckRepoActions["BARE"] = "bare";
    CheckRepoActions["IN_TREE"] = "tree";
    CheckRepoActions["IS_REPO_ROOT"] = "root";
})(CheckRepoActions = exports.CheckRepoActions || (exports.CheckRepoActions = {}));
const onError = ({ exitCode }, error, done, fail) => {
    if (exitCode === utils.ExitCodes.UNCLEAN && isNotRepoMessage(error)) {
        return done(Buffer.from('false'));
    }
    fail(error);
};
const parser = (text) => {
    return text.trim() === 'true';
};
function checkIsRepoTask(action) {
    switch (action) {
        case CheckRepoActions.BARE:
            return checkIsBareRepoTask();
        case CheckRepoActions.IS_REPO_ROOT:
            return checkIsRepoRootTask();
    }
    const commands = ['rev-parse', '--is-inside-work-tree'];
    return {
        commands,
        format: 'utf-8',
        onError,
        parser,
    };
}
exports.checkIsRepoTask = checkIsRepoTask;
function checkIsRepoRootTask() {
    const commands = ['rev-parse', '--git-dir'];
    return {
        commands,
        format: 'utf-8',
        onError,
        parser(path) {
            return /^\.(git)?$/.test(path.trim());
        },
    };
}
exports.checkIsRepoRootTask = checkIsRepoRootTask;
function checkIsBareRepoTask() {
    const commands = ['rev-parse', '--is-bare-repository'];
    return {
        commands,
        format: 'utf-8',
        onError,
        parser,
    };
}
exports.checkIsBareRepoTask = checkIsBareRepoTask;
function isNotRepoMessage(error) {
    return /(Not a git repository|Kein Git-Repository)/i.test(String(error));
}
//# sourceMappingURL=check-is-repo.js.map
});

var CleanSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanSummaryParser = exports.CleanResponse = void 0;

class CleanResponse {
    constructor(dryRun) {
        this.dryRun = dryRun;
        this.paths = [];
        this.files = [];
        this.folders = [];
    }
}
exports.CleanResponse = CleanResponse;
const removalRegexp = /^[a-z]+\s*/i;
const dryRunRemovalRegexp = /^[a-z]+\s+[a-z]+\s*/i;
const isFolderRegexp = /\/$/;
function cleanSummaryParser(dryRun, text) {
    const summary = new CleanResponse(dryRun);
    const regexp = dryRun ? dryRunRemovalRegexp : removalRegexp;
    utils.toLinesWithContent(text).forEach(line => {
        const removed = line.replace(regexp, '');
        summary.paths.push(removed);
        (isFolderRegexp.test(removed) ? summary.folders : summary.files).push(removed);
    });
    return summary;
}
exports.cleanSummaryParser = cleanSummaryParser;
//# sourceMappingURL=CleanSummary.js.map
});

var task = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyTask = exports.isBufferTask = exports.straightThroughBufferTask = exports.straightThroughStringTask = exports.configurationErrorTask = exports.adhocExecTask = exports.EMPTY_COMMANDS = void 0;

exports.EMPTY_COMMANDS = [];
function adhocExecTask(parser) {
    return {
        commands: exports.EMPTY_COMMANDS,
        format: 'utf-8',
        parser,
    };
}
exports.adhocExecTask = adhocExecTask;
function configurationErrorTask(error) {
    return {
        commands: exports.EMPTY_COMMANDS,
        format: 'utf-8',
        parser() {
            throw typeof error === 'string' ? new taskConfigurationError.TaskConfigurationError(error) : error;
        }
    };
}
exports.configurationErrorTask = configurationErrorTask;
function straightThroughStringTask(commands, trimmed = false) {
    return {
        commands,
        format: 'utf-8',
        parser(text) {
            return trimmed ? String(text).trim() : text;
        },
    };
}
exports.straightThroughStringTask = straightThroughStringTask;
function straightThroughBufferTask(commands) {
    return {
        commands,
        format: 'buffer',
        parser(buffer) {
            return buffer;
        },
    };
}
exports.straightThroughBufferTask = straightThroughBufferTask;
function isBufferTask(task) {
    return task.format === 'buffer';
}
exports.isBufferTask = isBufferTask;
function isEmptyTask(task) {
    return !task.commands.length;
}
exports.isEmptyTask = isEmptyTask;
//# sourceMappingURL=task.js.map
});

var clean = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCleanOptionsArray = exports.cleanTask = exports.cleanWithOptionsTask = exports.CleanOptions = exports.CONFIG_ERROR_UNKNOWN_OPTION = exports.CONFIG_ERROR_MODE_REQUIRED = exports.CONFIG_ERROR_INTERACTIVE_MODE = void 0;



exports.CONFIG_ERROR_INTERACTIVE_MODE = 'Git clean interactive mode is not supported';
exports.CONFIG_ERROR_MODE_REQUIRED = 'Git clean mode parameter ("n" or "f") is required';
exports.CONFIG_ERROR_UNKNOWN_OPTION = 'Git clean unknown option found in: ';
/**
 * All supported option switches available for use in a `git.clean` operation
 */
var CleanOptions;
(function (CleanOptions) {
    CleanOptions["DRY_RUN"] = "n";
    CleanOptions["FORCE"] = "f";
    CleanOptions["IGNORED_INCLUDED"] = "x";
    CleanOptions["IGNORED_ONLY"] = "X";
    CleanOptions["EXCLUDING"] = "e";
    CleanOptions["QUIET"] = "q";
    CleanOptions["RECURSIVE"] = "d";
})(CleanOptions = exports.CleanOptions || (exports.CleanOptions = {}));
const CleanOptionValues = new Set(['i', ...utils.asStringArray(Object.values(CleanOptions))]);
function cleanWithOptionsTask(mode, customArgs) {
    const { cleanMode, options, valid } = getCleanOptions(mode);
    if (!cleanMode) {
        return task.configurationErrorTask(exports.CONFIG_ERROR_MODE_REQUIRED);
    }
    if (!valid.options) {
        return task.configurationErrorTask(exports.CONFIG_ERROR_UNKNOWN_OPTION + JSON.stringify(mode));
    }
    options.push(...customArgs);
    if (options.some(isInteractiveMode)) {
        return task.configurationErrorTask(exports.CONFIG_ERROR_INTERACTIVE_MODE);
    }
    return cleanTask(cleanMode, options);
}
exports.cleanWithOptionsTask = cleanWithOptionsTask;
function cleanTask(mode, customArgs) {
    const commands = ['clean', `-${mode}`, ...customArgs];
    return {
        commands,
        format: 'utf-8',
        parser(text) {
            return CleanSummary.cleanSummaryParser(mode === CleanOptions.DRY_RUN, text);
        }
    };
}
exports.cleanTask = cleanTask;
function isCleanOptionsArray(input) {
    return Array.isArray(input) && input.every(test => CleanOptionValues.has(test));
}
exports.isCleanOptionsArray = isCleanOptionsArray;
function getCleanOptions(input) {
    let cleanMode;
    let options = [];
    let valid = { cleanMode: false, options: true };
    input.replace(/[^a-z]i/g, '').split('').forEach(char => {
        if (isCleanMode(char)) {
            cleanMode = char;
            valid.cleanMode = true;
        }
        else {
            valid.options = valid.options && isKnownOption(options[options.length] = (`-${char}`));
        }
    });
    return {
        cleanMode,
        options,
        valid,
    };
}
function isCleanMode(cleanMode) {
    return cleanMode === CleanOptions.FORCE || cleanMode === CleanOptions.DRY_RUN;
}
function isKnownOption(option) {
    return /^-[a-z]$/i.test(option) && CleanOptionValues.has(option.charAt(1));
}
function isInteractiveMode(option) {
    if (/^-[^\-]/.test(option)) {
        return option.indexOf('i') > 0;
    }
    return option === '--interactive';
}
//# sourceMappingURL=clean.js.map
});

var reset = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResetMode = exports.resetTask = exports.ResetMode = void 0;

var ResetMode;
(function (ResetMode) {
    ResetMode["MIXED"] = "mixed";
    ResetMode["SOFT"] = "soft";
    ResetMode["HARD"] = "hard";
    ResetMode["MERGE"] = "merge";
    ResetMode["KEEP"] = "keep";
})(ResetMode = exports.ResetMode || (exports.ResetMode = {}));
const ResetModes = Array.from(Object.values(ResetMode));
function resetTask(mode, customArgs) {
    const commands = ['reset'];
    if (isValidResetMode(mode)) {
        commands.push(`--${mode}`);
    }
    commands.push(...customArgs);
    return task.straightThroughStringTask(commands);
}
exports.resetTask = resetTask;
function getResetMode(mode) {
    if (isValidResetMode(mode)) {
        return mode;
    }
    switch (typeof mode) {
        case 'string':
        case 'undefined':
            return ResetMode.SOFT;
    }
    return;
}
exports.getResetMode = getResetMode;
function isValidResetMode(mode) {
    return ResetModes.includes(mode);
}
//# sourceMappingURL=reset.js.map
});

var api_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });








const api = {
    CheckRepoActions: checkIsRepo.CheckRepoActions,
    CleanOptions: clean.CleanOptions,
    GitConstructError: gitConstructError.GitConstructError,
    GitError: gitError.GitError,
    GitPluginError: gitPluginError.GitPluginError,
    GitResponseError: gitResponseError.GitResponseError,
    ResetMode: reset.ResetMode,
    TaskConfigurationError: taskConfigurationError.TaskConfigurationError,
};
exports.default = api;
//# sourceMappingURL=api.js.map
});

var commandConfigPrefixingPlugin_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandConfigPrefixingPlugin = void 0;

function commandConfigPrefixingPlugin(configuration) {
    const prefix = utils.prefixedArray(configuration, '-c');
    return {
        type: 'spawn.args',
        action(data) {
            return [...prefix, ...data];
        },
    };
}
exports.commandConfigPrefixingPlugin = commandConfigPrefixingPlugin;
//# sourceMappingURL=command-config-prefixing-plugin.js.map
});

var errorDetection_plugin = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorDetectionPlugin = exports.errorDetectionHandler = void 0;

function isTaskError(result) {
    return !!(result.exitCode && result.stdErr.length);
}
function getErrorMessage(result) {
    return Buffer.concat([...result.stdOut, ...result.stdErr]);
}
function errorDetectionHandler(overwrite = false, isError = isTaskError, errorMessage = getErrorMessage) {
    return (error, result) => {
        if ((!overwrite && error) || !isError(result)) {
            return error;
        }
        return errorMessage(result);
    };
}
exports.errorDetectionHandler = errorDetectionHandler;
function errorDetectionPlugin(config) {
    return {
        type: 'task.error',
        action(data, context) {
            const error = config(data.error, {
                stdErr: context.stdErr,
                stdOut: context.stdOut,
                exitCode: context.exitCode
            });
            if (Buffer.isBuffer(error)) {
                return { error: new gitError.GitError(undefined, error.toString('utf-8')) };
            }
            return {
                error
            };
        },
    };
}
exports.errorDetectionPlugin = errorDetectionPlugin;
//# sourceMappingURL=error-detection.plugin.js.map
});

var pluginStore = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginStore = void 0;

class PluginStore {
    constructor() {
        this.plugins = new Set();
    }
    add(plugin) {
        const plugins = [];
        utils.asArray(plugin).forEach(plugin => plugin && this.plugins.add(utils.append(plugins, plugin)));
        return () => {
            plugins.forEach(plugin => this.plugins.delete(plugin));
        };
    }
    exec(type, data, context) {
        let output = data;
        const contextual = Object.freeze(Object.create(context));
        for (const plugin of this.plugins) {
            if (plugin.type === type) {
                output = plugin.action(output, contextual);
            }
        }
        return output;
    }
}
exports.PluginStore = PluginStore;
//# sourceMappingURL=plugin-store.js.map
});

var progressMonitorPlugin_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.progressMonitorPlugin = void 0;

function progressMonitorPlugin(progress) {
    const progressCommand = '--progress';
    const progressMethods = ['checkout', 'clone', 'fetch', 'pull', 'push'];
    const onProgress = {
        type: 'spawn.after',
        action(_data, context) {
            var _a;
            if (!context.commands.includes(progressCommand)) {
                return;
            }
            (_a = context.spawned.stderr) === null || _a === void 0 ? void 0 : _a.on('data', (chunk) => {
                const message = /^([a-zA-Z ]+):\s*(\d+)% \((\d+)\/(\d+)\)/.exec(chunk.toString('utf8'));
                if (!message) {
                    return;
                }
                progress({
                    method: context.method,
                    stage: progressEventStage(message[1]),
                    progress: utils.asNumber(message[2]),
                    processed: utils.asNumber(message[3]),
                    total: utils.asNumber(message[4]),
                });
            });
        }
    };
    const onArgs = {
        type: 'spawn.args',
        action(args, context) {
            if (!progressMethods.includes(context.method)) {
                return args;
            }
            return utils.including(args, progressCommand);
        }
    };
    return [onArgs, onProgress];
}
exports.progressMonitorPlugin = progressMonitorPlugin;
function progressEventStage(input) {
    return String(input.toLowerCase().split(' ', 1)) || 'unknown';
}
//# sourceMappingURL=progress-monitor-plugin.js.map
});

var simpleGitPlugin = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=simple-git-plugin.js.map
});

var timoutPlugin = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeoutPlugin = void 0;

function timeoutPlugin({ block }) {
    if (block > 0) {
        return {
            type: 'spawn.after',
            action(_data, context) {
                var _a, _b;
                let timeout;
                function wait() {
                    timeout && clearTimeout(timeout);
                    timeout = setTimeout(kill, block);
                }
                function stop() {
                    var _a, _b;
                    (_a = context.spawned.stdout) === null || _a === void 0 ? void 0 : _a.off('data', wait);
                    (_b = context.spawned.stderr) === null || _b === void 0 ? void 0 : _b.off('data', wait);
                    context.spawned.off('exit', stop);
                    context.spawned.off('close', stop);
                }
                function kill() {
                    stop();
                    context.kill(new gitPluginError.GitPluginError(undefined, 'timeout', `block timeout reached`));
                }
                (_a = context.spawned.stdout) === null || _a === void 0 ? void 0 : _a.on('data', wait);
                (_b = context.spawned.stderr) === null || _b === void 0 ? void 0 : _b.on('data', wait);
                context.spawned.on('exit', stop);
                context.spawned.on('close', stop);
                wait();
            }
        };
    }
}
exports.timeoutPlugin = timeoutPlugin;
//# sourceMappingURL=timout-plugin.js.map
});

var plugins = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(commandConfigPrefixingPlugin_1, exports);
__exportStar(errorDetection_plugin, exports);
__exportStar(pluginStore, exports);
__exportStar(progressMonitorPlugin_1, exports);
__exportStar(simpleGitPlugin, exports);
__exportStar(timoutPlugin, exports);
//# sourceMappingURL=index.js.map
});

var gitLogger = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitLogger = exports.createLogger = exports.log = void 0;


src$2.default.formatters.L = (value) => String(utils.filterHasLength(value) ? value.length : '-');
src$2.default.formatters.B = (value) => {
    if (Buffer.isBuffer(value)) {
        return value.toString('utf8');
    }
    return utils.objectToString(value);
};
/**
 * The shared debug logging instance
 */
exports.log = src$2.default('simple-git');
function prefixedLogger(to, prefix, forward) {
    if (!prefix || !String(prefix).replace(/\s*/, '')) {
        return !forward ? to : (message, ...args) => {
            to(message, ...args);
            forward(message, ...args);
        };
    }
    return (message, ...args) => {
        to(`%s ${message}`, prefix, ...args);
        if (forward) {
            forward(message, ...args);
        }
    };
}
function childLoggerName(name, childDebugger, { namespace: parentNamespace }) {
    if (typeof name === 'string') {
        return name;
    }
    const childNamespace = childDebugger && childDebugger.namespace || '';
    if (childNamespace.startsWith(parentNamespace)) {
        return childNamespace.substr(parentNamespace.length + 1);
    }
    return childNamespace || parentNamespace;
}
function createLogger(label, verbose, initialStep, infoDebugger = exports.log) {
    const labelPrefix = label && `[${label}]` || '';
    const spawned = [];
    const debugDebugger = (typeof verbose === 'string') ? infoDebugger.extend(verbose) : verbose;
    const key = childLoggerName(utils.filterType(verbose, utils.filterString), debugDebugger, infoDebugger);
    return step(initialStep);
    function child(name) {
        return utils.append(spawned, createLogger(label, debugDebugger && debugDebugger.extend(name) || name));
    }
    function sibling(name, initial) {
        return utils.append(spawned, createLogger(label, key.replace(/^[^:]+/, name), initial, infoDebugger));
    }
    function step(phase) {
        const stepPrefix = phase && `[${phase}]` || '';
        const debug = debugDebugger && prefixedLogger(debugDebugger, stepPrefix) || utils.NOOP;
        const info = prefixedLogger(infoDebugger, `${labelPrefix} ${stepPrefix}`, debug);
        return Object.assign(debugDebugger ? debug : info, {
            key,
            label,
            child,
            sibling,
            debug,
            info,
            step,
        });
    }
}
exports.createLogger = createLogger;
/**
 * The `GitLogger` is used by the main `SimpleGit` runner to handle logging
 * any warnings or errors.
 */
class GitLogger {
    constructor(_out = exports.log) {
        this._out = _out;
        this.error = prefixedLogger(_out, '[ERROR]');
        this.warn = prefixedLogger(_out, '[WARN]');
    }
    silent(silence = false) {
        if (silence !== this._out.enabled) {
            return;
        }
        const { namespace } = this._out;
        const env = (process.env.DEBUG || '').split(',').filter(s => !!s);
        const hasOn = env.includes(namespace);
        const hasOff = env.includes(`-${namespace}`);
        // enabling the log
        if (!silence) {
            if (hasOff) {
                utils.remove(env, `-${namespace}`);
            }
            else {
                env.push(namespace);
            }
        }
        else {
            if (hasOn) {
                utils.remove(env, namespace);
            }
            else {
                env.push(`-${namespace}`);
            }
        }
        src$2.default.enable(env.join(','));
    }
}
exports.GitLogger = GitLogger;
//# sourceMappingURL=git-logger.js.map
});

var tasksPendingQueue = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksPendingQueue = void 0;


class TasksPendingQueue {
    constructor(logLabel = 'GitExecutor') {
        this.logLabel = logLabel;
        this._queue = new Map();
    }
    withProgress(task) {
        return this._queue.get(task);
    }
    createProgress(task) {
        const name = TasksPendingQueue.getName(task.commands[0]);
        const logger = gitLogger.createLogger(this.logLabel, name);
        return {
            task,
            logger,
            name,
        };
    }
    push(task) {
        const progress = this.createProgress(task);
        progress.logger('Adding task to the queue, commands = %o', task.commands);
        this._queue.set(task, progress);
        return progress;
    }
    fatal(err) {
        for (const [task, { logger }] of Array.from(this._queue.entries())) {
            if (task === err.task) {
                logger.info(`Failed %o`, err);
                logger(`Fatal exception, any as-yet un-started tasks run through this executor will not be attempted`);
            }
            else {
                logger.info(`A fatal exception occurred in a previous task, the queue has been purged: %o`, err.message);
            }
            this.complete(task);
        }
        if (this._queue.size !== 0) {
            throw new Error(`Queue size should be zero after fatal: ${this._queue.size}`);
        }
    }
    complete(task) {
        const progress = this.withProgress(task);
        if (progress) {
            this._queue.delete(task);
        }
    }
    attempt(task) {
        const progress = this.withProgress(task);
        if (!progress) {
            throw new gitError.GitError(undefined, 'TasksPendingQueue: attempt called for an unknown task');
        }
        progress.logger('Starting task');
        return progress;
    }
    static getName(name = 'empty') {
        return `task:${name}:${++TasksPendingQueue.counter}`;
    }
}
exports.TasksPendingQueue = TasksPendingQueue;
TasksPendingQueue.counter = 0;
//# sourceMappingURL=tasks-pending-queue.js.map
});

var gitExecutorChain = createCommonjsModule(function (module, exports) {
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitExecutorChain = void 0;





class GitExecutorChain {
    constructor(_executor, _scheduler, _plugins) {
        this._executor = _executor;
        this._scheduler = _scheduler;
        this._plugins = _plugins;
        this._chain = Promise.resolve();
        this._queue = new tasksPendingQueue.TasksPendingQueue();
    }
    get binary() {
        return this._executor.binary;
    }
    get cwd() {
        return this._executor.cwd;
    }
    get env() {
        return this._executor.env;
    }
    get outputHandler() {
        return this._executor.outputHandler;
    }
    chain() {
        return this;
    }
    push(task) {
        this._queue.push(task);
        return this._chain = this._chain.then(() => this.attemptTask(task));
    }
    attemptTask(task$1) {
        return __awaiter(this, void 0, void 0, function* () {
            const onScheduleComplete = yield this._scheduler.next();
            const onQueueComplete = () => this._queue.complete(task$1);
            try {
                const { logger } = this._queue.attempt(task$1);
                return yield (task.isEmptyTask(task$1)
                    ? this.attemptEmptyTask(task$1, logger)
                    : this.attemptRemoteTask(task$1, logger));
            }
            catch (e) {
                throw this.onFatalException(task$1, e);
            }
            finally {
                onQueueComplete();
                onScheduleComplete();
            }
        });
    }
    onFatalException(task, e) {
        const gitError$1 = (e instanceof gitError.GitError) ? Object.assign(e, { task }) : new gitError.GitError(task, e && String(e));
        this._chain = Promise.resolve();
        this._queue.fatal(gitError$1);
        return gitError$1;
    }
    attemptRemoteTask(task$1, logger) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = this._plugins.exec('spawn.args', [...task$1.commands], pluginContext(task$1, task$1.commands));
            const raw = yield this.gitResponse(task$1, this.binary, args, this.outputHandler, logger.step('SPAWN'));
            const outputStreams = yield this.handleTaskData(task$1, args, raw, logger.step('HANDLE'));
            logger(`passing response to task's parser as a %s`, task$1.format);
            if (task.isBufferTask(task$1)) {
                return utils.callTaskParser(task$1.parser, outputStreams);
            }
            return utils.callTaskParser(task$1.parser, outputStreams.asStrings());
        });
    }
    attemptEmptyTask(task, logger) {
        return __awaiter(this, void 0, void 0, function* () {
            logger(`empty task bypassing child process to call to task's parser`);
            return task.parser();
        });
    }
    handleTaskData(task, args, result, logger) {
        const { exitCode, rejection, stdOut, stdErr } = result;
        return new Promise((done, fail) => {
            logger(`Preparing to handle process response exitCode=%d stdOut=`, exitCode);
            const { error } = this._plugins.exec('task.error', { error: rejection }, Object.assign(Object.assign({}, pluginContext(task, args)), result));
            if (error && task.onError) {
                logger.info(`exitCode=%s handling with custom error handler`);
                return task.onError(result, error, (newStdOut) => {
                    logger.info(`custom error handler treated as success`);
                    logger(`custom error returned a %s`, utils.objectToString(newStdOut));
                    done(new utils.GitOutputStreams(Array.isArray(newStdOut) ? Buffer.concat(newStdOut) : newStdOut, Buffer.concat(stdErr)));
                }, fail);
            }
            if (error) {
                logger.info(`handling as error: exitCode=%s stdErr=%s rejection=%o`, exitCode, stdErr.length, rejection);
                return fail(error);
            }
            logger.info(`retrieving task output complete`);
            done(new utils.GitOutputStreams(Buffer.concat(stdOut), Buffer.concat(stdErr)));
        });
    }
    gitResponse(task, command, args, outputHandler, logger) {
        return __awaiter(this, void 0, void 0, function* () {
            const outputLogger = logger.sibling('output');
            const spawnOptions = {
                cwd: this.cwd,
                env: this.env,
                windowsHide: true,
            };
            return new Promise((done) => {
                const stdOut = [];
                const stdErr = [];
                let attempted = false;
                let rejection;
                function attemptClose(exitCode, event = 'retry') {
                    // closing when there is content, terminate immediately
                    if (attempted || stdErr.length || stdOut.length) {
                        logger.info(`exitCode=%s event=%s rejection=%o`, exitCode, event, rejection);
                        done({
                            stdOut,
                            stdErr,
                            exitCode,
                            rejection,
                        });
                        attempted = true;
                    }
                    // first attempt at closing but no content yet, wait briefly for the close/exit that may follow
                    if (!attempted) {
                        attempted = true;
                        setTimeout(() => attemptClose(exitCode, 'deferred'), 50);
                        logger('received %s event before content on stdOut/stdErr', event);
                    }
                }
                logger.info(`%s %o`, command, args);
                logger('%O', spawnOptions);
                const spawned = child_process_1__default['default'].spawn(command, args, spawnOptions);
                spawned.stdout.on('data', onDataReceived(stdOut, 'stdOut', logger, outputLogger.step('stdOut')));
                spawned.stderr.on('data', onDataReceived(stdErr, 'stdErr', logger, outputLogger.step('stdErr')));
                spawned.on('error', onErrorReceived(stdErr, logger));
                spawned.on('close', (code) => attemptClose(code, 'close'));
                spawned.on('exit', (code) => attemptClose(code, 'exit'));
                if (outputHandler) {
                    logger(`Passing child process stdOut/stdErr to custom outputHandler`);
                    outputHandler(command, spawned.stdout, spawned.stderr, [...args]);
                }
                this._plugins.exec('spawn.after', undefined, Object.assign(Object.assign({}, pluginContext(task, args)), { spawned, kill(reason) {
                        if (spawned.killed) {
                            return;
                        }
                        rejection = reason;
                        spawned.kill('SIGINT');
                    } }));
            });
        });
    }
}
exports.GitExecutorChain = GitExecutorChain;
function pluginContext(task, commands) {
    return {
        method: utils.first(task.commands) || '',
        commands,
    };
}
function onErrorReceived(target, logger) {
    return (err) => {
        logger(`[ERROR] child process exception %o`, err);
        target.push(Buffer.from(String(err.stack), 'ascii'));
    };
}
function onDataReceived(target, name, logger, output) {
    return (buffer) => {
        logger(`%s received %L bytes`, name, buffer);
        output(`%B`, buffer);
        target.push(buffer);
    };
}
//# sourceMappingURL=git-executor-chain.js.map
});

var gitExecutor = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitExecutor = void 0;

class GitExecutor {
    constructor(binary = 'git', cwd, _scheduler, _plugins) {
        this.binary = binary;
        this.cwd = cwd;
        this._scheduler = _scheduler;
        this._plugins = _plugins;
        this._chain = new gitExecutorChain.GitExecutorChain(this, this._scheduler, this._plugins);
    }
    chain() {
        return new gitExecutorChain.GitExecutorChain(this, this._scheduler, this._plugins);
    }
    push(task) {
        return this._chain.push(task);
    }
}
exports.GitExecutor = GitExecutor;
//# sourceMappingURL=git-executor.js.map
});

var taskCallback_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskCallback = void 0;


function taskCallback(task, response, callback = utils.NOOP) {
    const onSuccess = (data) => {
        callback(null, data);
    };
    const onError = (err) => {
        if ((err === null || err === void 0 ? void 0 : err.task) === task) {
            if (err instanceof gitResponseError.GitResponseError) {
                return callback(addDeprecationNoticeToError(err));
            }
            callback(err);
        }
    };
    response.then(onSuccess, onError);
}
exports.taskCallback = taskCallback;
function addDeprecationNoticeToError(err) {
    let log = (name) => {
        console.warn(`simple-git deprecation notice: accessing GitResponseError.${name} should be GitResponseError.git.${name}, this will no longer be available in version 3`);
        log = utils.NOOP;
    };
    return Object.create(err, Object.getOwnPropertyNames(err.git).reduce(descriptorReducer, {}));
    function descriptorReducer(all, name) {
        if (name in err) {
            return all;
        }
        all[name] = {
            enumerable: false,
            configurable: false,
            get() {
                log(name);
                return err.git[name];
            },
        };
        return all;
    }
}
//# sourceMappingURL=task-callback.js.map
});

var parseRemoteObjects = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.remoteMessagesObjectParsers = void 0;

function objectEnumerationResult(remoteMessages) {
    return (remoteMessages.objects = remoteMessages.objects || {
        compressing: 0,
        counting: 0,
        enumerating: 0,
        packReused: 0,
        reused: { count: 0, delta: 0 },
        total: { count: 0, delta: 0 }
    });
}
function asObjectCount(source) {
    const count = /^\s*(\d+)/.exec(source);
    const delta = /delta (\d+)/i.exec(source);
    return {
        count: utils.asNumber(count && count[1] || '0'),
        delta: utils.asNumber(delta && delta[1] || '0'),
    };
}
exports.remoteMessagesObjectParsers = [
    new utils.RemoteLineParser(/^remote:\s*(enumerating|counting|compressing) objects: (\d+),/i, (result, [action, count]) => {
        const key = action.toLowerCase();
        const enumeration = objectEnumerationResult(result.remoteMessages);
        Object.assign(enumeration, { [key]: utils.asNumber(count) });
    }),
    new utils.RemoteLineParser(/^remote:\s*(enumerating|counting|compressing) objects: \d+% \(\d+\/(\d+)\),/i, (result, [action, count]) => {
        const key = action.toLowerCase();
        const enumeration = objectEnumerationResult(result.remoteMessages);
        Object.assign(enumeration, { [key]: utils.asNumber(count) });
    }),
    new utils.RemoteLineParser(/total ([^,]+), reused ([^,]+), pack-reused (\d+)/i, (result, [total, reused, packReused]) => {
        const objects = objectEnumerationResult(result.remoteMessages);
        objects.total = asObjectCount(total);
        objects.reused = asObjectCount(reused);
        objects.packReused = utils.asNumber(packReused);
    }),
];
//# sourceMappingURL=parse-remote-objects.js.map
});

var parseRemoteMessages_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteMessageSummary = exports.parseRemoteMessages = void 0;


const parsers = [
    new utils.RemoteLineParser(/^remote:\s*(.+)$/, (result, [text]) => {
        result.remoteMessages.all.push(text.trim());
        return false;
    }),
    ...parseRemoteObjects.remoteMessagesObjectParsers,
    new utils.RemoteLineParser([/create a (?:pull|merge) request/i, /\s(https?:\/\/\S+)$/], (result, [pullRequestUrl]) => {
        result.remoteMessages.pullRequestUrl = pullRequestUrl;
    }),
    new utils.RemoteLineParser([/found (\d+) vulnerabilities.+\(([^)]+)\)/i, /\s(https?:\/\/\S+)$/], (result, [count, summary, url]) => {
        result.remoteMessages.vulnerabilities = {
            count: utils.asNumber(count),
            summary,
            url,
        };
    }),
];
function parseRemoteMessages(_stdOut, stdErr) {
    return utils.parseStringResponse({ remoteMessages: new RemoteMessageSummary() }, parsers, stdErr);
}
exports.parseRemoteMessages = parseRemoteMessages;
class RemoteMessageSummary {
    constructor() {
        this.all = [];
    }
}
exports.RemoteMessageSummary = RemoteMessageSummary;
//# sourceMappingURL=parse-remote-messages.js.map
});

var parsePush = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePushDetail = exports.parsePushResult = void 0;


function pushResultPushedItem(local, remote, status) {
    const deleted = status.includes('deleted');
    const tag = status.includes('tag') || /^refs\/tags/.test(local);
    const alreadyUpdated = !status.includes('new');
    return {
        deleted,
        tag,
        branch: !tag,
        new: !alreadyUpdated,
        alreadyUpdated,
        local,
        remote,
    };
}
const parsers = [
    new utils.LineParser(/^Pushing to (.+)$/, (result, [repo]) => {
        result.repo = repo;
    }),
    new utils.LineParser(/^updating local tracking ref '(.+)'/, (result, [local]) => {
        result.ref = Object.assign(Object.assign({}, (result.ref || {})), { local });
    }),
    new utils.LineParser(/^[*-=]\s+([^:]+):(\S+)\s+\[(.+)]$/, (result, [local, remote, type]) => {
        result.pushed.push(pushResultPushedItem(local, remote, type));
    }),
    new utils.LineParser(/^Branch '([^']+)' set up to track remote branch '([^']+)' from '([^']+)'/, (result, [local, remote, remoteName]) => {
        result.branch = Object.assign(Object.assign({}, (result.branch || {})), { local,
            remote,
            remoteName });
    }),
    new utils.LineParser(/^([^:]+):(\S+)\s+([a-z0-9]+)\.\.([a-z0-9]+)$/, (result, [local, remote, from, to]) => {
        result.update = {
            head: {
                local,
                remote,
            },
            hash: {
                from,
                to,
            },
        };
    }),
];
const parsePushResult = (stdOut, stdErr) => {
    const pushDetail = exports.parsePushDetail(stdOut, stdErr);
    const responseDetail = parseRemoteMessages_1.parseRemoteMessages(stdOut, stdErr);
    return Object.assign(Object.assign({}, pushDetail), responseDetail);
};
exports.parsePushResult = parsePushResult;
const parsePushDetail = (stdOut, stdErr) => {
    return utils.parseStringResponse({ pushed: [] }, parsers, stdOut, stdErr);
};
exports.parsePushDetail = parsePushDetail;
//# sourceMappingURL=parse-push.js.map
});

var push = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.pushTask = exports.pushTagsTask = void 0;


function pushTagsTask(ref = {}, customArgs) {
    utils.append(customArgs, '--tags');
    return pushTask(ref, customArgs);
}
exports.pushTagsTask = pushTagsTask;
function pushTask(ref = {}, customArgs) {
    const commands = ['push', ...customArgs];
    if (ref.branch) {
        commands.splice(1, 0, ref.branch);
    }
    if (ref.remote) {
        commands.splice(1, 0, ref.remote);
    }
    utils.remove(commands, '-v');
    utils.append(commands, '--verbose');
    utils.append(commands, '--porcelain');
    return {
        commands,
        format: 'utf-8',
        parser: parsePush.parsePushResult,
    };
}
exports.pushTask = pushTask;
//# sourceMappingURL=push.js.map
});

var simpleGitApi = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleGitApi = void 0;




class SimpleGitApi {
    constructor(_executor) {
        this._executor = _executor;
    }
    _runTask(task, then) {
        const chain = this._executor.chain();
        const promise = chain.push(task);
        if (then) {
            taskCallback_1.taskCallback(task, promise, then);
        }
        return Object.create(this, {
            then: { value: promise.then.bind(promise) },
            catch: { value: promise.catch.bind(promise) },
            _executor: { value: chain },
        });
    }
    add(files) {
        return this._runTask(task.straightThroughStringTask(['add', ...utils.asArray(files)]), utils.trailingFunctionArgument(arguments));
    }
    push() {
        const task = push.pushTask({
            remote: utils.filterType(arguments[0], utils.filterString),
            branch: utils.filterType(arguments[1], utils.filterString),
        }, utils.getTrailingOptions(arguments));
        return this._runTask(task, utils.trailingFunctionArgument(arguments));
    }
}
exports.SimpleGitApi = SimpleGitApi;
//# sourceMappingURL=simple-git-api.js.map
});

var dist = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDeferred = exports.deferred = void 0;
/**
 * Creates a new `DeferredPromise`
 *
 * ```typescript
 import {deferred} from '@kwsites/promise-deferred`;
 ```
 */
function deferred() {
    let done;
    let fail;
    let status = 'pending';
    const promise = new Promise((_done, _fail) => {
        done = _done;
        fail = _fail;
    });
    return {
        promise,
        done(result) {
            if (status === 'pending') {
                status = 'resolved';
                done(result);
            }
        },
        fail(error) {
            if (status === 'pending') {
                status = 'rejected';
                fail(error);
            }
        },
        get fulfilled() {
            return status !== 'pending';
        },
        get status() {
            return status;
        },
    };
}
exports.deferred = deferred;
/**
 * Alias of the exported `deferred` function, to help consumers wanting to use `deferred` as the
 * local variable name rather than the factory import name, without needing to rename on import.
 *
 * ```typescript
 import {createDeferred} from '@kwsites/promise-deferred`;
 ```
 */
exports.createDeferred = deferred;
/**
 * Default export allows use as:
 *
 * ```typescript
 import deferred from '@kwsites/promise-deferred`;
 ```
 */
exports.default = deferred;
//# sourceMappingURL=index.js.map
});

var scheduler = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scheduler = void 0;



const logger = gitLogger.createLogger('', 'scheduler');
const createScheduledTask = (() => {
    let id = 0;
    return () => {
        id++;
        const { promise, done } = dist.createDeferred();
        return {
            promise,
            done,
            id,
        };
    };
})();
class Scheduler {
    constructor(concurrency = 2) {
        this.concurrency = concurrency;
        this.pending = [];
        this.running = [];
        logger(`Constructed, concurrency=%s`, concurrency);
    }
    schedule() {
        if (!this.pending.length || this.running.length >= this.concurrency) {
            logger(`Schedule attempt ignored, pending=%s running=%s concurrency=%s`, this.pending.length, this.running.length, this.concurrency);
            return;
        }
        const task = utils.append(this.running, this.pending.shift());
        logger(`Attempting id=%s`, task.id);
        task.done(() => {
            logger(`Completing id=`, task.id);
            utils.remove(this.running, task);
            this.schedule();
        });
    }
    next() {
        const { promise, id } = utils.append(this.pending, createScheduledTask());
        logger(`Scheduling id=%s`, id);
        this.schedule();
        return promise;
    }
}
exports.Scheduler = Scheduler;
//# sourceMappingURL=scheduler.js.map
});

var applyPatch = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyPatchTask = void 0;

function applyPatchTask(patches, customArgs) {
    return task.straightThroughStringTask(['apply', ...customArgs, ...patches]);
}
exports.applyPatchTask = applyPatchTask;
//# sourceMappingURL=apply-patch.js.map
});

var BranchDeleteSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSingleBranchDeleteFailure = exports.branchDeletionFailure = exports.branchDeletionSuccess = exports.BranchDeletionBatch = void 0;
class BranchDeletionBatch {
    constructor() {
        this.all = [];
        this.branches = {};
        this.errors = [];
    }
    get success() {
        return !this.errors.length;
    }
}
exports.BranchDeletionBatch = BranchDeletionBatch;
function branchDeletionSuccess(branch, hash) {
    return {
        branch, hash, success: true,
    };
}
exports.branchDeletionSuccess = branchDeletionSuccess;
function branchDeletionFailure(branch) {
    return {
        branch, hash: null, success: false,
    };
}
exports.branchDeletionFailure = branchDeletionFailure;
function isSingleBranchDeleteFailure(test) {
    return test.success;
}
exports.isSingleBranchDeleteFailure = isSingleBranchDeleteFailure;
//# sourceMappingURL=BranchDeleteSummary.js.map
});

var parseBranchDelete = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasBranchDeletionError = exports.parseBranchDeletions = void 0;


const deleteSuccessRegex = /(\S+)\s+\(\S+\s([^)]+)\)/;
const deleteErrorRegex = /^error[^']+'([^']+)'/m;
const parsers = [
    new utils.LineParser(deleteSuccessRegex, (result, [branch, hash]) => {
        const deletion = BranchDeleteSummary.branchDeletionSuccess(branch, hash);
        result.all.push(deletion);
        result.branches[branch] = deletion;
    }),
    new utils.LineParser(deleteErrorRegex, (result, [branch]) => {
        const deletion = BranchDeleteSummary.branchDeletionFailure(branch);
        result.errors.push(deletion);
        result.all.push(deletion);
        result.branches[branch] = deletion;
    }),
];
const parseBranchDeletions = (stdOut, stdErr) => {
    return utils.parseStringResponse(new BranchDeleteSummary.BranchDeletionBatch(), parsers, stdOut, stdErr);
};
exports.parseBranchDeletions = parseBranchDeletions;
function hasBranchDeletionError(data, processExitCode) {
    return processExitCode === utils.ExitCodes.ERROR && deleteErrorRegex.test(data);
}
exports.hasBranchDeletionError = hasBranchDeletionError;
//# sourceMappingURL=parse-branch-delete.js.map
});

var BranchSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchSummaryResult = void 0;
class BranchSummaryResult {
    constructor() {
        this.all = [];
        this.branches = {};
        this.current = '';
        this.detached = false;
    }
    push(current, detached, name, commit, label) {
        if (current) {
            this.detached = detached;
            this.current = name;
        }
        this.all.push(name);
        this.branches[name] = {
            current: current,
            name: name,
            commit: commit,
            label: label
        };
    }
}
exports.BranchSummaryResult = BranchSummaryResult;
//# sourceMappingURL=BranchSummary.js.map
});

var parseBranch = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBranchSummary = void 0;


const parsers = [
    new utils.LineParser(/^(\*\s)?\((?:HEAD )?detached (?:from|at) (\S+)\)\s+([a-z0-9]+)\s(.*)$/, (result, [current, name, commit, label]) => {
        result.push(!!current, true, name, commit, label);
    }),
    new utils.LineParser(/^(\*\s)?(\S+)\s+([a-z0-9]+)\s(.*)$/s, (result, [current, name, commit, label]) => {
        result.push(!!current, false, name, commit, label);
    })
];
function parseBranchSummary(stdOut) {
    return utils.parseStringResponse(new BranchSummary.BranchSummaryResult(), parsers, stdOut);
}
exports.parseBranchSummary = parseBranchSummary;
//# sourceMappingURL=parse-branch.js.map
});

var branch = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBranchTask = exports.deleteBranchesTask = exports.branchLocalTask = exports.branchTask = exports.containsDeleteBranchCommand = void 0;




function containsDeleteBranchCommand(commands) {
    const deleteCommands = ['-d', '-D', '--delete'];
    return commands.some(command => deleteCommands.includes(command));
}
exports.containsDeleteBranchCommand = containsDeleteBranchCommand;
function branchTask(customArgs) {
    const isDelete = containsDeleteBranchCommand(customArgs);
    const commands = ['branch', ...customArgs];
    if (commands.length === 1) {
        commands.push('-a');
    }
    if (!commands.includes('-v')) {
        commands.splice(1, 0, '-v');
    }
    return {
        format: 'utf-8',
        commands,
        parser(stdOut, stdErr) {
            if (isDelete) {
                return parseBranchDelete.parseBranchDeletions(stdOut, stdErr).all[0];
            }
            return parseBranch.parseBranchSummary(stdOut);
        },
    };
}
exports.branchTask = branchTask;
function branchLocalTask() {
    const parser = parseBranch.parseBranchSummary;
    return {
        format: 'utf-8',
        commands: ['branch', '-v'],
        parser,
    };
}
exports.branchLocalTask = branchLocalTask;
function deleteBranchesTask(branches, forceDelete = false) {
    return {
        format: 'utf-8',
        commands: ['branch', '-v', forceDelete ? '-D' : '-d', ...branches],
        parser(stdOut, stdErr) {
            return parseBranchDelete.parseBranchDeletions(stdOut, stdErr);
        },
        onError({ exitCode, stdOut }, error, done, fail) {
            if (!parseBranchDelete.hasBranchDeletionError(String(error), exitCode)) {
                return fail(error);
            }
            done(stdOut);
        },
    };
}
exports.deleteBranchesTask = deleteBranchesTask;
function deleteBranchTask(branch, forceDelete = false) {
    const task = {
        format: 'utf-8',
        commands: ['branch', '-v', forceDelete ? '-D' : '-d', branch],
        parser(stdOut, stdErr) {
            return parseBranchDelete.parseBranchDeletions(stdOut, stdErr).branches[branch];
        },
        onError({ exitCode, stdErr, stdOut }, error, _, fail) {
            if (!parseBranchDelete.hasBranchDeletionError(String(error), exitCode)) {
                return fail(error);
            }
            throw new gitResponseError.GitResponseError(task.parser(utils.bufferToString(stdOut), utils.bufferToString(stdErr)), String(error));
        },
    };
    return task;
}
exports.deleteBranchTask = deleteBranchTask;
//# sourceMappingURL=branch.js.map
});

var CheckIgnore = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCheckIgnore = void 0;
/**
 * Parser for the `check-ignore` command - returns each file as a string array
 */
const parseCheckIgnore = (text) => {
    return text.split(/\n/g)
        .map(line => line.trim())
        .filter(file => !!file);
};
exports.parseCheckIgnore = parseCheckIgnore;
//# sourceMappingURL=CheckIgnore.js.map
});

var checkIgnore = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIgnoreTask = void 0;

function checkIgnoreTask(paths) {
    return {
        commands: ['check-ignore', ...paths],
        format: 'utf-8',
        parser: CheckIgnore.parseCheckIgnore,
    };
}
exports.checkIgnoreTask = checkIgnoreTask;
//# sourceMappingURL=check-ignore.js.map
});

var clone = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneMirrorTask = exports.cloneTask = void 0;


function cloneTask(repo, directory, customArgs) {
    const commands = ['clone', ...customArgs];
    if (typeof repo === 'string') {
        commands.push(repo);
    }
    if (typeof directory === 'string') {
        commands.push(directory);
    }
    return task.straightThroughStringTask(commands);
}
exports.cloneTask = cloneTask;
function cloneMirrorTask(repo, directory, customArgs) {
    utils.append(customArgs, '--mirror');
    return cloneTask(repo, directory, customArgs);
}
exports.cloneMirrorTask = cloneMirrorTask;
//# sourceMappingURL=clone.js.map
});

var ConfigList_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.configListParser = exports.ConfigList = void 0;

class ConfigList {
    constructor() {
        this.files = [];
        this.values = Object.create(null);
    }
    get all() {
        if (!this._all) {
            this._all = this.files.reduce((all, file) => {
                return Object.assign(all, this.values[file]);
            }, {});
        }
        return this._all;
    }
    addFile(file) {
        if (!(file in this.values)) {
            const latest = utils.last(this.files);
            this.values[file] = latest ? Object.create(this.values[latest]) : {};
            this.files.push(file);
        }
        return this.values[file];
    }
    addValue(file, key, value) {
        const values = this.addFile(file);
        if (!values.hasOwnProperty(key)) {
            values[key] = value;
        }
        else if (Array.isArray(values[key])) {
            values[key].push(value);
        }
        else {
            values[key] = [values[key], value];
        }
        this._all = undefined;
    }
}
exports.ConfigList = ConfigList;
function configListParser(text) {
    const config = new ConfigList();
    const lines = text.split('\0');
    for (let i = 0, max = lines.length - 1; i < max;) {
        const file = configFilePath(lines[i++]);
        const [key, value] = utils.splitOn(lines[i++], '\n');
        config.addValue(file, key, value);
    }
    return config;
}
exports.configListParser = configListParser;
function configFilePath(filePath) {
    return filePath.replace(/^(file):/, '');
}
//# sourceMappingURL=ConfigList.js.map
});

var config = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.listConfigTask = exports.addConfigTask = void 0;

function addConfigTask(key, value, append = false) {
    const commands = ['config', '--local'];
    if (append) {
        commands.push('--add');
    }
    commands.push(key, value);
    return {
        commands,
        format: 'utf-8',
        parser(text) {
            return text;
        }
    };
}
exports.addConfigTask = addConfigTask;
function listConfigTask() {
    return {
        commands: ['config', '--list', '--show-origin', '--null'],
        format: 'utf-8',
        parser(text) {
            return ConfigList_1.configListParser(text);
        },
    };
}
exports.listConfigTask = listConfigTask;
//# sourceMappingURL=config.js.map
});

var parseCommit = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCommitResult = void 0;

const parsers = [
    new utils.LineParser(/\[([^\s]+)( \([^)]+\))? ([^\]]+)/, (result, [branch, root, commit]) => {
        result.branch = branch;
        result.commit = commit;
        result.root = !!root;
    }),
    new utils.LineParser(/\s*Author:\s(.+)/i, (result, [author]) => {
        const parts = author.split('<');
        const email = parts.pop();
        if (!email || !email.includes('@')) {
            return;
        }
        result.author = {
            email: email.substr(0, email.length - 1),
            name: parts.join('<').trim()
        };
    }),
    new utils.LineParser(/(\d+)[^,]*(?:,\s*(\d+)[^,]*)(?:,\s*(\d+))/g, (result, [changes, insertions, deletions]) => {
        result.summary.changes = parseInt(changes, 10) || 0;
        result.summary.insertions = parseInt(insertions, 10) || 0;
        result.summary.deletions = parseInt(deletions, 10) || 0;
    }),
    new utils.LineParser(/^(\d+)[^,]*(?:,\s*(\d+)[^(]+\(([+-]))?/, (result, [changes, lines, direction]) => {
        result.summary.changes = parseInt(changes, 10) || 0;
        const count = parseInt(lines, 10) || 0;
        if (direction === '-') {
            result.summary.deletions = count;
        }
        else if (direction === '+') {
            result.summary.insertions = count;
        }
    }),
];
function parseCommitResult(stdOut) {
    const result = {
        author: null,
        branch: '',
        commit: '',
        root: false,
        summary: {
            changes: 0,
            insertions: 0,
            deletions: 0,
        },
    };
    return utils.parseStringResponse(result, parsers, stdOut);
}
exports.parseCommitResult = parseCommitResult;
//# sourceMappingURL=parse-commit.js.map
});

var commit = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.commitTask = void 0;

function commitTask(message, files, customArgs) {
    const commands = ['commit'];
    message.forEach((m) => commands.push('-m', m));
    commands.push(...files, ...customArgs);
    return {
        commands,
        format: 'utf-8',
        parser: parseCommit.parseCommitResult,
    };
}
exports.commitTask = commitTask;
//# sourceMappingURL=commit.js.map
});

var DiffSummary_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiffSummary = void 0;
/***
 * The DiffSummary is returned as a response to getting `git().status()`
 */
class DiffSummary {
    constructor() {
        this.changed = 0;
        this.deletions = 0;
        this.insertions = 0;
        this.files = [];
    }
}
exports.DiffSummary = DiffSummary;
//# sourceMappingURL=DiffSummary.js.map
});

var parseDiffSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDiffResult = void 0;

function parseDiffResult(stdOut) {
    const lines = stdOut.trim().split('\n');
    const status = new DiffSummary_1.DiffSummary();
    readSummaryLine(status, lines.pop());
    for (let i = 0, max = lines.length; i < max; i++) {
        const line = lines[i];
        textFileChange(line, status) || binaryFileChange(line, status);
    }
    return status;
}
exports.parseDiffResult = parseDiffResult;
function readSummaryLine(status, summary) {
    (summary || '')
        .trim()
        .split(', ')
        .forEach(function (text) {
        const summary = /(\d+)\s([a-z]+)/.exec(text);
        if (!summary) {
            return;
        }
        summaryType(status, summary[2], parseInt(summary[1], 10));
    });
}
function summaryType(status, key, value) {
    const match = (/([a-z]+?)s?\b/.exec(key));
    if (!match || !statusUpdate[match[1]]) {
        return;
    }
    statusUpdate[match[1]](status, value);
}
const statusUpdate = {
    file(status, value) {
        status.changed = value;
    },
    deletion(status, value) {
        status.deletions = value;
    },
    insertion(status, value) {
        status.insertions = value;
    }
};
function textFileChange(input, { files }) {
    const line = input.trim().match(/^(.+)\s+\|\s+(\d+)(\s+[+\-]+)?$/);
    if (line) {
        var alterations = (line[3] || '').trim();
        files.push({
            file: line[1].trim(),
            changes: parseInt(line[2], 10),
            insertions: alterations.replace(/-/g, '').length,
            deletions: alterations.replace(/\+/g, '').length,
            binary: false
        });
        return true;
    }
    return false;
}
function binaryFileChange(input, { files }) {
    const line = input.match(/^(.+) \|\s+Bin ([0-9.]+) -> ([0-9.]+) ([a-z]+)$/);
    if (line) {
        files.push({
            file: line[1].trim(),
            before: +line[2],
            after: +line[3],
            binary: true
        });
        return true;
    }
    return false;
}
//# sourceMappingURL=parse-diff-summary.js.map
});

var diff = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.diffSummaryTask = void 0;

function diffSummaryTask(customArgs) {
    return {
        commands: ['diff', '--stat=4096', ...customArgs],
        format: 'utf-8',
        parser(stdOut) {
            return parseDiffSummary.parseDiffResult(stdOut);
        }
    };
}
exports.diffSummaryTask = diffSummaryTask;
//# sourceMappingURL=diff.js.map
});

var parseFetch = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFetchResult = void 0;

const parsers = [
    new utils.LineParser(/From (.+)$/, (result, [remote]) => {
        result.remote = remote;
    }),
    new utils.LineParser(/\* \[new branch]\s+(\S+)\s*-> (.+)$/, (result, [name, tracking]) => {
        result.branches.push({
            name,
            tracking,
        });
    }),
    new utils.LineParser(/\* \[new tag]\s+(\S+)\s*-> (.+)$/, (result, [name, tracking]) => {
        result.tags.push({
            name,
            tracking,
        });
    })
];
function parseFetchResult(stdOut, stdErr) {
    const result = {
        raw: stdOut,
        remote: null,
        branches: [],
        tags: [],
    };
    return utils.parseStringResponse(result, parsers, stdOut, stdErr);
}
exports.parseFetchResult = parseFetchResult;
//# sourceMappingURL=parse-fetch.js.map
});

var fetch = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTask = void 0;

function fetchTask(remote, branch, customArgs) {
    const commands = ['fetch', ...customArgs];
    if (remote && branch) {
        commands.push(remote, branch);
    }
    return {
        commands,
        format: 'utf-8',
        parser: parseFetch.parseFetchResult,
    };
}
exports.fetchTask = fetchTask;
//# sourceMappingURL=fetch.js.map
});

var hashObject = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashObjectTask = void 0;

/**
 * Task used by `git.hashObject`
 */
function hashObjectTask(filePath, write) {
    const commands = ['hash-object', filePath];
    if (write) {
        commands.push('-w');
    }
    return task.straightThroughStringTask(commands, true);
}
exports.hashObjectTask = hashObjectTask;
//# sourceMappingURL=hash-object.js.map
});

var InitSummary_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseInit = exports.InitSummary = void 0;
class InitSummary {
    constructor(bare, path, existing, gitDir) {
        this.bare = bare;
        this.path = path;
        this.existing = existing;
        this.gitDir = gitDir;
    }
}
exports.InitSummary = InitSummary;
const initResponseRegex = /^Init.+ repository in (.+)$/;
const reInitResponseRegex = /^Rein.+ in (.+)$/;
function parseInit(bare, path, text) {
    const response = String(text).trim();
    let result;
    if ((result = initResponseRegex.exec(response))) {
        return new InitSummary(bare, path, false, result[1]);
    }
    if ((result = reInitResponseRegex.exec(response))) {
        return new InitSummary(bare, path, true, result[1]);
    }
    let gitDir = '';
    const tokens = response.split(' ');
    while (tokens.length) {
        const token = tokens.shift();
        if (token === 'in') {
            gitDir = tokens.join(' ');
            break;
        }
    }
    return new InitSummary(bare, path, /^re/i.test(response), gitDir);
}
exports.parseInit = parseInit;
//# sourceMappingURL=InitSummary.js.map
});

var init = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTask = void 0;

const bareCommand = '--bare';
function hasBareCommand(command) {
    return command.includes(bareCommand);
}
function initTask(bare = false, path, customArgs) {
    const commands = ['init', ...customArgs];
    if (bare && !hasBareCommand(commands)) {
        commands.splice(1, 0, bareCommand);
    }
    return {
        commands,
        format: 'utf-8',
        parser(text) {
            return InitSummary_1.parseInit(commands.includes('--bare'), path, text);
        }
    };
}
exports.initTask = initTask;
//# sourceMappingURL=init.js.map
});

var parseListLogSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.createListLogSummaryParser = exports.SPLITTER = exports.COMMIT_BOUNDARY = exports.START_BOUNDARY = void 0;


exports.START_BOUNDARY = 'òòòòòò ';
exports.COMMIT_BOUNDARY = ' òò';
exports.SPLITTER = ' ò ';
const defaultFieldNames = ['hash', 'date', 'message', 'refs', 'author_name', 'author_email'];
function lineBuilder(tokens, fields) {
    return fields.reduce((line, field, index) => {
        line[field] = tokens[index] || '';
        return line;
    }, Object.create({ diff: null }));
}
function createListLogSummaryParser(splitter = exports.SPLITTER, fields = defaultFieldNames) {
    return function (stdOut) {
        const all = utils.toLinesWithContent(stdOut, true, exports.START_BOUNDARY)
            .map(function (item) {
            const lineDetail = item.trim().split(exports.COMMIT_BOUNDARY);
            const listLogLine = lineBuilder(lineDetail[0].trim().split(splitter), fields);
            if (lineDetail.length > 1 && !!lineDetail[1].trim()) {
                listLogLine.diff = parseDiffSummary.parseDiffResult(lineDetail[1]);
            }
            return listLogLine;
        });
        return {
            all,
            latest: all.length && all[0] || null,
            total: all.length,
        };
    };
}
exports.createListLogSummaryParser = createListLogSummaryParser;
//# sourceMappingURL=parse-list-log-summary.js.map
});

var log = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.logTask = exports.parseLogOptions = void 0;


var excludeOptions;
(function (excludeOptions) {
    excludeOptions[excludeOptions["--pretty"] = 0] = "--pretty";
    excludeOptions[excludeOptions["max-count"] = 1] = "max-count";
    excludeOptions[excludeOptions["maxCount"] = 2] = "maxCount";
    excludeOptions[excludeOptions["n"] = 3] = "n";
    excludeOptions[excludeOptions["file"] = 4] = "file";
    excludeOptions[excludeOptions["format"] = 5] = "format";
    excludeOptions[excludeOptions["from"] = 6] = "from";
    excludeOptions[excludeOptions["to"] = 7] = "to";
    excludeOptions[excludeOptions["splitter"] = 8] = "splitter";
    excludeOptions[excludeOptions["symmetric"] = 9] = "symmetric";
    excludeOptions[excludeOptions["multiLine"] = 10] = "multiLine";
    excludeOptions[excludeOptions["strictDate"] = 11] = "strictDate";
})(excludeOptions || (excludeOptions = {}));
function prettyFormat(format, splitter) {
    const fields = [];
    const formatStr = [];
    Object.keys(format).forEach((field) => {
        fields.push(field);
        formatStr.push(String(format[field]));
    });
    return [
        fields, formatStr.join(splitter)
    ];
}
function userOptions(input) {
    const output = Object.assign({}, input);
    Object.keys(input).forEach(key => {
        if (key in excludeOptions) {
            delete output[key];
        }
    });
    return output;
}
function parseLogOptions(opt = {}, customArgs = []) {
    const splitter = opt.splitter || parseListLogSummary.SPLITTER;
    const format = opt.format || {
        hash: '%H',
        date: opt.strictDate === false ? '%ai' : '%aI',
        message: '%s',
        refs: '%D',
        body: opt.multiLine ? '%B' : '%b',
        author_name: '%aN',
        author_email: '%ae'
    };
    const [fields, formatStr] = prettyFormat(format, splitter);
    const suffix = [];
    const command = [
        `--pretty=format:${parseListLogSummary.START_BOUNDARY}${formatStr}${parseListLogSummary.COMMIT_BOUNDARY}`,
        ...customArgs,
    ];
    const maxCount = opt.n || opt['max-count'] || opt.maxCount;
    if (maxCount) {
        command.push(`--max-count=${maxCount}`);
    }
    if (opt.from && opt.to) {
        const rangeOperator = (opt.symmetric !== false) ? '...' : '..';
        suffix.push(`${opt.from}${rangeOperator}${opt.to}`);
    }
    if (opt.file) {
        suffix.push('--follow', opt.file);
    }
    utils.appendTaskOptions(userOptions(opt), command);
    return {
        fields,
        splitter,
        commands: [
            ...command,
            ...suffix,
        ],
    };
}
exports.parseLogOptions = parseLogOptions;
function logTask(splitter, fields, customArgs) {
    return {
        commands: ['log', ...customArgs],
        format: 'utf-8',
        parser: parseListLogSummary.createListLogSummaryParser(splitter, fields),
    };
}
exports.logTask = logTask;
//# sourceMappingURL=log.js.map
});

var MergeSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeSummaryDetail = exports.MergeSummaryConflict = void 0;
class MergeSummaryConflict {
    constructor(reason, file = null, meta) {
        this.reason = reason;
        this.file = file;
        this.meta = meta;
    }
    toString() {
        return `${this.file}:${this.reason}`;
    }
}
exports.MergeSummaryConflict = MergeSummaryConflict;
class MergeSummaryDetail {
    constructor() {
        this.conflicts = [];
        this.merges = [];
        this.result = 'success';
    }
    get failed() {
        return this.conflicts.length > 0;
    }
    get reason() {
        return this.result;
    }
    toString() {
        if (this.conflicts.length) {
            return `CONFLICTS: ${this.conflicts.join(', ')}`;
        }
        return 'OK';
    }
}
exports.MergeSummaryDetail = MergeSummaryDetail;
//# sourceMappingURL=MergeSummary.js.map
});

var PullSummary_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.PullSummary = void 0;
class PullSummary {
    constructor() {
        this.remoteMessages = {
            all: [],
        };
        this.created = [];
        this.deleted = [];
        this.files = [];
        this.deletions = {};
        this.insertions = {};
        this.summary = {
            changes: 0,
            deletions: 0,
            insertions: 0,
        };
    }
}
exports.PullSummary = PullSummary;
//# sourceMappingURL=PullSummary.js.map
});

var parsePull = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePullResult = exports.parsePullDetail = void 0;



const FILE_UPDATE_REGEX = /^\s*(.+?)\s+\|\s+\d+\s*(\+*)(-*)/;
const SUMMARY_REGEX = /(\d+)\D+((\d+)\D+\(\+\))?(\D+(\d+)\D+\(-\))?/;
const ACTION_REGEX = /^(create|delete) mode \d+ (.+)/;
const parsers = [
    new utils.LineParser(FILE_UPDATE_REGEX, (result, [file, insertions, deletions]) => {
        result.files.push(file);
        if (insertions) {
            result.insertions[file] = insertions.length;
        }
        if (deletions) {
            result.deletions[file] = deletions.length;
        }
    }),
    new utils.LineParser(SUMMARY_REGEX, (result, [changes, , insertions, , deletions]) => {
        if (insertions !== undefined || deletions !== undefined) {
            result.summary.changes = +changes || 0;
            result.summary.insertions = +insertions || 0;
            result.summary.deletions = +deletions || 0;
            return true;
        }
        return false;
    }),
    new utils.LineParser(ACTION_REGEX, (result, [action, file]) => {
        utils.append(result.files, file);
        utils.append((action === 'create') ? result.created : result.deleted, file);
    }),
];
const parsePullDetail = (stdOut, stdErr) => {
    return utils.parseStringResponse(new PullSummary_1.PullSummary(), parsers, stdOut, stdErr);
};
exports.parsePullDetail = parsePullDetail;
const parsePullResult = (stdOut, stdErr) => {
    return Object.assign(new PullSummary_1.PullSummary(), exports.parsePullDetail(stdOut, stdErr), parseRemoteMessages_1.parseRemoteMessages(stdOut, stdErr));
};
exports.parsePullResult = parsePullResult;
//# sourceMappingURL=parse-pull.js.map
});

var parseMerge = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMergeDetail = exports.parseMergeResult = void 0;



const parsers = [
    new utils.LineParser(/^Auto-merging\s+(.+)$/, (summary, [autoMerge]) => {
        summary.merges.push(autoMerge);
    }),
    new utils.LineParser(/^CONFLICT\s+\((.+)\): Merge conflict in (.+)$/, (summary, [reason, file]) => {
        summary.conflicts.push(new MergeSummary.MergeSummaryConflict(reason, file));
    }),
    new utils.LineParser(/^CONFLICT\s+\((.+\/delete)\): (.+) deleted in (.+) and/, (summary, [reason, file, deleteRef]) => {
        summary.conflicts.push(new MergeSummary.MergeSummaryConflict(reason, file, { deleteRef }));
    }),
    new utils.LineParser(/^CONFLICT\s+\((.+)\):/, (summary, [reason]) => {
        summary.conflicts.push(new MergeSummary.MergeSummaryConflict(reason, null));
    }),
    new utils.LineParser(/^Automatic merge failed;\s+(.+)$/, (summary, [result]) => {
        summary.result = result;
    }),
];
/**
 * Parse the complete response from `git.merge`
 */
const parseMergeResult = (stdOut, stdErr) => {
    return Object.assign(exports.parseMergeDetail(stdOut, stdErr), parsePull.parsePullResult(stdOut, stdErr));
};
exports.parseMergeResult = parseMergeResult;
/**
 * Parse the merge specific detail (ie: not the content also available in the pull detail) from `git.mnerge`
 * @param stdOut
 */
const parseMergeDetail = (stdOut) => {
    return utils.parseStringResponse(new MergeSummary.MergeSummaryDetail(), parsers, stdOut);
};
exports.parseMergeDetail = parseMergeDetail;
//# sourceMappingURL=parse-merge.js.map
});

var merge = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeTask = void 0;



function mergeTask(customArgs) {
    if (!customArgs.length) {
        return task.configurationErrorTask('Git.merge requires at least one option');
    }
    return {
        commands: ['merge', ...customArgs],
        format: 'utf-8',
        parser(stdOut, stdErr) {
            const merge = parseMerge.parseMergeResult(stdOut, stdErr);
            if (merge.failed) {
                throw new gitResponseError.GitResponseError(merge);
            }
            return merge;
        }
    };
}
exports.mergeTask = mergeTask;
//# sourceMappingURL=merge.js.map
});

var parseMove = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMoveResult = void 0;

const parsers = [
    new utils.LineParser(/^Renaming (.+) to (.+)$/, (result, [from, to]) => {
        result.moves.push({ from, to });
    }),
];
function parseMoveResult(stdOut) {
    return utils.parseStringResponse({ moves: [] }, parsers, stdOut);
}
exports.parseMoveResult = parseMoveResult;
//# sourceMappingURL=parse-move.js.map
});

var move = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveTask = void 0;


function moveTask(from, to) {
    return {
        commands: ['mv', '-v', ...utils.asArray(from), to],
        format: 'utf-8',
        parser: parseMove.parseMoveResult,
    };
}
exports.moveTask = moveTask;
//# sourceMappingURL=move.js.map
});

var pull = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.pullTask = void 0;

function pullTask(remote, branch, customArgs) {
    const commands = ['pull', ...customArgs];
    if (remote && branch) {
        commands.splice(1, 0, remote, branch);
    }
    return {
        commands,
        format: 'utf-8',
        parser(stdOut, stdErr) {
            return parsePull.parsePullResult(stdOut, stdErr);
        }
    };
}
exports.pullTask = pullTask;
//# sourceMappingURL=pull.js.map
});

var GetRemoteSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseGetRemotesVerbose = exports.parseGetRemotes = void 0;

function parseGetRemotes(text) {
    const remotes = {};
    forEach(text, ([name]) => remotes[name] = { name });
    return Object.values(remotes);
}
exports.parseGetRemotes = parseGetRemotes;
function parseGetRemotesVerbose(text) {
    const remotes = {};
    forEach(text, ([name, url, purpose]) => {
        if (!remotes.hasOwnProperty(name)) {
            remotes[name] = {
                name: name,
                refs: { fetch: '', push: '' },
            };
        }
        if (purpose && url) {
            remotes[name].refs[purpose.replace(/[^a-z]/g, '')] = url;
        }
    });
    return Object.values(remotes);
}
exports.parseGetRemotesVerbose = parseGetRemotesVerbose;
function forEach(text, handler) {
    utils.forEachLineWithContent(text, (line) => handler(line.split(/\s+/)));
}
//# sourceMappingURL=GetRemoteSummary.js.map
});

var remote = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeRemoteTask = exports.remoteTask = exports.listRemotesTask = exports.getRemotesTask = exports.addRemoteTask = void 0;


function addRemoteTask(remoteName, remoteRepo, customArgs = []) {
    return task.straightThroughStringTask(['remote', 'add', ...customArgs, remoteName, remoteRepo]);
}
exports.addRemoteTask = addRemoteTask;
function getRemotesTask(verbose) {
    const commands = ['remote'];
    if (verbose) {
        commands.push('-v');
    }
    return {
        commands,
        format: 'utf-8',
        parser: verbose ? GetRemoteSummary.parseGetRemotesVerbose : GetRemoteSummary.parseGetRemotes,
    };
}
exports.getRemotesTask = getRemotesTask;
function listRemotesTask(customArgs = []) {
    const commands = [...customArgs];
    if (commands[0] !== 'ls-remote') {
        commands.unshift('ls-remote');
    }
    return task.straightThroughStringTask(commands);
}
exports.listRemotesTask = listRemotesTask;
function remoteTask(customArgs = []) {
    const commands = [...customArgs];
    if (commands[0] !== 'remote') {
        commands.unshift('remote');
    }
    return task.straightThroughStringTask(commands);
}
exports.remoteTask = remoteTask;
function removeRemoteTask(remoteName) {
    return task.straightThroughStringTask(['remote', 'remove', remoteName]);
}
exports.removeRemoteTask = removeRemoteTask;
//# sourceMappingURL=remote.js.map
});

var stashList = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.stashListTask = void 0;


function stashListTask(opt = {}, customArgs) {
    const options = log.parseLogOptions(opt);
    const parser = parseListLogSummary.createListLogSummaryParser(options.splitter, options.fields);
    return {
        commands: ['stash', 'list', ...options.commands, ...customArgs],
        format: 'utf-8',
        parser,
    };
}
exports.stashListTask = stashListTask;
//# sourceMappingURL=stash-list.js.map
});

var FileStatusSummary_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileStatusSummary = exports.fromPathRegex = void 0;
exports.fromPathRegex = /^(.+) -> (.+)$/;
class FileStatusSummary {
    constructor(path, index, working_dir) {
        this.path = path;
        this.index = index;
        this.working_dir = working_dir;
        if ('R' === (index + working_dir)) {
            const detail = exports.fromPathRegex.exec(path) || [null, path, path];
            this.from = detail[1] || '';
            this.path = detail[2] || '';
        }
    }
}
exports.FileStatusSummary = FileStatusSummary;
//# sourceMappingURL=FileStatusSummary.js.map
});

var StatusSummary_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseStatusSummary = exports.StatusSummary = void 0;


/**
 * The StatusSummary is returned as a response to getting `git().status()`
 */
class StatusSummary {
    constructor() {
        this.not_added = [];
        this.conflicted = [];
        this.created = [];
        this.deleted = [];
        this.modified = [];
        this.renamed = [];
        /**
         * All files represented as an array of objects containing the `path` and status in `index` and
         * in the `working_dir`.
         */
        this.files = [];
        this.staged = [];
        /**
         * Number of commits ahead of the tracked branch
         */
        this.ahead = 0;
        /**
         *Number of commits behind the tracked branch
         */
        this.behind = 0;
        /**
         * Name of the current branch
         */
        this.current = null;
        /**
         * Name of the branch being tracked
         */
        this.tracking = null;
    }
    /**
     * Gets whether this StatusSummary represents a clean working branch.
     */
    isClean() {
        return !this.files.length;
    }
}
exports.StatusSummary = StatusSummary;
var PorcelainFileStatus;
(function (PorcelainFileStatus) {
    PorcelainFileStatus["ADDED"] = "A";
    PorcelainFileStatus["DELETED"] = "D";
    PorcelainFileStatus["MODIFIED"] = "M";
    PorcelainFileStatus["RENAMED"] = "R";
    PorcelainFileStatus["COPIED"] = "C";
    PorcelainFileStatus["UNMERGED"] = "U";
    PorcelainFileStatus["UNTRACKED"] = "?";
    PorcelainFileStatus["IGNORED"] = "!";
    PorcelainFileStatus["NONE"] = " ";
})(PorcelainFileStatus || (PorcelainFileStatus = {}));
function renamedFile(line) {
    const detail = /^(.+) -> (.+)$/.exec(line);
    if (!detail) {
        return {
            from: line, to: line
        };
    }
    return {
        from: String(detail[1]),
        to: String(detail[2]),
    };
}
function parser(indexX, indexY, handler) {
    return [`${indexX}${indexY}`, handler];
}
function conflicts(indexX, ...indexY) {
    return indexY.map(y => parser(indexX, y, (result, file) => utils.append(result.conflicted, file)));
}
const parsers = new Map([
    parser(PorcelainFileStatus.NONE, PorcelainFileStatus.ADDED, (result, file) => utils.append(result.created, file)),
    parser(PorcelainFileStatus.NONE, PorcelainFileStatus.DELETED, (result, file) => utils.append(result.deleted, file)),
    parser(PorcelainFileStatus.NONE, PorcelainFileStatus.MODIFIED, (result, file) => utils.append(result.modified, file)),
    parser(PorcelainFileStatus.ADDED, PorcelainFileStatus.NONE, (result, file) => utils.append(result.created, file) && utils.append(result.staged, file)),
    parser(PorcelainFileStatus.ADDED, PorcelainFileStatus.MODIFIED, (result, file) => utils.append(result.created, file) && utils.append(result.staged, file) && utils.append(result.modified, file)),
    parser(PorcelainFileStatus.DELETED, PorcelainFileStatus.NONE, (result, file) => utils.append(result.deleted, file) && utils.append(result.staged, file)),
    parser(PorcelainFileStatus.MODIFIED, PorcelainFileStatus.NONE, (result, file) => utils.append(result.modified, file) && utils.append(result.staged, file)),
    parser(PorcelainFileStatus.MODIFIED, PorcelainFileStatus.MODIFIED, (result, file) => utils.append(result.modified, file) && utils.append(result.staged, file)),
    parser(PorcelainFileStatus.RENAMED, PorcelainFileStatus.NONE, (result, file) => {
        utils.append(result.renamed, renamedFile(file));
    }),
    parser(PorcelainFileStatus.RENAMED, PorcelainFileStatus.MODIFIED, (result, file) => {
        const renamed = renamedFile(file);
        utils.append(result.renamed, renamed);
        utils.append(result.modified, renamed.to);
    }),
    parser(PorcelainFileStatus.UNTRACKED, PorcelainFileStatus.UNTRACKED, (result, file) => utils.append(result.not_added, file)),
    ...conflicts(PorcelainFileStatus.ADDED, PorcelainFileStatus.ADDED, PorcelainFileStatus.UNMERGED),
    ...conflicts(PorcelainFileStatus.DELETED, PorcelainFileStatus.DELETED, PorcelainFileStatus.UNMERGED),
    ...conflicts(PorcelainFileStatus.UNMERGED, PorcelainFileStatus.ADDED, PorcelainFileStatus.DELETED, PorcelainFileStatus.UNMERGED),
    ['##', (result, line) => {
            const aheadReg = /ahead (\d+)/;
            const behindReg = /behind (\d+)/;
            const currentReg = /^(.+?(?=(?:\.{3}|\s|$)))/;
            const trackingReg = /\.{3}(\S*)/;
            const onEmptyBranchReg = /\son\s([\S]+)$/;
            let regexResult;
            regexResult = aheadReg.exec(line);
            result.ahead = regexResult && +regexResult[1] || 0;
            regexResult = behindReg.exec(line);
            result.behind = regexResult && +regexResult[1] || 0;
            regexResult = currentReg.exec(line);
            result.current = regexResult && regexResult[1];
            regexResult = trackingReg.exec(line);
            result.tracking = regexResult && regexResult[1];
            regexResult = onEmptyBranchReg.exec(line);
            result.current = regexResult && regexResult[1] || result.current;
        }]
]);
const parseStatusSummary = function (text) {
    const lines = text.trim().split('\n');
    const status = new StatusSummary();
    for (let i = 0, l = lines.length; i < l; i++) {
        splitLine(status, lines[i]);
    }
    return status;
};
exports.parseStatusSummary = parseStatusSummary;
function splitLine(result, lineStr) {
    const trimmed = lineStr.trim();
    switch (' ') {
        case trimmed.charAt(2):
            return data(trimmed.charAt(0), trimmed.charAt(1), trimmed.substr(3));
        case trimmed.charAt(1):
            return data(PorcelainFileStatus.NONE, trimmed.charAt(0), trimmed.substr(2));
        default:
            return;
    }
    function data(index, workingDir, path) {
        const raw = `${index}${workingDir}`;
        const handler = parsers.get(raw);
        if (handler) {
            handler(result, path);
        }
        if (raw !== '##') {
            result.files.push(new FileStatusSummary_1.FileStatusSummary(path, index, workingDir));
        }
    }
}
//# sourceMappingURL=StatusSummary.js.map
});

var status = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusTask = void 0;

function statusTask(customArgs) {
    return {
        format: 'utf-8',
        commands: ['status', '--porcelain', '-b', '-u', ...customArgs],
        parser(text) {
            return StatusSummary_1.parseStatusSummary(text);
        }
    };
}
exports.statusTask = statusTask;
//# sourceMappingURL=status.js.map
});

var subModule = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSubModuleTask = exports.subModuleTask = exports.initSubModuleTask = exports.addSubModuleTask = void 0;

function addSubModuleTask(repo, path) {
    return subModuleTask(['add', repo, path]);
}
exports.addSubModuleTask = addSubModuleTask;
function initSubModuleTask(customArgs) {
    return subModuleTask(['init', ...customArgs]);
}
exports.initSubModuleTask = initSubModuleTask;
function subModuleTask(customArgs) {
    const commands = [...customArgs];
    if (commands[0] !== 'submodule') {
        commands.unshift('submodule');
    }
    return task.straightThroughStringTask(commands);
}
exports.subModuleTask = subModuleTask;
function updateSubModuleTask(customArgs) {
    return subModuleTask(['update', ...customArgs]);
}
exports.updateSubModuleTask = updateSubModuleTask;
//# sourceMappingURL=sub-module.js.map
});

var TagList_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTagList = exports.TagList = void 0;
class TagList {
    constructor(all, latest) {
        this.all = all;
        this.latest = latest;
    }
}
exports.TagList = TagList;
const parseTagList = function (data, customSort = false) {
    const tags = data
        .split('\n')
        .map(trimmed)
        .filter(Boolean);
    if (!customSort) {
        tags.sort(function (tagA, tagB) {
            const partsA = tagA.split('.');
            const partsB = tagB.split('.');
            if (partsA.length === 1 || partsB.length === 1) {
                return singleSorted(toNumber(partsA[0]), toNumber(partsB[0]));
            }
            for (let i = 0, l = Math.max(partsA.length, partsB.length); i < l; i++) {
                const diff = sorted(toNumber(partsA[i]), toNumber(partsB[i]));
                if (diff) {
                    return diff;
                }
            }
            return 0;
        });
    }
    const latest = customSort ? tags[0] : [...tags].reverse().find((tag) => tag.indexOf('.') >= 0);
    return new TagList(tags, latest);
};
exports.parseTagList = parseTagList;
function singleSorted(a, b) {
    const aIsNum = isNaN(a);
    const bIsNum = isNaN(b);
    if (aIsNum !== bIsNum) {
        return aIsNum ? 1 : -1;
    }
    return aIsNum ? sorted(a, b) : 0;
}
function sorted(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function trimmed(input) {
    return input.trim();
}
function toNumber(input) {
    if (typeof input === 'string') {
        return parseInt(input.replace(/^\D+/g, ''), 10) || 0;
    }
    return 0;
}
//# sourceMappingURL=TagList.js.map
});

var tag = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAnnotatedTagTask = exports.addTagTask = exports.tagListTask = void 0;

/**
 * Task used by `git.tags`
 */
function tagListTask(customArgs = []) {
    const hasCustomSort = customArgs.some((option) => /^--sort=/.test(option));
    return {
        format: 'utf-8',
        commands: ['tag', '-l', ...customArgs],
        parser(text) {
            return TagList_1.parseTagList(text, hasCustomSort);
        },
    };
}
exports.tagListTask = tagListTask;
/**
 * Task used by `git.addTag`
 */
function addTagTask(name) {
    return {
        format: 'utf-8',
        commands: ['tag', name],
        parser() {
            return { name };
        }
    };
}
exports.addTagTask = addTagTask;
/**
 * Task used by `git.addTag`
 */
function addAnnotatedTagTask(name, tagMessage) {
    return {
        format: 'utf-8',
        commands: ['tag', '-a', '-m', tagMessage, name],
        parser() {
            return { name };
        }
    };
}
exports.addAnnotatedTagTask = addAnnotatedTagTask;
//# sourceMappingURL=tag.js.map
});

const {GitExecutor} = gitExecutor;
const {SimpleGitApi} = simpleGitApi;

const {Scheduler} = scheduler;
const {GitLogger} = gitLogger;
const {adhocExecTask, configurationErrorTask} = task;
const {
   NOOP,
   asArray,
   filterArray,
   filterPrimitives,
   filterString,
   filterStringOrStringArray,
   filterType,
   folderExists,
   getTrailingOptions,
   trailingFunctionArgument,
   trailingOptionsArgument
} = utils;
const {applyPatchTask} = applyPatch;
const {branchTask, branchLocalTask, deleteBranchesTask, deleteBranchTask} = branch;
const {checkIgnoreTask} = checkIgnore;
const {checkIsRepoTask} = checkIsRepo;
const {cloneTask, cloneMirrorTask} = clone;
const {addConfigTask, listConfigTask} = config;
const {cleanWithOptionsTask, isCleanOptionsArray} = clean;
const {commitTask} = commit;
const {diffSummaryTask} = diff;
const {fetchTask} = fetch;
const {hashObjectTask} = hashObject;
const {initTask} = init;
const {logTask, parseLogOptions} = log;
const {mergeTask} = merge;
const {moveTask} = move;
const {pullTask} = pull;
const {pushTagsTask} = push;
const {addRemoteTask, getRemotesTask, listRemotesTask, remoteTask, removeRemoteTask} = remote;
const {getResetMode, resetTask} = reset;
const {stashListTask} = stashList;
const {statusTask} = status;
const {addSubModuleTask, initSubModuleTask, subModuleTask, updateSubModuleTask} = subModule;
const {addAnnotatedTagTask, addTagTask, tagListTask} = tag;
const {straightThroughBufferTask, straightThroughStringTask} = task;

function Git (options, plugins) {
   this._executor = new GitExecutor(
      options.binary, options.baseDir,
      new Scheduler(options.maxConcurrentProcesses), plugins,
   );
   this._logger = new GitLogger();
}

(Git.prototype = Object.create(SimpleGitApi.prototype)).constructor = Git;

/**
 * Logging utility for printing out info or error messages to the user
 * @type {GitLogger}
 * @private
 */
Git.prototype._logger = null;

/**
 * Sets the path to a custom git binary, should either be `git` when there is an installation of git available on
 * the system path, or a fully qualified path to the executable.
 *
 * @param {string} command
 * @returns {Git}
 */
Git.prototype.customBinary = function (command) {
   this._executor.binary = command;
   return this;
};

/**
 * Sets an environment variable for the spawned child process, either supply both a name and value as strings or
 * a single object to entirely replace the current environment variables.
 *
 * @param {string|Object} name
 * @param {string} [value]
 * @returns {Git}
 */
Git.prototype.env = function (name, value) {
   if (arguments.length === 1 && typeof name === 'object') {
      this._executor.env = name;
   } else {
      (this._executor.env = this._executor.env || {})[name] = value;
   }

   return this;
};

/**
 * Sets the working directory of the subsequent commands.
 */
Git.prototype.cwd = function (workingDirectory) {
   const task = (typeof workingDirectory !== 'string')
      ? configurationErrorTask('Git.cwd: workingDirectory must be supplied as a string')
      : adhocExecTask(() => {
         if (!folderExists(workingDirectory)) {
            throw new Error(`Git.cwd: cannot change to non-directory "${ workingDirectory }"`);
         }

         return (this._executor.cwd = workingDirectory);
      });

   return this._runTask(task, trailingFunctionArgument(arguments) || NOOP);
};

/**
 * Sets a handler function to be called whenever a new child process is created, the handler function will be called
 * with the name of the command being run and the stdout & stderr streams used by the ChildProcess.
 *
 * @example
 * require('simple-git')
 *    .outputHandler(function (command, stdout, stderr) {
 *       stdout.pipe(process.stdout);
 *    })
 *    .checkout('https://github.com/user/repo.git');
 *
 * @see https://nodejs.org/api/child_process.html#child_process_class_childprocess
 * @see https://nodejs.org/api/stream.html#stream_class_stream_readable
 * @param {Function} outputHandler
 * @returns {Git}
 */
Git.prototype.outputHandler = function (outputHandler) {
   this._executor.outputHandler = outputHandler;
   return this;
};

/**
 * Initialize a git repo
 *
 * @param {Boolean} [bare=false]
 * @param {Function} [then]
 */
Git.prototype.init = function (bare, then) {
   return this._runTask(
      initTask(bare === true, this._executor.cwd, getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Check the status of the local repo
 */
Git.prototype.status = function () {
   return this._runTask(
      statusTask(getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * List the stash(s) of the local repo
 */
Git.prototype.stashList = function (options) {
   return this._runTask(
      stashListTask(
         trailingOptionsArgument(arguments) || {},
         filterArray(options) && options || []
      ),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Stash the local repo
 *
 * @param {Object|Array} [options]
 * @param {Function} [then]
 */
Git.prototype.stash = function (options, then) {
   return this._runTask(
      straightThroughStringTask(['stash', ...getTrailingOptions(arguments)]),
      trailingFunctionArgument(arguments),
   );
};

function createCloneTask (api, task, repoPath, localPath) {
   if (typeof repoPath !== 'string') {
      return configurationErrorTask(`git.${ api }() requires a string 'repoPath'`);
   }

   return task(repoPath, filterType(localPath, filterString), getTrailingOptions(arguments));
}


/**
 * Clone a git repo
 */
Git.prototype.clone = function () {
   return this._runTask(
      createCloneTask('clone', cloneTask, ...arguments),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Mirror a git repo
 */
Git.prototype.mirror = function () {
   return this._runTask(
      createCloneTask('mirror', cloneMirrorTask, ...arguments),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Moves one or more files to a new destination.
 *
 * @see https://git-scm.com/docs/git-mv
 *
 * @param {string|string[]} from
 * @param {string} to
 */
Git.prototype.mv = function (from, to) {
   return this._runTask(moveTask(from, to), trailingFunctionArgument(arguments));
};

/**
 * Internally uses pull and tags to get the list of tags then checks out the latest tag.
 *
 * @param {Function} [then]
 */
Git.prototype.checkoutLatestTag = function (then) {
   var git = this;
   return this.pull(function () {
      git.tags(function (err, tags) {
         git.checkout(tags.latest, then);
      });
   });
};

/**
 * Commits changes in the current working directory - when specific file paths are supplied, only changes on those
 * files will be committed.
 *
 * @param {string|string[]} message
 * @param {string|string[]} [files]
 * @param {Object} [options]
 * @param {Function} [then]
 */
Git.prototype.commit = function (message, files, options, then) {
   const next = trailingFunctionArgument(arguments);
   const messages = [];

   if (filterStringOrStringArray(message)) {
      messages.push(...asArray(message));
   } else {
      console.warn('simple-git deprecation notice: git.commit: requires the commit message to be supplied as a string/string[], this will be an error in version 3');
   }

   return this._runTask(
      commitTask(
         messages,
         asArray(filterType(files, filterStringOrStringArray, [])),
         [...filterType(options, filterArray, []), ...getTrailingOptions(arguments, 0, true)]
      ),
      next
   );
};

/**
 * Pull the updated contents of the current repo
 */
Git.prototype.pull = function (remote, branch, options, then) {
   return this._runTask(
      pullTask(filterType(remote, filterString), filterType(branch, filterString), getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Fetch the updated contents of the current repo.
 *
 * @example
 *   .fetch('upstream', 'master') // fetches from master on remote named upstream
 *   .fetch(function () {}) // runs fetch against default remote and branch and calls function
 *
 * @param {string} [remote]
 * @param {string} [branch]
 */
Git.prototype.fetch = function (remote, branch) {
   return this._runTask(
      fetchTask(filterType(remote, filterString), filterType(branch, filterString), getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Disables/enables the use of the console for printing warnings and errors, by default messages are not shown in
 * a production environment.
 *
 * @param {boolean} silence
 * @returns {Git}
 */
Git.prototype.silent = function (silence) {
   console.warn('simple-git deprecation notice: git.silent: logging should be configured using the `debug` library / `DEBUG` environment variable, this will be an error in version 3');
   this._logger.silent(!!silence);
   return this;
};

/**
 * List all tags. When using git 2.7.0 or above, include an options object with `"--sort": "property-name"` to
 * sort the tags by that property instead of using the default semantic versioning sort.
 *
 * Note, supplying this option when it is not supported by your Git version will cause the operation to fail.
 *
 * @param {Object} [options]
 * @param {Function} [then]
 */
Git.prototype.tags = function (options, then) {
   return this._runTask(
      tagListTask(getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Rebases the current working copy. Options can be supplied either as an array of string parameters
 * to be sent to the `git rebase` command, or a standard options object.
 */
Git.prototype.rebase = function () {
   return this._runTask(
      straightThroughStringTask(['rebase', ...getTrailingOptions(arguments)]),
      trailingFunctionArgument(arguments)
   );
};

/**
 * Reset a repo
 */
Git.prototype.reset = function (mode) {
   return this._runTask(
      resetTask(getResetMode(mode), getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Revert one or more commits in the local working copy
 */
Git.prototype.revert = function (commit) {
   const next = trailingFunctionArgument(arguments);

   if (typeof commit !== 'string') {
      return this._runTask(
         configurationErrorTask('Commit must be a string'),
         next,
      );
   }

   return this._runTask(
      straightThroughStringTask(['revert', ...getTrailingOptions(arguments, 0, true), commit]),
      next
   );
};

/**
 * Add a lightweight tag to the head of the current branch
 */
Git.prototype.addTag = function (name) {
   const task = (typeof name === 'string')
      ? addTagTask(name)
      : configurationErrorTask('Git.addTag requires a tag name');

   return this._runTask(task, trailingFunctionArgument(arguments));
};

/**
 * Add an annotated tag to the head of the current branch
 */
Git.prototype.addAnnotatedTag = function (tagName, tagMessage) {
   return this._runTask(
      addAnnotatedTagTask(tagName, tagMessage),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Check out a tag or revision, any number of additional arguments can be passed to the `git checkout` command
 * by supplying either a string or array of strings as the first argument.
 */
Git.prototype.checkout = function () {
   const commands = ['checkout', ...getTrailingOptions(arguments, true)];
   return this._runTask(
      straightThroughStringTask(commands),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Check out a remote branch
 *
 * @param {string} branchName name of branch
 * @param {string} startPoint (e.g origin/development)
 * @param {Function} [then]
 */
Git.prototype.checkoutBranch = function (branchName, startPoint, then) {
   return this.checkout(['-b', branchName, startPoint], trailingFunctionArgument(arguments));
};

/**
 * Check out a local branch
 */
Git.prototype.checkoutLocalBranch = function (branchName, then) {
   return this.checkout(['-b', branchName], trailingFunctionArgument(arguments));
};

/**
 * Delete a local branch
 */
Git.prototype.deleteLocalBranch = function (branchName, forceDelete, then) {
   return this._runTask(
      deleteBranchTask(branchName, typeof forceDelete === "boolean" ? forceDelete : false),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Delete one or more local branches
 */
Git.prototype.deleteLocalBranches = function (branchNames, forceDelete, then) {
   return this._runTask(
      deleteBranchesTask(branchNames, typeof forceDelete === "boolean" ? forceDelete : false),
      trailingFunctionArgument(arguments),
   );
};

/**
 * List all branches
 *
 * @param {Object | string[]} [options]
 * @param {Function} [then]
 */
Git.prototype.branch = function (options, then) {
   return this._runTask(
      branchTask(getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Return list of local branches
 *
 * @param {Function} [then]
 */
Git.prototype.branchLocal = function (then) {
   return this._runTask(
      branchLocalTask(),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Add config to local git instance
 *
 * @param {string} key configuration key (e.g user.name)
 * @param {string} value for the given key (e.g your name)
 * @param {boolean} [append=false] optionally append the key/value pair (equivalent of passing `--add` option).
 * @param {Function} [then]
 */
Git.prototype.addConfig = function (key, value, append, then) {
   return this._runTask(
      addConfigTask(key, value, typeof append === "boolean" ? append : false),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.listConfig = function () {
   return this._runTask(listConfigTask(), trailingFunctionArgument(arguments));
};

/**
 * Executes any command against the git binary.
 */
Git.prototype.raw = function (commands) {
   const createRestCommands = !Array.isArray(commands);
   const command = [].slice.call(createRestCommands ? arguments : commands, 0);

   for (let i = 0; i < command.length && createRestCommands; i++) {
      if (!filterPrimitives(command[i])) {
         command.splice(i, command.length - i);
         break;
      }
   }

   command.push(
      ...getTrailingOptions(arguments, 0, true),
   );

   var next = trailingFunctionArgument(arguments);

   if (!command.length) {
      return this._runTask(
         configurationErrorTask('Raw: must supply one or more command to execute'),
         next,
      );
   }

   return this._runTask(straightThroughStringTask(command), next);
};

Git.prototype.submoduleAdd = function (repo, path, then) {
   return this._runTask(
      addSubModuleTask(repo, path),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.submoduleUpdate = function (args, then) {
   return this._runTask(
      updateSubModuleTask(getTrailingOptions(arguments, true)),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.submoduleInit = function (args, then) {
   return this._runTask(
      initSubModuleTask(getTrailingOptions(arguments, true)),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.subModule = function (options, then) {
   return this._runTask(
      subModuleTask(getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.listRemote = function () {
   return this._runTask(
      listRemotesTask(getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Adds a remote to the list of remotes.
 */
Git.prototype.addRemote = function (remoteName, remoteRepo, then) {
   return this._runTask(
      addRemoteTask(remoteName, remoteRepo, getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Removes an entry by name from the list of remotes.
 */
Git.prototype.removeRemote = function (remoteName, then) {
   return this._runTask(
      removeRemoteTask(remoteName),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Gets the currently available remotes, setting the optional verbose argument to true includes additional
 * detail on the remotes themselves.
 */
Git.prototype.getRemotes = function (verbose, then) {
   return this._runTask(
      getRemotesTask(verbose === true),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Compute object ID from a file
 */
Git.prototype.hashObject = function (path, write) {
   return this._runTask(
      hashObjectTask(path, write === true),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Call any `git remote` function with arguments passed as an array of strings.
 *
 * @param {string[]} options
 * @param {Function} [then]
 */
Git.prototype.remote = function (options, then) {
   return this._runTask(
      remoteTask(getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Merges from one branch to another, equivalent to running `git merge ${from} $[to}`, the `options` argument can
 * either be an array of additional parameters to pass to the command or null / omitted to be ignored.
 *
 * @param {string} from
 * @param {string} to
 */
Git.prototype.mergeFromTo = function (from, to) {
   if (!(filterString(from) && filterString(to))) {
      return this._runTask(configurationErrorTask(
         `Git.mergeFromTo requires that the 'from' and 'to' arguments are supplied as strings`
      ));
   }

   return this._runTask(
      mergeTask([from, to, ...getTrailingOptions(arguments)]),
      trailingFunctionArgument(arguments, false),
   );
};

/**
 * Runs a merge, `options` can be either an array of arguments
 * supported by the [`git merge`](https://git-scm.com/docs/git-merge)
 * or an options object.
 *
 * Conflicts during the merge result in an error response,
 * the response type whether it was an error or success will be a MergeSummary instance.
 * When successful, the MergeSummary has all detail from a the PullSummary
 *
 * @param {Object | string[]} [options]
 * @param {Function} [then]
 * @returns {*}
 *
 * @see ./responses/MergeSummary.js
 * @see ./responses/PullSummary.js
 */
Git.prototype.merge = function () {
   return this._runTask(
      mergeTask(getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Call any `git tag` function with arguments passed as an array of strings.
 *
 * @param {string[]} options
 * @param {Function} [then]
 */
Git.prototype.tag = function (options, then) {
   const command = getTrailingOptions(arguments);

   if (command[0] !== 'tag') {
      command.unshift('tag');
   }

   return this._runTask(
      straightThroughStringTask(command),
      trailingFunctionArgument(arguments)
   );
};

/**
 * Updates repository server info
 *
 * @param {Function} [then]
 */
Git.prototype.updateServerInfo = function (then) {
   return this._runTask(
      straightThroughStringTask(['update-server-info']),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Pushes the current tag changes to a remote which can be either a URL or named remote. When not specified uses the
 * default configured remote spec.
 *
 * @param {string} [remote]
 * @param {Function} [then]
 */
Git.prototype.pushTags = function (remote, then) {
   const task = pushTagsTask({remote: filterType(remote, filterString)}, getTrailingOptions(arguments));

   return this._runTask(task, trailingFunctionArgument(arguments));
};

/**
 * Removes the named files from source control.
 */
Git.prototype.rm = function (files) {
   return this._runTask(
      straightThroughStringTask(['rm', '-f', ...asArray(files)]),
      trailingFunctionArgument(arguments)
   );
};

/**
 * Removes the named files from source control but keeps them on disk rather than deleting them entirely. To
 * completely remove the files, use `rm`.
 *
 * @param {string|string[]} files
 */
Git.prototype.rmKeepLocal = function (files) {
   return this._runTask(
      straightThroughStringTask(['rm', '--cached', ...asArray(files)]),
      trailingFunctionArgument(arguments)
   );
};

/**
 * Returns a list of objects in a tree based on commit hash. Passing in an object hash returns the object's content,
 * size, and type.
 *
 * Passing "-p" will instruct cat-file to determine the object type, and display its formatted contents.
 *
 * @param {string[]} [options]
 * @param {Function} [then]
 */
Git.prototype.catFile = function (options, then) {
   return this._catFile('utf-8', arguments);
};

Git.prototype.binaryCatFile = function () {
   return this._catFile('buffer', arguments);
};

Git.prototype._catFile = function (format, args) {
   var handler = trailingFunctionArgument(args);
   var command = ['cat-file'];
   var options = args[0];

   if (typeof options === 'string') {
      return this._runTask(
         configurationErrorTask('Git.catFile: options must be supplied as an array of strings'),
         handler,
      );
   }

   if (Array.isArray(options)) {
      command.push.apply(command, options);
   }

   const task = format === 'buffer'
      ? straightThroughBufferTask(command)
      : straightThroughStringTask(command);

   return this._runTask(task, handler);
};

Git.prototype.diff = function (options, then) {
   const command = ['diff', ...getTrailingOptions(arguments)];

   if (typeof options === 'string') {
      command.splice(1, 0, options);
      this._logger.warn('Git#diff: supplying options as a single string is now deprecated, switch to an array of strings');
   }

   return this._runTask(
      straightThroughStringTask(command),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.diffSummary = function () {
   return this._runTask(
      diffSummaryTask(getTrailingOptions(arguments, 1)),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.applyPatch = function (patches) {
   const task = !filterStringOrStringArray(patches)
      ? configurationErrorTask(`git.applyPatch requires one or more string patches as the first argument`)
      : applyPatchTask(asArray(patches), getTrailingOptions([].slice.call(arguments, 1)));

   return this._runTask(
      task,
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.revparse = function () {
   const commands = ['rev-parse', ...getTrailingOptions(arguments, true)];
   return this._runTask(
      straightThroughStringTask(commands, true),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Show various types of objects, for example the file at a certain commit
 *
 * @param {string[]} [options]
 * @param {Function} [then]
 */
Git.prototype.show = function (options, then) {
   return this._runTask(
      straightThroughStringTask(['show', ...getTrailingOptions(arguments, 1)]),
      trailingFunctionArgument(arguments)
   );
};

/**
 */
Git.prototype.clean = function (mode, options, then) {
   const usingCleanOptionsArray = isCleanOptionsArray(mode);
   const cleanMode = usingCleanOptionsArray && mode.join('') || filterType(mode, filterString) || '';
   const customArgs = getTrailingOptions([].slice.call(arguments, usingCleanOptionsArray ? 1 : 0));

   return this._runTask(
      cleanWithOptionsTask(cleanMode, customArgs),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Call a simple function at the next step in the chain.
 * @param {Function} [then]
 */
Git.prototype.exec = function (then) {
   const task = {
      commands: [],
      format: 'utf-8',
      parser () {
         if (typeof then === 'function') {
            then();
         }
      }
   };

   return this._runTask(task);
};

/**
 * Show commit logs from `HEAD` to the first commit.
 * If provided between `options.from` and `options.to` tags or branch.
 *
 * Additionally you can provide options.file, which is the path to a file in your repository. Then only this file will be considered.
 *
 * To use a custom splitter in the log format, set `options.splitter` to be the string the log should be split on.
 *
 * Options can also be supplied as a standard options object for adding custom properties supported by the git log command.
 * For any other set of options, supply options as an array of strings to be appended to the git log command.
 */
Git.prototype.log = function (options) {
   const next = trailingFunctionArgument(arguments);

   if (filterString(arguments[0]) && filterString(arguments[1])) {
      return this._runTask(
         configurationErrorTask(`git.log(string, string) should be replaced with git.log({ from: string, to: string })`),
         next
      );
   }

   const parsedOptions = parseLogOptions(
      trailingOptionsArgument(arguments) || {},
      filterArray(options) && options || []
   );

   return this._runTask(
      logTask(parsedOptions.splitter, parsedOptions.fields, parsedOptions.commands),
      next,
   )
};

/**
 * Clears the queue of pending commands and returns the wrapper instance for chaining.
 *
 * @returns {Git}
 */
Git.prototype.clearQueue = function () {
   // TODO:
   // this._executor.clear();
   return this;
};

/**
 * Check if a pathname or pathnames are excluded by .gitignore
 *
 * @param {string|string[]} pathnames
 * @param {Function} [then]
 */
Git.prototype.checkIgnore = function (pathnames, then) {
   return this._runTask(
      checkIgnoreTask(asArray((filterType(pathnames, filterStringOrStringArray, [])))),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.checkIsRepo = function (checkType, then) {
   return this._runTask(
      checkIsRepoTask(filterType(checkType, filterString)),
      trailingFunctionArgument(arguments),
   );
};

var git = Git;

var gitFactory = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitInstanceFactory = exports.gitExportFactory = exports.esModuleFactory = void 0;




/**
 * Adds the necessary properties to the supplied object to enable it for use as
 * the default export of a module.
 *
 * Eg: `module.exports = esModuleFactory({ something () {} })`
 */
function esModuleFactory(defaultExport) {
    return Object.defineProperties(defaultExport, {
        __esModule: { value: true },
        default: { value: defaultExport },
    });
}
exports.esModuleFactory = esModuleFactory;
function gitExportFactory(factory, extra) {
    return Object.assign(function (...args) {
        return factory.apply(null, args);
    }, api_1.default, extra || {});
}
exports.gitExportFactory = gitExportFactory;
function gitInstanceFactory(baseDir, options) {
    const plugins$1 = new plugins.PluginStore();
    const config = utils.createInstanceConfig(baseDir && (typeof baseDir === 'string' ? { baseDir } : baseDir) || {}, options);
    if (!utils.folderExists(config.baseDir)) {
        throw new api_1.default.GitConstructError(config, `Cannot use simple-git on a directory that does not exist`);
    }
    if (Array.isArray(config.config)) {
        plugins$1.add(plugins.commandConfigPrefixingPlugin(config.config));
    }
    config.progress && plugins$1.add(plugins.progressMonitorPlugin(config.progress));
    config.timeout && plugins$1.add(plugins.timeoutPlugin(config.timeout));
    plugins$1.add(plugins.errorDetectionPlugin(plugins.errorDetectionHandler(true)));
    config.errors && plugins$1.add(plugins.errorDetectionPlugin(config.errors));
    return new git(config, plugins$1);
}
exports.gitInstanceFactory = gitInstanceFactory;
//# sourceMappingURL=git-factory.js.map
});

var promiseWrapped = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitP = void 0;


const functionNamesBuilderApi = [
    'customBinary', 'env', 'outputHandler', 'silent',
];
const functionNamesPromiseApi = [
    'add',
    'addAnnotatedTag',
    'addConfig',
    'addRemote',
    'addTag',
    'applyPatch',
    'binaryCatFile',
    'branch',
    'branchLocal',
    'catFile',
    'checkIgnore',
    'checkIsRepo',
    'checkout',
    'checkoutBranch',
    'checkoutLatestTag',
    'checkoutLocalBranch',
    'clean',
    'clone',
    'commit',
    'cwd',
    'deleteLocalBranch',
    'deleteLocalBranches',
    'diff',
    'diffSummary',
    'exec',
    'fetch',
    'getRemotes',
    'init',
    'listConfig',
    'listRemote',
    'log',
    'merge',
    'mergeFromTo',
    'mirror',
    'mv',
    'pull',
    'push',
    'pushTags',
    'raw',
    'rebase',
    'remote',
    'removeRemote',
    'reset',
    'revert',
    'revparse',
    'rm',
    'rmKeepLocal',
    'show',
    'stash',
    'stashList',
    'status',
    'subModule',
    'submoduleAdd',
    'submoduleInit',
    'submoduleUpdate',
    'tag',
    'tags',
    'updateServerInfo'
];
function gitP(...args) {
    let git;
    let chain = Promise.resolve();
    try {
        git = gitFactory.gitInstanceFactory(...args);
    }
    catch (e) {
        chain = Promise.reject(e);
    }
    function builderReturn() {
        return promiseApi;
    }
    function chainReturn() {
        return chain;
    }
    const promiseApi = [...functionNamesBuilderApi, ...functionNamesPromiseApi].reduce((api, name) => {
        const isAsync = functionNamesPromiseApi.includes(name);
        const valid = isAsync ? asyncWrapper(name, git) : syncWrapper(name, git, api);
        const alternative = isAsync ? chainReturn : builderReturn;
        Object.defineProperty(api, name, {
            enumerable: false,
            configurable: false,
            value: git ? valid : alternative,
        });
        return api;
    }, {});
    return promiseApi;
    function asyncWrapper(fn, git) {
        return function (...args) {
            if (typeof args[args.length] === 'function') {
                throw new TypeError('Promise interface requires that handlers are not supplied inline, ' +
                    'trailing function not allowed in call to ' + fn);
            }
            return chain.then(function () {
                return new Promise(function (resolve, reject) {
                    const callback = (err, result) => {
                        if (err) {
                            return reject(toError(err));
                        }
                        resolve(result);
                    };
                    args.push(callback);
                    git[fn].apply(git, args);
                });
            });
        };
    }
    function syncWrapper(fn, git, api) {
        return (...args) => {
            git[fn](...args);
            return api;
        };
    }
}
exports.gitP = gitP;
function toError(error) {
    if (error instanceof Error) {
        return error;
    }
    if (typeof error === 'string') {
        return new Error(error);
    }
    return new gitResponseError.GitResponseError(error);
}
//# sourceMappingURL=promise-wrapped.js.map
});

const {gitP} = promiseWrapped;
const {esModuleFactory, gitInstanceFactory, gitExportFactory} = gitFactory;

var src = esModuleFactory(
   gitExportFactory(gitInstanceFactory, {gitP})
);

var PluginState;
(function (PluginState) {
    PluginState[PluginState["idle"] = 0] = "idle";
    PluginState[PluginState["status"] = 1] = "status";
    PluginState[PluginState["pull"] = 2] = "pull";
    PluginState[PluginState["add"] = 3] = "add";
    PluginState[PluginState["commit"] = 4] = "commit";
    PluginState[PluginState["push"] = 5] = "push";
    PluginState[PluginState["conflicted"] = 6] = "conflicted";
})(PluginState || (PluginState = {}));
var DEFAULT_SETTINGS = {
    commitMessage: "vault backup: {{date}}",
    commitDateFormat: "YYYY-MM-DD HH:mm:ss",
    autoSaveInterval: 0,
    autoPullInterval: 0,
    autoPullOnBoot: false,
    disablePush: false,
    pullBeforePush: true,
    disablePopups: false,
    listChangedFilesInMessageBody: false,
};
var ObsidianGit = /** @class */ (function (_super) {
    __extends(ObsidianGit, _super);
    function ObsidianGit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gitReady = false;
        _this.conflictOutputFile = "conflict-files-obsidian-git.md";
        return _this;
        // endregion: displaying / formatting stuff
    }
    ObsidianGit.prototype.setState = function (state) {
        this.state = state;
        this.statusBar.display();
    };
    ObsidianGit.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var statusBarEl;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('loading ' + this.manifest.name + " plugin");
                        return [4 /*yield*/, this.loadSettings()];
                    case 1:
                        _a.sent();
                        this.addSettingTab(new ObsidianGitSettingsTab(this.app, this));
                        this.addCommand({
                            id: "pull",
                            name: "Pull from remote repository",
                            callback: function () { return _this.pullChangesFromRemote(); },
                        });
                        this.addCommand({
                            id: "push",
                            name: "Commit *all* changes and push to remote repository",
                            callback: function () { return _this.createBackup(false); }
                        });
                        this.addCommand({
                            id: "commit-push-specified-message",
                            name: "Commit and push all changes with specified message",
                            callback: function () { return new CustomMessageModal(_this).open(); }
                        });
                        this.addCommand({
                            id: "list-changed-files",
                            name: "List changed files",
                            callback: function () { return __awaiter(_this, void 0, void 0, function () {
                                var status;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.git.status()];
                                        case 1:
                                            status = _a.sent();
                                            new ChangedFilesModal(this, status.files).open();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }
                        });
                        statusBarEl = this.addStatusBarItem();
                        this.statusBar = new StatusBar(statusBarEl, this);
                        this.registerInterval(window.setInterval(function () { return _this.statusBar.display(); }, 1000));
                        this.init();
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.onunload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('unloading ' + this.manifest.name + " plugin");
                return [2 /*return*/];
            });
        });
    };
    ObsidianGit.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        _c = (_b = Object).assign;
                        _d = [{}, DEFAULT_SETTINGS];
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = _c.apply(_b, _d.concat([_e.sent()]));
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.saveSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var adapter, path, isValidRepo, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isGitInstalled()) {
                            this.displayError("Cannot run git command");
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        adapter = this.app.vault.adapter;
                        path = adapter.getBasePath();
                        this.git = src(path);
                        return [4 /*yield*/, this.git.checkIsRepo()];
                    case 2:
                        isValidRepo = _a.sent();
                        if (!isValidRepo) {
                            this.displayError("Valid git repository not found.");
                        }
                        else {
                            this.gitReady = true;
                            this.setState(PluginState.idle);
                            if (this.settings.autoPullOnBoot) {
                                this.pullChangesFromRemote();
                            }
                            if (this.settings.autoSaveInterval > 0) {
                                this.enableAutoBackup();
                            }
                            if (this.settings.autoPullInterval > 0) {
                                this.enableAutoPull();
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.displayError(error_1);
                        console.error(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.pullChangesFromRemote = function () {
        return __awaiter(this, void 0, void 0, function () {
            var filesUpdated, status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.gitReady) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.gitReady)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.pull()];
                    case 3:
                        filesUpdated = _a.sent();
                        if (filesUpdated > 0) {
                            this.displayMessage("Pulled new changes. " + filesUpdated + " files updated");
                        }
                        else {
                            this.displayMessage("Everything is up-to-date");
                        }
                        return [4 /*yield*/, this.git.status()];
                    case 4:
                        status = _a.sent();
                        if (status.conflicted.length > 0) {
                            this.displayError("You have " + status.conflicted.length + " conflict files");
                        }
                        this.lastUpdate = Date.now();
                        this.setState(PluginState.idle);
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.createBackup = function (fromAutoBackup, commitMessage) {
        return __awaiter(this, void 0, void 0, function () {
            var status, file, changedFiles, trackingBranch, currentBranch, remoteChangedFiles, pulledFilesLength, remoteChangedFiles_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.gitReady) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.gitReady)
                            return [2 /*return*/];
                        this.setState(PluginState.status);
                        return [4 /*yield*/, this.git.status()];
                    case 3:
                        status = _a.sent();
                        if (!!fromAutoBackup) return [3 /*break*/, 5];
                        file = this.app.vault.getAbstractFileByPath(this.conflictOutputFile);
                        return [4 /*yield*/, this.app.vault.delete(file)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        // check for conflict files on auto backup
                        if (fromAutoBackup && status.conflicted.length > 0) {
                            this.setState(PluginState.idle);
                            this.displayError("Did not commit, because you have " + status.conflicted.length + " conflict files. Please resolve them and commit per command.");
                            this.handleConflict(status.conflicted);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.git.status()];
                    case 6:
                        changedFiles = (_a.sent()).files;
                        if (!(changedFiles.length !== 0)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.add()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.git.status()];
                    case 8:
                        status = _a.sent();
                        return [4 /*yield*/, this.commit(commitMessage)];
                    case 9:
                        _a.sent();
                        this.lastUpdate = Date.now();
                        this.displayMessage("Committed " + status.staged.length + " files");
                        return [3 /*break*/, 11];
                    case 10:
                        this.displayMessage("No changes to commit");
                        _a.label = 11;
                    case 11:
                        if (!!this.settings.disablePush) return [3 /*break*/, 21];
                        trackingBranch = status.tracking;
                        currentBranch = status.current;
                        if (!trackingBranch) {
                            this.displayError("Did not push. No upstream branch is set! See README for instructions", 10000);
                            this.setState(PluginState.idle);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.git.diffSummary([currentBranch, trackingBranch])];
                    case 12:
                        remoteChangedFiles = (_a.sent()).changed;
                        if (!(remoteChangedFiles > 0)) return [3 /*break*/, 20];
                        if (!this.settings.pullBeforePush) return [3 /*break*/, 14];
                        return [4 /*yield*/, this.pull()];
                    case 13:
                        pulledFilesLength = _a.sent();
                        if (pulledFilesLength > 0) {
                            this.displayMessage("Pulled " + pulledFilesLength + " files from remote");
                        }
                        _a.label = 14;
                    case 14: return [4 /*yield*/, this.git.status()];
                    case 15:
                        // Refresh because of pull
                        status = _a.sent();
                        if (!(status.conflicted.length > 0)) return [3 /*break*/, 16];
                        this.displayError("Cannot push. You have " + status.conflicted.length + " conflict files");
                        this.handleConflict(status.conflicted);
                        return [2 /*return*/];
                    case 16: return [4 /*yield*/, this.git.diffSummary([currentBranch, trackingBranch])];
                    case 17:
                        remoteChangedFiles_1 = (_a.sent()).changed;
                        return [4 /*yield*/, this.push()];
                    case 18:
                        _a.sent();
                        this.displayMessage("Pushed " + remoteChangedFiles_1 + " files to remote");
                        _a.label = 19;
                    case 19: return [3 /*break*/, 21];
                    case 20:
                        this.displayMessage("No changes to push");
                        _a.label = 21;
                    case 21:
                        this.setState(PluginState.idle);
                        return [2 /*return*/];
                }
            });
        });
    };
    // region: main methods
    ObsidianGit.prototype.isGitInstalled = function () {
        // https://github.com/steveukx/git-js/issues/402
        var command = child_process_1.spawnSync('git', ['--version'], {
            stdio: 'ignore'
        });
        if (command.error) {
            console.error(command.error);
            return false;
        }
        return true;
    };
    ObsidianGit.prototype.add = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState(PluginState.add);
                        return [4 /*yield*/, this.git.add("./*", function (err) {
                                return err && _this.displayError("Cannot add files: " + err.message);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.commit = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var commitMessage, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.setState(PluginState.commit);
                        if (!(message !== null && message !== void 0)) return [3 /*break*/, 1];
                        _a = message;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.formatCommitMessage(this.settings.commitMessage)];
                    case 2:
                        _a = _c.sent();
                        _c.label = 3;
                    case 3:
                        commitMessage = _a;
                        if (!this.settings.listChangedFilesInMessageBody) return [3 /*break*/, 5];
                        _b = [commitMessage, "Affected files:"];
                        return [4 /*yield*/, this.git.status()];
                    case 4:
                        commitMessage = _b.concat([(_c.sent()).staged.join("\n")]);
                        _c.label = 5;
                    case 5: return [4 /*yield*/, this.git.commit(commitMessage)];
                    case 6:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.push = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState(PluginState.push);
                        return [4 /*yield*/, this.git.push(function (err) {
                                err && _this.displayError("Push failed " + err.message);
                            })];
                    case 1:
                        _a.sent();
                        this.lastUpdate = Date.now();
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.pull = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pullResult;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState(PluginState.pull);
                        return [4 /*yield*/, this.git.pull(["--no-rebase"], function (err) { return __awaiter(_this, void 0, void 0, function () {
                                var status_1;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!err) return [3 /*break*/, 2];
                                            this.displayError("Pull failed " + err.message);
                                            return [4 /*yield*/, this.git.status()];
                                        case 1:
                                            status_1 = _a.sent();
                                            if (status_1.conflicted.length > 0) {
                                                this.handleConflict(status_1.conflicted);
                                            }
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        pullResult = _a.sent();
                        this.lastUpdate = Date.now();
                        return [2 /*return*/, pullResult.files.length];
                }
            });
        });
    };
    // endregion: main methods
    ObsidianGit.prototype.enableAutoBackup = function () {
        var _this = this;
        var minutes = this.settings.autoSaveInterval;
        this.intervalIDBackup = window.setInterval(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.createBackup(true)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); }, minutes * 60000);
        this.registerInterval(this.intervalIDBackup);
    };
    ObsidianGit.prototype.enableAutoPull = function () {
        var _this = this;
        var minutes = this.settings.autoPullInterval;
        this.intervalIDPull = window.setInterval(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.pullChangesFromRemote()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); }, minutes * 60000);
        this.registerInterval(this.intervalIDPull);
    };
    ObsidianGit.prototype.disableAutoBackup = function () {
        if (this.intervalIDBackup) {
            clearInterval(this.intervalIDBackup);
            return true;
        }
        return false;
    };
    ObsidianGit.prototype.disableAutoPull = function () {
        if (this.intervalIDPull) {
            clearInterval(this.intervalIDPull);
            return true;
        }
        return false;
    };
    ObsidianGit.prototype.handleConflict = function (conflicted) {
        return __awaiter(this, void 0, void 0, function () {
            var lines;
            var _this = this;
            return __generator(this, function (_a) {
                this.setState(PluginState.conflicted);
                lines = __spreadArray([
                    "# Conflict files",
                    "Please resolve them and commit per command (This file will be deleted before the commit)."
                ], conflicted.map(function (e) {
                    var file = _this.app.vault.getAbstractFileByPath(e);
                    if (file instanceof obsidian.TFile) {
                        var link = _this.app.metadataCache.fileToLinktext(file, "/");
                        return "- [[" + link + "]]";
                    }
                    else {
                        return "- Not a file: " + e;
                    }
                }));
                this.writeAndOpenFile(lines.join("\n"));
                return [2 /*return*/];
            });
        });
    };
    ObsidianGit.prototype.writeAndOpenFile = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var fileIsAlreadyOpened;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.app.vault.adapter.write(this.conflictOutputFile, text)];
                    case 1:
                        _a.sent();
                        fileIsAlreadyOpened = false;
                        this.app.workspace.iterateAllLeaves(function (leaf) {
                            if (leaf.getDisplayText() != "" && _this.conflictOutputFile.startsWith(leaf.getDisplayText())) {
                                fileIsAlreadyOpened = true;
                            }
                        });
                        if (!fileIsAlreadyOpened) {
                            this.app.workspace.openLinkText(this.conflictOutputFile, "/", true);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // region: displaying / formatting messages
    ObsidianGit.prototype.displayMessage = function (message, timeout) {
        if (timeout === void 0) { timeout = 4 * 1000; }
        this.statusBar.displayMessage(message.toLowerCase(), timeout);
        if (!this.settings.disablePopups) {
            new obsidian.Notice(message);
        }
        console.log("git obsidian message: " + message);
    };
    ObsidianGit.prototype.displayError = function (message, timeout) {
        if (timeout === void 0) { timeout = 0; }
        new obsidian.Notice(message);
        console.log("git obsidian error: " + message);
        this.statusBar.displayMessage(message.toLowerCase(), timeout);
    };
    ObsidianGit.prototype.formatCommitMessage = function (template) {
        return __awaiter(this, void 0, void 0, function () {
            var status_2, numFiles, status_3, changeset_1, chunks, _i, _a, _b, action, files_1, files, moment;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!template.includes("{{numFiles}}")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.git.status()];
                    case 1:
                        status_2 = _c.sent();
                        numFiles = status_2.files.length;
                        template = template.replace("{{numFiles}}", String(numFiles));
                        _c.label = 2;
                    case 2:
                        if (!template.includes("{{files}}")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.git.status()];
                    case 3:
                        status_3 = _c.sent();
                        changeset_1 = {};
                        status_3.files.forEach(function (value) {
                            if (value.index in changeset_1) {
                                changeset_1[value.index].push(value.path);
                            }
                            else {
                                changeset_1[value.index] = [value.path];
                            }
                        });
                        chunks = [];
                        for (_i = 0, _a = Object.entries(changeset_1); _i < _a.length; _i++) {
                            _b = _a[_i], action = _b[0], files_1 = _b[1];
                            chunks.push(action + " " + files_1.join(" "));
                        }
                        files = chunks.join(", ");
                        template = template.replace("{{files}}", files);
                        _c.label = 4;
                    case 4:
                        moment = window.moment;
                        return [2 /*return*/, template.replace("{{date}}", moment().format(this.settings.commitDateFormat))];
                }
            });
        });
    };
    return ObsidianGit;
}(obsidian.Plugin));
var ObsidianGitSettingsTab = /** @class */ (function (_super) {
    __extends(ObsidianGitSettingsTab, _super);
    function ObsidianGitSettingsTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObsidianGitSettingsTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        var plugin = this.plugin;
        containerEl.empty();
        containerEl.createEl("h2", { text: "Git Backup settings" });
        new obsidian.Setting(containerEl)
            .setName("Vault backup interval (minutes)")
            .setDesc("Commit and push changes every X minutes. To disable automatic backup, specify negative value or zero (default)")
            .addText(function (text) {
            return text
                .setValue(String(plugin.settings.autoSaveInterval))
                .onChange(function (value) {
                if (!isNaN(Number(value))) {
                    plugin.settings.autoSaveInterval = Number(value);
                    plugin.saveSettings();
                    if (plugin.settings.autoSaveInterval > 0) {
                        plugin.disableAutoBackup();
                        plugin.enableAutoBackup();
                        new obsidian.Notice("Automatic backup enabled! Every " + plugin.settings.autoSaveInterval + " minutes.");
                    }
                    else if (plugin.settings.autoSaveInterval <= 0 &&
                        plugin.intervalIDBackup) {
                        plugin.disableAutoBackup() &&
                            new obsidian.Notice("Automatic backup disabled!");
                    }
                }
                else {
                    new obsidian.Notice("Please specify a valid number.");
                }
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Auto pull interval (minutes)")
            .setDesc("Pull changes every X minutes. To disable automatic pull, specify negative value or zero (default)")
            .addText(function (text) {
            return text
                .setValue(String(plugin.settings.autoPullInterval))
                .onChange(function (value) {
                if (!isNaN(Number(value))) {
                    plugin.settings.autoPullInterval = Number(value);
                    plugin.saveSettings();
                    if (plugin.settings.autoPullInterval > 0) {
                        plugin.disableAutoPull();
                        plugin.enableAutoPull();
                        new obsidian.Notice("Automatic pull enabled! Every " + plugin.settings.autoPullInterval + " minutes.");
                    }
                    else if (plugin.settings.autoPullInterval <= 0 &&
                        plugin.intervalIDPull) {
                        plugin.disableAutoPull() &&
                            new obsidian.Notice("Automatic pull disabled!");
                    }
                }
                else {
                    new obsidian.Notice("Please specify a valid number.");
                }
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Commit message")
            .setDesc("Specify custom commit message. Available placeholders: {{date}}" +
            " (see below) and {{numFiles}} (number of changed files in the commit)")
            .addText(function (text) {
            return text
                .setPlaceholder("vault backup")
                .setValue(plugin.settings.commitMessage
                ? plugin.settings.commitMessage
                : "")
                .onChange(function (value) {
                plugin.settings.commitMessage = value;
                plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("{{date}} placeholder format")
            .setDesc('Specify custom date format. E.g. "YYYY-MM-DD HH:mm:ss"')
            .addText(function (text) {
            return text
                .setPlaceholder(plugin.settings.commitDateFormat)
                .setValue(plugin.settings.commitDateFormat)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            plugin.settings.commitDateFormat = value;
                            return [4 /*yield*/, plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName("Preview commit message")
            .addButton(function (button) {
            return button.setButtonText("Preview").onClick(function () { return __awaiter(_this, void 0, void 0, function () {
                var commitMessagePreview;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, plugin.formatCommitMessage(plugin.settings.commitMessage)];
                        case 1:
                            commitMessagePreview = _a.sent();
                            new obsidian.Notice("" + commitMessagePreview);
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName("List filenames affected by commit in the commit body")
            .addToggle(function (toggle) {
            return toggle
                .setValue(plugin.settings.listChangedFilesInMessageBody)
                .onChange(function (value) {
                plugin.settings.listChangedFilesInMessageBody = value;
                plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Current branch")
            .setDesc("Switch to a different branch")
            .addDropdown(function (dropdown) { return __awaiter(_this, void 0, void 0, function () {
            var branchInfo, _i, _a, branch;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, plugin.git.branchLocal()];
                    case 1:
                        branchInfo = _b.sent();
                        for (_i = 0, _a = branchInfo.all; _i < _a.length; _i++) {
                            branch = _a[_i];
                            dropdown.addOption(branch, branch);
                        }
                        dropdown.setValue(branchInfo.current);
                        dropdown.onChange(function (option) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, plugin.git.checkout(option, [], function (err) { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                if (err) {
                                                    new obsidian.Notice(err.message);
                                                    dropdown.setValue(branchInfo.current);
                                                }
                                                else {
                                                    new obsidian.Notice("Checked out to " + option);
                                                }
                                                return [2 /*return*/];
                                            });
                                        }); })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        }); });
        new obsidian.Setting(containerEl)
            .setName("Pull updates on startup")
            .setDesc("Automatically pull updates when Obsidian starts")
            .addToggle(function (toggle) {
            return toggle
                .setValue(plugin.settings.autoPullOnBoot)
                .onChange(function (value) {
                plugin.settings.autoPullOnBoot = value;
                plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Disable push")
            .setDesc("Do not push changes to the remote repository")
            .addToggle(function (toggle) {
            return toggle
                .setValue(plugin.settings.disablePush)
                .onChange(function (value) {
                plugin.settings.disablePush = value;
                plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Pull changes before push")
            .setDesc("Commit -> pull -> push (Only if pushing is enabled)")
            .addToggle(function (toggle) {
            return toggle
                .setValue(plugin.settings.pullBeforePush)
                .onChange(function (value) {
                plugin.settings.pullBeforePush = value;
                plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Disable notifications")
            .setDesc("Disable notifications for git operations to minimize distraction (refer to status bar for updates)")
            .addToggle(function (toggle) {
            return toggle
                .setValue(plugin.settings.disablePopups)
                .onChange(function (value) {
                plugin.settings.disablePopups = value;
                plugin.saveSettings();
            });
        });
    };
    return ObsidianGitSettingsTab;
}(obsidian.PluginSettingTab));
var StatusBar = /** @class */ (function () {
    function StatusBar(statusBarEl, plugin) {
        this.messages = [];
        this.statusBarEl = statusBarEl;
        this.plugin = plugin;
    }
    StatusBar.prototype.displayMessage = function (message, timeout) {
        this.messages.push({
            message: "git: " + message.slice(0, 100),
            timeout: timeout,
        });
        this.display();
    };
    StatusBar.prototype.display = function () {
        if (this.messages.length > 0 && !this.currentMessage) {
            this.currentMessage = this.messages.shift();
            this.statusBarEl.setText(this.currentMessage.message);
            this.lastMessageTimestamp = Date.now();
        }
        else if (this.currentMessage) {
            var messageAge = Date.now() - this.lastMessageTimestamp;
            if (messageAge >= this.currentMessage.timeout) {
                this.currentMessage = null;
                this.lastMessageTimestamp = null;
            }
        }
        else {
            this.displayState();
        }
    };
    StatusBar.prototype.displayState = function () {
        switch (this.plugin.state) {
            case PluginState.idle:
                this.displayFromNow(this.plugin.lastUpdate);
                break;
            case PluginState.status:
                this.statusBarEl.setText("git: checking repo status..");
                break;
            case PluginState.add:
                this.statusBarEl.setText("git: adding files to repo..");
                break;
            case PluginState.commit:
                this.statusBarEl.setText("git: committing changes..");
                break;
            case PluginState.push:
                this.statusBarEl.setText("git: pushing changes..");
                break;
            case PluginState.pull:
                this.statusBarEl.setText("git: pulling changes..");
                break;
            case PluginState.conflicted:
                this.statusBarEl.setText("git: you have conflict files..");
                break;
            default:
                this.statusBarEl.setText("git: failed on initialization!");
                break;
        }
    };
    StatusBar.prototype.displayFromNow = function (timestamp) {
        if (timestamp) {
            var moment = window.moment;
            var fromNow = moment(timestamp).fromNow();
            this.statusBarEl.setText("git: last update " + fromNow + "..");
        }
        else {
            this.statusBarEl.setText("git: ready");
        }
    };
    return StatusBar;
}());
var CustomMessageModal = /** @class */ (function (_super) {
    __extends(CustomMessageModal, _super);
    function CustomMessageModal(plugin) {
        var _this = _super.call(this, plugin.app) || this;
        _this.plugin = plugin;
        _this.setPlaceholder("Type your message and select optional the version with the added date.");
        return _this;
    }
    CustomMessageModal.prototype.getSuggestions = function (query) {
        var date = window.moment().format(this.plugin.settings.commitDateFormat);
        if (query == "")
            query = "...";
        return [query, date + ": " + query, query + ": " + date];
    };
    CustomMessageModal.prototype.renderSuggestion = function (value, el) {
        el.innerText = value;
    };
    CustomMessageModal.prototype.onChooseSuggestion = function (item, _) {
        this.plugin.createBackup(false, item);
    };
    return CustomMessageModal;
}(obsidian.SuggestModal));
var ChangedFilesModal = /** @class */ (function (_super) {
    __extends(ChangedFilesModal, _super);
    function ChangedFilesModal(plugin, changedFiles) {
        var _this = _super.call(this, plugin.app) || this;
        _this.plugin = plugin;
        _this.changedFiles = changedFiles;
        _this.setPlaceholder("Only files in vault can be openend!");
        return _this;
    }
    ChangedFilesModal.prototype.getItems = function () {
        return this.changedFiles;
    };
    ChangedFilesModal.prototype.getItemText = function (item) {
        if (item.index == "?" && item.working_dir == "?") {
            return "Untracked | " + item.path;
        }
        var working_dir = "";
        var index = "";
        if (item.working_dir != " ")
            working_dir = "Working dir: " + item.working_dir + " ";
        if (item.index != " ")
            index = "Index: " + item.index;
        return "" + working_dir + index + " | " + item.path;
    };
    ChangedFilesModal.prototype.onChooseItem = function (item, _) {
        if (this.plugin.app.metadataCache.getFirstLinkpathDest(item.path, "") == null) {
            new obsidian.Notice("Can't open file in Obsidian");
        }
        else {
            this.plugin.app.workspace.openLinkText(item.path, "/");
        }
    };
    return ChangedFilesModal;
}(obsidian.FuzzySuggestModal));

module.exports = ObsidianGit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvZXJyb3JzL2dpdC1lcnJvci5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvZXJyb3JzL2dpdC1yZXNwb25zZS1lcnJvci5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvZXJyb3JzL2dpdC1jb25zdHJ1Y3QtZXJyb3IuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL2Vycm9ycy9naXQtcGx1Z2luLWVycm9yLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9lcnJvcnMvdGFzay1jb25maWd1cmF0aW9uLWVycm9yLmpzIiwibm9kZV9tb2R1bGVzL21zL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9jb21tb24uanMiLCJub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvaGFzLWZsYWcvaW5kZXguanMiLCJub2RlX21vZHVsZXMvc3VwcG9ydHMtY29sb3IvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZGVidWcvc3JjL25vZGUuanMiLCJub2RlX21vZHVsZXMvZGVidWcvc3JjL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL0Brd3NpdGVzL2ZpbGUtZXhpc3RzL2Rpc3Qvc3JjL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL0Brd3NpdGVzL2ZpbGUtZXhpc3RzL2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3V0aWxzL3V0aWwuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3V0aWxzL2FyZ3VtZW50LWZpbHRlcnMuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3V0aWxzL2V4aXQtY29kZXMuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3V0aWxzL2dpdC1vdXRwdXQtc3RyZWFtcy5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdXRpbHMvbGluZS1wYXJzZXIuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3V0aWxzL3NpbXBsZS1naXQtb3B0aW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdXRpbHMvdGFzay1vcHRpb25zLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi91dGlscy90YXNrLXBhcnNlci5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdXRpbHMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL2NoZWNrLWlzLXJlcG8uanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Jlc3BvbnNlcy9DbGVhblN1bW1hcnkuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL3Rhc2suanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL2NsZWFuLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9yZXNldC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvYXBpLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wbHVnaW5zL2NvbW1hbmQtY29uZmlnLXByZWZpeGluZy1wbHVnaW4uanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BsdWdpbnMvZXJyb3ItZGV0ZWN0aW9uLnBsdWdpbi5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGx1Z2lucy9wbHVnaW4tc3RvcmUuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BsdWdpbnMvcHJvZ3Jlc3MtbW9uaXRvci1wbHVnaW4uanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BsdWdpbnMvc2ltcGxlLWdpdC1wbHVnaW4uanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BsdWdpbnMvdGltb3V0LXBsdWdpbi5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGx1Z2lucy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvZ2l0LWxvZ2dlci5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcnVubmVycy90YXNrcy1wZW5kaW5nLXF1ZXVlLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9ydW5uZXJzL2dpdC1leGVjdXRvci1jaGFpbi5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcnVubmVycy9naXQtZXhlY3V0b3IuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2stY2FsbGJhY2suanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BhcnNlcnMvcGFyc2UtcmVtb3RlLW9iamVjdHMuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BhcnNlcnMvcGFyc2UtcmVtb3RlLW1lc3NhZ2VzLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wYXJzZXJzL3BhcnNlLXB1c2guanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL3B1c2guanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3NpbXBsZS1naXQtYXBpLmpzIiwibm9kZV9tb2R1bGVzL0Brd3NpdGVzL3Byb21pc2UtZGVmZXJyZWQvZGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcnVubmVycy9zY2hlZHVsZXIuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL2FwcGx5LXBhdGNoLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvQnJhbmNoRGVsZXRlU3VtbWFyeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGFyc2Vycy9wYXJzZS1icmFuY2gtZGVsZXRlLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvQnJhbmNoU3VtbWFyeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGFyc2Vycy9wYXJzZS1icmFuY2guanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL2JyYW5jaC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcmVzcG9uc2VzL0NoZWNrSWdub3JlLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9jaGVjay1pZ25vcmUuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvQ29uZmlnTGlzdC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvY29uZmlnLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wYXJzZXJzL3BhcnNlLWNvbW1pdC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvY29tbWl0LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvRGlmZlN1bW1hcnkuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BhcnNlcnMvcGFyc2UtZGlmZi1zdW1tYXJ5LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9kaWZmLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wYXJzZXJzL3BhcnNlLWZldGNoLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9mZXRjaC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvaGFzaC1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Jlc3BvbnNlcy9Jbml0U3VtbWFyeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvaW5pdC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGFyc2Vycy9wYXJzZS1saXN0LWxvZy1zdW1tYXJ5LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9sb2cuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Jlc3BvbnNlcy9NZXJnZVN1bW1hcnkuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Jlc3BvbnNlcy9QdWxsU3VtbWFyeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGFyc2Vycy9wYXJzZS1wdWxsLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wYXJzZXJzL3BhcnNlLW1lcmdlLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9tZXJnZS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGFyc2Vycy9wYXJzZS1tb3ZlLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9tb3ZlLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9wdWxsLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvR2V0UmVtb3RlU3VtbWFyeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvcmVtb3RlLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9zdGFzaC1saXN0LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvRmlsZVN0YXR1c1N1bW1hcnkuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Jlc3BvbnNlcy9TdGF0dXNTdW1tYXJ5LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9zdGF0dXMuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL3N1Yi1tb2R1bGUuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Jlc3BvbnNlcy9UYWdMaXN0LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy90YWcuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvZ2l0LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9naXQtZmFjdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcnVubmVycy9wcm9taXNlLXdyYXBwZWQuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvaW5kZXguanMiLCJtYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBmcm9tLmxlbmd0aCwgaiA9IHRvLmxlbmd0aDsgaSA8IGlsOyBpKyssIGorKylcclxuICAgICAgICB0b1tqXSA9IGZyb21baV07XHJcbiAgICByZXR1cm4gdG87XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HaXRFcnJvciA9IHZvaWQgMDtcbi8qKlxuICogVGhlIGBHaXRFcnJvcmAgaXMgdGhyb3duIHdoZW4gdGhlIHVuZGVybHlpbmcgYGdpdGAgcHJvY2VzcyB0aHJvd3MgYVxuICogZmF0YWwgZXhjZXB0aW9uIChlZyBhbiBgRU5PRU5UYCBleGNlcHRpb24gd2hlbiBhdHRlbXB0aW5nIHRvIHVzZSBhXG4gKiBub24td3JpdGFibGUgZGlyZWN0b3J5IGFzIHRoZSByb290IGZvciB5b3VyIHJlcG8pLCBhbmQgYWN0cyBhcyB0aGVcbiAqIGJhc2UgY2xhc3MgZm9yIG1vcmUgc3BlY2lmaWMgZXJyb3JzIHRocm93biBieSB0aGUgcGFyc2luZyBvZiB0aGVcbiAqIGdpdCByZXNwb25zZSBvciBlcnJvcnMgaW4gdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIHRhc2sgYWJvdXQgdG9cbiAqIGJlIHJ1bi5cbiAqXG4gKiBXaGVuIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24sIHBlbmRpbmcgdGFza3MgaW4gdGhlIHNhbWUgaW5zdGFuY2Ugd2lsbFxuICogbm90IGJlIGV4ZWN1dGVkLiBUaGUgcmVjb21tZW5kZWQgd2F5IHRvIHJ1biBhIHNlcmllcyBvZiB0YXNrcyB0aGF0XG4gKiBjYW4gaW5kZXBlbmRlbnRseSBmYWlsIHdpdGhvdXQgbmVlZGluZyB0byBwcmV2ZW50IGZ1dHVyZSB0YXNrcyBmcm9tXG4gKiBydW5uaW5nIGlzIHRvIGNhdGNoIHRoZW0gaW5kaXZpZHVhbGx5OlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiBpbXBvcnQgeyBnaXRQLCBTaW1wbGVHaXQsIEdpdEVycm9yLCBQdWxsUmVzdWx0IH0gZnJvbSAnc2ltcGxlLWdpdCc7XG5cbiBmdW5jdGlvbiBjYXRjaFRhc2sgKGU6IEdpdEVycm9yKSB7XG4gICByZXR1cm4gZS5cbiB9XG5cbiBjb25zdCBnaXQgPSBnaXRQKHJlcG9Xb3JraW5nRGlyKTtcbiBjb25zdCBwdWxsZWQ6IFB1bGxSZXN1bHQgfCBHaXRFcnJvciA9IGF3YWl0IGdpdC5wdWxsKCkuY2F0Y2goY2F0Y2hUYXNrKTtcbiBjb25zdCBwdXNoZWQ6IHN0cmluZyB8IEdpdEVycm9yID0gYXdhaXQgZ2l0LnB1c2hUYWdzKCkuY2F0Y2goY2F0Y2hUYXNrKTtcbiBgYGBcbiAqL1xuY2xhc3MgR2l0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IodGFzaywgbWVzc2FnZSkge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy50YXNrID0gdGFzaztcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTtcbiAgICB9XG59XG5leHBvcnRzLkdpdEVycm9yID0gR2l0RXJyb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1naXQtZXJyb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdpdFJlc3BvbnNlRXJyb3IgPSB2b2lkIDA7XG5jb25zdCBnaXRfZXJyb3JfMSA9IHJlcXVpcmUoXCIuL2dpdC1lcnJvclwiKTtcbi8qKlxuICogVGhlIGBHaXRSZXNwb25zZUVycm9yYCBpcyB0aGUgd3JhcHBlciBmb3IgYSBwYXJzZWQgcmVzcG9uc2UgdGhhdCBpcyB0cmVhdGVkIGFzXG4gKiBhIGZhdGFsIGVycm9yLCBmb3IgZXhhbXBsZSBhdHRlbXB0aW5nIGEgYG1lcmdlYCBjYW4gbGVhdmUgdGhlIHJlcG8gaW4gYSBjb3JydXB0ZWRcbiAqIHN0YXRlIHdoZW4gdGhlcmUgYXJlIGNvbmZsaWN0cyBzbyB0aGUgdGFzayB3aWxsIHJlamVjdCByYXRoZXIgdGhhbiByZXNvbHZlLlxuICpcbiAqIEZvciBleGFtcGxlLCBjYXRjaGluZyB0aGUgbWVyZ2UgY29uZmxpY3QgZXhjZXB0aW9uOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiBpbXBvcnQgeyBnaXRQLCBTaW1wbGVHaXQsIEdpdFJlc3BvbnNlRXJyb3IsIE1lcmdlU3VtbWFyeSB9IGZyb20gJ3NpbXBsZS1naXQnO1xuXG4gY29uc3QgZ2l0ID0gZ2l0UChyZXBvUm9vdCk7XG4gY29uc3QgbWVyZ2VPcHRpb25zOiBzdHJpbmdbXSA9IFsnLS1uby1mZicsICdvdGhlci1icmFuY2gnXTtcbiBjb25zdCBtZXJnZVN1bW1hcnk6IE1lcmdlU3VtbWFyeSA9IGF3YWl0IGdpdC5tZXJnZShtZXJnZU9wdGlvbnMpXG4gICAgICAuY2F0Y2goKGU6IEdpdFJlc3BvbnNlRXJyb3I8TWVyZ2VTdW1tYXJ5PikgPT4gZS5naXQpO1xuXG4gaWYgKG1lcmdlU3VtbWFyeS5mYWlsZWQpIHtcbiAgIC8vIGRlYWwgd2l0aCB0aGUgZXJyb3JcbiB9XG4gYGBgXG4gKi9cbmNsYXNzIEdpdFJlc3BvbnNlRXJyb3IgZXh0ZW5kcyBnaXRfZXJyb3JfMS5HaXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgLyoqXG4gICAgICogYC5naXRgIGFjY2VzcyB0aGUgcGFyc2VkIHJlc3BvbnNlIHRoYXQgaXMgdHJlYXRlZCBhcyBiZWluZyBhbiBlcnJvclxuICAgICAqL1xuICAgIGdpdCwgbWVzc2FnZSkge1xuICAgICAgICBzdXBlcih1bmRlZmluZWQsIG1lc3NhZ2UgfHwgU3RyaW5nKGdpdCkpO1xuICAgICAgICB0aGlzLmdpdCA9IGdpdDtcbiAgICB9XG59XG5leHBvcnRzLkdpdFJlc3BvbnNlRXJyb3IgPSBHaXRSZXNwb25zZUVycm9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2l0LXJlc3BvbnNlLWVycm9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HaXRDb25zdHJ1Y3RFcnJvciA9IHZvaWQgMDtcbmNvbnN0IGdpdF9lcnJvcl8xID0gcmVxdWlyZShcIi4vZ2l0LWVycm9yXCIpO1xuLyoqXG4gKiBUaGUgYEdpdENvbnN0cnVjdEVycm9yYCBpcyB0aHJvd24gd2hlbiBhbiBlcnJvciBvY2N1cnMgaW4gdGhlIGNvbnN0cnVjdG9yXG4gKiBvZiB0aGUgYHNpbXBsZS1naXRgIGluc3RhbmNlIGl0c2VsZi4gTW9zdCBjb21tb25seSBhcyBhIHJlc3VsdCBvZiB1c2luZ1xuICogYSBgYmFzZURpcmAgb3B0aW9uIHRoYXQgcG9pbnRzIHRvIGEgZm9sZGVyIHRoYXQgZWl0aGVyIGRvZXMgbm90IGV4aXN0LFxuICogb3IgY2Fubm90IGJlIHJlYWQgYnkgdGhlIHVzZXIgdGhlIG5vZGUgc2NyaXB0IGlzIHJ1bm5pbmcgYXMuXG4gKlxuICogQ2hlY2sgdGhlIGAubWVzc2FnZWAgcHJvcGVydHkgZm9yIG1vcmUgZGV0YWlsIGluY2x1ZGluZyB0aGUgcHJvcGVydGllc1xuICogcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3Rvci5cbiAqL1xuY2xhc3MgR2l0Q29uc3RydWN0RXJyb3IgZXh0ZW5kcyBnaXRfZXJyb3JfMS5HaXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnLCBtZXNzYWdlKSB7XG4gICAgICAgIHN1cGVyKHVuZGVmaW5lZCwgbWVzc2FnZSk7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIH1cbn1cbmV4cG9ydHMuR2l0Q29uc3RydWN0RXJyb3IgPSBHaXRDb25zdHJ1Y3RFcnJvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdpdC1jb25zdHJ1Y3QtZXJyb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdpdFBsdWdpbkVycm9yID0gdm9pZCAwO1xuY29uc3QgZ2l0X2Vycm9yXzEgPSByZXF1aXJlKFwiLi9naXQtZXJyb3JcIik7XG5jbGFzcyBHaXRQbHVnaW5FcnJvciBleHRlbmRzIGdpdF9lcnJvcl8xLkdpdEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXNrLCBwbHVnaW4sIG1lc3NhZ2UpIHtcbiAgICAgICAgc3VwZXIodGFzaywgbWVzc2FnZSk7XG4gICAgICAgIHRoaXMudGFzayA9IHRhc2s7XG4gICAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgbmV3LnRhcmdldC5wcm90b3R5cGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuR2l0UGx1Z2luRXJyb3IgPSBHaXRQbHVnaW5FcnJvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdpdC1wbHVnaW4tZXJyb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRhc2tDb25maWd1cmF0aW9uRXJyb3IgPSB2b2lkIDA7XG5jb25zdCBnaXRfZXJyb3JfMSA9IHJlcXVpcmUoXCIuL2dpdC1lcnJvclwiKTtcbi8qKlxuICogVGhlIGBUYXNrQ29uZmlndXJhdGlvbkVycm9yYCBpcyB0aHJvd24gd2hlbiBhIGNvbW1hbmQgd2FzIGluY29ycmVjdGx5XG4gKiBjb25maWd1cmVkLiBBbiBlcnJvciBvZiB0aGlzIGtpbmQgbWVhbnMgdGhhdCBubyBhdHRlbXB0IHdhcyBtYWRlIHRvXG4gKiBydW4geW91ciBjb21tYW5kIHRocm91Z2ggdGhlIHVuZGVybHlpbmcgYGdpdGAgYmluYXJ5LlxuICpcbiAqIENoZWNrIHRoZSBgLm1lc3NhZ2VgIHByb3BlcnR5IGZvciBtb3JlIGRldGFpbCBvbiB3aHkgeW91ciBjb25maWd1cmF0aW9uXG4gKiByZXN1bHRlZCBpbiBhbiBlcnJvci5cbiAqL1xuY2xhc3MgVGFza0NvbmZpZ3VyYXRpb25FcnJvciBleHRlbmRzIGdpdF9lcnJvcl8xLkdpdEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgICAgIHN1cGVyKHVuZGVmaW5lZCwgbWVzc2FnZSk7XG4gICAgfVxufVxuZXhwb3J0cy5UYXNrQ29uZmlndXJhdGlvbkVycm9yID0gVGFza0NvbmZpZ3VyYXRpb25FcnJvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRhc2stY29uZmlndXJhdGlvbi1lcnJvci5qcy5tYXAiLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHcgPSBkICogNztcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsKSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oLT8oPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHdlZWtzP3x3fHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICd3ZWVrcyc6XG4gICAgY2FzZSAnd2Vlayc6XG4gICAgY2FzZSAndyc6XG4gICAgICByZXR1cm4gbiAqIHc7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGQsICdkYXknKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBoLCAnaG91cicpO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIG0sICdtaW51dGUnKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBzLCAnc2Vjb25kJyk7XG4gIH1cbiAgcmV0dXJuIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBtc0FicywgbiwgbmFtZSkge1xuICB2YXIgaXNQbHVyYWwgPSBtc0FicyA+PSBuICogMS41O1xuICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG4pICsgJyAnICsgbmFtZSArIChpc1BsdXJhbCA/ICdzJyA6ICcnKTtcbn1cbiIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICovXG5cbmZ1bmN0aW9uIHNldHVwKGVudikge1xuXHRjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5kZWZhdWx0ID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmNvZXJjZSA9IGNvZXJjZTtcblx0Y3JlYXRlRGVidWcuZGlzYWJsZSA9IGRpc2FibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZSA9IGVuYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdGNyZWF0ZURlYnVnLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblx0Y3JlYXRlRGVidWcuZGVzdHJveSA9IGRlc3Ryb3k7XG5cblx0T2JqZWN0LmtleXMoZW52KS5mb3JFYWNoKGtleSA9PiB7XG5cdFx0Y3JlYXRlRGVidWdba2V5XSA9IGVudltrZXldO1xuXHR9KTtcblxuXHQvKipcblx0KiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cblx0Ki9cblxuXHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdC8qKlxuXHQqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cblx0KlxuXHQqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cblx0Ki9cblx0Y3JlYXRlRGVidWcuZm9ybWF0dGVycyA9IHt9O1xuXG5cdC8qKlxuXHQqIFNlbGVjdHMgYSBjb2xvciBmb3IgYSBkZWJ1ZyBuYW1lc3BhY2Vcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIFRoZSBuYW1lc3BhY2Ugc3RyaW5nIGZvciB0aGUgZm9yIHRoZSBkZWJ1ZyBpbnN0YW5jZSB0byBiZSBjb2xvcmVkXG5cdCogQHJldHVybiB7TnVtYmVyfFN0cmluZ30gQW4gQU5TSSBjb2xvciBjb2RlIGZvciB0aGUgZ2l2ZW4gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHNlbGVjdENvbG9yKG5hbWVzcGFjZSkge1xuXHRcdGxldCBoYXNoID0gMDtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXNwYWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcblx0XHRcdGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNyZWF0ZURlYnVnLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGNyZWF0ZURlYnVnLmNvbG9ycy5sZW5ndGhdO1xuXHR9XG5cdGNyZWF0ZURlYnVnLnNlbGVjdENvbG9yID0gc2VsZWN0Q29sb3I7XG5cblx0LyoqXG5cdCogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQHJldHVybiB7RnVuY3Rpb259XG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gY3JlYXRlRGVidWcobmFtZXNwYWNlKSB7XG5cdFx0bGV0IHByZXZUaW1lO1xuXHRcdGxldCBlbmFibGVPdmVycmlkZSA9IG51bGw7XG5cdFx0bGV0IG5hbWVzcGFjZXNDYWNoZTtcblx0XHRsZXQgZW5hYmxlZENhY2hlO1xuXG5cdFx0ZnVuY3Rpb24gZGVidWcoLi4uYXJncykge1xuXHRcdFx0Ly8gRGlzYWJsZWQ/XG5cdFx0XHRpZiAoIWRlYnVnLmVuYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzZWxmID0gZGVidWc7XG5cblx0XHRcdC8vIFNldCBgZGlmZmAgdGltZXN0YW1wXG5cdFx0XHRjb25zdCBjdXJyID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xuXHRcdFx0Y29uc3QgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuXHRcdFx0c2VsZi5kaWZmID0gbXM7XG5cdFx0XHRzZWxmLnByZXYgPSBwcmV2VGltZTtcblx0XHRcdHNlbGYuY3VyciA9IGN1cnI7XG5cdFx0XHRwcmV2VGltZSA9IGN1cnI7XG5cblx0XHRcdGFyZ3NbMF0gPSBjcmVhdGVEZWJ1Zy5jb2VyY2UoYXJnc1swXSk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXJnc1swXSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cblx0XHRcdFx0YXJncy51bnNoaWZ0KCclTycpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuXHRcdFx0bGV0IGluZGV4ID0gMDtcblx0XHRcdGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCAobWF0Y2gsIGZvcm1hdCkgPT4ge1xuXHRcdFx0XHQvLyBJZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG5cdFx0XHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0XHRcdHJldHVybiAnJSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aW5kZXgrKztcblx0XHRcdFx0Y29uc3QgZm9ybWF0dGVyID0gY3JlYXRlRGVidWcuZm9ybWF0dGVyc1tmb3JtYXRdO1xuXHRcdFx0XHRpZiAodHlwZW9mIGZvcm1hdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGNvbnN0IHZhbCA9IGFyZ3NbaW5kZXhdO1xuXHRcdFx0XHRcdG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuXHRcdFx0XHRcdC8vIE5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcblx0XHRcdFx0XHRhcmdzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdFx0aW5kZXgtLTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcblx0XHRcdGNyZWF0ZURlYnVnLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuXHRcdFx0Y29uc3QgbG9nRm4gPSBzZWxmLmxvZyB8fCBjcmVhdGVEZWJ1Zy5sb2c7XG5cdFx0XHRsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcblx0XHR9XG5cblx0XHRkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG5cdFx0ZGVidWcudXNlQ29sb3JzID0gY3JlYXRlRGVidWcudXNlQ29sb3JzKCk7XG5cdFx0ZGVidWcuY29sb3IgPSBjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuXHRcdGRlYnVnLmV4dGVuZCA9IGV4dGVuZDtcblx0XHRkZWJ1Zy5kZXN0cm95ID0gY3JlYXRlRGVidWcuZGVzdHJveTsgLy8gWFhYIFRlbXBvcmFyeS4gV2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuXG5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVidWcsICdlbmFibGVkJywge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG5cdFx0XHRnZXQ6ICgpID0+IHtcblx0XHRcdFx0aWYgKGVuYWJsZU92ZXJyaWRlICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVuYWJsZU92ZXJyaWRlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChuYW1lc3BhY2VzQ2FjaGUgIT09IGNyZWF0ZURlYnVnLm5hbWVzcGFjZXMpIHtcblx0XHRcdFx0XHRuYW1lc3BhY2VzQ2FjaGUgPSBjcmVhdGVEZWJ1Zy5uYW1lc3BhY2VzO1xuXHRcdFx0XHRcdGVuYWJsZWRDYWNoZSA9IGNyZWF0ZURlYnVnLmVuYWJsZWQobmFtZXNwYWNlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBlbmFibGVkQ2FjaGU7XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiB2ID0+IHtcblx0XHRcdFx0ZW5hYmxlT3ZlcnJpZGUgPSB2O1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gRW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcblx0XHRpZiAodHlwZW9mIGNyZWF0ZURlYnVnLmluaXQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNyZWF0ZURlYnVnLmluaXQoZGVidWcpO1xuXHRcdH1cblxuXHRcdHJldHVybiBkZWJ1Zztcblx0fVxuXG5cdGZ1bmN0aW9uIGV4dGVuZChuYW1lc3BhY2UsIGRlbGltaXRlcikge1xuXHRcdGNvbnN0IG5ld0RlYnVnID0gY3JlYXRlRGVidWcodGhpcy5uYW1lc3BhY2UgKyAodHlwZW9mIGRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgPyAnOicgOiBkZWxpbWl0ZXIpICsgbmFtZXNwYWNlKTtcblx0XHRuZXdEZWJ1Zy5sb2cgPSB0aGlzLmxvZztcblx0XHRyZXR1cm4gbmV3RGVidWc7XG5cdH1cblxuXHQvKipcblx0KiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG5cdCogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZW5hYmxlKG5hbWVzcGFjZXMpIHtcblx0XHRjcmVhdGVEZWJ1Zy5zYXZlKG5hbWVzcGFjZXMpO1xuXHRcdGNyZWF0ZURlYnVnLm5hbWVzcGFjZXMgPSBuYW1lc3BhY2VzO1xuXG5cdFx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0XHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdFx0bGV0IGk7XG5cdFx0Y29uc3Qgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuXHRcdGNvbnN0IGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKCFzcGxpdFtpXSkge1xuXHRcdFx0XHQvLyBpZ25vcmUgZW1wdHkgc3RyaW5nc1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0bmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG5cblx0XHRcdGlmIChuYW1lc3BhY2VzWzBdID09PSAnLScpIHtcblx0XHRcdFx0Y3JlYXRlRGVidWcuc2tpcHMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMuc3Vic3RyKDEpICsgJyQnKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuXHQqXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZGlzYWJsZSgpIHtcblx0XHRjb25zdCBuYW1lc3BhY2VzID0gW1xuXHRcdFx0Li4uY3JlYXRlRGVidWcubmFtZXMubWFwKHRvTmFtZXNwYWNlKSxcblx0XHRcdC4uLmNyZWF0ZURlYnVnLnNraXBzLm1hcCh0b05hbWVzcGFjZSkubWFwKG5hbWVzcGFjZSA9PiAnLScgKyBuYW1lc3BhY2UpXG5cdFx0XS5qb2luKCcsJyk7XG5cdFx0Y3JlYXRlRGVidWcuZW5hYmxlKCcnKTtcblx0XHRyZXR1cm4gbmFtZXNwYWNlcztcblx0fVxuXG5cdC8qKlxuXHQqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG5cdCogQHJldHVybiB7Qm9vbGVhbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcblx0XHRpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGxldCBpO1xuXHRcdGxldCBsZW47XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcubmFtZXNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0KiBDb252ZXJ0IHJlZ2V4cCB0byBuYW1lc3BhY2Vcblx0KlxuXHQqIEBwYXJhbSB7UmVnRXhwfSByZWd4ZXBcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiB0b05hbWVzcGFjZShyZWdleHApIHtcblx0XHRyZXR1cm4gcmVnZXhwLnRvU3RyaW5nKClcblx0XHRcdC5zdWJzdHJpbmcoMiwgcmVnZXhwLnRvU3RyaW5nKCkubGVuZ3RoIC0gMilcblx0XHRcdC5yZXBsYWNlKC9cXC5cXCpcXD8kLywgJyonKTtcblx0fVxuXG5cdC8qKlxuXHQqIENvZXJjZSBgdmFsYC5cblx0KlxuXHQqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuXHQqIEByZXR1cm4ge01peGVkfVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBjb2VyY2UodmFsKSB7XG5cdFx0aWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRyZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsO1xuXHR9XG5cblx0LyoqXG5cdCogWFhYIERPIE5PVCBVU0UuIFRoaXMgaXMgYSB0ZW1wb3Jhcnkgc3R1YiBmdW5jdGlvbi5cblx0KiBYWFggSXQgV0lMTCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuXG5cdCovXG5cdGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdFx0Y29uc29sZS53YXJuKCdJbnN0YW5jZSBtZXRob2QgYGRlYnVnLmRlc3Ryb3koKWAgaXMgZGVwcmVjYXRlZCBhbmQgbm8gbG9uZ2VyIGRvZXMgYW55dGhpbmcuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIG9mIGBkZWJ1Z2AuJyk7XG5cdH1cblxuXHRjcmVhdGVEZWJ1Zy5lbmFibGUoY3JlYXRlRGVidWcubG9hZCgpKTtcblxuXHRyZXR1cm4gY3JlYXRlRGVidWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0dXA7XG4iLCIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSBsb2NhbHN0b3JhZ2UoKTtcbmV4cG9ydHMuZGVzdHJveSA9ICgoKSA9PiB7XG5cdGxldCB3YXJuZWQgPSBmYWxzZTtcblxuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGlmICghd2FybmVkKSB7XG5cdFx0XHR3YXJuZWQgPSB0cnVlO1xuXHRcdFx0Y29uc29sZS53YXJuKCdJbnN0YW5jZSBtZXRob2QgYGRlYnVnLmRlc3Ryb3koKWAgaXMgZGVwcmVjYXRlZCBhbmQgbm8gbG9uZ2VyIGRvZXMgYW55dGhpbmcuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIG9mIGBkZWJ1Z2AuJyk7XG5cdFx0fVxuXHR9O1xufSkoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG5cdCcjMDAwMENDJyxcblx0JyMwMDAwRkYnLFxuXHQnIzAwMzNDQycsXG5cdCcjMDAzM0ZGJyxcblx0JyMwMDY2Q0MnLFxuXHQnIzAwNjZGRicsXG5cdCcjMDA5OUNDJyxcblx0JyMwMDk5RkYnLFxuXHQnIzAwQ0MwMCcsXG5cdCcjMDBDQzMzJyxcblx0JyMwMENDNjYnLFxuXHQnIzAwQ0M5OScsXG5cdCcjMDBDQ0NDJyxcblx0JyMwMENDRkYnLFxuXHQnIzMzMDBDQycsXG5cdCcjMzMwMEZGJyxcblx0JyMzMzMzQ0MnLFxuXHQnIzMzMzNGRicsXG5cdCcjMzM2NkNDJyxcblx0JyMzMzY2RkYnLFxuXHQnIzMzOTlDQycsXG5cdCcjMzM5OUZGJyxcblx0JyMzM0NDMDAnLFxuXHQnIzMzQ0MzMycsXG5cdCcjMzNDQzY2Jyxcblx0JyMzM0NDOTknLFxuXHQnIzMzQ0NDQycsXG5cdCcjMzNDQ0ZGJyxcblx0JyM2NjAwQ0MnLFxuXHQnIzY2MDBGRicsXG5cdCcjNjYzM0NDJyxcblx0JyM2NjMzRkYnLFxuXHQnIzY2Q0MwMCcsXG5cdCcjNjZDQzMzJyxcblx0JyM5OTAwQ0MnLFxuXHQnIzk5MDBGRicsXG5cdCcjOTkzM0NDJyxcblx0JyM5OTMzRkYnLFxuXHQnIzk5Q0MwMCcsXG5cdCcjOTlDQzMzJyxcblx0JyNDQzAwMDAnLFxuXHQnI0NDMDAzMycsXG5cdCcjQ0MwMDY2Jyxcblx0JyNDQzAwOTknLFxuXHQnI0NDMDBDQycsXG5cdCcjQ0MwMEZGJyxcblx0JyNDQzMzMDAnLFxuXHQnI0NDMzMzMycsXG5cdCcjQ0MzMzY2Jyxcblx0JyNDQzMzOTknLFxuXHQnI0NDMzNDQycsXG5cdCcjQ0MzM0ZGJyxcblx0JyNDQzY2MDAnLFxuXHQnI0NDNjYzMycsXG5cdCcjQ0M5OTAwJyxcblx0JyNDQzk5MzMnLFxuXHQnI0NDQ0MwMCcsXG5cdCcjQ0NDQzMzJyxcblx0JyNGRjAwMDAnLFxuXHQnI0ZGMDAzMycsXG5cdCcjRkYwMDY2Jyxcblx0JyNGRjAwOTknLFxuXHQnI0ZGMDBDQycsXG5cdCcjRkYwMEZGJyxcblx0JyNGRjMzMDAnLFxuXHQnI0ZGMzMzMycsXG5cdCcjRkYzMzY2Jyxcblx0JyNGRjMzOTknLFxuXHQnI0ZGMzNDQycsXG5cdCcjRkYzM0ZGJyxcblx0JyNGRjY2MDAnLFxuXHQnI0ZGNjYzMycsXG5cdCcjRkY5OTAwJyxcblx0JyNGRjk5MzMnLFxuXHQnI0ZGQ0MwMCcsXG5cdCcjRkZDQzMzJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuXHQvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG5cdC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG5cdC8vIGV4cGxpY2l0bHlcblx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmICh3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInIHx8IHdpbmRvdy5wcm9jZXNzLl9fbndqcykpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlIGRvIG5vdCBzdXBwb3J0IGNvbG9ycy5cblx0aWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8oZWRnZXx0cmlkZW50KVxcLyhcXGQrKS8pKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gSXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcblx0Ly8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcblx0cmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG5cdFx0Ly8gSXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuXHRcdCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG5cdFx0Ly8gSXMgZmlyZWZveCA+PSB2MzE/XG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG5cdFx0Ly8gRG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG5cdGFyZ3NbMF0gPSAodGhpcy51c2VDb2xvcnMgPyAnJWMnIDogJycpICtcblx0XHR0aGlzLm5hbWVzcGFjZSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyAlYycgOiAnICcpICtcblx0XHRhcmdzWzBdICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnJWMgJyA6ICcgJykgK1xuXHRcdCcrJyArIG1vZHVsZS5leHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cblx0aWYgKCF0aGlzLnVzZUNvbG9ycykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuXHRhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKTtcblxuXHQvLyBUaGUgZmluYWwgXCIlY1wiIGlzIHNvbWV3aGF0IHRyaWNreSwgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvdGhlclxuXHQvLyBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlICVjLCBzbyB3ZSBuZWVkIHRvXG5cdC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuXHRsZXQgaW5kZXggPSAwO1xuXHRsZXQgbGFzdEMgPSAwO1xuXHRhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgbWF0Y2ggPT4ge1xuXHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpbmRleCsrO1xuXHRcdGlmIChtYXRjaCA9PT0gJyVjJykge1xuXHRcdFx0Ly8gV2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG5cdFx0XHQvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuXHRcdFx0bGFzdEMgPSBpbmRleDtcblx0XHR9XG5cdH0pO1xuXG5cdGFyZ3Muc3BsaWNlKGxhc3RDLCAwLCBjKTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmRlYnVnKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5kZWJ1Z2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICogSWYgYGNvbnNvbGUuZGVidWdgIGlzIG5vdCBhdmFpbGFibGUsIGZhbGxzIGJhY2tcbiAqIHRvIGBjb25zb2xlLmxvZ2AuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZXhwb3J0cy5sb2cgPSBjb25zb2xlLmRlYnVnIHx8IGNvbnNvbGUubG9nIHx8ICgoKSA9PiB7fSk7XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcblx0dHJ5IHtcblx0XHRpZiAobmFtZXNwYWNlcykge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnNldEl0ZW0oJ2RlYnVnJywgbmFtZXNwYWNlcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbG9hZCgpIHtcblx0bGV0IHI7XG5cdHRyeSB7XG5cdFx0ciA9IGV4cG9ydHMuc3RvcmFnZS5nZXRJdGVtKCdkZWJ1ZycpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxuXG5cdC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcblx0aWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG5cdFx0ciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuXHR9XG5cblx0cmV0dXJuIHI7XG59XG5cbi8qKlxuICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gKlxuICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuXHR0cnkge1xuXHRcdC8vIFRWTUxLaXQgKEFwcGxlIFRWIEpTIFJ1bnRpbWUpIGRvZXMgbm90IGhhdmUgYSB3aW5kb3cgb2JqZWN0LCBqdXN0IGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHRcblx0XHQvLyBUaGUgQnJvd3NlciBhbHNvIGhhcyBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0LlxuXHRcdHJldHVybiBsb2NhbFN0b3JhZ2U7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21tb24nKShleHBvcnRzKTtcblxuY29uc3Qge2Zvcm1hdHRlcnN9ID0gbW9kdWxlLmV4cG9ydHM7XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uICh2KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnJvci5tZXNzYWdlO1xuXHR9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChmbGFnLCBhcmd2ID0gcHJvY2Vzcy5hcmd2KSA9PiB7XG5cdGNvbnN0IHByZWZpeCA9IGZsYWcuc3RhcnRzV2l0aCgnLScpID8gJycgOiAoZmxhZy5sZW5ndGggPT09IDEgPyAnLScgOiAnLS0nKTtcblx0Y29uc3QgcG9zaXRpb24gPSBhcmd2LmluZGV4T2YocHJlZml4ICsgZmxhZyk7XG5cdGNvbnN0IHRlcm1pbmF0b3JQb3NpdGlvbiA9IGFyZ3YuaW5kZXhPZignLS0nKTtcblx0cmV0dXJuIHBvc2l0aW9uICE9PSAtMSAmJiAodGVybWluYXRvclBvc2l0aW9uID09PSAtMSB8fCBwb3NpdGlvbiA8IHRlcm1pbmF0b3JQb3NpdGlvbik7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3Qgb3MgPSByZXF1aXJlKCdvcycpO1xuY29uc3QgdHR5ID0gcmVxdWlyZSgndHR5Jyk7XG5jb25zdCBoYXNGbGFnID0gcmVxdWlyZSgnaGFzLWZsYWcnKTtcblxuY29uc3Qge2Vudn0gPSBwcm9jZXNzO1xuXG5sZXQgZm9yY2VDb2xvcjtcbmlmIChoYXNGbGFnKCduby1jb2xvcicpIHx8XG5cdGhhc0ZsYWcoJ25vLWNvbG9ycycpIHx8XG5cdGhhc0ZsYWcoJ2NvbG9yPWZhbHNlJykgfHxcblx0aGFzRmxhZygnY29sb3I9bmV2ZXInKSkge1xuXHRmb3JjZUNvbG9yID0gMDtcbn0gZWxzZSBpZiAoaGFzRmxhZygnY29sb3InKSB8fFxuXHRoYXNGbGFnKCdjb2xvcnMnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj10cnVlJykgfHxcblx0aGFzRmxhZygnY29sb3I9YWx3YXlzJykpIHtcblx0Zm9yY2VDb2xvciA9IDE7XG59XG5cbmlmICgnRk9SQ0VfQ09MT1InIGluIGVudikge1xuXHRpZiAoZW52LkZPUkNFX0NPTE9SID09PSAndHJ1ZScpIHtcblx0XHRmb3JjZUNvbG9yID0gMTtcblx0fSBlbHNlIGlmIChlbnYuRk9SQ0VfQ09MT1IgPT09ICdmYWxzZScpIHtcblx0XHRmb3JjZUNvbG9yID0gMDtcblx0fSBlbHNlIHtcblx0XHRmb3JjZUNvbG9yID0gZW52LkZPUkNFX0NPTE9SLmxlbmd0aCA9PT0gMCA/IDEgOiBNYXRoLm1pbihwYXJzZUludChlbnYuRk9SQ0VfQ09MT1IsIDEwKSwgMyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlTGV2ZWwobGV2ZWwpIHtcblx0aWYgKGxldmVsID09PSAwKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRsZXZlbCxcblx0XHRoYXNCYXNpYzogdHJ1ZSxcblx0XHRoYXMyNTY6IGxldmVsID49IDIsXG5cdFx0aGFzMTZtOiBsZXZlbCA+PSAzXG5cdH07XG59XG5cbmZ1bmN0aW9uIHN1cHBvcnRzQ29sb3IoaGF2ZVN0cmVhbSwgc3RyZWFtSXNUVFkpIHtcblx0aWYgKGZvcmNlQ29sb3IgPT09IDApIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGlmIChoYXNGbGFnKCdjb2xvcj0xNm0nKSB8fFxuXHRcdGhhc0ZsYWcoJ2NvbG9yPWZ1bGwnKSB8fFxuXHRcdGhhc0ZsYWcoJ2NvbG9yPXRydWVjb2xvcicpKSB7XG5cdFx0cmV0dXJuIDM7XG5cdH1cblxuXHRpZiAoaGFzRmxhZygnY29sb3I9MjU2JykpIHtcblx0XHRyZXR1cm4gMjtcblx0fVxuXG5cdGlmIChoYXZlU3RyZWFtICYmICFzdHJlYW1Jc1RUWSAmJiBmb3JjZUNvbG9yID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGNvbnN0IG1pbiA9IGZvcmNlQ29sb3IgfHwgMDtcblxuXHRpZiAoZW52LlRFUk0gPT09ICdkdW1iJykge1xuXHRcdHJldHVybiBtaW47XG5cdH1cblxuXHRpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuXHRcdC8vIFdpbmRvd3MgMTAgYnVpbGQgMTA1ODYgaXMgdGhlIGZpcnN0IFdpbmRvd3MgcmVsZWFzZSB0aGF0IHN1cHBvcnRzIDI1NiBjb2xvcnMuXG5cdFx0Ly8gV2luZG93cyAxMCBidWlsZCAxNDkzMSBpcyB0aGUgZmlyc3QgcmVsZWFzZSB0aGF0IHN1cHBvcnRzIDE2bS9UcnVlQ29sb3IuXG5cdFx0Y29uc3Qgb3NSZWxlYXNlID0gb3MucmVsZWFzZSgpLnNwbGl0KCcuJyk7XG5cdFx0aWYgKFxuXHRcdFx0TnVtYmVyKG9zUmVsZWFzZVswXSkgPj0gMTAgJiZcblx0XHRcdE51bWJlcihvc1JlbGVhc2VbMl0pID49IDEwNTg2XG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyKG9zUmVsZWFzZVsyXSkgPj0gMTQ5MzEgPyAzIDogMjtcblx0XHR9XG5cblx0XHRyZXR1cm4gMTtcblx0fVxuXG5cdGlmICgnQ0knIGluIGVudikge1xuXHRcdGlmIChbJ1RSQVZJUycsICdDSVJDTEVDSScsICdBUFBWRVlPUicsICdHSVRMQUJfQ0knLCAnR0lUSFVCX0FDVElPTlMnLCAnQlVJTERLSVRFJ10uc29tZShzaWduID0+IHNpZ24gaW4gZW52KSB8fCBlbnYuQ0lfTkFNRSA9PT0gJ2NvZGVzaGlwJykge1xuXHRcdFx0cmV0dXJuIDE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1pbjtcblx0fVxuXG5cdGlmICgnVEVBTUNJVFlfVkVSU0lPTicgaW4gZW52KSB7XG5cdFx0cmV0dXJuIC9eKDlcXC4oMCpbMS05XVxcZCopXFwufFxcZHsyLH1cXC4pLy50ZXN0KGVudi5URUFNQ0lUWV9WRVJTSU9OKSA/IDEgOiAwO1xuXHR9XG5cblx0aWYgKGVudi5DT0xPUlRFUk0gPT09ICd0cnVlY29sb3InKSB7XG5cdFx0cmV0dXJuIDM7XG5cdH1cblxuXHRpZiAoJ1RFUk1fUFJPR1JBTScgaW4gZW52KSB7XG5cdFx0Y29uc3QgdmVyc2lvbiA9IHBhcnNlSW50KChlbnYuVEVSTV9QUk9HUkFNX1ZFUlNJT04gfHwgJycpLnNwbGl0KCcuJylbMF0sIDEwKTtcblxuXHRcdHN3aXRjaCAoZW52LlRFUk1fUFJPR1JBTSkge1xuXHRcdFx0Y2FzZSAnaVRlcm0uYXBwJzpcblx0XHRcdFx0cmV0dXJuIHZlcnNpb24gPj0gMyA/IDMgOiAyO1xuXHRcdFx0Y2FzZSAnQXBwbGVfVGVybWluYWwnOlxuXHRcdFx0XHRyZXR1cm4gMjtcblx0XHRcdC8vIE5vIGRlZmF1bHRcblx0XHR9XG5cdH1cblxuXHRpZiAoLy0yNTYoY29sb3IpPyQvaS50ZXN0KGVudi5URVJNKSkge1xuXHRcdHJldHVybiAyO1xuXHR9XG5cblx0aWYgKC9ec2NyZWVufF54dGVybXxednQxMDB8XnZ0MjIwfF5yeHZ0fGNvbG9yfGFuc2l8Y3lnd2lufGxpbnV4L2kudGVzdChlbnYuVEVSTSkpIHtcblx0XHRyZXR1cm4gMTtcblx0fVxuXG5cdGlmICgnQ09MT1JURVJNJyBpbiBlbnYpIHtcblx0XHRyZXR1cm4gMTtcblx0fVxuXG5cdHJldHVybiBtaW47XG59XG5cbmZ1bmN0aW9uIGdldFN1cHBvcnRMZXZlbChzdHJlYW0pIHtcblx0Y29uc3QgbGV2ZWwgPSBzdXBwb3J0c0NvbG9yKHN0cmVhbSwgc3RyZWFtICYmIHN0cmVhbS5pc1RUWSk7XG5cdHJldHVybiB0cmFuc2xhdGVMZXZlbChsZXZlbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRzdXBwb3J0c0NvbG9yOiBnZXRTdXBwb3J0TGV2ZWwsXG5cdHN0ZG91dDogdHJhbnNsYXRlTGV2ZWwoc3VwcG9ydHNDb2xvcih0cnVlLCB0dHkuaXNhdHR5KDEpKSksXG5cdHN0ZGVycjogdHJhbnNsYXRlTGV2ZWwoc3VwcG9ydHNDb2xvcih0cnVlLCB0dHkuaXNhdHR5KDIpKSlcbn07XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxuY29uc3QgdHR5ID0gcmVxdWlyZSgndHR5Jyk7XG5jb25zdCB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIE5vZGUuanMgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICovXG5cbmV4cG9ydHMuaW5pdCA9IGluaXQ7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5kZXN0cm95ID0gdXRpbC5kZXByZWNhdGUoXG5cdCgpID0+IHt9LFxuXHQnSW5zdGFuY2UgbWV0aG9kIGBkZWJ1Zy5kZXN0cm95KClgIGlzIGRlcHJlY2F0ZWQgYW5kIG5vIGxvbmdlciBkb2VzIGFueXRoaW5nLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiBgZGVidWdgLidcbik7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gWzYsIDIsIDMsIDQsIDUsIDFdO1xuXG50cnkge1xuXHQvLyBPcHRpb25hbCBkZXBlbmRlbmN5IChhcyBpbiwgZG9lc24ndCBuZWVkIHRvIGJlIGluc3RhbGxlZCwgTk9UIGxpa2Ugb3B0aW9uYWxEZXBlbmRlbmNpZXMgaW4gcGFja2FnZS5qc29uKVxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5cdGNvbnN0IHN1cHBvcnRzQ29sb3IgPSByZXF1aXJlKCdzdXBwb3J0cy1jb2xvcicpO1xuXG5cdGlmIChzdXBwb3J0c0NvbG9yICYmIChzdXBwb3J0c0NvbG9yLnN0ZGVyciB8fCBzdXBwb3J0c0NvbG9yKS5sZXZlbCA+PSAyKSB7XG5cdFx0ZXhwb3J0cy5jb2xvcnMgPSBbXG5cdFx0XHQyMCxcblx0XHRcdDIxLFxuXHRcdFx0MjYsXG5cdFx0XHQyNyxcblx0XHRcdDMyLFxuXHRcdFx0MzMsXG5cdFx0XHQzOCxcblx0XHRcdDM5LFxuXHRcdFx0NDAsXG5cdFx0XHQ0MSxcblx0XHRcdDQyLFxuXHRcdFx0NDMsXG5cdFx0XHQ0NCxcblx0XHRcdDQ1LFxuXHRcdFx0NTYsXG5cdFx0XHQ1Nyxcblx0XHRcdDYyLFxuXHRcdFx0NjMsXG5cdFx0XHQ2OCxcblx0XHRcdDY5LFxuXHRcdFx0NzQsXG5cdFx0XHQ3NSxcblx0XHRcdDc2LFxuXHRcdFx0NzcsXG5cdFx0XHQ3OCxcblx0XHRcdDc5LFxuXHRcdFx0ODAsXG5cdFx0XHQ4MSxcblx0XHRcdDkyLFxuXHRcdFx0OTMsXG5cdFx0XHQ5OCxcblx0XHRcdDk5LFxuXHRcdFx0MTEyLFxuXHRcdFx0MTEzLFxuXHRcdFx0MTI4LFxuXHRcdFx0MTI5LFxuXHRcdFx0MTM0LFxuXHRcdFx0MTM1LFxuXHRcdFx0MTQ4LFxuXHRcdFx0MTQ5LFxuXHRcdFx0MTYwLFxuXHRcdFx0MTYxLFxuXHRcdFx0MTYyLFxuXHRcdFx0MTYzLFxuXHRcdFx0MTY0LFxuXHRcdFx0MTY1LFxuXHRcdFx0MTY2LFxuXHRcdFx0MTY3LFxuXHRcdFx0MTY4LFxuXHRcdFx0MTY5LFxuXHRcdFx0MTcwLFxuXHRcdFx0MTcxLFxuXHRcdFx0MTcyLFxuXHRcdFx0MTczLFxuXHRcdFx0MTc4LFxuXHRcdFx0MTc5LFxuXHRcdFx0MTg0LFxuXHRcdFx0MTg1LFxuXHRcdFx0MTk2LFxuXHRcdFx0MTk3LFxuXHRcdFx0MTk4LFxuXHRcdFx0MTk5LFxuXHRcdFx0MjAwLFxuXHRcdFx0MjAxLFxuXHRcdFx0MjAyLFxuXHRcdFx0MjAzLFxuXHRcdFx0MjA0LFxuXHRcdFx0MjA1LFxuXHRcdFx0MjA2LFxuXHRcdFx0MjA3LFxuXHRcdFx0MjA4LFxuXHRcdFx0MjA5LFxuXHRcdFx0MjE0LFxuXHRcdFx0MjE1LFxuXHRcdFx0MjIwLFxuXHRcdFx0MjIxXG5cdFx0XTtcblx0fVxufSBjYXRjaCAoZXJyb3IpIHtcblx0Ly8gU3dhbGxvdyAtIHdlIG9ubHkgY2FyZSBpZiBgc3VwcG9ydHMtY29sb3JgIGlzIGF2YWlsYWJsZTsgaXQgZG9lc24ndCBoYXZlIHRvIGJlLlxufVxuXG4vKipcbiAqIEJ1aWxkIHVwIHRoZSBkZWZhdWx0IGBpbnNwZWN0T3B0c2Agb2JqZWN0IGZyb20gdGhlIGVudmlyb25tZW50IHZhcmlhYmxlcy5cbiAqXG4gKiAgICQgREVCVUdfQ09MT1JTPW5vIERFQlVHX0RFUFRIPTEwIERFQlVHX1NIT1dfSElEREVOPWVuYWJsZWQgbm9kZSBzY3JpcHQuanNcbiAqL1xuXG5leHBvcnRzLmluc3BlY3RPcHRzID0gT2JqZWN0LmtleXMocHJvY2Vzcy5lbnYpLmZpbHRlcihrZXkgPT4ge1xuXHRyZXR1cm4gL15kZWJ1Z18vaS50ZXN0KGtleSk7XG59KS5yZWR1Y2UoKG9iaiwga2V5KSA9PiB7XG5cdC8vIENhbWVsLWNhc2Vcblx0Y29uc3QgcHJvcCA9IGtleVxuXHRcdC5zdWJzdHJpbmcoNilcblx0XHQudG9Mb3dlckNhc2UoKVxuXHRcdC5yZXBsYWNlKC9fKFthLXpdKS9nLCAoXywgaykgPT4ge1xuXHRcdFx0cmV0dXJuIGsudG9VcHBlckNhc2UoKTtcblx0XHR9KTtcblxuXHQvLyBDb2VyY2Ugc3RyaW5nIHZhbHVlIGludG8gSlMgdmFsdWVcblx0bGV0IHZhbCA9IHByb2Nlc3MuZW52W2tleV07XG5cdGlmICgvXih5ZXN8b258dHJ1ZXxlbmFibGVkKSQvaS50ZXN0KHZhbCkpIHtcblx0XHR2YWwgPSB0cnVlO1xuXHR9IGVsc2UgaWYgKC9eKG5vfG9mZnxmYWxzZXxkaXNhYmxlZCkkL2kudGVzdCh2YWwpKSB7XG5cdFx0dmFsID0gZmFsc2U7XG5cdH0gZWxzZSBpZiAodmFsID09PSAnbnVsbCcpIHtcblx0XHR2YWwgPSBudWxsO1xuXHR9IGVsc2Uge1xuXHRcdHZhbCA9IE51bWJlcih2YWwpO1xuXHR9XG5cblx0b2JqW3Byb3BdID0gdmFsO1xuXHRyZXR1cm4gb2JqO1xufSwge30pO1xuXG4vKipcbiAqIElzIHN0ZG91dCBhIFRUWT8gQ29sb3JlZCBvdXRwdXQgaXMgZW5hYmxlZCB3aGVuIGB0cnVlYC5cbiAqL1xuXG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG5cdHJldHVybiAnY29sb3JzJyBpbiBleHBvcnRzLmluc3BlY3RPcHRzID9cblx0XHRCb29sZWFuKGV4cG9ydHMuaW5zcGVjdE9wdHMuY29sb3JzKSA6XG5cdFx0dHR5LmlzYXR0eShwcm9jZXNzLnN0ZGVyci5mZCk7XG59XG5cbi8qKlxuICogQWRkcyBBTlNJIGNvbG9yIGVzY2FwZSBjb2RlcyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG5cdGNvbnN0IHtuYW1lc3BhY2U6IG5hbWUsIHVzZUNvbG9yc30gPSB0aGlzO1xuXG5cdGlmICh1c2VDb2xvcnMpIHtcblx0XHRjb25zdCBjID0gdGhpcy5jb2xvcjtcblx0XHRjb25zdCBjb2xvckNvZGUgPSAnXFx1MDAxQlszJyArIChjIDwgOCA/IGMgOiAnODs1OycgKyBjKTtcblx0XHRjb25zdCBwcmVmaXggPSBgICAke2NvbG9yQ29kZX07MW0ke25hbWV9IFxcdTAwMUJbMG1gO1xuXG5cdFx0YXJnc1swXSA9IHByZWZpeCArIGFyZ3NbMF0uc3BsaXQoJ1xcbicpLmpvaW4oJ1xcbicgKyBwcmVmaXgpO1xuXHRcdGFyZ3MucHVzaChjb2xvckNvZGUgKyAnbSsnICsgbW9kdWxlLmV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKSArICdcXHUwMDFCWzBtJyk7XG5cdH0gZWxzZSB7XG5cdFx0YXJnc1swXSA9IGdldERhdGUoKSArIG5hbWUgKyAnICcgKyBhcmdzWzBdO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldERhdGUoKSB7XG5cdGlmIChleHBvcnRzLmluc3BlY3RPcHRzLmhpZGVEYXRlKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdHJldHVybiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgKyAnICc7XG59XG5cbi8qKlxuICogSW52b2tlcyBgdXRpbC5mb3JtYXQoKWAgd2l0aCB0aGUgc3BlY2lmaWVkIGFyZ3VtZW50cyBhbmQgd3JpdGVzIHRvIHN0ZGVyci5cbiAqL1xuXG5mdW5jdGlvbiBsb2coLi4uYXJncykge1xuXHRyZXR1cm4gcHJvY2Vzcy5zdGRlcnIud3JpdGUodXRpbC5mb3JtYXQoLi4uYXJncykgKyAnXFxuJyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcblx0aWYgKG5hbWVzcGFjZXMpIHtcblx0XHRwcm9jZXNzLmVudi5ERUJVRyA9IG5hbWVzcGFjZXM7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gSWYgeW91IHNldCBhIHByb2Nlc3MuZW52IGZpZWxkIHRvIG51bGwgb3IgdW5kZWZpbmVkLCBpdCBnZXRzIGNhc3QgdG8gdGhlXG5cdFx0Ly8gc3RyaW5nICdudWxsJyBvciAndW5kZWZpbmVkJy4gSnVzdCBkZWxldGUgaW5zdGVhZC5cblx0XHRkZWxldGUgcHJvY2Vzcy5lbnYuREVCVUc7XG5cdH1cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2FkKCkge1xuXHRyZXR1cm4gcHJvY2Vzcy5lbnYuREVCVUc7XG59XG5cbi8qKlxuICogSW5pdCBsb2dpYyBmb3IgYGRlYnVnYCBpbnN0YW5jZXMuXG4gKlxuICogQ3JlYXRlIGEgbmV3IGBpbnNwZWN0T3B0c2Agb2JqZWN0IGluIGNhc2UgYHVzZUNvbG9yc2AgaXMgc2V0XG4gKiBkaWZmZXJlbnRseSBmb3IgYSBwYXJ0aWN1bGFyIGBkZWJ1Z2AgaW5zdGFuY2UuXG4gKi9cblxuZnVuY3Rpb24gaW5pdChkZWJ1Zykge1xuXHRkZWJ1Zy5pbnNwZWN0T3B0cyA9IHt9O1xuXG5cdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmluc3BlY3RPcHRzKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0ZGVidWcuaW5zcGVjdE9wdHNba2V5c1tpXV0gPSBleHBvcnRzLmluc3BlY3RPcHRzW2tleXNbaV1dO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21tb24nKShleHBvcnRzKTtcblxuY29uc3Qge2Zvcm1hdHRlcnN9ID0gbW9kdWxlLmV4cG9ydHM7XG5cbi8qKlxuICogTWFwICVvIHRvIGB1dGlsLmluc3BlY3QoKWAsIGFsbCBvbiBhIHNpbmdsZSBsaW5lLlxuICovXG5cbmZvcm1hdHRlcnMubyA9IGZ1bmN0aW9uICh2KSB7XG5cdHRoaXMuaW5zcGVjdE9wdHMuY29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cdHJldHVybiB1dGlsLmluc3BlY3QodiwgdGhpcy5pbnNwZWN0T3B0cylcblx0XHQuc3BsaXQoJ1xcbicpXG5cdFx0Lm1hcChzdHIgPT4gc3RyLnRyaW0oKSlcblx0XHQuam9pbignICcpO1xufTtcblxuLyoqXG4gKiBNYXAgJU8gdG8gYHV0aWwuaW5zcGVjdCgpYCwgYWxsb3dpbmcgbXVsdGlwbGUgbGluZXMgaWYgbmVlZGVkLlxuICovXG5cbmZvcm1hdHRlcnMuTyA9IGZ1bmN0aW9uICh2KSB7XG5cdHRoaXMuaW5zcGVjdE9wdHMuY29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cdHJldHVybiB1dGlsLmluc3BlY3QodiwgdGhpcy5pbnNwZWN0T3B0cyk7XG59O1xuIiwiLyoqXG4gKiBEZXRlY3QgRWxlY3Ryb24gcmVuZGVyZXIgLyBud2pzIHByb2Nlc3MsIHdoaWNoIGlzIG5vZGUsIGJ1dCB3ZSBzaG91bGRcbiAqIHRyZWF0IGFzIGEgYnJvd3Nlci5cbiAqL1xuXG5pZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnIHx8IHByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJyB8fCBwcm9jZXNzLmJyb3dzZXIgPT09IHRydWUgfHwgcHJvY2Vzcy5fX253anMpIHtcblx0bW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Jyb3dzZXIuanMnKTtcbn0gZWxzZSB7XG5cdG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9ub2RlLmpzJyk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZzXzEgPSByZXF1aXJlKFwiZnNcIik7XG5jb25zdCBkZWJ1Z18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJkZWJ1Z1wiKSk7XG5jb25zdCBsb2cgPSBkZWJ1Z18xLmRlZmF1bHQoJ0Brd3NpdGVzL2ZpbGUtZXhpc3RzJyk7XG5mdW5jdGlvbiBjaGVjayhwYXRoLCBpc0ZpbGUsIGlzRGlyZWN0b3J5KSB7XG4gICAgbG9nKGBjaGVja2luZyAlc2AsIHBhdGgpO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHN0YXQgPSBmc18xLnN0YXRTeW5jKHBhdGgpO1xuICAgICAgICBpZiAoc3RhdC5pc0ZpbGUoKSAmJiBpc0ZpbGUpIHtcbiAgICAgICAgICAgIGxvZyhgW09LXSBwYXRoIHJlcHJlc2VudHMgYSBmaWxlYCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdC5pc0RpcmVjdG9yeSgpICYmIGlzRGlyZWN0b3J5KSB7XG4gICAgICAgICAgICBsb2coYFtPS10gcGF0aCByZXByZXNlbnRzIGEgZGlyZWN0b3J5YCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsb2coYFtGQUlMXSBwYXRoIHJlcHJlc2VudHMgc29tZXRoaW5nIG90aGVyIHRoYW4gYSBmaWxlIG9yIGRpcmVjdG9yeWApO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChlLmNvZGUgPT09ICdFTk9FTlQnKSB7XG4gICAgICAgICAgICBsb2coYFtGQUlMXSBwYXRoIGlzIG5vdCBhY2Nlc3NpYmxlOiAlb2AsIGUpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxvZyhgW0ZBVEFMXSAlb2AsIGUpO1xuICAgICAgICB0aHJvdyBlO1xuICAgIH1cbn1cbi8qKlxuICogU3luY2hyb25vdXMgdmFsaWRhdGlvbiBvZiBhIHBhdGggZXhpc3RpbmcgZWl0aGVyIGFzIGEgZmlsZSBvciBhcyBhIGRpcmVjdG9yeS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVja1xuICogQHBhcmFtIHtudW1iZXJ9IHR5cGUgT25lIG9yIGJvdGggb2YgdGhlIGV4cG9ydGVkIG51bWVyaWMgY29uc3RhbnRzXG4gKi9cbmZ1bmN0aW9uIGV4aXN0cyhwYXRoLCB0eXBlID0gZXhwb3J0cy5SRUFEQUJMRSkge1xuICAgIHJldHVybiBjaGVjayhwYXRoLCAodHlwZSAmIGV4cG9ydHMuRklMRSkgPiAwLCAodHlwZSAmIGV4cG9ydHMuRk9MREVSKSA+IDApO1xufVxuZXhwb3J0cy5leGlzdHMgPSBleGlzdHM7XG4vKipcbiAqIENvbnN0YW50IHJlcHJlc2VudGluZyBhIGZpbGVcbiAqL1xuZXhwb3J0cy5GSUxFID0gMTtcbi8qKlxuICogQ29uc3RhbnQgcmVwcmVzZW50aW5nIGEgZm9sZGVyXG4gKi9cbmV4cG9ydHMuRk9MREVSID0gMjtcbi8qKlxuICogQ29uc3RhbnQgcmVwcmVzZW50aW5nIGVpdGhlciBhIGZpbGUgb3IgYSBmb2xkZXJcbiAqL1xuZXhwb3J0cy5SRUFEQUJMRSA9IGV4cG9ydHMuRklMRSArIGV4cG9ydHMuRk9MREVSO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnQocmVxdWlyZShcIi4vc3JjXCIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5idWZmZXJUb1N0cmluZyA9IGV4cG9ydHMucHJlZml4ZWRBcnJheSA9IGV4cG9ydHMuYXNOdW1iZXIgPSBleHBvcnRzLmFzU3RyaW5nQXJyYXkgPSBleHBvcnRzLmFzQXJyYXkgPSBleHBvcnRzLm9iamVjdFRvU3RyaW5nID0gZXhwb3J0cy5yZW1vdmUgPSBleHBvcnRzLmluY2x1ZGluZyA9IGV4cG9ydHMuYXBwZW5kID0gZXhwb3J0cy5mb2xkZXJFeGlzdHMgPSBleHBvcnRzLmZvckVhY2hMaW5lV2l0aENvbnRlbnQgPSBleHBvcnRzLnRvTGluZXNXaXRoQ29udGVudCA9IGV4cG9ydHMubGFzdCA9IGV4cG9ydHMuZmlyc3QgPSBleHBvcnRzLnNwbGl0T24gPSBleHBvcnRzLmlzVXNlckZ1bmN0aW9uID0gZXhwb3J0cy5hc0Z1bmN0aW9uID0gZXhwb3J0cy5OT09QID0gdm9pZCAwO1xuY29uc3QgZmlsZV9leGlzdHNfMSA9IHJlcXVpcmUoXCJAa3dzaXRlcy9maWxlLWV4aXN0c1wiKTtcbmNvbnN0IE5PT1AgPSAoKSA9PiB7XG59O1xuZXhwb3J0cy5OT09QID0gTk9PUDtcbi8qKlxuICogUmV0dXJucyBlaXRoZXIgdGhlIHNvdXJjZSBhcmd1bWVudCB3aGVuIGl0IGlzIGEgYEZ1bmN0aW9uYCwgb3IgdGhlIGRlZmF1bHRcbiAqIGBOT09QYCBmdW5jdGlvbiBjb25zdGFudFxuICovXG5mdW5jdGlvbiBhc0Z1bmN0aW9uKHNvdXJjZSkge1xuICAgIHJldHVybiB0eXBlb2Ygc291cmNlID09PSAnZnVuY3Rpb24nID8gc291cmNlIDogZXhwb3J0cy5OT09QO1xufVxuZXhwb3J0cy5hc0Z1bmN0aW9uID0gYXNGdW5jdGlvbjtcbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzdXBwbGllZCBhcmd1bWVudCBpcyBib3RoIGEgZnVuY3Rpb24sIGFuZCBpcyBub3RcbiAqIHRoZSBgTk9PUGAgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGlzVXNlckZ1bmN0aW9uKHNvdXJjZSkge1xuICAgIHJldHVybiAodHlwZW9mIHNvdXJjZSA9PT0gJ2Z1bmN0aW9uJyAmJiBzb3VyY2UgIT09IGV4cG9ydHMuTk9PUCk7XG59XG5leHBvcnRzLmlzVXNlckZ1bmN0aW9uID0gaXNVc2VyRnVuY3Rpb247XG5mdW5jdGlvbiBzcGxpdE9uKGlucHV0LCBjaGFyKSB7XG4gICAgY29uc3QgaW5kZXggPSBpbnB1dC5pbmRleE9mKGNoYXIpO1xuICAgIGlmIChpbmRleCA8PSAwKSB7XG4gICAgICAgIHJldHVybiBbaW5wdXQsICcnXTtcbiAgICB9XG4gICAgcmV0dXJuIFtcbiAgICAgICAgaW5wdXQuc3Vic3RyKDAsIGluZGV4KSxcbiAgICAgICAgaW5wdXQuc3Vic3RyKGluZGV4ICsgMSksXG4gICAgXTtcbn1cbmV4cG9ydHMuc3BsaXRPbiA9IHNwbGl0T247XG5mdW5jdGlvbiBmaXJzdChpbnB1dCwgb2Zmc2V0ID0gMCkge1xuICAgIHJldHVybiBpc0FycmF5TGlrZShpbnB1dCkgJiYgaW5wdXQubGVuZ3RoID4gb2Zmc2V0ID8gaW5wdXRbb2Zmc2V0XSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydHMuZmlyc3QgPSBmaXJzdDtcbmZ1bmN0aW9uIGxhc3QoaW5wdXQsIG9mZnNldCA9IDApIHtcbiAgICBpZiAoaXNBcnJheUxpa2UoaW5wdXQpICYmIGlucHV0Lmxlbmd0aCA+IG9mZnNldCkge1xuICAgICAgICByZXR1cm4gaW5wdXRbaW5wdXQubGVuZ3RoIC0gMSAtIG9mZnNldF07XG4gICAgfVxufVxuZXhwb3J0cy5sYXN0ID0gbGFzdDtcbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKGlucHV0KSB7XG4gICAgcmV0dXJuICEhKGlucHV0ICYmIHR5cGVvZiBpbnB1dC5sZW5ndGggPT09ICdudW1iZXInKTtcbn1cbmZ1bmN0aW9uIHRvTGluZXNXaXRoQ29udGVudChpbnB1dCwgdHJpbW1lZCA9IHRydWUsIHNlcGFyYXRvciA9ICdcXG4nKSB7XG4gICAgcmV0dXJuIGlucHV0LnNwbGl0KHNlcGFyYXRvcilcbiAgICAgICAgLnJlZHVjZSgob3V0cHV0LCBsaW5lKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpbmVDb250ZW50ID0gdHJpbW1lZCA/IGxpbmUudHJpbSgpIDogbGluZTtcbiAgICAgICAgaWYgKGxpbmVDb250ZW50KSB7XG4gICAgICAgICAgICBvdXRwdXQucHVzaChsaW5lQ29udGVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9LCBbXSk7XG59XG5leHBvcnRzLnRvTGluZXNXaXRoQ29udGVudCA9IHRvTGluZXNXaXRoQ29udGVudDtcbmZ1bmN0aW9uIGZvckVhY2hMaW5lV2l0aENvbnRlbnQoaW5wdXQsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRvTGluZXNXaXRoQ29udGVudChpbnB1dCwgdHJ1ZSkubWFwKGxpbmUgPT4gY2FsbGJhY2sobGluZSkpO1xufVxuZXhwb3J0cy5mb3JFYWNoTGluZVdpdGhDb250ZW50ID0gZm9yRWFjaExpbmVXaXRoQ29udGVudDtcbmZ1bmN0aW9uIGZvbGRlckV4aXN0cyhwYXRoKSB7XG4gICAgcmV0dXJuIGZpbGVfZXhpc3RzXzEuZXhpc3RzKHBhdGgsIGZpbGVfZXhpc3RzXzEuRk9MREVSKTtcbn1cbmV4cG9ydHMuZm9sZGVyRXhpc3RzID0gZm9sZGVyRXhpc3RzO1xuLyoqXG4gKiBBZGRzIGBpdGVtYCBpbnRvIHRoZSBgdGFyZ2V0YCBgQXJyYXlgIG9yIGBTZXRgIHdoZW4gaXQgaXMgbm90IGFscmVhZHkgcHJlc2VudCBhbmQgcmV0dXJucyB0aGUgYGl0ZW1gLlxuICovXG5mdW5jdGlvbiBhcHBlbmQodGFyZ2V0LCBpdGVtKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICBpZiAoIXRhcmdldC5pbmNsdWRlcyhpdGVtKSkge1xuICAgICAgICAgICAgdGFyZ2V0LnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRhcmdldC5hZGQoaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtO1xufVxuZXhwb3J0cy5hcHBlbmQgPSBhcHBlbmQ7XG4vKipcbiAqIEFkZHMgYGl0ZW1gIGludG8gdGhlIGB0YXJnZXRgIGBBcnJheWAgd2hlbiBpdCBpcyBub3QgYWxyZWFkeSBwcmVzZW50IGFuZCByZXR1cm5zIHRoZSBgdGFyZ2V0YC5cbiAqL1xuZnVuY3Rpb24gaW5jbHVkaW5nKHRhcmdldCwgaXRlbSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkgJiYgIXRhcmdldC5pbmNsdWRlcyhpdGVtKSkge1xuICAgICAgICB0YXJnZXQucHVzaChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmV4cG9ydHMuaW5jbHVkaW5nID0gaW5jbHVkaW5nO1xuZnVuY3Rpb24gcmVtb3ZlKHRhcmdldCwgaXRlbSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0YXJnZXQuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHRhcmdldC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0YXJnZXQuZGVsZXRlKGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbTtcbn1cbmV4cG9ydHMucmVtb3ZlID0gcmVtb3ZlO1xuZXhwb3J0cy5vYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpO1xuZnVuY3Rpb24gYXNBcnJheShzb3VyY2UpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShzb3VyY2UpID8gc291cmNlIDogW3NvdXJjZV07XG59XG5leHBvcnRzLmFzQXJyYXkgPSBhc0FycmF5O1xuZnVuY3Rpb24gYXNTdHJpbmdBcnJheShzb3VyY2UpIHtcbiAgICByZXR1cm4gYXNBcnJheShzb3VyY2UpLm1hcChTdHJpbmcpO1xufVxuZXhwb3J0cy5hc1N0cmluZ0FycmF5ID0gYXNTdHJpbmdBcnJheTtcbmZ1bmN0aW9uIGFzTnVtYmVyKHNvdXJjZSwgb25OYU4gPSAwKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBvbk5hTjtcbiAgICB9XG4gICAgY29uc3QgbnVtID0gcGFyc2VJbnQoc291cmNlLCAxMCk7XG4gICAgcmV0dXJuIGlzTmFOKG51bSkgPyBvbk5hTiA6IG51bTtcbn1cbmV4cG9ydHMuYXNOdW1iZXIgPSBhc051bWJlcjtcbmZ1bmN0aW9uIHByZWZpeGVkQXJyYXkoaW5wdXQsIHByZWZpeCkge1xuICAgIGNvbnN0IG91dHB1dCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwLCBtYXggPSBpbnB1dC5sZW5ndGg7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICBvdXRwdXQucHVzaChwcmVmaXgsIGlucHV0W2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbmV4cG9ydHMucHJlZml4ZWRBcnJheSA9IHByZWZpeGVkQXJyYXk7XG5mdW5jdGlvbiBidWZmZXJUb1N0cmluZyhpbnB1dCkge1xuICAgIHJldHVybiAoQXJyYXkuaXNBcnJheShpbnB1dCkgPyBCdWZmZXIuY29uY2F0KGlucHV0KSA6IGlucHV0KS50b1N0cmluZygndXRmLTgnKTtcbn1cbmV4cG9ydHMuYnVmZmVyVG9TdHJpbmcgPSBidWZmZXJUb1N0cmluZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmZpbHRlckhhc0xlbmd0aCA9IGV4cG9ydHMuZmlsdGVyRnVuY3Rpb24gPSBleHBvcnRzLmZpbHRlclBsYWluT2JqZWN0ID0gZXhwb3J0cy5maWx0ZXJTdHJpbmdPclN0cmluZ0FycmF5ID0gZXhwb3J0cy5maWx0ZXJTdHJpbmdBcnJheSA9IGV4cG9ydHMuZmlsdGVyU3RyaW5nID0gZXhwb3J0cy5maWx0ZXJQcmltaXRpdmVzID0gZXhwb3J0cy5maWx0ZXJBcnJheSA9IGV4cG9ydHMuZmlsdGVyVHlwZSA9IHZvaWQgMDtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5mdW5jdGlvbiBmaWx0ZXJUeXBlKGlucHV0LCBmaWx0ZXIsIGRlZikge1xuICAgIGlmIChmaWx0ZXIoaW5wdXQpKSB7XG4gICAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG4gICAgcmV0dXJuIChhcmd1bWVudHMubGVuZ3RoID4gMikgPyBkZWYgOiB1bmRlZmluZWQ7XG59XG5leHBvcnRzLmZpbHRlclR5cGUgPSBmaWx0ZXJUeXBlO1xuY29uc3QgZmlsdGVyQXJyYXkgPSAoaW5wdXQpID0+IHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpbnB1dCk7XG59O1xuZXhwb3J0cy5maWx0ZXJBcnJheSA9IGZpbHRlckFycmF5O1xuZnVuY3Rpb24gZmlsdGVyUHJpbWl0aXZlcyhpbnB1dCwgb21pdCkge1xuICAgIHJldHVybiAvbnVtYmVyfHN0cmluZ3xib29sZWFuLy50ZXN0KHR5cGVvZiBpbnB1dCkgJiYgKCFvbWl0IHx8ICFvbWl0LmluY2x1ZGVzKCh0eXBlb2YgaW5wdXQpKSk7XG59XG5leHBvcnRzLmZpbHRlclByaW1pdGl2ZXMgPSBmaWx0ZXJQcmltaXRpdmVzO1xuY29uc3QgZmlsdGVyU3RyaW5nID0gKGlucHV0KSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZyc7XG59O1xuZXhwb3J0cy5maWx0ZXJTdHJpbmcgPSBmaWx0ZXJTdHJpbmc7XG5jb25zdCBmaWx0ZXJTdHJpbmdBcnJheSA9IChpbnB1dCkgPT4ge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGlucHV0KSAmJiBpbnB1dC5ldmVyeShleHBvcnRzLmZpbHRlclN0cmluZyk7XG59O1xuZXhwb3J0cy5maWx0ZXJTdHJpbmdBcnJheSA9IGZpbHRlclN0cmluZ0FycmF5O1xuY29uc3QgZmlsdGVyU3RyaW5nT3JTdHJpbmdBcnJheSA9IChpbnB1dCkgPT4ge1xuICAgIHJldHVybiBleHBvcnRzLmZpbHRlclN0cmluZyhpbnB1dCkgfHwgKEFycmF5LmlzQXJyYXkoaW5wdXQpICYmIGlucHV0LmV2ZXJ5KGV4cG9ydHMuZmlsdGVyU3RyaW5nKSk7XG59O1xuZXhwb3J0cy5maWx0ZXJTdHJpbmdPclN0cmluZ0FycmF5ID0gZmlsdGVyU3RyaW5nT3JTdHJpbmdBcnJheTtcbmZ1bmN0aW9uIGZpbHRlclBsYWluT2JqZWN0KGlucHV0KSB7XG4gICAgcmV0dXJuICEhaW5wdXQgJiYgdXRpbF8xLm9iamVjdFRvU3RyaW5nKGlucHV0KSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5leHBvcnRzLmZpbHRlclBsYWluT2JqZWN0ID0gZmlsdGVyUGxhaW5PYmplY3Q7XG5mdW5jdGlvbiBmaWx0ZXJGdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiB0eXBlb2YgaW5wdXQgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmZpbHRlckZ1bmN0aW9uID0gZmlsdGVyRnVuY3Rpb247XG5jb25zdCBmaWx0ZXJIYXNMZW5ndGggPSAoaW5wdXQpID0+IHtcbiAgICBpZiAoaW5wdXQgPT0gbnVsbCB8fCAnbnVtYmVyfGJvb2xlYW58ZnVuY3Rpb24nLmluY2x1ZGVzKHR5cGVvZiBpbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpbnB1dCkgfHwgdHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgaW5wdXQubGVuZ3RoID09PSAnbnVtYmVyJztcbn07XG5leHBvcnRzLmZpbHRlckhhc0xlbmd0aCA9IGZpbHRlckhhc0xlbmd0aDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFyZ3VtZW50LWZpbHRlcnMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkV4aXRDb2RlcyA9IHZvaWQgMDtcbi8qKlxuICogS25vd24gcHJvY2VzcyBleGl0IGNvZGVzIHVzZWQgYnkgdGhlIHRhc2sgcGFyc2VycyB0byBkZXRlcm1pbmUgd2hldGhlciBhbiBlcnJvclxuICogd2FzIG9uZSB0aGV5IGNhbiBhdXRvbWF0aWNhbGx5IGhhbmRsZVxuICovXG52YXIgRXhpdENvZGVzO1xuKGZ1bmN0aW9uIChFeGl0Q29kZXMpIHtcbiAgICBFeGl0Q29kZXNbRXhpdENvZGVzW1wiU1VDQ0VTU1wiXSA9IDBdID0gXCJTVUNDRVNTXCI7XG4gICAgRXhpdENvZGVzW0V4aXRDb2Rlc1tcIkVSUk9SXCJdID0gMV0gPSBcIkVSUk9SXCI7XG4gICAgRXhpdENvZGVzW0V4aXRDb2Rlc1tcIlVOQ0xFQU5cIl0gPSAxMjhdID0gXCJVTkNMRUFOXCI7XG59KShFeGl0Q29kZXMgPSBleHBvcnRzLkV4aXRDb2RlcyB8fCAoZXhwb3J0cy5FeGl0Q29kZXMgPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXhpdC1jb2Rlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2l0T3V0cHV0U3RyZWFtcyA9IHZvaWQgMDtcbmNsYXNzIEdpdE91dHB1dFN0cmVhbXMge1xuICAgIGNvbnN0cnVjdG9yKHN0ZE91dCwgc3RkRXJyKSB7XG4gICAgICAgIHRoaXMuc3RkT3V0ID0gc3RkT3V0O1xuICAgICAgICB0aGlzLnN0ZEVyciA9IHN0ZEVycjtcbiAgICB9XG4gICAgYXNTdHJpbmdzKCkge1xuICAgICAgICByZXR1cm4gbmV3IEdpdE91dHB1dFN0cmVhbXModGhpcy5zdGRPdXQudG9TdHJpbmcoJ3V0ZjgnKSwgdGhpcy5zdGRFcnIudG9TdHJpbmcoJ3V0ZjgnKSk7XG4gICAgfVxufVxuZXhwb3J0cy5HaXRPdXRwdXRTdHJlYW1zID0gR2l0T3V0cHV0U3RyZWFtcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdpdC1vdXRwdXQtc3RyZWFtcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUmVtb3RlTGluZVBhcnNlciA9IGV4cG9ydHMuTGluZVBhcnNlciA9IHZvaWQgMDtcbmNsYXNzIExpbmVQYXJzZXIge1xuICAgIGNvbnN0cnVjdG9yKHJlZ0V4cCwgdXNlTWF0Y2hlcykge1xuICAgICAgICB0aGlzLm1hdGNoZXMgPSBbXTtcbiAgICAgICAgdGhpcy5wYXJzZSA9IChsaW5lLCB0YXJnZXQpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRNYXRjaGVzKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3JlZ0V4cC5ldmVyeSgocmVnLCBpbmRleCkgPT4gdGhpcy5hZGRNYXRjaChyZWcsIGluZGV4LCBsaW5lKGluZGV4KSkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlTWF0Y2hlcyh0YXJnZXQsIHRoaXMucHJlcGFyZU1hdGNoZXMoKSkgIT09IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9yZWdFeHAgPSBBcnJheS5pc0FycmF5KHJlZ0V4cCkgPyByZWdFeHAgOiBbcmVnRXhwXTtcbiAgICAgICAgaWYgKHVzZU1hdGNoZXMpIHtcbiAgICAgICAgICAgIHRoaXMudXNlTWF0Y2hlcyA9IHVzZU1hdGNoZXM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHVzZU1hdGNoZXModGFyZ2V0LCBtYXRjaCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYExpbmVQYXJzZXI6dXNlTWF0Y2hlcyBub3QgaW1wbGVtZW50ZWRgKTtcbiAgICB9XG4gICAgcmVzZXRNYXRjaGVzKCkge1xuICAgICAgICB0aGlzLm1hdGNoZXMubGVuZ3RoID0gMDtcbiAgICB9XG4gICAgcHJlcGFyZU1hdGNoZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hdGNoZXM7XG4gICAgfVxuICAgIGFkZE1hdGNoKHJlZywgaW5kZXgsIGxpbmUpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlZCA9IGxpbmUgJiYgcmVnLmV4ZWMobGluZSk7XG4gICAgICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hNYXRjaChpbmRleCwgbWF0Y2hlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEhbWF0Y2hlZDtcbiAgICB9XG4gICAgcHVzaE1hdGNoKF9pbmRleCwgbWF0Y2hlZCkge1xuICAgICAgICB0aGlzLm1hdGNoZXMucHVzaCguLi5tYXRjaGVkLnNsaWNlKDEpKTtcbiAgICB9XG59XG5leHBvcnRzLkxpbmVQYXJzZXIgPSBMaW5lUGFyc2VyO1xuY2xhc3MgUmVtb3RlTGluZVBhcnNlciBleHRlbmRzIExpbmVQYXJzZXIge1xuICAgIGFkZE1hdGNoKHJlZywgaW5kZXgsIGxpbmUpIHtcbiAgICAgICAgcmV0dXJuIC9ecmVtb3RlOlxccy8udGVzdChTdHJpbmcobGluZSkpICYmIHN1cGVyLmFkZE1hdGNoKHJlZywgaW5kZXgsIGxpbmUpO1xuICAgIH1cbiAgICBwdXNoTWF0Y2goaW5kZXgsIG1hdGNoZWQpIHtcbiAgICAgICAgaWYgKGluZGV4ID4gMCB8fCBtYXRjaGVkLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHN1cGVyLnB1c2hNYXRjaChpbmRleCwgbWF0Y2hlZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlJlbW90ZUxpbmVQYXJzZXIgPSBSZW1vdGVMaW5lUGFyc2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluZS1wYXJzZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZUluc3RhbmNlQ29uZmlnID0gdm9pZCAwO1xuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgYmluYXJ5OiAnZ2l0JyxcbiAgICBtYXhDb25jdXJyZW50UHJvY2Vzc2VzOiA1LFxuICAgIGNvbmZpZzogW10sXG59O1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VDb25maWcoLi4ub3B0aW9ucykge1xuICAgIGNvbnN0IGJhc2VEaXIgPSBwcm9jZXNzLmN3ZCgpO1xuICAgIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7IGJhc2VEaXIgfSwgZGVmYXVsdE9wdGlvbnMpLCAuLi4ob3B0aW9ucy5maWx0ZXIobyA9PiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgbykpKTtcbiAgICBjb25maWcuYmFzZURpciA9IGNvbmZpZy5iYXNlRGlyIHx8IGJhc2VEaXI7XG4gICAgcmV0dXJuIGNvbmZpZztcbn1cbmV4cG9ydHMuY3JlYXRlSW5zdGFuY2VDb25maWcgPSBjcmVhdGVJbnN0YW5jZUNvbmZpZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpbXBsZS1naXQtb3B0aW9ucy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50ID0gZXhwb3J0cy50cmFpbGluZ09wdGlvbnNBcmd1bWVudCA9IGV4cG9ydHMuZ2V0VHJhaWxpbmdPcHRpb25zID0gZXhwb3J0cy5hcHBlbmRUYXNrT3B0aW9ucyA9IHZvaWQgMDtcbmNvbnN0IGFyZ3VtZW50X2ZpbHRlcnNfMSA9IHJlcXVpcmUoXCIuL2FyZ3VtZW50LWZpbHRlcnNcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuZnVuY3Rpb24gYXBwZW5kVGFza09wdGlvbnMob3B0aW9ucywgY29tbWFuZHMgPSBbXSkge1xuICAgIGlmICghYXJndW1lbnRfZmlsdGVyc18xLmZpbHRlclBsYWluT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybiBjb21tYW5kcztcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9wdGlvbnMpLnJlZHVjZSgoY29tbWFuZHMsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IG9wdGlvbnNba2V5XTtcbiAgICAgICAgaWYgKGFyZ3VtZW50X2ZpbHRlcnNfMS5maWx0ZXJQcmltaXRpdmVzKHZhbHVlLCBbJ2Jvb2xlYW4nXSkpIHtcbiAgICAgICAgICAgIGNvbW1hbmRzLnB1c2goa2V5ICsgJz0nICsgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29tbWFuZHMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21tYW5kcztcbiAgICB9LCBjb21tYW5kcyk7XG59XG5leHBvcnRzLmFwcGVuZFRhc2tPcHRpb25zID0gYXBwZW5kVGFza09wdGlvbnM7XG5mdW5jdGlvbiBnZXRUcmFpbGluZ09wdGlvbnMoYXJncywgaW5pdGlhbFByaW1pdGl2ZSA9IDAsIG9iamVjdE9ubHkgPSBmYWxzZSkge1xuICAgIGNvbnN0IGNvbW1hbmQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMCwgbWF4ID0gaW5pdGlhbFByaW1pdGl2ZSA8IDAgPyBhcmdzLmxlbmd0aCA6IGluaXRpYWxQcmltaXRpdmU7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICBpZiAoJ3N0cmluZ3xudW1iZXInLmluY2x1ZGVzKHR5cGVvZiBhcmdzW2ldKSkge1xuICAgICAgICAgICAgY29tbWFuZC5wdXNoKFN0cmluZyhhcmdzW2ldKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXBwZW5kVGFza09wdGlvbnModHJhaWxpbmdPcHRpb25zQXJndW1lbnQoYXJncyksIGNvbW1hbmQpO1xuICAgIGlmICghb2JqZWN0T25seSkge1xuICAgICAgICBjb21tYW5kLnB1c2goLi4udHJhaWxpbmdBcnJheUFyZ3VtZW50KGFyZ3MpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbW1hbmQ7XG59XG5leHBvcnRzLmdldFRyYWlsaW5nT3B0aW9ucyA9IGdldFRyYWlsaW5nT3B0aW9ucztcbmZ1bmN0aW9uIHRyYWlsaW5nQXJyYXlBcmd1bWVudChhcmdzKSB7XG4gICAgY29uc3QgaGFzVHJhaWxpbmdDYWxsYmFjayA9IHR5cGVvZiB1dGlsXzEubGFzdChhcmdzKSA9PT0gJ2Z1bmN0aW9uJztcbiAgICByZXR1cm4gYXJndW1lbnRfZmlsdGVyc18xLmZpbHRlclR5cGUodXRpbF8xLmxhc3QoYXJncywgaGFzVHJhaWxpbmdDYWxsYmFjayA/IDEgOiAwKSwgYXJndW1lbnRfZmlsdGVyc18xLmZpbHRlckFycmF5LCBbXSk7XG59XG4vKipcbiAqIEdpdmVuIGFueSBudW1iZXIgb2YgYXJndW1lbnRzLCByZXR1cm5zIHRoZSB0cmFpbGluZyBvcHRpb25zIGFyZ3VtZW50LCBpZ25vcmluZyBhIHRyYWlsaW5nIGZ1bmN0aW9uIGFyZ3VtZW50XG4gKiBpZiB0aGVyZSBpcyBvbmUuIFdoZW4gbm90IGZvdW5kLCB0aGUgcmV0dXJuIHZhbHVlIGlzIG51bGwuXG4gKi9cbmZ1bmN0aW9uIHRyYWlsaW5nT3B0aW9uc0FyZ3VtZW50KGFyZ3MpIHtcbiAgICBjb25zdCBoYXNUcmFpbGluZ0NhbGxiYWNrID0gYXJndW1lbnRfZmlsdGVyc18xLmZpbHRlckZ1bmN0aW9uKHV0aWxfMS5sYXN0KGFyZ3MpKTtcbiAgICByZXR1cm4gYXJndW1lbnRfZmlsdGVyc18xLmZpbHRlclR5cGUodXRpbF8xLmxhc3QoYXJncywgaGFzVHJhaWxpbmdDYWxsYmFjayA/IDEgOiAwKSwgYXJndW1lbnRfZmlsdGVyc18xLmZpbHRlclBsYWluT2JqZWN0KTtcbn1cbmV4cG9ydHMudHJhaWxpbmdPcHRpb25zQXJndW1lbnQgPSB0cmFpbGluZ09wdGlvbnNBcmd1bWVudDtcbi8qKlxuICogUmV0dXJucyBlaXRoZXIgdGhlIHNvdXJjZSBhcmd1bWVudCB3aGVuIGl0IGlzIGEgYEZ1bmN0aW9uYCwgb3IgdGhlIGRlZmF1bHRcbiAqIGBOT09QYCBmdW5jdGlvbiBjb25zdGFudFxuICovXG5mdW5jdGlvbiB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJncywgaW5jbHVkZU5vb3AgPSB0cnVlKSB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSB1dGlsXzEuYXNGdW5jdGlvbih1dGlsXzEubGFzdChhcmdzKSk7XG4gICAgcmV0dXJuIGluY2x1ZGVOb29wIHx8IHV0aWxfMS5pc1VzZXJGdW5jdGlvbihjYWxsYmFjaykgPyBjYWxsYmFjayA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydHMudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50ID0gdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGFzay1vcHRpb25zLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXJzZVN0cmluZ1Jlc3BvbnNlID0gZXhwb3J0cy5jYWxsVGFza1BhcnNlciA9IHZvaWQgMDtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5mdW5jdGlvbiBjYWxsVGFza1BhcnNlcihwYXJzZXIsIHN0cmVhbXMpIHtcbiAgICByZXR1cm4gcGFyc2VyKHN0cmVhbXMuc3RkT3V0LCBzdHJlYW1zLnN0ZEVycik7XG59XG5leHBvcnRzLmNhbGxUYXNrUGFyc2VyID0gY2FsbFRhc2tQYXJzZXI7XG5mdW5jdGlvbiBwYXJzZVN0cmluZ1Jlc3BvbnNlKHJlc3VsdCwgcGFyc2VycywgLi4udGV4dHMpIHtcbiAgICB0ZXh0cy5mb3JFYWNoKHRleHQgPT4ge1xuICAgICAgICBmb3IgKGxldCBsaW5lcyA9IHV0aWxfMS50b0xpbmVzV2l0aENvbnRlbnQodGV4dCksIGkgPSAwLCBtYXggPSBsaW5lcy5sZW5ndGg7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbGluZSA9IChvZmZzZXQgPSAwKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKChpICsgb2Zmc2V0KSA+PSBtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbGluZXNbaSArIG9mZnNldF07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcGFyc2Vycy5zb21lKCh7IHBhcnNlIH0pID0+IHBhcnNlKGxpbmUsIHJlc3VsdCkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2VTdHJpbmdSZXNwb25zZSA9IHBhcnNlU3RyaW5nUmVzcG9uc2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10YXNrLXBhcnNlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2FyZ3VtZW50LWZpbHRlcnNcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2V4aXQtY29kZXNcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2dpdC1vdXRwdXQtc3RyZWFtc1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbGluZS1wYXJzZXJcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3NpbXBsZS1naXQtb3B0aW9uc1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdGFzay1vcHRpb25zXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90YXNrLXBhcnNlclwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdXRpbFwiKSwgZXhwb3J0cyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY2hlY2tJc0JhcmVSZXBvVGFzayA9IGV4cG9ydHMuY2hlY2tJc1JlcG9Sb290VGFzayA9IGV4cG9ydHMuY2hlY2tJc1JlcG9UYXNrID0gZXhwb3J0cy5DaGVja1JlcG9BY3Rpb25zID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBDaGVja1JlcG9BY3Rpb25zO1xuKGZ1bmN0aW9uIChDaGVja1JlcG9BY3Rpb25zKSB7XG4gICAgQ2hlY2tSZXBvQWN0aW9uc1tcIkJBUkVcIl0gPSBcImJhcmVcIjtcbiAgICBDaGVja1JlcG9BY3Rpb25zW1wiSU5fVFJFRVwiXSA9IFwidHJlZVwiO1xuICAgIENoZWNrUmVwb0FjdGlvbnNbXCJJU19SRVBPX1JPT1RcIl0gPSBcInJvb3RcIjtcbn0pKENoZWNrUmVwb0FjdGlvbnMgPSBleHBvcnRzLkNoZWNrUmVwb0FjdGlvbnMgfHwgKGV4cG9ydHMuQ2hlY2tSZXBvQWN0aW9ucyA9IHt9KSk7XG5jb25zdCBvbkVycm9yID0gKHsgZXhpdENvZGUgfSwgZXJyb3IsIGRvbmUsIGZhaWwpID0+IHtcbiAgICBpZiAoZXhpdENvZGUgPT09IHV0aWxzXzEuRXhpdENvZGVzLlVOQ0xFQU4gJiYgaXNOb3RSZXBvTWVzc2FnZShlcnJvcikpIHtcbiAgICAgICAgcmV0dXJuIGRvbmUoQnVmZmVyLmZyb20oJ2ZhbHNlJykpO1xuICAgIH1cbiAgICBmYWlsKGVycm9yKTtcbn07XG5jb25zdCBwYXJzZXIgPSAodGV4dCkgPT4ge1xuICAgIHJldHVybiB0ZXh0LnRyaW0oKSA9PT0gJ3RydWUnO1xufTtcbmZ1bmN0aW9uIGNoZWNrSXNSZXBvVGFzayhhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICBjYXNlIENoZWNrUmVwb0FjdGlvbnMuQkFSRTpcbiAgICAgICAgICAgIHJldHVybiBjaGVja0lzQmFyZVJlcG9UYXNrKCk7XG4gICAgICAgIGNhc2UgQ2hlY2tSZXBvQWN0aW9ucy5JU19SRVBPX1JPT1Q6XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tJc1JlcG9Sb290VGFzaygpO1xuICAgIH1cbiAgICBjb25zdCBjb21tYW5kcyA9IFsncmV2LXBhcnNlJywgJy0taXMtaW5zaWRlLXdvcmstdHJlZSddO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIG9uRXJyb3IsXG4gICAgICAgIHBhcnNlcixcbiAgICB9O1xufVxuZXhwb3J0cy5jaGVja0lzUmVwb1Rhc2sgPSBjaGVja0lzUmVwb1Rhc2s7XG5mdW5jdGlvbiBjaGVja0lzUmVwb1Jvb3RUYXNrKCkge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWydyZXYtcGFyc2UnLCAnLS1naXQtZGlyJ107XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgb25FcnJvcixcbiAgICAgICAgcGFyc2VyKHBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybiAvXlxcLihnaXQpPyQvLnRlc3QocGF0aC50cmltKCkpO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmNoZWNrSXNSZXBvUm9vdFRhc2sgPSBjaGVja0lzUmVwb1Jvb3RUYXNrO1xuZnVuY3Rpb24gY2hlY2tJc0JhcmVSZXBvVGFzaygpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsncmV2LXBhcnNlJywgJy0taXMtYmFyZS1yZXBvc2l0b3J5J107XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgb25FcnJvcixcbiAgICAgICAgcGFyc2VyLFxuICAgIH07XG59XG5leHBvcnRzLmNoZWNrSXNCYXJlUmVwb1Rhc2sgPSBjaGVja0lzQmFyZVJlcG9UYXNrO1xuZnVuY3Rpb24gaXNOb3RSZXBvTWVzc2FnZShlcnJvcikge1xuICAgIHJldHVybiAvKE5vdCBhIGdpdCByZXBvc2l0b3J5fEtlaW4gR2l0LVJlcG9zaXRvcnkpL2kudGVzdChTdHJpbmcoZXJyb3IpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNoZWNrLWlzLXJlcG8uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNsZWFuU3VtbWFyeVBhcnNlciA9IGV4cG9ydHMuQ2xlYW5SZXNwb25zZSA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBDbGVhblJlc3BvbnNlIHtcbiAgICBjb25zdHJ1Y3RvcihkcnlSdW4pIHtcbiAgICAgICAgdGhpcy5kcnlSdW4gPSBkcnlSdW47XG4gICAgICAgIHRoaXMucGF0aHMgPSBbXTtcbiAgICAgICAgdGhpcy5maWxlcyA9IFtdO1xuICAgICAgICB0aGlzLmZvbGRlcnMgPSBbXTtcbiAgICB9XG59XG5leHBvcnRzLkNsZWFuUmVzcG9uc2UgPSBDbGVhblJlc3BvbnNlO1xuY29uc3QgcmVtb3ZhbFJlZ2V4cCA9IC9eW2Etel0rXFxzKi9pO1xuY29uc3QgZHJ5UnVuUmVtb3ZhbFJlZ2V4cCA9IC9eW2Etel0rXFxzK1thLXpdK1xccyovaTtcbmNvbnN0IGlzRm9sZGVyUmVnZXhwID0gL1xcLyQvO1xuZnVuY3Rpb24gY2xlYW5TdW1tYXJ5UGFyc2VyKGRyeVJ1biwgdGV4dCkge1xuICAgIGNvbnN0IHN1bW1hcnkgPSBuZXcgQ2xlYW5SZXNwb25zZShkcnlSdW4pO1xuICAgIGNvbnN0IHJlZ2V4cCA9IGRyeVJ1biA/IGRyeVJ1blJlbW92YWxSZWdleHAgOiByZW1vdmFsUmVnZXhwO1xuICAgIHV0aWxzXzEudG9MaW5lc1dpdGhDb250ZW50KHRleHQpLmZvckVhY2gobGluZSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbW92ZWQgPSBsaW5lLnJlcGxhY2UocmVnZXhwLCAnJyk7XG4gICAgICAgIHN1bW1hcnkucGF0aHMucHVzaChyZW1vdmVkKTtcbiAgICAgICAgKGlzRm9sZGVyUmVnZXhwLnRlc3QocmVtb3ZlZCkgPyBzdW1tYXJ5LmZvbGRlcnMgOiBzdW1tYXJ5LmZpbGVzKS5wdXNoKHJlbW92ZWQpO1xuICAgIH0pO1xuICAgIHJldHVybiBzdW1tYXJ5O1xufVxuZXhwb3J0cy5jbGVhblN1bW1hcnlQYXJzZXIgPSBjbGVhblN1bW1hcnlQYXJzZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1DbGVhblN1bW1hcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlzRW1wdHlUYXNrID0gZXhwb3J0cy5pc0J1ZmZlclRhc2sgPSBleHBvcnRzLnN0cmFpZ2h0VGhyb3VnaEJ1ZmZlclRhc2sgPSBleHBvcnRzLnN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2sgPSBleHBvcnRzLmNvbmZpZ3VyYXRpb25FcnJvclRhc2sgPSBleHBvcnRzLmFkaG9jRXhlY1Rhc2sgPSBleHBvcnRzLkVNUFRZX0NPTU1BTkRTID0gdm9pZCAwO1xuY29uc3QgdGFza19jb25maWd1cmF0aW9uX2Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3JzL3Rhc2stY29uZmlndXJhdGlvbi1lcnJvclwiKTtcbmV4cG9ydHMuRU1QVFlfQ09NTUFORFMgPSBbXTtcbmZ1bmN0aW9uIGFkaG9jRXhlY1Rhc2socGFyc2VyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHM6IGV4cG9ydHMuRU1QVFlfQ09NTUFORFMsXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyLFxuICAgIH07XG59XG5leHBvcnRzLmFkaG9jRXhlY1Rhc2sgPSBhZGhvY0V4ZWNUYXNrO1xuZnVuY3Rpb24gY29uZmlndXJhdGlvbkVycm9yVGFzayhlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzOiBleHBvcnRzLkVNUFRZX0NPTU1BTkRTLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcigpIHtcbiAgICAgICAgICAgIHRocm93IHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycgPyBuZXcgdGFza19jb25maWd1cmF0aW9uX2Vycm9yXzEuVGFza0NvbmZpZ3VyYXRpb25FcnJvcihlcnJvcikgOiBlcnJvcjtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnRzLmNvbmZpZ3VyYXRpb25FcnJvclRhc2sgPSBjb25maWd1cmF0aW9uRXJyb3JUYXNrO1xuZnVuY3Rpb24gc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhjb21tYW5kcywgdHJpbW1lZCA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyKHRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmltbWVkID8gU3RyaW5nKHRleHQpLnRyaW0oKSA6IHRleHQ7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayA9IHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2s7XG5mdW5jdGlvbiBzdHJhaWdodFRocm91Z2hCdWZmZXJUYXNrKGNvbW1hbmRzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIGZvcm1hdDogJ2J1ZmZlcicsXG4gICAgICAgIHBhcnNlcihidWZmZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuc3RyYWlnaHRUaHJvdWdoQnVmZmVyVGFzayA9IHN0cmFpZ2h0VGhyb3VnaEJ1ZmZlclRhc2s7XG5mdW5jdGlvbiBpc0J1ZmZlclRhc2sodGFzaykge1xuICAgIHJldHVybiB0YXNrLmZvcm1hdCA9PT0gJ2J1ZmZlcic7XG59XG5leHBvcnRzLmlzQnVmZmVyVGFzayA9IGlzQnVmZmVyVGFzaztcbmZ1bmN0aW9uIGlzRW1wdHlUYXNrKHRhc2spIHtcbiAgICByZXR1cm4gIXRhc2suY29tbWFuZHMubGVuZ3RoO1xufVxuZXhwb3J0cy5pc0VtcHR5VGFzayA9IGlzRW1wdHlUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGFzay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaXNDbGVhbk9wdGlvbnNBcnJheSA9IGV4cG9ydHMuY2xlYW5UYXNrID0gZXhwb3J0cy5jbGVhbldpdGhPcHRpb25zVGFzayA9IGV4cG9ydHMuQ2xlYW5PcHRpb25zID0gZXhwb3J0cy5DT05GSUdfRVJST1JfVU5LTk9XTl9PUFRJT04gPSBleHBvcnRzLkNPTkZJR19FUlJPUl9NT0RFX1JFUVVJUkVEID0gZXhwb3J0cy5DT05GSUdfRVJST1JfSU5URVJBQ1RJVkVfTU9ERSA9IHZvaWQgMDtcbmNvbnN0IENsZWFuU3VtbWFyeV8xID0gcmVxdWlyZShcIi4uL3Jlc3BvbnNlcy9DbGVhblN1bW1hcnlcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgdGFza18xID0gcmVxdWlyZShcIi4vdGFza1wiKTtcbmV4cG9ydHMuQ09ORklHX0VSUk9SX0lOVEVSQUNUSVZFX01PREUgPSAnR2l0IGNsZWFuIGludGVyYWN0aXZlIG1vZGUgaXMgbm90IHN1cHBvcnRlZCc7XG5leHBvcnRzLkNPTkZJR19FUlJPUl9NT0RFX1JFUVVJUkVEID0gJ0dpdCBjbGVhbiBtb2RlIHBhcmFtZXRlciAoXCJuXCIgb3IgXCJmXCIpIGlzIHJlcXVpcmVkJztcbmV4cG9ydHMuQ09ORklHX0VSUk9SX1VOS05PV05fT1BUSU9OID0gJ0dpdCBjbGVhbiB1bmtub3duIG9wdGlvbiBmb3VuZCBpbjogJztcbi8qKlxuICogQWxsIHN1cHBvcnRlZCBvcHRpb24gc3dpdGNoZXMgYXZhaWxhYmxlIGZvciB1c2UgaW4gYSBgZ2l0LmNsZWFuYCBvcGVyYXRpb25cbiAqL1xudmFyIENsZWFuT3B0aW9ucztcbihmdW5jdGlvbiAoQ2xlYW5PcHRpb25zKSB7XG4gICAgQ2xlYW5PcHRpb25zW1wiRFJZX1JVTlwiXSA9IFwiblwiO1xuICAgIENsZWFuT3B0aW9uc1tcIkZPUkNFXCJdID0gXCJmXCI7XG4gICAgQ2xlYW5PcHRpb25zW1wiSUdOT1JFRF9JTkNMVURFRFwiXSA9IFwieFwiO1xuICAgIENsZWFuT3B0aW9uc1tcIklHTk9SRURfT05MWVwiXSA9IFwiWFwiO1xuICAgIENsZWFuT3B0aW9uc1tcIkVYQ0xVRElOR1wiXSA9IFwiZVwiO1xuICAgIENsZWFuT3B0aW9uc1tcIlFVSUVUXCJdID0gXCJxXCI7XG4gICAgQ2xlYW5PcHRpb25zW1wiUkVDVVJTSVZFXCJdID0gXCJkXCI7XG59KShDbGVhbk9wdGlvbnMgPSBleHBvcnRzLkNsZWFuT3B0aW9ucyB8fCAoZXhwb3J0cy5DbGVhbk9wdGlvbnMgPSB7fSkpO1xuY29uc3QgQ2xlYW5PcHRpb25WYWx1ZXMgPSBuZXcgU2V0KFsnaScsIC4uLnV0aWxzXzEuYXNTdHJpbmdBcnJheShPYmplY3QudmFsdWVzKENsZWFuT3B0aW9ucykpXSk7XG5mdW5jdGlvbiBjbGVhbldpdGhPcHRpb25zVGFzayhtb2RlLCBjdXN0b21BcmdzKSB7XG4gICAgY29uc3QgeyBjbGVhbk1vZGUsIG9wdGlvbnMsIHZhbGlkIH0gPSBnZXRDbGVhbk9wdGlvbnMobW9kZSk7XG4gICAgaWYgKCFjbGVhbk1vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRhc2tfMS5jb25maWd1cmF0aW9uRXJyb3JUYXNrKGV4cG9ydHMuQ09ORklHX0VSUk9SX01PREVfUkVRVUlSRUQpO1xuICAgIH1cbiAgICBpZiAoIXZhbGlkLm9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRhc2tfMS5jb25maWd1cmF0aW9uRXJyb3JUYXNrKGV4cG9ydHMuQ09ORklHX0VSUk9SX1VOS05PV05fT1BUSU9OICsgSlNPTi5zdHJpbmdpZnkobW9kZSkpO1xuICAgIH1cbiAgICBvcHRpb25zLnB1c2goLi4uY3VzdG9tQXJncyk7XG4gICAgaWYgKG9wdGlvbnMuc29tZShpc0ludGVyYWN0aXZlTW9kZSkpIHtcbiAgICAgICAgcmV0dXJuIHRhc2tfMS5jb25maWd1cmF0aW9uRXJyb3JUYXNrKGV4cG9ydHMuQ09ORklHX0VSUk9SX0lOVEVSQUNUSVZFX01PREUpO1xuICAgIH1cbiAgICByZXR1cm4gY2xlYW5UYXNrKGNsZWFuTW9kZSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNsZWFuV2l0aE9wdGlvbnNUYXNrID0gY2xlYW5XaXRoT3B0aW9uc1Rhc2s7XG5mdW5jdGlvbiBjbGVhblRhc2sobW9kZSwgY3VzdG9tQXJncykge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWydjbGVhbicsIGAtJHttb2RlfWAsIC4uLmN1c3RvbUFyZ3NdO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcih0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gQ2xlYW5TdW1tYXJ5XzEuY2xlYW5TdW1tYXJ5UGFyc2VyKG1vZGUgPT09IENsZWFuT3B0aW9ucy5EUllfUlVOLCB0ZXh0KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnRzLmNsZWFuVGFzayA9IGNsZWFuVGFzaztcbmZ1bmN0aW9uIGlzQ2xlYW5PcHRpb25zQXJyYXkoaW5wdXQpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpbnB1dCkgJiYgaW5wdXQuZXZlcnkodGVzdCA9PiBDbGVhbk9wdGlvblZhbHVlcy5oYXModGVzdCkpO1xufVxuZXhwb3J0cy5pc0NsZWFuT3B0aW9uc0FycmF5ID0gaXNDbGVhbk9wdGlvbnNBcnJheTtcbmZ1bmN0aW9uIGdldENsZWFuT3B0aW9ucyhpbnB1dCkge1xuICAgIGxldCBjbGVhbk1vZGU7XG4gICAgbGV0IG9wdGlvbnMgPSBbXTtcbiAgICBsZXQgdmFsaWQgPSB7IGNsZWFuTW9kZTogZmFsc2UsIG9wdGlvbnM6IHRydWUgfTtcbiAgICBpbnB1dC5yZXBsYWNlKC9bXmEtel1pL2csICcnKS5zcGxpdCgnJykuZm9yRWFjaChjaGFyID0+IHtcbiAgICAgICAgaWYgKGlzQ2xlYW5Nb2RlKGNoYXIpKSB7XG4gICAgICAgICAgICBjbGVhbk1vZGUgPSBjaGFyO1xuICAgICAgICAgICAgdmFsaWQuY2xlYW5Nb2RlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkLm9wdGlvbnMgPSB2YWxpZC5vcHRpb25zICYmIGlzS25vd25PcHRpb24ob3B0aW9uc1tvcHRpb25zLmxlbmd0aF0gPSAoYC0ke2NoYXJ9YCkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2xlYW5Nb2RlLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgICB2YWxpZCxcbiAgICB9O1xufVxuZnVuY3Rpb24gaXNDbGVhbk1vZGUoY2xlYW5Nb2RlKSB7XG4gICAgcmV0dXJuIGNsZWFuTW9kZSA9PT0gQ2xlYW5PcHRpb25zLkZPUkNFIHx8IGNsZWFuTW9kZSA9PT0gQ2xlYW5PcHRpb25zLkRSWV9SVU47XG59XG5mdW5jdGlvbiBpc0tub3duT3B0aW9uKG9wdGlvbikge1xuICAgIHJldHVybiAvXi1bYS16XSQvaS50ZXN0KG9wdGlvbikgJiYgQ2xlYW5PcHRpb25WYWx1ZXMuaGFzKG9wdGlvbi5jaGFyQXQoMSkpO1xufVxuZnVuY3Rpb24gaXNJbnRlcmFjdGl2ZU1vZGUob3B0aW9uKSB7XG4gICAgaWYgKC9eLVteXFwtXS8udGVzdChvcHRpb24pKSB7XG4gICAgICAgIHJldHVybiBvcHRpb24uaW5kZXhPZignaScpID4gMDtcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbiA9PT0gJy0taW50ZXJhY3RpdmUnO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xlYW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldFJlc2V0TW9kZSA9IGV4cG9ydHMucmVzZXRUYXNrID0gZXhwb3J0cy5SZXNldE1vZGUgPSB2b2lkIDA7XG5jb25zdCB0YXNrXzEgPSByZXF1aXJlKFwiLi90YXNrXCIpO1xudmFyIFJlc2V0TW9kZTtcbihmdW5jdGlvbiAoUmVzZXRNb2RlKSB7XG4gICAgUmVzZXRNb2RlW1wiTUlYRURcIl0gPSBcIm1peGVkXCI7XG4gICAgUmVzZXRNb2RlW1wiU09GVFwiXSA9IFwic29mdFwiO1xuICAgIFJlc2V0TW9kZVtcIkhBUkRcIl0gPSBcImhhcmRcIjtcbiAgICBSZXNldE1vZGVbXCJNRVJHRVwiXSA9IFwibWVyZ2VcIjtcbiAgICBSZXNldE1vZGVbXCJLRUVQXCJdID0gXCJrZWVwXCI7XG59KShSZXNldE1vZGUgPSBleHBvcnRzLlJlc2V0TW9kZSB8fCAoZXhwb3J0cy5SZXNldE1vZGUgPSB7fSkpO1xuY29uc3QgUmVzZXRNb2RlcyA9IEFycmF5LmZyb20oT2JqZWN0LnZhbHVlcyhSZXNldE1vZGUpKTtcbmZ1bmN0aW9uIHJlc2V0VGFzayhtb2RlLCBjdXN0b21BcmdzKSB7XG4gICAgY29uc3QgY29tbWFuZHMgPSBbJ3Jlc2V0J107XG4gICAgaWYgKGlzVmFsaWRSZXNldE1vZGUobW9kZSkpIHtcbiAgICAgICAgY29tbWFuZHMucHVzaChgLS0ke21vZGV9YCk7XG4gICAgfVxuICAgIGNvbW1hbmRzLnB1c2goLi4uY3VzdG9tQXJncyk7XG4gICAgcmV0dXJuIHRhc2tfMS5zdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKGNvbW1hbmRzKTtcbn1cbmV4cG9ydHMucmVzZXRUYXNrID0gcmVzZXRUYXNrO1xuZnVuY3Rpb24gZ2V0UmVzZXRNb2RlKG1vZGUpIHtcbiAgICBpZiAoaXNWYWxpZFJlc2V0TW9kZShtb2RlKSkge1xuICAgICAgICByZXR1cm4gbW9kZTtcbiAgICB9XG4gICAgc3dpdGNoICh0eXBlb2YgbW9kZSkge1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICAgICAgcmV0dXJuIFJlc2V0TW9kZS5TT0ZUO1xuICAgIH1cbiAgICByZXR1cm47XG59XG5leHBvcnRzLmdldFJlc2V0TW9kZSA9IGdldFJlc2V0TW9kZTtcbmZ1bmN0aW9uIGlzVmFsaWRSZXNldE1vZGUobW9kZSkge1xuICAgIHJldHVybiBSZXNldE1vZGVzLmluY2x1ZGVzKG1vZGUpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVzZXQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBnaXRfY29uc3RydWN0X2Vycm9yXzEgPSByZXF1aXJlKFwiLi9lcnJvcnMvZ2l0LWNvbnN0cnVjdC1lcnJvclwiKTtcbmNvbnN0IGdpdF9lcnJvcl8xID0gcmVxdWlyZShcIi4vZXJyb3JzL2dpdC1lcnJvclwiKTtcbmNvbnN0IGdpdF9wbHVnaW5fZXJyb3JfMSA9IHJlcXVpcmUoXCIuL2Vycm9ycy9naXQtcGx1Z2luLWVycm9yXCIpO1xuY29uc3QgZ2l0X3Jlc3BvbnNlX2Vycm9yXzEgPSByZXF1aXJlKFwiLi9lcnJvcnMvZ2l0LXJlc3BvbnNlLWVycm9yXCIpO1xuY29uc3QgdGFza19jb25maWd1cmF0aW9uX2Vycm9yXzEgPSByZXF1aXJlKFwiLi9lcnJvcnMvdGFzay1jb25maWd1cmF0aW9uLWVycm9yXCIpO1xuY29uc3QgY2hlY2tfaXNfcmVwb18xID0gcmVxdWlyZShcIi4vdGFza3MvY2hlY2staXMtcmVwb1wiKTtcbmNvbnN0IGNsZWFuXzEgPSByZXF1aXJlKFwiLi90YXNrcy9jbGVhblwiKTtcbmNvbnN0IHJlc2V0XzEgPSByZXF1aXJlKFwiLi90YXNrcy9yZXNldFwiKTtcbmNvbnN0IGFwaSA9IHtcbiAgICBDaGVja1JlcG9BY3Rpb25zOiBjaGVja19pc19yZXBvXzEuQ2hlY2tSZXBvQWN0aW9ucyxcbiAgICBDbGVhbk9wdGlvbnM6IGNsZWFuXzEuQ2xlYW5PcHRpb25zLFxuICAgIEdpdENvbnN0cnVjdEVycm9yOiBnaXRfY29uc3RydWN0X2Vycm9yXzEuR2l0Q29uc3RydWN0RXJyb3IsXG4gICAgR2l0RXJyb3I6IGdpdF9lcnJvcl8xLkdpdEVycm9yLFxuICAgIEdpdFBsdWdpbkVycm9yOiBnaXRfcGx1Z2luX2Vycm9yXzEuR2l0UGx1Z2luRXJyb3IsXG4gICAgR2l0UmVzcG9uc2VFcnJvcjogZ2l0X3Jlc3BvbnNlX2Vycm9yXzEuR2l0UmVzcG9uc2VFcnJvcixcbiAgICBSZXNldE1vZGU6IHJlc2V0XzEuUmVzZXRNb2RlLFxuICAgIFRhc2tDb25maWd1cmF0aW9uRXJyb3I6IHRhc2tfY29uZmlndXJhdGlvbl9lcnJvcl8xLlRhc2tDb25maWd1cmF0aW9uRXJyb3IsXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gYXBpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBpLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jb21tYW5kQ29uZmlnUHJlZml4aW5nUGx1Z2luID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmZ1bmN0aW9uIGNvbW1hbmRDb25maWdQcmVmaXhpbmdQbHVnaW4oY29uZmlndXJhdGlvbikge1xuICAgIGNvbnN0IHByZWZpeCA9IHV0aWxzXzEucHJlZml4ZWRBcnJheShjb25maWd1cmF0aW9uLCAnLWMnKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnc3Bhd24uYXJncycsXG4gICAgICAgIGFjdGlvbihkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gWy4uLnByZWZpeCwgLi4uZGF0YV07XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuY29tbWFuZENvbmZpZ1ByZWZpeGluZ1BsdWdpbiA9IGNvbW1hbmRDb25maWdQcmVmaXhpbmdQbHVnaW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21tYW5kLWNvbmZpZy1wcmVmaXhpbmctcGx1Z2luLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5lcnJvckRldGVjdGlvblBsdWdpbiA9IGV4cG9ydHMuZXJyb3JEZXRlY3Rpb25IYW5kbGVyID0gdm9pZCAwO1xuY29uc3QgZ2l0X2Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3JzL2dpdC1lcnJvclwiKTtcbmZ1bmN0aW9uIGlzVGFza0Vycm9yKHJlc3VsdCkge1xuICAgIHJldHVybiAhIShyZXN1bHQuZXhpdENvZGUgJiYgcmVzdWx0LnN0ZEVyci5sZW5ndGgpO1xufVxuZnVuY3Rpb24gZ2V0RXJyb3JNZXNzYWdlKHJlc3VsdCkge1xuICAgIHJldHVybiBCdWZmZXIuY29uY2F0KFsuLi5yZXN1bHQuc3RkT3V0LCAuLi5yZXN1bHQuc3RkRXJyXSk7XG59XG5mdW5jdGlvbiBlcnJvckRldGVjdGlvbkhhbmRsZXIob3ZlcndyaXRlID0gZmFsc2UsIGlzRXJyb3IgPSBpc1Rhc2tFcnJvciwgZXJyb3JNZXNzYWdlID0gZ2V0RXJyb3JNZXNzYWdlKSB7XG4gICAgcmV0dXJuIChlcnJvciwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGlmICgoIW92ZXJ3cml0ZSAmJiBlcnJvcikgfHwgIWlzRXJyb3IocmVzdWx0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcnJvck1lc3NhZ2UocmVzdWx0KTtcbiAgICB9O1xufVxuZXhwb3J0cy5lcnJvckRldGVjdGlvbkhhbmRsZXIgPSBlcnJvckRldGVjdGlvbkhhbmRsZXI7XG5mdW5jdGlvbiBlcnJvckRldGVjdGlvblBsdWdpbihjb25maWcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAndGFzay5lcnJvcicsXG4gICAgICAgIGFjdGlvbihkYXRhLCBjb250ZXh0KSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IGNvbmZpZyhkYXRhLmVycm9yLCB7XG4gICAgICAgICAgICAgICAgc3RkRXJyOiBjb250ZXh0LnN0ZEVycixcbiAgICAgICAgICAgICAgICBzdGRPdXQ6IGNvbnRleHQuc3RkT3V0LFxuICAgICAgICAgICAgICAgIGV4aXRDb2RlOiBjb250ZXh0LmV4aXRDb2RlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IG5ldyBnaXRfZXJyb3JfMS5HaXRFcnJvcih1bmRlZmluZWQsIGVycm9yLnRvU3RyaW5nKCd1dGYtOCcpKSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlcnJvclxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5lcnJvckRldGVjdGlvblBsdWdpbiA9IGVycm9yRGV0ZWN0aW9uUGx1Z2luO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXJyb3ItZGV0ZWN0aW9uLnBsdWdpbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUGx1Z2luU3RvcmUgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgUGx1Z2luU3RvcmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBsdWdpbnMgPSBuZXcgU2V0KCk7XG4gICAgfVxuICAgIGFkZChwbHVnaW4pIHtcbiAgICAgICAgY29uc3QgcGx1Z2lucyA9IFtdO1xuICAgICAgICB1dGlsc18xLmFzQXJyYXkocGx1Z2luKS5mb3JFYWNoKHBsdWdpbiA9PiBwbHVnaW4gJiYgdGhpcy5wbHVnaW5zLmFkZCh1dGlsc18xLmFwcGVuZChwbHVnaW5zLCBwbHVnaW4pKSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBwbHVnaW5zLmZvckVhY2gocGx1Z2luID0+IHRoaXMucGx1Z2lucy5kZWxldGUocGx1Z2luKSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGV4ZWModHlwZSwgZGF0YSwgY29udGV4dCkge1xuICAgICAgICBsZXQgb3V0cHV0ID0gZGF0YTtcbiAgICAgICAgY29uc3QgY29udGV4dHVhbCA9IE9iamVjdC5mcmVlemUoT2JqZWN0LmNyZWF0ZShjb250ZXh0KSk7XG4gICAgICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIHRoaXMucGx1Z2lucykge1xuICAgICAgICAgICAgaWYgKHBsdWdpbi50eXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gcGx1Z2luLmFjdGlvbihvdXRwdXQsIGNvbnRleHR1YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxufVxuZXhwb3J0cy5QbHVnaW5TdG9yZSA9IFBsdWdpblN0b3JlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGx1Z2luLXN0b3JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wcm9ncmVzc01vbml0b3JQbHVnaW4gPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuZnVuY3Rpb24gcHJvZ3Jlc3NNb25pdG9yUGx1Z2luKHByb2dyZXNzKSB7XG4gICAgY29uc3QgcHJvZ3Jlc3NDb21tYW5kID0gJy0tcHJvZ3Jlc3MnO1xuICAgIGNvbnN0IHByb2dyZXNzTWV0aG9kcyA9IFsnY2hlY2tvdXQnLCAnY2xvbmUnLCAnZmV0Y2gnLCAncHVsbCcsICdwdXNoJ107XG4gICAgY29uc3Qgb25Qcm9ncmVzcyA9IHtcbiAgICAgICAgdHlwZTogJ3NwYXduLmFmdGVyJyxcbiAgICAgICAgYWN0aW9uKF9kYXRhLCBjb250ZXh0KSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAoIWNvbnRleHQuY29tbWFuZHMuaW5jbHVkZXMocHJvZ3Jlc3NDb21tYW5kKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIChfYSA9IGNvbnRleHQuc3Bhd25lZC5zdGRlcnIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vbignZGF0YScsIChjaHVuaykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAvXihbYS16QS1aIF0rKTpcXHMqKFxcZCspJSBcXCgoXFxkKylcXC8oXFxkKylcXCkvLmV4ZWMoY2h1bmsudG9TdHJpbmcoJ3V0ZjgnKSk7XG4gICAgICAgICAgICAgICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3Moe1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IGNvbnRleHQubWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICBzdGFnZTogcHJvZ3Jlc3NFdmVudFN0YWdlKG1lc3NhZ2VbMV0pLFxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogdXRpbHNfMS5hc051bWJlcihtZXNzYWdlWzJdKSxcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2VkOiB1dGlsc18xLmFzTnVtYmVyKG1lc3NhZ2VbM10pLFxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogdXRpbHNfMS5hc051bWJlcihtZXNzYWdlWzRdKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBvbkFyZ3MgPSB7XG4gICAgICAgIHR5cGU6ICdzcGF3bi5hcmdzJyxcbiAgICAgICAgYWN0aW9uKGFyZ3MsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIGlmICghcHJvZ3Jlc3NNZXRob2RzLmluY2x1ZGVzKGNvbnRleHQubWV0aG9kKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmdzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHV0aWxzXzEuaW5jbHVkaW5nKGFyZ3MsIHByb2dyZXNzQ29tbWFuZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBbb25BcmdzLCBvblByb2dyZXNzXTtcbn1cbmV4cG9ydHMucHJvZ3Jlc3NNb25pdG9yUGx1Z2luID0gcHJvZ3Jlc3NNb25pdG9yUGx1Z2luO1xuZnVuY3Rpb24gcHJvZ3Jlc3NFdmVudFN0YWdlKGlucHV0KSB7XG4gICAgcmV0dXJuIFN0cmluZyhpbnB1dC50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJywgMSkpIHx8ICd1bmtub3duJztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByb2dyZXNzLW1vbml0b3ItcGx1Z2luLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2ltcGxlLWdpdC1wbHVnaW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnRpbWVvdXRQbHVnaW4gPSB2b2lkIDA7XG5jb25zdCBnaXRfcGx1Z2luX2Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3JzL2dpdC1wbHVnaW4tZXJyb3JcIik7XG5mdW5jdGlvbiB0aW1lb3V0UGx1Z2luKHsgYmxvY2sgfSkge1xuICAgIGlmIChibG9jayA+IDApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdzcGF3bi5hZnRlcicsXG4gICAgICAgICAgICBhY3Rpb24oX2RhdGEsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgIGxldCB0aW1lb3V0O1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHdhaXQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgJiYgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChraWxsLCBibG9jayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgICAgIChfYSA9IGNvbnRleHQuc3Bhd25lZC5zdGRvdXQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vZmYoJ2RhdGEnLCB3YWl0KTtcbiAgICAgICAgICAgICAgICAgICAgKF9iID0gY29udGV4dC5zcGF3bmVkLnN0ZGVycikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm9mZignZGF0YScsIHdhaXQpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnNwYXduZWQub2ZmKCdleGl0Jywgc3RvcCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc3Bhd25lZC5vZmYoJ2Nsb3NlJywgc3RvcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGtpbGwoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5raWxsKG5ldyBnaXRfcGx1Z2luX2Vycm9yXzEuR2l0UGx1Z2luRXJyb3IodW5kZWZpbmVkLCAndGltZW91dCcsIGBibG9jayB0aW1lb3V0IHJlYWNoZWRgKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIChfYSA9IGNvbnRleHQuc3Bhd25lZC5zdGRvdXQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vbignZGF0YScsIHdhaXQpO1xuICAgICAgICAgICAgICAgIChfYiA9IGNvbnRleHQuc3Bhd25lZC5zdGRlcnIpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5vbignZGF0YScsIHdhaXQpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Bhd25lZC5vbignZXhpdCcsIHN0b3ApO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Bhd25lZC5vbignY2xvc2UnLCBzdG9wKTtcbiAgICAgICAgICAgICAgICB3YWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0cy50aW1lb3V0UGx1Z2luID0gdGltZW91dFBsdWdpbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRpbW91dC1wbHVnaW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jb21tYW5kLWNvbmZpZy1wcmVmaXhpbmctcGx1Z2luXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9lcnJvci1kZXRlY3Rpb24ucGx1Z2luXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9wbHVnaW4tc3RvcmVcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3Byb2dyZXNzLW1vbml0b3ItcGx1Z2luXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9zaW1wbGUtZ2l0LXBsdWdpblwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdGltb3V0LXBsdWdpblwiKSwgZXhwb3J0cyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2l0TG9nZ2VyID0gZXhwb3J0cy5jcmVhdGVMb2dnZXIgPSBleHBvcnRzLmxvZyA9IHZvaWQgMDtcbmNvbnN0IGRlYnVnXzEgPSByZXF1aXJlKFwiZGVidWdcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5kZWJ1Z18xLmRlZmF1bHQuZm9ybWF0dGVycy5MID0gKHZhbHVlKSA9PiBTdHJpbmcodXRpbHNfMS5maWx0ZXJIYXNMZW5ndGgodmFsdWUpID8gdmFsdWUubGVuZ3RoIDogJy0nKTtcbmRlYnVnXzEuZGVmYXVsdC5mb3JtYXR0ZXJzLkIgPSAodmFsdWUpID0+IHtcbiAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoJ3V0ZjgnKTtcbiAgICB9XG4gICAgcmV0dXJuIHV0aWxzXzEub2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufTtcbi8qKlxuICogVGhlIHNoYXJlZCBkZWJ1ZyBsb2dnaW5nIGluc3RhbmNlXG4gKi9cbmV4cG9ydHMubG9nID0gZGVidWdfMS5kZWZhdWx0KCdzaW1wbGUtZ2l0Jyk7XG5mdW5jdGlvbiBwcmVmaXhlZExvZ2dlcih0bywgcHJlZml4LCBmb3J3YXJkKSB7XG4gICAgaWYgKCFwcmVmaXggfHwgIVN0cmluZyhwcmVmaXgpLnJlcGxhY2UoL1xccyovLCAnJykpIHtcbiAgICAgICAgcmV0dXJuICFmb3J3YXJkID8gdG8gOiAobWVzc2FnZSwgLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgdG8obWVzc2FnZSwgLi4uYXJncyk7XG4gICAgICAgICAgICBmb3J3YXJkKG1lc3NhZ2UsIC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gKG1lc3NhZ2UsIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgdG8oYCVzICR7bWVzc2FnZX1gLCBwcmVmaXgsIC4uLmFyZ3MpO1xuICAgICAgICBpZiAoZm9yd2FyZCkge1xuICAgICAgICAgICAgZm9yd2FyZChtZXNzYWdlLCAuLi5hcmdzKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBjaGlsZExvZ2dlck5hbWUobmFtZSwgY2hpbGREZWJ1Z2dlciwgeyBuYW1lc3BhY2U6IHBhcmVudE5hbWVzcGFjZSB9KSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGROYW1lc3BhY2UgPSBjaGlsZERlYnVnZ2VyICYmIGNoaWxkRGVidWdnZXIubmFtZXNwYWNlIHx8ICcnO1xuICAgIGlmIChjaGlsZE5hbWVzcGFjZS5zdGFydHNXaXRoKHBhcmVudE5hbWVzcGFjZSkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkTmFtZXNwYWNlLnN1YnN0cihwYXJlbnROYW1lc3BhY2UubGVuZ3RoICsgMSk7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZE5hbWVzcGFjZSB8fCBwYXJlbnROYW1lc3BhY2U7XG59XG5mdW5jdGlvbiBjcmVhdGVMb2dnZXIobGFiZWwsIHZlcmJvc2UsIGluaXRpYWxTdGVwLCBpbmZvRGVidWdnZXIgPSBleHBvcnRzLmxvZykge1xuICAgIGNvbnN0IGxhYmVsUHJlZml4ID0gbGFiZWwgJiYgYFske2xhYmVsfV1gIHx8ICcnO1xuICAgIGNvbnN0IHNwYXduZWQgPSBbXTtcbiAgICBjb25zdCBkZWJ1Z0RlYnVnZ2VyID0gKHR5cGVvZiB2ZXJib3NlID09PSAnc3RyaW5nJykgPyBpbmZvRGVidWdnZXIuZXh0ZW5kKHZlcmJvc2UpIDogdmVyYm9zZTtcbiAgICBjb25zdCBrZXkgPSBjaGlsZExvZ2dlck5hbWUodXRpbHNfMS5maWx0ZXJUeXBlKHZlcmJvc2UsIHV0aWxzXzEuZmlsdGVyU3RyaW5nKSwgZGVidWdEZWJ1Z2dlciwgaW5mb0RlYnVnZ2VyKTtcbiAgICByZXR1cm4gc3RlcChpbml0aWFsU3RlcCk7XG4gICAgZnVuY3Rpb24gY2hpbGQobmFtZSkge1xuICAgICAgICByZXR1cm4gdXRpbHNfMS5hcHBlbmQoc3Bhd25lZCwgY3JlYXRlTG9nZ2VyKGxhYmVsLCBkZWJ1Z0RlYnVnZ2VyICYmIGRlYnVnRGVidWdnZXIuZXh0ZW5kKG5hbWUpIHx8IG5hbWUpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2libGluZyhuYW1lLCBpbml0aWFsKSB7XG4gICAgICAgIHJldHVybiB1dGlsc18xLmFwcGVuZChzcGF3bmVkLCBjcmVhdGVMb2dnZXIobGFiZWwsIGtleS5yZXBsYWNlKC9eW146XSsvLCBuYW1lKSwgaW5pdGlhbCwgaW5mb0RlYnVnZ2VyKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN0ZXAocGhhc2UpIHtcbiAgICAgICAgY29uc3Qgc3RlcFByZWZpeCA9IHBoYXNlICYmIGBbJHtwaGFzZX1dYCB8fCAnJztcbiAgICAgICAgY29uc3QgZGVidWcgPSBkZWJ1Z0RlYnVnZ2VyICYmIHByZWZpeGVkTG9nZ2VyKGRlYnVnRGVidWdnZXIsIHN0ZXBQcmVmaXgpIHx8IHV0aWxzXzEuTk9PUDtcbiAgICAgICAgY29uc3QgaW5mbyA9IHByZWZpeGVkTG9nZ2VyKGluZm9EZWJ1Z2dlciwgYCR7bGFiZWxQcmVmaXh9ICR7c3RlcFByZWZpeH1gLCBkZWJ1Zyk7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGRlYnVnRGVidWdnZXIgPyBkZWJ1ZyA6IGluZm8sIHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgY2hpbGQsXG4gICAgICAgICAgICBzaWJsaW5nLFxuICAgICAgICAgICAgZGVidWcsXG4gICAgICAgICAgICBpbmZvLFxuICAgICAgICAgICAgc3RlcCxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5jcmVhdGVMb2dnZXIgPSBjcmVhdGVMb2dnZXI7XG4vKipcbiAqIFRoZSBgR2l0TG9nZ2VyYCBpcyB1c2VkIGJ5IHRoZSBtYWluIGBTaW1wbGVHaXRgIHJ1bm5lciB0byBoYW5kbGUgbG9nZ2luZ1xuICogYW55IHdhcm5pbmdzIG9yIGVycm9ycy5cbiAqL1xuY2xhc3MgR2l0TG9nZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihfb3V0ID0gZXhwb3J0cy5sb2cpIHtcbiAgICAgICAgdGhpcy5fb3V0ID0gX291dDtcbiAgICAgICAgdGhpcy5lcnJvciA9IHByZWZpeGVkTG9nZ2VyKF9vdXQsICdbRVJST1JdJyk7XG4gICAgICAgIHRoaXMud2FybiA9IHByZWZpeGVkTG9nZ2VyKF9vdXQsICdbV0FSTl0nKTtcbiAgICB9XG4gICAgc2lsZW50KHNpbGVuY2UgPSBmYWxzZSkge1xuICAgICAgICBpZiAoc2lsZW5jZSAhPT0gdGhpcy5fb3V0LmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IG5hbWVzcGFjZSB9ID0gdGhpcy5fb3V0O1xuICAgICAgICBjb25zdCBlbnYgPSAocHJvY2Vzcy5lbnYuREVCVUcgfHwgJycpLnNwbGl0KCcsJykuZmlsdGVyKHMgPT4gISFzKTtcbiAgICAgICAgY29uc3QgaGFzT24gPSBlbnYuaW5jbHVkZXMobmFtZXNwYWNlKTtcbiAgICAgICAgY29uc3QgaGFzT2ZmID0gZW52LmluY2x1ZGVzKGAtJHtuYW1lc3BhY2V9YCk7XG4gICAgICAgIC8vIGVuYWJsaW5nIHRoZSBsb2dcbiAgICAgICAgaWYgKCFzaWxlbmNlKSB7XG4gICAgICAgICAgICBpZiAoaGFzT2ZmKSB7XG4gICAgICAgICAgICAgICAgdXRpbHNfMS5yZW1vdmUoZW52LCBgLSR7bmFtZXNwYWNlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZW52LnB1c2gobmFtZXNwYWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChoYXNPbikge1xuICAgICAgICAgICAgICAgIHV0aWxzXzEucmVtb3ZlKGVudiwgbmFtZXNwYWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVudi5wdXNoKGAtJHtuYW1lc3BhY2V9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVidWdfMS5kZWZhdWx0LmVuYWJsZShlbnYuam9pbignLCcpKTtcbiAgICB9XG59XG5leHBvcnRzLkdpdExvZ2dlciA9IEdpdExvZ2dlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdpdC1sb2dnZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRhc2tzUGVuZGluZ1F1ZXVlID0gdm9pZCAwO1xuY29uc3QgZ2l0X2Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3JzL2dpdC1lcnJvclwiKTtcbmNvbnN0IGdpdF9sb2dnZXJfMSA9IHJlcXVpcmUoXCIuLi9naXQtbG9nZ2VyXCIpO1xuY2xhc3MgVGFza3NQZW5kaW5nUXVldWUge1xuICAgIGNvbnN0cnVjdG9yKGxvZ0xhYmVsID0gJ0dpdEV4ZWN1dG9yJykge1xuICAgICAgICB0aGlzLmxvZ0xhYmVsID0gbG9nTGFiZWw7XG4gICAgICAgIHRoaXMuX3F1ZXVlID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICB3aXRoUHJvZ3Jlc3ModGFzaykge1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVldWUuZ2V0KHRhc2spO1xuICAgIH1cbiAgICBjcmVhdGVQcm9ncmVzcyh0YXNrKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBUYXNrc1BlbmRpbmdRdWV1ZS5nZXROYW1lKHRhc2suY29tbWFuZHNbMF0pO1xuICAgICAgICBjb25zdCBsb2dnZXIgPSBnaXRfbG9nZ2VyXzEuY3JlYXRlTG9nZ2VyKHRoaXMubG9nTGFiZWwsIG5hbWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFzayxcbiAgICAgICAgICAgIGxvZ2dlcixcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHB1c2godGFzaykge1xuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IHRoaXMuY3JlYXRlUHJvZ3Jlc3ModGFzayk7XG4gICAgICAgIHByb2dyZXNzLmxvZ2dlcignQWRkaW5nIHRhc2sgdG8gdGhlIHF1ZXVlLCBjb21tYW5kcyA9ICVvJywgdGFzay5jb21tYW5kcyk7XG4gICAgICAgIHRoaXMuX3F1ZXVlLnNldCh0YXNrLCBwcm9ncmVzcyk7XG4gICAgICAgIHJldHVybiBwcm9ncmVzcztcbiAgICB9XG4gICAgZmF0YWwoZXJyKSB7XG4gICAgICAgIGZvciAoY29uc3QgW3Rhc2ssIHsgbG9nZ2VyIH1dIG9mIEFycmF5LmZyb20odGhpcy5fcXVldWUuZW50cmllcygpKSkge1xuICAgICAgICAgICAgaWYgKHRhc2sgPT09IGVyci50YXNrKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oYEZhaWxlZCAlb2AsIGVycik7XG4gICAgICAgICAgICAgICAgbG9nZ2VyKGBGYXRhbCBleGNlcHRpb24sIGFueSBhcy15ZXQgdW4tc3RhcnRlZCB0YXNrcyBydW4gdGhyb3VnaCB0aGlzIGV4ZWN1dG9yIHdpbGwgbm90IGJlIGF0dGVtcHRlZGApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oYEEgZmF0YWwgZXhjZXB0aW9uIG9jY3VycmVkIGluIGEgcHJldmlvdXMgdGFzaywgdGhlIHF1ZXVlIGhhcyBiZWVuIHB1cmdlZDogJW9gLCBlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlKHRhc2spO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9xdWV1ZS5zaXplICE9PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFF1ZXVlIHNpemUgc2hvdWxkIGJlIHplcm8gYWZ0ZXIgZmF0YWw6ICR7dGhpcy5fcXVldWUuc2l6ZX1gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wbGV0ZSh0YXNrKSB7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gdGhpcy53aXRoUHJvZ3Jlc3ModGFzayk7XG4gICAgICAgIGlmIChwcm9ncmVzcykge1xuICAgICAgICAgICAgdGhpcy5fcXVldWUuZGVsZXRlKHRhc2spO1xuICAgICAgICB9XG4gICAgfVxuICAgIGF0dGVtcHQodGFzaykge1xuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IHRoaXMud2l0aFByb2dyZXNzKHRhc2spO1xuICAgICAgICBpZiAoIXByb2dyZXNzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgZ2l0X2Vycm9yXzEuR2l0RXJyb3IodW5kZWZpbmVkLCAnVGFza3NQZW5kaW5nUXVldWU6IGF0dGVtcHQgY2FsbGVkIGZvciBhbiB1bmtub3duIHRhc2snKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9ncmVzcy5sb2dnZXIoJ1N0YXJ0aW5nIHRhc2snKTtcbiAgICAgICAgcmV0dXJuIHByb2dyZXNzO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0TmFtZShuYW1lID0gJ2VtcHR5Jykge1xuICAgICAgICByZXR1cm4gYHRhc2s6JHtuYW1lfTokeysrVGFza3NQZW5kaW5nUXVldWUuY291bnRlcn1gO1xuICAgIH1cbn1cbmV4cG9ydHMuVGFza3NQZW5kaW5nUXVldWUgPSBUYXNrc1BlbmRpbmdRdWV1ZTtcblRhc2tzUGVuZGluZ1F1ZXVlLmNvdW50ZXIgPSAwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGFza3MtcGVuZGluZy1xdWV1ZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HaXRFeGVjdXRvckNoYWluID0gdm9pZCAwO1xuY29uc3QgY2hpbGRfcHJvY2Vzc18xID0gcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIik7XG5jb25zdCBnaXRfZXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvcnMvZ2l0LWVycm9yXCIpO1xuY29uc3QgdGFza18xID0gcmVxdWlyZShcIi4uL3Rhc2tzL3Rhc2tcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgdGFza3NfcGVuZGluZ19xdWV1ZV8xID0gcmVxdWlyZShcIi4vdGFza3MtcGVuZGluZy1xdWV1ZVwiKTtcbmNsYXNzIEdpdEV4ZWN1dG9yQ2hhaW4ge1xuICAgIGNvbnN0cnVjdG9yKF9leGVjdXRvciwgX3NjaGVkdWxlciwgX3BsdWdpbnMpIHtcbiAgICAgICAgdGhpcy5fZXhlY3V0b3IgPSBfZXhlY3V0b3I7XG4gICAgICAgIHRoaXMuX3NjaGVkdWxlciA9IF9zY2hlZHVsZXI7XG4gICAgICAgIHRoaXMuX3BsdWdpbnMgPSBfcGx1Z2lucztcbiAgICAgICAgdGhpcy5fY2hhaW4gPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgdGhpcy5fcXVldWUgPSBuZXcgdGFza3NfcGVuZGluZ19xdWV1ZV8xLlRhc2tzUGVuZGluZ1F1ZXVlKCk7XG4gICAgfVxuICAgIGdldCBiaW5hcnkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9leGVjdXRvci5iaW5hcnk7XG4gICAgfVxuICAgIGdldCBjd2QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9leGVjdXRvci5jd2Q7XG4gICAgfVxuICAgIGdldCBlbnYoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9leGVjdXRvci5lbnY7XG4gICAgfVxuICAgIGdldCBvdXRwdXRIYW5kbGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXhlY3V0b3Iub3V0cHV0SGFuZGxlcjtcbiAgICB9XG4gICAgY2hhaW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwdXNoKHRhc2spIHtcbiAgICAgICAgdGhpcy5fcXVldWUucHVzaCh0YXNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYWluID0gdGhpcy5fY2hhaW4udGhlbigoKSA9PiB0aGlzLmF0dGVtcHRUYXNrKHRhc2spKTtcbiAgICB9XG4gICAgYXR0ZW1wdFRhc2sodGFzaykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3Qgb25TY2hlZHVsZUNvbXBsZXRlID0geWllbGQgdGhpcy5fc2NoZWR1bGVyLm5leHQoKTtcbiAgICAgICAgICAgIGNvbnN0IG9uUXVldWVDb21wbGV0ZSA9ICgpID0+IHRoaXMuX3F1ZXVlLmNvbXBsZXRlKHRhc2spO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGxvZ2dlciB9ID0gdGhpcy5fcXVldWUuYXR0ZW1wdCh0YXNrKTtcbiAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgKHRhc2tfMS5pc0VtcHR5VGFzayh0YXNrKVxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuYXR0ZW1wdEVtcHR5VGFzayh0YXNrLCBsb2dnZXIpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5hdHRlbXB0UmVtb3RlVGFzayh0YXNrLCBsb2dnZXIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgdGhpcy5vbkZhdGFsRXhjZXB0aW9uKHRhc2ssIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgb25RdWV1ZUNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgb25TY2hlZHVsZUNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvbkZhdGFsRXhjZXB0aW9uKHRhc2ssIGUpIHtcbiAgICAgICAgY29uc3QgZ2l0RXJyb3IgPSAoZSBpbnN0YW5jZW9mIGdpdF9lcnJvcl8xLkdpdEVycm9yKSA/IE9iamVjdC5hc3NpZ24oZSwgeyB0YXNrIH0pIDogbmV3IGdpdF9lcnJvcl8xLkdpdEVycm9yKHRhc2ssIGUgJiYgU3RyaW5nKGUpKTtcbiAgICAgICAgdGhpcy5fY2hhaW4gPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgdGhpcy5fcXVldWUuZmF0YWwoZ2l0RXJyb3IpO1xuICAgICAgICByZXR1cm4gZ2l0RXJyb3I7XG4gICAgfVxuICAgIGF0dGVtcHRSZW1vdGVUYXNrKHRhc2ssIGxvZ2dlcikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgYXJncyA9IHRoaXMuX3BsdWdpbnMuZXhlYygnc3Bhd24uYXJncycsIFsuLi50YXNrLmNvbW1hbmRzXSwgcGx1Z2luQ29udGV4dCh0YXNrLCB0YXNrLmNvbW1hbmRzKSk7XG4gICAgICAgICAgICBjb25zdCByYXcgPSB5aWVsZCB0aGlzLmdpdFJlc3BvbnNlKHRhc2ssIHRoaXMuYmluYXJ5LCBhcmdzLCB0aGlzLm91dHB1dEhhbmRsZXIsIGxvZ2dlci5zdGVwKCdTUEFXTicpKTtcbiAgICAgICAgICAgIGNvbnN0IG91dHB1dFN0cmVhbXMgPSB5aWVsZCB0aGlzLmhhbmRsZVRhc2tEYXRhKHRhc2ssIGFyZ3MsIHJhdywgbG9nZ2VyLnN0ZXAoJ0hBTkRMRScpKTtcbiAgICAgICAgICAgIGxvZ2dlcihgcGFzc2luZyByZXNwb25zZSB0byB0YXNrJ3MgcGFyc2VyIGFzIGEgJXNgLCB0YXNrLmZvcm1hdCk7XG4gICAgICAgICAgICBpZiAodGFza18xLmlzQnVmZmVyVGFzayh0YXNrKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1dGlsc18xLmNhbGxUYXNrUGFyc2VyKHRhc2sucGFyc2VyLCBvdXRwdXRTdHJlYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1dGlsc18xLmNhbGxUYXNrUGFyc2VyKHRhc2sucGFyc2VyLCBvdXRwdXRTdHJlYW1zLmFzU3RyaW5ncygpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGF0dGVtcHRFbXB0eVRhc2sodGFzaywgbG9nZ2VyKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBsb2dnZXIoYGVtcHR5IHRhc2sgYnlwYXNzaW5nIGNoaWxkIHByb2Nlc3MgdG8gY2FsbCB0byB0YXNrJ3MgcGFyc2VyYCk7XG4gICAgICAgICAgICByZXR1cm4gdGFzay5wYXJzZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZVRhc2tEYXRhKHRhc2ssIGFyZ3MsIHJlc3VsdCwgbG9nZ2VyKSB7XG4gICAgICAgIGNvbnN0IHsgZXhpdENvZGUsIHJlamVjdGlvbiwgc3RkT3V0LCBzdGRFcnIgfSA9IHJlc3VsdDtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChkb25lLCBmYWlsKSA9PiB7XG4gICAgICAgICAgICBsb2dnZXIoYFByZXBhcmluZyB0byBoYW5kbGUgcHJvY2VzcyByZXNwb25zZSBleGl0Q29kZT0lZCBzdGRPdXQ9YCwgZXhpdENvZGUpO1xuICAgICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gdGhpcy5fcGx1Z2lucy5leGVjKCd0YXNrLmVycm9yJywgeyBlcnJvcjogcmVqZWN0aW9uIH0sIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcGx1Z2luQ29udGV4dCh0YXNrLCBhcmdzKSksIHJlc3VsdCkpO1xuICAgICAgICAgICAgaWYgKGVycm9yICYmIHRhc2sub25FcnJvcikge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKGBleGl0Q29kZT0lcyBoYW5kbGluZyB3aXRoIGN1c3RvbSBlcnJvciBoYW5kbGVyYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2sub25FcnJvcihyZXN1bHQsIGVycm9yLCAobmV3U3RkT3V0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKGBjdXN0b20gZXJyb3IgaGFuZGxlciB0cmVhdGVkIGFzIHN1Y2Nlc3NgKTtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKGBjdXN0b20gZXJyb3IgcmV0dXJuZWQgYSAlc2AsIHV0aWxzXzEub2JqZWN0VG9TdHJpbmcobmV3U3RkT3V0KSk7XG4gICAgICAgICAgICAgICAgICAgIGRvbmUobmV3IHV0aWxzXzEuR2l0T3V0cHV0U3RyZWFtcyhBcnJheS5pc0FycmF5KG5ld1N0ZE91dCkgPyBCdWZmZXIuY29uY2F0KG5ld1N0ZE91dCkgOiBuZXdTdGRPdXQsIEJ1ZmZlci5jb25jYXQoc3RkRXJyKSkpO1xuICAgICAgICAgICAgICAgIH0sIGZhaWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oYGhhbmRsaW5nIGFzIGVycm9yOiBleGl0Q29kZT0lcyBzdGRFcnI9JXMgcmVqZWN0aW9uPSVvYCwgZXhpdENvZGUsIHN0ZEVyci5sZW5ndGgsIHJlamVjdGlvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhaWwoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9nZ2VyLmluZm8oYHJldHJpZXZpbmcgdGFzayBvdXRwdXQgY29tcGxldGVgKTtcbiAgICAgICAgICAgIGRvbmUobmV3IHV0aWxzXzEuR2l0T3V0cHV0U3RyZWFtcyhCdWZmZXIuY29uY2F0KHN0ZE91dCksIEJ1ZmZlci5jb25jYXQoc3RkRXJyKSkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2l0UmVzcG9uc2UodGFzaywgY29tbWFuZCwgYXJncywgb3V0cHV0SGFuZGxlciwgbG9nZ2VyKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBvdXRwdXRMb2dnZXIgPSBsb2dnZXIuc2libGluZygnb3V0cHV0Jyk7XG4gICAgICAgICAgICBjb25zdCBzcGF3bk9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgY3dkOiB0aGlzLmN3ZCxcbiAgICAgICAgICAgICAgICBlbnY6IHRoaXMuZW52LFxuICAgICAgICAgICAgICAgIHdpbmRvd3NIaWRlOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoZG9uZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0ZE91dCA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0ZEVyciA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBhdHRlbXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgcmVqZWN0aW9uO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGF0dGVtcHRDbG9zZShleGl0Q29kZSwgZXZlbnQgPSAncmV0cnknKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsb3Npbmcgd2hlbiB0aGVyZSBpcyBjb250ZW50LCB0ZXJtaW5hdGUgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGVtcHRlZCB8fCBzdGRFcnIubGVuZ3RoIHx8IHN0ZE91dC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKGBleGl0Q29kZT0lcyBldmVudD0lcyByZWplY3Rpb249JW9gLCBleGl0Q29kZSwgZXZlbnQsIHJlamVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGRPdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RkRXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXRDb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBmaXJzdCBhdHRlbXB0IGF0IGNsb3NpbmcgYnV0IG5vIGNvbnRlbnQgeWV0LCB3YWl0IGJyaWVmbHkgZm9yIHRoZSBjbG9zZS9leGl0IHRoYXQgbWF5IGZvbGxvd1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWF0dGVtcHRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYXR0ZW1wdENsb3NlKGV4aXRDb2RlLCAnZGVmZXJyZWQnKSwgNTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKCdyZWNlaXZlZCAlcyBldmVudCBiZWZvcmUgY29udGVudCBvbiBzdGRPdXQvc3RkRXJyJywgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKGAlcyAlb2AsIGNvbW1hbmQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIGxvZ2dlcignJU8nLCBzcGF3bk9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwYXduZWQgPSBjaGlsZF9wcm9jZXNzXzEuc3Bhd24oY29tbWFuZCwgYXJncywgc3Bhd25PcHRpb25zKTtcbiAgICAgICAgICAgICAgICBzcGF3bmVkLnN0ZG91dC5vbignZGF0YScsIG9uRGF0YVJlY2VpdmVkKHN0ZE91dCwgJ3N0ZE91dCcsIGxvZ2dlciwgb3V0cHV0TG9nZ2VyLnN0ZXAoJ3N0ZE91dCcpKSk7XG4gICAgICAgICAgICAgICAgc3Bhd25lZC5zdGRlcnIub24oJ2RhdGEnLCBvbkRhdGFSZWNlaXZlZChzdGRFcnIsICdzdGRFcnInLCBsb2dnZXIsIG91dHB1dExvZ2dlci5zdGVwKCdzdGRFcnInKSkpO1xuICAgICAgICAgICAgICAgIHNwYXduZWQub24oJ2Vycm9yJywgb25FcnJvclJlY2VpdmVkKHN0ZEVyciwgbG9nZ2VyKSk7XG4gICAgICAgICAgICAgICAgc3Bhd25lZC5vbignY2xvc2UnLCAoY29kZSkgPT4gYXR0ZW1wdENsb3NlKGNvZGUsICdjbG9zZScpKTtcbiAgICAgICAgICAgICAgICBzcGF3bmVkLm9uKCdleGl0JywgKGNvZGUpID0+IGF0dGVtcHRDbG9zZShjb2RlLCAnZXhpdCcpKTtcbiAgICAgICAgICAgICAgICBpZiAob3V0cHV0SGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIoYFBhc3NpbmcgY2hpbGQgcHJvY2VzcyBzdGRPdXQvc3RkRXJyIHRvIGN1c3RvbSBvdXRwdXRIYW5kbGVyYCk7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dEhhbmRsZXIoY29tbWFuZCwgc3Bhd25lZC5zdGRvdXQsIHNwYXduZWQuc3RkZXJyLCBbLi4uYXJnc10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9wbHVnaW5zLmV4ZWMoJ3NwYXduLmFmdGVyJywgdW5kZWZpbmVkLCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHBsdWdpbkNvbnRleHQodGFzaywgYXJncykpLCB7IHNwYXduZWQsIGtpbGwocmVhc29uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3Bhd25lZC5raWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3Rpb24gPSByZWFzb247XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGF3bmVkLmtpbGwoJ1NJR0lOVCcpO1xuICAgICAgICAgICAgICAgICAgICB9IH0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLkdpdEV4ZWN1dG9yQ2hhaW4gPSBHaXRFeGVjdXRvckNoYWluO1xuZnVuY3Rpb24gcGx1Z2luQ29udGV4dCh0YXNrLCBjb21tYW5kcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIG1ldGhvZDogdXRpbHNfMS5maXJzdCh0YXNrLmNvbW1hbmRzKSB8fCAnJyxcbiAgICAgICAgY29tbWFuZHMsXG4gICAgfTtcbn1cbmZ1bmN0aW9uIG9uRXJyb3JSZWNlaXZlZCh0YXJnZXQsIGxvZ2dlcikge1xuICAgIHJldHVybiAoZXJyKSA9PiB7XG4gICAgICAgIGxvZ2dlcihgW0VSUk9SXSBjaGlsZCBwcm9jZXNzIGV4Y2VwdGlvbiAlb2AsIGVycik7XG4gICAgICAgIHRhcmdldC5wdXNoKEJ1ZmZlci5mcm9tKFN0cmluZyhlcnIuc3RhY2spLCAnYXNjaWknKSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIG9uRGF0YVJlY2VpdmVkKHRhcmdldCwgbmFtZSwgbG9nZ2VyLCBvdXRwdXQpIHtcbiAgICByZXR1cm4gKGJ1ZmZlcikgPT4ge1xuICAgICAgICBsb2dnZXIoYCVzIHJlY2VpdmVkICVMIGJ5dGVzYCwgbmFtZSwgYnVmZmVyKTtcbiAgICAgICAgb3V0cHV0KGAlQmAsIGJ1ZmZlcik7XG4gICAgICAgIHRhcmdldC5wdXNoKGJ1ZmZlcik7XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdpdC1leGVjdXRvci1jaGFpbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2l0RXhlY3V0b3IgPSB2b2lkIDA7XG5jb25zdCBnaXRfZXhlY3V0b3JfY2hhaW5fMSA9IHJlcXVpcmUoXCIuL2dpdC1leGVjdXRvci1jaGFpblwiKTtcbmNsYXNzIEdpdEV4ZWN1dG9yIHtcbiAgICBjb25zdHJ1Y3RvcihiaW5hcnkgPSAnZ2l0JywgY3dkLCBfc2NoZWR1bGVyLCBfcGx1Z2lucykge1xuICAgICAgICB0aGlzLmJpbmFyeSA9IGJpbmFyeTtcbiAgICAgICAgdGhpcy5jd2QgPSBjd2Q7XG4gICAgICAgIHRoaXMuX3NjaGVkdWxlciA9IF9zY2hlZHVsZXI7XG4gICAgICAgIHRoaXMuX3BsdWdpbnMgPSBfcGx1Z2lucztcbiAgICAgICAgdGhpcy5fY2hhaW4gPSBuZXcgZ2l0X2V4ZWN1dG9yX2NoYWluXzEuR2l0RXhlY3V0b3JDaGFpbih0aGlzLCB0aGlzLl9zY2hlZHVsZXIsIHRoaXMuX3BsdWdpbnMpO1xuICAgIH1cbiAgICBjaGFpbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBnaXRfZXhlY3V0b3JfY2hhaW5fMS5HaXRFeGVjdXRvckNoYWluKHRoaXMsIHRoaXMuX3NjaGVkdWxlciwgdGhpcy5fcGx1Z2lucyk7XG4gICAgfVxuICAgIHB1c2godGFzaykge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hhaW4ucHVzaCh0YXNrKTtcbiAgICB9XG59XG5leHBvcnRzLkdpdEV4ZWN1dG9yID0gR2l0RXhlY3V0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1naXQtZXhlY3V0b3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnRhc2tDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IGdpdF9yZXNwb25zZV9lcnJvcl8xID0gcmVxdWlyZShcIi4vZXJyb3JzL2dpdC1yZXNwb25zZS1lcnJvclwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbmZ1bmN0aW9uIHRhc2tDYWxsYmFjayh0YXNrLCByZXNwb25zZSwgY2FsbGJhY2sgPSB1dGlsc18xLk5PT1ApIHtcbiAgICBjb25zdCBvblN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uRXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICAgIGlmICgoZXJyID09PSBudWxsIHx8IGVyciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyLnRhc2spID09PSB0YXNrKSB7XG4gICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgZ2l0X3Jlc3BvbnNlX2Vycm9yXzEuR2l0UmVzcG9uc2VFcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhhZGREZXByZWNhdGlvbk5vdGljZVRvRXJyb3IoZXJyKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXNwb25zZS50aGVuKG9uU3VjY2Vzcywgb25FcnJvcik7XG59XG5leHBvcnRzLnRhc2tDYWxsYmFjayA9IHRhc2tDYWxsYmFjaztcbmZ1bmN0aW9uIGFkZERlcHJlY2F0aW9uTm90aWNlVG9FcnJvcihlcnIpIHtcbiAgICBsZXQgbG9nID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc29sZS53YXJuKGBzaW1wbGUtZ2l0IGRlcHJlY2F0aW9uIG5vdGljZTogYWNjZXNzaW5nIEdpdFJlc3BvbnNlRXJyb3IuJHtuYW1lfSBzaG91bGQgYmUgR2l0UmVzcG9uc2VFcnJvci5naXQuJHtuYW1lfSwgdGhpcyB3aWxsIG5vIGxvbmdlciBiZSBhdmFpbGFibGUgaW4gdmVyc2lvbiAzYCk7XG4gICAgICAgIGxvZyA9IHV0aWxzXzEuTk9PUDtcbiAgICB9O1xuICAgIHJldHVybiBPYmplY3QuY3JlYXRlKGVyciwgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZXJyLmdpdCkucmVkdWNlKGRlc2NyaXB0b3JSZWR1Y2VyLCB7fSkpO1xuICAgIGZ1bmN0aW9uIGRlc2NyaXB0b3JSZWR1Y2VyKGFsbCwgbmFtZSkge1xuICAgICAgICBpZiAobmFtZSBpbiBlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBhbGw7XG4gICAgICAgIH1cbiAgICAgICAgYWxsW25hbWVdID0ge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIGxvZyhuYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyLmdpdFtuYW1lXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhbGw7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGFzay1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVtb3RlTWVzc2FnZXNPYmplY3RQYXJzZXJzID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmZ1bmN0aW9uIG9iamVjdEVudW1lcmF0aW9uUmVzdWx0KHJlbW90ZU1lc3NhZ2VzKSB7XG4gICAgcmV0dXJuIChyZW1vdGVNZXNzYWdlcy5vYmplY3RzID0gcmVtb3RlTWVzc2FnZXMub2JqZWN0cyB8fCB7XG4gICAgICAgIGNvbXByZXNzaW5nOiAwLFxuICAgICAgICBjb3VudGluZzogMCxcbiAgICAgICAgZW51bWVyYXRpbmc6IDAsXG4gICAgICAgIHBhY2tSZXVzZWQ6IDAsXG4gICAgICAgIHJldXNlZDogeyBjb3VudDogMCwgZGVsdGE6IDAgfSxcbiAgICAgICAgdG90YWw6IHsgY291bnQ6IDAsIGRlbHRhOiAwIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFzT2JqZWN0Q291bnQoc291cmNlKSB7XG4gICAgY29uc3QgY291bnQgPSAvXlxccyooXFxkKykvLmV4ZWMoc291cmNlKTtcbiAgICBjb25zdCBkZWx0YSA9IC9kZWx0YSAoXFxkKykvaS5leGVjKHNvdXJjZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY291bnQ6IHV0aWxzXzEuYXNOdW1iZXIoY291bnQgJiYgY291bnRbMV0gfHwgJzAnKSxcbiAgICAgICAgZGVsdGE6IHV0aWxzXzEuYXNOdW1iZXIoZGVsdGEgJiYgZGVsdGFbMV0gfHwgJzAnKSxcbiAgICB9O1xufVxuZXhwb3J0cy5yZW1vdGVNZXNzYWdlc09iamVjdFBhcnNlcnMgPSBbXG4gICAgbmV3IHV0aWxzXzEuUmVtb3RlTGluZVBhcnNlcigvXnJlbW90ZTpcXHMqKGVudW1lcmF0aW5nfGNvdW50aW5nfGNvbXByZXNzaW5nKSBvYmplY3RzOiAoXFxkKyksL2ksIChyZXN1bHQsIFthY3Rpb24sIGNvdW50XSkgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBhY3Rpb24udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgZW51bWVyYXRpb24gPSBvYmplY3RFbnVtZXJhdGlvblJlc3VsdChyZXN1bHQucmVtb3RlTWVzc2FnZXMpO1xuICAgICAgICBPYmplY3QuYXNzaWduKGVudW1lcmF0aW9uLCB7IFtrZXldOiB1dGlsc18xLmFzTnVtYmVyKGNvdW50KSB9KTtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5SZW1vdGVMaW5lUGFyc2VyKC9ecmVtb3RlOlxccyooZW51bWVyYXRpbmd8Y291bnRpbmd8Y29tcHJlc3NpbmcpIG9iamVjdHM6IFxcZCslIFxcKFxcZCtcXC8oXFxkKylcXCksL2ksIChyZXN1bHQsIFthY3Rpb24sIGNvdW50XSkgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBhY3Rpb24udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgZW51bWVyYXRpb24gPSBvYmplY3RFbnVtZXJhdGlvblJlc3VsdChyZXN1bHQucmVtb3RlTWVzc2FnZXMpO1xuICAgICAgICBPYmplY3QuYXNzaWduKGVudW1lcmF0aW9uLCB7IFtrZXldOiB1dGlsc18xLmFzTnVtYmVyKGNvdW50KSB9KTtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5SZW1vdGVMaW5lUGFyc2VyKC90b3RhbCAoW14sXSspLCByZXVzZWQgKFteLF0rKSwgcGFjay1yZXVzZWQgKFxcZCspL2ksIChyZXN1bHQsIFt0b3RhbCwgcmV1c2VkLCBwYWNrUmV1c2VkXSkgPT4ge1xuICAgICAgICBjb25zdCBvYmplY3RzID0gb2JqZWN0RW51bWVyYXRpb25SZXN1bHQocmVzdWx0LnJlbW90ZU1lc3NhZ2VzKTtcbiAgICAgICAgb2JqZWN0cy50b3RhbCA9IGFzT2JqZWN0Q291bnQodG90YWwpO1xuICAgICAgICBvYmplY3RzLnJldXNlZCA9IGFzT2JqZWN0Q291bnQocmV1c2VkKTtcbiAgICAgICAgb2JqZWN0cy5wYWNrUmV1c2VkID0gdXRpbHNfMS5hc051bWJlcihwYWNrUmV1c2VkKTtcbiAgICB9KSxcbl07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1yZW1vdGUtb2JqZWN0cy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUmVtb3RlTWVzc2FnZVN1bW1hcnkgPSBleHBvcnRzLnBhcnNlUmVtb3RlTWVzc2FnZXMgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgcGFyc2VfcmVtb3RlX29iamVjdHNfMSA9IHJlcXVpcmUoXCIuL3BhcnNlLXJlbW90ZS1vYmplY3RzXCIpO1xuY29uc3QgcGFyc2VycyA9IFtcbiAgICBuZXcgdXRpbHNfMS5SZW1vdGVMaW5lUGFyc2VyKC9ecmVtb3RlOlxccyooLispJC8sIChyZXN1bHQsIFt0ZXh0XSkgPT4ge1xuICAgICAgICByZXN1bHQucmVtb3RlTWVzc2FnZXMuYWxsLnB1c2godGV4dC50cmltKCkpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSksXG4gICAgLi4ucGFyc2VfcmVtb3RlX29iamVjdHNfMS5yZW1vdGVNZXNzYWdlc09iamVjdFBhcnNlcnMsXG4gICAgbmV3IHV0aWxzXzEuUmVtb3RlTGluZVBhcnNlcihbL2NyZWF0ZSBhICg/OnB1bGx8bWVyZ2UpIHJlcXVlc3QvaSwgL1xccyhodHRwcz86XFwvXFwvXFxTKykkL10sIChyZXN1bHQsIFtwdWxsUmVxdWVzdFVybF0pID0+IHtcbiAgICAgICAgcmVzdWx0LnJlbW90ZU1lc3NhZ2VzLnB1bGxSZXF1ZXN0VXJsID0gcHVsbFJlcXVlc3RVcmw7XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuUmVtb3RlTGluZVBhcnNlcihbL2ZvdW5kIChcXGQrKSB2dWxuZXJhYmlsaXRpZXMuK1xcKChbXildKylcXCkvaSwgL1xccyhodHRwcz86XFwvXFwvXFxTKykkL10sIChyZXN1bHQsIFtjb3VudCwgc3VtbWFyeSwgdXJsXSkgPT4ge1xuICAgICAgICByZXN1bHQucmVtb3RlTWVzc2FnZXMudnVsbmVyYWJpbGl0aWVzID0ge1xuICAgICAgICAgICAgY291bnQ6IHV0aWxzXzEuYXNOdW1iZXIoY291bnQpLFxuICAgICAgICAgICAgc3VtbWFyeSxcbiAgICAgICAgICAgIHVybCxcbiAgICAgICAgfTtcbiAgICB9KSxcbl07XG5mdW5jdGlvbiBwYXJzZVJlbW90ZU1lc3NhZ2VzKF9zdGRPdXQsIHN0ZEVycikge1xuICAgIHJldHVybiB1dGlsc18xLnBhcnNlU3RyaW5nUmVzcG9uc2UoeyByZW1vdGVNZXNzYWdlczogbmV3IFJlbW90ZU1lc3NhZ2VTdW1tYXJ5KCkgfSwgcGFyc2Vycywgc3RkRXJyKTtcbn1cbmV4cG9ydHMucGFyc2VSZW1vdGVNZXNzYWdlcyA9IHBhcnNlUmVtb3RlTWVzc2FnZXM7XG5jbGFzcyBSZW1vdGVNZXNzYWdlU3VtbWFyeSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWxsID0gW107XG4gICAgfVxufVxuZXhwb3J0cy5SZW1vdGVNZXNzYWdlU3VtbWFyeSA9IFJlbW90ZU1lc3NhZ2VTdW1tYXJ5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcmVtb3RlLW1lc3NhZ2VzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXJzZVB1c2hEZXRhaWwgPSBleHBvcnRzLnBhcnNlUHVzaFJlc3VsdCA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBwYXJzZV9yZW1vdGVfbWVzc2FnZXNfMSA9IHJlcXVpcmUoXCIuL3BhcnNlLXJlbW90ZS1tZXNzYWdlc1wiKTtcbmZ1bmN0aW9uIHB1c2hSZXN1bHRQdXNoZWRJdGVtKGxvY2FsLCByZW1vdGUsIHN0YXR1cykge1xuICAgIGNvbnN0IGRlbGV0ZWQgPSBzdGF0dXMuaW5jbHVkZXMoJ2RlbGV0ZWQnKTtcbiAgICBjb25zdCB0YWcgPSBzdGF0dXMuaW5jbHVkZXMoJ3RhZycpIHx8IC9ecmVmc1xcL3RhZ3MvLnRlc3QobG9jYWwpO1xuICAgIGNvbnN0IGFscmVhZHlVcGRhdGVkID0gIXN0YXR1cy5pbmNsdWRlcygnbmV3Jyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsZXRlZCxcbiAgICAgICAgdGFnLFxuICAgICAgICBicmFuY2g6ICF0YWcsXG4gICAgICAgIG5ldzogIWFscmVhZHlVcGRhdGVkLFxuICAgICAgICBhbHJlYWR5VXBkYXRlZCxcbiAgICAgICAgbG9jYWwsXG4gICAgICAgIHJlbW90ZSxcbiAgICB9O1xufVxuY29uc3QgcGFyc2VycyA9IFtcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9eUHVzaGluZyB0byAoLispJC8sIChyZXN1bHQsIFtyZXBvXSkgPT4ge1xuICAgICAgICByZXN1bHQucmVwbyA9IHJlcG87XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvXnVwZGF0aW5nIGxvY2FsIHRyYWNraW5nIHJlZiAnKC4rKScvLCAocmVzdWx0LCBbbG9jYWxdKSA9PiB7XG4gICAgICAgIHJlc3VsdC5yZWYgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIChyZXN1bHQucmVmIHx8IHt9KSksIHsgbG9jYWwgfSk7XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvXlsqLT1dXFxzKyhbXjpdKyk6KFxcUyspXFxzK1xcWyguKyldJC8sIChyZXN1bHQsIFtsb2NhbCwgcmVtb3RlLCB0eXBlXSkgPT4ge1xuICAgICAgICByZXN1bHQucHVzaGVkLnB1c2gocHVzaFJlc3VsdFB1c2hlZEl0ZW0obG9jYWwsIHJlbW90ZSwgdHlwZSkpO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL15CcmFuY2ggJyhbXiddKyknIHNldCB1cCB0byB0cmFjayByZW1vdGUgYnJhbmNoICcoW14nXSspJyBmcm9tICcoW14nXSspJy8sIChyZXN1bHQsIFtsb2NhbCwgcmVtb3RlLCByZW1vdGVOYW1lXSkgPT4ge1xuICAgICAgICByZXN1bHQuYnJhbmNoID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCAocmVzdWx0LmJyYW5jaCB8fCB7fSkpLCB7IGxvY2FsLFxuICAgICAgICAgICAgcmVtb3RlLFxuICAgICAgICAgICAgcmVtb3RlTmFtZSB9KTtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9eKFteOl0rKTooXFxTKylcXHMrKFthLXowLTldKylcXC5cXC4oW2EtejAtOV0rKSQvLCAocmVzdWx0LCBbbG9jYWwsIHJlbW90ZSwgZnJvbSwgdG9dKSA9PiB7XG4gICAgICAgIHJlc3VsdC51cGRhdGUgPSB7XG4gICAgICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICAgICAgbG9jYWwsXG4gICAgICAgICAgICAgICAgcmVtb3RlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhc2g6IHtcbiAgICAgICAgICAgICAgICBmcm9tLFxuICAgICAgICAgICAgICAgIHRvLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9KSxcbl07XG5jb25zdCBwYXJzZVB1c2hSZXN1bHQgPSAoc3RkT3V0LCBzdGRFcnIpID0+IHtcbiAgICBjb25zdCBwdXNoRGV0YWlsID0gZXhwb3J0cy5wYXJzZVB1c2hEZXRhaWwoc3RkT3V0LCBzdGRFcnIpO1xuICAgIGNvbnN0IHJlc3BvbnNlRGV0YWlsID0gcGFyc2VfcmVtb3RlX21lc3NhZ2VzXzEucGFyc2VSZW1vdGVNZXNzYWdlcyhzdGRPdXQsIHN0ZEVycik7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcHVzaERldGFpbCksIHJlc3BvbnNlRGV0YWlsKTtcbn07XG5leHBvcnRzLnBhcnNlUHVzaFJlc3VsdCA9IHBhcnNlUHVzaFJlc3VsdDtcbmNvbnN0IHBhcnNlUHVzaERldGFpbCA9IChzdGRPdXQsIHN0ZEVycikgPT4ge1xuICAgIHJldHVybiB1dGlsc18xLnBhcnNlU3RyaW5nUmVzcG9uc2UoeyBwdXNoZWQ6IFtdIH0sIHBhcnNlcnMsIHN0ZE91dCwgc3RkRXJyKTtcbn07XG5leHBvcnRzLnBhcnNlUHVzaERldGFpbCA9IHBhcnNlUHVzaERldGFpbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXB1c2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnB1c2hUYXNrID0gZXhwb3J0cy5wdXNoVGFnc1Rhc2sgPSB2b2lkIDA7XG5jb25zdCBwYXJzZV9wdXNoXzEgPSByZXF1aXJlKFwiLi4vcGFyc2Vycy9wYXJzZS1wdXNoXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmZ1bmN0aW9uIHB1c2hUYWdzVGFzayhyZWYgPSB7fSwgY3VzdG9tQXJncykge1xuICAgIHV0aWxzXzEuYXBwZW5kKGN1c3RvbUFyZ3MsICctLXRhZ3MnKTtcbiAgICByZXR1cm4gcHVzaFRhc2socmVmLCBjdXN0b21BcmdzKTtcbn1cbmV4cG9ydHMucHVzaFRhZ3NUYXNrID0gcHVzaFRhZ3NUYXNrO1xuZnVuY3Rpb24gcHVzaFRhc2socmVmID0ge30sIGN1c3RvbUFyZ3MpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsncHVzaCcsIC4uLmN1c3RvbUFyZ3NdO1xuICAgIGlmIChyZWYuYnJhbmNoKSB7XG4gICAgICAgIGNvbW1hbmRzLnNwbGljZSgxLCAwLCByZWYuYnJhbmNoKTtcbiAgICB9XG4gICAgaWYgKHJlZi5yZW1vdGUpIHtcbiAgICAgICAgY29tbWFuZHMuc3BsaWNlKDEsIDAsIHJlZi5yZW1vdGUpO1xuICAgIH1cbiAgICB1dGlsc18xLnJlbW92ZShjb21tYW5kcywgJy12Jyk7XG4gICAgdXRpbHNfMS5hcHBlbmQoY29tbWFuZHMsICctLXZlcmJvc2UnKTtcbiAgICB1dGlsc18xLmFwcGVuZChjb21tYW5kcywgJy0tcG9yY2VsYWluJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyOiBwYXJzZV9wdXNoXzEucGFyc2VQdXNoUmVzdWx0LFxuICAgIH07XG59XG5leHBvcnRzLnB1c2hUYXNrID0gcHVzaFRhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wdXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TaW1wbGVHaXRBcGkgPSB2b2lkIDA7XG5jb25zdCB0YXNrX2NhbGxiYWNrXzEgPSByZXF1aXJlKFwiLi90YXNrLWNhbGxiYWNrXCIpO1xuY29uc3QgcHVzaF8xID0gcmVxdWlyZShcIi4vdGFza3MvcHVzaFwiKTtcbmNvbnN0IHRhc2tfMSA9IHJlcXVpcmUoXCIuL3Rhc2tzL3Rhc2tcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5jbGFzcyBTaW1wbGVHaXRBcGkge1xuICAgIGNvbnN0cnVjdG9yKF9leGVjdXRvcikge1xuICAgICAgICB0aGlzLl9leGVjdXRvciA9IF9leGVjdXRvcjtcbiAgICB9XG4gICAgX3J1blRhc2sodGFzaywgdGhlbikge1xuICAgICAgICBjb25zdCBjaGFpbiA9IHRoaXMuX2V4ZWN1dG9yLmNoYWluKCk7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBjaGFpbi5wdXNoKHRhc2spO1xuICAgICAgICBpZiAodGhlbikge1xuICAgICAgICAgICAgdGFza19jYWxsYmFja18xLnRhc2tDYWxsYmFjayh0YXNrLCBwcm9taXNlLCB0aGVuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZSh0aGlzLCB7XG4gICAgICAgICAgICB0aGVuOiB7IHZhbHVlOiBwcm9taXNlLnRoZW4uYmluZChwcm9taXNlKSB9LFxuICAgICAgICAgICAgY2F0Y2g6IHsgdmFsdWU6IHByb21pc2UuY2F0Y2guYmluZChwcm9taXNlKSB9LFxuICAgICAgICAgICAgX2V4ZWN1dG9yOiB7IHZhbHVlOiBjaGFpbiB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWRkKGZpbGVzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ydW5UYXNrKHRhc2tfMS5zdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKFsnYWRkJywgLi4udXRpbHNfMS5hc0FycmF5KGZpbGVzKV0pLCB1dGlsc18xLnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpKTtcbiAgICB9XG4gICAgcHVzaCgpIHtcbiAgICAgICAgY29uc3QgdGFzayA9IHB1c2hfMS5wdXNoVGFzayh7XG4gICAgICAgICAgICByZW1vdGU6IHV0aWxzXzEuZmlsdGVyVHlwZShhcmd1bWVudHNbMF0sIHV0aWxzXzEuZmlsdGVyU3RyaW5nKSxcbiAgICAgICAgICAgIGJyYW5jaDogdXRpbHNfMS5maWx0ZXJUeXBlKGFyZ3VtZW50c1sxXSwgdXRpbHNfMS5maWx0ZXJTdHJpbmcpLFxuICAgICAgICB9LCB1dGlsc18xLmdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3J1blRhc2sodGFzaywgdXRpbHNfMS50cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSk7XG4gICAgfVxufVxuZXhwb3J0cy5TaW1wbGVHaXRBcGkgPSBTaW1wbGVHaXRBcGk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaW1wbGUtZ2l0LWFwaS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlRGVmZXJyZWQgPSBleHBvcnRzLmRlZmVycmVkID0gdm9pZCAwO1xuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGBEZWZlcnJlZFByb21pc2VgXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuIGltcG9ydCB7ZGVmZXJyZWR9IGZyb20gJ0Brd3NpdGVzL3Byb21pc2UtZGVmZXJyZWRgO1xuIGBgYFxuICovXG5mdW5jdGlvbiBkZWZlcnJlZCgpIHtcbiAgICBsZXQgZG9uZTtcbiAgICBsZXQgZmFpbDtcbiAgICBsZXQgc3RhdHVzID0gJ3BlbmRpbmcnO1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgoX2RvbmUsIF9mYWlsKSA9PiB7XG4gICAgICAgIGRvbmUgPSBfZG9uZTtcbiAgICAgICAgZmFpbCA9IF9mYWlsO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb21pc2UsXG4gICAgICAgIGRvbmUocmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAncGVuZGluZycpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAncmVzb2x2ZWQnO1xuICAgICAgICAgICAgICAgIGRvbmUocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbChlcnJvcikge1xuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ3BlbmRpbmcnKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gJ3JlamVjdGVkJztcbiAgICAgICAgICAgICAgICBmYWlsKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGZ1bGZpbGxlZCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0dXMgIT09ICdwZW5kaW5nJztcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHN0YXR1cygpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0dXM7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmZXJyZWQgPSBkZWZlcnJlZDtcbi8qKlxuICogQWxpYXMgb2YgdGhlIGV4cG9ydGVkIGBkZWZlcnJlZGAgZnVuY3Rpb24sIHRvIGhlbHAgY29uc3VtZXJzIHdhbnRpbmcgdG8gdXNlIGBkZWZlcnJlZGAgYXMgdGhlXG4gKiBsb2NhbCB2YXJpYWJsZSBuYW1lIHJhdGhlciB0aGFuIHRoZSBmYWN0b3J5IGltcG9ydCBuYW1lLCB3aXRob3V0IG5lZWRpbmcgdG8gcmVuYW1lIG9uIGltcG9ydC5cbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gaW1wb3J0IHtjcmVhdGVEZWZlcnJlZH0gZnJvbSAnQGt3c2l0ZXMvcHJvbWlzZS1kZWZlcnJlZGA7XG4gYGBgXG4gKi9cbmV4cG9ydHMuY3JlYXRlRGVmZXJyZWQgPSBkZWZlcnJlZDtcbi8qKlxuICogRGVmYXVsdCBleHBvcnQgYWxsb3dzIHVzZSBhczpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gaW1wb3J0IGRlZmVycmVkIGZyb20gJ0Brd3NpdGVzL3Byb21pc2UtZGVmZXJyZWRgO1xuIGBgYFxuICovXG5leHBvcnRzLmRlZmF1bHQgPSBkZWZlcnJlZDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TY2hlZHVsZXIgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgcHJvbWlzZV9kZWZlcnJlZF8xID0gcmVxdWlyZShcIkBrd3NpdGVzL3Byb21pc2UtZGVmZXJyZWRcIik7XG5jb25zdCBnaXRfbG9nZ2VyXzEgPSByZXF1aXJlKFwiLi4vZ2l0LWxvZ2dlclwiKTtcbmNvbnN0IGxvZ2dlciA9IGdpdF9sb2dnZXJfMS5jcmVhdGVMb2dnZXIoJycsICdzY2hlZHVsZXInKTtcbmNvbnN0IGNyZWF0ZVNjaGVkdWxlZFRhc2sgPSAoKCkgPT4ge1xuICAgIGxldCBpZCA9IDA7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWQrKztcbiAgICAgICAgY29uc3QgeyBwcm9taXNlLCBkb25lIH0gPSBwcm9taXNlX2RlZmVycmVkXzEuY3JlYXRlRGVmZXJyZWQoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb21pc2UsXG4gICAgICAgICAgICBkb25lLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgIH07XG4gICAgfTtcbn0pKCk7XG5jbGFzcyBTY2hlZHVsZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbmN1cnJlbmN5ID0gMikge1xuICAgICAgICB0aGlzLmNvbmN1cnJlbmN5ID0gY29uY3VycmVuY3k7XG4gICAgICAgIHRoaXMucGVuZGluZyA9IFtdO1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBbXTtcbiAgICAgICAgbG9nZ2VyKGBDb25zdHJ1Y3RlZCwgY29uY3VycmVuY3k9JXNgLCBjb25jdXJyZW5jeSk7XG4gICAgfVxuICAgIHNjaGVkdWxlKCkge1xuICAgICAgICBpZiAoIXRoaXMucGVuZGluZy5sZW5ndGggfHwgdGhpcy5ydW5uaW5nLmxlbmd0aCA+PSB0aGlzLmNvbmN1cnJlbmN5KSB7XG4gICAgICAgICAgICBsb2dnZXIoYFNjaGVkdWxlIGF0dGVtcHQgaWdub3JlZCwgcGVuZGluZz0lcyBydW5uaW5nPSVzIGNvbmN1cnJlbmN5PSVzYCwgdGhpcy5wZW5kaW5nLmxlbmd0aCwgdGhpcy5ydW5uaW5nLmxlbmd0aCwgdGhpcy5jb25jdXJyZW5jeSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGFzayA9IHV0aWxzXzEuYXBwZW5kKHRoaXMucnVubmluZywgdGhpcy5wZW5kaW5nLnNoaWZ0KCkpO1xuICAgICAgICBsb2dnZXIoYEF0dGVtcHRpbmcgaWQ9JXNgLCB0YXNrLmlkKTtcbiAgICAgICAgdGFzay5kb25lKCgpID0+IHtcbiAgICAgICAgICAgIGxvZ2dlcihgQ29tcGxldGluZyBpZD1gLCB0YXNrLmlkKTtcbiAgICAgICAgICAgIHV0aWxzXzEucmVtb3ZlKHRoaXMucnVubmluZywgdGFzayk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBuZXh0KCkge1xuICAgICAgICBjb25zdCB7IHByb21pc2UsIGlkIH0gPSB1dGlsc18xLmFwcGVuZCh0aGlzLnBlbmRpbmcsIGNyZWF0ZVNjaGVkdWxlZFRhc2soKSk7XG4gICAgICAgIGxvZ2dlcihgU2NoZWR1bGluZyBpZD0lc2AsIGlkKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG59XG5leHBvcnRzLlNjaGVkdWxlciA9IFNjaGVkdWxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjaGVkdWxlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuYXBwbHlQYXRjaFRhc2sgPSB2b2lkIDA7XG5jb25zdCB0YXNrXzEgPSByZXF1aXJlKFwiLi90YXNrXCIpO1xuZnVuY3Rpb24gYXBwbHlQYXRjaFRhc2socGF0Y2hlcywgY3VzdG9tQXJncykge1xuICAgIHJldHVybiB0YXNrXzEuc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhbJ2FwcGx5JywgLi4uY3VzdG9tQXJncywgLi4ucGF0Y2hlc10pO1xufVxuZXhwb3J0cy5hcHBseVBhdGNoVGFzayA9IGFwcGx5UGF0Y2hUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwbHktcGF0Y2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlzU2luZ2xlQnJhbmNoRGVsZXRlRmFpbHVyZSA9IGV4cG9ydHMuYnJhbmNoRGVsZXRpb25GYWlsdXJlID0gZXhwb3J0cy5icmFuY2hEZWxldGlvblN1Y2Nlc3MgPSBleHBvcnRzLkJyYW5jaERlbGV0aW9uQmF0Y2ggPSB2b2lkIDA7XG5jbGFzcyBCcmFuY2hEZWxldGlvbkJhdGNoIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hbGwgPSBbXTtcbiAgICAgICAgdGhpcy5icmFuY2hlcyA9IHt9O1xuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgIH1cbiAgICBnZXQgc3VjY2VzcygpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmVycm9ycy5sZW5ndGg7XG4gICAgfVxufVxuZXhwb3J0cy5CcmFuY2hEZWxldGlvbkJhdGNoID0gQnJhbmNoRGVsZXRpb25CYXRjaDtcbmZ1bmN0aW9uIGJyYW5jaERlbGV0aW9uU3VjY2VzcyhicmFuY2gsIGhhc2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBicmFuY2gsIGhhc2gsIHN1Y2Nlc3M6IHRydWUsXG4gICAgfTtcbn1cbmV4cG9ydHMuYnJhbmNoRGVsZXRpb25TdWNjZXNzID0gYnJhbmNoRGVsZXRpb25TdWNjZXNzO1xuZnVuY3Rpb24gYnJhbmNoRGVsZXRpb25GYWlsdXJlKGJyYW5jaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGJyYW5jaCwgaGFzaDogbnVsbCwgc3VjY2VzczogZmFsc2UsXG4gICAgfTtcbn1cbmV4cG9ydHMuYnJhbmNoRGVsZXRpb25GYWlsdXJlID0gYnJhbmNoRGVsZXRpb25GYWlsdXJlO1xuZnVuY3Rpb24gaXNTaW5nbGVCcmFuY2hEZWxldGVGYWlsdXJlKHRlc3QpIHtcbiAgICByZXR1cm4gdGVzdC5zdWNjZXNzO1xufVxuZXhwb3J0cy5pc1NpbmdsZUJyYW5jaERlbGV0ZUZhaWx1cmUgPSBpc1NpbmdsZUJyYW5jaERlbGV0ZUZhaWx1cmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1CcmFuY2hEZWxldGVTdW1tYXJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYXNCcmFuY2hEZWxldGlvbkVycm9yID0gZXhwb3J0cy5wYXJzZUJyYW5jaERlbGV0aW9ucyA9IHZvaWQgMDtcbmNvbnN0IEJyYW5jaERlbGV0ZVN1bW1hcnlfMSA9IHJlcXVpcmUoXCIuLi9yZXNwb25zZXMvQnJhbmNoRGVsZXRlU3VtbWFyeVwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBkZWxldGVTdWNjZXNzUmVnZXggPSAvKFxcUyspXFxzK1xcKFxcUytcXHMoW14pXSspXFwpLztcbmNvbnN0IGRlbGV0ZUVycm9yUmVnZXggPSAvXmVycm9yW14nXSsnKFteJ10rKScvbTtcbmNvbnN0IHBhcnNlcnMgPSBbXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcihkZWxldGVTdWNjZXNzUmVnZXgsIChyZXN1bHQsIFticmFuY2gsIGhhc2hdKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlbGV0aW9uID0gQnJhbmNoRGVsZXRlU3VtbWFyeV8xLmJyYW5jaERlbGV0aW9uU3VjY2VzcyhicmFuY2gsIGhhc2gpO1xuICAgICAgICByZXN1bHQuYWxsLnB1c2goZGVsZXRpb24pO1xuICAgICAgICByZXN1bHQuYnJhbmNoZXNbYnJhbmNoXSA9IGRlbGV0aW9uO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoZGVsZXRlRXJyb3JSZWdleCwgKHJlc3VsdCwgW2JyYW5jaF0pID0+IHtcbiAgICAgICAgY29uc3QgZGVsZXRpb24gPSBCcmFuY2hEZWxldGVTdW1tYXJ5XzEuYnJhbmNoRGVsZXRpb25GYWlsdXJlKGJyYW5jaCk7XG4gICAgICAgIHJlc3VsdC5lcnJvcnMucHVzaChkZWxldGlvbik7XG4gICAgICAgIHJlc3VsdC5hbGwucHVzaChkZWxldGlvbik7XG4gICAgICAgIHJlc3VsdC5icmFuY2hlc1ticmFuY2hdID0gZGVsZXRpb247XG4gICAgfSksXG5dO1xuY29uc3QgcGFyc2VCcmFuY2hEZWxldGlvbnMgPSAoc3RkT3V0LCBzdGRFcnIpID0+IHtcbiAgICByZXR1cm4gdXRpbHNfMS5wYXJzZVN0cmluZ1Jlc3BvbnNlKG5ldyBCcmFuY2hEZWxldGVTdW1tYXJ5XzEuQnJhbmNoRGVsZXRpb25CYXRjaCgpLCBwYXJzZXJzLCBzdGRPdXQsIHN0ZEVycik7XG59O1xuZXhwb3J0cy5wYXJzZUJyYW5jaERlbGV0aW9ucyA9IHBhcnNlQnJhbmNoRGVsZXRpb25zO1xuZnVuY3Rpb24gaGFzQnJhbmNoRGVsZXRpb25FcnJvcihkYXRhLCBwcm9jZXNzRXhpdENvZGUpIHtcbiAgICByZXR1cm4gcHJvY2Vzc0V4aXRDb2RlID09PSB1dGlsc18xLkV4aXRDb2Rlcy5FUlJPUiAmJiBkZWxldGVFcnJvclJlZ2V4LnRlc3QoZGF0YSk7XG59XG5leHBvcnRzLmhhc0JyYW5jaERlbGV0aW9uRXJyb3IgPSBoYXNCcmFuY2hEZWxldGlvbkVycm9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtYnJhbmNoLWRlbGV0ZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQnJhbmNoU3VtbWFyeVJlc3VsdCA9IHZvaWQgMDtcbmNsYXNzIEJyYW5jaFN1bW1hcnlSZXN1bHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFsbCA9IFtdO1xuICAgICAgICB0aGlzLmJyYW5jaGVzID0ge307XG4gICAgICAgIHRoaXMuY3VycmVudCA9ICcnO1xuICAgICAgICB0aGlzLmRldGFjaGVkID0gZmFsc2U7XG4gICAgfVxuICAgIHB1c2goY3VycmVudCwgZGV0YWNoZWQsIG5hbWUsIGNvbW1pdCwgbGFiZWwpIHtcbiAgICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZGV0YWNoZWQgPSBkZXRhY2hlZDtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbGwucHVzaChuYW1lKTtcbiAgICAgICAgdGhpcy5icmFuY2hlc1tuYW1lXSA9IHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IGN1cnJlbnQsXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgY29tbWl0OiBjb21taXQsXG4gICAgICAgICAgICBsYWJlbDogbGFiZWxcbiAgICAgICAgfTtcbiAgICB9XG59XG5leHBvcnRzLkJyYW5jaFN1bW1hcnlSZXN1bHQgPSBCcmFuY2hTdW1tYXJ5UmVzdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QnJhbmNoU3VtbWFyeS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGFyc2VCcmFuY2hTdW1tYXJ5ID0gdm9pZCAwO1xuY29uc3QgQnJhbmNoU3VtbWFyeV8xID0gcmVxdWlyZShcIi4uL3Jlc3BvbnNlcy9CcmFuY2hTdW1tYXJ5XCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IHBhcnNlcnMgPSBbXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvXihcXCpcXHMpP1xcKCg/OkhFQUQgKT9kZXRhY2hlZCAoPzpmcm9tfGF0KSAoXFxTKylcXClcXHMrKFthLXowLTldKylcXHMoLiopJC8sIChyZXN1bHQsIFtjdXJyZW50LCBuYW1lLCBjb21taXQsIGxhYmVsXSkgPT4ge1xuICAgICAgICByZXN1bHQucHVzaCghIWN1cnJlbnQsIHRydWUsIG5hbWUsIGNvbW1pdCwgbGFiZWwpO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL14oXFwqXFxzKT8oXFxTKylcXHMrKFthLXowLTldKylcXHMoLiopJC9zLCAocmVzdWx0LCBbY3VycmVudCwgbmFtZSwgY29tbWl0LCBsYWJlbF0pID0+IHtcbiAgICAgICAgcmVzdWx0LnB1c2goISFjdXJyZW50LCBmYWxzZSwgbmFtZSwgY29tbWl0LCBsYWJlbCk7XG4gICAgfSlcbl07XG5mdW5jdGlvbiBwYXJzZUJyYW5jaFN1bW1hcnkoc3RkT3V0KSB7XG4gICAgcmV0dXJuIHV0aWxzXzEucGFyc2VTdHJpbmdSZXNwb25zZShuZXcgQnJhbmNoU3VtbWFyeV8xLkJyYW5jaFN1bW1hcnlSZXN1bHQoKSwgcGFyc2Vycywgc3RkT3V0KTtcbn1cbmV4cG9ydHMucGFyc2VCcmFuY2hTdW1tYXJ5ID0gcGFyc2VCcmFuY2hTdW1tYXJ5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtYnJhbmNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWxldGVCcmFuY2hUYXNrID0gZXhwb3J0cy5kZWxldGVCcmFuY2hlc1Rhc2sgPSBleHBvcnRzLmJyYW5jaExvY2FsVGFzayA9IGV4cG9ydHMuYnJhbmNoVGFzayA9IGV4cG9ydHMuY29udGFpbnNEZWxldGVCcmFuY2hDb21tYW5kID0gdm9pZCAwO1xuY29uc3QgZ2l0X3Jlc3BvbnNlX2Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3JzL2dpdC1yZXNwb25zZS1lcnJvclwiKTtcbmNvbnN0IHBhcnNlX2JyYW5jaF9kZWxldGVfMSA9IHJlcXVpcmUoXCIuLi9wYXJzZXJzL3BhcnNlLWJyYW5jaC1kZWxldGVcIik7XG5jb25zdCBwYXJzZV9icmFuY2hfMSA9IHJlcXVpcmUoXCIuLi9wYXJzZXJzL3BhcnNlLWJyYW5jaFwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5mdW5jdGlvbiBjb250YWluc0RlbGV0ZUJyYW5jaENvbW1hbmQoY29tbWFuZHMpIHtcbiAgICBjb25zdCBkZWxldGVDb21tYW5kcyA9IFsnLWQnLCAnLUQnLCAnLS1kZWxldGUnXTtcbiAgICByZXR1cm4gY29tbWFuZHMuc29tZShjb21tYW5kID0+IGRlbGV0ZUNvbW1hbmRzLmluY2x1ZGVzKGNvbW1hbmQpKTtcbn1cbmV4cG9ydHMuY29udGFpbnNEZWxldGVCcmFuY2hDb21tYW5kID0gY29udGFpbnNEZWxldGVCcmFuY2hDb21tYW5kO1xuZnVuY3Rpb24gYnJhbmNoVGFzayhjdXN0b21BcmdzKSB7XG4gICAgY29uc3QgaXNEZWxldGUgPSBjb250YWluc0RlbGV0ZUJyYW5jaENvbW1hbmQoY3VzdG9tQXJncyk7XG4gICAgY29uc3QgY29tbWFuZHMgPSBbJ2JyYW5jaCcsIC4uLmN1c3RvbUFyZ3NdO1xuICAgIGlmIChjb21tYW5kcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29tbWFuZHMucHVzaCgnLWEnKTtcbiAgICB9XG4gICAgaWYgKCFjb21tYW5kcy5pbmNsdWRlcygnLXYnKSkge1xuICAgICAgICBjb21tYW5kcy5zcGxpY2UoMSwgMCwgJy12Jyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIHBhcnNlcihzdGRPdXQsIHN0ZEVycikge1xuICAgICAgICAgICAgaWYgKGlzRGVsZXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlX2JyYW5jaF9kZWxldGVfMS5wYXJzZUJyYW5jaERlbGV0aW9ucyhzdGRPdXQsIHN0ZEVycikuYWxsWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlX2JyYW5jaF8xLnBhcnNlQnJhbmNoU3VtbWFyeShzdGRPdXQpO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmJyYW5jaFRhc2sgPSBicmFuY2hUYXNrO1xuZnVuY3Rpb24gYnJhbmNoTG9jYWxUYXNrKCkge1xuICAgIGNvbnN0IHBhcnNlciA9IHBhcnNlX2JyYW5jaF8xLnBhcnNlQnJhbmNoU3VtbWFyeTtcbiAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIGNvbW1hbmRzOiBbJ2JyYW5jaCcsICctdiddLFxuICAgICAgICBwYXJzZXIsXG4gICAgfTtcbn1cbmV4cG9ydHMuYnJhbmNoTG9jYWxUYXNrID0gYnJhbmNoTG9jYWxUYXNrO1xuZnVuY3Rpb24gZGVsZXRlQnJhbmNoZXNUYXNrKGJyYW5jaGVzLCBmb3JjZURlbGV0ZSA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBjb21tYW5kczogWydicmFuY2gnLCAnLXYnLCBmb3JjZURlbGV0ZSA/ICctRCcgOiAnLWQnLCAuLi5icmFuY2hlc10sXG4gICAgICAgIHBhcnNlcihzdGRPdXQsIHN0ZEVycikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlX2JyYW5jaF9kZWxldGVfMS5wYXJzZUJyYW5jaERlbGV0aW9ucyhzdGRPdXQsIHN0ZEVycik7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3IoeyBleGl0Q29kZSwgc3RkT3V0IH0sIGVycm9yLCBkb25lLCBmYWlsKSB7XG4gICAgICAgICAgICBpZiAoIXBhcnNlX2JyYW5jaF9kZWxldGVfMS5oYXNCcmFuY2hEZWxldGlvbkVycm9yKFN0cmluZyhlcnJvciksIGV4aXRDb2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbmUoc3RkT3V0KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWxldGVCcmFuY2hlc1Rhc2sgPSBkZWxldGVCcmFuY2hlc1Rhc2s7XG5mdW5jdGlvbiBkZWxldGVCcmFuY2hUYXNrKGJyYW5jaCwgZm9yY2VEZWxldGUgPSBmYWxzZSkge1xuICAgIGNvbnN0IHRhc2sgPSB7XG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgY29tbWFuZHM6IFsnYnJhbmNoJywgJy12JywgZm9yY2VEZWxldGUgPyAnLUQnIDogJy1kJywgYnJhbmNoXSxcbiAgICAgICAgcGFyc2VyKHN0ZE91dCwgc3RkRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VfYnJhbmNoX2RlbGV0ZV8xLnBhcnNlQnJhbmNoRGVsZXRpb25zKHN0ZE91dCwgc3RkRXJyKS5icmFuY2hlc1ticmFuY2hdO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yKHsgZXhpdENvZGUsIHN0ZEVyciwgc3RkT3V0IH0sIGVycm9yLCBfLCBmYWlsKSB7XG4gICAgICAgICAgICBpZiAoIXBhcnNlX2JyYW5jaF9kZWxldGVfMS5oYXNCcmFuY2hEZWxldGlvbkVycm9yKFN0cmluZyhlcnJvciksIGV4aXRDb2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBnaXRfcmVzcG9uc2VfZXJyb3JfMS5HaXRSZXNwb25zZUVycm9yKHRhc2sucGFyc2VyKHV0aWxzXzEuYnVmZmVyVG9TdHJpbmcoc3RkT3V0KSwgdXRpbHNfMS5idWZmZXJUb1N0cmluZyhzdGRFcnIpKSwgU3RyaW5nKGVycm9yKSk7XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gdGFzaztcbn1cbmV4cG9ydHMuZGVsZXRlQnJhbmNoVGFzayA9IGRlbGV0ZUJyYW5jaFRhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1icmFuY2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlQ2hlY2tJZ25vcmUgPSB2b2lkIDA7XG4vKipcbiAqIFBhcnNlciBmb3IgdGhlIGBjaGVjay1pZ25vcmVgIGNvbW1hbmQgLSByZXR1cm5zIGVhY2ggZmlsZSBhcyBhIHN0cmluZyBhcnJheVxuICovXG5jb25zdCBwYXJzZUNoZWNrSWdub3JlID0gKHRleHQpID0+IHtcbiAgICByZXR1cm4gdGV4dC5zcGxpdCgvXFxuL2cpXG4gICAgICAgIC5tYXAobGluZSA9PiBsaW5lLnRyaW0oKSlcbiAgICAgICAgLmZpbHRlcihmaWxlID0+ICEhZmlsZSk7XG59O1xuZXhwb3J0cy5wYXJzZUNoZWNrSWdub3JlID0gcGFyc2VDaGVja0lnbm9yZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNoZWNrSWdub3JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jaGVja0lnbm9yZVRhc2sgPSB2b2lkIDA7XG5jb25zdCBDaGVja0lnbm9yZV8xID0gcmVxdWlyZShcIi4uL3Jlc3BvbnNlcy9DaGVja0lnbm9yZVwiKTtcbmZ1bmN0aW9uIGNoZWNrSWdub3JlVGFzayhwYXRocykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzOiBbJ2NoZWNrLWlnbm9yZScsIC4uLnBhdGhzXSxcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBwYXJzZXI6IENoZWNrSWdub3JlXzEucGFyc2VDaGVja0lnbm9yZSxcbiAgICB9O1xufVxuZXhwb3J0cy5jaGVja0lnbm9yZVRhc2sgPSBjaGVja0lnbm9yZVRhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaGVjay1pZ25vcmUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNsb25lTWlycm9yVGFzayA9IGV4cG9ydHMuY2xvbmVUYXNrID0gdm9pZCAwO1xuY29uc3QgdGFza18xID0gcmVxdWlyZShcIi4vdGFza1wiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5mdW5jdGlvbiBjbG9uZVRhc2socmVwbywgZGlyZWN0b3J5LCBjdXN0b21BcmdzKSB7XG4gICAgY29uc3QgY29tbWFuZHMgPSBbJ2Nsb25lJywgLi4uY3VzdG9tQXJnc107XG4gICAgaWYgKHR5cGVvZiByZXBvID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb21tYW5kcy5wdXNoKHJlcG8pO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRpcmVjdG9yeSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29tbWFuZHMucHVzaChkaXJlY3RvcnkpO1xuICAgIH1cbiAgICByZXR1cm4gdGFza18xLnN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZHMpO1xufVxuZXhwb3J0cy5jbG9uZVRhc2sgPSBjbG9uZVRhc2s7XG5mdW5jdGlvbiBjbG9uZU1pcnJvclRhc2socmVwbywgZGlyZWN0b3J5LCBjdXN0b21BcmdzKSB7XG4gICAgdXRpbHNfMS5hcHBlbmQoY3VzdG9tQXJncywgJy0tbWlycm9yJyk7XG4gICAgcmV0dXJuIGNsb25lVGFzayhyZXBvLCBkaXJlY3RvcnksIGN1c3RvbUFyZ3MpO1xufVxuZXhwb3J0cy5jbG9uZU1pcnJvclRhc2sgPSBjbG9uZU1pcnJvclRhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbG9uZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY29uZmlnTGlzdFBhcnNlciA9IGV4cG9ydHMuQ29uZmlnTGlzdCA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBDb25maWdMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5maWxlcyA9IFtdO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgfVxuICAgIGdldCBhbGwoKSB7XG4gICAgICAgIGlmICghdGhpcy5fYWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9hbGwgPSB0aGlzLmZpbGVzLnJlZHVjZSgoYWxsLCBmaWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYWxsLCB0aGlzLnZhbHVlc1tmaWxlXSk7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2FsbDtcbiAgICB9XG4gICAgYWRkRmlsZShmaWxlKSB7XG4gICAgICAgIGlmICghKGZpbGUgaW4gdGhpcy52YWx1ZXMpKSB7XG4gICAgICAgICAgICBjb25zdCBsYXRlc3QgPSB1dGlsc18xLmxhc3QodGhpcy5maWxlcyk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlc1tmaWxlXSA9IGxhdGVzdCA/IE9iamVjdC5jcmVhdGUodGhpcy52YWx1ZXNbbGF0ZXN0XSkgOiB7fTtcbiAgICAgICAgICAgIHRoaXMuZmlsZXMucHVzaChmaWxlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNbZmlsZV07XG4gICAgfVxuICAgIGFkZFZhbHVlKGZpbGUsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5hZGRGaWxlKGZpbGUpO1xuICAgICAgICBpZiAoIXZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICB2YWx1ZXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVzW2tleV0pKSB7XG4gICAgICAgICAgICB2YWx1ZXNba2V5XS5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlc1trZXldID0gW3ZhbHVlc1trZXldLCB2YWx1ZV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYWxsID0gdW5kZWZpbmVkO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29uZmlnTGlzdCA9IENvbmZpZ0xpc3Q7XG5mdW5jdGlvbiBjb25maWdMaXN0UGFyc2VyKHRleHQpIHtcbiAgICBjb25zdCBjb25maWcgPSBuZXcgQ29uZmlnTGlzdCgpO1xuICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdCgnXFwwJyk7XG4gICAgZm9yIChsZXQgaSA9IDAsIG1heCA9IGxpbmVzLmxlbmd0aCAtIDE7IGkgPCBtYXg7KSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBjb25maWdGaWxlUGF0aChsaW5lc1tpKytdKTtcbiAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gdXRpbHNfMS5zcGxpdE9uKGxpbmVzW2krK10sICdcXG4nKTtcbiAgICAgICAgY29uZmlnLmFkZFZhbHVlKGZpbGUsIGtleSwgdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gY29uZmlnO1xufVxuZXhwb3J0cy5jb25maWdMaXN0UGFyc2VyID0gY29uZmlnTGlzdFBhcnNlcjtcbmZ1bmN0aW9uIGNvbmZpZ0ZpbGVQYXRoKGZpbGVQYXRoKSB7XG4gICAgcmV0dXJuIGZpbGVQYXRoLnJlcGxhY2UoL14oZmlsZSk6LywgJycpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q29uZmlnTGlzdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubGlzdENvbmZpZ1Rhc2sgPSBleHBvcnRzLmFkZENvbmZpZ1Rhc2sgPSB2b2lkIDA7XG5jb25zdCBDb25maWdMaXN0XzEgPSByZXF1aXJlKFwiLi4vcmVzcG9uc2VzL0NvbmZpZ0xpc3RcIik7XG5mdW5jdGlvbiBhZGRDb25maWdUYXNrKGtleSwgdmFsdWUsIGFwcGVuZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgY29tbWFuZHMgPSBbJ2NvbmZpZycsICctLWxvY2FsJ107XG4gICAgaWYgKGFwcGVuZCkge1xuICAgICAgICBjb21tYW5kcy5wdXNoKCctLWFkZCcpO1xuICAgIH1cbiAgICBjb21tYW5kcy5wdXNoKGtleSwgdmFsdWUpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcih0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnRzLmFkZENvbmZpZ1Rhc2sgPSBhZGRDb25maWdUYXNrO1xuZnVuY3Rpb24gbGlzdENvbmZpZ1Rhc2soKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHM6IFsnY29uZmlnJywgJy0tbGlzdCcsICctLXNob3ctb3JpZ2luJywgJy0tbnVsbCddLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcih0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gQ29uZmlnTGlzdF8xLmNvbmZpZ0xpc3RQYXJzZXIodGV4dCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMubGlzdENvbmZpZ1Rhc2sgPSBsaXN0Q29uZmlnVGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbmZpZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGFyc2VDb21taXRSZXN1bHQgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgcGFyc2VycyA9IFtcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9cXFsoW15cXHNdKykoIFxcKFteKV0rXFwpKT8gKFteXFxdXSspLywgKHJlc3VsdCwgW2JyYW5jaCwgcm9vdCwgY29tbWl0XSkgPT4ge1xuICAgICAgICByZXN1bHQuYnJhbmNoID0gYnJhbmNoO1xuICAgICAgICByZXN1bHQuY29tbWl0ID0gY29tbWl0O1xuICAgICAgICByZXN1bHQucm9vdCA9ICEhcm9vdDtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9cXHMqQXV0aG9yOlxccyguKykvaSwgKHJlc3VsdCwgW2F1dGhvcl0pID0+IHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBhdXRob3Iuc3BsaXQoJzwnKTtcbiAgICAgICAgY29uc3QgZW1haWwgPSBwYXJ0cy5wb3AoKTtcbiAgICAgICAgaWYgKCFlbWFpbCB8fCAhZW1haWwuaW5jbHVkZXMoJ0AnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5hdXRob3IgPSB7XG4gICAgICAgICAgICBlbWFpbDogZW1haWwuc3Vic3RyKDAsIGVtYWlsLmxlbmd0aCAtIDEpLFxuICAgICAgICAgICAgbmFtZTogcGFydHMuam9pbignPCcpLnRyaW0oKVxuICAgICAgICB9O1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoLyhcXGQrKVteLF0qKD86LFxccyooXFxkKylbXixdKikoPzosXFxzKihcXGQrKSkvZywgKHJlc3VsdCwgW2NoYW5nZXMsIGluc2VydGlvbnMsIGRlbGV0aW9uc10pID0+IHtcbiAgICAgICAgcmVzdWx0LnN1bW1hcnkuY2hhbmdlcyA9IHBhcnNlSW50KGNoYW5nZXMsIDEwKSB8fCAwO1xuICAgICAgICByZXN1bHQuc3VtbWFyeS5pbnNlcnRpb25zID0gcGFyc2VJbnQoaW5zZXJ0aW9ucywgMTApIHx8IDA7XG4gICAgICAgIHJlc3VsdC5zdW1tYXJ5LmRlbGV0aW9ucyA9IHBhcnNlSW50KGRlbGV0aW9ucywgMTApIHx8IDA7XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvXihcXGQrKVteLF0qKD86LFxccyooXFxkKylbXihdK1xcKChbKy1dKSk/LywgKHJlc3VsdCwgW2NoYW5nZXMsIGxpbmVzLCBkaXJlY3Rpb25dKSA9PiB7XG4gICAgICAgIHJlc3VsdC5zdW1tYXJ5LmNoYW5nZXMgPSBwYXJzZUludChjaGFuZ2VzLCAxMCkgfHwgMDtcbiAgICAgICAgY29uc3QgY291bnQgPSBwYXJzZUludChsaW5lcywgMTApIHx8IDA7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICctJykge1xuICAgICAgICAgICAgcmVzdWx0LnN1bW1hcnkuZGVsZXRpb25zID0gY291bnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnKycpIHtcbiAgICAgICAgICAgIHJlc3VsdC5zdW1tYXJ5Lmluc2VydGlvbnMgPSBjb3VudDtcbiAgICAgICAgfVxuICAgIH0pLFxuXTtcbmZ1bmN0aW9uIHBhcnNlQ29tbWl0UmVzdWx0KHN0ZE91dCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgYXV0aG9yOiBudWxsLFxuICAgICAgICBicmFuY2g6ICcnLFxuICAgICAgICBjb21taXQ6ICcnLFxuICAgICAgICByb290OiBmYWxzZSxcbiAgICAgICAgc3VtbWFyeToge1xuICAgICAgICAgICAgY2hhbmdlczogMCxcbiAgICAgICAgICAgIGluc2VydGlvbnM6IDAsXG4gICAgICAgICAgICBkZWxldGlvbnM6IDAsXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gdXRpbHNfMS5wYXJzZVN0cmluZ1Jlc3BvbnNlKHJlc3VsdCwgcGFyc2Vycywgc3RkT3V0KTtcbn1cbmV4cG9ydHMucGFyc2VDb21taXRSZXN1bHQgPSBwYXJzZUNvbW1pdFJlc3VsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLWNvbW1pdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY29tbWl0VGFzayA9IHZvaWQgMDtcbmNvbnN0IHBhcnNlX2NvbW1pdF8xID0gcmVxdWlyZShcIi4uL3BhcnNlcnMvcGFyc2UtY29tbWl0XCIpO1xuZnVuY3Rpb24gY29tbWl0VGFzayhtZXNzYWdlLCBmaWxlcywgY3VzdG9tQXJncykge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWydjb21taXQnXTtcbiAgICBtZXNzYWdlLmZvckVhY2goKG0pID0+IGNvbW1hbmRzLnB1c2goJy1tJywgbSkpO1xuICAgIGNvbW1hbmRzLnB1c2goLi4uZmlsZXMsIC4uLmN1c3RvbUFyZ3MpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcjogcGFyc2VfY29tbWl0XzEucGFyc2VDb21taXRSZXN1bHQsXG4gICAgfTtcbn1cbmV4cG9ydHMuY29tbWl0VGFzayA9IGNvbW1pdFRhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21taXQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRpZmZTdW1tYXJ5ID0gdm9pZCAwO1xuLyoqKlxuICogVGhlIERpZmZTdW1tYXJ5IGlzIHJldHVybmVkIGFzIGEgcmVzcG9uc2UgdG8gZ2V0dGluZyBgZ2l0KCkuc3RhdHVzKClgXG4gKi9cbmNsYXNzIERpZmZTdW1tYXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gMDtcbiAgICAgICAgdGhpcy5kZWxldGlvbnMgPSAwO1xuICAgICAgICB0aGlzLmluc2VydGlvbnMgPSAwO1xuICAgICAgICB0aGlzLmZpbGVzID0gW107XG4gICAgfVxufVxuZXhwb3J0cy5EaWZmU3VtbWFyeSA9IERpZmZTdW1tYXJ5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RGlmZlN1bW1hcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlRGlmZlJlc3VsdCA9IHZvaWQgMDtcbmNvbnN0IERpZmZTdW1tYXJ5XzEgPSByZXF1aXJlKFwiLi4vcmVzcG9uc2VzL0RpZmZTdW1tYXJ5XCIpO1xuZnVuY3Rpb24gcGFyc2VEaWZmUmVzdWx0KHN0ZE91dCkge1xuICAgIGNvbnN0IGxpbmVzID0gc3RkT3V0LnRyaW0oKS5zcGxpdCgnXFxuJyk7XG4gICAgY29uc3Qgc3RhdHVzID0gbmV3IERpZmZTdW1tYXJ5XzEuRGlmZlN1bW1hcnkoKTtcbiAgICByZWFkU3VtbWFyeUxpbmUoc3RhdHVzLCBsaW5lcy5wb3AoKSk7XG4gICAgZm9yIChsZXQgaSA9IDAsIG1heCA9IGxpbmVzLmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgdGV4dEZpbGVDaGFuZ2UobGluZSwgc3RhdHVzKSB8fCBiaW5hcnlGaWxlQ2hhbmdlKGxpbmUsIHN0YXR1cyk7XG4gICAgfVxuICAgIHJldHVybiBzdGF0dXM7XG59XG5leHBvcnRzLnBhcnNlRGlmZlJlc3VsdCA9IHBhcnNlRGlmZlJlc3VsdDtcbmZ1bmN0aW9uIHJlYWRTdW1tYXJ5TGluZShzdGF0dXMsIHN1bW1hcnkpIHtcbiAgICAoc3VtbWFyeSB8fCAnJylcbiAgICAgICAgLnRyaW0oKVxuICAgICAgICAuc3BsaXQoJywgJylcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgY29uc3Qgc3VtbWFyeSA9IC8oXFxkKylcXHMoW2Etel0rKS8uZXhlYyh0ZXh0KTtcbiAgICAgICAgaWYgKCFzdW1tYXJ5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3VtbWFyeVR5cGUoc3RhdHVzLCBzdW1tYXJ5WzJdLCBwYXJzZUludChzdW1tYXJ5WzFdLCAxMCkpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gc3VtbWFyeVR5cGUoc3RhdHVzLCBrZXksIHZhbHVlKSB7XG4gICAgY29uc3QgbWF0Y2ggPSAoLyhbYS16XSs/KXM/XFxiLy5leGVjKGtleSkpO1xuICAgIGlmICghbWF0Y2ggfHwgIXN0YXR1c1VwZGF0ZVttYXRjaFsxXV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdGF0dXNVcGRhdGVbbWF0Y2hbMV1dKHN0YXR1cywgdmFsdWUpO1xufVxuY29uc3Qgc3RhdHVzVXBkYXRlID0ge1xuICAgIGZpbGUoc3RhdHVzLCB2YWx1ZSkge1xuICAgICAgICBzdGF0dXMuY2hhbmdlZCA9IHZhbHVlO1xuICAgIH0sXG4gICAgZGVsZXRpb24oc3RhdHVzLCB2YWx1ZSkge1xuICAgICAgICBzdGF0dXMuZGVsZXRpb25zID0gdmFsdWU7XG4gICAgfSxcbiAgICBpbnNlcnRpb24oc3RhdHVzLCB2YWx1ZSkge1xuICAgICAgICBzdGF0dXMuaW5zZXJ0aW9ucyA9IHZhbHVlO1xuICAgIH1cbn07XG5mdW5jdGlvbiB0ZXh0RmlsZUNoYW5nZShpbnB1dCwgeyBmaWxlcyB9KSB7XG4gICAgY29uc3QgbGluZSA9IGlucHV0LnRyaW0oKS5tYXRjaCgvXiguKylcXHMrXFx8XFxzKyhcXGQrKShcXHMrWytcXC1dKyk/JC8pO1xuICAgIGlmIChsaW5lKSB7XG4gICAgICAgIHZhciBhbHRlcmF0aW9ucyA9IChsaW5lWzNdIHx8ICcnKS50cmltKCk7XG4gICAgICAgIGZpbGVzLnB1c2goe1xuICAgICAgICAgICAgZmlsZTogbGluZVsxXS50cmltKCksXG4gICAgICAgICAgICBjaGFuZ2VzOiBwYXJzZUludChsaW5lWzJdLCAxMCksXG4gICAgICAgICAgICBpbnNlcnRpb25zOiBhbHRlcmF0aW9ucy5yZXBsYWNlKC8tL2csICcnKS5sZW5ndGgsXG4gICAgICAgICAgICBkZWxldGlvbnM6IGFsdGVyYXRpb25zLnJlcGxhY2UoL1xcKy9nLCAnJykubGVuZ3RoLFxuICAgICAgICAgICAgYmluYXJ5OiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGJpbmFyeUZpbGVDaGFuZ2UoaW5wdXQsIHsgZmlsZXMgfSkge1xuICAgIGNvbnN0IGxpbmUgPSBpbnB1dC5tYXRjaCgvXiguKykgXFx8XFxzK0JpbiAoWzAtOS5dKykgLT4gKFswLTkuXSspIChbYS16XSspJC8pO1xuICAgIGlmIChsaW5lKSB7XG4gICAgICAgIGZpbGVzLnB1c2goe1xuICAgICAgICAgICAgZmlsZTogbGluZVsxXS50cmltKCksXG4gICAgICAgICAgICBiZWZvcmU6ICtsaW5lWzJdLFxuICAgICAgICAgICAgYWZ0ZXI6ICtsaW5lWzNdLFxuICAgICAgICAgICAgYmluYXJ5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtZGlmZi1zdW1tYXJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kaWZmU3VtbWFyeVRhc2sgPSB2b2lkIDA7XG5jb25zdCBwYXJzZV9kaWZmX3N1bW1hcnlfMSA9IHJlcXVpcmUoXCIuLi9wYXJzZXJzL3BhcnNlLWRpZmYtc3VtbWFyeVwiKTtcbmZ1bmN0aW9uIGRpZmZTdW1tYXJ5VGFzayhjdXN0b21BcmdzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHM6IFsnZGlmZicsICctLXN0YXQ9NDA5NicsIC4uLmN1c3RvbUFyZ3NdLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcihzdGRPdXQpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZV9kaWZmX3N1bW1hcnlfMS5wYXJzZURpZmZSZXN1bHQoc3RkT3V0KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnRzLmRpZmZTdW1tYXJ5VGFzayA9IGRpZmZTdW1tYXJ5VGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpZmYuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlRmV0Y2hSZXN1bHQgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgcGFyc2VycyA9IFtcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9Gcm9tICguKykkLywgKHJlc3VsdCwgW3JlbW90ZV0pID0+IHtcbiAgICAgICAgcmVzdWx0LnJlbW90ZSA9IHJlbW90ZTtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9cXCogXFxbbmV3IGJyYW5jaF1cXHMrKFxcUyspXFxzKi0+ICguKykkLywgKHJlc3VsdCwgW25hbWUsIHRyYWNraW5nXSkgPT4ge1xuICAgICAgICByZXN1bHQuYnJhbmNoZXMucHVzaCh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdHJhY2tpbmcsXG4gICAgICAgIH0pO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL1xcKiBcXFtuZXcgdGFnXVxccysoXFxTKylcXHMqLT4gKC4rKSQvLCAocmVzdWx0LCBbbmFtZSwgdHJhY2tpbmddKSA9PiB7XG4gICAgICAgIHJlc3VsdC50YWdzLnB1c2goe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHRyYWNraW5nLFxuICAgICAgICB9KTtcbiAgICB9KVxuXTtcbmZ1bmN0aW9uIHBhcnNlRmV0Y2hSZXN1bHQoc3RkT3V0LCBzdGRFcnIpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIHJhdzogc3RkT3V0LFxuICAgICAgICByZW1vdGU6IG51bGwsXG4gICAgICAgIGJyYW5jaGVzOiBbXSxcbiAgICAgICAgdGFnczogW10sXG4gICAgfTtcbiAgICByZXR1cm4gdXRpbHNfMS5wYXJzZVN0cmluZ1Jlc3BvbnNlKHJlc3VsdCwgcGFyc2Vycywgc3RkT3V0LCBzdGRFcnIpO1xufVxuZXhwb3J0cy5wYXJzZUZldGNoUmVzdWx0ID0gcGFyc2VGZXRjaFJlc3VsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLWZldGNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mZXRjaFRhc2sgPSB2b2lkIDA7XG5jb25zdCBwYXJzZV9mZXRjaF8xID0gcmVxdWlyZShcIi4uL3BhcnNlcnMvcGFyc2UtZmV0Y2hcIik7XG5mdW5jdGlvbiBmZXRjaFRhc2socmVtb3RlLCBicmFuY2gsIGN1c3RvbUFyZ3MpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsnZmV0Y2gnLCAuLi5jdXN0b21BcmdzXTtcbiAgICBpZiAocmVtb3RlICYmIGJyYW5jaCkge1xuICAgICAgICBjb21tYW5kcy5wdXNoKHJlbW90ZSwgYnJhbmNoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyOiBwYXJzZV9mZXRjaF8xLnBhcnNlRmV0Y2hSZXN1bHQsXG4gICAgfTtcbn1cbmV4cG9ydHMuZmV0Y2hUYXNrID0gZmV0Y2hUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmV0Y2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhc2hPYmplY3RUYXNrID0gdm9pZCAwO1xuY29uc3QgdGFza18xID0gcmVxdWlyZShcIi4vdGFza1wiKTtcbi8qKlxuICogVGFzayB1c2VkIGJ5IGBnaXQuaGFzaE9iamVjdGBcbiAqL1xuZnVuY3Rpb24gaGFzaE9iamVjdFRhc2soZmlsZVBhdGgsIHdyaXRlKSB7XG4gICAgY29uc3QgY29tbWFuZHMgPSBbJ2hhc2gtb2JqZWN0JywgZmlsZVBhdGhdO1xuICAgIGlmICh3cml0ZSkge1xuICAgICAgICBjb21tYW5kcy5wdXNoKCctdycpO1xuICAgIH1cbiAgICByZXR1cm4gdGFza18xLnN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZHMsIHRydWUpO1xufVxuZXhwb3J0cy5oYXNoT2JqZWN0VGFzayA9IGhhc2hPYmplY3RUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGFzaC1vYmplY3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlSW5pdCA9IGV4cG9ydHMuSW5pdFN1bW1hcnkgPSB2b2lkIDA7XG5jbGFzcyBJbml0U3VtbWFyeSB7XG4gICAgY29uc3RydWN0b3IoYmFyZSwgcGF0aCwgZXhpc3RpbmcsIGdpdERpcikge1xuICAgICAgICB0aGlzLmJhcmUgPSBiYXJlO1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLmV4aXN0aW5nID0gZXhpc3Rpbmc7XG4gICAgICAgIHRoaXMuZ2l0RGlyID0gZ2l0RGlyO1xuICAgIH1cbn1cbmV4cG9ydHMuSW5pdFN1bW1hcnkgPSBJbml0U3VtbWFyeTtcbmNvbnN0IGluaXRSZXNwb25zZVJlZ2V4ID0gL15Jbml0LisgcmVwb3NpdG9yeSBpbiAoLispJC87XG5jb25zdCByZUluaXRSZXNwb25zZVJlZ2V4ID0gL15SZWluLisgaW4gKC4rKSQvO1xuZnVuY3Rpb24gcGFyc2VJbml0KGJhcmUsIHBhdGgsIHRleHQpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IFN0cmluZyh0ZXh0KS50cmltKCk7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAoKHJlc3VsdCA9IGluaXRSZXNwb25zZVJlZ2V4LmV4ZWMocmVzcG9uc2UpKSkge1xuICAgICAgICByZXR1cm4gbmV3IEluaXRTdW1tYXJ5KGJhcmUsIHBhdGgsIGZhbHNlLCByZXN1bHRbMV0pO1xuICAgIH1cbiAgICBpZiAoKHJlc3VsdCA9IHJlSW5pdFJlc3BvbnNlUmVnZXguZXhlYyhyZXNwb25zZSkpKSB7XG4gICAgICAgIHJldHVybiBuZXcgSW5pdFN1bW1hcnkoYmFyZSwgcGF0aCwgdHJ1ZSwgcmVzdWx0WzFdKTtcbiAgICB9XG4gICAgbGV0IGdpdERpciA9ICcnO1xuICAgIGNvbnN0IHRva2VucyA9IHJlc3BvbnNlLnNwbGl0KCcgJyk7XG4gICAgd2hpbGUgKHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0b2tlbnMuc2hpZnQoKTtcbiAgICAgICAgaWYgKHRva2VuID09PSAnaW4nKSB7XG4gICAgICAgICAgICBnaXREaXIgPSB0b2tlbnMuam9pbignICcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBJbml0U3VtbWFyeShiYXJlLCBwYXRoLCAvXnJlL2kudGVzdChyZXNwb25zZSksIGdpdERpcik7XG59XG5leHBvcnRzLnBhcnNlSW5pdCA9IHBhcnNlSW5pdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUluaXRTdW1tYXJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pbml0VGFzayA9IHZvaWQgMDtcbmNvbnN0IEluaXRTdW1tYXJ5XzEgPSByZXF1aXJlKFwiLi4vcmVzcG9uc2VzL0luaXRTdW1tYXJ5XCIpO1xuY29uc3QgYmFyZUNvbW1hbmQgPSAnLS1iYXJlJztcbmZ1bmN0aW9uIGhhc0JhcmVDb21tYW5kKGNvbW1hbmQpIHtcbiAgICByZXR1cm4gY29tbWFuZC5pbmNsdWRlcyhiYXJlQ29tbWFuZCk7XG59XG5mdW5jdGlvbiBpbml0VGFzayhiYXJlID0gZmFsc2UsIHBhdGgsIGN1c3RvbUFyZ3MpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsnaW5pdCcsIC4uLmN1c3RvbUFyZ3NdO1xuICAgIGlmIChiYXJlICYmICFoYXNCYXJlQ29tbWFuZChjb21tYW5kcykpIHtcbiAgICAgICAgY29tbWFuZHMuc3BsaWNlKDEsIDAsIGJhcmVDb21tYW5kKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyKHRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBJbml0U3VtbWFyeV8xLnBhcnNlSW5pdChjb21tYW5kcy5pbmNsdWRlcygnLS1iYXJlJyksIHBhdGgsIHRleHQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydHMuaW5pdFRhc2sgPSBpbml0VGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluaXQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZUxpc3RMb2dTdW1tYXJ5UGFyc2VyID0gZXhwb3J0cy5TUExJVFRFUiA9IGV4cG9ydHMuQ09NTUlUX0JPVU5EQVJZID0gZXhwb3J0cy5TVEFSVF9CT1VOREFSWSA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBwYXJzZV9kaWZmX3N1bW1hcnlfMSA9IHJlcXVpcmUoXCIuL3BhcnNlLWRpZmYtc3VtbWFyeVwiKTtcbmV4cG9ydHMuU1RBUlRfQk9VTkRBUlkgPSAnw7LDssOyw7LDssOyICc7XG5leHBvcnRzLkNPTU1JVF9CT1VOREFSWSA9ICcgw7LDsic7XG5leHBvcnRzLlNQTElUVEVSID0gJyDDsiAnO1xuY29uc3QgZGVmYXVsdEZpZWxkTmFtZXMgPSBbJ2hhc2gnLCAnZGF0ZScsICdtZXNzYWdlJywgJ3JlZnMnLCAnYXV0aG9yX25hbWUnLCAnYXV0aG9yX2VtYWlsJ107XG5mdW5jdGlvbiBsaW5lQnVpbGRlcih0b2tlbnMsIGZpZWxkcykge1xuICAgIHJldHVybiBmaWVsZHMucmVkdWNlKChsaW5lLCBmaWVsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgbGluZVtmaWVsZF0gPSB0b2tlbnNbaW5kZXhdIHx8ICcnO1xuICAgICAgICByZXR1cm4gbGluZTtcbiAgICB9LCBPYmplY3QuY3JlYXRlKHsgZGlmZjogbnVsbCB9KSk7XG59XG5mdW5jdGlvbiBjcmVhdGVMaXN0TG9nU3VtbWFyeVBhcnNlcihzcGxpdHRlciA9IGV4cG9ydHMuU1BMSVRURVIsIGZpZWxkcyA9IGRlZmF1bHRGaWVsZE5hbWVzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGRPdXQpIHtcbiAgICAgICAgY29uc3QgYWxsID0gdXRpbHNfMS50b0xpbmVzV2l0aENvbnRlbnQoc3RkT3V0LCB0cnVlLCBleHBvcnRzLlNUQVJUX0JPVU5EQVJZKVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgY29uc3QgbGluZURldGFpbCA9IGl0ZW0udHJpbSgpLnNwbGl0KGV4cG9ydHMuQ09NTUlUX0JPVU5EQVJZKTtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RMb2dMaW5lID0gbGluZUJ1aWxkZXIobGluZURldGFpbFswXS50cmltKCkuc3BsaXQoc3BsaXR0ZXIpLCBmaWVsZHMpO1xuICAgICAgICAgICAgaWYgKGxpbmVEZXRhaWwubGVuZ3RoID4gMSAmJiAhIWxpbmVEZXRhaWxbMV0udHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgbGlzdExvZ0xpbmUuZGlmZiA9IHBhcnNlX2RpZmZfc3VtbWFyeV8xLnBhcnNlRGlmZlJlc3VsdChsaW5lRGV0YWlsWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBsaXN0TG9nTGluZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbGwsXG4gICAgICAgICAgICBsYXRlc3Q6IGFsbC5sZW5ndGggJiYgYWxsWzBdIHx8IG51bGwsXG4gICAgICAgICAgICB0b3RhbDogYWxsLmxlbmd0aCxcbiAgICAgICAgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5jcmVhdGVMaXN0TG9nU3VtbWFyeVBhcnNlciA9IGNyZWF0ZUxpc3RMb2dTdW1tYXJ5UGFyc2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtbGlzdC1sb2ctc3VtbWFyeS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubG9nVGFzayA9IGV4cG9ydHMucGFyc2VMb2dPcHRpb25zID0gdm9pZCAwO1xuY29uc3QgcGFyc2VfbGlzdF9sb2dfc3VtbWFyeV8xID0gcmVxdWlyZShcIi4uL3BhcnNlcnMvcGFyc2UtbGlzdC1sb2ctc3VtbWFyeVwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgZXhjbHVkZU9wdGlvbnM7XG4oZnVuY3Rpb24gKGV4Y2x1ZGVPcHRpb25zKSB7XG4gICAgZXhjbHVkZU9wdGlvbnNbZXhjbHVkZU9wdGlvbnNbXCItLXByZXR0eVwiXSA9IDBdID0gXCItLXByZXR0eVwiO1xuICAgIGV4Y2x1ZGVPcHRpb25zW2V4Y2x1ZGVPcHRpb25zW1wibWF4LWNvdW50XCJdID0gMV0gPSBcIm1heC1jb3VudFwiO1xuICAgIGV4Y2x1ZGVPcHRpb25zW2V4Y2x1ZGVPcHRpb25zW1wibWF4Q291bnRcIl0gPSAyXSA9IFwibWF4Q291bnRcIjtcbiAgICBleGNsdWRlT3B0aW9uc1tleGNsdWRlT3B0aW9uc1tcIm5cIl0gPSAzXSA9IFwiblwiO1xuICAgIGV4Y2x1ZGVPcHRpb25zW2V4Y2x1ZGVPcHRpb25zW1wiZmlsZVwiXSA9IDRdID0gXCJmaWxlXCI7XG4gICAgZXhjbHVkZU9wdGlvbnNbZXhjbHVkZU9wdGlvbnNbXCJmb3JtYXRcIl0gPSA1XSA9IFwiZm9ybWF0XCI7XG4gICAgZXhjbHVkZU9wdGlvbnNbZXhjbHVkZU9wdGlvbnNbXCJmcm9tXCJdID0gNl0gPSBcImZyb21cIjtcbiAgICBleGNsdWRlT3B0aW9uc1tleGNsdWRlT3B0aW9uc1tcInRvXCJdID0gN10gPSBcInRvXCI7XG4gICAgZXhjbHVkZU9wdGlvbnNbZXhjbHVkZU9wdGlvbnNbXCJzcGxpdHRlclwiXSA9IDhdID0gXCJzcGxpdHRlclwiO1xuICAgIGV4Y2x1ZGVPcHRpb25zW2V4Y2x1ZGVPcHRpb25zW1wic3ltbWV0cmljXCJdID0gOV0gPSBcInN5bW1ldHJpY1wiO1xuICAgIGV4Y2x1ZGVPcHRpb25zW2V4Y2x1ZGVPcHRpb25zW1wibXVsdGlMaW5lXCJdID0gMTBdID0gXCJtdWx0aUxpbmVcIjtcbiAgICBleGNsdWRlT3B0aW9uc1tleGNsdWRlT3B0aW9uc1tcInN0cmljdERhdGVcIl0gPSAxMV0gPSBcInN0cmljdERhdGVcIjtcbn0pKGV4Y2x1ZGVPcHRpb25zIHx8IChleGNsdWRlT3B0aW9ucyA9IHt9KSk7XG5mdW5jdGlvbiBwcmV0dHlGb3JtYXQoZm9ybWF0LCBzcGxpdHRlcikge1xuICAgIGNvbnN0IGZpZWxkcyA9IFtdO1xuICAgIGNvbnN0IGZvcm1hdFN0ciA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGZvcm1hdCkuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgZmllbGRzLnB1c2goZmllbGQpO1xuICAgICAgICBmb3JtYXRTdHIucHVzaChTdHJpbmcoZm9ybWF0W2ZpZWxkXSkpO1xuICAgIH0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIGZpZWxkcywgZm9ybWF0U3RyLmpvaW4oc3BsaXR0ZXIpXG4gICAgXTtcbn1cbmZ1bmN0aW9uIHVzZXJPcHRpb25zKGlucHV0KSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gT2JqZWN0LmFzc2lnbih7fSwgaW5wdXQpO1xuICAgIE9iamVjdC5rZXlzKGlucHV0KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmIChrZXkgaW4gZXhjbHVkZU9wdGlvbnMpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvdXRwdXRba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvdXRwdXQ7XG59XG5mdW5jdGlvbiBwYXJzZUxvZ09wdGlvbnMob3B0ID0ge30sIGN1c3RvbUFyZ3MgPSBbXSkge1xuICAgIGNvbnN0IHNwbGl0dGVyID0gb3B0LnNwbGl0dGVyIHx8IHBhcnNlX2xpc3RfbG9nX3N1bW1hcnlfMS5TUExJVFRFUjtcbiAgICBjb25zdCBmb3JtYXQgPSBvcHQuZm9ybWF0IHx8IHtcbiAgICAgICAgaGFzaDogJyVIJyxcbiAgICAgICAgZGF0ZTogb3B0LnN0cmljdERhdGUgPT09IGZhbHNlID8gJyVhaScgOiAnJWFJJyxcbiAgICAgICAgbWVzc2FnZTogJyVzJyxcbiAgICAgICAgcmVmczogJyVEJyxcbiAgICAgICAgYm9keTogb3B0Lm11bHRpTGluZSA/ICclQicgOiAnJWInLFxuICAgICAgICBhdXRob3JfbmFtZTogJyVhTicsXG4gICAgICAgIGF1dGhvcl9lbWFpbDogJyVhZSdcbiAgICB9O1xuICAgIGNvbnN0IFtmaWVsZHMsIGZvcm1hdFN0cl0gPSBwcmV0dHlGb3JtYXQoZm9ybWF0LCBzcGxpdHRlcik7XG4gICAgY29uc3Qgc3VmZml4ID0gW107XG4gICAgY29uc3QgY29tbWFuZCA9IFtcbiAgICAgICAgYC0tcHJldHR5PWZvcm1hdDoke3BhcnNlX2xpc3RfbG9nX3N1bW1hcnlfMS5TVEFSVF9CT1VOREFSWX0ke2Zvcm1hdFN0cn0ke3BhcnNlX2xpc3RfbG9nX3N1bW1hcnlfMS5DT01NSVRfQk9VTkRBUll9YCxcbiAgICAgICAgLi4uY3VzdG9tQXJncyxcbiAgICBdO1xuICAgIGNvbnN0IG1heENvdW50ID0gb3B0Lm4gfHwgb3B0WydtYXgtY291bnQnXSB8fCBvcHQubWF4Q291bnQ7XG4gICAgaWYgKG1heENvdW50KSB7XG4gICAgICAgIGNvbW1hbmQucHVzaChgLS1tYXgtY291bnQ9JHttYXhDb3VudH1gKTtcbiAgICB9XG4gICAgaWYgKG9wdC5mcm9tICYmIG9wdC50bykge1xuICAgICAgICBjb25zdCByYW5nZU9wZXJhdG9yID0gKG9wdC5zeW1tZXRyaWMgIT09IGZhbHNlKSA/ICcuLi4nIDogJy4uJztcbiAgICAgICAgc3VmZml4LnB1c2goYCR7b3B0LmZyb219JHtyYW5nZU9wZXJhdG9yfSR7b3B0LnRvfWApO1xuICAgIH1cbiAgICBpZiAob3B0LmZpbGUpIHtcbiAgICAgICAgc3VmZml4LnB1c2goJy0tZm9sbG93Jywgb3B0LmZpbGUpO1xuICAgIH1cbiAgICB1dGlsc18xLmFwcGVuZFRhc2tPcHRpb25zKHVzZXJPcHRpb25zKG9wdCksIGNvbW1hbmQpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGZpZWxkcyxcbiAgICAgICAgc3BsaXR0ZXIsXG4gICAgICAgIGNvbW1hbmRzOiBbXG4gICAgICAgICAgICAuLi5jb21tYW5kLFxuICAgICAgICAgICAgLi4uc3VmZml4LFxuICAgICAgICBdLFxuICAgIH07XG59XG5leHBvcnRzLnBhcnNlTG9nT3B0aW9ucyA9IHBhcnNlTG9nT3B0aW9ucztcbmZ1bmN0aW9uIGxvZ1Rhc2soc3BsaXR0ZXIsIGZpZWxkcywgY3VzdG9tQXJncykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzOiBbJ2xvZycsIC4uLmN1c3RvbUFyZ3NdLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcjogcGFyc2VfbGlzdF9sb2dfc3VtbWFyeV8xLmNyZWF0ZUxpc3RMb2dTdW1tYXJ5UGFyc2VyKHNwbGl0dGVyLCBmaWVsZHMpLFxuICAgIH07XG59XG5leHBvcnRzLmxvZ1Rhc2sgPSBsb2dUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG9nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NZXJnZVN1bW1hcnlEZXRhaWwgPSBleHBvcnRzLk1lcmdlU3VtbWFyeUNvbmZsaWN0ID0gdm9pZCAwO1xuY2xhc3MgTWVyZ2VTdW1tYXJ5Q29uZmxpY3Qge1xuICAgIGNvbnN0cnVjdG9yKHJlYXNvbiwgZmlsZSA9IG51bGwsIG1ldGEpIHtcbiAgICAgICAgdGhpcy5yZWFzb24gPSByZWFzb247XG4gICAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgICAgIHRoaXMubWV0YSA9IG1ldGE7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5maWxlfToke3RoaXMucmVhc29ufWA7XG4gICAgfVxufVxuZXhwb3J0cy5NZXJnZVN1bW1hcnlDb25mbGljdCA9IE1lcmdlU3VtbWFyeUNvbmZsaWN0O1xuY2xhc3MgTWVyZ2VTdW1tYXJ5RGV0YWlsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb25mbGljdHMgPSBbXTtcbiAgICAgICAgdGhpcy5tZXJnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSAnc3VjY2Vzcyc7XG4gICAgfVxuICAgIGdldCBmYWlsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZsaWN0cy5sZW5ndGggPiAwO1xuICAgIH1cbiAgICBnZXQgcmVhc29uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQ7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5jb25mbGljdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gYENPTkZMSUNUUzogJHt0aGlzLmNvbmZsaWN0cy5qb2luKCcsICcpfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdPSyc7XG4gICAgfVxufVxuZXhwb3J0cy5NZXJnZVN1bW1hcnlEZXRhaWwgPSBNZXJnZVN1bW1hcnlEZXRhaWw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1NZXJnZVN1bW1hcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlB1bGxTdW1tYXJ5ID0gdm9pZCAwO1xuY2xhc3MgUHVsbFN1bW1hcnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJlbW90ZU1lc3NhZ2VzID0ge1xuICAgICAgICAgICAgYWxsOiBbXSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gW107XG4gICAgICAgIHRoaXMuZGVsZXRlZCA9IFtdO1xuICAgICAgICB0aGlzLmZpbGVzID0gW107XG4gICAgICAgIHRoaXMuZGVsZXRpb25zID0ge307XG4gICAgICAgIHRoaXMuaW5zZXJ0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLnN1bW1hcnkgPSB7XG4gICAgICAgICAgICBjaGFuZ2VzOiAwLFxuICAgICAgICAgICAgZGVsZXRpb25zOiAwLFxuICAgICAgICAgICAgaW5zZXJ0aW9uczogMCxcbiAgICAgICAgfTtcbiAgICB9XG59XG5leHBvcnRzLlB1bGxTdW1tYXJ5ID0gUHVsbFN1bW1hcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1QdWxsU3VtbWFyeS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGFyc2VQdWxsUmVzdWx0ID0gZXhwb3J0cy5wYXJzZVB1bGxEZXRhaWwgPSB2b2lkIDA7XG5jb25zdCBQdWxsU3VtbWFyeV8xID0gcmVxdWlyZShcIi4uL3Jlc3BvbnNlcy9QdWxsU3VtbWFyeVwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBwYXJzZV9yZW1vdGVfbWVzc2FnZXNfMSA9IHJlcXVpcmUoXCIuL3BhcnNlLXJlbW90ZS1tZXNzYWdlc1wiKTtcbmNvbnN0IEZJTEVfVVBEQVRFX1JFR0VYID0gL15cXHMqKC4rPylcXHMrXFx8XFxzK1xcZCtcXHMqKFxcKyopKC0qKS87XG5jb25zdCBTVU1NQVJZX1JFR0VYID0gLyhcXGQrKVxcRCsoKFxcZCspXFxEK1xcKFxcK1xcKSk/KFxcRCsoXFxkKylcXEQrXFwoLVxcKSk/LztcbmNvbnN0IEFDVElPTl9SRUdFWCA9IC9eKGNyZWF0ZXxkZWxldGUpIG1vZGUgXFxkKyAoLispLztcbmNvbnN0IHBhcnNlcnMgPSBbXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcihGSUxFX1VQREFURV9SRUdFWCwgKHJlc3VsdCwgW2ZpbGUsIGluc2VydGlvbnMsIGRlbGV0aW9uc10pID0+IHtcbiAgICAgICAgcmVzdWx0LmZpbGVzLnB1c2goZmlsZSk7XG4gICAgICAgIGlmIChpbnNlcnRpb25zKSB7XG4gICAgICAgICAgICByZXN1bHQuaW5zZXJ0aW9uc1tmaWxlXSA9IGluc2VydGlvbnMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWxldGlvbnMpIHtcbiAgICAgICAgICAgIHJlc3VsdC5kZWxldGlvbnNbZmlsZV0gPSBkZWxldGlvbnMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcihTVU1NQVJZX1JFR0VYLCAocmVzdWx0LCBbY2hhbmdlcywgLCBpbnNlcnRpb25zLCAsIGRlbGV0aW9uc10pID0+IHtcbiAgICAgICAgaWYgKGluc2VydGlvbnMgIT09IHVuZGVmaW5lZCB8fCBkZWxldGlvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVzdWx0LnN1bW1hcnkuY2hhbmdlcyA9ICtjaGFuZ2VzIHx8IDA7XG4gICAgICAgICAgICByZXN1bHQuc3VtbWFyeS5pbnNlcnRpb25zID0gK2luc2VydGlvbnMgfHwgMDtcbiAgICAgICAgICAgIHJlc3VsdC5zdW1tYXJ5LmRlbGV0aW9ucyA9ICtkZWxldGlvbnMgfHwgMDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKEFDVElPTl9SRUdFWCwgKHJlc3VsdCwgW2FjdGlvbiwgZmlsZV0pID0+IHtcbiAgICAgICAgdXRpbHNfMS5hcHBlbmQocmVzdWx0LmZpbGVzLCBmaWxlKTtcbiAgICAgICAgdXRpbHNfMS5hcHBlbmQoKGFjdGlvbiA9PT0gJ2NyZWF0ZScpID8gcmVzdWx0LmNyZWF0ZWQgOiByZXN1bHQuZGVsZXRlZCwgZmlsZSk7XG4gICAgfSksXG5dO1xuY29uc3QgcGFyc2VQdWxsRGV0YWlsID0gKHN0ZE91dCwgc3RkRXJyKSA9PiB7XG4gICAgcmV0dXJuIHV0aWxzXzEucGFyc2VTdHJpbmdSZXNwb25zZShuZXcgUHVsbFN1bW1hcnlfMS5QdWxsU3VtbWFyeSgpLCBwYXJzZXJzLCBzdGRPdXQsIHN0ZEVycik7XG59O1xuZXhwb3J0cy5wYXJzZVB1bGxEZXRhaWwgPSBwYXJzZVB1bGxEZXRhaWw7XG5jb25zdCBwYXJzZVB1bGxSZXN1bHQgPSAoc3RkT3V0LCBzdGRFcnIpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgUHVsbFN1bW1hcnlfMS5QdWxsU3VtbWFyeSgpLCBleHBvcnRzLnBhcnNlUHVsbERldGFpbChzdGRPdXQsIHN0ZEVyciksIHBhcnNlX3JlbW90ZV9tZXNzYWdlc18xLnBhcnNlUmVtb3RlTWVzc2FnZXMoc3RkT3V0LCBzdGRFcnIpKTtcbn07XG5leHBvcnRzLnBhcnNlUHVsbFJlc3VsdCA9IHBhcnNlUHVsbFJlc3VsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXB1bGwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlTWVyZ2VEZXRhaWwgPSBleHBvcnRzLnBhcnNlTWVyZ2VSZXN1bHQgPSB2b2lkIDA7XG5jb25zdCBNZXJnZVN1bW1hcnlfMSA9IHJlcXVpcmUoXCIuLi9yZXNwb25zZXMvTWVyZ2VTdW1tYXJ5XCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IHBhcnNlX3B1bGxfMSA9IHJlcXVpcmUoXCIuL3BhcnNlLXB1bGxcIik7XG5jb25zdCBwYXJzZXJzID0gW1xuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL15BdXRvLW1lcmdpbmdcXHMrKC4rKSQvLCAoc3VtbWFyeSwgW2F1dG9NZXJnZV0pID0+IHtcbiAgICAgICAgc3VtbWFyeS5tZXJnZXMucHVzaChhdXRvTWVyZ2UpO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL15DT05GTElDVFxccytcXCgoLispXFwpOiBNZXJnZSBjb25mbGljdCBpbiAoLispJC8sIChzdW1tYXJ5LCBbcmVhc29uLCBmaWxlXSkgPT4ge1xuICAgICAgICBzdW1tYXJ5LmNvbmZsaWN0cy5wdXNoKG5ldyBNZXJnZVN1bW1hcnlfMS5NZXJnZVN1bW1hcnlDb25mbGljdChyZWFzb24sIGZpbGUpKTtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9eQ09ORkxJQ1RcXHMrXFwoKC4rXFwvZGVsZXRlKVxcKTogKC4rKSBkZWxldGVkIGluICguKykgYW5kLywgKHN1bW1hcnksIFtyZWFzb24sIGZpbGUsIGRlbGV0ZVJlZl0pID0+IHtcbiAgICAgICAgc3VtbWFyeS5jb25mbGljdHMucHVzaChuZXcgTWVyZ2VTdW1tYXJ5XzEuTWVyZ2VTdW1tYXJ5Q29uZmxpY3QocmVhc29uLCBmaWxlLCB7IGRlbGV0ZVJlZiB9KSk7XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvXkNPTkZMSUNUXFxzK1xcKCguKylcXCk6LywgKHN1bW1hcnksIFtyZWFzb25dKSA9PiB7XG4gICAgICAgIHN1bW1hcnkuY29uZmxpY3RzLnB1c2gobmV3IE1lcmdlU3VtbWFyeV8xLk1lcmdlU3VtbWFyeUNvbmZsaWN0KHJlYXNvbiwgbnVsbCkpO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL15BdXRvbWF0aWMgbWVyZ2UgZmFpbGVkO1xccysoLispJC8sIChzdW1tYXJ5LCBbcmVzdWx0XSkgPT4ge1xuICAgICAgICBzdW1tYXJ5LnJlc3VsdCA9IHJlc3VsdDtcbiAgICB9KSxcbl07XG4vKipcbiAqIFBhcnNlIHRoZSBjb21wbGV0ZSByZXNwb25zZSBmcm9tIGBnaXQubWVyZ2VgXG4gKi9cbmNvbnN0IHBhcnNlTWVyZ2VSZXN1bHQgPSAoc3RkT3V0LCBzdGRFcnIpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihleHBvcnRzLnBhcnNlTWVyZ2VEZXRhaWwoc3RkT3V0LCBzdGRFcnIpLCBwYXJzZV9wdWxsXzEucGFyc2VQdWxsUmVzdWx0KHN0ZE91dCwgc3RkRXJyKSk7XG59O1xuZXhwb3J0cy5wYXJzZU1lcmdlUmVzdWx0ID0gcGFyc2VNZXJnZVJlc3VsdDtcbi8qKlxuICogUGFyc2UgdGhlIG1lcmdlIHNwZWNpZmljIGRldGFpbCAoaWU6IG5vdCB0aGUgY29udGVudCBhbHNvIGF2YWlsYWJsZSBpbiB0aGUgcHVsbCBkZXRhaWwpIGZyb20gYGdpdC5tbmVyZ2VgXG4gKiBAcGFyYW0gc3RkT3V0XG4gKi9cbmNvbnN0IHBhcnNlTWVyZ2VEZXRhaWwgPSAoc3RkT3V0KSA9PiB7XG4gICAgcmV0dXJuIHV0aWxzXzEucGFyc2VTdHJpbmdSZXNwb25zZShuZXcgTWVyZ2VTdW1tYXJ5XzEuTWVyZ2VTdW1tYXJ5RGV0YWlsKCksIHBhcnNlcnMsIHN0ZE91dCk7XG59O1xuZXhwb3J0cy5wYXJzZU1lcmdlRGV0YWlsID0gcGFyc2VNZXJnZURldGFpbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLW1lcmdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5tZXJnZVRhc2sgPSB2b2lkIDA7XG5jb25zdCBnaXRfcmVzcG9uc2VfZXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvcnMvZ2l0LXJlc3BvbnNlLWVycm9yXCIpO1xuY29uc3QgcGFyc2VfbWVyZ2VfMSA9IHJlcXVpcmUoXCIuLi9wYXJzZXJzL3BhcnNlLW1lcmdlXCIpO1xuY29uc3QgdGFza18xID0gcmVxdWlyZShcIi4vdGFza1wiKTtcbmZ1bmN0aW9uIG1lcmdlVGFzayhjdXN0b21BcmdzKSB7XG4gICAgaWYgKCFjdXN0b21BcmdzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdGFza18xLmNvbmZpZ3VyYXRpb25FcnJvclRhc2soJ0dpdC5tZXJnZSByZXF1aXJlcyBhdCBsZWFzdCBvbmUgb3B0aW9uJyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzOiBbJ21lcmdlJywgLi4uY3VzdG9tQXJnc10sXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyKHN0ZE91dCwgc3RkRXJyKSB7XG4gICAgICAgICAgICBjb25zdCBtZXJnZSA9IHBhcnNlX21lcmdlXzEucGFyc2VNZXJnZVJlc3VsdChzdGRPdXQsIHN0ZEVycik7XG4gICAgICAgICAgICBpZiAobWVyZ2UuZmFpbGVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGdpdF9yZXNwb25zZV9lcnJvcl8xLkdpdFJlc3BvbnNlRXJyb3IobWVyZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydHMubWVyZ2VUYXNrID0gbWVyZ2VUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWVyZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlTW92ZVJlc3VsdCA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBwYXJzZXJzID0gW1xuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL15SZW5hbWluZyAoLispIHRvICguKykkLywgKHJlc3VsdCwgW2Zyb20sIHRvXSkgPT4ge1xuICAgICAgICByZXN1bHQubW92ZXMucHVzaCh7IGZyb20sIHRvIH0pO1xuICAgIH0pLFxuXTtcbmZ1bmN0aW9uIHBhcnNlTW92ZVJlc3VsdChzdGRPdXQpIHtcbiAgICByZXR1cm4gdXRpbHNfMS5wYXJzZVN0cmluZ1Jlc3BvbnNlKHsgbW92ZXM6IFtdIH0sIHBhcnNlcnMsIHN0ZE91dCk7XG59XG5leHBvcnRzLnBhcnNlTW92ZVJlc3VsdCA9IHBhcnNlTW92ZVJlc3VsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLW1vdmUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm1vdmVUYXNrID0gdm9pZCAwO1xuY29uc3QgcGFyc2VfbW92ZV8xID0gcmVxdWlyZShcIi4uL3BhcnNlcnMvcGFyc2UtbW92ZVwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5mdW5jdGlvbiBtb3ZlVGFzayhmcm9tLCB0bykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzOiBbJ212JywgJy12JywgLi4udXRpbHNfMS5hc0FycmF5KGZyb20pLCB0b10sXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyOiBwYXJzZV9tb3ZlXzEucGFyc2VNb3ZlUmVzdWx0LFxuICAgIH07XG59XG5leHBvcnRzLm1vdmVUYXNrID0gbW92ZVRhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb3ZlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wdWxsVGFzayA9IHZvaWQgMDtcbmNvbnN0IHBhcnNlX3B1bGxfMSA9IHJlcXVpcmUoXCIuLi9wYXJzZXJzL3BhcnNlLXB1bGxcIik7XG5mdW5jdGlvbiBwdWxsVGFzayhyZW1vdGUsIGJyYW5jaCwgY3VzdG9tQXJncykge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWydwdWxsJywgLi4uY3VzdG9tQXJnc107XG4gICAgaWYgKHJlbW90ZSAmJiBicmFuY2gpIHtcbiAgICAgICAgY29tbWFuZHMuc3BsaWNlKDEsIDAsIHJlbW90ZSwgYnJhbmNoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyKHN0ZE91dCwgc3RkRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VfcHVsbF8xLnBhcnNlUHVsbFJlc3VsdChzdGRPdXQsIHN0ZEVycik7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5wdWxsVGFzayA9IHB1bGxUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHVsbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGFyc2VHZXRSZW1vdGVzVmVyYm9zZSA9IGV4cG9ydHMucGFyc2VHZXRSZW1vdGVzID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmZ1bmN0aW9uIHBhcnNlR2V0UmVtb3Rlcyh0ZXh0KSB7XG4gICAgY29uc3QgcmVtb3RlcyA9IHt9O1xuICAgIGZvckVhY2godGV4dCwgKFtuYW1lXSkgPT4gcmVtb3Rlc1tuYW1lXSA9IHsgbmFtZSB9KTtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhyZW1vdGVzKTtcbn1cbmV4cG9ydHMucGFyc2VHZXRSZW1vdGVzID0gcGFyc2VHZXRSZW1vdGVzO1xuZnVuY3Rpb24gcGFyc2VHZXRSZW1vdGVzVmVyYm9zZSh0ZXh0KSB7XG4gICAgY29uc3QgcmVtb3RlcyA9IHt9O1xuICAgIGZvckVhY2godGV4dCwgKFtuYW1lLCB1cmwsIHB1cnBvc2VdKSA9PiB7XG4gICAgICAgIGlmICghcmVtb3Rlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgcmVtb3Rlc1tuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIHJlZnM6IHsgZmV0Y2g6ICcnLCBwdXNoOiAnJyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHVycG9zZSAmJiB1cmwpIHtcbiAgICAgICAgICAgIHJlbW90ZXNbbmFtZV0ucmVmc1twdXJwb3NlLnJlcGxhY2UoL1teYS16XS9nLCAnJyldID0gdXJsO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMocmVtb3Rlcyk7XG59XG5leHBvcnRzLnBhcnNlR2V0UmVtb3Rlc1ZlcmJvc2UgPSBwYXJzZUdldFJlbW90ZXNWZXJib3NlO1xuZnVuY3Rpb24gZm9yRWFjaCh0ZXh0LCBoYW5kbGVyKSB7XG4gICAgdXRpbHNfMS5mb3JFYWNoTGluZVdpdGhDb250ZW50KHRleHQsIChsaW5lKSA9PiBoYW5kbGVyKGxpbmUuc3BsaXQoL1xccysvKSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9R2V0UmVtb3RlU3VtbWFyeS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVtb3ZlUmVtb3RlVGFzayA9IGV4cG9ydHMucmVtb3RlVGFzayA9IGV4cG9ydHMubGlzdFJlbW90ZXNUYXNrID0gZXhwb3J0cy5nZXRSZW1vdGVzVGFzayA9IGV4cG9ydHMuYWRkUmVtb3RlVGFzayA9IHZvaWQgMDtcbmNvbnN0IEdldFJlbW90ZVN1bW1hcnlfMSA9IHJlcXVpcmUoXCIuLi9yZXNwb25zZXMvR2V0UmVtb3RlU3VtbWFyeVwiKTtcbmNvbnN0IHRhc2tfMSA9IHJlcXVpcmUoXCIuL3Rhc2tcIik7XG5mdW5jdGlvbiBhZGRSZW1vdGVUYXNrKHJlbW90ZU5hbWUsIHJlbW90ZVJlcG8sIGN1c3RvbUFyZ3MgPSBbXSkge1xuICAgIHJldHVybiB0YXNrXzEuc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhbJ3JlbW90ZScsICdhZGQnLCAuLi5jdXN0b21BcmdzLCByZW1vdGVOYW1lLCByZW1vdGVSZXBvXSk7XG59XG5leHBvcnRzLmFkZFJlbW90ZVRhc2sgPSBhZGRSZW1vdGVUYXNrO1xuZnVuY3Rpb24gZ2V0UmVtb3Rlc1Rhc2sodmVyYm9zZSkge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWydyZW1vdGUnXTtcbiAgICBpZiAodmVyYm9zZSkge1xuICAgICAgICBjb21tYW5kcy5wdXNoKCctdicpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kcyxcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBwYXJzZXI6IHZlcmJvc2UgPyBHZXRSZW1vdGVTdW1tYXJ5XzEucGFyc2VHZXRSZW1vdGVzVmVyYm9zZSA6IEdldFJlbW90ZVN1bW1hcnlfMS5wYXJzZUdldFJlbW90ZXMsXG4gICAgfTtcbn1cbmV4cG9ydHMuZ2V0UmVtb3Rlc1Rhc2sgPSBnZXRSZW1vdGVzVGFzaztcbmZ1bmN0aW9uIGxpc3RSZW1vdGVzVGFzayhjdXN0b21BcmdzID0gW10pIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsuLi5jdXN0b21BcmdzXTtcbiAgICBpZiAoY29tbWFuZHNbMF0gIT09ICdscy1yZW1vdGUnKSB7XG4gICAgICAgIGNvbW1hbmRzLnVuc2hpZnQoJ2xzLXJlbW90ZScpO1xuICAgIH1cbiAgICByZXR1cm4gdGFza18xLnN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZHMpO1xufVxuZXhwb3J0cy5saXN0UmVtb3Rlc1Rhc2sgPSBsaXN0UmVtb3Rlc1Rhc2s7XG5mdW5jdGlvbiByZW1vdGVUYXNrKGN1c3RvbUFyZ3MgPSBbXSkge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWy4uLmN1c3RvbUFyZ3NdO1xuICAgIGlmIChjb21tYW5kc1swXSAhPT0gJ3JlbW90ZScpIHtcbiAgICAgICAgY29tbWFuZHMudW5zaGlmdCgncmVtb3RlJyk7XG4gICAgfVxuICAgIHJldHVybiB0YXNrXzEuc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhjb21tYW5kcyk7XG59XG5leHBvcnRzLnJlbW90ZVRhc2sgPSByZW1vdGVUYXNrO1xuZnVuY3Rpb24gcmVtb3ZlUmVtb3RlVGFzayhyZW1vdGVOYW1lKSB7XG4gICAgcmV0dXJuIHRhc2tfMS5zdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKFsncmVtb3RlJywgJ3JlbW92ZScsIHJlbW90ZU5hbWVdKTtcbn1cbmV4cG9ydHMucmVtb3ZlUmVtb3RlVGFzayA9IHJlbW92ZVJlbW90ZVRhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZW1vdGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0YXNoTGlzdFRhc2sgPSB2b2lkIDA7XG5jb25zdCBwYXJzZV9saXN0X2xvZ19zdW1tYXJ5XzEgPSByZXF1aXJlKFwiLi4vcGFyc2Vycy9wYXJzZS1saXN0LWxvZy1zdW1tYXJ5XCIpO1xuY29uc3QgbG9nXzEgPSByZXF1aXJlKFwiLi9sb2dcIik7XG5mdW5jdGlvbiBzdGFzaExpc3RUYXNrKG9wdCA9IHt9LCBjdXN0b21BcmdzKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGxvZ18xLnBhcnNlTG9nT3B0aW9ucyhvcHQpO1xuICAgIGNvbnN0IHBhcnNlciA9IHBhcnNlX2xpc3RfbG9nX3N1bW1hcnlfMS5jcmVhdGVMaXN0TG9nU3VtbWFyeVBhcnNlcihvcHRpb25zLnNwbGl0dGVyLCBvcHRpb25zLmZpZWxkcyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHM6IFsnc3Rhc2gnLCAnbGlzdCcsIC4uLm9wdGlvbnMuY29tbWFuZHMsIC4uLmN1c3RvbUFyZ3NdLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcixcbiAgICB9O1xufVxuZXhwb3J0cy5zdGFzaExpc3RUYXNrID0gc3Rhc2hMaXN0VGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0YXNoLWxpc3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkZpbGVTdGF0dXNTdW1tYXJ5ID0gZXhwb3J0cy5mcm9tUGF0aFJlZ2V4ID0gdm9pZCAwO1xuZXhwb3J0cy5mcm9tUGF0aFJlZ2V4ID0gL14oLispIC0+ICguKykkLztcbmNsYXNzIEZpbGVTdGF0dXNTdW1tYXJ5IHtcbiAgICBjb25zdHJ1Y3RvcihwYXRoLCBpbmRleCwgd29ya2luZ19kaXIpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLndvcmtpbmdfZGlyID0gd29ya2luZ19kaXI7XG4gICAgICAgIGlmICgnUicgPT09IChpbmRleCArIHdvcmtpbmdfZGlyKSkge1xuICAgICAgICAgICAgY29uc3QgZGV0YWlsID0gZXhwb3J0cy5mcm9tUGF0aFJlZ2V4LmV4ZWMocGF0aCkgfHwgW251bGwsIHBhdGgsIHBhdGhdO1xuICAgICAgICAgICAgdGhpcy5mcm9tID0gZGV0YWlsWzFdIHx8ICcnO1xuICAgICAgICAgICAgdGhpcy5wYXRoID0gZGV0YWlsWzJdIHx8ICcnO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5GaWxlU3RhdHVzU3VtbWFyeSA9IEZpbGVTdGF0dXNTdW1tYXJ5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RmlsZVN0YXR1c1N1bW1hcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlU3RhdHVzU3VtbWFyeSA9IGV4cG9ydHMuU3RhdHVzU3VtbWFyeSA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBGaWxlU3RhdHVzU3VtbWFyeV8xID0gcmVxdWlyZShcIi4vRmlsZVN0YXR1c1N1bW1hcnlcIik7XG4vKipcbiAqIFRoZSBTdGF0dXNTdW1tYXJ5IGlzIHJldHVybmVkIGFzIGEgcmVzcG9uc2UgdG8gZ2V0dGluZyBgZ2l0KCkuc3RhdHVzKClgXG4gKi9cbmNsYXNzIFN0YXR1c1N1bW1hcnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm5vdF9hZGRlZCA9IFtdO1xuICAgICAgICB0aGlzLmNvbmZsaWN0ZWQgPSBbXTtcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gW107XG4gICAgICAgIHRoaXMuZGVsZXRlZCA9IFtdO1xuICAgICAgICB0aGlzLm1vZGlmaWVkID0gW107XG4gICAgICAgIHRoaXMucmVuYW1lZCA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIGZpbGVzIHJlcHJlc2VudGVkIGFzIGFuIGFycmF5IG9mIG9iamVjdHMgY29udGFpbmluZyB0aGUgYHBhdGhgIGFuZCBzdGF0dXMgaW4gYGluZGV4YCBhbmRcbiAgICAgICAgICogaW4gdGhlIGB3b3JraW5nX2RpcmAuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZpbGVzID0gW107XG4gICAgICAgIHRoaXMuc3RhZ2VkID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOdW1iZXIgb2YgY29tbWl0cyBhaGVhZCBvZiB0aGUgdHJhY2tlZCBicmFuY2hcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYWhlYWQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICpOdW1iZXIgb2YgY29tbWl0cyBiZWhpbmQgdGhlIHRyYWNrZWQgYnJhbmNoXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmJlaGluZCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOYW1lIG9mIHRoZSBjdXJyZW50IGJyYW5jaFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5hbWUgb2YgdGhlIGJyYW5jaCBiZWluZyB0cmFja2VkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRyYWNraW5nID0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIHRoaXMgU3RhdHVzU3VtbWFyeSByZXByZXNlbnRzIGEgY2xlYW4gd29ya2luZyBicmFuY2guXG4gICAgICovXG4gICAgaXNDbGVhbigpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmZpbGVzLmxlbmd0aDtcbiAgICB9XG59XG5leHBvcnRzLlN0YXR1c1N1bW1hcnkgPSBTdGF0dXNTdW1tYXJ5O1xudmFyIFBvcmNlbGFpbkZpbGVTdGF0dXM7XG4oZnVuY3Rpb24gKFBvcmNlbGFpbkZpbGVTdGF0dXMpIHtcbiAgICBQb3JjZWxhaW5GaWxlU3RhdHVzW1wiQURERURcIl0gPSBcIkFcIjtcbiAgICBQb3JjZWxhaW5GaWxlU3RhdHVzW1wiREVMRVRFRFwiXSA9IFwiRFwiO1xuICAgIFBvcmNlbGFpbkZpbGVTdGF0dXNbXCJNT0RJRklFRFwiXSA9IFwiTVwiO1xuICAgIFBvcmNlbGFpbkZpbGVTdGF0dXNbXCJSRU5BTUVEXCJdID0gXCJSXCI7XG4gICAgUG9yY2VsYWluRmlsZVN0YXR1c1tcIkNPUElFRFwiXSA9IFwiQ1wiO1xuICAgIFBvcmNlbGFpbkZpbGVTdGF0dXNbXCJVTk1FUkdFRFwiXSA9IFwiVVwiO1xuICAgIFBvcmNlbGFpbkZpbGVTdGF0dXNbXCJVTlRSQUNLRURcIl0gPSBcIj9cIjtcbiAgICBQb3JjZWxhaW5GaWxlU3RhdHVzW1wiSUdOT1JFRFwiXSA9IFwiIVwiO1xuICAgIFBvcmNlbGFpbkZpbGVTdGF0dXNbXCJOT05FXCJdID0gXCIgXCI7XG59KShQb3JjZWxhaW5GaWxlU3RhdHVzIHx8IChQb3JjZWxhaW5GaWxlU3RhdHVzID0ge30pKTtcbmZ1bmN0aW9uIHJlbmFtZWRGaWxlKGxpbmUpIHtcbiAgICBjb25zdCBkZXRhaWwgPSAvXiguKykgLT4gKC4rKSQvLmV4ZWMobGluZSk7XG4gICAgaWYgKCFkZXRhaWwpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZyb206IGxpbmUsIHRvOiBsaW5lXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGZyb206IFN0cmluZyhkZXRhaWxbMV0pLFxuICAgICAgICB0bzogU3RyaW5nKGRldGFpbFsyXSksXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHBhcnNlcihpbmRleFgsIGluZGV4WSwgaGFuZGxlcikge1xuICAgIHJldHVybiBbYCR7aW5kZXhYfSR7aW5kZXhZfWAsIGhhbmRsZXJdO1xufVxuZnVuY3Rpb24gY29uZmxpY3RzKGluZGV4WCwgLi4uaW5kZXhZKSB7XG4gICAgcmV0dXJuIGluZGV4WS5tYXAoeSA9PiBwYXJzZXIoaW5kZXhYLCB5LCAocmVzdWx0LCBmaWxlKSA9PiB1dGlsc18xLmFwcGVuZChyZXN1bHQuY29uZmxpY3RlZCwgZmlsZSkpKTtcbn1cbmNvbnN0IHBhcnNlcnMgPSBuZXcgTWFwKFtcbiAgICBwYXJzZXIoUG9yY2VsYWluRmlsZVN0YXR1cy5OT05FLCBQb3JjZWxhaW5GaWxlU3RhdHVzLkFEREVELCAocmVzdWx0LCBmaWxlKSA9PiB1dGlsc18xLmFwcGVuZChyZXN1bHQuY3JlYXRlZCwgZmlsZSkpLFxuICAgIHBhcnNlcihQb3JjZWxhaW5GaWxlU3RhdHVzLk5PTkUsIFBvcmNlbGFpbkZpbGVTdGF0dXMuREVMRVRFRCwgKHJlc3VsdCwgZmlsZSkgPT4gdXRpbHNfMS5hcHBlbmQocmVzdWx0LmRlbGV0ZWQsIGZpbGUpKSxcbiAgICBwYXJzZXIoUG9yY2VsYWluRmlsZVN0YXR1cy5OT05FLCBQb3JjZWxhaW5GaWxlU3RhdHVzLk1PRElGSUVELCAocmVzdWx0LCBmaWxlKSA9PiB1dGlsc18xLmFwcGVuZChyZXN1bHQubW9kaWZpZWQsIGZpbGUpKSxcbiAgICBwYXJzZXIoUG9yY2VsYWluRmlsZVN0YXR1cy5BRERFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5OT05FLCAocmVzdWx0LCBmaWxlKSA9PiB1dGlsc18xLmFwcGVuZChyZXN1bHQuY3JlYXRlZCwgZmlsZSkgJiYgdXRpbHNfMS5hcHBlbmQocmVzdWx0LnN0YWdlZCwgZmlsZSkpLFxuICAgIHBhcnNlcihQb3JjZWxhaW5GaWxlU3RhdHVzLkFEREVELCBQb3JjZWxhaW5GaWxlU3RhdHVzLk1PRElGSUVELCAocmVzdWx0LCBmaWxlKSA9PiB1dGlsc18xLmFwcGVuZChyZXN1bHQuY3JlYXRlZCwgZmlsZSkgJiYgdXRpbHNfMS5hcHBlbmQocmVzdWx0LnN0YWdlZCwgZmlsZSkgJiYgdXRpbHNfMS5hcHBlbmQocmVzdWx0Lm1vZGlmaWVkLCBmaWxlKSksXG4gICAgcGFyc2VyKFBvcmNlbGFpbkZpbGVTdGF0dXMuREVMRVRFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5OT05FLCAocmVzdWx0LCBmaWxlKSA9PiB1dGlsc18xLmFwcGVuZChyZXN1bHQuZGVsZXRlZCwgZmlsZSkgJiYgdXRpbHNfMS5hcHBlbmQocmVzdWx0LnN0YWdlZCwgZmlsZSkpLFxuICAgIHBhcnNlcihQb3JjZWxhaW5GaWxlU3RhdHVzLk1PRElGSUVELCBQb3JjZWxhaW5GaWxlU3RhdHVzLk5PTkUsIChyZXN1bHQsIGZpbGUpID0+IHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5tb2RpZmllZCwgZmlsZSkgJiYgdXRpbHNfMS5hcHBlbmQocmVzdWx0LnN0YWdlZCwgZmlsZSkpLFxuICAgIHBhcnNlcihQb3JjZWxhaW5GaWxlU3RhdHVzLk1PRElGSUVELCBQb3JjZWxhaW5GaWxlU3RhdHVzLk1PRElGSUVELCAocmVzdWx0LCBmaWxlKSA9PiB1dGlsc18xLmFwcGVuZChyZXN1bHQubW9kaWZpZWQsIGZpbGUpICYmIHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5zdGFnZWQsIGZpbGUpKSxcbiAgICBwYXJzZXIoUG9yY2VsYWluRmlsZVN0YXR1cy5SRU5BTUVELCBQb3JjZWxhaW5GaWxlU3RhdHVzLk5PTkUsIChyZXN1bHQsIGZpbGUpID0+IHtcbiAgICAgICAgdXRpbHNfMS5hcHBlbmQocmVzdWx0LnJlbmFtZWQsIHJlbmFtZWRGaWxlKGZpbGUpKTtcbiAgICB9KSxcbiAgICBwYXJzZXIoUG9yY2VsYWluRmlsZVN0YXR1cy5SRU5BTUVELCBQb3JjZWxhaW5GaWxlU3RhdHVzLk1PRElGSUVELCAocmVzdWx0LCBmaWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbmFtZWQgPSByZW5hbWVkRmlsZShmaWxlKTtcbiAgICAgICAgdXRpbHNfMS5hcHBlbmQocmVzdWx0LnJlbmFtZWQsIHJlbmFtZWQpO1xuICAgICAgICB1dGlsc18xLmFwcGVuZChyZXN1bHQubW9kaWZpZWQsIHJlbmFtZWQudG8pO1xuICAgIH0pLFxuICAgIHBhcnNlcihQb3JjZWxhaW5GaWxlU3RhdHVzLlVOVFJBQ0tFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5VTlRSQUNLRUQsIChyZXN1bHQsIGZpbGUpID0+IHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5ub3RfYWRkZWQsIGZpbGUpKSxcbiAgICAuLi5jb25mbGljdHMoUG9yY2VsYWluRmlsZVN0YXR1cy5BRERFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5BRERFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5VTk1FUkdFRCksXG4gICAgLi4uY29uZmxpY3RzKFBvcmNlbGFpbkZpbGVTdGF0dXMuREVMRVRFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5ERUxFVEVELCBQb3JjZWxhaW5GaWxlU3RhdHVzLlVOTUVSR0VEKSxcbiAgICAuLi5jb25mbGljdHMoUG9yY2VsYWluRmlsZVN0YXR1cy5VTk1FUkdFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5BRERFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5ERUxFVEVELCBQb3JjZWxhaW5GaWxlU3RhdHVzLlVOTUVSR0VEKSxcbiAgICBbJyMjJywgKHJlc3VsdCwgbGluZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWhlYWRSZWcgPSAvYWhlYWQgKFxcZCspLztcbiAgICAgICAgICAgIGNvbnN0IGJlaGluZFJlZyA9IC9iZWhpbmQgKFxcZCspLztcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRSZWcgPSAvXiguKz8oPz0oPzpcXC57M318XFxzfCQpKSkvO1xuICAgICAgICAgICAgY29uc3QgdHJhY2tpbmdSZWcgPSAvXFwuezN9KFxcUyopLztcbiAgICAgICAgICAgIGNvbnN0IG9uRW1wdHlCcmFuY2hSZWcgPSAvXFxzb25cXHMoW1xcU10rKSQvO1xuICAgICAgICAgICAgbGV0IHJlZ2V4UmVzdWx0O1xuICAgICAgICAgICAgcmVnZXhSZXN1bHQgPSBhaGVhZFJlZy5leGVjKGxpbmUpO1xuICAgICAgICAgICAgcmVzdWx0LmFoZWFkID0gcmVnZXhSZXN1bHQgJiYgK3JlZ2V4UmVzdWx0WzFdIHx8IDA7XG4gICAgICAgICAgICByZWdleFJlc3VsdCA9IGJlaGluZFJlZy5leGVjKGxpbmUpO1xuICAgICAgICAgICAgcmVzdWx0LmJlaGluZCA9IHJlZ2V4UmVzdWx0ICYmICtyZWdleFJlc3VsdFsxXSB8fCAwO1xuICAgICAgICAgICAgcmVnZXhSZXN1bHQgPSBjdXJyZW50UmVnLmV4ZWMobGluZSk7XG4gICAgICAgICAgICByZXN1bHQuY3VycmVudCA9IHJlZ2V4UmVzdWx0ICYmIHJlZ2V4UmVzdWx0WzFdO1xuICAgICAgICAgICAgcmVnZXhSZXN1bHQgPSB0cmFja2luZ1JlZy5leGVjKGxpbmUpO1xuICAgICAgICAgICAgcmVzdWx0LnRyYWNraW5nID0gcmVnZXhSZXN1bHQgJiYgcmVnZXhSZXN1bHRbMV07XG4gICAgICAgICAgICByZWdleFJlc3VsdCA9IG9uRW1wdHlCcmFuY2hSZWcuZXhlYyhsaW5lKTtcbiAgICAgICAgICAgIHJlc3VsdC5jdXJyZW50ID0gcmVnZXhSZXN1bHQgJiYgcmVnZXhSZXN1bHRbMV0gfHwgcmVzdWx0LmN1cnJlbnQ7XG4gICAgICAgIH1dXG5dKTtcbmNvbnN0IHBhcnNlU3RhdHVzU3VtbWFyeSA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgY29uc3QgbGluZXMgPSB0ZXh0LnRyaW0oKS5zcGxpdCgnXFxuJyk7XG4gICAgY29uc3Qgc3RhdHVzID0gbmV3IFN0YXR1c1N1bW1hcnkoKTtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBzcGxpdExpbmUoc3RhdHVzLCBsaW5lc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBzdGF0dXM7XG59O1xuZXhwb3J0cy5wYXJzZVN0YXR1c1N1bW1hcnkgPSBwYXJzZVN0YXR1c1N1bW1hcnk7XG5mdW5jdGlvbiBzcGxpdExpbmUocmVzdWx0LCBsaW5lU3RyKSB7XG4gICAgY29uc3QgdHJpbW1lZCA9IGxpbmVTdHIudHJpbSgpO1xuICAgIHN3aXRjaCAoJyAnKSB7XG4gICAgICAgIGNhc2UgdHJpbW1lZC5jaGFyQXQoMik6XG4gICAgICAgICAgICByZXR1cm4gZGF0YSh0cmltbWVkLmNoYXJBdCgwKSwgdHJpbW1lZC5jaGFyQXQoMSksIHRyaW1tZWQuc3Vic3RyKDMpKTtcbiAgICAgICAgY2FzZSB0cmltbWVkLmNoYXJBdCgxKTpcbiAgICAgICAgICAgIHJldHVybiBkYXRhKFBvcmNlbGFpbkZpbGVTdGF0dXMuTk9ORSwgdHJpbW1lZC5jaGFyQXQoMCksIHRyaW1tZWQuc3Vic3RyKDIpKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGF0YShpbmRleCwgd29ya2luZ0RpciwgcGF0aCkge1xuICAgICAgICBjb25zdCByYXcgPSBgJHtpbmRleH0ke3dvcmtpbmdEaXJ9YDtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHBhcnNlcnMuZ2V0KHJhdyk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKHJlc3VsdCwgcGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJhdyAhPT0gJyMjJykge1xuICAgICAgICAgICAgcmVzdWx0LmZpbGVzLnB1c2gobmV3IEZpbGVTdGF0dXNTdW1tYXJ5XzEuRmlsZVN0YXR1c1N1bW1hcnkocGF0aCwgaW5kZXgsIHdvcmtpbmdEaXIpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN0YXR1c1N1bW1hcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0YXR1c1Rhc2sgPSB2b2lkIDA7XG5jb25zdCBTdGF0dXNTdW1tYXJ5XzEgPSByZXF1aXJlKFwiLi4vcmVzcG9uc2VzL1N0YXR1c1N1bW1hcnlcIik7XG5mdW5jdGlvbiBzdGF0dXNUYXNrKGN1c3RvbUFyZ3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIGNvbW1hbmRzOiBbJ3N0YXR1cycsICctLXBvcmNlbGFpbicsICctYicsICctdScsIC4uLmN1c3RvbUFyZ3NdLFxuICAgICAgICBwYXJzZXIodGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIFN0YXR1c1N1bW1hcnlfMS5wYXJzZVN0YXR1c1N1bW1hcnkodGV4dCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5zdGF0dXNUYXNrID0gc3RhdHVzVGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0YXR1cy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXBkYXRlU3ViTW9kdWxlVGFzayA9IGV4cG9ydHMuc3ViTW9kdWxlVGFzayA9IGV4cG9ydHMuaW5pdFN1Yk1vZHVsZVRhc2sgPSBleHBvcnRzLmFkZFN1Yk1vZHVsZVRhc2sgPSB2b2lkIDA7XG5jb25zdCB0YXNrXzEgPSByZXF1aXJlKFwiLi90YXNrXCIpO1xuZnVuY3Rpb24gYWRkU3ViTW9kdWxlVGFzayhyZXBvLCBwYXRoKSB7XG4gICAgcmV0dXJuIHN1Yk1vZHVsZVRhc2soWydhZGQnLCByZXBvLCBwYXRoXSk7XG59XG5leHBvcnRzLmFkZFN1Yk1vZHVsZVRhc2sgPSBhZGRTdWJNb2R1bGVUYXNrO1xuZnVuY3Rpb24gaW5pdFN1Yk1vZHVsZVRhc2soY3VzdG9tQXJncykge1xuICAgIHJldHVybiBzdWJNb2R1bGVUYXNrKFsnaW5pdCcsIC4uLmN1c3RvbUFyZ3NdKTtcbn1cbmV4cG9ydHMuaW5pdFN1Yk1vZHVsZVRhc2sgPSBpbml0U3ViTW9kdWxlVGFzaztcbmZ1bmN0aW9uIHN1Yk1vZHVsZVRhc2soY3VzdG9tQXJncykge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWy4uLmN1c3RvbUFyZ3NdO1xuICAgIGlmIChjb21tYW5kc1swXSAhPT0gJ3N1Ym1vZHVsZScpIHtcbiAgICAgICAgY29tbWFuZHMudW5zaGlmdCgnc3VibW9kdWxlJyk7XG4gICAgfVxuICAgIHJldHVybiB0YXNrXzEuc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhjb21tYW5kcyk7XG59XG5leHBvcnRzLnN1Yk1vZHVsZVRhc2sgPSBzdWJNb2R1bGVUYXNrO1xuZnVuY3Rpb24gdXBkYXRlU3ViTW9kdWxlVGFzayhjdXN0b21BcmdzKSB7XG4gICAgcmV0dXJuIHN1Yk1vZHVsZVRhc2soWyd1cGRhdGUnLCAuLi5jdXN0b21BcmdzXSk7XG59XG5leHBvcnRzLnVwZGF0ZVN1Yk1vZHVsZVRhc2sgPSB1cGRhdGVTdWJNb2R1bGVUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3ViLW1vZHVsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGFyc2VUYWdMaXN0ID0gZXhwb3J0cy5UYWdMaXN0ID0gdm9pZCAwO1xuY2xhc3MgVGFnTGlzdCB7XG4gICAgY29uc3RydWN0b3IoYWxsLCBsYXRlc3QpIHtcbiAgICAgICAgdGhpcy5hbGwgPSBhbGw7XG4gICAgICAgIHRoaXMubGF0ZXN0ID0gbGF0ZXN0O1xuICAgIH1cbn1cbmV4cG9ydHMuVGFnTGlzdCA9IFRhZ0xpc3Q7XG5jb25zdCBwYXJzZVRhZ0xpc3QgPSBmdW5jdGlvbiAoZGF0YSwgY3VzdG9tU29ydCA9IGZhbHNlKSB7XG4gICAgY29uc3QgdGFncyA9IGRhdGFcbiAgICAgICAgLnNwbGl0KCdcXG4nKVxuICAgICAgICAubWFwKHRyaW1tZWQpXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbik7XG4gICAgaWYgKCFjdXN0b21Tb3J0KSB7XG4gICAgICAgIHRhZ3Muc29ydChmdW5jdGlvbiAodGFnQSwgdGFnQikge1xuICAgICAgICAgICAgY29uc3QgcGFydHNBID0gdGFnQS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgY29uc3QgcGFydHNCID0gdGFnQi5zcGxpdCgnLicpO1xuICAgICAgICAgICAgaWYgKHBhcnRzQS5sZW5ndGggPT09IDEgfHwgcGFydHNCLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzaW5nbGVTb3J0ZWQodG9OdW1iZXIocGFydHNBWzBdKSwgdG9OdW1iZXIocGFydHNCWzBdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IE1hdGgubWF4KHBhcnRzQS5sZW5ndGgsIHBhcnRzQi5sZW5ndGgpOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZiA9IHNvcnRlZCh0b051bWJlcihwYXJ0c0FbaV0pLCB0b051bWJlcihwYXJ0c0JbaV0pKTtcbiAgICAgICAgICAgICAgICBpZiAoZGlmZikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGxhdGVzdCA9IGN1c3RvbVNvcnQgPyB0YWdzWzBdIDogWy4uLnRhZ3NdLnJldmVyc2UoKS5maW5kKCh0YWcpID0+IHRhZy5pbmRleE9mKCcuJykgPj0gMCk7XG4gICAgcmV0dXJuIG5ldyBUYWdMaXN0KHRhZ3MsIGxhdGVzdCk7XG59O1xuZXhwb3J0cy5wYXJzZVRhZ0xpc3QgPSBwYXJzZVRhZ0xpc3Q7XG5mdW5jdGlvbiBzaW5nbGVTb3J0ZWQoYSwgYikge1xuICAgIGNvbnN0IGFJc051bSA9IGlzTmFOKGEpO1xuICAgIGNvbnN0IGJJc051bSA9IGlzTmFOKGIpO1xuICAgIGlmIChhSXNOdW0gIT09IGJJc051bSkge1xuICAgICAgICByZXR1cm4gYUlzTnVtID8gMSA6IC0xO1xuICAgIH1cbiAgICByZXR1cm4gYUlzTnVtID8gc29ydGVkKGEsIGIpIDogMDtcbn1cbmZ1bmN0aW9uIHNvcnRlZChhLCBiKSB7XG4gICAgcmV0dXJuIGEgPT09IGIgPyAwIDogYSA+IGIgPyAxIDogLTE7XG59XG5mdW5jdGlvbiB0cmltbWVkKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0LnRyaW0oKTtcbn1cbmZ1bmN0aW9uIHRvTnVtYmVyKGlucHV0KSB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGlucHV0LnJlcGxhY2UoL15cXEQrL2csICcnKSwgMTApIHx8IDA7XG4gICAgfVxuICAgIHJldHVybiAwO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VGFnTGlzdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuYWRkQW5ub3RhdGVkVGFnVGFzayA9IGV4cG9ydHMuYWRkVGFnVGFzayA9IGV4cG9ydHMudGFnTGlzdFRhc2sgPSB2b2lkIDA7XG5jb25zdCBUYWdMaXN0XzEgPSByZXF1aXJlKFwiLi4vcmVzcG9uc2VzL1RhZ0xpc3RcIik7XG4vKipcbiAqIFRhc2sgdXNlZCBieSBgZ2l0LnRhZ3NgXG4gKi9cbmZ1bmN0aW9uIHRhZ0xpc3RUYXNrKGN1c3RvbUFyZ3MgPSBbXSkge1xuICAgIGNvbnN0IGhhc0N1c3RvbVNvcnQgPSBjdXN0b21BcmdzLnNvbWUoKG9wdGlvbikgPT4gL14tLXNvcnQ9Ly50ZXN0KG9wdGlvbikpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgY29tbWFuZHM6IFsndGFnJywgJy1sJywgLi4uY3VzdG9tQXJnc10sXG4gICAgICAgIHBhcnNlcih0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gVGFnTGlzdF8xLnBhcnNlVGFnTGlzdCh0ZXh0LCBoYXNDdXN0b21Tb3J0KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy50YWdMaXN0VGFzayA9IHRhZ0xpc3RUYXNrO1xuLyoqXG4gKiBUYXNrIHVzZWQgYnkgYGdpdC5hZGRUYWdgXG4gKi9cbmZ1bmN0aW9uIGFkZFRhZ1Rhc2sobmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgY29tbWFuZHM6IFsndGFnJywgbmFtZV0sXG4gICAgICAgIHBhcnNlcigpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWUgfTtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnRzLmFkZFRhZ1Rhc2sgPSBhZGRUYWdUYXNrO1xuLyoqXG4gKiBUYXNrIHVzZWQgYnkgYGdpdC5hZGRUYWdgXG4gKi9cbmZ1bmN0aW9uIGFkZEFubm90YXRlZFRhZ1Rhc2sobmFtZSwgdGFnTWVzc2FnZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgY29tbWFuZHM6IFsndGFnJywgJy1hJywgJy1tJywgdGFnTWVzc2FnZSwgbmFtZV0sXG4gICAgICAgIHBhcnNlcigpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWUgfTtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnRzLmFkZEFubm90YXRlZFRhZ1Rhc2sgPSBhZGRBbm5vdGF0ZWRUYWdUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGFnLmpzLm1hcCIsImNvbnN0IHtHaXRFeGVjdXRvcn0gPSByZXF1aXJlKCcuL2xpYi9ydW5uZXJzL2dpdC1leGVjdXRvcicpO1xuY29uc3Qge1NpbXBsZUdpdEFwaX0gPSByZXF1aXJlKCcuL2xpYi9zaW1wbGUtZ2l0LWFwaScpO1xuXG5jb25zdCB7U2NoZWR1bGVyfSA9IHJlcXVpcmUoJy4vbGliL3J1bm5lcnMvc2NoZWR1bGVyJyk7XG5jb25zdCB7R2l0TG9nZ2VyfSA9IHJlcXVpcmUoJy4vbGliL2dpdC1sb2dnZXInKTtcbmNvbnN0IHthZGhvY0V4ZWNUYXNrLCBjb25maWd1cmF0aW9uRXJyb3JUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL3Rhc2snKTtcbmNvbnN0IHtcbiAgIE5PT1AsXG4gICBhc0FycmF5LFxuICAgZmlsdGVyQXJyYXksXG4gICBmaWx0ZXJQcmltaXRpdmVzLFxuICAgZmlsdGVyU3RyaW5nLFxuICAgZmlsdGVyU3RyaW5nT3JTdHJpbmdBcnJheSxcbiAgIGZpbHRlclR5cGUsXG4gICBmb2xkZXJFeGlzdHMsXG4gICBnZXRUcmFpbGluZ09wdGlvbnMsXG4gICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQsXG4gICB0cmFpbGluZ09wdGlvbnNBcmd1bWVudFxufSA9IHJlcXVpcmUoJy4vbGliL3V0aWxzJyk7XG5jb25zdCB7YXBwbHlQYXRjaFRhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvYXBwbHktcGF0Y2gnKVxuY29uc3Qge2JyYW5jaFRhc2ssIGJyYW5jaExvY2FsVGFzaywgZGVsZXRlQnJhbmNoZXNUYXNrLCBkZWxldGVCcmFuY2hUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL2JyYW5jaCcpO1xuY29uc3Qge2NoZWNrSWdub3JlVGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy9jaGVjay1pZ25vcmUnKTtcbmNvbnN0IHtjaGVja0lzUmVwb1Rhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvY2hlY2staXMtcmVwbycpO1xuY29uc3Qge2Nsb25lVGFzaywgY2xvbmVNaXJyb3JUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL2Nsb25lJyk7XG5jb25zdCB7YWRkQ29uZmlnVGFzaywgbGlzdENvbmZpZ1Rhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvY29uZmlnJyk7XG5jb25zdCB7Y2xlYW5XaXRoT3B0aW9uc1Rhc2ssIGlzQ2xlYW5PcHRpb25zQXJyYXl9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvY2xlYW4nKTtcbmNvbnN0IHtjb21taXRUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL2NvbW1pdCcpO1xuY29uc3Qge2RpZmZTdW1tYXJ5VGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy9kaWZmJyk7XG5jb25zdCB7ZmV0Y2hUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL2ZldGNoJyk7XG5jb25zdCB7aGFzaE9iamVjdFRhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvaGFzaC1vYmplY3QnKTtcbmNvbnN0IHtpbml0VGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy9pbml0Jyk7XG5jb25zdCB7bG9nVGFzaywgcGFyc2VMb2dPcHRpb25zfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL2xvZycpO1xuY29uc3Qge21lcmdlVGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy9tZXJnZScpO1xuY29uc3Qge21vdmVUYXNrfSA9IHJlcXVpcmUoXCIuL2xpYi90YXNrcy9tb3ZlXCIpO1xuY29uc3Qge3B1bGxUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL3B1bGwnKTtcbmNvbnN0IHtwdXNoVGFnc1Rhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvcHVzaCcpO1xuY29uc3Qge2FkZFJlbW90ZVRhc2ssIGdldFJlbW90ZXNUYXNrLCBsaXN0UmVtb3Rlc1Rhc2ssIHJlbW90ZVRhc2ssIHJlbW92ZVJlbW90ZVRhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvcmVtb3RlJyk7XG5jb25zdCB7Z2V0UmVzZXRNb2RlLCByZXNldFRhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvcmVzZXQnKTtcbmNvbnN0IHtzdGFzaExpc3RUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL3N0YXNoLWxpc3QnKTtcbmNvbnN0IHtzdGF0dXNUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL3N0YXR1cycpO1xuY29uc3Qge2FkZFN1Yk1vZHVsZVRhc2ssIGluaXRTdWJNb2R1bGVUYXNrLCBzdWJNb2R1bGVUYXNrLCB1cGRhdGVTdWJNb2R1bGVUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL3N1Yi1tb2R1bGUnKTtcbmNvbnN0IHthZGRBbm5vdGF0ZWRUYWdUYXNrLCBhZGRUYWdUYXNrLCB0YWdMaXN0VGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy90YWcnKTtcbmNvbnN0IHtzdHJhaWdodFRocm91Z2hCdWZmZXJUYXNrLCBzdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL3Rhc2snKTtcblxuZnVuY3Rpb24gR2l0IChvcHRpb25zLCBwbHVnaW5zKSB7XG4gICB0aGlzLl9leGVjdXRvciA9IG5ldyBHaXRFeGVjdXRvcihcbiAgICAgIG9wdGlvbnMuYmluYXJ5LCBvcHRpb25zLmJhc2VEaXIsXG4gICAgICBuZXcgU2NoZWR1bGVyKG9wdGlvbnMubWF4Q29uY3VycmVudFByb2Nlc3NlcyksIHBsdWdpbnMsXG4gICApO1xuICAgdGhpcy5fbG9nZ2VyID0gbmV3IEdpdExvZ2dlcigpO1xufVxuXG4oR2l0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU2ltcGxlR2l0QXBpLnByb3RvdHlwZSkpLmNvbnN0cnVjdG9yID0gR2l0O1xuXG4vKipcbiAqIExvZ2dpbmcgdXRpbGl0eSBmb3IgcHJpbnRpbmcgb3V0IGluZm8gb3IgZXJyb3IgbWVzc2FnZXMgdG8gdGhlIHVzZXJcbiAqIEB0eXBlIHtHaXRMb2dnZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5HaXQucHJvdG90eXBlLl9sb2dnZXIgPSBudWxsO1xuXG4vKipcbiAqIFNldHMgdGhlIHBhdGggdG8gYSBjdXN0b20gZ2l0IGJpbmFyeSwgc2hvdWxkIGVpdGhlciBiZSBgZ2l0YCB3aGVuIHRoZXJlIGlzIGFuIGluc3RhbGxhdGlvbiBvZiBnaXQgYXZhaWxhYmxlIG9uXG4gKiB0aGUgc3lzdGVtIHBhdGgsIG9yIGEgZnVsbHkgcXVhbGlmaWVkIHBhdGggdG8gdGhlIGV4ZWN1dGFibGUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbW1hbmRcbiAqIEByZXR1cm5zIHtHaXR9XG4gKi9cbkdpdC5wcm90b3R5cGUuY3VzdG9tQmluYXJ5ID0gZnVuY3Rpb24gKGNvbW1hbmQpIHtcbiAgIHRoaXMuX2V4ZWN1dG9yLmJpbmFyeSA9IGNvbW1hbmQ7XG4gICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0cyBhbiBlbnZpcm9ubWVudCB2YXJpYWJsZSBmb3IgdGhlIHNwYXduZWQgY2hpbGQgcHJvY2VzcywgZWl0aGVyIHN1cHBseSBib3RoIGEgbmFtZSBhbmQgdmFsdWUgYXMgc3RyaW5ncyBvclxuICogYSBzaW5nbGUgb2JqZWN0IHRvIGVudGlyZWx5IHJlcGxhY2UgdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQgdmFyaWFibGVzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IFt2YWx1ZV1cbiAqIEByZXR1cm5zIHtHaXR9XG4gKi9cbkdpdC5wcm90b3R5cGUuZW52ID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRoaXMuX2V4ZWN1dG9yLmVudiA9IG5hbWU7XG4gICB9IGVsc2Uge1xuICAgICAgKHRoaXMuX2V4ZWN1dG9yLmVudiA9IHRoaXMuX2V4ZWN1dG9yLmVudiB8fCB7fSlbbmFtZV0gPSB2YWx1ZTtcbiAgIH1cblxuICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIHdvcmtpbmcgZGlyZWN0b3J5IG9mIHRoZSBzdWJzZXF1ZW50IGNvbW1hbmRzLlxuICovXG5HaXQucHJvdG90eXBlLmN3ZCA9IGZ1bmN0aW9uICh3b3JraW5nRGlyZWN0b3J5KSB7XG4gICBjb25zdCB0YXNrID0gKHR5cGVvZiB3b3JraW5nRGlyZWN0b3J5ICE9PSAnc3RyaW5nJylcbiAgICAgID8gY29uZmlndXJhdGlvbkVycm9yVGFzaygnR2l0LmN3ZDogd29ya2luZ0RpcmVjdG9yeSBtdXN0IGJlIHN1cHBsaWVkIGFzIGEgc3RyaW5nJylcbiAgICAgIDogYWRob2NFeGVjVGFzaygoKSA9PiB7XG4gICAgICAgICBpZiAoIWZvbGRlckV4aXN0cyh3b3JraW5nRGlyZWN0b3J5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBHaXQuY3dkOiBjYW5ub3QgY2hhbmdlIHRvIG5vbi1kaXJlY3RvcnkgXCIkeyB3b3JraW5nRGlyZWN0b3J5IH1cImApO1xuICAgICAgICAgfVxuXG4gICAgICAgICByZXR1cm4gKHRoaXMuX2V4ZWN1dG9yLmN3ZCA9IHdvcmtpbmdEaXJlY3RvcnkpO1xuICAgICAgfSk7XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKHRhc2ssIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpIHx8IE5PT1ApO1xufTtcblxuLyoqXG4gKiBTZXRzIGEgaGFuZGxlciBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbmV2ZXIgYSBuZXcgY2hpbGQgcHJvY2VzcyBpcyBjcmVhdGVkLCB0aGUgaGFuZGxlciBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZFxuICogd2l0aCB0aGUgbmFtZSBvZiB0aGUgY29tbWFuZCBiZWluZyBydW4gYW5kIHRoZSBzdGRvdXQgJiBzdGRlcnIgc3RyZWFtcyB1c2VkIGJ5IHRoZSBDaGlsZFByb2Nlc3MuXG4gKlxuICogQGV4YW1wbGVcbiAqIHJlcXVpcmUoJ3NpbXBsZS1naXQnKVxuICogICAgLm91dHB1dEhhbmRsZXIoZnVuY3Rpb24gKGNvbW1hbmQsIHN0ZG91dCwgc3RkZXJyKSB7XG4gKiAgICAgICBzdGRvdXQucGlwZShwcm9jZXNzLnN0ZG91dCk7XG4gKiAgICB9KVxuICogICAgLmNoZWNrb3V0KCdodHRwczovL2dpdGh1Yi5jb20vdXNlci9yZXBvLmdpdCcpO1xuICpcbiAqIEBzZWUgaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9jaGlsZF9wcm9jZXNzLmh0bWwjY2hpbGRfcHJvY2Vzc19jbGFzc19jaGlsZHByb2Nlc3NcbiAqIEBzZWUgaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9zdHJlYW0uaHRtbCNzdHJlYW1fY2xhc3Nfc3RyZWFtX3JlYWRhYmxlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvdXRwdXRIYW5kbGVyXG4gKiBAcmV0dXJucyB7R2l0fVxuICovXG5HaXQucHJvdG90eXBlLm91dHB1dEhhbmRsZXIgPSBmdW5jdGlvbiAob3V0cHV0SGFuZGxlcikge1xuICAgdGhpcy5fZXhlY3V0b3Iub3V0cHV0SGFuZGxlciA9IG91dHB1dEhhbmRsZXI7XG4gICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIGdpdCByZXBvXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSBbYmFyZT1mYWxzZV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoYmFyZSwgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBpbml0VGFzayhiYXJlID09PSB0cnVlLCB0aGlzLl9leGVjdXRvci5jd2QsIGdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHN0YXR1cyBvZiB0aGUgbG9jYWwgcmVwb1xuICovXG5HaXQucHJvdG90eXBlLnN0YXR1cyA9IGZ1bmN0aW9uICgpIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3RhdHVzVGFzayhnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIExpc3QgdGhlIHN0YXNoKHMpIG9mIHRoZSBsb2NhbCByZXBvXG4gKi9cbkdpdC5wcm90b3R5cGUuc3Rhc2hMaXN0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3Rhc2hMaXN0VGFzayhcbiAgICAgICAgIHRyYWlsaW5nT3B0aW9uc0FyZ3VtZW50KGFyZ3VtZW50cykgfHwge30sXG4gICAgICAgICBmaWx0ZXJBcnJheShvcHRpb25zKSAmJiBvcHRpb25zIHx8IFtdXG4gICAgICApLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBTdGFzaCB0aGUgbG9jYWwgcmVwb1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLnN0YXNoID0gZnVuY3Rpb24gKG9wdGlvbnMsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhbJ3N0YXNoJywgLi4uZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cyldKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsb25lVGFzayAoYXBpLCB0YXNrLCByZXBvUGF0aCwgbG9jYWxQYXRoKSB7XG4gICBpZiAodHlwZW9mIHJlcG9QYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGNvbmZpZ3VyYXRpb25FcnJvclRhc2soYGdpdC4keyBhcGkgfSgpIHJlcXVpcmVzIGEgc3RyaW5nICdyZXBvUGF0aCdgKTtcbiAgIH1cblxuICAgcmV0dXJuIHRhc2socmVwb1BhdGgsIGZpbHRlclR5cGUobG9jYWxQYXRoLCBmaWx0ZXJTdHJpbmcpLCBnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSk7XG59XG5cblxuLyoqXG4gKiBDbG9uZSBhIGdpdCByZXBvXG4gKi9cbkdpdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGNyZWF0ZUNsb25lVGFzaygnY2xvbmUnLCBjbG9uZVRhc2ssIC4uLmFyZ3VtZW50cyksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIE1pcnJvciBhIGdpdCByZXBvXG4gKi9cbkdpdC5wcm90b3R5cGUubWlycm9yID0gZnVuY3Rpb24gKCkge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBjcmVhdGVDbG9uZVRhc2soJ21pcnJvcicsIGNsb25lTWlycm9yVGFzaywgLi4uYXJndW1lbnRzKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogTW92ZXMgb25lIG9yIG1vcmUgZmlsZXMgdG8gYSBuZXcgZGVzdGluYXRpb24uXG4gKlxuICogQHNlZSBodHRwczovL2dpdC1zY20uY29tL2RvY3MvZ2l0LW12XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGZyb21cbiAqIEBwYXJhbSB7c3RyaW5nfSB0b1xuICovXG5HaXQucHJvdG90eXBlLm12ID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhtb3ZlVGFzayhmcm9tLCB0byksIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpKTtcbn07XG5cbi8qKlxuICogSW50ZXJuYWxseSB1c2VzIHB1bGwgYW5kIHRhZ3MgdG8gZ2V0IHRoZSBsaXN0IG9mIHRhZ3MgdGhlbiBjaGVja3Mgb3V0IHRoZSBsYXRlc3QgdGFnLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLmNoZWNrb3V0TGF0ZXN0VGFnID0gZnVuY3Rpb24gKHRoZW4pIHtcbiAgIHZhciBnaXQgPSB0aGlzO1xuICAgcmV0dXJuIHRoaXMucHVsbChmdW5jdGlvbiAoKSB7XG4gICAgICBnaXQudGFncyhmdW5jdGlvbiAoZXJyLCB0YWdzKSB7XG4gICAgICAgICBnaXQuY2hlY2tvdXQodGFncy5sYXRlc3QsIHRoZW4pO1xuICAgICAgfSk7XG4gICB9KTtcbn07XG5cbi8qKlxuICogQ29tbWl0cyBjaGFuZ2VzIGluIHRoZSBjdXJyZW50IHdvcmtpbmcgZGlyZWN0b3J5IC0gd2hlbiBzcGVjaWZpYyBmaWxlIHBhdGhzIGFyZSBzdXBwbGllZCwgb25seSBjaGFuZ2VzIG9uIHRob3NlXG4gKiBmaWxlcyB3aWxsIGJlIGNvbW1pdHRlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gbWVzc2FnZVxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFtmaWxlc11cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLmNvbW1pdCA9IGZ1bmN0aW9uIChtZXNzYWdlLCBmaWxlcywgb3B0aW9ucywgdGhlbikge1xuICAgY29uc3QgbmV4dCA9IHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpO1xuICAgY29uc3QgbWVzc2FnZXMgPSBbXTtcblxuICAgaWYgKGZpbHRlclN0cmluZ09yU3RyaW5nQXJyYXkobWVzc2FnZSkpIHtcbiAgICAgIG1lc3NhZ2VzLnB1c2goLi4uYXNBcnJheShtZXNzYWdlKSk7XG4gICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdzaW1wbGUtZ2l0IGRlcHJlY2F0aW9uIG5vdGljZTogZ2l0LmNvbW1pdDogcmVxdWlyZXMgdGhlIGNvbW1pdCBtZXNzYWdlIHRvIGJlIHN1cHBsaWVkIGFzIGEgc3RyaW5nL3N0cmluZ1tdLCB0aGlzIHdpbGwgYmUgYW4gZXJyb3IgaW4gdmVyc2lvbiAzJyk7XG4gICB9XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgY29tbWl0VGFzayhcbiAgICAgICAgIG1lc3NhZ2VzLFxuICAgICAgICAgYXNBcnJheShmaWx0ZXJUeXBlKGZpbGVzLCBmaWx0ZXJTdHJpbmdPclN0cmluZ0FycmF5LCBbXSkpLFxuICAgICAgICAgWy4uLmZpbHRlclR5cGUob3B0aW9ucywgZmlsdGVyQXJyYXksIFtdKSwgLi4uZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cywgMCwgdHJ1ZSldXG4gICAgICApLFxuICAgICAgbmV4dFxuICAgKTtcbn07XG5cbi8qKlxuICogUHVsbCB0aGUgdXBkYXRlZCBjb250ZW50cyBvZiB0aGUgY3VycmVudCByZXBvXG4gKi9cbkdpdC5wcm90b3R5cGUucHVsbCA9IGZ1bmN0aW9uIChyZW1vdGUsIGJyYW5jaCwgb3B0aW9ucywgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBwdWxsVGFzayhmaWx0ZXJUeXBlKHJlbW90ZSwgZmlsdGVyU3RyaW5nKSwgZmlsdGVyVHlwZShicmFuY2gsIGZpbHRlclN0cmluZyksIGdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogRmV0Y2ggdGhlIHVwZGF0ZWQgY29udGVudHMgb2YgdGhlIGN1cnJlbnQgcmVwby5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAuZmV0Y2goJ3Vwc3RyZWFtJywgJ21hc3RlcicpIC8vIGZldGNoZXMgZnJvbSBtYXN0ZXIgb24gcmVtb3RlIG5hbWVkIHVwc3RyZWFtXG4gKiAgIC5mZXRjaChmdW5jdGlvbiAoKSB7fSkgLy8gcnVucyBmZXRjaCBhZ2FpbnN0IGRlZmF1bHQgcmVtb3RlIGFuZCBicmFuY2ggYW5kIGNhbGxzIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFtyZW1vdGVdXG4gKiBAcGFyYW0ge3N0cmluZ30gW2JyYW5jaF1cbiAqL1xuR2l0LnByb3RvdHlwZS5mZXRjaCA9IGZ1bmN0aW9uIChyZW1vdGUsIGJyYW5jaCkge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBmZXRjaFRhc2soZmlsdGVyVHlwZShyZW1vdGUsIGZpbHRlclN0cmluZyksIGZpbHRlclR5cGUoYnJhbmNoLCBmaWx0ZXJTdHJpbmcpLCBnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIERpc2FibGVzL2VuYWJsZXMgdGhlIHVzZSBvZiB0aGUgY29uc29sZSBmb3IgcHJpbnRpbmcgd2FybmluZ3MgYW5kIGVycm9ycywgYnkgZGVmYXVsdCBtZXNzYWdlcyBhcmUgbm90IHNob3duIGluXG4gKiBhIHByb2R1Y3Rpb24gZW52aXJvbm1lbnQuXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBzaWxlbmNlXG4gKiBAcmV0dXJucyB7R2l0fVxuICovXG5HaXQucHJvdG90eXBlLnNpbGVudCA9IGZ1bmN0aW9uIChzaWxlbmNlKSB7XG4gICBjb25zb2xlLndhcm4oJ3NpbXBsZS1naXQgZGVwcmVjYXRpb24gbm90aWNlOiBnaXQuc2lsZW50OiBsb2dnaW5nIHNob3VsZCBiZSBjb25maWd1cmVkIHVzaW5nIHRoZSBgZGVidWdgIGxpYnJhcnkgLyBgREVCVUdgIGVudmlyb25tZW50IHZhcmlhYmxlLCB0aGlzIHdpbGwgYmUgYW4gZXJyb3IgaW4gdmVyc2lvbiAzJyk7XG4gICB0aGlzLl9sb2dnZXIuc2lsZW50KCEhc2lsZW5jZSk7XG4gICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogTGlzdCBhbGwgdGFncy4gV2hlbiB1c2luZyBnaXQgMi43LjAgb3IgYWJvdmUsIGluY2x1ZGUgYW4gb3B0aW9ucyBvYmplY3Qgd2l0aCBgXCItLXNvcnRcIjogXCJwcm9wZXJ0eS1uYW1lXCJgIHRvXG4gKiBzb3J0IHRoZSB0YWdzIGJ5IHRoYXQgcHJvcGVydHkgaW5zdGVhZCBvZiB1c2luZyB0aGUgZGVmYXVsdCBzZW1hbnRpYyB2ZXJzaW9uaW5nIHNvcnQuXG4gKlxuICogTm90ZSwgc3VwcGx5aW5nIHRoaXMgb3B0aW9uIHdoZW4gaXQgaXMgbm90IHN1cHBvcnRlZCBieSB5b3VyIEdpdCB2ZXJzaW9uIHdpbGwgY2F1c2UgdGhlIG9wZXJhdGlvbiB0byBmYWlsLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLnRhZ3MgPSBmdW5jdGlvbiAob3B0aW9ucywgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICB0YWdMaXN0VGFzayhnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIFJlYmFzZXMgdGhlIGN1cnJlbnQgd29ya2luZyBjb3B5LiBPcHRpb25zIGNhbiBiZSBzdXBwbGllZCBlaXRoZXIgYXMgYW4gYXJyYXkgb2Ygc3RyaW5nIHBhcmFtZXRlcnNcbiAqIHRvIGJlIHNlbnQgdG8gdGhlIGBnaXQgcmViYXNlYCBjb21tYW5kLCBvciBhIHN0YW5kYXJkIG9wdGlvbnMgb2JqZWN0LlxuICovXG5HaXQucHJvdG90eXBlLnJlYmFzZSA9IGZ1bmN0aW9uICgpIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhbJ3JlYmFzZScsIC4uLmdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpXSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKVxuICAgKTtcbn07XG5cbi8qKlxuICogUmVzZXQgYSByZXBvXG4gKi9cbkdpdC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAobW9kZSkge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICByZXNldFRhc2soZ2V0UmVzZXRNb2RlKG1vZGUpLCBnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIFJldmVydCBvbmUgb3IgbW9yZSBjb21taXRzIGluIHRoZSBsb2NhbCB3b3JraW5nIGNvcHlcbiAqL1xuR2l0LnByb3RvdHlwZS5yZXZlcnQgPSBmdW5jdGlvbiAoY29tbWl0KSB7XG4gICBjb25zdCBuZXh0ID0gdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyk7XG5cbiAgIGlmICh0eXBlb2YgY29tbWl0ICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICAgICBjb25maWd1cmF0aW9uRXJyb3JUYXNrKCdDb21taXQgbXVzdCBiZSBhIHN0cmluZycpLFxuICAgICAgICAgbmV4dCxcbiAgICAgICk7XG4gICB9XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhbJ3JldmVydCcsIC4uLmdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMsIDAsIHRydWUpLCBjb21taXRdKSxcbiAgICAgIG5leHRcbiAgICk7XG59O1xuXG4vKipcbiAqIEFkZCBhIGxpZ2h0d2VpZ2h0IHRhZyB0byB0aGUgaGVhZCBvZiB0aGUgY3VycmVudCBicmFuY2hcbiAqL1xuR2l0LnByb3RvdHlwZS5hZGRUYWcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgY29uc3QgdGFzayA9ICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpXG4gICAgICA/IGFkZFRhZ1Rhc2sobmFtZSlcbiAgICAgIDogY29uZmlndXJhdGlvbkVycm9yVGFzaygnR2l0LmFkZFRhZyByZXF1aXJlcyBhIHRhZyBuYW1lJyk7XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKHRhc2ssIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpKTtcbn07XG5cbi8qKlxuICogQWRkIGFuIGFubm90YXRlZCB0YWcgdG8gdGhlIGhlYWQgb2YgdGhlIGN1cnJlbnQgYnJhbmNoXG4gKi9cbkdpdC5wcm90b3R5cGUuYWRkQW5ub3RhdGVkVGFnID0gZnVuY3Rpb24gKHRhZ05hbWUsIHRhZ01lc3NhZ2UpIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgYWRkQW5ub3RhdGVkVGFnVGFzayh0YWdOYW1lLCB0YWdNZXNzYWdlKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgb3V0IGEgdGFnIG9yIHJldmlzaW9uLCBhbnkgbnVtYmVyIG9mIGFkZGl0aW9uYWwgYXJndW1lbnRzIGNhbiBiZSBwYXNzZWQgdG8gdGhlIGBnaXQgY2hlY2tvdXRgIGNvbW1hbmRcbiAqIGJ5IHN1cHBseWluZyBlaXRoZXIgYSBzdHJpbmcgb3IgYXJyYXkgb2Ygc3RyaW5ncyBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXG4gKi9cbkdpdC5wcm90b3R5cGUuY2hlY2tvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICBjb25zdCBjb21tYW5kcyA9IFsnY2hlY2tvdXQnLCAuLi5nZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzLCB0cnVlKV07XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZHMpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBDaGVjayBvdXQgYSByZW1vdGUgYnJhbmNoXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJyYW5jaE5hbWUgbmFtZSBvZiBicmFuY2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGFydFBvaW50IChlLmcgb3JpZ2luL2RldmVsb3BtZW50KVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gKi9cbkdpdC5wcm90b3R5cGUuY2hlY2tvdXRCcmFuY2ggPSBmdW5jdGlvbiAoYnJhbmNoTmFtZSwgc3RhcnRQb2ludCwgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuY2hlY2tvdXQoWyctYicsIGJyYW5jaE5hbWUsIHN0YXJ0UG9pbnRdLCB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSk7XG59O1xuXG4vKipcbiAqIENoZWNrIG91dCBhIGxvY2FsIGJyYW5jaFxuICovXG5HaXQucHJvdG90eXBlLmNoZWNrb3V0TG9jYWxCcmFuY2ggPSBmdW5jdGlvbiAoYnJhbmNoTmFtZSwgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuY2hlY2tvdXQoWyctYicsIGJyYW5jaE5hbWVdLCB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSk7XG59O1xuXG4vKipcbiAqIERlbGV0ZSBhIGxvY2FsIGJyYW5jaFxuICovXG5HaXQucHJvdG90eXBlLmRlbGV0ZUxvY2FsQnJhbmNoID0gZnVuY3Rpb24gKGJyYW5jaE5hbWUsIGZvcmNlRGVsZXRlLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGRlbGV0ZUJyYW5jaFRhc2soYnJhbmNoTmFtZSwgdHlwZW9mIGZvcmNlRGVsZXRlID09PSBcImJvb2xlYW5cIiA/IGZvcmNlRGVsZXRlIDogZmFsc2UpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBEZWxldGUgb25lIG9yIG1vcmUgbG9jYWwgYnJhbmNoZXNcbiAqL1xuR2l0LnByb3RvdHlwZS5kZWxldGVMb2NhbEJyYW5jaGVzID0gZnVuY3Rpb24gKGJyYW5jaE5hbWVzLCBmb3JjZURlbGV0ZSwgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBkZWxldGVCcmFuY2hlc1Rhc2soYnJhbmNoTmFtZXMsIHR5cGVvZiBmb3JjZURlbGV0ZSA9PT0gXCJib29sZWFuXCIgPyBmb3JjZURlbGV0ZSA6IGZhbHNlKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogTGlzdCBhbGwgYnJhbmNoZXNcbiAqXG4gKiBAcGFyYW0ge09iamVjdCB8IHN0cmluZ1tdfSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLmJyYW5jaCA9IGZ1bmN0aW9uIChvcHRpb25zLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGJyYW5jaFRhc2soZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cykpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gbGlzdCBvZiBsb2NhbCBicmFuY2hlc1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLmJyYW5jaExvY2FsID0gZnVuY3Rpb24gKHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgYnJhbmNoTG9jYWxUYXNrKCksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIEFkZCBjb25maWcgdG8gbG9jYWwgZ2l0IGluc3RhbmNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBjb25maWd1cmF0aW9uIGtleSAoZS5nIHVzZXIubmFtZSlcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBmb3IgdGhlIGdpdmVuIGtleSAoZS5nIHlvdXIgbmFtZSlcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FwcGVuZD1mYWxzZV0gb3B0aW9uYWxseSBhcHBlbmQgdGhlIGtleS92YWx1ZSBwYWlyIChlcXVpdmFsZW50IG9mIHBhc3NpbmcgYC0tYWRkYCBvcHRpb24pLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gKi9cbkdpdC5wcm90b3R5cGUuYWRkQ29uZmlnID0gZnVuY3Rpb24gKGtleSwgdmFsdWUsIGFwcGVuZCwgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBhZGRDb25maWdUYXNrKGtleSwgdmFsdWUsIHR5cGVvZiBhcHBlbmQgPT09IFwiYm9vbGVhblwiID8gYXBwZW5kIDogZmFsc2UpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuR2l0LnByb3RvdHlwZS5saXN0Q29uZmlnID0gZnVuY3Rpb24gKCkge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2sobGlzdENvbmZpZ1Rhc2soKSwgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cykpO1xufTtcblxuLyoqXG4gKiBFeGVjdXRlcyBhbnkgY29tbWFuZCBhZ2FpbnN0IHRoZSBnaXQgYmluYXJ5LlxuICovXG5HaXQucHJvdG90eXBlLnJhdyA9IGZ1bmN0aW9uIChjb21tYW5kcykge1xuICAgY29uc3QgY3JlYXRlUmVzdENvbW1hbmRzID0gIUFycmF5LmlzQXJyYXkoY29tbWFuZHMpO1xuICAgY29uc3QgY29tbWFuZCA9IFtdLnNsaWNlLmNhbGwoY3JlYXRlUmVzdENvbW1hbmRzID8gYXJndW1lbnRzIDogY29tbWFuZHMsIDApO1xuXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbW1hbmQubGVuZ3RoICYmIGNyZWF0ZVJlc3RDb21tYW5kczsgaSsrKSB7XG4gICAgICBpZiAoIWZpbHRlclByaW1pdGl2ZXMoY29tbWFuZFtpXSkpIHtcbiAgICAgICAgIGNvbW1hbmQuc3BsaWNlKGksIGNvbW1hbmQubGVuZ3RoIC0gaSk7XG4gICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgIH1cblxuICAgY29tbWFuZC5wdXNoKFxuICAgICAgLi4uZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cywgMCwgdHJ1ZSksXG4gICApO1xuXG4gICB2YXIgbmV4dCA9IHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpO1xuXG4gICBpZiAoIWNvbW1hbmQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgICAgIGNvbmZpZ3VyYXRpb25FcnJvclRhc2soJ1JhdzogbXVzdCBzdXBwbHkgb25lIG9yIG1vcmUgY29tbWFuZCB0byBleGVjdXRlJyksXG4gICAgICAgICBuZXh0LFxuICAgICAgKTtcbiAgIH1cblxuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhjb21tYW5kKSwgbmV4dCk7XG59O1xuXG5HaXQucHJvdG90eXBlLnN1Ym1vZHVsZUFkZCA9IGZ1bmN0aW9uIChyZXBvLCBwYXRoLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGFkZFN1Yk1vZHVsZVRhc2socmVwbywgcGF0aCksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG5HaXQucHJvdG90eXBlLnN1Ym1vZHVsZVVwZGF0ZSA9IGZ1bmN0aW9uIChhcmdzLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHVwZGF0ZVN1Yk1vZHVsZVRhc2soZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cywgdHJ1ZSkpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuR2l0LnByb3RvdHlwZS5zdWJtb2R1bGVJbml0ID0gZnVuY3Rpb24gKGFyZ3MsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgaW5pdFN1Yk1vZHVsZVRhc2soZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cywgdHJ1ZSkpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuR2l0LnByb3RvdHlwZS5zdWJNb2R1bGUgPSBmdW5jdGlvbiAob3B0aW9ucywgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBzdWJNb2R1bGVUYXNrKGdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbkdpdC5wcm90b3R5cGUubGlzdFJlbW90ZSA9IGZ1bmN0aW9uICgpIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgbGlzdFJlbW90ZXNUYXNrKGdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogQWRkcyBhIHJlbW90ZSB0byB0aGUgbGlzdCBvZiByZW1vdGVzLlxuICovXG5HaXQucHJvdG90eXBlLmFkZFJlbW90ZSA9IGZ1bmN0aW9uIChyZW1vdGVOYW1lLCByZW1vdGVSZXBvLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGFkZFJlbW90ZVRhc2socmVtb3RlTmFtZSwgcmVtb3RlUmVwbywgZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cykpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIGFuIGVudHJ5IGJ5IG5hbWUgZnJvbSB0aGUgbGlzdCBvZiByZW1vdGVzLlxuICovXG5HaXQucHJvdG90eXBlLnJlbW92ZVJlbW90ZSA9IGZ1bmN0aW9uIChyZW1vdGVOYW1lLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHJlbW92ZVJlbW90ZVRhc2socmVtb3RlTmFtZSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIEdldHMgdGhlIGN1cnJlbnRseSBhdmFpbGFibGUgcmVtb3Rlcywgc2V0dGluZyB0aGUgb3B0aW9uYWwgdmVyYm9zZSBhcmd1bWVudCB0byB0cnVlIGluY2x1ZGVzIGFkZGl0aW9uYWxcbiAqIGRldGFpbCBvbiB0aGUgcmVtb3RlcyB0aGVtc2VsdmVzLlxuICovXG5HaXQucHJvdG90eXBlLmdldFJlbW90ZXMgPSBmdW5jdGlvbiAodmVyYm9zZSwgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBnZXRSZW1vdGVzVGFzayh2ZXJib3NlID09PSB0cnVlKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogQ29tcHV0ZSBvYmplY3QgSUQgZnJvbSBhIGZpbGVcbiAqL1xuR2l0LnByb3RvdHlwZS5oYXNoT2JqZWN0ID0gZnVuY3Rpb24gKHBhdGgsIHdyaXRlKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGhhc2hPYmplY3RUYXNrKHBhdGgsIHdyaXRlID09PSB0cnVlKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogQ2FsbCBhbnkgYGdpdCByZW1vdGVgIGZ1bmN0aW9uIHdpdGggYXJndW1lbnRzIHBhc3NlZCBhcyBhbiBhcnJheSBvZiBzdHJpbmdzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IG9wdGlvbnNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLnJlbW90ZSA9IGZ1bmN0aW9uIChvcHRpb25zLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHJlbW90ZVRhc2soZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cykpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBNZXJnZXMgZnJvbSBvbmUgYnJhbmNoIHRvIGFub3RoZXIsIGVxdWl2YWxlbnQgdG8gcnVubmluZyBgZ2l0IG1lcmdlICR7ZnJvbX0gJFt0b31gLCB0aGUgYG9wdGlvbnNgIGFyZ3VtZW50IGNhblxuICogZWl0aGVyIGJlIGFuIGFycmF5IG9mIGFkZGl0aW9uYWwgcGFyYW1ldGVycyB0byBwYXNzIHRvIHRoZSBjb21tYW5kIG9yIG51bGwgLyBvbWl0dGVkIHRvIGJlIGlnbm9yZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGZyb21cbiAqIEBwYXJhbSB7c3RyaW5nfSB0b1xuICovXG5HaXQucHJvdG90eXBlLm1lcmdlRnJvbVRvID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gICBpZiAoIShmaWx0ZXJTdHJpbmcoZnJvbSkgJiYgZmlsdGVyU3RyaW5nKHRvKSkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ydW5UYXNrKGNvbmZpZ3VyYXRpb25FcnJvclRhc2soXG4gICAgICAgICBgR2l0Lm1lcmdlRnJvbVRvIHJlcXVpcmVzIHRoYXQgdGhlICdmcm9tJyBhbmQgJ3RvJyBhcmd1bWVudHMgYXJlIHN1cHBsaWVkIGFzIHN0cmluZ3NgXG4gICAgICApKTtcbiAgIH1cblxuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBtZXJnZVRhc2soW2Zyb20sIHRvLCAuLi5nZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKV0pLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cywgZmFsc2UpLFxuICAgKTtcbn07XG5cbi8qKlxuICogUnVucyBhIG1lcmdlLCBgb3B0aW9uc2AgY2FuIGJlIGVpdGhlciBhbiBhcnJheSBvZiBhcmd1bWVudHNcbiAqIHN1cHBvcnRlZCBieSB0aGUgW2BnaXQgbWVyZ2VgXShodHRwczovL2dpdC1zY20uY29tL2RvY3MvZ2l0LW1lcmdlKVxuICogb3IgYW4gb3B0aW9ucyBvYmplY3QuXG4gKlxuICogQ29uZmxpY3RzIGR1cmluZyB0aGUgbWVyZ2UgcmVzdWx0IGluIGFuIGVycm9yIHJlc3BvbnNlLFxuICogdGhlIHJlc3BvbnNlIHR5cGUgd2hldGhlciBpdCB3YXMgYW4gZXJyb3Igb3Igc3VjY2VzcyB3aWxsIGJlIGEgTWVyZ2VTdW1tYXJ5IGluc3RhbmNlLlxuICogV2hlbiBzdWNjZXNzZnVsLCB0aGUgTWVyZ2VTdW1tYXJ5IGhhcyBhbGwgZGV0YWlsIGZyb20gYSB0aGUgUHVsbFN1bW1hcnlcbiAqXG4gKiBAcGFyYW0ge09iamVjdCB8IHN0cmluZ1tdfSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICogQHJldHVybnMgeyp9XG4gKlxuICogQHNlZSAuL3Jlc3BvbnNlcy9NZXJnZVN1bW1hcnkuanNcbiAqIEBzZWUgLi9yZXNwb25zZXMvUHVsbFN1bW1hcnkuanNcbiAqL1xuR2l0LnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uICgpIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgbWVyZ2VUYXNrKGdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogQ2FsbCBhbnkgYGdpdCB0YWdgIGZ1bmN0aW9uIHdpdGggYXJndW1lbnRzIHBhc3NlZCBhcyBhbiBhcnJheSBvZiBzdHJpbmdzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IG9wdGlvbnNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLnRhZyA9IGZ1bmN0aW9uIChvcHRpb25zLCB0aGVuKSB7XG4gICBjb25zdCBjb21tYW5kID0gZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cyk7XG5cbiAgIGlmIChjb21tYW5kWzBdICE9PSAndGFnJykge1xuICAgICAgY29tbWFuZC51bnNoaWZ0KCd0YWcnKTtcbiAgIH1cblxuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBzdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKGNvbW1hbmQpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cylcbiAgICk7XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgcmVwb3NpdG9yeSBzZXJ2ZXIgaW5mb1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLnVwZGF0ZVNlcnZlckluZm8gPSBmdW5jdGlvbiAodGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBzdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKFsndXBkYXRlLXNlcnZlci1pbmZvJ10pLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBQdXNoZXMgdGhlIGN1cnJlbnQgdGFnIGNoYW5nZXMgdG8gYSByZW1vdGUgd2hpY2ggY2FuIGJlIGVpdGhlciBhIFVSTCBvciBuYW1lZCByZW1vdGUuIFdoZW4gbm90IHNwZWNpZmllZCB1c2VzIHRoZVxuICogZGVmYXVsdCBjb25maWd1cmVkIHJlbW90ZSBzcGVjLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcmVtb3RlXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gKi9cbkdpdC5wcm90b3R5cGUucHVzaFRhZ3MgPSBmdW5jdGlvbiAocmVtb3RlLCB0aGVuKSB7XG4gICBjb25zdCB0YXNrID0gcHVzaFRhZ3NUYXNrKHtyZW1vdGU6IGZpbHRlclR5cGUocmVtb3RlLCBmaWx0ZXJTdHJpbmcpfSwgZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cykpO1xuXG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayh0YXNrLCB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgdGhlIG5hbWVkIGZpbGVzIGZyb20gc291cmNlIGNvbnRyb2wuXG4gKi9cbkdpdC5wcm90b3R5cGUucm0gPSBmdW5jdGlvbiAoZmlsZXMpIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhbJ3JtJywgJy1mJywgLi4uYXNBcnJheShmaWxlcyldKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpXG4gICApO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBuYW1lZCBmaWxlcyBmcm9tIHNvdXJjZSBjb250cm9sIGJ1dCBrZWVwcyB0aGVtIG9uIGRpc2sgcmF0aGVyIHRoYW4gZGVsZXRpbmcgdGhlbSBlbnRpcmVseS4gVG9cbiAqIGNvbXBsZXRlbHkgcmVtb3ZlIHRoZSBmaWxlcywgdXNlIGBybWAuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGZpbGVzXG4gKi9cbkdpdC5wcm90b3R5cGUucm1LZWVwTG9jYWwgPSBmdW5jdGlvbiAoZmlsZXMpIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhbJ3JtJywgJy0tY2FjaGVkJywgLi4uYXNBcnJheShmaWxlcyldKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpXG4gICApO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgbGlzdCBvZiBvYmplY3RzIGluIGEgdHJlZSBiYXNlZCBvbiBjb21taXQgaGFzaC4gUGFzc2luZyBpbiBhbiBvYmplY3QgaGFzaCByZXR1cm5zIHRoZSBvYmplY3QncyBjb250ZW50LFxuICogc2l6ZSwgYW5kIHR5cGUuXG4gKlxuICogUGFzc2luZyBcIi1wXCIgd2lsbCBpbnN0cnVjdCBjYXQtZmlsZSB0byBkZXRlcm1pbmUgdGhlIG9iamVjdCB0eXBlLCBhbmQgZGlzcGxheSBpdHMgZm9ybWF0dGVkIGNvbnRlbnRzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IFtvcHRpb25zXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gKi9cbkdpdC5wcm90b3R5cGUuY2F0RmlsZSA9IGZ1bmN0aW9uIChvcHRpb25zLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fY2F0RmlsZSgndXRmLTgnLCBhcmd1bWVudHMpO1xufTtcblxuR2l0LnByb3RvdHlwZS5iaW5hcnlDYXRGaWxlID0gZnVuY3Rpb24gKCkge1xuICAgcmV0dXJuIHRoaXMuX2NhdEZpbGUoJ2J1ZmZlcicsIGFyZ3VtZW50cyk7XG59O1xuXG5HaXQucHJvdG90eXBlLl9jYXRGaWxlID0gZnVuY3Rpb24gKGZvcm1hdCwgYXJncykge1xuICAgdmFyIGhhbmRsZXIgPSB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJncyk7XG4gICB2YXIgY29tbWFuZCA9IFsnY2F0LWZpbGUnXTtcbiAgIHZhciBvcHRpb25zID0gYXJnc1swXTtcblxuICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICAgICBjb25maWd1cmF0aW9uRXJyb3JUYXNrKCdHaXQuY2F0RmlsZTogb3B0aW9ucyBtdXN0IGJlIHN1cHBsaWVkIGFzIGFuIGFycmF5IG9mIHN0cmluZ3MnKSxcbiAgICAgICAgIGhhbmRsZXIsXG4gICAgICApO1xuICAgfVxuXG4gICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgY29tbWFuZC5wdXNoLmFwcGx5KGNvbW1hbmQsIG9wdGlvbnMpO1xuICAgfVxuXG4gICBjb25zdCB0YXNrID0gZm9ybWF0ID09PSAnYnVmZmVyJ1xuICAgICAgPyBzdHJhaWdodFRocm91Z2hCdWZmZXJUYXNrKGNvbW1hbmQpXG4gICAgICA6IHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZCk7XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKHRhc2ssIGhhbmRsZXIpO1xufTtcblxuR2l0LnByb3RvdHlwZS5kaWZmID0gZnVuY3Rpb24gKG9wdGlvbnMsIHRoZW4pIHtcbiAgIGNvbnN0IGNvbW1hbmQgPSBbJ2RpZmYnLCAuLi5nZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKV07XG5cbiAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbW1hbmQuc3BsaWNlKDEsIDAsIG9wdGlvbnMpO1xuICAgICAgdGhpcy5fbG9nZ2VyLndhcm4oJ0dpdCNkaWZmOiBzdXBwbHlpbmcgb3B0aW9ucyBhcyBhIHNpbmdsZSBzdHJpbmcgaXMgbm93IGRlcHJlY2F0ZWQsIHN3aXRjaCB0byBhbiBhcnJheSBvZiBzdHJpbmdzJyk7XG4gICB9XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhjb21tYW5kKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbkdpdC5wcm90b3R5cGUuZGlmZlN1bW1hcnkgPSBmdW5jdGlvbiAoKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGRpZmZTdW1tYXJ5VGFzayhnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzLCAxKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG5HaXQucHJvdG90eXBlLmFwcGx5UGF0Y2ggPSBmdW5jdGlvbiAocGF0Y2hlcykge1xuICAgY29uc3QgdGFzayA9ICFmaWx0ZXJTdHJpbmdPclN0cmluZ0FycmF5KHBhdGNoZXMpXG4gICAgICA/IGNvbmZpZ3VyYXRpb25FcnJvclRhc2soYGdpdC5hcHBseVBhdGNoIHJlcXVpcmVzIG9uZSBvciBtb3JlIHN0cmluZyBwYXRjaGVzIGFzIHRoZSBmaXJzdCBhcmd1bWVudGApXG4gICAgICA6IGFwcGx5UGF0Y2hUYXNrKGFzQXJyYXkocGF0Y2hlcyksIGdldFRyYWlsaW5nT3B0aW9ucyhbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpKTtcblxuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICB0YXNrLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufVxuXG5HaXQucHJvdG90eXBlLnJldnBhcnNlID0gZnVuY3Rpb24gKCkge1xuICAgY29uc3QgY29tbWFuZHMgPSBbJ3Jldi1wYXJzZScsIC4uLmdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMsIHRydWUpXTtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhjb21tYW5kcywgdHJ1ZSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIFNob3cgdmFyaW91cyB0eXBlcyBvZiBvYmplY3RzLCBmb3IgZXhhbXBsZSB0aGUgZmlsZSBhdCBhIGNlcnRhaW4gY29tbWl0XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAqL1xuR2l0LnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKG9wdGlvbnMsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhbJ3Nob3cnLCAuLi5nZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzLCAxKV0pLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cylcbiAgICk7XG59O1xuXG4vKipcbiAqL1xuR2l0LnByb3RvdHlwZS5jbGVhbiA9IGZ1bmN0aW9uIChtb2RlLCBvcHRpb25zLCB0aGVuKSB7XG4gICBjb25zdCB1c2luZ0NsZWFuT3B0aW9uc0FycmF5ID0gaXNDbGVhbk9wdGlvbnNBcnJheShtb2RlKTtcbiAgIGNvbnN0IGNsZWFuTW9kZSA9IHVzaW5nQ2xlYW5PcHRpb25zQXJyYXkgJiYgbW9kZS5qb2luKCcnKSB8fCBmaWx0ZXJUeXBlKG1vZGUsIGZpbHRlclN0cmluZykgfHwgJyc7XG4gICBjb25zdCBjdXN0b21BcmdzID0gZ2V0VHJhaWxpbmdPcHRpb25zKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCB1c2luZ0NsZWFuT3B0aW9uc0FycmF5ID8gMSA6IDApKTtcblxuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBjbGVhbldpdGhPcHRpb25zVGFzayhjbGVhbk1vZGUsIGN1c3RvbUFyZ3MpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBDYWxsIGEgc2ltcGxlIGZ1bmN0aW9uIGF0IHRoZSBuZXh0IHN0ZXAgaW4gdGhlIGNoYWluLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gKi9cbkdpdC5wcm90b3R5cGUuZXhlYyA9IGZ1bmN0aW9uICh0aGVuKSB7XG4gICBjb25zdCB0YXNrID0ge1xuICAgICAgY29tbWFuZHM6IFtdLFxuICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgcGFyc2VyICgpIHtcbiAgICAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhlbigpO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgfTtcblxuICAgcmV0dXJuIHRoaXMuX3J1blRhc2sodGFzayk7XG59O1xuXG4vKipcbiAqIFNob3cgY29tbWl0IGxvZ3MgZnJvbSBgSEVBRGAgdG8gdGhlIGZpcnN0IGNvbW1pdC5cbiAqIElmIHByb3ZpZGVkIGJldHdlZW4gYG9wdGlvbnMuZnJvbWAgYW5kIGBvcHRpb25zLnRvYCB0YWdzIG9yIGJyYW5jaC5cbiAqXG4gKiBBZGRpdGlvbmFsbHkgeW91IGNhbiBwcm92aWRlIG9wdGlvbnMuZmlsZSwgd2hpY2ggaXMgdGhlIHBhdGggdG8gYSBmaWxlIGluIHlvdXIgcmVwb3NpdG9yeS4gVGhlbiBvbmx5IHRoaXMgZmlsZSB3aWxsIGJlIGNvbnNpZGVyZWQuXG4gKlxuICogVG8gdXNlIGEgY3VzdG9tIHNwbGl0dGVyIGluIHRoZSBsb2cgZm9ybWF0LCBzZXQgYG9wdGlvbnMuc3BsaXR0ZXJgIHRvIGJlIHRoZSBzdHJpbmcgdGhlIGxvZyBzaG91bGQgYmUgc3BsaXQgb24uXG4gKlxuICogT3B0aW9ucyBjYW4gYWxzbyBiZSBzdXBwbGllZCBhcyBhIHN0YW5kYXJkIG9wdGlvbnMgb2JqZWN0IGZvciBhZGRpbmcgY3VzdG9tIHByb3BlcnRpZXMgc3VwcG9ydGVkIGJ5IHRoZSBnaXQgbG9nIGNvbW1hbmQuXG4gKiBGb3IgYW55IG90aGVyIHNldCBvZiBvcHRpb25zLCBzdXBwbHkgb3B0aW9ucyBhcyBhbiBhcnJheSBvZiBzdHJpbmdzIHRvIGJlIGFwcGVuZGVkIHRvIHRoZSBnaXQgbG9nIGNvbW1hbmQuXG4gKi9cbkdpdC5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgIGNvbnN0IG5leHQgPSB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKTtcblxuICAgaWYgKGZpbHRlclN0cmluZyhhcmd1bWVudHNbMF0pICYmIGZpbHRlclN0cmluZyhhcmd1bWVudHNbMV0pKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgICAgIGNvbmZpZ3VyYXRpb25FcnJvclRhc2soYGdpdC5sb2coc3RyaW5nLCBzdHJpbmcpIHNob3VsZCBiZSByZXBsYWNlZCB3aXRoIGdpdC5sb2coeyBmcm9tOiBzdHJpbmcsIHRvOiBzdHJpbmcgfSlgKSxcbiAgICAgICAgIG5leHRcbiAgICAgICk7XG4gICB9XG5cbiAgIGNvbnN0IHBhcnNlZE9wdGlvbnMgPSBwYXJzZUxvZ09wdGlvbnMoXG4gICAgICB0cmFpbGluZ09wdGlvbnNBcmd1bWVudChhcmd1bWVudHMpIHx8IHt9LFxuICAgICAgZmlsdGVyQXJyYXkob3B0aW9ucykgJiYgb3B0aW9ucyB8fCBbXVxuICAgKTtcblxuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBsb2dUYXNrKHBhcnNlZE9wdGlvbnMuc3BsaXR0ZXIsIHBhcnNlZE9wdGlvbnMuZmllbGRzLCBwYXJzZWRPcHRpb25zLmNvbW1hbmRzKSxcbiAgICAgIG5leHQsXG4gICApXG59O1xuXG4vKipcbiAqIENsZWFycyB0aGUgcXVldWUgb2YgcGVuZGluZyBjb21tYW5kcyBhbmQgcmV0dXJucyB0aGUgd3JhcHBlciBpbnN0YW5jZSBmb3IgY2hhaW5pbmcuXG4gKlxuICogQHJldHVybnMge0dpdH1cbiAqL1xuR2l0LnByb3RvdHlwZS5jbGVhclF1ZXVlID0gZnVuY3Rpb24gKCkge1xuICAgLy8gVE9ETzpcbiAgIC8vIHRoaXMuX2V4ZWN1dG9yLmNsZWFyKCk7XG4gICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBwYXRobmFtZSBvciBwYXRobmFtZXMgYXJlIGV4Y2x1ZGVkIGJ5IC5naXRpZ25vcmVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gcGF0aG5hbWVzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAqL1xuR2l0LnByb3RvdHlwZS5jaGVja0lnbm9yZSA9IGZ1bmN0aW9uIChwYXRobmFtZXMsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgY2hlY2tJZ25vcmVUYXNrKGFzQXJyYXkoKGZpbHRlclR5cGUocGF0aG5hbWVzLCBmaWx0ZXJTdHJpbmdPclN0cmluZ0FycmF5LCBbXSkpKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG5HaXQucHJvdG90eXBlLmNoZWNrSXNSZXBvID0gZnVuY3Rpb24gKGNoZWNrVHlwZSwgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBjaGVja0lzUmVwb1Rhc2soZmlsdGVyVHlwZShjaGVja1R5cGUsIGZpbHRlclN0cmluZykpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBHaXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2l0SW5zdGFuY2VGYWN0b3J5ID0gZXhwb3J0cy5naXRFeHBvcnRGYWN0b3J5ID0gZXhwb3J0cy5lc01vZHVsZUZhY3RvcnkgPSB2b2lkIDA7XG5jb25zdCBhcGlfMSA9IHJlcXVpcmUoXCIuL2FwaVwiKTtcbmNvbnN0IHBsdWdpbnNfMSA9IHJlcXVpcmUoXCIuL3BsdWdpbnNcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5jb25zdCBHaXQgPSByZXF1aXJlKCcuLi9naXQnKTtcbi8qKlxuICogQWRkcyB0aGUgbmVjZXNzYXJ5IHByb3BlcnRpZXMgdG8gdGhlIHN1cHBsaWVkIG9iamVjdCB0byBlbmFibGUgaXQgZm9yIHVzZSBhc1xuICogdGhlIGRlZmF1bHQgZXhwb3J0IG9mIGEgbW9kdWxlLlxuICpcbiAqIEVnOiBgbW9kdWxlLmV4cG9ydHMgPSBlc01vZHVsZUZhY3RvcnkoeyBzb21ldGhpbmcgKCkge30gfSlgXG4gKi9cbmZ1bmN0aW9uIGVzTW9kdWxlRmFjdG9yeShkZWZhdWx0RXhwb3J0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGRlZmF1bHRFeHBvcnQsIHtcbiAgICAgICAgX19lc01vZHVsZTogeyB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICBkZWZhdWx0OiB7IHZhbHVlOiBkZWZhdWx0RXhwb3J0IH0sXG4gICAgfSk7XG59XG5leHBvcnRzLmVzTW9kdWxlRmFjdG9yeSA9IGVzTW9kdWxlRmFjdG9yeTtcbmZ1bmN0aW9uIGdpdEV4cG9ydEZhY3RvcnkoZmFjdG9yeSwgZXh0cmEpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICByZXR1cm4gZmFjdG9yeS5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9LCBhcGlfMS5kZWZhdWx0LCBleHRyYSB8fCB7fSk7XG59XG5leHBvcnRzLmdpdEV4cG9ydEZhY3RvcnkgPSBnaXRFeHBvcnRGYWN0b3J5O1xuZnVuY3Rpb24gZ2l0SW5zdGFuY2VGYWN0b3J5KGJhc2VEaXIsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBwbHVnaW5zID0gbmV3IHBsdWdpbnNfMS5QbHVnaW5TdG9yZSgpO1xuICAgIGNvbnN0IGNvbmZpZyA9IHV0aWxzXzEuY3JlYXRlSW5zdGFuY2VDb25maWcoYmFzZURpciAmJiAodHlwZW9mIGJhc2VEaXIgPT09ICdzdHJpbmcnID8geyBiYXNlRGlyIH0gOiBiYXNlRGlyKSB8fCB7fSwgb3B0aW9ucyk7XG4gICAgaWYgKCF1dGlsc18xLmZvbGRlckV4aXN0cyhjb25maWcuYmFzZURpcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IGFwaV8xLmRlZmF1bHQuR2l0Q29uc3RydWN0RXJyb3IoY29uZmlnLCBgQ2Fubm90IHVzZSBzaW1wbGUtZ2l0IG9uIGEgZGlyZWN0b3J5IHRoYXQgZG9lcyBub3QgZXhpc3RgKTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29uZmlnLmNvbmZpZykpIHtcbiAgICAgICAgcGx1Z2lucy5hZGQocGx1Z2luc18xLmNvbW1hbmRDb25maWdQcmVmaXhpbmdQbHVnaW4oY29uZmlnLmNvbmZpZykpO1xuICAgIH1cbiAgICBjb25maWcucHJvZ3Jlc3MgJiYgcGx1Z2lucy5hZGQocGx1Z2luc18xLnByb2dyZXNzTW9uaXRvclBsdWdpbihjb25maWcucHJvZ3Jlc3MpKTtcbiAgICBjb25maWcudGltZW91dCAmJiBwbHVnaW5zLmFkZChwbHVnaW5zXzEudGltZW91dFBsdWdpbihjb25maWcudGltZW91dCkpO1xuICAgIHBsdWdpbnMuYWRkKHBsdWdpbnNfMS5lcnJvckRldGVjdGlvblBsdWdpbihwbHVnaW5zXzEuZXJyb3JEZXRlY3Rpb25IYW5kbGVyKHRydWUpKSk7XG4gICAgY29uZmlnLmVycm9ycyAmJiBwbHVnaW5zLmFkZChwbHVnaW5zXzEuZXJyb3JEZXRlY3Rpb25QbHVnaW4oY29uZmlnLmVycm9ycykpO1xuICAgIHJldHVybiBuZXcgR2l0KGNvbmZpZywgcGx1Z2lucyk7XG59XG5leHBvcnRzLmdpdEluc3RhbmNlRmFjdG9yeSA9IGdpdEluc3RhbmNlRmFjdG9yeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdpdC1mYWN0b3J5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5naXRQID0gdm9pZCAwO1xuY29uc3QgZ2l0X3Jlc3BvbnNlX2Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3JzL2dpdC1yZXNwb25zZS1lcnJvclwiKTtcbmNvbnN0IGdpdF9mYWN0b3J5XzEgPSByZXF1aXJlKFwiLi4vZ2l0LWZhY3RvcnlcIik7XG5jb25zdCBmdW5jdGlvbk5hbWVzQnVpbGRlckFwaSA9IFtcbiAgICAnY3VzdG9tQmluYXJ5JywgJ2VudicsICdvdXRwdXRIYW5kbGVyJywgJ3NpbGVudCcsXG5dO1xuY29uc3QgZnVuY3Rpb25OYW1lc1Byb21pc2VBcGkgPSBbXG4gICAgJ2FkZCcsXG4gICAgJ2FkZEFubm90YXRlZFRhZycsXG4gICAgJ2FkZENvbmZpZycsXG4gICAgJ2FkZFJlbW90ZScsXG4gICAgJ2FkZFRhZycsXG4gICAgJ2FwcGx5UGF0Y2gnLFxuICAgICdiaW5hcnlDYXRGaWxlJyxcbiAgICAnYnJhbmNoJyxcbiAgICAnYnJhbmNoTG9jYWwnLFxuICAgICdjYXRGaWxlJyxcbiAgICAnY2hlY2tJZ25vcmUnLFxuICAgICdjaGVja0lzUmVwbycsXG4gICAgJ2NoZWNrb3V0JyxcbiAgICAnY2hlY2tvdXRCcmFuY2gnLFxuICAgICdjaGVja291dExhdGVzdFRhZycsXG4gICAgJ2NoZWNrb3V0TG9jYWxCcmFuY2gnLFxuICAgICdjbGVhbicsXG4gICAgJ2Nsb25lJyxcbiAgICAnY29tbWl0JyxcbiAgICAnY3dkJyxcbiAgICAnZGVsZXRlTG9jYWxCcmFuY2gnLFxuICAgICdkZWxldGVMb2NhbEJyYW5jaGVzJyxcbiAgICAnZGlmZicsXG4gICAgJ2RpZmZTdW1tYXJ5JyxcbiAgICAnZXhlYycsXG4gICAgJ2ZldGNoJyxcbiAgICAnZ2V0UmVtb3RlcycsXG4gICAgJ2luaXQnLFxuICAgICdsaXN0Q29uZmlnJyxcbiAgICAnbGlzdFJlbW90ZScsXG4gICAgJ2xvZycsXG4gICAgJ21lcmdlJyxcbiAgICAnbWVyZ2VGcm9tVG8nLFxuICAgICdtaXJyb3InLFxuICAgICdtdicsXG4gICAgJ3B1bGwnLFxuICAgICdwdXNoJyxcbiAgICAncHVzaFRhZ3MnLFxuICAgICdyYXcnLFxuICAgICdyZWJhc2UnLFxuICAgICdyZW1vdGUnLFxuICAgICdyZW1vdmVSZW1vdGUnLFxuICAgICdyZXNldCcsXG4gICAgJ3JldmVydCcsXG4gICAgJ3JldnBhcnNlJyxcbiAgICAncm0nLFxuICAgICdybUtlZXBMb2NhbCcsXG4gICAgJ3Nob3cnLFxuICAgICdzdGFzaCcsXG4gICAgJ3N0YXNoTGlzdCcsXG4gICAgJ3N0YXR1cycsXG4gICAgJ3N1Yk1vZHVsZScsXG4gICAgJ3N1Ym1vZHVsZUFkZCcsXG4gICAgJ3N1Ym1vZHVsZUluaXQnLFxuICAgICdzdWJtb2R1bGVVcGRhdGUnLFxuICAgICd0YWcnLFxuICAgICd0YWdzJyxcbiAgICAndXBkYXRlU2VydmVySW5mbydcbl07XG5mdW5jdGlvbiBnaXRQKC4uLmFyZ3MpIHtcbiAgICBsZXQgZ2l0O1xuICAgIGxldCBjaGFpbiA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIHRyeSB7XG4gICAgICAgIGdpdCA9IGdpdF9mYWN0b3J5XzEuZ2l0SW5zdGFuY2VGYWN0b3J5KC4uLmFyZ3MpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjaGFpbiA9IFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBidWlsZGVyUmV0dXJuKCkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZUFwaTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hhaW5SZXR1cm4oKSB7XG4gICAgICAgIHJldHVybiBjaGFpbjtcbiAgICB9XG4gICAgY29uc3QgcHJvbWlzZUFwaSA9IFsuLi5mdW5jdGlvbk5hbWVzQnVpbGRlckFwaSwgLi4uZnVuY3Rpb25OYW1lc1Byb21pc2VBcGldLnJlZHVjZSgoYXBpLCBuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQXN5bmMgPSBmdW5jdGlvbk5hbWVzUHJvbWlzZUFwaS5pbmNsdWRlcyhuYW1lKTtcbiAgICAgICAgY29uc3QgdmFsaWQgPSBpc0FzeW5jID8gYXN5bmNXcmFwcGVyKG5hbWUsIGdpdCkgOiBzeW5jV3JhcHBlcihuYW1lLCBnaXQsIGFwaSk7XG4gICAgICAgIGNvbnN0IGFsdGVybmF0aXZlID0gaXNBc3luYyA/IGNoYWluUmV0dXJuIDogYnVpbGRlclJldHVybjtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFwaSwgbmFtZSwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IGdpdCA/IHZhbGlkIDogYWx0ZXJuYXRpdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXBpO1xuICAgIH0sIHt9KTtcbiAgICByZXR1cm4gcHJvbWlzZUFwaTtcbiAgICBmdW5jdGlvbiBhc3luY1dyYXBwZXIoZm4sIGdpdCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJnc1thcmdzLmxlbmd0aF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlIGludGVyZmFjZSByZXF1aXJlcyB0aGF0IGhhbmRsZXJzIGFyZSBub3Qgc3VwcGxpZWQgaW5saW5lLCAnICtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYWlsaW5nIGZ1bmN0aW9uIG5vdCBhbGxvd2VkIGluIGNhbGwgdG8gJyArIGZuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGFpbi50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QodG9FcnJvcihlcnIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgZ2l0W2ZuXS5hcHBseShnaXQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN5bmNXcmFwcGVyKGZuLCBnaXQsIGFwaSkge1xuICAgICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIGdpdFtmbl0oLi4uYXJncyk7XG4gICAgICAgICAgICByZXR1cm4gYXBpO1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydHMuZ2l0UCA9IGdpdFA7XG5mdW5jdGlvbiB0b0Vycm9yKGVycm9yKSB7XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGVycm9yID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKGVycm9yKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBnaXRfcmVzcG9uc2VfZXJyb3JfMS5HaXRSZXNwb25zZUVycm9yKGVycm9yKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByb21pc2Utd3JhcHBlZC5qcy5tYXAiLCJcbmNvbnN0IHtnaXRQfSA9IHJlcXVpcmUoJy4vbGliL3J1bm5lcnMvcHJvbWlzZS13cmFwcGVkJyk7XG5jb25zdCB7ZXNNb2R1bGVGYWN0b3J5LCBnaXRJbnN0YW5jZUZhY3RvcnksIGdpdEV4cG9ydEZhY3Rvcnl9ID0gcmVxdWlyZSgnLi9saWIvZ2l0LWZhY3RvcnknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBlc01vZHVsZUZhY3RvcnkoXG4gICBnaXRFeHBvcnRGYWN0b3J5KGdpdEluc3RhbmNlRmFjdG9yeSwge2dpdFB9KVxuKTtcbiIsImltcG9ydCB7IHNwYXduU3luYyB9IGZyb20gXCJjaGlsZF9wcm9jZXNzXCI7XG5pbXBvcnQgeyBGaWxlU3lzdGVtQWRhcHRlciwgRnV6enlTdWdnZXN0TW9kYWwsIE5vdGljZSwgUGx1Z2luLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nLCBTdWdnZXN0TW9kYWwsIFRGaWxlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgc2ltcGxlR2l0LCB7IEZpbGVTdGF0dXNSZXN1bHQsIFNpbXBsZUdpdCB9IGZyb20gXCJzaW1wbGUtZ2l0XCI7XG5cbmVudW0gUGx1Z2luU3RhdGUge1xuICAgIGlkbGUsXG4gICAgc3RhdHVzLFxuICAgIHB1bGwsXG4gICAgYWRkLFxuICAgIGNvbW1pdCxcbiAgICBwdXNoLFxuICAgIGNvbmZsaWN0ZWQsXG59XG5pbnRlcmZhY2UgT2JzaWRpYW5HaXRTZXR0aW5ncyB7XG4gICAgY29tbWl0TWVzc2FnZTogc3RyaW5nO1xuICAgIGNvbW1pdERhdGVGb3JtYXQ6IHN0cmluZztcbiAgICBhdXRvU2F2ZUludGVydmFsOiBudW1iZXI7XG4gICAgYXV0b1B1bGxJbnRlcnZhbDogbnVtYmVyO1xuICAgIGF1dG9QdWxsT25Cb290OiBib29sZWFuO1xuICAgIGRpc2FibGVQdXNoOiBib29sZWFuO1xuICAgIHB1bGxCZWZvcmVQdXNoOiBib29sZWFuO1xuICAgIGRpc2FibGVQb3B1cHM6IGJvb2xlYW47XG4gICAgbGlzdENoYW5nZWRGaWxlc0luTWVzc2FnZUJvZHk6IGJvb2xlYW47XG59XG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBPYnNpZGlhbkdpdFNldHRpbmdzID0ge1xuICAgIGNvbW1pdE1lc3NhZ2U6IFwidmF1bHQgYmFja3VwOiB7e2RhdGV9fVwiLFxuICAgIGNvbW1pdERhdGVGb3JtYXQ6IFwiWVlZWS1NTS1ERCBISDptbTpzc1wiLFxuICAgIGF1dG9TYXZlSW50ZXJ2YWw6IDAsXG4gICAgYXV0b1B1bGxJbnRlcnZhbDogMCxcbiAgICBhdXRvUHVsbE9uQm9vdDogZmFsc2UsXG4gICAgZGlzYWJsZVB1c2g6IGZhbHNlLFxuICAgIHB1bGxCZWZvcmVQdXNoOiB0cnVlLFxuICAgIGRpc2FibGVQb3B1cHM6IGZhbHNlLFxuICAgIGxpc3RDaGFuZ2VkRmlsZXNJbk1lc3NhZ2VCb2R5OiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic2lkaWFuR2l0IGV4dGVuZHMgUGx1Z2luIHtcbiAgICBnaXQ6IFNpbXBsZUdpdDtcbiAgICBzZXR0aW5nczogT2JzaWRpYW5HaXRTZXR0aW5ncztcbiAgICBzdGF0dXNCYXI6IFN0YXR1c0JhcjtcbiAgICBzdGF0ZTogUGx1Z2luU3RhdGU7XG4gICAgaW50ZXJ2YWxJREJhY2t1cDogbnVtYmVyO1xuICAgIGludGVydmFsSURQdWxsOiBudW1iZXI7XG4gICAgbGFzdFVwZGF0ZTogbnVtYmVyO1xuICAgIGdpdFJlYWR5ID0gZmFsc2U7XG4gICAgY29uZmxpY3RPdXRwdXRGaWxlID0gXCJjb25mbGljdC1maWxlcy1vYnNpZGlhbi1naXQubWRcIjtcblxuICAgIHNldFN0YXRlKHN0YXRlOiBQbHVnaW5TdGF0ZSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyLmRpc3BsYXkoKTtcbiAgICB9XG5cbiAgICBhc3luYyBvbmxvYWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2FkaW5nICcgKyB0aGlzLm1hbmlmZXN0Lm5hbWUgKyBcIiBwbHVnaW5cIik7XG4gICAgICAgIGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XG5cbiAgICAgICAgdGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBPYnNpZGlhbkdpdFNldHRpbmdzVGFiKHRoaXMuYXBwLCB0aGlzKSk7XG5cbiAgICAgICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgICAgICAgIGlkOiBcInB1bGxcIixcbiAgICAgICAgICAgIG5hbWU6IFwiUHVsbCBmcm9tIHJlbW90ZSByZXBvc2l0b3J5XCIsXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5wdWxsQ2hhbmdlc0Zyb21SZW1vdGUoKSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgICAgICAgIGlkOiBcInB1c2hcIixcbiAgICAgICAgICAgIG5hbWU6IFwiQ29tbWl0ICphbGwqIGNoYW5nZXMgYW5kIHB1c2ggdG8gcmVtb3RlIHJlcG9zaXRvcnlcIixcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLmNyZWF0ZUJhY2t1cChmYWxzZSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgICAgICAgIGlkOiBcImNvbW1pdC1wdXNoLXNwZWNpZmllZC1tZXNzYWdlXCIsXG4gICAgICAgICAgICBuYW1lOiBcIkNvbW1pdCBhbmQgcHVzaCBhbGwgY2hhbmdlcyB3aXRoIHNwZWNpZmllZCBtZXNzYWdlXCIsXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4gbmV3IEN1c3RvbU1lc3NhZ2VNb2RhbCh0aGlzKS5vcGVuKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgICAgICAgIGlkOiBcImxpc3QtY2hhbmdlZC1maWxlc1wiLFxuICAgICAgICAgICAgbmFtZTogXCJMaXN0IGNoYW5nZWQgZmlsZXNcIixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gYXdhaXQgdGhpcy5naXQuc3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgbmV3IENoYW5nZWRGaWxlc01vZGFsKHRoaXMsIHN0YXR1cy5maWxlcykub3BlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gaW5pdCBzdGF0dXNCYXJcbiAgICAgICAgbGV0IHN0YXR1c0JhckVsID0gdGhpcy5hZGRTdGF0dXNCYXJJdGVtKCk7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyID0gbmV3IFN0YXR1c0JhcihzdGF0dXNCYXJFbCwgdGhpcyk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJJbnRlcnZhbChcbiAgICAgICAgICAgIHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnN0YXR1c0Jhci5kaXNwbGF5KCksIDEwMDApXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgYXN5bmMgb251bmxvYWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1bmxvYWRpbmcgJyArIHRoaXMubWFuaWZlc3QubmFtZSArIFwiIHBsdWdpblwiKTtcbiAgICB9XG4gICAgYXN5bmMgbG9hZFNldHRpbmdzKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9TRVRUSU5HUywgYXdhaXQgdGhpcy5sb2FkRGF0YSgpKTtcbiAgICB9XG4gICAgYXN5bmMgc2F2ZVNldHRpbmdzKCkge1xuICAgICAgICBhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xuICAgIH1cblxuICAgIGFzeW5jIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICghdGhpcy5pc0dpdEluc3RhbGxlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlFcnJvcihcIkNhbm5vdCBydW4gZ2l0IGNvbW1hbmRcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGFkYXB0ZXIgPSB0aGlzLmFwcC52YXVsdC5hZGFwdGVyIGFzIEZpbGVTeXN0ZW1BZGFwdGVyO1xuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGFkYXB0ZXIuZ2V0QmFzZVBhdGgoKTtcblxuICAgICAgICAgICAgdGhpcy5naXQgPSBzaW1wbGVHaXQocGF0aCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRSZXBvID0gYXdhaXQgdGhpcy5naXQuY2hlY2tJc1JlcG8oKTtcblxuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkUmVwbykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUVycm9yKFwiVmFsaWQgZ2l0IHJlcG9zaXRvcnkgbm90IGZvdW5kLlwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5naXRSZWFkeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShQbHVnaW5TdGF0ZS5pZGxlKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmF1dG9QdWxsT25Cb290KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHVsbENoYW5nZXNGcm9tUmVtb3RlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYXV0b1NhdmVJbnRlcnZhbCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmFibGVBdXRvQmFja3VwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmF1dG9QdWxsSW50ZXJ2YWwgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlQXV0b1B1bGwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcHVsbENoYW5nZXNGcm9tUmVtb3RlKCk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIGlmICghdGhpcy5naXRSZWFkeSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5pbml0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuZ2l0UmVhZHkpIHJldHVybjtcblxuICAgICAgICBjb25zdCBmaWxlc1VwZGF0ZWQgPSBhd2FpdCB0aGlzLnB1bGwoKTtcbiAgICAgICAgaWYgKGZpbGVzVXBkYXRlZCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheU1lc3NhZ2UoYFB1bGxlZCBuZXcgY2hhbmdlcy4gJHtmaWxlc1VwZGF0ZWR9IGZpbGVzIHVwZGF0ZWRgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheU1lc3NhZ2UoXCJFdmVyeXRoaW5nIGlzIHVwLXRvLWRhdGVcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCB0aGlzLmdpdC5zdGF0dXMoKTtcbiAgICAgICAgaWYgKHN0YXR1cy5jb25mbGljdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUVycm9yKGBZb3UgaGF2ZSAke3N0YXR1cy5jb25mbGljdGVkLmxlbmd0aH0gY29uZmxpY3QgZmlsZXNgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGFzdFVwZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoUGx1Z2luU3RhdGUuaWRsZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlQmFja3VwKGZyb21BdXRvQmFja3VwOiBib29sZWFuLCBjb21taXRNZXNzYWdlPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICghdGhpcy5naXRSZWFkeSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5pbml0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmdpdFJlYWR5KSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShQbHVnaW5TdGF0ZS5zdGF0dXMpO1xuICAgICAgICBsZXQgc3RhdHVzID0gYXdhaXQgdGhpcy5naXQuc3RhdHVzKCk7XG5cblxuICAgICAgICBpZiAoIWZyb21BdXRvQmFja3VwKSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKHRoaXMuY29uZmxpY3RPdXRwdXRGaWxlKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmRlbGV0ZShmaWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGZvciBjb25mbGljdCBmaWxlcyBvbiBhdXRvIGJhY2t1cFxuICAgICAgICBpZiAoZnJvbUF1dG9CYWNrdXAgJiYgc3RhdHVzLmNvbmZsaWN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShQbHVnaW5TdGF0ZS5pZGxlKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUVycm9yKGBEaWQgbm90IGNvbW1pdCwgYmVjYXVzZSB5b3UgaGF2ZSAke3N0YXR1cy5jb25mbGljdGVkLmxlbmd0aH0gY29uZmxpY3QgZmlsZXMuIFBsZWFzZSByZXNvbHZlIHRoZW0gYW5kIGNvbW1pdCBwZXIgY29tbWFuZC5gKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ29uZmxpY3Qoc3RhdHVzLmNvbmZsaWN0ZWQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hhbmdlZEZpbGVzID0gKGF3YWl0IHRoaXMuZ2l0LnN0YXR1cygpKS5maWxlcztcblxuICAgICAgICBpZiAoY2hhbmdlZEZpbGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5hZGQoKTtcbiAgICAgICAgICAgIHN0YXR1cyA9IGF3YWl0IHRoaXMuZ2l0LnN0YXR1cygpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5jb21taXQoY29tbWl0TWVzc2FnZSk7XG5cbiAgICAgICAgICAgIHRoaXMubGFzdFVwZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlNZXNzYWdlKGBDb21taXR0ZWQgJHtzdGF0dXMuc3RhZ2VkLmxlbmd0aH0gZmlsZXNgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheU1lc3NhZ2UoXCJObyBjaGFuZ2VzIHRvIGNvbW1pdFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5kaXNhYmxlUHVzaCkge1xuICAgICAgICAgICAgY29uc3QgdHJhY2tpbmdCcmFuY2ggPSBzdGF0dXMudHJhY2tpbmc7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50QnJhbmNoID0gc3RhdHVzLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIGlmICghdHJhY2tpbmdCcmFuY2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlFcnJvcihcIkRpZCBub3QgcHVzaC4gTm8gdXBzdHJlYW0gYnJhbmNoIGlzIHNldCEgU2VlIFJFQURNRSBmb3IgaW5zdHJ1Y3Rpb25zXCIsIDEwMDAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFBsdWdpblN0YXRlLmlkbGUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmVtb3RlQ2hhbmdlZEZpbGVzID0gKGF3YWl0IHRoaXMuZ2l0LmRpZmZTdW1tYXJ5KFtjdXJyZW50QnJhbmNoLCB0cmFja2luZ0JyYW5jaF0pKS5jaGFuZ2VkO1xuXG4gICAgICAgICAgICAvLyBQcmV2ZW50IHBsdWdpbiB0byBwdWxsL3B1c2ggYXQgZXZlcnkgY2FsbCBvZiBjcmVhdGVCYWNrdXAuIE9ubHkgaWYgdW5wdXNoZWQgY29tbWl0cyBhcmUgcHJlc2VudFxuICAgICAgICAgICAgaWYgKHJlbW90ZUNoYW5nZWRGaWxlcyA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5wdWxsQmVmb3JlUHVzaCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwdWxsZWRGaWxlc0xlbmd0aCA9IGF3YWl0IHRoaXMucHVsbCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHVsbGVkRmlsZXNMZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlNZXNzYWdlKGBQdWxsZWQgJHtwdWxsZWRGaWxlc0xlbmd0aH0gZmlsZXMgZnJvbSByZW1vdGVgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFJlZnJlc2ggYmVjYXVzZSBvZiBwdWxsXG4gICAgICAgICAgICAgICAgc3RhdHVzID0gYXdhaXQgdGhpcy5naXQuc3RhdHVzKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLmNvbmZsaWN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlFcnJvcihgQ2Fubm90IHB1c2guIFlvdSBoYXZlICR7c3RhdHVzLmNvbmZsaWN0ZWQubGVuZ3RofSBjb25mbGljdCBmaWxlc2ApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNvbmZsaWN0KHN0YXR1cy5jb25mbGljdGVkKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbW90ZUNoYW5nZWRGaWxlcyA9IChhd2FpdCB0aGlzLmdpdC5kaWZmU3VtbWFyeShbY3VycmVudEJyYW5jaCwgdHJhY2tpbmdCcmFuY2hdKSkuY2hhbmdlZDtcblxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnB1c2goKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5TWVzc2FnZShgUHVzaGVkICR7cmVtb3RlQ2hhbmdlZEZpbGVzfSBmaWxlcyB0byByZW1vdGVgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheU1lc3NhZ2UoXCJObyBjaGFuZ2VzIHRvIHB1c2hcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShQbHVnaW5TdGF0ZS5pZGxlKTtcbiAgICB9XG5cblxuICAgIC8vIHJlZ2lvbjogbWFpbiBtZXRob2RzXG5cbiAgICBpc0dpdEluc3RhbGxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3N0ZXZldWt4L2dpdC1qcy9pc3N1ZXMvNDAyXG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSBzcGF3blN5bmMoJ2dpdCcsIFsnLS12ZXJzaW9uJ10sIHtcbiAgICAgICAgICAgIHN0ZGlvOiAnaWdub3JlJ1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY29tbWFuZC5lcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihjb21tYW5kLmVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBhc3luYyBhZGQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoUGx1Z2luU3RhdGUuYWRkKTtcbiAgICAgICAgYXdhaXQgdGhpcy5naXQuYWRkKFxuICAgICAgICAgICAgXCIuLypcIixcbiAgICAgICAgICAgIChlcnI6IEVycm9yIHwgbnVsbCkgPT5cbiAgICAgICAgICAgICAgICBlcnIgJiYgdGhpcy5kaXNwbGF5RXJyb3IoYENhbm5vdCBhZGQgZmlsZXM6ICR7ZXJyLm1lc3NhZ2V9YClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhc3luYyBjb21taXQobWVzc2FnZT86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFBsdWdpblN0YXRlLmNvbW1pdCk7XG4gICAgICAgIGxldCBjb21taXRNZXNzYWdlOiBzdHJpbmcgfCBzdHJpbmdbXSA9IG1lc3NhZ2UgPz8gYXdhaXQgdGhpcy5mb3JtYXRDb21taXRNZXNzYWdlKHRoaXMuc2V0dGluZ3MuY29tbWl0TWVzc2FnZSk7XG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmxpc3RDaGFuZ2VkRmlsZXNJbk1lc3NhZ2VCb2R5KSB7XG4gICAgICAgICAgICBjb21taXRNZXNzYWdlID0gW2NvbW1pdE1lc3NhZ2UsIFwiQWZmZWN0ZWQgZmlsZXM6XCIsIChhd2FpdCB0aGlzLmdpdC5zdGF0dXMoKSkuc3RhZ2VkLmpvaW4oXCJcXG5cIildO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMuZ2l0LmNvbW1pdChjb21taXRNZXNzYWdlKTtcbiAgICB9XG5cbiAgICBhc3luYyBwdXNoKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFBsdWdpblN0YXRlLnB1c2gpO1xuICAgICAgICBhd2FpdCB0aGlzLmdpdC5wdXNoKFxuICAgICAgICAgICAgKGVycjogRXJyb3IgfCBudWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgZXJyICYmIHRoaXMuZGlzcGxheUVycm9yKGBQdXNoIGZhaWxlZCAke2Vyci5tZXNzYWdlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMubGFzdFVwZGF0ZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgYXN5bmMgcHVsbCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFBsdWdpblN0YXRlLnB1bGwpO1xuICAgICAgICBjb25zdCBwdWxsUmVzdWx0ID0gYXdhaXQgdGhpcy5naXQucHVsbChbXCItLW5vLXJlYmFzZVwiXSxcbiAgICAgICAgICAgIGFzeW5jIChlcnI6IEVycm9yIHwgbnVsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RXJyb3IoYFB1bGwgZmFpbGVkICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IHRoaXMuZ2l0LnN0YXR1cygpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLmNvbmZsaWN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDb25mbGljdChzdGF0dXMuY29uZmxpY3RlZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubGFzdFVwZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHJldHVybiBwdWxsUmVzdWx0LmZpbGVzLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvLyBlbmRyZWdpb246IG1haW4gbWV0aG9kc1xuXG4gICAgZW5hYmxlQXV0b0JhY2t1cCgpIHtcbiAgICAgICAgY29uc3QgbWludXRlcyA9IHRoaXMuc2V0dGluZ3MuYXV0b1NhdmVJbnRlcnZhbDtcbiAgICAgICAgdGhpcy5pbnRlcnZhbElEQmFja3VwID0gd2luZG93LnNldEludGVydmFsKFxuICAgICAgICAgICAgYXN5bmMgKCkgPT4gYXdhaXQgdGhpcy5jcmVhdGVCYWNrdXAodHJ1ZSksXG4gICAgICAgICAgICBtaW51dGVzICogNjAwMDBcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckludGVydmFsKHRoaXMuaW50ZXJ2YWxJREJhY2t1cCk7XG4gICAgfVxuXG4gICAgZW5hYmxlQXV0b1B1bGwoKSB7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSB0aGlzLnNldHRpbmdzLmF1dG9QdWxsSW50ZXJ2YWw7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxJRFB1bGwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoXG4gICAgICAgICAgICBhc3luYyAoKSA9PiBhd2FpdCB0aGlzLnB1bGxDaGFuZ2VzRnJvbVJlbW90ZSgpLFxuICAgICAgICAgICAgbWludXRlcyAqIDYwMDAwXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJJbnRlcnZhbCh0aGlzLmludGVydmFsSURQdWxsKTtcbiAgICB9XG5cbiAgICBkaXNhYmxlQXV0b0JhY2t1cCgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWxJREJhY2t1cCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSURCYWNrdXApO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGRpc2FibGVBdXRvUHVsbCgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWxJRFB1bGwpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElEUHVsbCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlQ29uZmxpY3QoY29uZmxpY3RlZDogc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShQbHVnaW5TdGF0ZS5jb25mbGljdGVkKTtcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXG4gICAgICAgICAgICBcIiMgQ29uZmxpY3QgZmlsZXNcIixcbiAgICAgICAgICAgIFwiUGxlYXNlIHJlc29sdmUgdGhlbSBhbmQgY29tbWl0IHBlciBjb21tYW5kIChUaGlzIGZpbGUgd2lsbCBiZSBkZWxldGVkIGJlZm9yZSB0aGUgY29tbWl0KS5cIixcbiAgICAgICAgICAgIC4uLmNvbmZsaWN0ZWQubWFwKGUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZSk7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5rID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5maWxlVG9MaW5rdGV4dChmaWxlLCBcIi9cIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgLSBbWyR7bGlua31dXWA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAtIE5vdCBhIGZpbGU6ICR7ZX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMud3JpdGVBbmRPcGVuRmlsZShsaW5lcy5qb2luKFwiXFxuXCIpKTtcbiAgICB9XG5cbiAgICBhc3luYyB3cml0ZUFuZE9wZW5GaWxlKHRleHQ6IHN0cmluZykge1xuICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5hZGFwdGVyLndyaXRlKHRoaXMuY29uZmxpY3RPdXRwdXRGaWxlLCB0ZXh0KTtcblxuICAgICAgICBsZXQgZmlsZUlzQWxyZWFkeU9wZW5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFwcC53b3Jrc3BhY2UuaXRlcmF0ZUFsbExlYXZlcyhsZWFmID0+IHtcbiAgICAgICAgICAgIGlmIChsZWFmLmdldERpc3BsYXlUZXh0KCkgIT0gXCJcIiAmJiB0aGlzLmNvbmZsaWN0T3V0cHV0RmlsZS5zdGFydHNXaXRoKGxlYWYuZ2V0RGlzcGxheVRleHQoKSkpIHtcbiAgICAgICAgICAgICAgICBmaWxlSXNBbHJlYWR5T3BlbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghZmlsZUlzQWxyZWFkeU9wZW5lZCkge1xuICAgICAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dCh0aGlzLmNvbmZsaWN0T3V0cHV0RmlsZSwgXCIvXCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVnaW9uOiBkaXNwbGF5aW5nIC8gZm9ybWF0dGluZyBtZXNzYWdlc1xuICAgIGRpc3BsYXlNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZywgdGltZW91dDogbnVtYmVyID0gNCAqIDEwMDApOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIuZGlzcGxheU1lc3NhZ2UobWVzc2FnZS50b0xvd2VyQ2FzZSgpLCB0aW1lb3V0KTtcblxuICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuZGlzYWJsZVBvcHVwcykge1xuICAgICAgICAgICAgbmV3IE5vdGljZShtZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGBnaXQgb2JzaWRpYW4gbWVzc2FnZTogJHttZXNzYWdlfWApO1xuICAgIH1cbiAgICBkaXNwbGF5RXJyb3IobWVzc2FnZTogc3RyaW5nLCB0aW1lb3V0OiBudW1iZXIgPSAwKTogdm9pZCB7XG4gICAgICAgIG5ldyBOb3RpY2UobWVzc2FnZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBnaXQgb2JzaWRpYW4gZXJyb3I6ICR7bWVzc2FnZX1gKTtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIuZGlzcGxheU1lc3NhZ2UobWVzc2FnZS50b0xvd2VyQ2FzZSgpLCB0aW1lb3V0KTtcbiAgICB9XG5cbiAgICBhc3luYyBmb3JtYXRDb21taXRNZXNzYWdlKHRlbXBsYXRlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBpZiAodGVtcGxhdGUuaW5jbHVkZXMoXCJ7e251bUZpbGVzfX1cIikpIHtcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSBhd2FpdCB0aGlzLmdpdC5zdGF0dXMoKTtcbiAgICAgICAgICAgIGxldCBudW1GaWxlcyA9IHN0YXR1cy5maWxlcy5sZW5ndGg7XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoXCJ7e251bUZpbGVzfX1cIiwgU3RyaW5nKG51bUZpbGVzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGVtcGxhdGUuaW5jbHVkZXMoXCJ7e2ZpbGVzfX1cIikpIHtcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSBhd2FpdCB0aGlzLmdpdC5zdGF0dXMoKTtcblxuICAgICAgICAgICAgbGV0IGNoYW5nZXNldDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmdbXTsgfSA9IHt9O1xuICAgICAgICAgICAgc3RhdHVzLmZpbGVzLmZvckVhY2goKHZhbHVlOiBGaWxlU3RhdHVzUmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmluZGV4IGluIGNoYW5nZXNldCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VzZXRbdmFsdWUuaW5kZXhdLnB1c2godmFsdWUucGF0aCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlc2V0W3ZhbHVlLmluZGV4XSA9IFt2YWx1ZS5wYXRoXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IGNodW5rcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgW2FjdGlvbiwgZmlsZXNdIG9mIE9iamVjdC5lbnRyaWVzKGNoYW5nZXNldCkpIHtcbiAgICAgICAgICAgICAgICBjaHVua3MucHVzaChhY3Rpb24gKyBcIiBcIiArIGZpbGVzLmpvaW4oXCIgXCIpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGZpbGVzID0gY2h1bmtzLmpvaW4oXCIsIFwiKTtcblxuICAgICAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKFwie3tmaWxlc319XCIsIGZpbGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtb21lbnQgPSAod2luZG93IGFzIGFueSkubW9tZW50O1xuICAgICAgICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZShcbiAgICAgICAgICAgIFwie3tkYXRlfX1cIixcbiAgICAgICAgICAgIG1vbWVudCgpLmZvcm1hdCh0aGlzLnNldHRpbmdzLmNvbW1pdERhdGVGb3JtYXQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gZW5kcmVnaW9uOiBkaXNwbGF5aW5nIC8gZm9ybWF0dGluZyBzdHVmZlxufVxuXG5cbmNsYXNzIE9ic2lkaWFuR2l0U2V0dGluZ3NUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgICBkaXNwbGF5KCk6IHZvaWQge1xuICAgICAgICBsZXQgeyBjb250YWluZXJFbCB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgcGx1Z2luOiBPYnNpZGlhbkdpdCA9ICh0aGlzIGFzIGFueSkucGx1Z2luO1xuXG4gICAgICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XG4gICAgICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiaDJcIiwgeyB0ZXh0OiBcIkdpdCBCYWNrdXAgc2V0dGluZ3NcIiB9KTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiVmF1bHQgYmFja3VwIGludGVydmFsIChtaW51dGVzKVwiKVxuICAgICAgICAgICAgLnNldERlc2MoXG4gICAgICAgICAgICAgICAgXCJDb21taXQgYW5kIHB1c2ggY2hhbmdlcyBldmVyeSBYIG1pbnV0ZXMuIFRvIGRpc2FibGUgYXV0b21hdGljIGJhY2t1cCwgc3BlY2lmeSBuZWdhdGl2ZSB2YWx1ZSBvciB6ZXJvIChkZWZhdWx0KVwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgICAgIC5zZXRWYWx1ZShTdHJpbmcocGx1Z2luLnNldHRpbmdzLmF1dG9TYXZlSW50ZXJ2YWwpKVxuICAgICAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKE51bWJlcih2YWx1ZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLmF1dG9TYXZlSW50ZXJ2YWwgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbHVnaW4uc2V0dGluZ3MuYXV0b1NhdmVJbnRlcnZhbCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLmRpc2FibGVBdXRvQmFja3VwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5lbmFibGVBdXRvQmFja3VwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBOb3RpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgQXV0b21hdGljIGJhY2t1cCBlbmFibGVkISBFdmVyeSAke3BsdWdpbi5zZXR0aW5ncy5hdXRvU2F2ZUludGVydmFsfSBtaW51dGVzLmBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MuYXV0b1NhdmVJbnRlcnZhbCA8PSAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5pbnRlcnZhbElEQmFja3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5kaXNhYmxlQXV0b0JhY2t1cCgpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTm90aWNlKFwiQXV0b21hdGljIGJhY2t1cCBkaXNhYmxlZCFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTm90aWNlKFwiUGxlYXNlIHNwZWNpZnkgYSB2YWxpZCBudW1iZXIuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZShcIkF1dG8gcHVsbCBpbnRlcnZhbCAobWludXRlcylcIilcbiAgICAgICAgICAgIC5zZXREZXNjKFxuICAgICAgICAgICAgICAgIFwiUHVsbCBjaGFuZ2VzIGV2ZXJ5IFggbWludXRlcy4gVG8gZGlzYWJsZSBhdXRvbWF0aWMgcHVsbCwgc3BlY2lmeSBuZWdhdGl2ZSB2YWx1ZSBvciB6ZXJvIChkZWZhdWx0KVwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgICAgIC5zZXRWYWx1ZShTdHJpbmcocGx1Z2luLnNldHRpbmdzLmF1dG9QdWxsSW50ZXJ2YWwpKVxuICAgICAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKE51bWJlcih2YWx1ZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLmF1dG9QdWxsSW50ZXJ2YWwgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbHVnaW4uc2V0dGluZ3MuYXV0b1B1bGxJbnRlcnZhbCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLmRpc2FibGVBdXRvUHVsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uZW5hYmxlQXV0b1B1bGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE5vdGljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBBdXRvbWF0aWMgcHVsbCBlbmFibGVkISBFdmVyeSAke3BsdWdpbi5zZXR0aW5ncy5hdXRvUHVsbEludGVydmFsfSBtaW51dGVzLmBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MuYXV0b1B1bGxJbnRlcnZhbCA8PSAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5pbnRlcnZhbElEUHVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uZGlzYWJsZUF1dG9QdWxsKCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJBdXRvbWF0aWMgcHVsbCBkaXNhYmxlZCFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTm90aWNlKFwiUGxlYXNlIHNwZWNpZnkgYSB2YWxpZCBudW1iZXIuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiQ29tbWl0IG1lc3NhZ2VcIilcbiAgICAgICAgICAgIC5zZXREZXNjKFxuICAgICAgICAgICAgICAgIFwiU3BlY2lmeSBjdXN0b20gY29tbWl0IG1lc3NhZ2UuIEF2YWlsYWJsZSBwbGFjZWhvbGRlcnM6IHt7ZGF0ZX19XCIgK1xuICAgICAgICAgICAgICAgIFwiIChzZWUgYmVsb3cpIGFuZCB7e251bUZpbGVzfX0gKG51bWJlciBvZiBjaGFuZ2VkIGZpbGVzIGluIHRoZSBjb21taXQpXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwidmF1bHQgYmFja3VwXCIpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRWYWx1ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5jb21taXRNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwbHVnaW4uc2V0dGluZ3MuY29tbWl0TWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5jb21taXRNZXNzYWdlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAgICAgLnNldE5hbWUoXCJ7e2RhdGV9fSBwbGFjZWhvbGRlciBmb3JtYXRcIilcbiAgICAgICAgICAgIC5zZXREZXNjKCdTcGVjaWZ5IGN1c3RvbSBkYXRlIGZvcm1hdC4gRS5nLiBcIllZWVktTU0tREQgSEg6bW06c3NcIicpXG4gICAgICAgICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihwbHVnaW4uc2V0dGluZ3MuY29tbWl0RGF0ZUZvcm1hdClcbiAgICAgICAgICAgICAgICAgICAgLnNldFZhbHVlKHBsdWdpbi5zZXR0aW5ncy5jb21taXREYXRlRm9ybWF0KVxuICAgICAgICAgICAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MuY29tbWl0RGF0ZUZvcm1hdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiUHJldmlldyBjb21taXQgbWVzc2FnZVwiKVxuICAgICAgICAgICAgLmFkZEJ1dHRvbigoYnV0dG9uKSA9PlxuICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRCdXR0b25UZXh0KFwiUHJldmlld1wiKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbW1pdE1lc3NhZ2VQcmV2aWV3ID0gYXdhaXQgcGx1Z2luLmZvcm1hdENvbW1pdE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MuY29tbWl0TWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBuZXcgTm90aWNlKGAke2NvbW1pdE1lc3NhZ2VQcmV2aWV3fWApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAgICAgLnNldE5hbWUoXCJMaXN0IGZpbGVuYW1lcyBhZmZlY3RlZCBieSBjb21taXQgaW4gdGhlIGNvbW1pdCBib2R5XCIpXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgICAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgIC5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3MubGlzdENoYW5nZWRGaWxlc0luTWVzc2FnZUJvZHkpXG4gICAgICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5saXN0Q2hhbmdlZEZpbGVzSW5NZXNzYWdlQm9keSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiQ3VycmVudCBicmFuY2hcIilcbiAgICAgICAgICAgIC5zZXREZXNjKFwiU3dpdGNoIHRvIGEgZGlmZmVyZW50IGJyYW5jaFwiKVxuICAgICAgICAgICAgLmFkZERyb3Bkb3duKGFzeW5jIChkcm9wZG93bikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJyYW5jaEluZm8gPSBhd2FpdCBwbHVnaW4uZ2l0LmJyYW5jaExvY2FsKCk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBicmFuY2ggb2YgYnJhbmNoSW5mby5hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd24uYWRkT3B0aW9uKGJyYW5jaCwgYnJhbmNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZHJvcGRvd24uc2V0VmFsdWUoYnJhbmNoSW5mby5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICBkcm9wZG93bi5vbkNoYW5nZShhc3luYyAob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHBsdWdpbi5naXQuY2hlY2tvdXQoXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jIChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTm90aWNlKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd24uc2V0VmFsdWUoYnJhbmNoSW5mby5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTm90aWNlKGBDaGVja2VkIG91dCB0byAke29wdGlvbn1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiUHVsbCB1cGRhdGVzIG9uIHN0YXJ0dXBcIilcbiAgICAgICAgICAgIC5zZXREZXNjKFwiQXV0b21hdGljYWxseSBwdWxsIHVwZGF0ZXMgd2hlbiBPYnNpZGlhbiBzdGFydHNcIilcbiAgICAgICAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgICAgICAgICB0b2dnbGVcbiAgICAgICAgICAgICAgICAgICAgLnNldFZhbHVlKHBsdWdpbi5zZXR0aW5ncy5hdXRvUHVsbE9uQm9vdClcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLmF1dG9QdWxsT25Cb290ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAgICAgLnNldE5hbWUoXCJEaXNhYmxlIHB1c2hcIilcbiAgICAgICAgICAgIC5zZXREZXNjKFwiRG8gbm90IHB1c2ggY2hhbmdlcyB0byB0aGUgcmVtb3RlIHJlcG9zaXRvcnlcIilcbiAgICAgICAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgICAgICAgICB0b2dnbGVcbiAgICAgICAgICAgICAgICAgICAgLnNldFZhbHVlKHBsdWdpbi5zZXR0aW5ncy5kaXNhYmxlUHVzaClcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLmRpc2FibGVQdXNoID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAgICAgLnNldE5hbWUoXCJQdWxsIGNoYW5nZXMgYmVmb3JlIHB1c2hcIilcbiAgICAgICAgICAgIC5zZXREZXNjKFwiQ29tbWl0IC0+IHB1bGwgLT4gcHVzaCAoT25seSBpZiBwdXNoaW5nIGlzIGVuYWJsZWQpXCIpXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgICAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgIC5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3MucHVsbEJlZm9yZVB1c2gpXG4gICAgICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5wdWxsQmVmb3JlUHVzaCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiRGlzYWJsZSBub3RpZmljYXRpb25zXCIpXG4gICAgICAgICAgICAuc2V0RGVzYyhcbiAgICAgICAgICAgICAgICBcIkRpc2FibGUgbm90aWZpY2F0aW9ucyBmb3IgZ2l0IG9wZXJhdGlvbnMgdG8gbWluaW1pemUgZGlzdHJhY3Rpb24gKHJlZmVyIHRvIHN0YXR1cyBiYXIgZm9yIHVwZGF0ZXMpXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgICAgICAgICB0b2dnbGVcbiAgICAgICAgICAgICAgICAgICAgLnNldFZhbHVlKHBsdWdpbi5zZXR0aW5ncy5kaXNhYmxlUG9wdXBzKVxuICAgICAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MuZGlzYWJsZVBvcHVwcyA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICB9XG59XG5cbmludGVyZmFjZSBTdGF0dXNCYXJNZXNzYWdlIHtcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgdGltZW91dDogbnVtYmVyO1xufVxuXG5jbGFzcyBTdGF0dXNCYXIge1xuICAgIHB1YmxpYyBtZXNzYWdlczogU3RhdHVzQmFyTWVzc2FnZVtdID0gW107XG4gICAgcHVibGljIGN1cnJlbnRNZXNzYWdlOiBTdGF0dXNCYXJNZXNzYWdlO1xuICAgIHB1YmxpYyBsYXN0TWVzc2FnZVRpbWVzdGFtcDogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBzdGF0dXNCYXJFbDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBwbHVnaW46IE9ic2lkaWFuR2l0O1xuXG4gICAgY29uc3RydWN0b3Ioc3RhdHVzQmFyRWw6IEhUTUxFbGVtZW50LCBwbHVnaW46IE9ic2lkaWFuR2l0KSB7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyRWwgPSBzdGF0dXNCYXJFbDtcbiAgICAgICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gICAgfVxuXG4gICAgcHVibGljIGRpc3BsYXlNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZywgdGltZW91dDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZXMucHVzaCh7XG4gICAgICAgICAgICBtZXNzYWdlOiBgZ2l0OiAke21lc3NhZ2Uuc2xpY2UoMCwgMTAwKX1gLFxuICAgICAgICAgICAgdGltZW91dDogdGltZW91dCxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNwbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5tZXNzYWdlcy5sZW5ndGggPiAwICYmICF0aGlzLmN1cnJlbnRNZXNzYWdlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNZXNzYWdlID0gdGhpcy5tZXNzYWdlcy5zaGlmdCgpO1xuICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXJFbC5zZXRUZXh0KHRoaXMuY3VycmVudE1lc3NhZ2UubWVzc2FnZSk7XG4gICAgICAgICAgICB0aGlzLmxhc3RNZXNzYWdlVGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRNZXNzYWdlKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlQWdlID0gRGF0ZS5ub3coKSAtIHRoaXMubGFzdE1lc3NhZ2VUaW1lc3RhbXA7XG4gICAgICAgICAgICBpZiAobWVzc2FnZUFnZSA+PSB0aGlzLmN1cnJlbnRNZXNzYWdlLnRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNZXNzYWdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RNZXNzYWdlVGltZXN0YW1wID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVN0YXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGRpc3BsYXlTdGF0ZSgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnBsdWdpbi5zdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSBQbHVnaW5TdGF0ZS5pZGxlOlxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUZyb21Ob3codGhpcy5wbHVnaW4ubGFzdFVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBsdWdpblN0YXRlLnN0YXR1czpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoXCJnaXQ6IGNoZWNraW5nIHJlcG8gc3RhdHVzLi5cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBsdWdpblN0YXRlLmFkZDpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoXCJnaXQ6IGFkZGluZyBmaWxlcyB0byByZXBvLi5cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBsdWdpblN0YXRlLmNvbW1pdDpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoXCJnaXQ6IGNvbW1pdHRpbmcgY2hhbmdlcy4uXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQbHVnaW5TdGF0ZS5wdXNoOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyRWwuc2V0VGV4dChcImdpdDogcHVzaGluZyBjaGFuZ2VzLi5cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBsdWdpblN0YXRlLnB1bGw6XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXJFbC5zZXRUZXh0KFwiZ2l0OiBwdWxsaW5nIGNoYW5nZXMuLlwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUGx1Z2luU3RhdGUuY29uZmxpY3RlZDpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoXCJnaXQ6IHlvdSBoYXZlIGNvbmZsaWN0IGZpbGVzLi5cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyRWwuc2V0VGV4dChcImdpdDogZmFpbGVkIG9uIGluaXRpYWxpemF0aW9uIVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZGlzcGxheUZyb21Ob3codGltZXN0YW1wOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRpbWVzdGFtcCkge1xuICAgICAgICAgICAgbGV0IG1vbWVudCA9ICh3aW5kb3cgYXMgYW55KS5tb21lbnQ7XG4gICAgICAgICAgICBsZXQgZnJvbU5vdyA9IG1vbWVudCh0aW1lc3RhbXApLmZyb21Ob3coKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyRWwuc2V0VGV4dChgZ2l0OiBsYXN0IHVwZGF0ZSAke2Zyb21Ob3d9Li5gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyRWwuc2V0VGV4dChgZ2l0OiByZWFkeWApO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgQ3VzdG9tTWVzc2FnZU1vZGFsIGV4dGVuZHMgU3VnZ2VzdE1vZGFsPHN0cmluZz4ge1xuICAgIHBsdWdpbjogT2JzaWRpYW5HaXQ7XG5cbiAgICBjb25zdHJ1Y3RvcihwbHVnaW46IE9ic2lkaWFuR2l0KSB7XG4gICAgICAgIHN1cGVyKHBsdWdpbi5hcHApO1xuICAgICAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlcihcIlR5cGUgeW91ciBtZXNzYWdlIGFuZCBzZWxlY3Qgb3B0aW9uYWwgdGhlIHZlcnNpb24gd2l0aCB0aGUgYWRkZWQgZGF0ZS5cIik7XG4gICAgfVxuXG5cbiAgICBnZXRTdWdnZXN0aW9ucyhxdWVyeTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCBkYXRlID0gKHdpbmRvdyBhcyBhbnkpLm1vbWVudCgpLmZvcm1hdCh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jb21taXREYXRlRm9ybWF0KTtcbiAgICAgICAgaWYgKHF1ZXJ5ID09IFwiXCIpIHF1ZXJ5ID0gXCIuLi5cIjtcbiAgICAgICAgcmV0dXJuIFtxdWVyeSwgYCR7ZGF0ZX06ICR7cXVlcnl9YCwgYCR7cXVlcnl9OiAke2RhdGV9YF07XG4gICAgfVxuXG4gICAgcmVuZGVyU3VnZ2VzdGlvbih2YWx1ZTogc3RyaW5nLCBlbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgZWwuaW5uZXJUZXh0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgb25DaG9vc2VTdWdnZXN0aW9uKGl0ZW06IHN0cmluZywgXzogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wbHVnaW4uY3JlYXRlQmFja3VwKGZhbHNlLCBpdGVtKTtcbiAgICB9XG5cbn1cbmNsYXNzIENoYW5nZWRGaWxlc01vZGFsIGV4dGVuZHMgRnV6enlTdWdnZXN0TW9kYWw8RmlsZVN0YXR1c1Jlc3VsdD4ge1xuICAgIHBsdWdpbjogT2JzaWRpYW5HaXQ7XG4gICAgY2hhbmdlZEZpbGVzOiBGaWxlU3RhdHVzUmVzdWx0W107XG5cbiAgICBjb25zdHJ1Y3RvcihwbHVnaW46IE9ic2lkaWFuR2l0LCBjaGFuZ2VkRmlsZXM6IEZpbGVTdGF0dXNSZXN1bHRbXSkge1xuICAgICAgICBzdXBlcihwbHVnaW4uYXBwKTtcbiAgICAgICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gICAgICAgIHRoaXMuY2hhbmdlZEZpbGVzID0gY2hhbmdlZEZpbGVzO1xuICAgICAgICB0aGlzLnNldFBsYWNlaG9sZGVyKFwiT25seSBmaWxlcyBpbiB2YXVsdCBjYW4gYmUgb3BlbmVuZCFcIik7XG4gICAgfVxuXG4gICAgZ2V0SXRlbXMoKTogRmlsZVN0YXR1c1Jlc3VsdFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlZEZpbGVzO1xuICAgIH1cblxuICAgIGdldEl0ZW1UZXh0KGl0ZW06IEZpbGVTdGF0dXNSZXN1bHQpOiBzdHJpbmcge1xuICAgICAgICBpZiAoaXRlbS5pbmRleCA9PSBcIj9cIiAmJiBpdGVtLndvcmtpbmdfZGlyID09IFwiP1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gYFVudHJhY2tlZCB8ICR7aXRlbS5wYXRofWA7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgd29ya2luZ19kaXIgPSBcIlwiO1xuICAgICAgICBsZXQgaW5kZXggPSBcIlwiO1xuXG4gICAgICAgIGlmIChpdGVtLndvcmtpbmdfZGlyICE9IFwiIFwiKSB3b3JraW5nX2RpciA9IGBXb3JraW5nIGRpcjogJHtpdGVtLndvcmtpbmdfZGlyfSBgO1xuICAgICAgICBpZiAoaXRlbS5pbmRleCAhPSBcIiBcIikgaW5kZXggPSBgSW5kZXg6ICR7aXRlbS5pbmRleH1gO1xuXG4gICAgICAgIHJldHVybiBgJHt3b3JraW5nX2Rpcn0ke2luZGV4fSB8ICR7aXRlbS5wYXRofWA7XG4gICAgfVxuXG4gICAgb25DaG9vc2VJdGVtKGl0ZW06IEZpbGVTdGF0dXNSZXN1bHQsIF86IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnBsdWdpbi5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaXJzdExpbmtwYXRoRGVzdChpdGVtLnBhdGgsIFwiXCIpID09IG51bGwpIHtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJDYW4ndCBvcGVuIGZpbGUgaW4gT2JzaWRpYW5cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChpdGVtLnBhdGgsIFwiL1wiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJnaXRfZXJyb3JfMSIsInJlcXVpcmUkJDAiLCJvcyIsInR0eSIsInV0aWwiLCJyZXF1aXJlJCQxIiwidGhpcyIsImZzXzEiLCJmaWxlX2V4aXN0c18xIiwidXRpbF8xIiwiYXJndW1lbnRfZmlsdGVyc18xIiwicmVxdWlyZSQkMiIsInJlcXVpcmUkJDMiLCJyZXF1aXJlJCQ0IiwicmVxdWlyZSQkNSIsInJlcXVpcmUkJDYiLCJyZXF1aXJlJCQ3IiwidXRpbHNfMSIsInRhc2tfY29uZmlndXJhdGlvbl9lcnJvcl8xIiwidGFza18xIiwiQ2xlYW5TdW1tYXJ5XzEiLCJjaGVja19pc19yZXBvXzEiLCJjbGVhbl8xIiwiZ2l0X2NvbnN0cnVjdF9lcnJvcl8xIiwiZ2l0X3BsdWdpbl9lcnJvcl8xIiwiZ2l0X3Jlc3BvbnNlX2Vycm9yXzEiLCJyZXNldF8xIiwiZGVidWdfMSIsImdpdF9sb2dnZXJfMSIsInRhc2tzX3BlbmRpbmdfcXVldWVfMSIsInRhc2siLCJnaXRFcnJvciIsImNoaWxkX3Byb2Nlc3NfMSIsImdpdF9leGVjdXRvcl9jaGFpbl8xIiwicGFyc2VfcmVtb3RlX29iamVjdHNfMSIsInBhcnNlX3JlbW90ZV9tZXNzYWdlc18xIiwicGFyc2VfcHVzaF8xIiwidGFza19jYWxsYmFja18xIiwicHVzaF8xIiwicHJvbWlzZV9kZWZlcnJlZF8xIiwiQnJhbmNoRGVsZXRlU3VtbWFyeV8xIiwiQnJhbmNoU3VtbWFyeV8xIiwicGFyc2VfYnJhbmNoX2RlbGV0ZV8xIiwicGFyc2VfYnJhbmNoXzEiLCJDaGVja0lnbm9yZV8xIiwicGFyc2VfY29tbWl0XzEiLCJwYXJzZV9kaWZmX3N1bW1hcnlfMSIsInBhcnNlX2ZldGNoXzEiLCJwYXJzZV9saXN0X2xvZ19zdW1tYXJ5XzEiLCJNZXJnZVN1bW1hcnlfMSIsInBhcnNlX3B1bGxfMSIsInBhcnNlX21lcmdlXzEiLCJwYXJzZV9tb3ZlXzEiLCJHZXRSZW1vdGVTdW1tYXJ5XzEiLCJsb2dfMSIsInJlcXVpcmUkJDgiLCJyZXF1aXJlJCQ5IiwicmVxdWlyZSQkMTAiLCJyZXF1aXJlJCQxMSIsInJlcXVpcmUkJDEyIiwicmVxdWlyZSQkMTMiLCJyZXF1aXJlJCQxNCIsInJlcXVpcmUkJDE1IiwicmVxdWlyZSQkMTYiLCJyZXF1aXJlJCQxNyIsInJlcXVpcmUkJDE4IiwicmVxdWlyZSQkMTkiLCJyZXF1aXJlJCQyMCIsInJlcXVpcmUkJDIxIiwicmVxdWlyZSQkMjIiLCJyZXF1aXJlJCQyMyIsInJlcXVpcmUkJDI0IiwicmVxdWlyZSQkMjUiLCJyZXF1aXJlJCQyNiIsInJlcXVpcmUkJDI3IiwicmVxdWlyZSQkMjgiLCJwbHVnaW5zIiwicGx1Z2luc18xIiwiR2l0IiwiZ2l0X2ZhY3RvcnlfMSIsInNpbXBsZUdpdCIsInNwYXduU3luYyIsIlRGaWxlIiwiTm90aWNlIiwiUGx1Z2luIiwiU2V0dGluZyIsIlBsdWdpblNldHRpbmdUYWIiLCJTdWdnZXN0TW9kYWwiLCJGdXp6eVN1Z2dlc3RNb2RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNuQyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYztBQUN6QyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDcEYsUUFBUSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDMUcsSUFBSSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBQ0Y7QUFDTyxTQUFTLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2hDLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxVQUFVLElBQUksQ0FBQyxLQUFLLElBQUk7QUFDN0MsUUFBUSxNQUFNLElBQUksU0FBUyxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyxDQUFDO0FBQ2xHLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QixJQUFJLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUMzQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekYsQ0FBQztBQXVDRDtBQUNPLFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRTtBQUM3RCxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sS0FBSyxZQUFZLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNoSCxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMvRCxRQUFRLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDbkcsUUFBUSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDdEcsUUFBUSxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDdEgsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUUsS0FBSyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQ0Q7QUFDTyxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzNDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNySCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdKLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDdEUsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDdEIsUUFBUSxJQUFJLENBQUMsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDdEUsUUFBUSxPQUFPLENBQUMsRUFBRSxJQUFJO0FBQ3RCLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekssWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BELFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3pCLGdCQUFnQixLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNO0FBQzlDLGdCQUFnQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFDeEUsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7QUFDakUsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVM7QUFDakUsZ0JBQWdCO0FBQ2hCLG9CQUFvQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFO0FBQ2hJLG9CQUFvQixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQzFHLG9CQUFvQixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUU7QUFDekYsb0JBQW9CLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUN2RixvQkFBb0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVM7QUFDM0MsYUFBYTtBQUNiLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNsRSxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDekYsS0FBSztBQUNMLENBQUM7QUEwREQ7QUFDTyxTQUFTLGFBQWEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFO0FBQ3hDLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7QUFDckUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLElBQUksT0FBTyxFQUFFLENBQUM7QUFDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZLQSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sUUFBUSxTQUFTLEtBQUssQ0FBQztBQUM3QixJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQy9CLFFBQVEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZCLFFBQVEsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDekIsUUFBUSxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzFELEtBQUs7QUFDTCxDQUFDO0FBQ0QsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO0FBQzVCOzs7O0FDbkNBLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELHdCQUF3QixHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ1M7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sZ0JBQWdCLFNBQVNBLFFBQVcsQ0FBQyxRQUFRLENBQUM7QUFDcEQsSUFBSSxXQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsSUFBSSxHQUFHLEVBQUUsT0FBTyxFQUFFO0FBQ2xCLFFBQVEsS0FBSyxDQUFDLFNBQVMsRUFBRSxPQUFPLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakQsUUFBUSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUN2QixLQUFLO0FBQ0wsQ0FBQztBQUNELHdCQUF3QixHQUFHLGdCQUFnQixDQUFDO0FBQzVDOzs7O0FDbENBLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELHlCQUF5QixHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ1E7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxpQkFBaUIsU0FBU0EsUUFBVyxDQUFDLFFBQVEsQ0FBQztBQUNyRCxJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFO0FBQ2pDLFFBQVEsS0FBSyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNsQyxRQUFRLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQzdCLEtBQUs7QUFDTCxDQUFDO0FBQ0QseUJBQXlCLEdBQUcsaUJBQWlCLENBQUM7QUFDOUM7Ozs7QUNuQkEsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsc0JBQXNCLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDVztBQUMzQyxNQUFNLGNBQWMsU0FBU0EsUUFBVyxDQUFDLFFBQVEsQ0FBQztBQUNsRCxJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRTtBQUN2QyxRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDN0IsUUFBUSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUN6QixRQUFRLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQzdCLFFBQVEsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMxRCxLQUFLO0FBQ0wsQ0FBQztBQUNELHNCQUFzQixHQUFHLGNBQWMsQ0FBQztBQUN4Qzs7OztBQ1pBLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELDhCQUE4QixHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ0c7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sc0JBQXNCLFNBQVNBLFFBQVcsQ0FBQyxRQUFRLENBQUM7QUFDMUQsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFO0FBQ3pCLFFBQVEsS0FBSyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNsQyxLQUFLO0FBQ0wsQ0FBQztBQUNELDhCQUE4QixHQUFHLHNCQUFzQixDQUFDO0FBQ3hEOzs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFjLEdBQUcsU0FBUyxHQUFHLEVBQUUsT0FBTyxFQUFFO0FBQ3hDLEVBQUUsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDMUIsRUFBRSxJQUFJLElBQUksR0FBRyxPQUFPLEdBQUcsQ0FBQztBQUN4QixFQUFFLElBQUksSUFBSSxLQUFLLFFBQVEsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUMzQyxJQUFJLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLEdBQUcsTUFBTSxJQUFJLElBQUksS0FBSyxRQUFRLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ2pELElBQUksT0FBTyxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkQsR0FBRztBQUNILEVBQUUsTUFBTSxJQUFJLEtBQUs7QUFDakIsSUFBSSx1REFBdUQ7QUFDM0QsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztBQUN6QixHQUFHLENBQUM7QUFDSixDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEtBQUssQ0FBQyxHQUFHLEVBQUU7QUFDcEIsRUFBRSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BCLEVBQUUsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtBQUN4QixJQUFJLE9BQU87QUFDWCxHQUFHO0FBQ0gsRUFBRSxJQUFJLEtBQUssR0FBRyxrSUFBa0ksQ0FBQyxJQUFJO0FBQ3JKLElBQUksR0FBRztBQUNQLEdBQUcsQ0FBQztBQUNKLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNkLElBQUksT0FBTztBQUNYLEdBQUc7QUFDSCxFQUFFLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvQixFQUFFLElBQUksSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQztBQUM5QyxFQUFFLFFBQVEsSUFBSTtBQUNkLElBQUksS0FBSyxPQUFPLENBQUM7QUFDakIsSUFBSSxLQUFLLE1BQU0sQ0FBQztBQUNoQixJQUFJLEtBQUssS0FBSyxDQUFDO0FBQ2YsSUFBSSxLQUFLLElBQUksQ0FBQztBQUNkLElBQUksS0FBSyxHQUFHO0FBQ1osTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkIsSUFBSSxLQUFLLE9BQU8sQ0FBQztBQUNqQixJQUFJLEtBQUssTUFBTSxDQUFDO0FBQ2hCLElBQUksS0FBSyxHQUFHO0FBQ1osTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkIsSUFBSSxLQUFLLE1BQU0sQ0FBQztBQUNoQixJQUFJLEtBQUssS0FBSyxDQUFDO0FBQ2YsSUFBSSxLQUFLLEdBQUc7QUFDWixNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuQixJQUFJLEtBQUssT0FBTyxDQUFDO0FBQ2pCLElBQUksS0FBSyxNQUFNLENBQUM7QUFDaEIsSUFBSSxLQUFLLEtBQUssQ0FBQztBQUNmLElBQUksS0FBSyxJQUFJLENBQUM7QUFDZCxJQUFJLEtBQUssR0FBRztBQUNaLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25CLElBQUksS0FBSyxTQUFTLENBQUM7QUFDbkIsSUFBSSxLQUFLLFFBQVEsQ0FBQztBQUNsQixJQUFJLEtBQUssTUFBTSxDQUFDO0FBQ2hCLElBQUksS0FBSyxLQUFLLENBQUM7QUFDZixJQUFJLEtBQUssR0FBRztBQUNaLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25CLElBQUksS0FBSyxTQUFTLENBQUM7QUFDbkIsSUFBSSxLQUFLLFFBQVEsQ0FBQztBQUNsQixJQUFJLEtBQUssTUFBTSxDQUFDO0FBQ2hCLElBQUksS0FBSyxLQUFLLENBQUM7QUFDZixJQUFJLEtBQUssR0FBRztBQUNaLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25CLElBQUksS0FBSyxjQUFjLENBQUM7QUFDeEIsSUFBSSxLQUFLLGFBQWEsQ0FBQztBQUN2QixJQUFJLEtBQUssT0FBTyxDQUFDO0FBQ2pCLElBQUksS0FBSyxNQUFNLENBQUM7QUFDaEIsSUFBSSxLQUFLLElBQUk7QUFDYixNQUFNLE9BQU8sQ0FBQyxDQUFDO0FBQ2YsSUFBSTtBQUNKLE1BQU0sT0FBTyxTQUFTLENBQUM7QUFDdkIsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFFBQVEsQ0FBQyxFQUFFLEVBQUU7QUFDdEIsRUFBRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzNCLEVBQUUsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO0FBQ2xCLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDcEMsR0FBRztBQUNILEVBQUUsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO0FBQ2xCLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDcEMsR0FBRztBQUNILEVBQUUsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO0FBQ2xCLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDcEMsR0FBRztBQUNILEVBQUUsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO0FBQ2xCLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDcEMsR0FBRztBQUNILEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQ25CLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLE9BQU8sQ0FBQyxFQUFFLEVBQUU7QUFDckIsRUFBRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzNCLEVBQUUsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO0FBQ2xCLElBQUksT0FBTyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDdkMsR0FBRztBQUNILEVBQUUsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO0FBQ2xCLElBQUksT0FBTyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDeEMsR0FBRztBQUNILEVBQUUsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO0FBQ2xCLElBQUksT0FBTyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDMUMsR0FBRztBQUNILEVBQUUsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO0FBQ2xCLElBQUksT0FBTyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDMUMsR0FBRztBQUNILEVBQUUsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDO0FBQ3BCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFO0FBQ3BDLEVBQUUsSUFBSSxRQUFRLEdBQUcsS0FBSyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDbEMsRUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksUUFBUSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUNqRTs7QUNoS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsS0FBSyxDQUFDLEdBQUcsRUFBRTtBQUNwQixDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO0FBQ2pDLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7QUFDbkMsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUM3QixDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQy9CLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDN0IsQ0FBQyxXQUFXLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUMvQixDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUdDLEVBQWEsQ0FBQztBQUN0QyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQy9CO0FBQ0EsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUk7QUFDakMsRUFBRSxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzlCLEVBQUUsQ0FBQyxDQUFDO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDeEIsQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxTQUFTLFdBQVcsQ0FBQyxTQUFTLEVBQUU7QUFDakMsRUFBRSxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7QUFDZjtBQUNBLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0MsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekQsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDO0FBQ2IsR0FBRztBQUNIO0FBQ0EsRUFBRSxPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hFLEVBQUU7QUFDRixDQUFDLFdBQVcsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFNBQVMsV0FBVyxDQUFDLFNBQVMsRUFBRTtBQUNqQyxFQUFFLElBQUksUUFBUSxDQUFDO0FBQ2YsRUFBRSxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUM7QUFDNUIsRUFBRSxJQUFJLGVBQWUsQ0FBQztBQUN0QixFQUFFLElBQUksWUFBWSxDQUFDO0FBQ25CO0FBQ0EsRUFBRSxTQUFTLEtBQUssQ0FBQyxHQUFHLElBQUksRUFBRTtBQUMxQjtBQUNBLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7QUFDdkIsSUFBSSxPQUFPO0FBQ1gsSUFBSTtBQUNKO0FBQ0EsR0FBRyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUM7QUFDdEI7QUFDQTtBQUNBLEdBQUcsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNuQyxHQUFHLE1BQU0sRUFBRSxHQUFHLElBQUksSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLENBQUM7QUFDeEMsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNsQixHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0FBQ3hCLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDcEIsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ25CO0FBQ0EsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QztBQUNBLEdBQUcsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7QUFDcEM7QUFDQSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkIsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNqQixHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLEtBQUs7QUFDakU7QUFDQSxJQUFJLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtBQUN4QixLQUFLLE9BQU8sR0FBRyxDQUFDO0FBQ2hCLEtBQUs7QUFDTCxJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osSUFBSSxNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JELElBQUksSUFBSSxPQUFPLFNBQVMsS0FBSyxVQUFVLEVBQUU7QUFDekMsS0FBSyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0IsS0FBSyxLQUFLLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdkM7QUFDQTtBQUNBLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDM0IsS0FBSyxLQUFLLEVBQUUsQ0FBQztBQUNiLEtBQUs7QUFDTCxJQUFJLE9BQU8sS0FBSyxDQUFDO0FBQ2pCLElBQUksQ0FBQyxDQUFDO0FBQ047QUFDQTtBQUNBLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzNDO0FBQ0EsR0FBRyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUM7QUFDN0MsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMzQixHQUFHO0FBQ0g7QUFDQSxFQUFFLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzlCLEVBQUUsS0FBSyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDNUMsRUFBRSxLQUFLLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkQsRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUN4QixFQUFFLEtBQUssQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQztBQUN0QztBQUNBLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFO0FBQzFDLEdBQUcsVUFBVSxFQUFFLElBQUk7QUFDbkIsR0FBRyxZQUFZLEVBQUUsS0FBSztBQUN0QixHQUFHLEdBQUcsRUFBRSxNQUFNO0FBQ2QsSUFBSSxJQUFJLGNBQWMsS0FBSyxJQUFJLEVBQUU7QUFDakMsS0FBSyxPQUFPLGNBQWMsQ0FBQztBQUMzQixLQUFLO0FBQ0wsSUFBSSxJQUFJLGVBQWUsS0FBSyxXQUFXLENBQUMsVUFBVSxFQUFFO0FBQ3BELEtBQUssZUFBZSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUM7QUFDOUMsS0FBSyxZQUFZLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuRCxLQUFLO0FBQ0w7QUFDQSxJQUFJLE9BQU8sWUFBWSxDQUFDO0FBQ3hCLElBQUk7QUFDSixHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUk7QUFDYixJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUM7QUFDdkIsSUFBSTtBQUNKLEdBQUcsQ0FBQyxDQUFDO0FBQ0w7QUFDQTtBQUNBLEVBQUUsSUFBSSxPQUFPLFdBQVcsQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO0FBQzlDLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMzQixHQUFHO0FBQ0g7QUFDQSxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQ2YsRUFBRTtBQUNGO0FBQ0EsQ0FBQyxTQUFTLE1BQU0sQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFO0FBQ3ZDLEVBQUUsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksT0FBTyxTQUFTLEtBQUssV0FBVyxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztBQUNsSCxFQUFFLFFBQVEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUMxQixFQUFFLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxTQUFTLE1BQU0sQ0FBQyxVQUFVLEVBQUU7QUFDN0IsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQy9CLEVBQUUsV0FBVyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDdEM7QUFDQSxFQUFFLFdBQVcsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLEVBQUUsV0FBVyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDekI7QUFDQSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ1IsRUFBRSxNQUFNLEtBQUssR0FBRyxDQUFDLE9BQU8sVUFBVSxLQUFLLFFBQVEsR0FBRyxVQUFVLEdBQUcsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNuRixFQUFFLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDM0I7QUFDQSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzVCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUNsQjtBQUNBLElBQUksU0FBUztBQUNiLElBQUk7QUFDSjtBQUNBLEdBQUcsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQy9DO0FBQ0EsR0FBRyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7QUFDOUIsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3pFLElBQUksTUFBTTtBQUNWLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQy9ELElBQUk7QUFDSixHQUFHO0FBQ0gsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxTQUFTLE9BQU8sR0FBRztBQUNwQixFQUFFLE1BQU0sVUFBVSxHQUFHO0FBQ3JCLEdBQUcsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7QUFDeEMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQztBQUMxRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLEVBQUUsT0FBTyxVQUFVLENBQUM7QUFDcEIsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFNBQVMsT0FBTyxDQUFDLElBQUksRUFBRTtBQUN4QixFQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO0FBQ3JDLEdBQUcsT0FBTyxJQUFJLENBQUM7QUFDZixHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ1IsRUFBRSxJQUFJLEdBQUcsQ0FBQztBQUNWO0FBQ0EsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDNUQsR0FBRyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3hDLElBQUksT0FBTyxLQUFLLENBQUM7QUFDakIsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzVELEdBQUcsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUN4QyxJQUFJLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQSxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQ2YsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFNBQVMsV0FBVyxDQUFDLE1BQU0sRUFBRTtBQUM5QixFQUFFLE9BQU8sTUFBTSxDQUFDLFFBQVEsRUFBRTtBQUMxQixJQUFJLFNBQVMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDOUMsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxTQUFTLE1BQU0sQ0FBQyxHQUFHLEVBQUU7QUFDdEIsRUFBRSxJQUFJLEdBQUcsWUFBWSxLQUFLLEVBQUU7QUFDNUIsR0FBRyxPQUFPLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQztBQUNuQyxHQUFHO0FBQ0gsRUFBRSxPQUFPLEdBQUcsQ0FBQztBQUNiLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxTQUFTLE9BQU8sR0FBRztBQUNwQixFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUlBQXVJLENBQUMsQ0FBQztBQUN4SixFQUFFO0FBQ0Y7QUFDQSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEM7QUFDQSxDQUFDLE9BQU8sV0FBVyxDQUFDO0FBQ3BCLENBQUM7QUFDRDtBQUNBLFVBQWMsR0FBRyxLQUFLOzs7QUNqUnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixHQUFHLFVBQVUsQ0FBQztBQUNoQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDcEIsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO0FBQzlCLGVBQWUsR0FBRyxZQUFZLEVBQUUsQ0FBQztBQUNqQyxlQUFlLEdBQUcsQ0FBQyxNQUFNO0FBQ3pCLENBQUMsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ3BCO0FBQ0EsQ0FBQyxPQUFPLE1BQU07QUFDZCxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDZixHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDakIsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLHVJQUF1SSxDQUFDLENBQUM7QUFDekosR0FBRztBQUNILEVBQUUsQ0FBQztBQUNILENBQUMsR0FBRyxDQUFDO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsR0FBRztBQUNqQixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7QUFDVixDQUFDLFNBQVM7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RUFBRSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxLQUFLQSxLQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDM0gsSUFBSSxNQUFNLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLEtBQUtBLEtBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSUEsS0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzlKLElBQUksTUFBTSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxLQUFLQSxLQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUlBLEtBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSUEsS0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzNNLElBQUksTUFBTSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxLQUFLQSxLQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUlBLEtBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNoSyxJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksS0FBS0EsS0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFF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
