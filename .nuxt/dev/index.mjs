import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, getRequestURL, getResponseHeader, getResponseStatus, createError, getRequestHost, getRequestProtocol, setHeader, getQuery as getQuery$1, getHeader, readBody, lazyEventHandler, useBase, createApp, createRouter as createRouter$1, toNodeListener, getRouterParam, getResponseStatusText } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/h3/dist/index.mjs';
import { Server } from 'node:http';
import { resolve as resolve$1, dirname, join } from 'node:path';
import nodeCrypto from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import { escapeHtml } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/@vue/shared/dist/shared.cjs.js';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withTrailingSlash, joinRelativeURL, hasProtocol, withHttps, withoutProtocol, withLeadingSlash, withoutTrailingSlash, withBase } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/ufo/dist/index.mjs';
import { renderToString } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/vue/server-renderer/index.mjs';
import destr, { destr as destr$1 } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/destr/dist/index.mjs';
import { createHooks } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/unstorage/drivers/fs.mjs';
import { digest } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/klona/dist/index.mjs';
import defu, { defuFn, defu as defu$1, createDefu } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/scule/dist/index.mjs';
import { getContext } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/radix3/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import consola, { consola as consola$1 } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/youch-core/build/index.js';
import { Youch } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/source-map/source-map.js';
import { AsyncLocalStorage } from 'node:async_hooks';
import { stringify, uneval } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/devalue/index.js';
import { captureRawStackTrace, parseRawStackTrace } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/errx/dist/index.js';
import { isVNode, toValue, isRef } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/vue/index.mjs';
import devalue from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/@nuxt/devalue/dist/devalue.mjs';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/unhead/dist/server.mjs';
import { DeprecationsPlugin, PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/unhead/dist/plugins.mjs';
import { walkResolver } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/unhead/dist/utils.mjs';
import { fileURLToPath } from 'node:url';
import { ipxFSStorage, ipxHttpStorage, createIPX, createIPXH3Handler } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/ipx/dist/index.mjs';
import { isAbsolute } from 'file:///Applications/XAMPP/xamppfiles/htdocs/bola95/node_modules/pathe/dist/index.mjs';

const serverAssets = [{"baseName":"server","dir":"/Applications/XAMPP/xamppfiles/htdocs/bola95/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Applications/XAMPP/xamppfiles/htdocs/bola95","watchOptions":{"ignored":[null]}}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Applications/XAMPP/xamppfiles/htdocs/bola95/server","watchOptions":{"ignored":[null]}}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Applications/XAMPP/xamppfiles/htdocs/bola95/.nuxt"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Applications/XAMPP/xamppfiles/htdocs/bola95/.nuxt/cache"}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/Applications/XAMPP/xamppfiles/htdocs/bola95/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/sitemap.xsl": {
        "headers": {
          "Content-Type": "application/xslt+xml"
        }
      },
      "/sitemap.xml": {
        "redirect": {
          "to": "/sitemap_index.xml",
          "statusCode": 307
        }
      },
      "/sitemap_index.xml": {
        "headers": {
          "Content-Type": "text/xml; charset=UTF-8",
          "Cache-Control": "public, max-age=600, must-revalidate",
          "X-Sitemap-Prerendered": "2025-11-03T13:30:18.432Z"
        }
      },
      "/pages-sitemap.xml": {
        "headers": {
          "Content-Type": "text/xml; charset=UTF-8",
          "Cache-Control": "public, max-age=600, must-revalidate",
          "X-Sitemap-Prerendered": "2025-11-03T13:30:18.432Z"
        }
      },
      "/betonozas-sitemap.xml": {
        "headers": {
          "Content-Type": "text/xml; charset=UTF-8",
          "Cache-Control": "public, max-age=600, must-revalidate",
          "X-Sitemap-Prerendered": "2025-11-03T13:30:18.432Z"
        }
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {},
  "sitemap": {
    "isI18nMapped": false,
    "sitemapName": "sitemap.xml",
    "isMultiSitemap": true,
    "excludeAppSources": [],
    "cacheMaxAgeSeconds": 0,
    "autoLastmod": false,
    "defaultSitemapsChunkSize": 1000,
    "sortEntries": true,
    "debug": false,
    "discoverImages": true,
    "discoverVideos": true,
    "isNuxtContentDocumentDriven": false,
    "xsl": "/__sitemap__/style.xsl",
    "xslTips": true,
    "xslColumns": [
      {
        "label": "URL",
        "width": "50%"
      },
      {
        "label": "Images",
        "width": "25%",
        "select": "count(image:image)"
      },
      {
        "label": "Last Updated",
        "width": "25%",
        "select": "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"
      }
    ],
    "credits": true,
    "version": "5.3.5",
    "sitemaps": {
      "index": {
        "sitemapName": "index",
        "_route": "sitemap_index.xml",
        "sitemaps": [],
        "include": [],
        "exclude": []
      },
      "pages": {
        "include": [],
        "exclude": [
          "/_nuxt/**",
          "/_**"
        ],
        "includeAppSources": true,
        "defaults": {
          "priority": 0.7,
          "changefreq": "monthly"
        },
        "sitemapName": "pages",
        "_route": "pages-sitemap.xml",
        "_hasSourceChunk": false
      },
      "betonozas": {
        "include": [],
        "exclude": [
          "/_nuxt/**",
          "/_**"
        ],
        "defaults": {
          "priority": 0.9,
          "changefreq": "daily"
        },
        "sitemapName": "betonozas",
        "_route": "betonozas-sitemap.xml",
        "_hasSourceChunk": 1
      }
    }
  },
  "nuxt-site-config": {
    "stack": [
      {
        "_context": "system",
        "_priority": -15,
        "name": "bola95",
        "env": "development"
      },
      {
        "_context": "package.json",
        "_priority": -10,
        "name": "nuxt-app"
      },
      {
        "_priority": -3,
        "_context": "nuxt-site-config:config",
        "url": "https://aszfaltozas24.hu",
        "trailingSlash": true
      }
    ],
    "version": "2.2.21",
    "debug": false
  },
  "ipx": {
    "baseURL": "/_ipx",
    "alias": {},
    "fs": {
      "dir": [
        "/Applications/XAMPP/xamppfiles/htdocs/bola95/public"
      ]
    },
    "http": {
      "domains": []
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  if (!event) {
    return _sharedAppConfig;
  }
  if (event.context.nitro.appConfig) {
    return event.context.nitro.appConfig;
  }
  const appConfig$1 = klona(appConfig);
  event.context.nitro.appConfig = appConfig$1;
  return appConfig$1;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
  if (event.handled || isJsonRequest(event)) {
    return;
  }
  const defaultRes = await defaultHandler(error, event, { json: true });
  const statusCode = error.statusCode || 500;
  if (statusCode === 404 && defaultRes.status === 302) {
    setResponseHeaders(event, defaultRes.headers);
    setResponseStatus(event, defaultRes.status, defaultRes.statusText);
    return send(event, JSON.stringify(defaultRes.body, null, 2));
  }
  if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) {
    defaultRes.body.stack = defaultRes.body.stack.join("\n");
  }
  const errorObject = defaultRes.body;
  const url = new URL(errorObject.url);
  errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
  errorObject.message ||= "Server Error";
  errorObject.data ||= error.data;
  errorObject.statusMessage ||= error.statusMessage;
  delete defaultRes.headers["content-type"];
  delete defaultRes.headers["content-security-policy"];
  setResponseHeaders(event, defaultRes.headers);
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (event.handled) {
    return;
  }
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
  return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json || !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve$1(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const script = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _eohxHHAmhTxKfn_eH_hHnXvFSP8Ry5Bq9oxcgmhpkk = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const rootDir = "/Applications/XAMPP/xamppfiles/htdocs/bola95";

const appHead = {"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"description","content":"Korszerű gépparkunknak és tapasztalt szakembereinknek köszönhetően bármilyen méretű aszfaltozási, útépítési vagy betonozási projektet rövid határidőn belül, költséghatékonyan és tartós megoldással kivitelezünk."},{"name":"format-detection","content":"telephone=no"},{"name":"robots","content":"index, follow"},{"http-equiv":"Content-Security-Policy","content":"\n            default-src 'self' https: data:;\n            img-src 'self' https: http: data:;\n            font-src 'self' https: data:;\n            style-src 'self' https: 'unsafe-inline';\n            script-src 'self' https: 'unsafe-inline' 'unsafe-eval';\n          "}],"link":[{"rel":"icon","type":"image/x-icon","href":"/favicon.ico"},{"rel":"canonical","href":"https://aszfaltozas24.hu"},{"rel":"preconnect","href":"https://fonts.googleapis.com"},{"rel":"preconnect","href":"https://fonts.gstatic.com"},{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"},{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"}],"style":[],"script":[],"noscript":[],"title":"Bola 95 Kft. – Aszfaltozás | Útépítés | Betonozás | 25 éves tapasztalat","htmlAttrs":{"lang":"hu"}};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appId = "nuxt-app";

const devReducers = {
  VNode: (data) => isVNode(data) ? { type: data.type, props: data.props } : void 0,
  URL: (data) => data instanceof URL ? data.toString() : void 0
};
const asyncContext = getContext("nuxt-dev", { asyncContext: true, AsyncLocalStorage });
const _L0KyEDlsWuEh2U7k9nwetLocbHubdsZi15uVgzX1yg = (nitroApp) => {
  const handler = nitroApp.h3App.handler;
  nitroApp.h3App.handler = (event) => {
    return asyncContext.callAsync({ logs: [], event }, () => handler(event));
  };
  onConsoleLog((_log) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    const rawStack = captureRawStackTrace();
    if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
      return;
    }
    const trace = [];
    let filename = "";
    for (const entry of parseRawStackTrace(rawStack)) {
      if (entry.source === globalThis._importMeta_.url) {
        continue;
      }
      if (EXCLUDE_TRACE_RE.test(entry.source)) {
        continue;
      }
      filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
      trace.push({
        ...entry,
        source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
      });
    }
    const log = {
      ..._log,
      // Pass along filename to allow the client to display more info about where log comes from
      filename,
      // Clean up file names in stack trace
      stack: trace
    };
    ctx.logs.push(log);
  });
  nitroApp.hooks.hook("afterResponse", () => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    return nitroApp.hooks.callHook("dev:ssr-logs", { logs: ctx.logs, path: ctx.event.path });
  });
  nitroApp.hooks.hook("render:html", (htmlContext) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    try {
      const reducers = Object.assign(/* @__PURE__ */ Object.create(null), devReducers, ctx.event.context._payloadReducers);
      htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
    } catch (e) {
      const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
      console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/api/composables/use-nuxt-app#payload.`);
    }
  });
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
  consola$1.addReporter({
    log(logObj) {
      callback(logObj);
    }
  });
  consola$1.wrapConsole();
}

function defineNitroPlugin(def) {
  return def;
}

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

const defineSitemapEventHandler = defineEventHandler;

function normalizeSiteConfig(config) {
  if (typeof config.indexable !== "undefined")
    config.indexable = String(config.indexable) !== "false";
  if (typeof config.trailingSlash !== "undefined" && !config.trailingSlash)
    config.trailingSlash = String(config.trailingSlash) !== "false";
  if (config.url && !hasProtocol(config.url, { acceptRelative: true, strict: false }))
    config.url = withHttps(config.url);
  const keys = Object.keys(config).sort((a, b) => a.localeCompare(b));
  const newConfig = {};
  for (const k of keys)
    newConfig[k] = config[k];
  return newConfig;
}
function createSiteConfigStack(options) {
  const debug = options?.debug || false;
  const stack = [];
  function push(input) {
    if (!input || typeof input !== "object" || Object.keys(input).length === 0)
      return;
    if (!input._context && debug) {
      let lastFunctionName = new Error("tmp").stack?.split("\n")[2].split(" ")[5];
      if (lastFunctionName?.includes("/"))
        lastFunctionName = "anonymous";
      input._context = lastFunctionName;
    }
    const entry = {};
    for (const k in input) {
      const val = input[k];
      if (typeof val !== "undefined" && val !== "")
        entry[k] = val;
    }
    if (Object.keys(entry).filter((k) => !k.startsWith("_")).length > 0)
      stack.push(entry);
  }
  function get(options2) {
    const siteConfig = {};
    if (options2?.debug)
      siteConfig._context = {};
    for (const o in stack.sort((a, b) => (a._priority || 0) - (b._priority || 0))) {
      for (const k in stack[o]) {
        const key = k;
        const val = options2?.resolveRefs ? toValue(stack[o][k]) : stack[o][k];
        if (!k.startsWith("_") && typeof val !== "undefined") {
          siteConfig[k] = val;
          if (options2?.debug)
            siteConfig._context[key] = stack[o]._context?.[key] || stack[o]._context || "anonymous";
        }
      }
    }
    return options2?.skipNormalize ? siteConfig : normalizeSiteConfig(siteConfig);
  }
  return {
    stack,
    push,
    get
  };
}

function envSiteConfig(env) {
  return Object.fromEntries(Object.entries(env).filter(([k]) => k.startsWith("NUXT_SITE_") || k.startsWith("NUXT_PUBLIC_SITE_")).map(([k, v]) => [
    k.replace(/^NUXT_(PUBLIC_)?SITE_/, "").split("_").map((s, i) => i === 0 ? s.toLowerCase() : s[0].toUpperCase() + s.slice(1).toLowerCase()).join(""),
    v
  ]));
}

function useNitroOrigin(e) {
  const cert = process.env.NITRO_SSL_CERT;
  const key = process.env.NITRO_SSL_KEY;
  let host = process.env.NITRO_HOST || process.env.HOST || false;
  let port = false;
  port = process.env.NITRO_PORT || process.env.PORT || "3000";
  let protocol = cert && key || false ? "https" : "http";
  if (process.env.__NUXT_DEV__) {
    const origin = JSON.parse(process.env.__NUXT_DEV__).proxy.url;
    host = withoutProtocol(origin);
    protocol = origin.includes("https") ? "https" : "http";
  } else if (process.env.NUXT_VITE_NODE_OPTIONS) {
    const origin = JSON.parse(process.env.NUXT_VITE_NODE_OPTIONS).baseURL.replace("/__nuxt_vite_node__", "");
    host = withoutProtocol(origin);
    protocol = origin.includes("https") ? "https" : "http";
  } else {
    host = getRequestHost(e, { xForwardedHost: true }) || host;
    protocol = getRequestProtocol(e, { xForwardedProto: true }) || protocol;
  }
  if (typeof host === "string" && host.includes(":")) {
    port = host.split(":").pop();
    host = host.split(":")[0];
  }
  port = port ? `:${port}` : "";
  return withTrailingSlash(`${protocol}://${host}${port}`);
}

function useSiteConfig(e, _options) {
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  const options = defu$1(_options, useRuntimeConfig(e)["nuxt-site-config"], { debug: false });
  return e.context.siteConfig.get(options);
}

function resolveSitePath(pathOrUrl, options) {
  let path = pathOrUrl;
  if (hasProtocol(pathOrUrl, { strict: false, acceptRelative: true })) {
    const parsed = parseURL(pathOrUrl);
    path = parsed.pathname;
  }
  const base = withLeadingSlash(options.base || "/");
  if (base !== "/" && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  let origin = withoutTrailingSlash(options.absolute ? options.siteUrl : "");
  if (base !== "/" && origin.endsWith(base)) {
    origin = origin.slice(0, origin.indexOf(base));
  }
  const baseWithOrigin = options.withBase ? withBase(base, origin || "/") : origin;
  const resolvedUrl = withBase(path, baseWithOrigin);
  return path === "/" && !options.withBase ? withTrailingSlash(resolvedUrl) : fixSlashes(options.trailingSlash, resolvedUrl);
}
function isPathFile(path) {
  const lastSegment = path.split("/").pop();
  return !!(lastSegment || path).match(/\.[0-9a-z]+$/i)?.[0];
}
function fixSlashes(trailingSlash, pathOrUrl) {
  const $url = parseURL(pathOrUrl);
  if (isPathFile($url.pathname))
    return pathOrUrl;
  const fixedPath = trailingSlash ? withTrailingSlash($url.pathname) : withoutTrailingSlash($url.pathname);
  return `${$url.protocol ? `${$url.protocol}//` : ""}${$url.host || ""}${fixedPath}${$url.search || ""}${$url.hash || ""}`;
}

function createSitePathResolver(e, options = {}) {
  const siteConfig = useSiteConfig(e);
  const nitroOrigin = useNitroOrigin(e);
  const nuxtBase = useRuntimeConfig(e).app.baseURL || "/";
  return (path) => {
    return resolveSitePath(path, {
      ...options,
      siteUrl: options.canonical !== false || false ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base: nuxtBase
    });
  };
}

const _uwJCw2jYDv7bBvyTCYQbCFUybHK6W0L9yARBFM4gxo = defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook("render:html", async (ctx, { event }) => {
    const routeOptions = getRouteRules(event);
    const isIsland = process.env.NUXT_COMPONENT_ISLANDS && event.path.startsWith("/__nuxt_island");
    event.path;
    const noSSR = event.context.nuxt?.noSSR || routeOptions.ssr === false && !isIsland || (false);
    if (noSSR) {
      const siteConfig = Object.fromEntries(
        Object.entries(useSiteConfig(event)).map(([k, v]) => [k, toValue(v)])
      );
      ctx.body.push(`<script>window.__NUXT_SITE_CONFIG__=${devalue(siteConfig)}<\/script>`);
    }
  });
});

const plugins = [
  _eohxHHAmhTxKfn_eH_hHnXvFSP8Ry5Bq9oxcgmhpkk,
_L0KyEDlsWuEh2U7k9nwetLocbHubdsZi15uVgzX1yg,
_uwJCw2jYDv7bBvyTCYQbCFUybHK6W0L9yARBFM4gxo
];

const _Alcfwv = defineEventHandler(async (e) => {
  if (e.context.siteConfig)
    return;
  const runtimeConfig = useRuntimeConfig(e);
  const config = runtimeConfig["nuxt-site-config"];
  const nitroApp = useNitroApp();
  const siteConfig = createSiteConfigStack({
    debug: config.debug
  });
  const appConfig = useAppConfig(e);
  const nitroOrigin = useNitroOrigin(e);
  e.context.siteConfigNitroOrigin = nitroOrigin;
  {
    siteConfig.push({
      _context: "nitro:init",
      _priority: -4,
      url: nitroOrigin
    });
  }
  siteConfig.push({
    _context: "runtimeEnv",
    _priority: 0,
    ...runtimeConfig.site || {},
    ...runtimeConfig.public.site || {},
    // @ts-expect-error untyped
    ...envSiteConfig(globalThis._importMeta_.env)
    // just in-case, shouldn't be needed
  });
  const buildStack = config.stack || [];
  buildStack.forEach((c) => siteConfig.push(c));
  if (appConfig.site) {
    siteConfig.push({
      _priority: -2,
      _context: "app:config",
      ...appConfig.site
    });
  }
  if (e.context._nitro.routeRules.site) {
    siteConfig.push({
      _context: "route-rules",
      ...e.context._nitro.routeRules.site
    });
  }
  const ctx = { siteConfig, event: e };
  await nitroApp.hooks.callHook("site-config:init", ctx);
  e.context.siteConfig = ctx.siteConfig;
});

const _L8Gmw2 = defineEventHandler(async (e) => {
  const siteConfig = useSiteConfig(e);
  const nitroOrigin = useNitroOrigin(e);
  const runtimeConfig = useRuntimeConfig(e);
  const stack = e.context.siteConfig.stack;
  setHeader(e, "Content-Type", "application/json");
  return {
    config: siteConfig,
    stack,
    nitroOrigin,
    version: runtimeConfig["nuxt-site-config"].version
  };
});

const merger = createDefu((obj, key, value) => {
  if (Array.isArray(obj[key]) && Array.isArray(value))
    obj[key] = Array.from(/* @__PURE__ */ new Set([...obj[key], ...value]));
  return obj[key];
});
function mergeOnKey(arr, key) {
  const res = {};
  arr.forEach((item) => {
    const k = item[key];
    res[k] = merger(item, res[k] || {});
  });
  return Object.values(res);
}
function splitForLocales(path, locales) {
  const prefix = withLeadingSlash(path).split("/")[1];
  if (locales.includes(prefix))
    return [prefix, path.replace(`/${prefix}`, "")];
  return [null, path];
}
const StringifiedRegExpPattern = /\/(.*?)\/([gimsuy]*)$/;
function normalizeRuntimeFilters(input) {
  return (input || []).map((rule) => {
    if (rule instanceof RegExp || typeof rule === "string")
      return rule;
    const match = rule.regex.match(StringifiedRegExpPattern);
    if (match)
      return new RegExp(match[1], match[2]);
    return false;
  }).filter(Boolean);
}
function createPathFilter(options = {}) {
  const urlFilter = createFilter(options);
  return (loc) => {
    let path = loc;
    try {
      path = parseURL(loc).pathname;
    } catch {
      return false;
    }
    return urlFilter(path);
  };
}
function createFilter(options = {}) {
  const include = options.include || [];
  const exclude = options.exclude || [];
  if (include.length === 0 && exclude.length === 0)
    return () => true;
  return function(path) {
    for (const v of [{ rules: exclude, result: false }, { rules: include, result: true }]) {
      const regexRules = v.rules.filter((r) => r instanceof RegExp);
      if (regexRules.some((r) => r.test(path)))
        return v.result;
      const stringRules = v.rules.filter((r) => typeof r === "string");
      if (stringRules.length > 0) {
        const routes = {};
        for (const r of stringRules) {
          if (r === path)
            return v.result;
          routes[r] = true;
        }
        const routeRulesMatcher = toRouteMatcher(createRouter({ routes, strictTrailingSlash: false }));
        if (routeRulesMatcher.matchAll(path).length > 0)
          return Boolean(v.result);
      }
    }
    return include.length === 0;
  };
}

function useSimpleSitemapRuntimeConfig(e) {
  const clone = JSON.parse(JSON.stringify(useRuntimeConfig(e).sitemap));
  for (const k in clone.sitemaps) {
    const sitemap = clone.sitemaps[k];
    sitemap.include = normalizeRuntimeFilters(sitemap.include);
    sitemap.exclude = normalizeRuntimeFilters(sitemap.exclude);
    clone.sitemaps[k] = sitemap;
  }
  return Object.freeze(clone);
}

function resolve(s, resolvers) {
  if (typeof s === "undefined")
    return s;
  s = typeof s === "string" ? s : s.toString();
  if (hasProtocol(s, { acceptRelative: true, strict: false }))
    return resolvers.fixSlashes(s);
  return resolvers.canonicalUrlResolver(s);
}
function normaliseSitemapUrls(data, resolvers) {
  const entries = data.map((e) => typeof e === "string" ? { loc: e } : e).map((e) => {
    e = { ...e };
    if (e.url) {
      e.loc = e.url;
      delete e.url;
    }
    e.loc = fixSlashes(false, e.loc);
    return e;
  }).filter(Boolean);
  function normaliseEntry(e) {
    if (e.lastmod) {
      const date = normaliseDate(e.lastmod);
      if (date)
        e.lastmod = date;
      else
        delete e.lastmod;
    }
    if (!e.lastmod)
      delete e.lastmod;
    e.loc = resolve(e.loc, resolvers);
    if (e.alternatives) {
      e.alternatives = mergeOnKey(e.alternatives.map((e2) => {
        const a = { ...e2 };
        if (typeof a.href === "string")
          a.href = resolve(a.href, resolvers);
        else if (typeof a.href === "object" && a.href)
          a.href = resolve(a.href.href, resolvers);
        return a;
      }), "hreflang");
    }
    if (e.images) {
      e.images = mergeOnKey(e.images.map((i) => {
        i = { ...i };
        i.loc = resolve(i.loc, resolvers);
        return i;
      }), "loc");
    }
    if (e.videos) {
      e.videos = e.videos.map((v) => {
        v = { ...v };
        if (v.content_loc)
          v.content_loc = resolve(v.content_loc, resolvers);
        return v;
      });
    }
    return e;
  }
  return mergeOnKey(
    entries.map(normaliseEntry).map((e) => ({ ...e, _key: `${e._sitemap || ""}${e.loc}` })),
    "_key"
  );
}
const IS_VALID_W3C_DATE = [
  /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
  /^\d{4}-[01]\d-[0-3]\d$/,
  /^\d{4}-[01]\d$/,
  /^\d{4}$/
];
function isValidW3CDate(d) {
  return IS_VALID_W3C_DATE.some((r) => r.test(d));
}
function normaliseDate(d) {
  if (typeof d === "string") {
    if (d.includes("T")) {
      const t = d.split("T")[1];
      if (!t.includes("+") && !t.includes("-") && !t.includes("Z")) {
        d += "Z";
      }
    }
    if (!isValidW3CDate(d))
      return false;
    d = new Date(d);
    d.setMilliseconds(0);
    if (Number.isNaN(d.getTime()))
      return false;
  }
  const z = (n) => `0${n}`.slice(-2);
  const date = `${d.getUTCFullYear()}-${z(d.getUTCMonth() + 1)}-${z(d.getUTCDate())}`;
  if (d.getUTCHours() > 0 || d.getUTCMinutes() > 0 || d.getUTCSeconds() > 0) {
    return `${date}T${z(d.getUTCHours())}:${z(d.getUTCMinutes())}:${z(d.getUTCSeconds())}Z`;
  }
  return date;
}

async function fetchDataSource(input, event) {
  const context = typeof input.context === "string" ? { name: input.context } : input.context || { name: "fetch" };
  context.tips = context.tips || [];
  const url = typeof input.fetch === "string" ? input.fetch : input.fetch[0];
  const options = typeof input.fetch === "string" ? {} : input.fetch[1];
  const start = Date.now();
  const timeout = options.timeout || 5e3;
  const timeoutController = new AbortController();
  const abortRequestTimeout = setTimeout(() => timeoutController.abort(), timeout);
  let isHtmlResponse = false;
  try {
    const urls = await globalThis.$fetch(url, {
      ...options,
      responseType: "json",
      signal: timeoutController.signal,
      headers: defu$1(options?.headers, {
        Accept: "application/json"
      }, event ? { Host: getRequestHost(event, { xForwardedHost: true }) } : {}),
      // @ts-expect-error untyped
      onResponse({ response }) {
        if (typeof response._data === "string" && response._data.startsWith("<!DOCTYPE html>"))
          isHtmlResponse = true;
      }
    });
    const timeTakenMs = Date.now() - start;
    if (isHtmlResponse) {
      context.tips.push("This is usually because the URL isn't correct or is throwing an error. Please check the URL");
      return {
        ...input,
        context,
        urls: [],
        timeTakenMs,
        error: "Received HTML response instead of JSON"
      };
    }
    return {
      ...input,
      context,
      timeTakenMs,
      urls
    };
  } catch (_err) {
    const error = _err;
    if (error.message.includes("This operation was aborted"))
      context.tips.push("The request has taken too long. Make sure app sources respond within 5 seconds or adjust the timeout fetch option.");
    else
      context.tips.push(`Response returned a status of ${error.response?.status || "unknown"}.`);
    console.error("[@nuxtjs/sitemap] Failed to fetch source.", { url, error });
    return {
      ...input,
      context,
      urls: [],
      error: error.message
    };
  } finally {
    abortRequestTimeout && clearTimeout(abortRequestTimeout);
  }
}
function globalSitemapSources() {
  return Promise.resolve().then(function () { return globalSources; }).then((m) => m.sources);
}
function childSitemapSources(definition) {
  return definition?._hasSourceChunk ? Promise.resolve().then(function () { return childSources; }).then((m) => m.sources[definition.sitemapName] || []) : Promise.resolve([]);
}
async function resolveSitemapSources(sources, event) {
  return (await Promise.all(
    sources.map((source) => {
      if (typeof source === "object" && "urls" in source) {
        return {
          timeTakenMs: 0,
          ...source,
          urls: source.urls
        };
      }
      if (source.fetch)
        return fetchDataSource(source, event);
      return {
        ...source,
        error: "Invalid source"
      };
    })
  )).flat();
}

function normaliseI18nSources(sources, { autoI18n, isI18nMapped, include, exclude }) {
  const filterPath = createPathFilter({
    include,
    exclude
  });
  if (autoI18n && isI18nMapped) {
    return sources.map((s) => {
      const urls = (s.urls || []).map((_url) => {
        const url = typeof _url === "string" ? { loc: _url } : _url;
        url.loc = url.loc || url.url;
        if (!hasProtocol(url.loc, { acceptRelative: true }))
          url.loc = withLeadingSlash(url.loc);
        return url;
      });
      s.urls = urls.map((url) => {
        if (url._sitemap || url._i18nTransform)
          return url;
        if (url.loc && !hasProtocol(url.loc, { acceptRelative: true })) {
          const match = splitForLocales(url.loc, autoI18n.locales.map((l) => l.code));
          const localeCode = match[0] || autoI18n.defaultLocale;
          const pathWithoutPrefix = match[1];
          const locale = autoI18n.locales.find((e) => e.code === localeCode);
          if (locale) {
            if (!url.alternatives) {
              const alternatives = urls.map((u) => {
                if (u._sitemap || u._i18nTransform)
                  return false;
                if (u?.loc) {
                  if (!filterPath(u.loc))
                    return false;
                  const [_localeCode, _pathWithoutPrefix] = splitForLocales(u.loc, autoI18n.locales.map((l) => l.code));
                  if (pathWithoutPrefix === _pathWithoutPrefix) {
                    const entries = [];
                    if (_localeCode === autoI18n.defaultLocale) {
                      entries.push({
                        href: u.loc,
                        hreflang: "x-default"
                      });
                    }
                    entries.push({
                      href: u.loc,
                      hreflang: _localeCode || autoI18n.defaultLocale
                    });
                    return entries;
                  }
                }
                return false;
              }).flat().filter(Boolean);
              if (alternatives.length)
                url.alternatives = alternatives;
            }
            return {
              _sitemap: locale.iso || locale.code,
              ...url
            };
          }
        }
        return url;
      });
      return s;
    });
  }
  return sources;
}
function applyI18nEnhancements(_urls, options) {
  const { autoI18n, include, exclude } = options;
  const filterPath = createPathFilter({
    include,
    exclude
  });
  return _urls.map((e) => {
    if (!e._i18nTransform)
      return e;
    delete e._i18nTransform;
    const parsedURL = parseURL(e.loc);
    const path = withLeadingSlash(parsedURL.pathname + parsedURL.search + parsedURL.hash);
    const match = splitForLocales(path, autoI18n.locales.map((l) => l.code));
    let pathWithoutLocale = path;
    let locale;
    if (match[0]) {
      pathWithoutLocale = match[1] || "/";
      locale = match[0];
    }
    if (locale && true) {
      console.warn("You're providing a locale in the url, but the url is marked as inheritI18n. This will cause issues with the sitemap. Please remove the locale from the url.");
      return e;
    }
    if (autoI18n.differentDomains) {
      return {
        // will force it to pass filter
        _sitemap: options.sitemapName,
        ...e,
        alternatives: [
          {
            // apply default locale domain
            ...autoI18n.locales.find((l) => [l.code, l.iso].includes(autoI18n.defaultLocale)),
            code: "x-default"
          },
          ...autoI18n.locales.filter((l) => !!l.domain)
        ].map((locale2) => {
          return {
            hreflang: locale2.iso || locale2.code,
            href: joinURL(withHttps(locale2.domain), pathWithoutLocale)
          };
        })
      };
    }
    return autoI18n.locales.map((l) => {
      let loc = joinURL(`/${l.code}`, pathWithoutLocale);
      if (autoI18n.differentDomains || ["prefix_and_default", "prefix_except_default"].includes(autoI18n.strategy) && l.code === autoI18n.defaultLocale)
        loc = pathWithoutLocale;
      return {
        _sitemap: options.isI18nMapped ? l.iso || l.code : void 0,
        ...e,
        loc,
        alternatives: [{ code: "x-default" }, ...autoI18n.locales].map((locale2) => {
          const code = locale2.code === "x-default" ? autoI18n.defaultLocale : locale2.code;
          const isDefault = locale2.code === "x-default" || locale2.code === autoI18n.defaultLocale;
          let href = "";
          if (autoI18n.strategy === "prefix") {
            href = joinURL("/", code, pathWithoutLocale);
          } else if (["prefix_and_default", "prefix_except_default"].includes(autoI18n.strategy)) {
            if (isDefault) {
              href = pathWithoutLocale;
            } else {
              href = joinURL("/", code, pathWithoutLocale);
            }
          }
          const hreflang = locale2.iso || locale2.code;
          if (!filterPath(href))
            return false;
          return {
            hreflang,
            href
          };
        }).filter(Boolean)
      };
    });
  }).flat();
}

function filterSitemapUrls(_urls, options) {
  const urlFilter = createFilter({
    include: options.include,
    exclude: options.exclude
  });
  return _urls.filter((e) => {
    let path = e.loc;
    try {
      path = parseURL(e.loc).pathname;
    } catch {
      return false;
    }
    if (!urlFilter(path))
      return false;
    if (options.isMultiSitemap && e._sitemap && options.sitemapName)
      return e._sitemap === options.sitemapName;
    return true;
  });
}

function sortSitemapUrls(urls) {
  return urls.sort(
    (a, b) => {
      const aLoc = typeof a === "string" ? a : a.loc;
      const bLoc = typeof b === "string" ? b : b.loc;
      return aLoc.localeCompare(bLoc, void 0, { numeric: true });
    }
  ).sort((a, b) => {
    const aLoc = (typeof a === "string" ? a : a.loc) || "";
    const bLoc = (typeof b === "string" ? b : b.loc) || "";
    const aSegments = aLoc.split("/").length;
    const bSegments = bLoc.split("/").length;
    if (aSegments > bSegments)
      return 1;
    if (aSegments < bSegments)
      return -1;
    return 0;
  });
}

function resolveKey(k) {
  switch (k) {
    case "images":
      return "image";
    case "videos":
      return "video";
    case "news":
      return "news";
    default:
      return k;
  }
}
function handleObject(key, obj) {
  return [
    `        <${key}:${key}>`,
    ...Object.entries(obj).map(([sk, sv]) => {
      if (key === "video" && Array.isArray(sv)) {
        return sv.map((v) => {
          if (typeof v === "string") {
            return [
              `            `,
              `<${key}:${sk}>`,
              escapeValueForXml(v),
              `</${key}:${sk}>`
            ].join("");
          }
          const attributes = Object.entries(v).filter(([ssk]) => ssk !== sk).map(([ssk, ssv]) => `${ssk}="${escapeValueForXml(ssv)}"`).join(" ");
          return [
            `            <${key}:${sk} ${attributes}>`,
            // value is the same sk
            v[sk],
            `</${key}:${sk}>`
          ].join("");
        }).join("\n");
      }
      if (typeof sv === "object") {
        if (key === "video") {
          const attributes = Object.entries(sv).filter(([ssk]) => ssk !== sk).map(([ssk, ssv]) => `${ssk}="${escapeValueForXml(ssv)}"`).join(" ");
          return [
            `            <${key}:${sk} ${attributes}>`,
            // value is the same sk
            sv[sk],
            `</${key}:${sk}>`
          ].join("");
        }
        return [
          `            <${key}:${sk}>`,
          ...Object.entries(sv).map(([ssk, ssv]) => `                <${key}:${ssk}>${escapeValueForXml(ssv)}</${key}:${ssk}>`),
          `            </${key}:${sk}>`
        ].join("\n");
      }
      return `            <${key}:${sk}>${escapeValueForXml(sv)}</${key}:${sk}>`;
    }),
    `        </${key}:${key}>`
  ].join("\n");
}
function handleArray(key, arr) {
  if (arr.length === 0)
    return false;
  key = resolveKey(key);
  if (key === "alternatives") {
    return arr.map((obj) => [
      `        <xhtml:link rel="alternate" ${Object.entries(obj).map(([sk, sv]) => `${sk}="${escapeValueForXml(sv)}"`).join(" ")} />`
    ].join("\n")).join("\n");
  }
  return arr.map((obj) => handleObject(key, obj)).join("\n");
}
function handleEntry(k, e) {
  return Array.isArray(e[k]) ? handleArray(k, e[k]) : typeof e[k] === "object" ? handleObject(k, e[k]) : `        <${k}>${escapeValueForXml(e[k])}</${k}>`;
}
function wrapSitemapXml(input, resolvers, options) {
  const xsl = options.xsl ? resolvers.relativeBaseUrlResolver(options.xsl) : false;
  const credits = options.credits;
  input.unshift(`<?xml version="1.0" encoding="UTF-8"?>${xsl ? `<?xml-stylesheet type="text/xsl" href="${xsl}"?>` : ""}`);
  if (credits)
    input.push(`<!-- XML Sitemap generated by @nuxtjs/sitemap v${options.version} at ${(/* @__PURE__ */ new Date()).toISOString()} -->`);
  return input.join("\n");
}
function escapeValueForXml(value) {
  if (value === true || value === false)
    return value ? "yes" : "no";
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

async function buildSitemapIndex(resolvers, runtimeConfig) {
  const {
    sitemaps,
    // enhancing
    autoLastmod,
    // chunking
    defaultSitemapsChunkSize,
    autoI18n,
    isI18nMapped,
    sortEntries,
    // xls
    version,
    xsl,
    credits
  } = runtimeConfig;
  if (!sitemaps)
    throw new Error("Attempting to build a sitemap index without required `sitemaps` configuration.");
  function maybeSort(urls) {
    return sortEntries ? sortSitemapUrls(urls) : urls;
  }
  const isChunking = typeof sitemaps.chunks !== "undefined";
  const chunks = {};
  if (isChunking) {
    const sitemap = sitemaps.chunks;
    const sources = await resolveSitemapSources(await globalSitemapSources());
    const normalisedUrls = normaliseSitemapUrls(sources.map((e) => e.urls).flat(), resolvers);
    let enhancedUrls = normalisedUrls.map((e) => defu$1(e, sitemap.defaults));
    if (autoI18n?.locales)
      enhancedUrls = applyI18nEnhancements(enhancedUrls, { isI18nMapped, autoI18n, sitemapName: sitemap.sitemapName });
    const filteredUrls = filterSitemapUrls(enhancedUrls, { ...sitemap, isMultiSitemap: true });
    const sortedUrls = maybeSort(filteredUrls);
    sortedUrls.forEach((url, i) => {
      const chunkIndex = Math.floor(i / defaultSitemapsChunkSize);
      chunks[chunkIndex] = chunks[chunkIndex] || { urls: [] };
      chunks[chunkIndex].urls.push(url);
    });
  } else {
    for (const sitemap in sitemaps) {
      if (sitemap !== "index") {
        chunks[sitemap] = chunks[sitemap] || { urls: [] };
      }
    }
  }
  const entries = [];
  for (const name in chunks) {
    const sitemap = chunks[name];
    const entry = {
      sitemap: resolvers.canonicalUrlResolver(`${name}-sitemap.xml`)
    };
    let lastmod = sitemap.urls.filter((a) => !!a?.lastmod).map((a) => typeof a.lastmod === "string" ? new Date(a.lastmod) : a.lastmod).sort((a, b) => (b?.getTime() || 0) - (a?.getTime() || 0))?.[0];
    if (!lastmod && autoLastmod)
      lastmod = /* @__PURE__ */ new Date();
    if (lastmod)
      entry.lastmod = normaliseDate(lastmod);
    entries.push(entry);
  }
  if (sitemaps.index) {
    entries.push(...sitemaps.index.sitemaps.map((entry) => {
      return typeof entry === "string" ? { sitemap: entry } : entry;
    }));
  }
  const ctx = { sitemaps: entries };
  const nitro = useNitroApp();
  await nitro.hooks.callHook("sitemap:index-resolved", ctx);
  const sitemapXml = ctx.sitemaps.map((e) => [
    "    <sitemap>",
    `        <loc>${escapeValueForXml(e.sitemap)}</loc>`,
    // lastmod is optional
    e.lastmod ? `        <lastmod>${escapeValueForXml(e.lastmod)}</lastmod>` : false,
    "    </sitemap>"
  ].filter(Boolean).join("\n")).join("\n");
  return wrapSitemapXml([
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    sitemapXml,
    "</sitemapindex>"
  ], resolvers, { version, xsl, credits });
}

const _xh3zyM = defineEventHandler(async (e) => {
  const canonicalQuery = getQuery$1(e).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const runtimeConfig = useSimpleSitemapRuntimeConfig();
  const siteConfig = useSiteConfig(e);
  let sitemap = await buildSitemapIndex({
    event: e,
    canonicalUrlResolver: createSitePathResolver(e, { canonical: isShowingCanonical || false, absolute: true, withBase: true }),
    relativeBaseUrlResolver: createSitePathResolver(e, { absolute: false, withBase: true }),
    fixSlashes: (path) => fixSlashes(siteConfig.trailingSlash, path)
  }, runtimeConfig);
  const nitro = useNitroApp();
  const ctx = { sitemap, sitemapName: "sitemap" };
  await nitro.hooks.callHook("sitemap:output", ctx);
  sitemap = ctx.sitemap;
  setHeader(e, "Content-Type", "text/xml; charset=UTF-8");
  if (runtimeConfig.cacheMaxAgeSeconds)
    setHeader(e, "Cache-Control", `public, max-age=${runtimeConfig.cacheMaxAgeSeconds}, must-revalidate`);
  else
    setHeader(e, "Cache-Control", `no-cache, no-store`);
  return sitemap;
});

function withoutQuery(path) {
  return path.split("?")[0];
}
function createNitroRouteRuleMatcher() {
  const { nitro, app } = useRuntimeConfig();
  const _routeRulesMatcher = toRouteMatcher(
    createRouter({
      routes: Object.fromEntries(
        Object.entries(nitro?.routeRules || {}).map(([path, rules]) => [withoutTrailingSlash(path), rules])
      )
    })
  );
  return (path) => {
    return defu$1({}, ..._routeRulesMatcher.matchAll(
      // radix3 does not support trailing slashes
      withoutBase(withoutTrailingSlash(withoutQuery(path)), app.baseURL)
    ).reverse());
  };
}

async function buildSitemap(sitemap, resolvers, runtimeConfig) {
  const {
    sitemaps,
    // enhancing
    autoI18n,
    isI18nMapped,
    isMultiSitemap,
    // sorting
    sortEntries,
    // chunking
    defaultSitemapsChunkSize,
    // xls
    version,
    xsl,
    credits
  } = runtimeConfig;
  const isChunking = typeof sitemaps.chunks !== "undefined" && !Number.isNaN(Number(sitemap.sitemapName));
  function maybeSort(urls2) {
    return sortEntries ? sortSitemapUrls(urls2) : urls2;
  }
  function maybeSlice(urls2) {
    if (isChunking && defaultSitemapsChunkSize) {
      const chunk = Number(sitemap.sitemapName);
      return urls2.slice(chunk * defaultSitemapsChunkSize, (chunk + 1) * defaultSitemapsChunkSize);
    }
    return urls2;
  }
  if (autoI18n?.differentDomains) {
    const domain = autoI18n.locales.find((e) => [e.iso, e.code].includes(sitemap.sitemapName))?.domain;
    if (domain) {
      const _tester = resolvers.canonicalUrlResolver;
      resolvers.canonicalUrlResolver = (path) => resolveSitePath(path, {
        absolute: true,
        withBase: false,
        siteUrl: withHttps(domain),
        trailingSlash: !_tester("/test/").endsWith("/"),
        base: "/"
      });
    }
  }
  const sources = sitemap.includeAppSources ? await globalSitemapSources() : [];
  sources.push(...await childSitemapSources(sitemap));
  let resolvedSources = await resolveSitemapSources(sources, resolvers.event);
  if (autoI18n)
    resolvedSources = normaliseI18nSources(resolvedSources, { autoI18n, isI18nMapped, ...sitemap });
  const normalisedUrls = normaliseSitemapUrls(resolvedSources.map((e) => e.urls).flat(), resolvers);
  const routeRuleMatcher = createNitroRouteRuleMatcher();
  let enhancedUrls = normalisedUrls.map((e) => defu$1(e, sitemap.defaults)).map((e) => {
    const path = parseURL(e.loc).pathname;
    let routeRules = routeRuleMatcher(path);
    if (autoI18n?.locales && autoI18n?.strategy !== "no_prefix") {
      const match = splitForLocales(path, autoI18n.locales.map((l) => l.code));
      const pathWithoutPrefix = match[1];
      if (pathWithoutPrefix && pathWithoutPrefix !== path)
        routeRules = defu$1(routeRules, routeRuleMatcher(pathWithoutPrefix));
    }
    if (routeRules.sitemap === false)
      return false;
    if (typeof routeRules.index !== "undefined" && !routeRules.index)
      return false;
    const hasRobotsDisabled = Object.entries(routeRules.headers || {}).some(([name, value]) => name.toLowerCase() === "x-robots-tag" && value.toLowerCase() === "noindex");
    if (routeRules.redirect || hasRobotsDisabled)
      return false;
    return routeRules.sitemap ? defu$1(e, routeRules.sitemap) : e;
  }).filter(Boolean);
  if (autoI18n?.locales)
    enhancedUrls = applyI18nEnhancements(enhancedUrls, { isI18nMapped, autoI18n, ...sitemap });
  const filteredUrls = filterSitemapUrls(enhancedUrls, { event: resolvers.event, isMultiSitemap, ...sitemap });
  const sortedUrls = maybeSort(filteredUrls);
  const slicedUrls = maybeSlice(sortedUrls);
  const nitro = useNitroApp();
  const ctx = {
    urls: slicedUrls,
    sitemapName: sitemap.sitemapName
  };
  await nitro.hooks.callHook("sitemap:resolved", ctx);
  const urls = maybeSort(normaliseSitemapUrls(ctx.urls, resolvers));
  const urlset = urls.map((e) => {
    const keys = Object.keys(e).filter((k) => !k.startsWith("_"));
    return [
      "    <url>",
      keys.map((k) => handleEntry(k, e)).filter(Boolean).join("\n"),
      "    </url>"
    ].join("\n");
  });
  return wrapSitemapXml([
    '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urlset.join("\n"),
    "</urlset>"
  ], resolvers, { version, xsl, credits });
}

function useNitroUrlResolvers(e) {
  const canonicalQuery = getQuery$1(e).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const siteConfig = useSiteConfig(e);
  return {
    event: e,
    fixSlashes: (path) => fixSlashes(siteConfig.trailingSlash, path),
    // we need these as they depend on the nitro event
    canonicalUrlResolver: createSitePathResolver(e, {
      canonical: isShowingCanonical || false,
      absolute: true,
      withBase: true
    }),
    relativeBaseUrlResolver: createSitePathResolver(e, { absolute: false, withBase: true })
  };
}
async function createSitemap(e, definition, runtimeConfig) {
  const { sitemapName } = definition;
  const nitro = useNitroApp();
  let sitemap = await (definition.sitemapName === "index" ? buildSitemapIndex(useNitroUrlResolvers(e), runtimeConfig) : buildSitemap(definition, useNitroUrlResolvers(e), runtimeConfig));
  const ctx = { sitemap, sitemapName };
  await nitro.hooks.callHook("sitemap:output", ctx);
  sitemap = ctx.sitemap;
  setHeader(e, "Content-Type", "text/xml; charset=UTF-8");
  if (runtimeConfig.cacheMaxAgeSeconds)
    setHeader(e, "Cache-Control", `public, max-age=${runtimeConfig.cacheMaxAgeSeconds}, must-revalidate`);
  else
    setHeader(e, "Cache-Control", `no-cache, no-store`);
  e.context._isSitemap = true;
  return sitemap;
}

const _8vIXBH = defineEventHandler(async (e) => {
  const path = parseURL(e.path).pathname;
  if (!path.endsWith("-sitemap.xml"))
    return;
  const runtimeConfig = useSimpleSitemapRuntimeConfig();
  const { sitemaps } = runtimeConfig;
  const sitemapName = path.replace("-sitemap.xml", "").replace("/", "");
  const isChunking = typeof sitemaps.chunks !== "undefined" && !Number.isNaN(Number(sitemapName));
  if (!(sitemapName in sitemaps) && !isChunking) {
    return createError({
      statusCode: 404,
      message: `Sitemap "${sitemapName}" not found.`
    });
  }
  return createSitemap(e, isChunking ? {
    ...sitemaps.chunks,
    sitemapName
  } : sitemaps[sitemapName], runtimeConfig);
});

const _MhEsNs = defineEventHandler(async (e) => {
  const _runtimeConfig = useSimpleSitemapRuntimeConfig();
  const { sitemaps: _sitemaps } = _runtimeConfig;
  const runtimeConfig = { ..._runtimeConfig };
  delete runtimeConfig.sitemaps;
  const globalSources = await globalSitemapSources();
  const nitroOrigin = useNitroOrigin(e);
  const sitemaps = {};
  for (const s of Object.keys(_sitemaps)) {
    sitemaps[s] = {
      ..._sitemaps[s],
      sources: await resolveSitemapSources(await childSitemapSources(_sitemaps[s]))
    };
  }
  return {
    nitroOrigin,
    sitemaps,
    runtimeConfig,
    globalSources: await resolveSitemapSources(globalSources)
  };
});

const _xVOATj = defineEventHandler(async (e) => {
  const fixPath = createSitePathResolver(e, { absolute: false, withBase: true });
  const { sitemapName: fallbackSitemapName, cacheMaxAgeSeconds, version, xslColumns, xslTips } = useSimpleSitemapRuntimeConfig();
  setHeader(e, "Content-Type", "application/xslt+xml");
  if (cacheMaxAgeSeconds)
    setHeader(e, "Cache-Control", `public, max-age=${cacheMaxAgeSeconds}, must-revalidate`);
  else
    setHeader(e, "Cache-Control", `no-cache, no-store`);
  const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon" style="margin-right: 4px; font-size: 25px;" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#93c5fd" d="M4 26h4v4H4zm10 0h4v4h-4zm10 0h4v4h-4zm1-10h-8v-2h-2v2H7a2.002 2.002 0 0 0-2 2v6h2v-6h8v6h2v-6h8v6h2v-6a2.002 2.002 0 0 0-2-2zM9 2v10h14V2zm2 2h2v6h-2zm10 6h-6V4h6z"></path></svg>`;
  const creditName = `<a href="https://github.com/nuxt-modules/sitemap" style="color: black; display: flex; align-items: center; font-weight: 500;" target="_blank" rel="noopener">${svgIcon} Nuxt Sitemap v${version}</a>`;
  const { name: siteName, url: siteUrl } = useSiteConfig(e);
  const referrer = getHeader(e, "Referer") || "/";
  const isNotIndexButHasIndex = referrer !== fixPath("/sitemap.xml") && parseURL(referrer).pathname.endsWith("-sitemap.xml");
  const sitemapName = parseURL(referrer).pathname.split("/").pop()?.split("-sitemap")[0] || fallbackSitemapName;
  const title = `${siteName}${sitemapName !== "sitemap.xml" ? ` - ${sitemapName === "sitemap_index.xml" ? "index" : sitemapName}` : ""}`.replace(/&/g, "&amp;");
  const canonicalQuery = getQuery(referrer).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const conditionalTips = [
    'You are looking at a <a href="https://developer.mozilla.org/en-US/docs/Web/XSLT/Transforming_XML_with_XSLT/An_Overview" style="color: #398465" target="_blank">XML stylesheet</a>. Read the <a href="https://nuxtseo.com/sitemap/guides/customising-ui" style="color: #398465" target="_blank">docs</a> to learn how to customize it. View the page source to see the raw XML.',
    `URLs missing? Check Nuxt Devtools Sitemap tab (or the <a href="${withQuery("/__sitemap__/debug.json", { sitemap: sitemapName })}" style="color: #398465" target="_blank">debug endpoint</a>).`
  ];
  if (!isShowingCanonical) {
    const canonicalPreviewUrl = withQuery(referrer, { canonical: "" });
    conditionalTips.push(`Your canonical site URL is <strong>${siteUrl}</strong>.`);
    conditionalTips.push(`You can preview your canonical sitemap by visiting <a href="${canonicalPreviewUrl}" style="color: #398465; white-space: nowrap;">${fixPath(canonicalPreviewUrl)}?canonical</a>`);
  } else {
    conditionalTips.push(`You are viewing the canonical sitemap. You can switch to using the request origin: <a href="${fixPath(referrer)}" style="color: #398465; white-space: nowrap ">${fixPath(referrer)}</a>`);
  }
  const tips = conditionalTips.map((t) => `<li><p>${t}</p></li>`).join("\n");
  const showTips = xslTips !== false;
  let columns = [...xslColumns];
  if (!columns.length) {
    columns = [
      { label: "URL", width: "50%" },
      { label: "Images", width: "25%", select: "count(image:image)" },
      { label: "Last Updated", width: "25%", select: "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))" }
    ];
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml"
                xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style type="text/css">
          body {
            font-family: Inter, Helvetica, Arial, sans-serif;
            font-size: 14px;
            color: #333;
          }

          table {
            border: none;
            border-collapse: collapse;
          }

          .bg-yellow-200 {
            background-color: #fef9c3;
          }

          .p-5 {
            padding: 1.25rem;
          }

          .rounded {
            border-radius: 4px;
            }

          .shadow {
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          }

          #sitemap tr:nth-child(odd) td {
            background-color: #f8f8f8 !important;
          }

          #sitemap tbody tr:hover td {
            background-color: #fff;
          }

          #sitemap tbody tr:hover td, #sitemap tbody tr:hover td a {
            color: #000;
          }

          .expl a {
            color: #398465
            font-weight: 600;
          }

          .expl a:visited {
            color: #398465
          }

          a {
            color: #000;
            text-decoration: none;
          }

          a:visited {
            color: #777;
          }

          a:hover {
            text-decoration: underline;
          }

          td {
            font-size: 12px;
          }

          .text-2xl {
            font-size: 2rem;
            font-weight: 600;
            line-height: 1.25;
          }

          th {
            text-align: left;
            padding-right: 30px;
            font-size: 12px;
          }

          thead th {
            border-bottom: 1px solid #000;
          }
          .fixed { position: fixed; }
          .right-2 { right: 2rem; }
          .top-2 { top: 2rem; }
          .w-30 { width: 30rem; }
          p { margin: 0; }
          li { padding-bottom: 0.5rem; line-height: 1.5; }
          h1 { margin: 0; }
          .mb-5 { margin-bottom: 1.25rem; }
          .mb-3 { margin-bottom: 0.75rem; }
        </style>
      </head>
      <body>
        <div style="grid-template-columns: 1fr 1fr; display: grid; margin: 3rem;">
            <div>
             <div id="content">
          <h1 class="text-2xl mb-3">XML Sitemap</h1>
          <h2>${title}</h2>
          ${isNotIndexButHasIndex ? `<p style="font-size: 12px; margin-bottom: 1rem;"><a href="${fixPath("/sitemap_index.xml")}">${fixPath("/sitemap_index.xml")}</a></p>` : ""}
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap Index file contains
              <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sitemaps.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  <th width="75%">Sitemap</th>
                  <th width="25%">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <xsl:variable name="sitemapURL">
                    <xsl:value-of select="sitemap:loc"/>
                  </xsl:variable>
                  <tr>
                    <td>
                      <a href="{$sitemapURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:value-of
                        select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap contains
              <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  ${columns.map((c) => `<th width="${c.width}">${c.label}</th>`).join("\n")}
                </tr>
              </thead>
              <tbody>
                <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
                <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    ${columns.filter((c) => c.label !== "URL").map((c) => `<td>
<xsl:value-of select="${c.select}"/>
</td>`).join("\n")}
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
        </div>
        </div>
                    ${showTips ? `<div class="w-30 top-2 shadow rounded p-5 right-2" style="margin: 0 auto;"><p><strong>Sitemap Tips (development only)</strong></p><ul style="margin: 1rem; padding: 0;">${tips}</ul><p style="margin-top: 1rem;">${creditName}</p></div>` : ""}
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
`;
});

const _OcKHPf = defineEventHandler(async (e) => {
  const runtimeConfig = useSimpleSitemapRuntimeConfig();
  const { sitemaps } = runtimeConfig;
  if ("index" in sitemaps) {
    return sendRedirect(e, withBase("/sitemap_index.xml", useRuntimeConfig().app.baseURL), 302 );
  }
  return createSitemap(e, Object.values(sitemaps)[0], runtimeConfig);
});

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const unheadOptions = {
  disableDefaults: true,
  disableCapoSorting: false,
  plugins: [DeprecationsPlugin, PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin],
};

function createSSRContext(event) {
  const ssrContext = {
    url: event.path,
    event,
    runtimeConfig: useRuntimeConfig(event),
    noSSR: event.context.nuxt?.noSSR || (false),
    head: createHead(unheadOptions),
    error: false,
    nuxt: void 0,
    /* NuxtApp */
    payload: {},
    _payloadReducers: /* @__PURE__ */ Object.create(null),
    modules: /* @__PURE__ */ new Set()
  };
  return ssrContext;
}
function setSSRError(ssrContext, error) {
  ssrContext.error = true;
  ssrContext.payload = { error };
  ssrContext.url = error.url;
}

const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const getServerEntry = () => import('file:///Applications/XAMPP/xamppfiles/htdocs/bola95/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getClientManifest = () => import('file:///Applications/XAMPP/xamppfiles/htdocs/bola95/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
    {
      return APP_ROOT_OPEN_TAG + r + APP_ROOT_CLOSE_TAG;
    }
  });
  const options = {
    manifest,
    renderToString: () => spaTemplate,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig(ssrContext.event);
    ssrContext.modules ||= /* @__PURE__ */ new Set();
    ssrContext.payload.serverRendered = false;
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function getRenderer(ssrContext) {
  return ssrContext.noSSR ? getSPARenderer() : getSSRRenderer();
}
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));

async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap && styleMap[mod]) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
function getServerComponentHTML(body) {
  const match = body.match(ROOT_NODE_REGEX);
  return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
    return void 0;
  }
  const response = {};
  for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
    response[name] = {
      ...slot,
      fallback: ssrContext.teleports?.[`island-fallback=${name}`]
    };
  }
  return response;
}
function getClientIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
    return void 0;
  }
  const response = {};
  for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
    const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
    response[clientUid] = {
      ...component,
      html,
      slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
    };
  }
  return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
  const entries = Object.entries(teleports);
  const slots = {};
  for (const [key, value] of entries) {
    const match = key.match(SSR_CLIENT_SLOT_MARKER);
    if (match) {
      const [, id, slot] = match;
      if (!slot || clientUid !== id) {
        continue;
      }
      slots[slot] = value;
    }
  }
  return slots;
}
function replaceIslandTeleports(ssrContext, html) {
  const { teleports, islandContext } = ssrContext;
  if (islandContext || !teleports) {
    return html;
  }
  for (const key in teleports) {
    const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
    if (matchClientComp) {
      const [, uid, clientId] = matchClientComp;
      if (!uid || !clientId) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
      continue;
    }
    const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
    if (matchSlot) {
      const [, uid, slot] = matchSlot;
      if (!uid || !slot) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
    }
  }
  return html;
}

const ISLAND_SUFFIX_RE = /\.json(\?.*)?$/;
const _SxA8c9 = defineEventHandler(async (event) => {
  const nitroApp = useNitroApp();
  setResponseHeaders(event, {
    "content-type": "application/json;charset=utf-8",
    "x-powered-by": "Nuxt"
  });
  const islandContext = await getIslandContext(event);
  const ssrContext = {
    ...createSSRContext(event),
    islandContext,
    noSSR: false,
    url: islandContext.url
  };
  const renderer = await getSSRRenderer();
  const renderResult = await renderer.renderToString(ssrContext).catch(async (error) => {
    await ssrContext.nuxt?.hooks.callHook("app:error", error);
    throw error;
  });
  const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult });
  if (inlinedStyles.length) {
    ssrContext.head.push({ style: inlinedStyles });
  }
  {
    const { styles } = getRequestDependencies(ssrContext, renderer.rendererContext);
    const link = [];
    for (const resource of Object.values(styles)) {
      if ("inline" in getQuery(resource.file)) {
        continue;
      }
      if (resource.file.includes("scoped") && !resource.file.includes("pages/")) {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
      }
    }
    if (link.length) {
      ssrContext.head.push({ link }, { mode: "server" });
    }
  }
  const islandHead = {};
  for (const entry of ssrContext.head.entries.values()) {
    for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
      const currentValue = islandHead[key];
      if (Array.isArray(currentValue)) {
        currentValue.push(...value);
      }
      islandHead[key] = value;
    }
  }
  islandHead.link ||= [];
  islandHead.style ||= [];
  const islandResponse = {
    id: islandContext.id,
    head: islandHead,
    html: getServerComponentHTML(renderResult.html),
    components: getClientIslandResponse(ssrContext),
    slots: getSlotIslandResponse(ssrContext)
  };
  await nitroApp.hooks.callHook("render:island", islandResponse, { event, islandContext });
  return islandResponse;
});
async function getIslandContext(event) {
  let url = event.path || "";
  const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
  const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
  const componentName = componentParts.join("_");
  const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr$1(context.props) || {},
    slots: {},
    components: {}
  };
  return ctx;
}

const _GtpjAy = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const fsDir = opts?.fs?.dir ? (Array.isArray(opts.fs.dir) ? opts.fs.dir : [opts.fs.dir]).map((dir) => isAbsolute(dir) ? dir : fileURLToPath(new URL(dir, globalThis._importMeta_.url))) : void 0;
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : void 0;
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : void 0;
  if (!fsStorage && !httpStorage) {
    throw new Error("IPX storage is not configured!");
  }
  const ipxOptions = {
    ...opts,
    storage: fsStorage || httpStorage,
    httpStorage
  };
  const ipx = createIPX(ipxOptions);
  const ipxHandler = createIPXH3Handler(ipx);
  return useBase(opts.baseURL, ipxHandler);
});

const _lazy_p5pCgl = () => Promise.resolve().then(function () { return beton_service_sitemap$1; });
const _lazy_L4kqml = () => Promise.resolve().then(function () { return beton_service$1; });
const _lazy_ifcENm = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/api/beton_service_sitemap', handler: _lazy_p5pCgl, lazy: true, middleware: false, method: undefined },
  { route: '/api/beton_service', handler: _lazy_L4kqml, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_ifcENm, lazy: true, middleware: false, method: undefined },
  { route: '', handler: _Alcfwv, lazy: false, middleware: true, method: undefined },
  { route: '/__site-config__/debug.json', handler: _L8Gmw2, lazy: false, middleware: false, method: undefined },
  { route: '/sitemap_index.xml', handler: _xh3zyM, lazy: false, middleware: false, method: undefined },
  { route: '/pages-sitemap.xml', handler: _8vIXBH, lazy: false, middleware: false, method: undefined },
  { route: '/betonozas-sitemap.xml', handler: _8vIXBH, lazy: false, middleware: false, method: undefined },
  { route: '/__sitemap__/debug.json', handler: _MhEsNs, lazy: false, middleware: false, method: undefined },
  { route: '/__sitemap__/style.xsl', handler: _xVOATj, lazy: false, middleware: false, method: undefined },
  { route: '/sitemap.xml', handler: _OcKHPf, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _GtpjAy, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_ifcENm, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(nodeHandler, aRequest);
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const _messages = { "appName": "Nuxt", "version": "", "statusCode": 500, "statusMessage": "Server error", "description": "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.", "stack": "" };
const template$1 = (messages) => {
  messages = { ..._messages, ...messages };
  return '<!DOCTYPE html><html lang="en"><head><title>' + escapeHtml(messages.statusCode) + " - " + escapeHtml(messages.statusMessage || "Internal Server Error") + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport"><style>.spotlight{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-40vh;filter:blur(30vh);height:60vh;opacity:.8}*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.pointer-events-none{pointer-events:none}.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.z-10{z-index:10}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.h-auto{height:auto}.min-h-screen{min-height:100vh}.flex{display:flex}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.overflow-y-auto{overflow-y:auto}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.bg-black\\/5{background-color:#0000000d}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.text-6xl{font-size:3.75rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:bg-white\\/10{background-color:#ffffff1a}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:text-8xl{font-size:6rem;line-height:1}}</style><script>!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();<\/script></head><body class="antialiased bg-white dark:bg-black dark:text-white flex flex-col font-sans min-h-screen pt-14 px-10 text-black"><div class="fixed left-0 pointer-events-none right-0 spotlight"></div><h1 class="font-medium mb-6 sm:text-8xl text-6xl">` + escapeHtml(messages.statusCode) + '</h1><p class="font-light leading-tight mb-8 sm:text-2xl text-xl">' + escapeHtml(messages.description) + '</p><div class="bg-black/5 bg-white dark:bg-white/10 flex-1 h-auto overflow-y-auto rounded-t-md"><div class="font-light leading-tight p-8 text-xl z-10">' + escapeHtml(messages.stack) + "</div></div></body></html>";
};

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template$1
});

const sources$1 = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/"
            },
            {
                "loc": "/rolunk"
            },
            {
                "loc": "/galeria"
            },
            {
                "loc": "/kapcsolat"
            },
            {
                "loc": "/partnerek"
            },
            {
                "loc": "/referenciak"
            },
            {
                "loc": "/ajanlatkeres"
            },
            {
                "loc": "/szolgaltatasok"
            },
            {
                "loc": "/adatvedelmi-tajekoztato"
            },
            {
                "loc": "/sitemap.xml"
            }
        ],
        "sourceType": "app"
    }
];

const globalSources = /*#__PURE__*/Object.freeze({
  __proto__: null,
  sources: sources$1
});

const sources = {
    "pages": [],
    "betonozas": [
        {
            "sourceType": "user",
            "fetch": "/api/beton_service_sitemap"
        }
    ]
};

const childSources = /*#__PURE__*/Object.freeze({
  __proto__: null,
  sources: sources
});

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: styles
});

const variaciok = [
	{
		id: "budapest-1-kerulet-betonozas-budapest",
		varos: "Budapest",
		kerulet: "1. kerület",
		marka: "N/A",
		modell: "betonozás budapest",
		szerviz_tipus: "fooldal",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "AlapMester",
		title: "Betonozás budapest – 1. kerület",
		meta_description: "Betonozás budapest Budapest 1. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Betonozás budapest – Budapest 1. kerület",
		body: "A(z) betonozás budapest stabil, időtálló megoldást ad. AlapMester csapata 1. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-1-kerulet-betonozas-arak",
		varos: "Budapest",
		kerulet: "1. kerület",
		marka: "N/A",
		modell: "betonozás árak",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "Budapest Beton Team",
		title: "Betonozás árak – 1. kerület",
		meta_description: "Betonozás árak Budapest 1. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Betonozás árak – Budapest 1. kerület",
		body: "A(z) betonozás árak stabil, időtálló megoldást ad. Budapest Beton Team csapata 1. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-1-kerulet-betonozas-ar",
		varos: "Budapest",
		kerulet: "1. kerület",
		marka: "N/A",
		modell: "betonozás ár",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "Budapest Beton Team",
		title: "Betonozás ár – 1. kerület",
		meta_description: "Betonozás ár Budapest 1. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Betonozás ár – Budapest 1. kerület",
		body: "A(z) betonozás ár stabil, időtálló megoldást ad. Budapest Beton Team csapata 1. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-1-kerulet-jarda-betonozas",
		varos: "Budapest",
		kerulet: "1. kerület",
		marka: "N/A",
		modell: "járda betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "GyorsBeton",
		title: "Járda betonozás – 1. kerület",
		meta_description: "Járda betonozás Budapest 1. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Járda betonozás – Budapest 1. kerület",
		body: "A(z) járda betonozás stabil, időtálló megoldást ad. GyorsBeton csapata 1. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-1-kerulet-alap-betonozas",
		varos: "Budapest",
		kerulet: "1. kerület",
		marka: "N/A",
		modell: "alap betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "BetonProfi",
		title: "Alap betonozás – 1. kerület",
		meta_description: "Alap betonozás Budapest 1. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Alap betonozás – Budapest 1. kerület",
		body: "A(z) alap betonozás stabil, időtálló megoldást ad. BetonProfi csapata 1. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-1-kerulet-aljzat-betonozas",
		varos: "Budapest",
		kerulet: "1. kerület",
		marka: "N/A",
		modell: "aljzat betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "AlapMester",
		title: "Aljzat betonozás – 1. kerület",
		meta_description: "Aljzat betonozás Budapest 1. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Aljzat betonozás – Budapest 1. kerület",
		body: "A(z) aljzat betonozás stabil, időtálló megoldást ad. AlapMester csapata 1. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-1-kerulet-fodem-betonozas",
		varos: "Budapest",
		kerulet: "1. kerület",
		marka: "N/A",
		modell: "födém betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "CityBeton",
		title: "Födém betonozás – 1. kerület",
		meta_description: "Födém betonozás Budapest 1. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Födém betonozás – Budapest 1. kerület",
		body: "A(z) födém betonozás stabil, időtálló megoldást ad. CityBeton csapata 1. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-1-kerulet-terasz-betonozas",
		varos: "Budapest",
		kerulet: "1. kerület",
		marka: "N/A",
		modell: "terasz betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "GyorsBeton",
		title: "Terasz betonozás – 1. kerület",
		meta_description: "Terasz betonozás Budapest 1. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Terasz betonozás – Budapest 1. kerület",
		body: "A(z) terasz betonozás stabil, időtálló megoldást ad. GyorsBeton csapata 1. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-1-kerulet-garazsalap-betonozas",
		varos: "Budapest",
		kerulet: "1. kerület",
		marka: "N/A",
		modell: "gárazsalap betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "Budapest Beton Team",
		title: "Gárazsalap betonozás – 1. kerület",
		meta_description: "Gárazsalap betonozás Budapest 1. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Gárazsalap betonozás – Budapest 1. kerület",
		body: "A(z) gárazsalap betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 1. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-1-kerulet-ipari-padlo-betonozas",
		varos: "Budapest",
		kerulet: "1. kerület",
		marka: "N/A",
		modell: "ipári padló betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "BetonFix",
		title: "Ipári padló betonozás – 1. kerület",
		meta_description: "Ipári padló betonozás Budapest 1. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Ipári padló betonozás – Budapest 1. kerület",
		body: "A(z) ipári padló betonozás stabil, időtálló megoldást ad. BetonFix csapata 1. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-1-kerulet-betonozas-hazilag",
		varos: "Budapest",
		kerulet: "1. kerület",
		marka: "N/A",
		modell: "betonozás házilag",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "BetonFix",
		title: "Betonozás házilag – 1. kerület",
		meta_description: "Betonozás házilag Budapest 1. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás házilag – Budapest 1. kerület",
		body: "A(z) betonozás házilag stabil, időtálló megoldást ad. BetonFix csapata 1. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-1-kerulet-betonozas-menete",
		varos: "Budapest",
		kerulet: "1. kerület",
		marka: "N/A",
		modell: "betonozás menete",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "CityBeton",
		title: "Betonozás menete – 1. kerület",
		meta_description: "Betonozás menete Budapest 1. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás menete – Budapest 1. kerület",
		body: "A(z) betonozás menete stabil, időtálló megoldást ad. CityBeton csapata 1. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-1-kerulet-betonozas-m2-ara",
		varos: "Budapest",
		kerulet: "1. kerület",
		marka: "N/A",
		modell: "betonozás m2 ára",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "AlapMester",
		title: "Betonozás m2 ára – 1. kerület",
		meta_description: "Betonozás m2 ára Budapest 1. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Betonozás m2 ára – Budapest 1. kerület",
		body: "A(z) betonozás m2 ára stabil, időtálló megoldást ad. AlapMester csapata 1. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-2-kerulet-betonozas-budapest",
		varos: "Budapest",
		kerulet: "2. kerület",
		marka: "N/A",
		modell: "betonozás budapest",
		szerviz_tipus: "fooldal",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "AlapMester",
		title: "Betonozás budapest – 2. kerület",
		meta_description: "Betonozás budapest Budapest 2. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Betonozás budapest – Budapest 2. kerület",
		body: "A(z) betonozás budapest stabil, időtálló megoldást ad. AlapMester csapata 2. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-2-kerulet-betonozas-arak",
		varos: "Budapest",
		kerulet: "2. kerület",
		marka: "N/A",
		modell: "betonozás árak",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "AlapMester",
		title: "Betonozás árak – 2. kerület",
		meta_description: "Betonozás árak Budapest 2. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Betonozás árak – Budapest 2. kerület",
		body: "A(z) betonozás árak stabil, időtálló megoldást ad. AlapMester csapata 2. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-2-kerulet-betonozas-ar",
		varos: "Budapest",
		kerulet: "2. kerület",
		marka: "N/A",
		modell: "betonozás ár",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "Budapest Beton Team",
		title: "Betonozás ár – 2. kerület",
		meta_description: "Betonozás ár Budapest 2. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Betonozás ár – Budapest 2. kerület",
		body: "A(z) betonozás ár stabil, időtálló megoldást ad. Budapest Beton Team csapata 2. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-2-kerulet-jarda-betonozas",
		varos: "Budapest",
		kerulet: "2. kerület",
		marka: "N/A",
		modell: "járda betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "CityBeton",
		title: "Járda betonozás – 2. kerület",
		meta_description: "Járda betonozás Budapest 2. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Járda betonozás – Budapest 2. kerület",
		body: "A(z) járda betonozás stabil, időtálló megoldást ad. CityBeton csapata 2. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-2-kerulet-alap-betonozas",
		varos: "Budapest",
		kerulet: "2. kerület",
		marka: "N/A",
		modell: "alap betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "BetonProfi",
		title: "Alap betonozás – 2. kerület",
		meta_description: "Alap betonozás Budapest 2. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Alap betonozás – Budapest 2. kerület",
		body: "A(z) alap betonozás stabil, időtálló megoldást ad. BetonProfi csapata 2. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-2-kerulet-aljzat-betonozas",
		varos: "Budapest",
		kerulet: "2. kerület",
		marka: "N/A",
		modell: "aljzat betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "CityBeton",
		title: "Aljzat betonozás – 2. kerület",
		meta_description: "Aljzat betonozás Budapest 2. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Aljzat betonozás – Budapest 2. kerület",
		body: "A(z) aljzat betonozás stabil, időtálló megoldást ad. CityBeton csapata 2. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-2-kerulet-fodem-betonozas",
		varos: "Budapest",
		kerulet: "2. kerület",
		marka: "N/A",
		modell: "födém betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "BetonProfi",
		title: "Födém betonozás – 2. kerület",
		meta_description: "Födém betonozás Budapest 2. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Födém betonozás – Budapest 2. kerület",
		body: "A(z) födém betonozás stabil, időtálló megoldást ad. BetonProfi csapata 2. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-2-kerulet-terasz-betonozas",
		varos: "Budapest",
		kerulet: "2. kerület",
		marka: "N/A",
		modell: "terasz betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "CityBeton",
		title: "Terasz betonozás – 2. kerület",
		meta_description: "Terasz betonozás Budapest 2. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Terasz betonozás – Budapest 2. kerület",
		body: "A(z) terasz betonozás stabil, időtálló megoldást ad. CityBeton csapata 2. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-2-kerulet-garazsalap-betonozas",
		varos: "Budapest",
		kerulet: "2. kerület",
		marka: "N/A",
		modell: "gárazsalap betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "CityBeton",
		title: "Gárazsalap betonozás – 2. kerület",
		meta_description: "Gárazsalap betonozás Budapest 2. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Gárazsalap betonozás – Budapest 2. kerület",
		body: "A(z) gárazsalap betonozás stabil, időtálló megoldást ad. CityBeton csapata 2. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-2-kerulet-ipari-padlo-betonozas",
		varos: "Budapest",
		kerulet: "2. kerület",
		marka: "N/A",
		modell: "ipári padló betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "CityBeton",
		title: "Ipári padló betonozás – 2. kerület",
		meta_description: "Ipári padló betonozás Budapest 2. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Ipári padló betonozás – Budapest 2. kerület",
		body: "A(z) ipári padló betonozás stabil, időtálló megoldást ad. CityBeton csapata 2. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-2-kerulet-betonozas-hazilag",
		varos: "Budapest",
		kerulet: "2. kerület",
		marka: "N/A",
		modell: "betonozás házilag",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "BetonFix",
		title: "Betonozás házilag – 2. kerület",
		meta_description: "Betonozás házilag Budapest 2. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás házilag – Budapest 2. kerület",
		body: "A(z) betonozás házilag stabil, időtálló megoldást ad. BetonFix csapata 2. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-2-kerulet-betonozas-menete",
		varos: "Budapest",
		kerulet: "2. kerület",
		marka: "N/A",
		modell: "betonozás menete",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "AlapMester",
		title: "Betonozás menete – 2. kerület",
		meta_description: "Betonozás menete Budapest 2. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Betonozás menete – Budapest 2. kerület",
		body: "A(z) betonozás menete stabil, időtálló megoldást ad. AlapMester csapata 2. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-2-kerulet-betonozas-m2-ara",
		varos: "Budapest",
		kerulet: "2. kerület",
		marka: "N/A",
		modell: "betonozás m2 ára",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "BetonFix",
		title: "Betonozás m2 ára – 2. kerület",
		meta_description: "Betonozás m2 ára Budapest 2. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás m2 ára – Budapest 2. kerület",
		body: "A(z) betonozás m2 ára stabil, időtálló megoldást ad. BetonFix csapata 2. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-3-kerulet-betonozas-budapest",
		varos: "Budapest",
		kerulet: "3. kerület",
		marka: "N/A",
		modell: "betonozás budapest",
		szerviz_tipus: "fooldal",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "BetonFix",
		title: "Betonozás budapest – 3. kerület",
		meta_description: "Betonozás budapest Budapest 3. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás budapest – Budapest 3. kerület",
		body: "A(z) betonozás budapest stabil, időtálló megoldást ad. BetonFix csapata 3. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-3-kerulet-betonozas-arak",
		varos: "Budapest",
		kerulet: "3. kerület",
		marka: "N/A",
		modell: "betonozás árak",
		szerviz_tipus: "blog",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "BetonProfi",
		title: "Betonozás árak – 3. kerület",
		meta_description: "Betonozás árak Budapest 3. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Betonozás árak – Budapest 3. kerület",
		body: "A(z) betonozás árak stabil, időtálló megoldást ad. BetonProfi csapata 3. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-3-kerulet-betonozas-ar",
		varos: "Budapest",
		kerulet: "3. kerület",
		marka: "N/A",
		modell: "betonozás ár",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "CityBeton",
		title: "Betonozás ár – 3. kerület",
		meta_description: "Betonozás ár Budapest 3. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás ár – Budapest 3. kerület",
		body: "A(z) betonozás ár stabil, időtálló megoldást ad. CityBeton csapata 3. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-3-kerulet-jarda-betonozas",
		varos: "Budapest",
		kerulet: "3. kerület",
		marka: "N/A",
		modell: "járda betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "Budapest Beton Team",
		title: "Járda betonozás – 3. kerület",
		meta_description: "Járda betonozás Budapest 3. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Járda betonozás – Budapest 3. kerület",
		body: "A(z) járda betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 3. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-3-kerulet-alap-betonozas",
		varos: "Budapest",
		kerulet: "3. kerület",
		marka: "N/A",
		modell: "alap betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "Budapest Beton Team",
		title: "Alap betonozás – 3. kerület",
		meta_description: "Alap betonozás Budapest 3. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Alap betonozás – Budapest 3. kerület",
		body: "A(z) alap betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 3. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-3-kerulet-aljzat-betonozas",
		varos: "Budapest",
		kerulet: "3. kerület",
		marka: "N/A",
		modell: "aljzat betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "GyorsBeton",
		title: "Aljzat betonozás – 3. kerület",
		meta_description: "Aljzat betonozás Budapest 3. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Aljzat betonozás – Budapest 3. kerület",
		body: "A(z) aljzat betonozás stabil, időtálló megoldást ad. GyorsBeton csapata 3. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-3-kerulet-fodem-betonozas",
		varos: "Budapest",
		kerulet: "3. kerület",
		marka: "N/A",
		modell: "födém betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "AlapMester",
		title: "Födém betonozás – 3. kerület",
		meta_description: "Födém betonozás Budapest 3. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Födém betonozás – Budapest 3. kerület",
		body: "A(z) födém betonozás stabil, időtálló megoldást ad. AlapMester csapata 3. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-3-kerulet-terasz-betonozas",
		varos: "Budapest",
		kerulet: "3. kerület",
		marka: "N/A",
		modell: "terasz betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "Budapest Beton Team",
		title: "Terasz betonozás – 3. kerület",
		meta_description: "Terasz betonozás Budapest 3. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Terasz betonozás – Budapest 3. kerület",
		body: "A(z) terasz betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 3. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-3-kerulet-garazsalap-betonozas",
		varos: "Budapest",
		kerulet: "3. kerület",
		marka: "N/A",
		modell: "gárazsalap betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "GyorsBeton",
		title: "Gárazsalap betonozás – 3. kerület",
		meta_description: "Gárazsalap betonozás Budapest 3. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Gárazsalap betonozás – Budapest 3. kerület",
		body: "A(z) gárazsalap betonozás stabil, időtálló megoldást ad. GyorsBeton csapata 3. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-3-kerulet-ipari-padlo-betonozas",
		varos: "Budapest",
		kerulet: "3. kerület",
		marka: "N/A",
		modell: "ipári padló betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "AlapMester",
		title: "Ipári padló betonozás – 3. kerület",
		meta_description: "Ipári padló betonozás Budapest 3. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Ipári padló betonozás – Budapest 3. kerület",
		body: "A(z) ipári padló betonozás stabil, időtálló megoldást ad. AlapMester csapata 3. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-3-kerulet-betonozas-hazilag",
		varos: "Budapest",
		kerulet: "3. kerület",
		marka: "N/A",
		modell: "betonozás házilag",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "CityBeton",
		title: "Betonozás házilag – 3. kerület",
		meta_description: "Betonozás házilag Budapest 3. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás házilag – Budapest 3. kerület",
		body: "A(z) betonozás házilag stabil, időtálló megoldást ad. CityBeton csapata 3. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-3-kerulet-betonozas-menete",
		varos: "Budapest",
		kerulet: "3. kerület",
		marka: "N/A",
		modell: "betonozás menete",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "BetonProfi",
		title: "Betonozás menete – 3. kerület",
		meta_description: "Betonozás menete Budapest 3. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Betonozás menete – Budapest 3. kerület",
		body: "A(z) betonozás menete stabil, időtálló megoldást ad. BetonProfi csapata 3. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-3-kerulet-betonozas-m2-ara",
		varos: "Budapest",
		kerulet: "3. kerület",
		marka: "N/A",
		modell: "betonozás m2 ára",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "BetonProfi",
		title: "Betonozás m2 ára – 3. kerület",
		meta_description: "Betonozás m2 ára Budapest 3. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Betonozás m2 ára – Budapest 3. kerület",
		body: "A(z) betonozás m2 ára stabil, időtálló megoldást ad. BetonProfi csapata 3. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-4-kerulet-betonozas-budapest",
		varos: "Budapest",
		kerulet: "4. kerület",
		marka: "N/A",
		modell: "betonozás budapest",
		szerviz_tipus: "fooldal",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "AlapMester",
		title: "Betonozás budapest – 4. kerület",
		meta_description: "Betonozás budapest Budapest 4. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Betonozás budapest – Budapest 4. kerület",
		body: "A(z) betonozás budapest stabil, időtálló megoldást ad. AlapMester csapata 4. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-4-kerulet-betonozas-arak",
		varos: "Budapest",
		kerulet: "4. kerület",
		marka: "N/A",
		modell: "betonozás árak",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "BetonProfi",
		title: "Betonozás árak – 4. kerület",
		meta_description: "Betonozás árak Budapest 4. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Betonozás árak – Budapest 4. kerület",
		body: "A(z) betonozás árak stabil, időtálló megoldást ad. BetonProfi csapata 4. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-4-kerulet-betonozas-ar",
		varos: "Budapest",
		kerulet: "4. kerület",
		marka: "N/A",
		modell: "betonozás ár",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "BetonFix",
		title: "Betonozás ár – 4. kerület",
		meta_description: "Betonozás ár Budapest 4. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás ár – Budapest 4. kerület",
		body: "A(z) betonozás ár stabil, időtálló megoldást ad. BetonFix csapata 4. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-4-kerulet-jarda-betonozas",
		varos: "Budapest",
		kerulet: "4. kerület",
		marka: "N/A",
		modell: "járda betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "AlapMester",
		title: "Járda betonozás – 4. kerület",
		meta_description: "Járda betonozás Budapest 4. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Járda betonozás – Budapest 4. kerület",
		body: "A(z) járda betonozás stabil, időtálló megoldást ad. AlapMester csapata 4. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-4-kerulet-alap-betonozas",
		varos: "Budapest",
		kerulet: "4. kerület",
		marka: "N/A",
		modell: "alap betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "BetonFix",
		title: "Alap betonozás – 4. kerület",
		meta_description: "Alap betonozás Budapest 4. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Alap betonozás – Budapest 4. kerület",
		body: "A(z) alap betonozás stabil, időtálló megoldást ad. BetonFix csapata 4. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-4-kerulet-aljzat-betonozas",
		varos: "Budapest",
		kerulet: "4. kerület",
		marka: "N/A",
		modell: "aljzat betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "AlapMester",
		title: "Aljzat betonozás – 4. kerület",
		meta_description: "Aljzat betonozás Budapest 4. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Aljzat betonozás – Budapest 4. kerület",
		body: "A(z) aljzat betonozás stabil, időtálló megoldást ad. AlapMester csapata 4. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-4-kerulet-fodem-betonozas",
		varos: "Budapest",
		kerulet: "4. kerület",
		marka: "N/A",
		modell: "födém betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "BetonFix",
		title: "Födém betonozás – 4. kerület",
		meta_description: "Födém betonozás Budapest 4. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Födém betonozás – Budapest 4. kerület",
		body: "A(z) födém betonozás stabil, időtálló megoldást ad. BetonFix csapata 4. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-4-kerulet-terasz-betonozas",
		varos: "Budapest",
		kerulet: "4. kerület",
		marka: "N/A",
		modell: "terasz betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "GyorsBeton",
		title: "Terasz betonozás – 4. kerület",
		meta_description: "Terasz betonozás Budapest 4. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Terasz betonozás – Budapest 4. kerület",
		body: "A(z) terasz betonozás stabil, időtálló megoldást ad. GyorsBeton csapata 4. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-4-kerulet-garazsalap-betonozas",
		varos: "Budapest",
		kerulet: "4. kerület",
		marka: "N/A",
		modell: "gárazsalap betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "AlapMester",
		title: "Gárazsalap betonozás – 4. kerület",
		meta_description: "Gárazsalap betonozás Budapest 4. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Gárazsalap betonozás – Budapest 4. kerület",
		body: "A(z) gárazsalap betonozás stabil, időtálló megoldást ad. AlapMester csapata 4. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-4-kerulet-ipari-padlo-betonozas",
		varos: "Budapest",
		kerulet: "4. kerület",
		marka: "N/A",
		modell: "ipári padló betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "AlapMester",
		title: "Ipári padló betonozás – 4. kerület",
		meta_description: "Ipári padló betonozás Budapest 4. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Ipári padló betonozás – Budapest 4. kerület",
		body: "A(z) ipári padló betonozás stabil, időtálló megoldást ad. AlapMester csapata 4. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-4-kerulet-betonozas-hazilag",
		varos: "Budapest",
		kerulet: "4. kerület",
		marka: "N/A",
		modell: "betonozás házilag",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "BetonProfi",
		title: "Betonozás házilag – 4. kerület",
		meta_description: "Betonozás házilag Budapest 4. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Betonozás házilag – Budapest 4. kerület",
		body: "A(z) betonozás házilag stabil, időtálló megoldást ad. BetonProfi csapata 4. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-4-kerulet-betonozas-menete",
		varos: "Budapest",
		kerulet: "4. kerület",
		marka: "N/A",
		modell: "betonozás menete",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "BetonFix",
		title: "Betonozás menete – 4. kerület",
		meta_description: "Betonozás menete Budapest 4. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás menete – Budapest 4. kerület",
		body: "A(z) betonozás menete stabil, időtálló megoldást ad. BetonFix csapata 4. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-4-kerulet-betonozas-m2-ara",
		varos: "Budapest",
		kerulet: "4. kerület",
		marka: "N/A",
		modell: "betonozás m2 ára",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "BetonFix",
		title: "Betonozás m2 ára – 4. kerület",
		meta_description: "Betonozás m2 ára Budapest 4. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás m2 ára – Budapest 4. kerület",
		body: "A(z) betonozás m2 ára stabil, időtálló megoldást ad. BetonFix csapata 4. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-5-kerulet-betonozas-budapest",
		varos: "Budapest",
		kerulet: "5. kerület",
		marka: "N/A",
		modell: "betonozás budapest",
		szerviz_tipus: "fooldal",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "GyorsBeton",
		title: "Betonozás budapest – 5. kerület",
		meta_description: "Betonozás budapest Budapest 5. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás budapest – Budapest 5. kerület",
		body: "A(z) betonozás budapest stabil, időtálló megoldást ad. GyorsBeton csapata 5. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-5-kerulet-betonozas-arak",
		varos: "Budapest",
		kerulet: "5. kerület",
		marka: "N/A",
		modell: "betonozás árak",
		szerviz_tipus: "blog",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "GyorsBeton",
		title: "Betonozás árak – 5. kerület",
		meta_description: "Betonozás árak Budapest 5. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás árak – Budapest 5. kerület",
		body: "A(z) betonozás árak stabil, időtálló megoldást ad. GyorsBeton csapata 5. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-5-kerulet-betonozas-ar",
		varos: "Budapest",
		kerulet: "5. kerület",
		marka: "N/A",
		modell: "betonozás ár",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "BetonFix",
		title: "Betonozás ár – 5. kerület",
		meta_description: "Betonozás ár Budapest 5. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás ár – Budapest 5. kerület",
		body: "A(z) betonozás ár stabil, időtálló megoldást ad. BetonFix csapata 5. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-5-kerulet-jarda-betonozas",
		varos: "Budapest",
		kerulet: "5. kerület",
		marka: "N/A",
		modell: "járda betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "Budapest Beton Team",
		title: "Járda betonozás – 5. kerület",
		meta_description: "Járda betonozás Budapest 5. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Járda betonozás – Budapest 5. kerület",
		body: "A(z) járda betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 5. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-5-kerulet-alap-betonozas",
		varos: "Budapest",
		kerulet: "5. kerület",
		marka: "N/A",
		modell: "alap betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "Budapest Beton Team",
		title: "Alap betonozás – 5. kerület",
		meta_description: "Alap betonozás Budapest 5. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Alap betonozás – Budapest 5. kerület",
		body: "A(z) alap betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 5. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-5-kerulet-aljzat-betonozas",
		varos: "Budapest",
		kerulet: "5. kerület",
		marka: "N/A",
		modell: "aljzat betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "BetonProfi",
		title: "Aljzat betonozás – 5. kerület",
		meta_description: "Aljzat betonozás Budapest 5. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Aljzat betonozás – Budapest 5. kerület",
		body: "A(z) aljzat betonozás stabil, időtálló megoldást ad. BetonProfi csapata 5. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-5-kerulet-fodem-betonozas",
		varos: "Budapest",
		kerulet: "5. kerület",
		marka: "N/A",
		modell: "födém betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "BetonFix",
		title: "Födém betonozás – 5. kerület",
		meta_description: "Födém betonozás Budapest 5. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Födém betonozás – Budapest 5. kerület",
		body: "A(z) födém betonozás stabil, időtálló megoldást ad. BetonFix csapata 5. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-5-kerulet-terasz-betonozas",
		varos: "Budapest",
		kerulet: "5. kerület",
		marka: "N/A",
		modell: "terasz betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "AlapMester",
		title: "Terasz betonozás – 5. kerület",
		meta_description: "Terasz betonozás Budapest 5. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Terasz betonozás – Budapest 5. kerület",
		body: "A(z) terasz betonozás stabil, időtálló megoldást ad. AlapMester csapata 5. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-5-kerulet-garazsalap-betonozas",
		varos: "Budapest",
		kerulet: "5. kerület",
		marka: "N/A",
		modell: "gárazsalap betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "Budapest Beton Team",
		title: "Gárazsalap betonozás – 5. kerület",
		meta_description: "Gárazsalap betonozás Budapest 5. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Gárazsalap betonozás – Budapest 5. kerület",
		body: "A(z) gárazsalap betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 5. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-5-kerulet-ipari-padlo-betonozas",
		varos: "Budapest",
		kerulet: "5. kerület",
		marka: "N/A",
		modell: "ipári padló betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "GyorsBeton",
		title: "Ipári padló betonozás – 5. kerület",
		meta_description: "Ipári padló betonozás Budapest 5. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Ipári padló betonozás – Budapest 5. kerület",
		body: "A(z) ipári padló betonozás stabil, időtálló megoldást ad. GyorsBeton csapata 5. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-5-kerulet-betonozas-hazilag",
		varos: "Budapest",
		kerulet: "5. kerület",
		marka: "N/A",
		modell: "betonozás házilag",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "GyorsBeton",
		title: "Betonozás házilag – 5. kerület",
		meta_description: "Betonozás házilag Budapest 5. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás házilag – Budapest 5. kerület",
		body: "A(z) betonozás házilag stabil, időtálló megoldást ad. GyorsBeton csapata 5. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-5-kerulet-betonozas-menete",
		varos: "Budapest",
		kerulet: "5. kerület",
		marka: "N/A",
		modell: "betonozás menete",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "BetonFix",
		title: "Betonozás menete – 5. kerület",
		meta_description: "Betonozás menete Budapest 5. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás menete – Budapest 5. kerület",
		body: "A(z) betonozás menete stabil, időtálló megoldást ad. BetonFix csapata 5. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-5-kerulet-betonozas-m2-ara",
		varos: "Budapest",
		kerulet: "5. kerület",
		marka: "N/A",
		modell: "betonozás m2 ára",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "GyorsBeton",
		title: "Betonozás m2 ára – 5. kerület",
		meta_description: "Betonozás m2 ára Budapest 5. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás m2 ára – Budapest 5. kerület",
		body: "A(z) betonozás m2 ára stabil, időtálló megoldást ad. GyorsBeton csapata 5. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-6-kerulet-betonozas-budapest",
		varos: "Budapest",
		kerulet: "6. kerület",
		marka: "N/A",
		modell: "betonozás budapest",
		szerviz_tipus: "fooldal",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "Budapest Beton Team",
		title: "Betonozás budapest – 6. kerület",
		meta_description: "Betonozás budapest Budapest 6. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Betonozás budapest – Budapest 6. kerület",
		body: "A(z) betonozás budapest stabil, időtálló megoldást ad. Budapest Beton Team csapata 6. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-6-kerulet-betonozas-arak",
		varos: "Budapest",
		kerulet: "6. kerület",
		marka: "N/A",
		modell: "betonozás árak",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "Budapest Beton Team",
		title: "Betonozás árak – 6. kerület",
		meta_description: "Betonozás árak Budapest 6. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Betonozás árak – Budapest 6. kerület",
		body: "A(z) betonozás árak stabil, időtálló megoldást ad. Budapest Beton Team csapata 6. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-6-kerulet-betonozas-ar",
		varos: "Budapest",
		kerulet: "6. kerület",
		marka: "N/A",
		modell: "betonozás ár",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "CityBeton",
		title: "Betonozás ár – 6. kerület",
		meta_description: "Betonozás ár Budapest 6. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás ár – Budapest 6. kerület",
		body: "A(z) betonozás ár stabil, időtálló megoldást ad. CityBeton csapata 6. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-6-kerulet-jarda-betonozas",
		varos: "Budapest",
		kerulet: "6. kerület",
		marka: "N/A",
		modell: "járda betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "CityBeton",
		title: "Járda betonozás – 6. kerület",
		meta_description: "Járda betonozás Budapest 6. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Járda betonozás – Budapest 6. kerület",
		body: "A(z) járda betonozás stabil, időtálló megoldást ad. CityBeton csapata 6. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-6-kerulet-alap-betonozas",
		varos: "Budapest",
		kerulet: "6. kerület",
		marka: "N/A",
		modell: "alap betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "GyorsBeton",
		title: "Alap betonozás – 6. kerület",
		meta_description: "Alap betonozás Budapest 6. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Alap betonozás – Budapest 6. kerület",
		body: "A(z) alap betonozás stabil, időtálló megoldást ad. GyorsBeton csapata 6. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-6-kerulet-aljzat-betonozas",
		varos: "Budapest",
		kerulet: "6. kerület",
		marka: "N/A",
		modell: "aljzat betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "GyorsBeton",
		title: "Aljzat betonozás – 6. kerület",
		meta_description: "Aljzat betonozás Budapest 6. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Aljzat betonozás – Budapest 6. kerület",
		body: "A(z) aljzat betonozás stabil, időtálló megoldást ad. GyorsBeton csapata 6. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-6-kerulet-fodem-betonozas",
		varos: "Budapest",
		kerulet: "6. kerület",
		marka: "N/A",
		modell: "födém betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "BetonFix",
		title: "Födém betonozás – 6. kerület",
		meta_description: "Födém betonozás Budapest 6. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Födém betonozás – Budapest 6. kerület",
		body: "A(z) födém betonozás stabil, időtálló megoldást ad. BetonFix csapata 6. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-6-kerulet-terasz-betonozas",
		varos: "Budapest",
		kerulet: "6. kerület",
		marka: "N/A",
		modell: "terasz betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "BetonProfi",
		title: "Terasz betonozás – 6. kerület",
		meta_description: "Terasz betonozás Budapest 6. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Terasz betonozás – Budapest 6. kerület",
		body: "A(z) terasz betonozás stabil, időtálló megoldást ad. BetonProfi csapata 6. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-6-kerulet-garazsalap-betonozas",
		varos: "Budapest",
		kerulet: "6. kerület",
		marka: "N/A",
		modell: "gárazsalap betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "Budapest Beton Team",
		title: "Gárazsalap betonozás – 6. kerület",
		meta_description: "Gárazsalap betonozás Budapest 6. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Gárazsalap betonozás – Budapest 6. kerület",
		body: "A(z) gárazsalap betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 6. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-6-kerulet-ipari-padlo-betonozas",
		varos: "Budapest",
		kerulet: "6. kerület",
		marka: "N/A",
		modell: "ipári padló betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "Budapest Beton Team",
		title: "Ipári padló betonozás – 6. kerület",
		meta_description: "Ipári padló betonozás Budapest 6. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Ipári padló betonozás – Budapest 6. kerület",
		body: "A(z) ipári padló betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 6. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-6-kerulet-betonozas-hazilag",
		varos: "Budapest",
		kerulet: "6. kerület",
		marka: "N/A",
		modell: "betonozás házilag",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "BetonFix",
		title: "Betonozás házilag – 6. kerület",
		meta_description: "Betonozás házilag Budapest 6. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás házilag – Budapest 6. kerület",
		body: "A(z) betonozás házilag stabil, időtálló megoldást ad. BetonFix csapata 6. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-6-kerulet-betonozas-menete",
		varos: "Budapest",
		kerulet: "6. kerület",
		marka: "N/A",
		modell: "betonozás menete",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "BetonProfi",
		title: "Betonozás menete – 6. kerület",
		meta_description: "Betonozás menete Budapest 6. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Betonozás menete – Budapest 6. kerület",
		body: "A(z) betonozás menete stabil, időtálló megoldást ad. BetonProfi csapata 6. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-6-kerulet-betonozas-m2-ara",
		varos: "Budapest",
		kerulet: "6. kerület",
		marka: "N/A",
		modell: "betonozás m2 ára",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "Budapest Beton Team",
		title: "Betonozás m2 ára – 6. kerület",
		meta_description: "Betonozás m2 ára Budapest 6. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Betonozás m2 ára – Budapest 6. kerület",
		body: "A(z) betonozás m2 ára stabil, időtálló megoldást ad. Budapest Beton Team csapata 6. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-7-kerulet-betonozas-budapest",
		varos: "Budapest",
		kerulet: "7. kerület",
		marka: "N/A",
		modell: "betonozás budapest",
		szerviz_tipus: "fooldal",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "CityBeton",
		title: "Betonozás budapest – 7. kerület",
		meta_description: "Betonozás budapest Budapest 7. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás budapest – Budapest 7. kerület",
		body: "A(z) betonozás budapest stabil, időtálló megoldást ad. CityBeton csapata 7. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-7-kerulet-betonozas-arak",
		varos: "Budapest",
		kerulet: "7. kerület",
		marka: "N/A",
		modell: "betonozás árak",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "BetonFix",
		title: "Betonozás árak – 7. kerület",
		meta_description: "Betonozás árak Budapest 7. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás árak – Budapest 7. kerület",
		body: "A(z) betonozás árak stabil, időtálló megoldást ad. BetonFix csapata 7. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-7-kerulet-betonozas-ar",
		varos: "Budapest",
		kerulet: "7. kerület",
		marka: "N/A",
		modell: "betonozás ár",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "BetonFix",
		title: "Betonozás ár – 7. kerület",
		meta_description: "Betonozás ár Budapest 7. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás ár – Budapest 7. kerület",
		body: "A(z) betonozás ár stabil, időtálló megoldást ad. BetonFix csapata 7. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-7-kerulet-jarda-betonozas",
		varos: "Budapest",
		kerulet: "7. kerület",
		marka: "N/A",
		modell: "járda betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "AlapMester",
		title: "Járda betonozás – 7. kerület",
		meta_description: "Járda betonozás Budapest 7. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Járda betonozás – Budapest 7. kerület",
		body: "A(z) járda betonozás stabil, időtálló megoldást ad. AlapMester csapata 7. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-7-kerulet-alap-betonozas",
		varos: "Budapest",
		kerulet: "7. kerület",
		marka: "N/A",
		modell: "alap betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "GyorsBeton",
		title: "Alap betonozás – 7. kerület",
		meta_description: "Alap betonozás Budapest 7. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Alap betonozás – Budapest 7. kerület",
		body: "A(z) alap betonozás stabil, időtálló megoldást ad. GyorsBeton csapata 7. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-7-kerulet-aljzat-betonozas",
		varos: "Budapest",
		kerulet: "7. kerület",
		marka: "N/A",
		modell: "aljzat betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "Budapest Beton Team",
		title: "Aljzat betonozás – 7. kerület",
		meta_description: "Aljzat betonozás Budapest 7. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Aljzat betonozás – Budapest 7. kerület",
		body: "A(z) aljzat betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 7. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-7-kerulet-fodem-betonozas",
		varos: "Budapest",
		kerulet: "7. kerület",
		marka: "N/A",
		modell: "födém betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "CityBeton",
		title: "Födém betonozás – 7. kerület",
		meta_description: "Födém betonozás Budapest 7. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Födém betonozás – Budapest 7. kerület",
		body: "A(z) födém betonozás stabil, időtálló megoldást ad. CityBeton csapata 7. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-7-kerulet-terasz-betonozas",
		varos: "Budapest",
		kerulet: "7. kerület",
		marka: "N/A",
		modell: "terasz betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "GyorsBeton",
		title: "Terasz betonozás – 7. kerület",
		meta_description: "Terasz betonozás Budapest 7. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Terasz betonozás – Budapest 7. kerület",
		body: "A(z) terasz betonozás stabil, időtálló megoldást ad. GyorsBeton csapata 7. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-7-kerulet-garazsalap-betonozas",
		varos: "Budapest",
		kerulet: "7. kerület",
		marka: "N/A",
		modell: "gárazsalap betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "GyorsBeton",
		title: "Gárazsalap betonozás – 7. kerület",
		meta_description: "Gárazsalap betonozás Budapest 7. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Gárazsalap betonozás – Budapest 7. kerület",
		body: "A(z) gárazsalap betonozás stabil, időtálló megoldást ad. GyorsBeton csapata 7. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-7-kerulet-ipari-padlo-betonozas",
		varos: "Budapest",
		kerulet: "7. kerület",
		marka: "N/A",
		modell: "ipári padló betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "AlapMester",
		title: "Ipári padló betonozás – 7. kerület",
		meta_description: "Ipári padló betonozás Budapest 7. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Ipári padló betonozás – Budapest 7. kerület",
		body: "A(z) ipári padló betonozás stabil, időtálló megoldást ad. AlapMester csapata 7. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-7-kerulet-betonozas-hazilag",
		varos: "Budapest",
		kerulet: "7. kerület",
		marka: "N/A",
		modell: "betonozás házilag",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "GyorsBeton",
		title: "Betonozás házilag – 7. kerület",
		meta_description: "Betonozás házilag Budapest 7. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás házilag – Budapest 7. kerület",
		body: "A(z) betonozás házilag stabil, időtálló megoldást ad. GyorsBeton csapata 7. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-7-kerulet-betonozas-menete",
		varos: "Budapest",
		kerulet: "7. kerület",
		marka: "N/A",
		modell: "betonozás menete",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "BetonFix",
		title: "Betonozás menete – 7. kerület",
		meta_description: "Betonozás menete Budapest 7. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás menete – Budapest 7. kerület",
		body: "A(z) betonozás menete stabil, időtálló megoldást ad. BetonFix csapata 7. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-7-kerulet-betonozas-m2-ara",
		varos: "Budapest",
		kerulet: "7. kerület",
		marka: "N/A",
		modell: "betonozás m2 ára",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "AlapMester",
		title: "Betonozás m2 ára – 7. kerület",
		meta_description: "Betonozás m2 ára Budapest 7. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Betonozás m2 ára – Budapest 7. kerület",
		body: "A(z) betonozás m2 ára stabil, időtálló megoldást ad. AlapMester csapata 7. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-8-kerulet-betonozas-budapest",
		varos: "Budapest",
		kerulet: "8. kerület",
		marka: "N/A",
		modell: "betonozás budapest",
		szerviz_tipus: "fooldal",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "CityBeton",
		title: "Betonozás budapest – 8. kerület",
		meta_description: "Betonozás budapest Budapest 8. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás budapest – Budapest 8. kerület",
		body: "A(z) betonozás budapest stabil, időtálló megoldást ad. CityBeton csapata 8. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-8-kerulet-betonozas-arak",
		varos: "Budapest",
		kerulet: "8. kerület",
		marka: "N/A",
		modell: "betonozás árak",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "AlapMester",
		title: "Betonozás árak – 8. kerület",
		meta_description: "Betonozás árak Budapest 8. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Betonozás árak – Budapest 8. kerület",
		body: "A(z) betonozás árak stabil, időtálló megoldást ad. AlapMester csapata 8. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-8-kerulet-betonozas-ar",
		varos: "Budapest",
		kerulet: "8. kerület",
		marka: "N/A",
		modell: "betonozás ár",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "AlapMester",
		title: "Betonozás ár – 8. kerület",
		meta_description: "Betonozás ár Budapest 8. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Betonozás ár – Budapest 8. kerület",
		body: "A(z) betonozás ár stabil, időtálló megoldást ad. AlapMester csapata 8. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-8-kerulet-jarda-betonozas",
		varos: "Budapest",
		kerulet: "8. kerület",
		marka: "N/A",
		modell: "járda betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "BetonFix",
		title: "Járda betonozás – 8. kerület",
		meta_description: "Járda betonozás Budapest 8. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Járda betonozás – Budapest 8. kerület",
		body: "A(z) járda betonozás stabil, időtálló megoldást ad. BetonFix csapata 8. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-8-kerulet-alap-betonozas",
		varos: "Budapest",
		kerulet: "8. kerület",
		marka: "N/A",
		modell: "alap betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "BetonFix",
		title: "Alap betonozás – 8. kerület",
		meta_description: "Alap betonozás Budapest 8. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Alap betonozás – Budapest 8. kerület",
		body: "A(z) alap betonozás stabil, időtálló megoldást ad. BetonFix csapata 8. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-8-kerulet-aljzat-betonozas",
		varos: "Budapest",
		kerulet: "8. kerület",
		marka: "N/A",
		modell: "aljzat betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "Budapest Beton Team",
		title: "Aljzat betonozás – 8. kerület",
		meta_description: "Aljzat betonozás Budapest 8. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Aljzat betonozás – Budapest 8. kerület",
		body: "A(z) aljzat betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 8. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-8-kerulet-fodem-betonozas",
		varos: "Budapest",
		kerulet: "8. kerület",
		marka: "N/A",
		modell: "födém betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "CityBeton",
		title: "Födém betonozás – 8. kerület",
		meta_description: "Födém betonozás Budapest 8. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Födém betonozás – Budapest 8. kerület",
		body: "A(z) födém betonozás stabil, időtálló megoldást ad. CityBeton csapata 8. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-8-kerulet-terasz-betonozas",
		varos: "Budapest",
		kerulet: "8. kerület",
		marka: "N/A",
		modell: "terasz betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "CityBeton",
		title: "Terasz betonozás – 8. kerület",
		meta_description: "Terasz betonozás Budapest 8. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Terasz betonozás – Budapest 8. kerület",
		body: "A(z) terasz betonozás stabil, időtálló megoldást ad. CityBeton csapata 8. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-8-kerulet-garazsalap-betonozas",
		varos: "Budapest",
		kerulet: "8. kerület",
		marka: "N/A",
		modell: "gárazsalap betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "GyorsBeton",
		title: "Gárazsalap betonozás – 8. kerület",
		meta_description: "Gárazsalap betonozás Budapest 8. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Gárazsalap betonozás – Budapest 8. kerület",
		body: "A(z) gárazsalap betonozás stabil, időtálló megoldást ad. GyorsBeton csapata 8. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-8-kerulet-ipari-padlo-betonozas",
		varos: "Budapest",
		kerulet: "8. kerület",
		marka: "N/A",
		modell: "ipári padló betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "AlapMester",
		title: "Ipári padló betonozás – 8. kerület",
		meta_description: "Ipári padló betonozás Budapest 8. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Ipári padló betonozás – Budapest 8. kerület",
		body: "A(z) ipári padló betonozás stabil, időtálló megoldást ad. AlapMester csapata 8. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-8-kerulet-betonozas-hazilag",
		varos: "Budapest",
		kerulet: "8. kerület",
		marka: "N/A",
		modell: "betonozás házilag",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "CityBeton",
		title: "Betonozás házilag – 8. kerület",
		meta_description: "Betonozás házilag Budapest 8. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás házilag – Budapest 8. kerület",
		body: "A(z) betonozás házilag stabil, időtálló megoldást ad. CityBeton csapata 8. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-8-kerulet-betonozas-menete",
		varos: "Budapest",
		kerulet: "8. kerület",
		marka: "N/A",
		modell: "betonozás menete",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "BetonFix",
		title: "Betonozás menete – 8. kerület",
		meta_description: "Betonozás menete Budapest 8. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás menete – Budapest 8. kerület",
		body: "A(z) betonozás menete stabil, időtálló megoldást ad. BetonFix csapata 8. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-8-kerulet-betonozas-m2-ara",
		varos: "Budapest",
		kerulet: "8. kerület",
		marka: "N/A",
		modell: "betonozás m2 ára",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "BetonFix",
		title: "Betonozás m2 ára – 8. kerület",
		meta_description: "Betonozás m2 ára Budapest 8. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás m2 ára – Budapest 8. kerület",
		body: "A(z) betonozás m2 ára stabil, időtálló megoldást ad. BetonFix csapata 8. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-9-kerulet-betonozas-budapest",
		varos: "Budapest",
		kerulet: "9. kerület",
		marka: "N/A",
		modell: "betonozás budapest",
		szerviz_tipus: "fooldal",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "BetonFix",
		title: "Betonozás budapest – 9. kerület",
		meta_description: "Betonozás budapest Budapest 9. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás budapest – Budapest 9. kerület",
		body: "A(z) betonozás budapest stabil, időtálló megoldást ad. BetonFix csapata 9. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-9-kerulet-betonozas-arak",
		varos: "Budapest",
		kerulet: "9. kerület",
		marka: "N/A",
		modell: "betonozás árak",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "BetonFix",
		title: "Betonozás árak – 9. kerület",
		meta_description: "Betonozás árak Budapest 9. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás árak – Budapest 9. kerület",
		body: "A(z) betonozás árak stabil, időtálló megoldást ad. BetonFix csapata 9. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-9-kerulet-betonozas-ar",
		varos: "Budapest",
		kerulet: "9. kerület",
		marka: "N/A",
		modell: "betonozás ár",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "CityBeton",
		title: "Betonozás ár – 9. kerület",
		meta_description: "Betonozás ár Budapest 9. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás ár – Budapest 9. kerület",
		body: "A(z) betonozás ár stabil, időtálló megoldást ad. CityBeton csapata 9. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-9-kerulet-jarda-betonozas",
		varos: "Budapest",
		kerulet: "9. kerület",
		marka: "N/A",
		modell: "járda betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "BetonProfi",
		title: "Járda betonozás – 9. kerület",
		meta_description: "Járda betonozás Budapest 9. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Járda betonozás – Budapest 9. kerület",
		body: "A(z) járda betonozás stabil, időtálló megoldást ad. BetonProfi csapata 9. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-9-kerulet-alap-betonozas",
		varos: "Budapest",
		kerulet: "9. kerület",
		marka: "N/A",
		modell: "alap betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "Budapest Beton Team",
		title: "Alap betonozás – 9. kerület",
		meta_description: "Alap betonozás Budapest 9. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Alap betonozás – Budapest 9. kerület",
		body: "A(z) alap betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 9. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-9-kerulet-aljzat-betonozas",
		varos: "Budapest",
		kerulet: "9. kerület",
		marka: "N/A",
		modell: "aljzat betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "CityBeton",
		title: "Aljzat betonozás – 9. kerület",
		meta_description: "Aljzat betonozás Budapest 9. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Aljzat betonozás – Budapest 9. kerület",
		body: "A(z) aljzat betonozás stabil, időtálló megoldást ad. CityBeton csapata 9. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-9-kerulet-fodem-betonozas",
		varos: "Budapest",
		kerulet: "9. kerület",
		marka: "N/A",
		modell: "födém betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "GyorsBeton",
		title: "Födém betonozás – 9. kerület",
		meta_description: "Födém betonozás Budapest 9. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Födém betonozás – Budapest 9. kerület",
		body: "A(z) födém betonozás stabil, időtálló megoldást ad. GyorsBeton csapata 9. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-9-kerulet-terasz-betonozas",
		varos: "Budapest",
		kerulet: "9. kerület",
		marka: "N/A",
		modell: "terasz betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "Budapest Beton Team",
		title: "Terasz betonozás – 9. kerület",
		meta_description: "Terasz betonozás Budapest 9. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Terasz betonozás – Budapest 9. kerület",
		body: "A(z) terasz betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 9. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-9-kerulet-garazsalap-betonozas",
		varos: "Budapest",
		kerulet: "9. kerület",
		marka: "N/A",
		modell: "gárazsalap betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "BetonProfi",
		title: "Gárazsalap betonozás – 9. kerület",
		meta_description: "Gárazsalap betonozás Budapest 9. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Gárazsalap betonozás – Budapest 9. kerület",
		body: "A(z) gárazsalap betonozás stabil, időtálló megoldást ad. BetonProfi csapata 9. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-9-kerulet-ipari-padlo-betonozas",
		varos: "Budapest",
		kerulet: "9. kerület",
		marka: "N/A",
		modell: "ipári padló betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "AlapMester",
		title: "Ipári padló betonozás – 9. kerület",
		meta_description: "Ipári padló betonozás Budapest 9. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Ipári padló betonozás – Budapest 9. kerület",
		body: "A(z) ipári padló betonozás stabil, időtálló megoldást ad. AlapMester csapata 9. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-9-kerulet-betonozas-hazilag",
		varos: "Budapest",
		kerulet: "9. kerület",
		marka: "N/A",
		modell: "betonozás házilag",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "BetonFix",
		title: "Betonozás házilag – 9. kerület",
		meta_description: "Betonozás házilag Budapest 9. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás házilag – Budapest 9. kerület",
		body: "A(z) betonozás házilag stabil, időtálló megoldást ad. BetonFix csapata 9. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-9-kerulet-betonozas-menete",
		varos: "Budapest",
		kerulet: "9. kerület",
		marka: "N/A",
		modell: "betonozás menete",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "GyorsBeton",
		title: "Betonozás menete – 9. kerület",
		meta_description: "Betonozás menete Budapest 9. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás menete – Budapest 9. kerület",
		body: "A(z) betonozás menete stabil, időtálló megoldást ad. GyorsBeton csapata 9. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-9-kerulet-betonozas-m2-ara",
		varos: "Budapest",
		kerulet: "9. kerület",
		marka: "N/A",
		modell: "betonozás m2 ára",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "BetonFix",
		title: "Betonozás m2 ára – 9. kerület",
		meta_description: "Betonozás m2 ára Budapest 9. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás m2 ára – Budapest 9. kerület",
		body: "A(z) betonozás m2 ára stabil, időtálló megoldást ad. BetonFix csapata 9. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-10-kerulet-betonozas-budapest",
		varos: "Budapest",
		kerulet: "10. kerület",
		marka: "N/A",
		modell: "betonozás budapest",
		szerviz_tipus: "fooldal",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "AlapMester",
		title: "Betonozás budapest – 10. kerület",
		meta_description: "Betonozás budapest Budapest 10. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Betonozás budapest – Budapest 10. kerület",
		body: "A(z) betonozás budapest stabil, időtálló megoldást ad. AlapMester csapata 10. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-10-kerulet-betonozas-arak",
		varos: "Budapest",
		kerulet: "10. kerület",
		marka: "N/A",
		modell: "betonozás árak",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "BetonProfi",
		title: "Betonozás árak – 10. kerület",
		meta_description: "Betonozás árak Budapest 10. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Betonozás árak – Budapest 10. kerület",
		body: "A(z) betonozás árak stabil, időtálló megoldást ad. BetonProfi csapata 10. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-10-kerulet-betonozas-ar",
		varos: "Budapest",
		kerulet: "10. kerület",
		marka: "N/A",
		modell: "betonozás ár",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "GyorsBeton",
		title: "Betonozás ár – 10. kerület",
		meta_description: "Betonozás ár Budapest 10. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás ár – Budapest 10. kerület",
		body: "A(z) betonozás ár stabil, időtálló megoldást ad. GyorsBeton csapata 10. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-10-kerulet-jarda-betonozas",
		varos: "Budapest",
		kerulet: "10. kerület",
		marka: "N/A",
		modell: "járda betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "Budapest Beton Team",
		title: "Járda betonozás – 10. kerület",
		meta_description: "Járda betonozás Budapest 10. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Járda betonozás – Budapest 10. kerület",
		body: "A(z) járda betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 10. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-10-kerulet-alap-betonozas",
		varos: "Budapest",
		kerulet: "10. kerület",
		marka: "N/A",
		modell: "alap betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "CityBeton",
		title: "Alap betonozás – 10. kerület",
		meta_description: "Alap betonozás Budapest 10. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Alap betonozás – Budapest 10. kerület",
		body: "A(z) alap betonozás stabil, időtálló megoldást ad. CityBeton csapata 10. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-10-kerulet-aljzat-betonozas",
		varos: "Budapest",
		kerulet: "10. kerület",
		marka: "N/A",
		modell: "aljzat betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "CityBeton",
		title: "Aljzat betonozás – 10. kerület",
		meta_description: "Aljzat betonozás Budapest 10. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Aljzat betonozás – Budapest 10. kerület",
		body: "A(z) aljzat betonozás stabil, időtálló megoldást ad. CityBeton csapata 10. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-10-kerulet-fodem-betonozas",
		varos: "Budapest",
		kerulet: "10. kerület",
		marka: "N/A",
		modell: "födém betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "GyorsBeton",
		title: "Födém betonozás – 10. kerület",
		meta_description: "Födém betonozás Budapest 10. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Födém betonozás – Budapest 10. kerület",
		body: "A(z) födém betonozás stabil, időtálló megoldást ad. GyorsBeton csapata 10. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-10-kerulet-terasz-betonozas",
		varos: "Budapest",
		kerulet: "10. kerület",
		marka: "N/A",
		modell: "terasz betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "AlapMester",
		title: "Terasz betonozás – 10. kerület",
		meta_description: "Terasz betonozás Budapest 10. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Terasz betonozás – Budapest 10. kerület",
		body: "A(z) terasz betonozás stabil, időtálló megoldást ad. AlapMester csapata 10. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-10-kerulet-garazsalap-betonozas",
		varos: "Budapest",
		kerulet: "10. kerület",
		marka: "N/A",
		modell: "gárazsalap betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "BetonFix",
		title: "Gárazsalap betonozás – 10. kerület",
		meta_description: "Gárazsalap betonozás Budapest 10. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Gárazsalap betonozás – Budapest 10. kerület",
		body: "A(z) gárazsalap betonozás stabil, időtálló megoldást ad. BetonFix csapata 10. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-10-kerulet-ipari-padlo-betonozas",
		varos: "Budapest",
		kerulet: "10. kerület",
		marka: "N/A",
		modell: "ipári padló betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "AlapMester",
		title: "Ipári padló betonozás – 10. kerület",
		meta_description: "Ipári padló betonozás Budapest 10. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Ipári padló betonozás – Budapest 10. kerület",
		body: "A(z) ipári padló betonozás stabil, időtálló megoldást ad. AlapMester csapata 10. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-10-kerulet-betonozas-hazilag",
		varos: "Budapest",
		kerulet: "10. kerület",
		marka: "N/A",
		modell: "betonozás házilag",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "BetonFix",
		title: "Betonozás házilag – 10. kerület",
		meta_description: "Betonozás házilag Budapest 10. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás házilag – Budapest 10. kerület",
		body: "A(z) betonozás házilag stabil, időtálló megoldást ad. BetonFix csapata 10. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-10-kerulet-betonozas-menete",
		varos: "Budapest",
		kerulet: "10. kerület",
		marka: "N/A",
		modell: "betonozás menete",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "BetonFix",
		title: "Betonozás menete – 10. kerület",
		meta_description: "Betonozás menete Budapest 10. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás menete – Budapest 10. kerület",
		body: "A(z) betonozás menete stabil, időtálló megoldást ad. BetonFix csapata 10. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-10-kerulet-betonozas-m2-ara",
		varos: "Budapest",
		kerulet: "10. kerület",
		marka: "N/A",
		modell: "betonozás m2 ára",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "GyorsBeton",
		title: "Betonozás m2 ára – 10. kerület",
		meta_description: "Betonozás m2 ára Budapest 10. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás m2 ára – Budapest 10. kerület",
		body: "A(z) betonozás m2 ára stabil, időtálló megoldást ad. GyorsBeton csapata 10. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-11-kerulet-betonozas-budapest",
		varos: "Budapest",
		kerulet: "11. kerület",
		marka: "N/A",
		modell: "betonozás budapest",
		szerviz_tipus: "fooldal",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "BetonFix",
		title: "Betonozás budapest – 11. kerület",
		meta_description: "Betonozás budapest Budapest 11. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás budapest – Budapest 11. kerület",
		body: "A(z) betonozás budapest stabil, időtálló megoldást ad. BetonFix csapata 11. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-11-kerulet-betonozas-arak",
		varos: "Budapest",
		kerulet: "11. kerület",
		marka: "N/A",
		modell: "betonozás árak",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "AlapMester",
		title: "Betonozás árak – 11. kerület",
		meta_description: "Betonozás árak Budapest 11. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Betonozás árak – Budapest 11. kerület",
		body: "A(z) betonozás árak stabil, időtálló megoldást ad. AlapMester csapata 11. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-11-kerulet-betonozas-ar",
		varos: "Budapest",
		kerulet: "11. kerület",
		marka: "N/A",
		modell: "betonozás ár",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "BetonProfi",
		title: "Betonozás ár – 11. kerület",
		meta_description: "Betonozás ár Budapest 11. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Betonozás ár – Budapest 11. kerület",
		body: "A(z) betonozás ár stabil, időtálló megoldást ad. BetonProfi csapata 11. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-11-kerulet-jarda-betonozas",
		varos: "Budapest",
		kerulet: "11. kerület",
		marka: "N/A",
		modell: "járda betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "BetonProfi",
		title: "Járda betonozás – 11. kerület",
		meta_description: "Járda betonozás Budapest 11. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Járda betonozás – Budapest 11. kerület",
		body: "A(z) járda betonozás stabil, időtálló megoldást ad. BetonProfi csapata 11. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-11-kerulet-alap-betonozas",
		varos: "Budapest",
		kerulet: "11. kerület",
		marka: "N/A",
		modell: "alap betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "BetonProfi",
		title: "Alap betonozás – 11. kerület",
		meta_description: "Alap betonozás Budapest 11. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Alap betonozás – Budapest 11. kerület",
		body: "A(z) alap betonozás stabil, időtálló megoldást ad. BetonProfi csapata 11. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-11-kerulet-aljzat-betonozas",
		varos: "Budapest",
		kerulet: "11. kerület",
		marka: "N/A",
		modell: "aljzat betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "BetonFix",
		title: "Aljzat betonozás – 11. kerület",
		meta_description: "Aljzat betonozás Budapest 11. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Aljzat betonozás – Budapest 11. kerület",
		body: "A(z) aljzat betonozás stabil, időtálló megoldást ad. BetonFix csapata 11. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-11-kerulet-fodem-betonozas",
		varos: "Budapest",
		kerulet: "11. kerület",
		marka: "N/A",
		modell: "födém betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "Budapest Beton Team",
		title: "Födém betonozás – 11. kerület",
		meta_description: "Födém betonozás Budapest 11. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Födém betonozás – Budapest 11. kerület",
		body: "A(z) födém betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 11. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-11-kerulet-terasz-betonozas",
		varos: "Budapest",
		kerulet: "11. kerület",
		marka: "N/A",
		modell: "terasz betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "BetonProfi",
		title: "Terasz betonozás – 11. kerület",
		meta_description: "Terasz betonozás Budapest 11. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Terasz betonozás – Budapest 11. kerület",
		body: "A(z) terasz betonozás stabil, időtálló megoldást ad. BetonProfi csapata 11. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-11-kerulet-garazsalap-betonozas",
		varos: "Budapest",
		kerulet: "11. kerület",
		marka: "N/A",
		modell: "gárazsalap betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "CityBeton",
		title: "Gárazsalap betonozás – 11. kerület",
		meta_description: "Gárazsalap betonozás Budapest 11. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Gárazsalap betonozás – Budapest 11. kerület",
		body: "A(z) gárazsalap betonozás stabil, időtálló megoldást ad. CityBeton csapata 11. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-11-kerulet-ipari-padlo-betonozas",
		varos: "Budapest",
		kerulet: "11. kerület",
		marka: "N/A",
		modell: "ipári padló betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "Budapest Beton Team",
		title: "Ipári padló betonozás – 11. kerület",
		meta_description: "Ipári padló betonozás Budapest 11. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Ipári padló betonozás – Budapest 11. kerület",
		body: "A(z) ipári padló betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 11. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-11-kerulet-betonozas-hazilag",
		varos: "Budapest",
		kerulet: "11. kerület",
		marka: "N/A",
		modell: "betonozás házilag",
		szerviz_tipus: "blog",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "CityBeton",
		title: "Betonozás házilag – 11. kerület",
		meta_description: "Betonozás házilag Budapest 11. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás házilag – Budapest 11. kerület",
		body: "A(z) betonozás házilag stabil, időtálló megoldást ad. CityBeton csapata 11. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-11-kerulet-betonozas-menete",
		varos: "Budapest",
		kerulet: "11. kerület",
		marka: "N/A",
		modell: "betonozás menete",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "BetonProfi",
		title: "Betonozás menete – 11. kerület",
		meta_description: "Betonozás menete Budapest 11. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Betonozás menete – Budapest 11. kerület",
		body: "A(z) betonozás menete stabil, időtálló megoldást ad. BetonProfi csapata 11. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-11-kerulet-betonozas-m2-ara",
		varos: "Budapest",
		kerulet: "11. kerület",
		marka: "N/A",
		modell: "betonozás m2 ára",
		szerviz_tipus: "blog",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "BetonProfi",
		title: "Betonozás m2 ára – 11. kerület",
		meta_description: "Betonozás m2 ára Budapest 11. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Betonozás m2 ára – Budapest 11. kerület",
		body: "A(z) betonozás m2 ára stabil, időtálló megoldást ad. BetonProfi csapata 11. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-12-kerulet-betonozas-budapest",
		varos: "Budapest",
		kerulet: "12. kerület",
		marka: "N/A",
		modell: "betonozás budapest",
		szerviz_tipus: "fooldal",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "CityBeton",
		title: "Betonozás budapest – 12. kerület",
		meta_description: "Betonozás budapest Budapest 12. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás budapest – Budapest 12. kerület",
		body: "A(z) betonozás budapest stabil, időtálló megoldást ad. CityBeton csapata 12. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-12-kerulet-betonozas-arak",
		varos: "Budapest",
		kerulet: "12. kerület",
		marka: "N/A",
		modell: "betonozás árak",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "Budapest Beton Team",
		title: "Betonozás árak – 12. kerület",
		meta_description: "Betonozás árak Budapest 12. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Betonozás árak – Budapest 12. kerület",
		body: "A(z) betonozás árak stabil, időtálló megoldást ad. Budapest Beton Team csapata 12. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-12-kerulet-betonozas-ar",
		varos: "Budapest",
		kerulet: "12. kerület",
		marka: "N/A",
		modell: "betonozás ár",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "AlapMester",
		title: "Betonozás ár – 12. kerület",
		meta_description: "Betonozás ár Budapest 12. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Betonozás ár – Budapest 12. kerület",
		body: "A(z) betonozás ár stabil, időtálló megoldást ad. AlapMester csapata 12. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-12-kerulet-jarda-betonozas",
		varos: "Budapest",
		kerulet: "12. kerület",
		marka: "N/A",
		modell: "járda betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "BetonFix",
		title: "Járda betonozás – 12. kerület",
		meta_description: "Járda betonozás Budapest 12. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Járda betonozás – Budapest 12. kerület",
		body: "A(z) járda betonozás stabil, időtálló megoldást ad. BetonFix csapata 12. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-12-kerulet-alap-betonozas",
		varos: "Budapest",
		kerulet: "12. kerület",
		marka: "N/A",
		modell: "alap betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "AlapMester",
		title: "Alap betonozás – 12. kerület",
		meta_description: "Alap betonozás Budapest 12. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Alap betonozás – Budapest 12. kerület",
		body: "A(z) alap betonozás stabil, időtálló megoldást ad. AlapMester csapata 12. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-12-kerulet-aljzat-betonozas",
		varos: "Budapest",
		kerulet: "12. kerület",
		marka: "N/A",
		modell: "aljzat betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "Budapest Beton Team",
		title: "Aljzat betonozás – 12. kerület",
		meta_description: "Aljzat betonozás Budapest 12. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Aljzat betonozás – Budapest 12. kerület",
		body: "A(z) aljzat betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 12. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-12-kerulet-fodem-betonozas",
		varos: "Budapest",
		kerulet: "12. kerület",
		marka: "N/A",
		modell: "födém betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "AlapMester",
		title: "Födém betonozás – 12. kerület",
		meta_description: "Födém betonozás Budapest 12. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Födém betonozás – Budapest 12. kerület",
		body: "A(z) födém betonozás stabil, időtálló megoldást ad. AlapMester csapata 12. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-12-kerulet-terasz-betonozas",
		varos: "Budapest",
		kerulet: "12. kerület",
		marka: "N/A",
		modell: "terasz betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "BetonFix",
		title: "Terasz betonozás – 12. kerület",
		meta_description: "Terasz betonozás Budapest 12. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Terasz betonozás – Budapest 12. kerület",
		body: "A(z) terasz betonozás stabil, időtálló megoldást ad. BetonFix csapata 12. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-12-kerulet-garazsalap-betonozas",
		varos: "Budapest",
		kerulet: "12. kerület",
		marka: "N/A",
		modell: "gárazsalap betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "AlapMester",
		title: "Gárazsalap betonozás – 12. kerület",
		meta_description: "Gárazsalap betonozás Budapest 12. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Gárazsalap betonozás – Budapest 12. kerület",
		body: "A(z) gárazsalap betonozás stabil, időtálló megoldást ad. AlapMester csapata 12. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-12-kerulet-ipari-padlo-betonozas",
		varos: "Budapest",
		kerulet: "12. kerület",
		marka: "N/A",
		modell: "ipári padló betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "CityBeton",
		title: "Ipári padló betonozás – 12. kerület",
		meta_description: "Ipári padló betonozás Budapest 12. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Ipári padló betonozás – Budapest 12. kerület",
		body: "A(z) ipári padló betonozás stabil, időtálló megoldást ad. CityBeton csapata 12. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-12-kerulet-betonozas-hazilag",
		varos: "Budapest",
		kerulet: "12. kerület",
		marka: "N/A",
		modell: "betonozás házilag",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "CityBeton",
		title: "Betonozás házilag – 12. kerület",
		meta_description: "Betonozás házilag Budapest 12. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás házilag – Budapest 12. kerület",
		body: "A(z) betonozás házilag stabil, időtálló megoldást ad. CityBeton csapata 12. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-12-kerulet-betonozas-menete",
		varos: "Budapest",
		kerulet: "12. kerület",
		marka: "N/A",
		modell: "betonozás menete",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "BetonFix",
		title: "Betonozás menete – 12. kerület",
		meta_description: "Betonozás menete Budapest 12. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás menete – Budapest 12. kerület",
		body: "A(z) betonozás menete stabil, időtálló megoldást ad. BetonFix csapata 12. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-12-kerulet-betonozas-m2-ara",
		varos: "Budapest",
		kerulet: "12. kerület",
		marka: "N/A",
		modell: "betonozás m2 ára",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "BetonFix",
		title: "Betonozás m2 ára – 12. kerület",
		meta_description: "Betonozás m2 ára Budapest 12. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás m2 ára – Budapest 12. kerület",
		body: "A(z) betonozás m2 ára stabil, időtálló megoldást ad. BetonFix csapata 12. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-13-kerulet-betonozas-budapest",
		varos: "Budapest",
		kerulet: "13. kerület",
		marka: "N/A",
		modell: "betonozás budapest",
		szerviz_tipus: "fooldal",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "GyorsBeton",
		title: "Betonozás budapest – 13. kerület",
		meta_description: "Betonozás budapest Budapest 13. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás budapest – Budapest 13. kerület",
		body: "A(z) betonozás budapest stabil, időtálló megoldást ad. GyorsBeton csapata 13. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-13-kerulet-betonozas-arak",
		varos: "Budapest",
		kerulet: "13. kerület",
		marka: "N/A",
		modell: "betonozás árak",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "BetonProfi",
		title: "Betonozás árak – 13. kerület",
		meta_description: "Betonozás árak Budapest 13. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Betonozás árak – Budapest 13. kerület",
		body: "A(z) betonozás árak stabil, időtálló megoldást ad. BetonProfi csapata 13. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-13-kerulet-betonozas-ar",
		varos: "Budapest",
		kerulet: "13. kerület",
		marka: "N/A",
		modell: "betonozás ár",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "GyorsBeton",
		title: "Betonozás ár – 13. kerület",
		meta_description: "Betonozás ár Budapest 13. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás ár – Budapest 13. kerület",
		body: "A(z) betonozás ár stabil, időtálló megoldást ad. GyorsBeton csapata 13. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-13-kerulet-jarda-betonozas",
		varos: "Budapest",
		kerulet: "13. kerület",
		marka: "N/A",
		modell: "járda betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "BetonProfi",
		title: "Járda betonozás – 13. kerület",
		meta_description: "Járda betonozás Budapest 13. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Járda betonozás – Budapest 13. kerület",
		body: "A(z) járda betonozás stabil, időtálló megoldást ad. BetonProfi csapata 13. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-13-kerulet-alap-betonozas",
		varos: "Budapest",
		kerulet: "13. kerület",
		marka: "N/A",
		modell: "alap betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "Budapest Beton Team",
		title: "Alap betonozás – 13. kerület",
		meta_description: "Alap betonozás Budapest 13. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Alap betonozás – Budapest 13. kerület",
		body: "A(z) alap betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 13. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-13-kerulet-aljzat-betonozas",
		varos: "Budapest",
		kerulet: "13. kerület",
		marka: "N/A",
		modell: "aljzat betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "AlapMester",
		title: "Aljzat betonozás – 13. kerület",
		meta_description: "Aljzat betonozás Budapest 13. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Aljzat betonozás – Budapest 13. kerület",
		body: "A(z) aljzat betonozás stabil, időtálló megoldást ad. AlapMester csapata 13. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-13-kerulet-fodem-betonozas",
		varos: "Budapest",
		kerulet: "13. kerület",
		marka: "N/A",
		modell: "födém betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "AlapMester",
		title: "Födém betonozás – 13. kerület",
		meta_description: "Födém betonozás Budapest 13. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Födém betonozás – Budapest 13. kerület",
		body: "A(z) födém betonozás stabil, időtálló megoldást ad. AlapMester csapata 13. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-13-kerulet-terasz-betonozas",
		varos: "Budapest",
		kerulet: "13. kerület",
		marka: "N/A",
		modell: "terasz betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "BetonProfi",
		title: "Terasz betonozás – 13. kerület",
		meta_description: "Terasz betonozás Budapest 13. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Terasz betonozás – Budapest 13. kerület",
		body: "A(z) terasz betonozás stabil, időtálló megoldást ad. BetonProfi csapata 13. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-13-kerulet-garazsalap-betonozas",
		varos: "Budapest",
		kerulet: "13. kerület",
		marka: "N/A",
		modell: "gárazsalap betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "GyorsBeton",
		title: "Gárazsalap betonozás – 13. kerület",
		meta_description: "Gárazsalap betonozás Budapest 13. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Gárazsalap betonozás – Budapest 13. kerület",
		body: "A(z) gárazsalap betonozás stabil, időtálló megoldást ad. GyorsBeton csapata 13. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-13-kerulet-ipari-padlo-betonozas",
		varos: "Budapest",
		kerulet: "13. kerület",
		marka: "N/A",
		modell: "ipári padló betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "AlapMester",
		title: "Ipári padló betonozás – 13. kerület",
		meta_description: "Ipári padló betonozás Budapest 13. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Ipári padló betonozás – Budapest 13. kerület",
		body: "A(z) ipári padló betonozás stabil, időtálló megoldást ad. AlapMester csapata 13. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-13-kerulet-betonozas-hazilag",
		varos: "Budapest",
		kerulet: "13. kerület",
		marka: "N/A",
		modell: "betonozás házilag",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "Budapest Beton Team",
		title: "Betonozás házilag – 13. kerület",
		meta_description: "Betonozás házilag Budapest 13. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Betonozás házilag – Budapest 13. kerület",
		body: "A(z) betonozás házilag stabil, időtálló megoldást ad. Budapest Beton Team csapata 13. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-13-kerulet-betonozas-menete",
		varos: "Budapest",
		kerulet: "13. kerület",
		marka: "N/A",
		modell: "betonozás menete",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "BetonProfi",
		title: "Betonozás menete – 13. kerület",
		meta_description: "Betonozás menete Budapest 13. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Betonozás menete – Budapest 13. kerület",
		body: "A(z) betonozás menete stabil, időtálló megoldást ad. BetonProfi csapata 13. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-13-kerulet-betonozas-m2-ara",
		varos: "Budapest",
		kerulet: "13. kerület",
		marka: "N/A",
		modell: "betonozás m2 ára",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "GyorsBeton",
		title: "Betonozás m2 ára – 13. kerület",
		meta_description: "Betonozás m2 ára Budapest 13. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás m2 ára – Budapest 13. kerület",
		body: "A(z) betonozás m2 ára stabil, időtálló megoldást ad. GyorsBeton csapata 13. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-14-kerulet-betonozas-budapest",
		varos: "Budapest",
		kerulet: "14. kerület",
		marka: "N/A",
		modell: "betonozás budapest",
		szerviz_tipus: "fooldal",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "CityBeton",
		title: "Betonozás budapest – 14. kerület",
		meta_description: "Betonozás budapest Budapest 14. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás budapest – Budapest 14. kerület",
		body: "A(z) betonozás budapest stabil, időtálló megoldást ad. CityBeton csapata 14. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-14-kerulet-betonozas-arak",
		varos: "Budapest",
		kerulet: "14. kerület",
		marka: "N/A",
		modell: "betonozás árak",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "BetonProfi",
		title: "Betonozás árak – 14. kerület",
		meta_description: "Betonozás árak Budapest 14. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Betonozás árak – Budapest 14. kerület",
		body: "A(z) betonozás árak stabil, időtálló megoldást ad. BetonProfi csapata 14. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-14-kerulet-betonozas-ar",
		varos: "Budapest",
		kerulet: "14. kerület",
		marka: "N/A",
		modell: "betonozás ár",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "BetonFix",
		title: "Betonozás ár – 14. kerület",
		meta_description: "Betonozás ár Budapest 14. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás ár – Budapest 14. kerület",
		body: "A(z) betonozás ár stabil, időtálló megoldást ad. BetonFix csapata 14. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-14-kerulet-jarda-betonozas",
		varos: "Budapest",
		kerulet: "14. kerület",
		marka: "N/A",
		modell: "járda betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "AlapMester",
		title: "Járda betonozás – 14. kerület",
		meta_description: "Járda betonozás Budapest 14. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Járda betonozás – Budapest 14. kerület",
		body: "A(z) járda betonozás stabil, időtálló megoldást ad. AlapMester csapata 14. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-14-kerulet-alap-betonozas",
		varos: "Budapest",
		kerulet: "14. kerület",
		marka: "N/A",
		modell: "alap betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "BetonProfi",
		title: "Alap betonozás – 14. kerület",
		meta_description: "Alap betonozás Budapest 14. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Alap betonozás – Budapest 14. kerület",
		body: "A(z) alap betonozás stabil, időtálló megoldást ad. BetonProfi csapata 14. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-14-kerulet-aljzat-betonozas",
		varos: "Budapest",
		kerulet: "14. kerület",
		marka: "N/A",
		modell: "aljzat betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "CityBeton",
		title: "Aljzat betonozás – 14. kerület",
		meta_description: "Aljzat betonozás Budapest 14. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Aljzat betonozás – Budapest 14. kerület",
		body: "A(z) aljzat betonozás stabil, időtálló megoldást ad. CityBeton csapata 14. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-14-kerulet-fodem-betonozas",
		varos: "Budapest",
		kerulet: "14. kerület",
		marka: "N/A",
		modell: "födém betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "GyorsBeton",
		title: "Födém betonozás – 14. kerület",
		meta_description: "Födém betonozás Budapest 14. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Födém betonozás – Budapest 14. kerület",
		body: "A(z) födém betonozás stabil, időtálló megoldást ad. GyorsBeton csapata 14. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-14-kerulet-terasz-betonozas",
		varos: "Budapest",
		kerulet: "14. kerület",
		marka: "N/A",
		modell: "terasz betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "AlapMester",
		title: "Terasz betonozás – 14. kerület",
		meta_description: "Terasz betonozás Budapest 14. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Terasz betonozás – Budapest 14. kerület",
		body: "A(z) terasz betonozás stabil, időtálló megoldást ad. AlapMester csapata 14. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-14-kerulet-garazsalap-betonozas",
		varos: "Budapest",
		kerulet: "14. kerület",
		marka: "N/A",
		modell: "gárazsalap betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "AlapMester",
		title: "Gárazsalap betonozás – 14. kerület",
		meta_description: "Gárazsalap betonozás Budapest 14. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Gárazsalap betonozás – Budapest 14. kerület",
		body: "A(z) gárazsalap betonozás stabil, időtálló megoldást ad. AlapMester csapata 14. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-14-kerulet-ipari-padlo-betonozas",
		varos: "Budapest",
		kerulet: "14. kerület",
		marka: "N/A",
		modell: "ipári padló betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "AlapMester",
		title: "Ipári padló betonozás – 14. kerület",
		meta_description: "Ipári padló betonozás Budapest 14. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Ipári padló betonozás – Budapest 14. kerület",
		body: "A(z) ipári padló betonozás stabil, időtálló megoldást ad. AlapMester csapata 14. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-14-kerulet-betonozas-hazilag",
		varos: "Budapest",
		kerulet: "14. kerület",
		marka: "N/A",
		modell: "betonozás házilag",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "Budapest Beton Team",
		title: "Betonozás házilag – 14. kerület",
		meta_description: "Betonozás házilag Budapest 14. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Betonozás házilag – Budapest 14. kerület",
		body: "A(z) betonozás házilag stabil, időtálló megoldást ad. Budapest Beton Team csapata 14. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-14-kerulet-betonozas-menete",
		varos: "Budapest",
		kerulet: "14. kerület",
		marka: "N/A",
		modell: "betonozás menete",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "GyorsBeton",
		title: "Betonozás menete – 14. kerület",
		meta_description: "Betonozás menete Budapest 14. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás menete – Budapest 14. kerület",
		body: "A(z) betonozás menete stabil, időtálló megoldást ad. GyorsBeton csapata 14. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-14-kerulet-betonozas-m2-ara",
		varos: "Budapest",
		kerulet: "14. kerület",
		marka: "N/A",
		modell: "betonozás m2 ára",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "BetonProfi",
		title: "Betonozás m2 ára – 14. kerület",
		meta_description: "Betonozás m2 ára Budapest 14. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Betonozás m2 ára – Budapest 14. kerület",
		body: "A(z) betonozás m2 ára stabil, időtálló megoldást ad. BetonProfi csapata 14. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-15-kerulet-betonozas-budapest",
		varos: "Budapest",
		kerulet: "15. kerület",
		marka: "N/A",
		modell: "betonozás budapest",
		szerviz_tipus: "fooldal",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "CityBeton",
		title: "Betonozás budapest – 15. kerület",
		meta_description: "Betonozás budapest Budapest 15. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás budapest – Budapest 15. kerület",
		body: "A(z) betonozás budapest stabil, időtálló megoldást ad. CityBeton csapata 15. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-15-kerulet-betonozas-arak",
		varos: "Budapest",
		kerulet: "15. kerület",
		marka: "N/A",
		modell: "betonozás árak",
		szerviz_tipus: "blog",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "CityBeton",
		title: "Betonozás árak – 15. kerület",
		meta_description: "Betonozás árak Budapest 15. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás árak – Budapest 15. kerület",
		body: "A(z) betonozás árak stabil, időtálló megoldást ad. CityBeton csapata 15. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-15-kerulet-betonozas-ar",
		varos: "Budapest",
		kerulet: "15. kerület",
		marka: "N/A",
		modell: "betonozás ár",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "GyorsBeton",
		title: "Betonozás ár – 15. kerület",
		meta_description: "Betonozás ár Budapest 15. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás ár – Budapest 15. kerület",
		body: "A(z) betonozás ár stabil, időtálló megoldást ad. GyorsBeton csapata 15. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-15-kerulet-jarda-betonozas",
		varos: "Budapest",
		kerulet: "15. kerület",
		marka: "N/A",
		modell: "járda betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "Budapest Beton Team",
		title: "Járda betonozás – 15. kerület",
		meta_description: "Járda betonozás Budapest 15. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Járda betonozás – Budapest 15. kerület",
		body: "A(z) járda betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 15. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-15-kerulet-alap-betonozas",
		varos: "Budapest",
		kerulet: "15. kerület",
		marka: "N/A",
		modell: "alap betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "CityBeton",
		title: "Alap betonozás – 15. kerület",
		meta_description: "Alap betonozás Budapest 15. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Alap betonozás – Budapest 15. kerület",
		body: "A(z) alap betonozás stabil, időtálló megoldást ad. CityBeton csapata 15. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-15-kerulet-aljzat-betonozas",
		varos: "Budapest",
		kerulet: "15. kerület",
		marka: "N/A",
		modell: "aljzat betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "BetonProfi",
		title: "Aljzat betonozás – 15. kerület",
		meta_description: "Aljzat betonozás Budapest 15. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Aljzat betonozás – Budapest 15. kerület",
		body: "A(z) aljzat betonozás stabil, időtálló megoldást ad. BetonProfi csapata 15. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-15-kerulet-fodem-betonozas",
		varos: "Budapest",
		kerulet: "15. kerület",
		marka: "N/A",
		modell: "födém betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "BetonFix",
		title: "Födém betonozás – 15. kerület",
		meta_description: "Födém betonozás Budapest 15. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Födém betonozás – Budapest 15. kerület",
		body: "A(z) födém betonozás stabil, időtálló megoldást ad. BetonFix csapata 15. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-15-kerulet-terasz-betonozas",
		varos: "Budapest",
		kerulet: "15. kerület",
		marka: "N/A",
		modell: "terasz betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "BetonProfi",
		title: "Terasz betonozás – 15. kerület",
		meta_description: "Terasz betonozás Budapest 15. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Terasz betonozás – Budapest 15. kerület",
		body: "A(z) terasz betonozás stabil, időtálló megoldást ad. BetonProfi csapata 15. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-15-kerulet-garazsalap-betonozas",
		varos: "Budapest",
		kerulet: "15. kerület",
		marka: "N/A",
		modell: "gárazsalap betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "BetonFix",
		title: "Gárazsalap betonozás – 15. kerület",
		meta_description: "Gárazsalap betonozás Budapest 15. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Gárazsalap betonozás – Budapest 15. kerület",
		body: "A(z) gárazsalap betonozás stabil, időtálló megoldást ad. BetonFix csapata 15. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-15-kerulet-ipari-padlo-betonozas",
		varos: "Budapest",
		kerulet: "15. kerület",
		marka: "N/A",
		modell: "ipári padló betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "Budapest Beton Team",
		title: "Ipári padló betonozás – 15. kerület",
		meta_description: "Ipári padló betonozás Budapest 15. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Ipári padló betonozás – Budapest 15. kerület",
		body: "A(z) ipári padló betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 15. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-15-kerulet-betonozas-hazilag",
		varos: "Budapest",
		kerulet: "15. kerület",
		marka: "N/A",
		modell: "betonozás házilag",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "CityBeton",
		title: "Betonozás házilag – 15. kerület",
		meta_description: "Betonozás házilag Budapest 15. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás házilag – Budapest 15. kerület",
		body: "A(z) betonozás házilag stabil, időtálló megoldást ad. CityBeton csapata 15. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-15-kerulet-betonozas-menete",
		varos: "Budapest",
		kerulet: "15. kerület",
		marka: "N/A",
		modell: "betonozás menete",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "CityBeton",
		title: "Betonozás menete – 15. kerület",
		meta_description: "Betonozás menete Budapest 15. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás menete – Budapest 15. kerület",
		body: "A(z) betonozás menete stabil, időtálló megoldást ad. CityBeton csapata 15. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-15-kerulet-betonozas-m2-ara",
		varos: "Budapest",
		kerulet: "15. kerület",
		marka: "N/A",
		modell: "betonozás m2 ára",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "CityBeton",
		title: "Betonozás m2 ára – 15. kerület",
		meta_description: "Betonozás m2 ára Budapest 15. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás m2 ára – Budapest 15. kerület",
		body: "A(z) betonozás m2 ára stabil, időtálló megoldást ad. CityBeton csapata 15. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-16-kerulet-betonozas-budapest",
		varos: "Budapest",
		kerulet: "16. kerület",
		marka: "N/A",
		modell: "betonozás budapest",
		szerviz_tipus: "fooldal",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "BetonProfi",
		title: "Betonozás budapest – 16. kerület",
		meta_description: "Betonozás budapest Budapest 16. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Betonozás budapest – Budapest 16. kerület",
		body: "A(z) betonozás budapest stabil, időtálló megoldást ad. BetonProfi csapata 16. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-16-kerulet-betonozas-arak",
		varos: "Budapest",
		kerulet: "16. kerület",
		marka: "N/A",
		modell: "betonozás árak",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "GyorsBeton",
		title: "Betonozás árak – 16. kerület",
		meta_description: "Betonozás árak Budapest 16. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás árak – Budapest 16. kerület",
		body: "A(z) betonozás árak stabil, időtálló megoldást ad. GyorsBeton csapata 16. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-16-kerulet-betonozas-ar",
		varos: "Budapest",
		kerulet: "16. kerület",
		marka: "N/A",
		modell: "betonozás ár",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "CityBeton",
		title: "Betonozás ár – 16. kerület",
		meta_description: "Betonozás ár Budapest 16. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás ár – Budapest 16. kerület",
		body: "A(z) betonozás ár stabil, időtálló megoldást ad. CityBeton csapata 16. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-16-kerulet-jarda-betonozas",
		varos: "Budapest",
		kerulet: "16. kerület",
		marka: "N/A",
		modell: "járda betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "CityBeton",
		title: "Járda betonozás – 16. kerület",
		meta_description: "Járda betonozás Budapest 16. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Járda betonozás – Budapest 16. kerület",
		body: "A(z) járda betonozás stabil, időtálló megoldást ad. CityBeton csapata 16. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-16-kerulet-alap-betonozas",
		varos: "Budapest",
		kerulet: "16. kerület",
		marka: "N/A",
		modell: "alap betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "BetonProfi",
		title: "Alap betonozás – 16. kerület",
		meta_description: "Alap betonozás Budapest 16. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Alap betonozás – Budapest 16. kerület",
		body: "A(z) alap betonozás stabil, időtálló megoldást ad. BetonProfi csapata 16. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-16-kerulet-aljzat-betonozas",
		varos: "Budapest",
		kerulet: "16. kerület",
		marka: "N/A",
		modell: "aljzat betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "BetonProfi",
		title: "Aljzat betonozás – 16. kerület",
		meta_description: "Aljzat betonozás Budapest 16. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Aljzat betonozás – Budapest 16. kerület",
		body: "A(z) aljzat betonozás stabil, időtálló megoldást ad. BetonProfi csapata 16. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-16-kerulet-fodem-betonozas",
		varos: "Budapest",
		kerulet: "16. kerület",
		marka: "N/A",
		modell: "födém betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "BetonFix",
		title: "Födém betonozás – 16. kerület",
		meta_description: "Födém betonozás Budapest 16. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Födém betonozás – Budapest 16. kerület",
		body: "A(z) födém betonozás stabil, időtálló megoldást ad. BetonFix csapata 16. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-16-kerulet-terasz-betonozas",
		varos: "Budapest",
		kerulet: "16. kerület",
		marka: "N/A",
		modell: "terasz betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "BetonFix",
		title: "Terasz betonozás – 16. kerület",
		meta_description: "Terasz betonozás Budapest 16. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Terasz betonozás – Budapest 16. kerület",
		body: "A(z) terasz betonozás stabil, időtálló megoldást ad. BetonFix csapata 16. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-16-kerulet-garazsalap-betonozas",
		varos: "Budapest",
		kerulet: "16. kerület",
		marka: "N/A",
		modell: "gárazsalap betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "Budapest Beton Team",
		title: "Gárazsalap betonozás – 16. kerület",
		meta_description: "Gárazsalap betonozás Budapest 16. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Gárazsalap betonozás – Budapest 16. kerület",
		body: "A(z) gárazsalap betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 16. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-16-kerulet-ipari-padlo-betonozas",
		varos: "Budapest",
		kerulet: "16. kerület",
		marka: "N/A",
		modell: "ipári padló betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "Budapest Beton Team",
		title: "Ipári padló betonozás – 16. kerület",
		meta_description: "Ipári padló betonozás Budapest 16. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Ipári padló betonozás – Budapest 16. kerület",
		body: "A(z) ipári padló betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 16. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-16-kerulet-betonozas-hazilag",
		varos: "Budapest",
		kerulet: "16. kerület",
		marka: "N/A",
		modell: "betonozás házilag",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "AlapMester",
		title: "Betonozás házilag – 16. kerület",
		meta_description: "Betonozás házilag Budapest 16. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Betonozás házilag – Budapest 16. kerület",
		body: "A(z) betonozás házilag stabil, időtálló megoldást ad. AlapMester csapata 16. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-16-kerulet-betonozas-menete",
		varos: "Budapest",
		kerulet: "16. kerület",
		marka: "N/A",
		modell: "betonozás menete",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "Budapest Beton Team",
		title: "Betonozás menete – 16. kerület",
		meta_description: "Betonozás menete Budapest 16. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Betonozás menete – Budapest 16. kerület",
		body: "A(z) betonozás menete stabil, időtálló megoldást ad. Budapest Beton Team csapata 16. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-16-kerulet-betonozas-m2-ara",
		varos: "Budapest",
		kerulet: "16. kerület",
		marka: "N/A",
		modell: "betonozás m2 ára",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "BetonFix",
		title: "Betonozás m2 ára – 16. kerület",
		meta_description: "Betonozás m2 ára Budapest 16. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás m2 ára – Budapest 16. kerület",
		body: "A(z) betonozás m2 ára stabil, időtálló megoldást ad. BetonFix csapata 16. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-17-kerulet-betonozas-budapest",
		varos: "Budapest",
		kerulet: "17. kerület",
		marka: "N/A",
		modell: "betonozás budapest",
		szerviz_tipus: "fooldal",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "AlapMester",
		title: "Betonozás budapest – 17. kerület",
		meta_description: "Betonozás budapest Budapest 17. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Betonozás budapest – Budapest 17. kerület",
		body: "A(z) betonozás budapest stabil, időtálló megoldást ad. AlapMester csapata 17. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-17-kerulet-betonozas-arak",
		varos: "Budapest",
		kerulet: "17. kerület",
		marka: "N/A",
		modell: "betonozás árak",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "BetonFix",
		title: "Betonozás árak – 17. kerület",
		meta_description: "Betonozás árak Budapest 17. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás árak – Budapest 17. kerület",
		body: "A(z) betonozás árak stabil, időtálló megoldást ad. BetonFix csapata 17. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-17-kerulet-betonozas-ar",
		varos: "Budapest",
		kerulet: "17. kerület",
		marka: "N/A",
		modell: "betonozás ár",
		szerviz_tipus: "blog",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "CityBeton",
		title: "Betonozás ár – 17. kerület",
		meta_description: "Betonozás ár Budapest 17. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás ár – Budapest 17. kerület",
		body: "A(z) betonozás ár stabil, időtálló megoldást ad. CityBeton csapata 17. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-17-kerulet-jarda-betonozas",
		varos: "Budapest",
		kerulet: "17. kerület",
		marka: "N/A",
		modell: "járda betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "BetonFix",
		title: "Járda betonozás – 17. kerület",
		meta_description: "Járda betonozás Budapest 17. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Járda betonozás – Budapest 17. kerület",
		body: "A(z) járda betonozás stabil, időtálló megoldást ad. BetonFix csapata 17. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-17-kerulet-alap-betonozas",
		varos: "Budapest",
		kerulet: "17. kerület",
		marka: "N/A",
		modell: "alap betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "Budapest Beton Team",
		title: "Alap betonozás – 17. kerület",
		meta_description: "Alap betonozás Budapest 17. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Alap betonozás – Budapest 17. kerület",
		body: "A(z) alap betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 17. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-17-kerulet-aljzat-betonozas",
		varos: "Budapest",
		kerulet: "17. kerület",
		marka: "N/A",
		modell: "aljzat betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "CityBeton",
		title: "Aljzat betonozás – 17. kerület",
		meta_description: "Aljzat betonozás Budapest 17. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Aljzat betonozás – Budapest 17. kerület",
		body: "A(z) aljzat betonozás stabil, időtálló megoldást ad. CityBeton csapata 17. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-17-kerulet-fodem-betonozas",
		varos: "Budapest",
		kerulet: "17. kerület",
		marka: "N/A",
		modell: "födém betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "GyorsBeton",
		title: "Födém betonozás – 17. kerület",
		meta_description: "Födém betonozás Budapest 17. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Födém betonozás – Budapest 17. kerület",
		body: "A(z) födém betonozás stabil, időtálló megoldást ad. GyorsBeton csapata 17. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-17-kerulet-terasz-betonozas",
		varos: "Budapest",
		kerulet: "17. kerület",
		marka: "N/A",
		modell: "terasz betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "GyorsBeton",
		title: "Terasz betonozás – 17. kerület",
		meta_description: "Terasz betonozás Budapest 17. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Terasz betonozás – Budapest 17. kerület",
		body: "A(z) terasz betonozás stabil, időtálló megoldást ad. GyorsBeton csapata 17. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-17-kerulet-garazsalap-betonozas",
		varos: "Budapest",
		kerulet: "17. kerület",
		marka: "N/A",
		modell: "gárazsalap betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "CityBeton",
		title: "Gárazsalap betonozás – 17. kerület",
		meta_description: "Gárazsalap betonozás Budapest 17. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Gárazsalap betonozás – Budapest 17. kerület",
		body: "A(z) gárazsalap betonozás stabil, időtálló megoldást ad. CityBeton csapata 17. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-17-kerulet-ipari-padlo-betonozas",
		varos: "Budapest",
		kerulet: "17. kerület",
		marka: "N/A",
		modell: "ipári padló betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "AlapMester",
		title: "Ipári padló betonozás – 17. kerület",
		meta_description: "Ipári padló betonozás Budapest 17. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Ipári padló betonozás – Budapest 17. kerület",
		body: "A(z) ipári padló betonozás stabil, időtálló megoldást ad. AlapMester csapata 17. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-17-kerulet-betonozas-hazilag",
		varos: "Budapest",
		kerulet: "17. kerület",
		marka: "N/A",
		modell: "betonozás házilag",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "Budapest Beton Team",
		title: "Betonozás házilag – 17. kerület",
		meta_description: "Betonozás házilag Budapest 17. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Betonozás házilag – Budapest 17. kerület",
		body: "A(z) betonozás házilag stabil, időtálló megoldást ad. Budapest Beton Team csapata 17. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-17-kerulet-betonozas-menete",
		varos: "Budapest",
		kerulet: "17. kerület",
		marka: "N/A",
		modell: "betonozás menete",
		szerviz_tipus: "blog",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "BetonProfi",
		title: "Betonozás menete – 17. kerület",
		meta_description: "Betonozás menete Budapest 17. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Betonozás menete – Budapest 17. kerület",
		body: "A(z) betonozás menete stabil, időtálló megoldást ad. BetonProfi csapata 17. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-17-kerulet-betonozas-m2-ara",
		varos: "Budapest",
		kerulet: "17. kerület",
		marka: "N/A",
		modell: "betonozás m2 ára",
		szerviz_tipus: "blog",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "GyorsBeton",
		title: "Betonozás m2 ára – 17. kerület",
		meta_description: "Betonozás m2 ára Budapest 17. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás m2 ára – Budapest 17. kerület",
		body: "A(z) betonozás m2 ára stabil, időtálló megoldást ad. GyorsBeton csapata 17. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-18-kerulet-betonozas-budapest",
		varos: "Budapest",
		kerulet: "18. kerület",
		marka: "N/A",
		modell: "betonozás budapest",
		szerviz_tipus: "fooldal",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "Budapest Beton Team",
		title: "Betonozás budapest – 18. kerület",
		meta_description: "Betonozás budapest Budapest 18. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Betonozás budapest – Budapest 18. kerület",
		body: "A(z) betonozás budapest stabil, időtálló megoldást ad. Budapest Beton Team csapata 18. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-18-kerulet-betonozas-arak",
		varos: "Budapest",
		kerulet: "18. kerület",
		marka: "N/A",
		modell: "betonozás árak",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "AlapMester",
		title: "Betonozás árak – 18. kerület",
		meta_description: "Betonozás árak Budapest 18. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Betonozás árak – Budapest 18. kerület",
		body: "A(z) betonozás árak stabil, időtálló megoldást ad. AlapMester csapata 18. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-18-kerulet-betonozas-ar",
		varos: "Budapest",
		kerulet: "18. kerület",
		marka: "N/A",
		modell: "betonozás ár",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "GyorsBeton",
		title: "Betonozás ár – 18. kerület",
		meta_description: "Betonozás ár Budapest 18. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás ár – Budapest 18. kerület",
		body: "A(z) betonozás ár stabil, időtálló megoldást ad. GyorsBeton csapata 18. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-18-kerulet-jarda-betonozas",
		varos: "Budapest",
		kerulet: "18. kerület",
		marka: "N/A",
		modell: "járda betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "BetonProfi",
		title: "Járda betonozás – 18. kerület",
		meta_description: "Járda betonozás Budapest 18. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Járda betonozás – Budapest 18. kerület",
		body: "A(z) járda betonozás stabil, időtálló megoldást ad. BetonProfi csapata 18. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-18-kerulet-alap-betonozas",
		varos: "Budapest",
		kerulet: "18. kerület",
		marka: "N/A",
		modell: "alap betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "CityBeton",
		title: "Alap betonozás – 18. kerület",
		meta_description: "Alap betonozás Budapest 18. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Alap betonozás – Budapest 18. kerület",
		body: "A(z) alap betonozás stabil, időtálló megoldást ad. CityBeton csapata 18. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-18-kerulet-aljzat-betonozas",
		varos: "Budapest",
		kerulet: "18. kerület",
		marka: "N/A",
		modell: "aljzat betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "AlapMester",
		title: "Aljzat betonozás – 18. kerület",
		meta_description: "Aljzat betonozás Budapest 18. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Aljzat betonozás – Budapest 18. kerület",
		body: "A(z) aljzat betonozás stabil, időtálló megoldást ad. AlapMester csapata 18. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-18-kerulet-fodem-betonozas",
		varos: "Budapest",
		kerulet: "18. kerület",
		marka: "N/A",
		modell: "födém betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "CityBeton",
		title: "Födém betonozás – 18. kerület",
		meta_description: "Födém betonozás Budapest 18. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Födém betonozás – Budapest 18. kerület",
		body: "A(z) födém betonozás stabil, időtálló megoldást ad. CityBeton csapata 18. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-18-kerulet-terasz-betonozas",
		varos: "Budapest",
		kerulet: "18. kerület",
		marka: "N/A",
		modell: "terasz betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "AlapMester",
		title: "Terasz betonozás – 18. kerület",
		meta_description: "Terasz betonozás Budapest 18. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Terasz betonozás – Budapest 18. kerület",
		body: "A(z) terasz betonozás stabil, időtálló megoldást ad. AlapMester csapata 18. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-18-kerulet-garazsalap-betonozas",
		varos: "Budapest",
		kerulet: "18. kerület",
		marka: "N/A",
		modell: "gárazsalap betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "GyorsBeton",
		title: "Gárazsalap betonozás – 18. kerület",
		meta_description: "Gárazsalap betonozás Budapest 18. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Gárazsalap betonozás – Budapest 18. kerület",
		body: "A(z) gárazsalap betonozás stabil, időtálló megoldást ad. GyorsBeton csapata 18. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-18-kerulet-ipari-padlo-betonozas",
		varos: "Budapest",
		kerulet: "18. kerület",
		marka: "N/A",
		modell: "ipári padló betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "Budapest Beton Team",
		title: "Ipári padló betonozás – 18. kerület",
		meta_description: "Ipári padló betonozás Budapest 18. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Ipári padló betonozás – Budapest 18. kerület",
		body: "A(z) ipári padló betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 18. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-18-kerulet-betonozas-hazilag",
		varos: "Budapest",
		kerulet: "18. kerület",
		marka: "N/A",
		modell: "betonozás házilag",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "CityBeton",
		title: "Betonozás házilag – 18. kerület",
		meta_description: "Betonozás házilag Budapest 18. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás házilag – Budapest 18. kerület",
		body: "A(z) betonozás házilag stabil, időtálló megoldást ad. CityBeton csapata 18. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-18-kerulet-betonozas-menete",
		varos: "Budapest",
		kerulet: "18. kerület",
		marka: "N/A",
		modell: "betonozás menete",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "GyorsBeton",
		title: "Betonozás menete – 18. kerület",
		meta_description: "Betonozás menete Budapest 18. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás menete – Budapest 18. kerület",
		body: "A(z) betonozás menete stabil, időtálló megoldást ad. GyorsBeton csapata 18. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-18-kerulet-betonozas-m2-ara",
		varos: "Budapest",
		kerulet: "18. kerület",
		marka: "N/A",
		modell: "betonozás m2 ára",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "Budapest Beton Team",
		title: "Betonozás m2 ára – 18. kerület",
		meta_description: "Betonozás m2 ára Budapest 18. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Betonozás m2 ára – Budapest 18. kerület",
		body: "A(z) betonozás m2 ára stabil, időtálló megoldást ad. Budapest Beton Team csapata 18. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-19-kerulet-betonozas-budapest",
		varos: "Budapest",
		kerulet: "19. kerület",
		marka: "N/A",
		modell: "betonozás budapest",
		szerviz_tipus: "fooldal",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "CityBeton",
		title: "Betonozás budapest – 19. kerület",
		meta_description: "Betonozás budapest Budapest 19. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás budapest – Budapest 19. kerület",
		body: "A(z) betonozás budapest stabil, időtálló megoldást ad. CityBeton csapata 19. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-19-kerulet-betonozas-arak",
		varos: "Budapest",
		kerulet: "19. kerület",
		marka: "N/A",
		modell: "betonozás árak",
		szerviz_tipus: "blog",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "BetonFix",
		title: "Betonozás árak – 19. kerület",
		meta_description: "Betonozás árak Budapest 19. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás árak – Budapest 19. kerület",
		body: "A(z) betonozás árak stabil, időtálló megoldást ad. BetonFix csapata 19. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-19-kerulet-betonozas-ar",
		varos: "Budapest",
		kerulet: "19. kerület",
		marka: "N/A",
		modell: "betonozás ár",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "BetonFix",
		title: "Betonozás ár – 19. kerület",
		meta_description: "Betonozás ár Budapest 19. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás ár – Budapest 19. kerület",
		body: "A(z) betonozás ár stabil, időtálló megoldást ad. BetonFix csapata 19. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-19-kerulet-jarda-betonozas",
		varos: "Budapest",
		kerulet: "19. kerület",
		marka: "N/A",
		modell: "járda betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "CityBeton",
		title: "Járda betonozás – 19. kerület",
		meta_description: "Járda betonozás Budapest 19. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Járda betonozás – Budapest 19. kerület",
		body: "A(z) járda betonozás stabil, időtálló megoldást ad. CityBeton csapata 19. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-19-kerulet-alap-betonozas",
		varos: "Budapest",
		kerulet: "19. kerület",
		marka: "N/A",
		modell: "alap betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "CityBeton",
		title: "Alap betonozás – 19. kerület",
		meta_description: "Alap betonozás Budapest 19. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Alap betonozás – Budapest 19. kerület",
		body: "A(z) alap betonozás stabil, időtálló megoldást ad. CityBeton csapata 19. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-19-kerulet-aljzat-betonozas",
		varos: "Budapest",
		kerulet: "19. kerület",
		marka: "N/A",
		modell: "aljzat betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "BetonProfi",
		title: "Aljzat betonozás – 19. kerület",
		meta_description: "Aljzat betonozás Budapest 19. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Aljzat betonozás – Budapest 19. kerület",
		body: "A(z) aljzat betonozás stabil, időtálló megoldást ad. BetonProfi csapata 19. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-19-kerulet-fodem-betonozas",
		varos: "Budapest",
		kerulet: "19. kerület",
		marka: "N/A",
		modell: "födém betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "GyorsBeton",
		title: "Födém betonozás – 19. kerület",
		meta_description: "Födém betonozás Budapest 19. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Födém betonozás – Budapest 19. kerület",
		body: "A(z) födém betonozás stabil, időtálló megoldást ad. GyorsBeton csapata 19. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-19-kerulet-terasz-betonozas",
		varos: "Budapest",
		kerulet: "19. kerület",
		marka: "N/A",
		modell: "terasz betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "AlapMester",
		title: "Terasz betonozás – 19. kerület",
		meta_description: "Terasz betonozás Budapest 19. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Terasz betonozás – Budapest 19. kerület",
		body: "A(z) terasz betonozás stabil, időtálló megoldást ad. AlapMester csapata 19. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-19-kerulet-garazsalap-betonozas",
		varos: "Budapest",
		kerulet: "19. kerület",
		marka: "N/A",
		modell: "gárazsalap betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "Budapest Beton Team",
		title: "Gárazsalap betonozás – 19. kerület",
		meta_description: "Gárazsalap betonozás Budapest 19. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Gárazsalap betonozás – Budapest 19. kerület",
		body: "A(z) gárazsalap betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 19. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-19-kerulet-ipari-padlo-betonozas",
		varos: "Budapest",
		kerulet: "19. kerület",
		marka: "N/A",
		modell: "ipári padló betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "BetonFix",
		title: "Ipári padló betonozás – 19. kerület",
		meta_description: "Ipári padló betonozás Budapest 19. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Ipári padló betonozás – Budapest 19. kerület",
		body: "A(z) ipári padló betonozás stabil, időtálló megoldást ad. BetonFix csapata 19. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-19-kerulet-betonozas-hazilag",
		varos: "Budapest",
		kerulet: "19. kerület",
		marka: "N/A",
		modell: "betonozás házilag",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "BetonFix",
		title: "Betonozás házilag – 19. kerület",
		meta_description: "Betonozás házilag Budapest 19. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás házilag – Budapest 19. kerület",
		body: "A(z) betonozás házilag stabil, időtálló megoldást ad. BetonFix csapata 19. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-19-kerulet-betonozas-menete",
		varos: "Budapest",
		kerulet: "19. kerület",
		marka: "N/A",
		modell: "betonozás menete",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "BetonProfi",
		title: "Betonozás menete – 19. kerület",
		meta_description: "Betonozás menete Budapest 19. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Betonozás menete – Budapest 19. kerület",
		body: "A(z) betonozás menete stabil, időtálló megoldást ad. BetonProfi csapata 19. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-19-kerulet-betonozas-m2-ara",
		varos: "Budapest",
		kerulet: "19. kerület",
		marka: "N/A",
		modell: "betonozás m2 ára",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "Budapest Beton Team",
		title: "Betonozás m2 ára – 19. kerület",
		meta_description: "Betonozás m2 ára Budapest 19. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Betonozás m2 ára – Budapest 19. kerület",
		body: "A(z) betonozás m2 ára stabil, időtálló megoldást ad. Budapest Beton Team csapata 19. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-20-kerulet-betonozas-budapest",
		varos: "Budapest",
		kerulet: "20. kerület",
		marka: "N/A",
		modell: "betonozás budapest",
		szerviz_tipus: "fooldal",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "AlapMester",
		title: "Betonozás budapest – 20. kerület",
		meta_description: "Betonozás budapest Budapest 20. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Betonozás budapest – Budapest 20. kerület",
		body: "A(z) betonozás budapest stabil, időtálló megoldást ad. AlapMester csapata 20. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-20-kerulet-betonozas-arak",
		varos: "Budapest",
		kerulet: "20. kerület",
		marka: "N/A",
		modell: "betonozás árak",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "BetonProfi",
		title: "Betonozás árak – 20. kerület",
		meta_description: "Betonozás árak Budapest 20. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Betonozás árak – Budapest 20. kerület",
		body: "A(z) betonozás árak stabil, időtálló megoldást ad. BetonProfi csapata 20. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-20-kerulet-betonozas-ar",
		varos: "Budapest",
		kerulet: "20. kerület",
		marka: "N/A",
		modell: "betonozás ár",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "Budapest Beton Team",
		title: "Betonozás ár – 20. kerület",
		meta_description: "Betonozás ár Budapest 20. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Betonozás ár – Budapest 20. kerület",
		body: "A(z) betonozás ár stabil, időtálló megoldást ad. Budapest Beton Team csapata 20. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-20-kerulet-jarda-betonozas",
		varos: "Budapest",
		kerulet: "20. kerület",
		marka: "N/A",
		modell: "járda betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "GyorsBeton",
		title: "Járda betonozás – 20. kerület",
		meta_description: "Járda betonozás Budapest 20. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Járda betonozás – Budapest 20. kerület",
		body: "A(z) járda betonozás stabil, időtálló megoldást ad. GyorsBeton csapata 20. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-20-kerulet-alap-betonozas",
		varos: "Budapest",
		kerulet: "20. kerület",
		marka: "N/A",
		modell: "alap betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "CityBeton",
		title: "Alap betonozás – 20. kerület",
		meta_description: "Alap betonozás Budapest 20. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Alap betonozás – Budapest 20. kerület",
		body: "A(z) alap betonozás stabil, időtálló megoldást ad. CityBeton csapata 20. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-20-kerulet-aljzat-betonozas",
		varos: "Budapest",
		kerulet: "20. kerület",
		marka: "N/A",
		modell: "aljzat betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "GyorsBeton",
		title: "Aljzat betonozás – 20. kerület",
		meta_description: "Aljzat betonozás Budapest 20. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Aljzat betonozás – Budapest 20. kerület",
		body: "A(z) aljzat betonozás stabil, időtálló megoldást ad. GyorsBeton csapata 20. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-20-kerulet-fodem-betonozas",
		varos: "Budapest",
		kerulet: "20. kerület",
		marka: "N/A",
		modell: "födém betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "BetonProfi",
		title: "Födém betonozás – 20. kerület",
		meta_description: "Födém betonozás Budapest 20. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Födém betonozás – Budapest 20. kerület",
		body: "A(z) födém betonozás stabil, időtálló megoldást ad. BetonProfi csapata 20. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-20-kerulet-terasz-betonozas",
		varos: "Budapest",
		kerulet: "20. kerület",
		marka: "N/A",
		modell: "terasz betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "CityBeton",
		title: "Terasz betonozás – 20. kerület",
		meta_description: "Terasz betonozás Budapest 20. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Terasz betonozás – Budapest 20. kerület",
		body: "A(z) terasz betonozás stabil, időtálló megoldást ad. CityBeton csapata 20. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-20-kerulet-garazsalap-betonozas",
		varos: "Budapest",
		kerulet: "20. kerület",
		marka: "N/A",
		modell: "gárazsalap betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "AlapMester",
		title: "Gárazsalap betonozás – 20. kerület",
		meta_description: "Gárazsalap betonozás Budapest 20. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Gárazsalap betonozás – Budapest 20. kerület",
		body: "A(z) gárazsalap betonozás stabil, időtálló megoldást ad. AlapMester csapata 20. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-20-kerulet-ipari-padlo-betonozas",
		varos: "Budapest",
		kerulet: "20. kerület",
		marka: "N/A",
		modell: "ipári padló betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "Budapest Beton Team",
		title: "Ipári padló betonozás – 20. kerület",
		meta_description: "Ipári padló betonozás Budapest 20. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Ipári padló betonozás – Budapest 20. kerület",
		body: "A(z) ipári padló betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 20. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-20-kerulet-betonozas-hazilag",
		varos: "Budapest",
		kerulet: "20. kerület",
		marka: "N/A",
		modell: "betonozás házilag",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "AlapMester",
		title: "Betonozás házilag – 20. kerület",
		meta_description: "Betonozás házilag Budapest 20. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Betonozás házilag – Budapest 20. kerület",
		body: "A(z) betonozás házilag stabil, időtálló megoldást ad. AlapMester csapata 20. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-20-kerulet-betonozas-menete",
		varos: "Budapest",
		kerulet: "20. kerület",
		marka: "N/A",
		modell: "betonozás menete",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "GyorsBeton",
		title: "Betonozás menete – 20. kerület",
		meta_description: "Betonozás menete Budapest 20. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás menete – Budapest 20. kerület",
		body: "A(z) betonozás menete stabil, időtálló megoldást ad. GyorsBeton csapata 20. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-20-kerulet-betonozas-m2-ara",
		varos: "Budapest",
		kerulet: "20. kerület",
		marka: "N/A",
		modell: "betonozás m2 ára",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "BetonFix",
		title: "Betonozás m2 ára – 20. kerület",
		meta_description: "Betonozás m2 ára Budapest 20. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás m2 ára – Budapest 20. kerület",
		body: "A(z) betonozás m2 ára stabil, időtálló megoldást ad. BetonFix csapata 20. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-21-kerulet-betonozas-budapest",
		varos: "Budapest",
		kerulet: "21. kerület",
		marka: "N/A",
		modell: "betonozás budapest",
		szerviz_tipus: "fooldal",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "AlapMester",
		title: "Betonozás budapest – 21. kerület",
		meta_description: "Betonozás budapest Budapest 21. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Betonozás budapest – Budapest 21. kerület",
		body: "A(z) betonozás budapest stabil, időtálló megoldást ad. AlapMester csapata 21. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-21-kerulet-betonozas-arak",
		varos: "Budapest",
		kerulet: "21. kerület",
		marka: "N/A",
		modell: "betonozás árak",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "Budapest Beton Team",
		title: "Betonozás árak – 21. kerület",
		meta_description: "Betonozás árak Budapest 21. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Betonozás árak – Budapest 21. kerület",
		body: "A(z) betonozás árak stabil, időtálló megoldást ad. Budapest Beton Team csapata 21. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-21-kerulet-betonozas-ar",
		varos: "Budapest",
		kerulet: "21. kerület",
		marka: "N/A",
		modell: "betonozás ár",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "AlapMester",
		title: "Betonozás ár – 21. kerület",
		meta_description: "Betonozás ár Budapest 21. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Betonozás ár – Budapest 21. kerület",
		body: "A(z) betonozás ár stabil, időtálló megoldást ad. AlapMester csapata 21. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-21-kerulet-jarda-betonozas",
		varos: "Budapest",
		kerulet: "21. kerület",
		marka: "N/A",
		modell: "járda betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "BetonFix",
		title: "Járda betonozás – 21. kerület",
		meta_description: "Járda betonozás Budapest 21. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Járda betonozás – Budapest 21. kerület",
		body: "A(z) járda betonozás stabil, időtálló megoldást ad. BetonFix csapata 21. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-21-kerulet-alap-betonozas",
		varos: "Budapest",
		kerulet: "21. kerület",
		marka: "N/A",
		modell: "alap betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "GyorsBeton",
		title: "Alap betonozás – 21. kerület",
		meta_description: "Alap betonozás Budapest 21. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Alap betonozás – Budapest 21. kerület",
		body: "A(z) alap betonozás stabil, időtálló megoldást ad. GyorsBeton csapata 21. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-21-kerulet-aljzat-betonozas",
		varos: "Budapest",
		kerulet: "21. kerület",
		marka: "N/A",
		modell: "aljzat betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "CityBeton",
		title: "Aljzat betonozás – 21. kerület",
		meta_description: "Aljzat betonozás Budapest 21. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Aljzat betonozás – Budapest 21. kerület",
		body: "A(z) aljzat betonozás stabil, időtálló megoldást ad. CityBeton csapata 21. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-21-kerulet-fodem-betonozas",
		varos: "Budapest",
		kerulet: "21. kerület",
		marka: "N/A",
		modell: "födém betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "BetonFix",
		title: "Födém betonozás – 21. kerület",
		meta_description: "Födém betonozás Budapest 21. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Födém betonozás – Budapest 21. kerület",
		body: "A(z) födém betonozás stabil, időtálló megoldást ad. BetonFix csapata 21. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-21-kerulet-terasz-betonozas",
		varos: "Budapest",
		kerulet: "21. kerület",
		marka: "N/A",
		modell: "terasz betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "Budapest Beton Team",
		title: "Terasz betonozás – 21. kerület",
		meta_description: "Terasz betonozás Budapest 21. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Terasz betonozás – Budapest 21. kerület",
		body: "A(z) terasz betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 21. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-21-kerulet-garazsalap-betonozas",
		varos: "Budapest",
		kerulet: "21. kerület",
		marka: "N/A",
		modell: "gárazsalap betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "AlapMester",
		title: "Gárazsalap betonozás – 21. kerület",
		meta_description: "Gárazsalap betonozás Budapest 21. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Gárazsalap betonozás – Budapest 21. kerület",
		body: "A(z) gárazsalap betonozás stabil, időtálló megoldást ad. AlapMester csapata 21. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-21-kerulet-ipari-padlo-betonozas",
		varos: "Budapest",
		kerulet: "21. kerület",
		marka: "N/A",
		modell: "ipári padló betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "BetonFix",
		title: "Ipári padló betonozás – 21. kerület",
		meta_description: "Ipári padló betonozás Budapest 21. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Ipári padló betonozás – Budapest 21. kerület",
		body: "A(z) ipári padló betonozás stabil, időtálló megoldást ad. BetonFix csapata 21. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-21-kerulet-betonozas-hazilag",
		varos: "Budapest",
		kerulet: "21. kerület",
		marka: "N/A",
		modell: "betonozás házilag",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "CityBeton",
		title: "Betonozás házilag – 21. kerület",
		meta_description: "Betonozás házilag Budapest 21. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás házilag – Budapest 21. kerület",
		body: "A(z) betonozás házilag stabil, időtálló megoldást ad. CityBeton csapata 21. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-21-kerulet-betonozas-menete",
		varos: "Budapest",
		kerulet: "21. kerület",
		marka: "N/A",
		modell: "betonozás menete",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "CityBeton",
		title: "Betonozás menete – 21. kerület",
		meta_description: "Betonozás menete Budapest 21. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás menete – Budapest 21. kerület",
		body: "A(z) betonozás menete stabil, időtálló megoldást ad. CityBeton csapata 21. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-21-kerulet-betonozas-m2-ara",
		varos: "Budapest",
		kerulet: "21. kerület",
		marka: "N/A",
		modell: "betonozás m2 ára",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "Budapest Beton Team",
		title: "Betonozás m2 ára – 21. kerület",
		meta_description: "Betonozás m2 ára Budapest 21. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Betonozás m2 ára – Budapest 21. kerület",
		body: "A(z) betonozás m2 ára stabil, időtálló megoldást ad. Budapest Beton Team csapata 21. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-22-kerulet-betonozas-budapest",
		varos: "Budapest",
		kerulet: "22. kerület",
		marka: "N/A",
		modell: "betonozás budapest",
		szerviz_tipus: "fooldal",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "GyorsBeton",
		title: "Betonozás budapest – 22. kerület",
		meta_description: "Betonozás budapest Budapest 22. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás budapest – Budapest 22. kerület",
		body: "A(z) betonozás budapest stabil, időtálló megoldást ad. GyorsBeton csapata 22. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-22-kerulet-betonozas-arak",
		varos: "Budapest",
		kerulet: "22. kerület",
		marka: "N/A",
		modell: "betonozás árak",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "BetonProfi",
		title: "Betonozás árak – 22. kerület",
		meta_description: "Betonozás árak Budapest 22. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Betonozás árak – Budapest 22. kerület",
		body: "A(z) betonozás árak stabil, időtálló megoldást ad. BetonProfi csapata 22. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-22-kerulet-betonozas-ar",
		varos: "Budapest",
		kerulet: "22. kerület",
		marka: "N/A",
		modell: "betonozás ár",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "GyorsBeton",
		title: "Betonozás ár – 22. kerület",
		meta_description: "Betonozás ár Budapest 22. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás ár – Budapest 22. kerület",
		body: "A(z) betonozás ár stabil, időtálló megoldást ad. GyorsBeton csapata 22. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-22-kerulet-jarda-betonozas",
		varos: "Budapest",
		kerulet: "22. kerület",
		marka: "N/A",
		modell: "járda betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "BetonProfi",
		title: "Járda betonozás – 22. kerület",
		meta_description: "Járda betonozás Budapest 22. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Járda betonozás – Budapest 22. kerület",
		body: "A(z) járda betonozás stabil, időtálló megoldást ad. BetonProfi csapata 22. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-22-kerulet-alap-betonozas",
		varos: "Budapest",
		kerulet: "22. kerület",
		marka: "N/A",
		modell: "alap betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "CityBeton",
		title: "Alap betonozás – 22. kerület",
		meta_description: "Alap betonozás Budapest 22. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Alap betonozás – Budapest 22. kerület",
		body: "A(z) alap betonozás stabil, időtálló megoldást ad. CityBeton csapata 22. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-22-kerulet-aljzat-betonozas",
		varos: "Budapest",
		kerulet: "22. kerület",
		marka: "N/A",
		modell: "aljzat betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "Budapest Beton Team",
		title: "Aljzat betonozás – 22. kerület",
		meta_description: "Aljzat betonozás Budapest 22. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Aljzat betonozás – Budapest 22. kerület",
		body: "A(z) aljzat betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 22. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-22-kerulet-fodem-betonozas",
		varos: "Budapest",
		kerulet: "22. kerület",
		marka: "N/A",
		modell: "födém betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "AlapMester",
		title: "Födém betonozás – 22. kerület",
		meta_description: "Födém betonozás Budapest 22. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Födém betonozás – Budapest 22. kerület",
		body: "A(z) födém betonozás stabil, időtálló megoldást ad. AlapMester csapata 22. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-22-kerulet-terasz-betonozas",
		varos: "Budapest",
		kerulet: "22. kerület",
		marka: "N/A",
		modell: "terasz betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "BetonFix",
		title: "Terasz betonozás – 22. kerület",
		meta_description: "Terasz betonozás Budapest 22. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Terasz betonozás – Budapest 22. kerület",
		body: "A(z) terasz betonozás stabil, időtálló megoldást ad. BetonFix csapata 22. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-22-kerulet-garazsalap-betonozas",
		varos: "Budapest",
		kerulet: "22. kerület",
		marka: "N/A",
		modell: "gárazsalap betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "Budapest Beton Team",
		title: "Gárazsalap betonozás – 22. kerület",
		meta_description: "Gárazsalap betonozás Budapest 22. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Gárazsalap betonozás – Budapest 22. kerület",
		body: "A(z) gárazsalap betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 22. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-22-kerulet-ipari-padlo-betonozas",
		varos: "Budapest",
		kerulet: "22. kerület",
		marka: "N/A",
		modell: "ipári padló betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "Budapest Beton Team",
		title: "Ipári padló betonozás – 22. kerület",
		meta_description: "Ipári padló betonozás Budapest 22. kerület környékén. Budapest Beton Team szakértelemmel és korrekt árakkal.",
		h1: "Ipári padló betonozás – Budapest 22. kerület",
		body: "A(z) ipári padló betonozás stabil, időtálló megoldást ad. Budapest Beton Team csapata 22. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-22-kerulet-betonozas-hazilag",
		varos: "Budapest",
		kerulet: "22. kerület",
		marka: "N/A",
		modell: "betonozás házilag",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "BetonFix",
		title: "Betonozás házilag – 22. kerület",
		meta_description: "Betonozás házilag Budapest 22. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Betonozás házilag – Budapest 22. kerület",
		body: "A(z) betonozás házilag stabil, időtálló megoldást ad. BetonFix csapata 22. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-22-kerulet-betonozas-menete",
		varos: "Budapest",
		kerulet: "22. kerület",
		marka: "N/A",
		modell: "betonozás menete",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "BetonProfi",
		title: "Betonozás menete – 22. kerület",
		meta_description: "Betonozás menete Budapest 22. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Betonozás menete – Budapest 22. kerület",
		body: "A(z) betonozás menete stabil, időtálló megoldást ad. BetonProfi csapata 22. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-22-kerulet-betonozas-m2-ara",
		varos: "Budapest",
		kerulet: "22. kerület",
		marka: "N/A",
		modell: "betonozás m2 ára",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "GyorsBeton",
		title: "Betonozás m2 ára – 22. kerület",
		meta_description: "Betonozás m2 ára Budapest 22. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás m2 ára – Budapest 22. kerület",
		body: "A(z) betonozás m2 ára stabil, időtálló megoldást ad. GyorsBeton csapata 22. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-23-kerulet-betonozas-budapest",
		varos: "Budapest",
		kerulet: "23. kerület",
		marka: "N/A",
		modell: "betonozás budapest",
		szerviz_tipus: "fooldal",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "CityBeton",
		title: "Betonozás budapest – 23. kerület",
		meta_description: "Betonozás budapest Budapest 23. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás budapest – Budapest 23. kerület",
		body: "A(z) betonozás budapest stabil, időtálló megoldást ad. CityBeton csapata 23. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-23-kerulet-betonozas-arak",
		varos: "Budapest",
		kerulet: "23. kerület",
		marka: "N/A",
		modell: "betonozás árak",
		szerviz_tipus: "blog",
		extra_igeny: "időgaranciás kivitelezés, modern géppark",
		szerviz_nev: "BetonProfi",
		title: "Betonozás árak – 23. kerület",
		meta_description: "Betonozás árak Budapest 23. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Betonozás árak – Budapest 23. kerület",
		body: "A(z) betonozás árak stabil, időtálló megoldást ad. BetonProfi csapata 23. kerület térségében szakszerűen, pontos határidővel dolgozik. Időgaranciás kivitelezés, modern géppark. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-23-kerulet-betonozas-ar",
		varos: "Budapest",
		kerulet: "23. kerület",
		marka: "N/A",
		modell: "betonozás ár",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "AlapMester",
		title: "Betonozás ár – 23. kerület",
		meta_description: "Betonozás ár Budapest 23. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Betonozás ár – Budapest 23. kerület",
		body: "A(z) betonozás ár stabil, időtálló megoldást ad. AlapMester csapata 23. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-23-kerulet-jarda-betonozas",
		varos: "Budapest",
		kerulet: "23. kerület",
		marka: "N/A",
		modell: "járda betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "AlapMester",
		title: "Járda betonozás – 23. kerület",
		meta_description: "Járda betonozás Budapest 23. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Járda betonozás – Budapest 23. kerület",
		body: "A(z) járda betonozás stabil, időtálló megoldást ad. AlapMester csapata 23. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-23-kerulet-alap-betonozas",
		varos: "Budapest",
		kerulet: "23. kerület",
		marka: "N/A",
		modell: "alap betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "GyorsBeton",
		title: "Alap betonozás – 23. kerület",
		meta_description: "Alap betonozás Budapest 23. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Alap betonozás – Budapest 23. kerület",
		body: "A(z) alap betonozás stabil, időtálló megoldást ad. GyorsBeton csapata 23. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-23-kerulet-aljzat-betonozas",
		varos: "Budapest",
		kerulet: "23. kerület",
		marka: "N/A",
		modell: "aljzat betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "BetonProfi",
		title: "Aljzat betonozás – 23. kerület",
		meta_description: "Aljzat betonozás Budapest 23. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Aljzat betonozás – Budapest 23. kerület",
		body: "A(z) aljzat betonozás stabil, időtálló megoldást ad. BetonProfi csapata 23. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-23-kerulet-fodem-betonozas",
		varos: "Budapest",
		kerulet: "23. kerület",
		marka: "N/A",
		modell: "födém betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "garanciás munkavégzés, minőségi alapanyag",
		szerviz_nev: "AlapMester",
		title: "Födém betonozás – 23. kerület",
		meta_description: "Födém betonozás Budapest 23. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Födém betonozás – Budapest 23. kerület",
		body: "A(z) födém betonozás stabil, időtálló megoldást ad. AlapMester csapata 23. kerület térségében szakszerűen, pontos határidővel dolgozik. Garanciás munkavégzés, minőségi alapanyag. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-23-kerulet-terasz-betonozas",
		varos: "Budapest",
		kerulet: "23. kerület",
		marka: "N/A",
		modell: "terasz betonozás",
		szerviz_tipus: "szolgaltatasleiras",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "CityBeton",
		title: "Terasz betonozás – 23. kerület",
		meta_description: "Terasz betonozás Budapest 23. kerület környékén. CityBeton szakértelemmel és korrekt árakkal.",
		h1: "Terasz betonozás – Budapest 23. kerület",
		body: "A(z) terasz betonozás stabil, időtálló megoldást ad. CityBeton csapata 23. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-23-kerulet-garazsalap-betonozas",
		varos: "Budapest",
		kerulet: "23. kerület",
		marka: "N/A",
		modell: "gárazsalap betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors helyszíni betonozás, tanácsadás",
		szerviz_nev: "BetonFix",
		title: "Gárazsalap betonozás – 23. kerület",
		meta_description: "Gárazsalap betonozás Budapest 23. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Gárazsalap betonozás – Budapest 23. kerület",
		body: "A(z) gárazsalap betonozás stabil, időtálló megoldást ad. BetonFix csapata 23. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors helyszíni betonozás, tanácsadás. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-23-kerulet-ipari-padlo-betonozas",
		varos: "Budapest",
		kerulet: "23. kerület",
		marka: "N/A",
		modell: "ipári padló betonozás",
		szerviz_tipus: "blog",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "BetonFix",
		title: "Ipári padló betonozás – 23. kerület",
		meta_description: "Ipári padló betonozás Budapest 23. kerület környékén. BetonFix szakértelemmel és korrekt árakkal.",
		h1: "Ipári padló betonozás – Budapest 23. kerület",
		body: "A(z) ipári padló betonozás stabil, időtálló megoldást ad. BetonFix csapata 23. kerület térségében szakszerűen, pontos határidővel dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-23-kerulet-betonozas-hazilag",
		varos: "Budapest",
		kerulet: "23. kerület",
		marka: "N/A",
		modell: "betonozás házilag",
		szerviz_tipus: "blog",
		extra_igeny: "precíz betonozás, profi csapat",
		szerviz_nev: "AlapMester",
		title: "Betonozás házilag – 23. kerület",
		meta_description: "Betonozás házilag Budapest 23. kerület környékén. AlapMester szakértelemmel és korrekt árakkal.",
		h1: "Betonozás házilag – Budapest 23. kerület",
		body: "A(z) betonozás házilag stabil, időtálló megoldást ad. AlapMester csapata 23. kerület térségében szakszerűen, pontos határidővel dolgozik. Precíz betonozás, profi csapat. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-23-kerulet-betonozas-menete",
		varos: "Budapest",
		kerulet: "23. kerület",
		marka: "N/A",
		modell: "betonozás menete",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "BetonProfi",
		title: "Betonozás menete – 23. kerület",
		meta_description: "Betonozás menete Budapest 23. kerület környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Betonozás menete – Budapest 23. kerület",
		body: "A(z) betonozás menete stabil, időtálló megoldást ad. BetonProfi csapata 23. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-23-kerulet-betonozas-m2-ara",
		varos: "Budapest",
		kerulet: "23. kerület",
		marka: "N/A",
		modell: "betonozás m2 ára",
		szerviz_tipus: "blog",
		extra_igeny: "ingyenes kiszállás, pontos árkalkuláció",
		szerviz_nev: "GyorsBeton",
		title: "Betonozás m2 ára – 23. kerület",
		meta_description: "Betonozás m2 ára Budapest 23. kerület környékén. GyorsBeton szakértelemmel és korrekt árakkal.",
		h1: "Betonozás m2 ára – Budapest 23. kerület",
		body: "A(z) betonozás m2 ára stabil, időtálló megoldást ad. GyorsBeton csapata 23. kerület térségében szakszerűen, pontos határidővel dolgozik. Ingyenes kiszállás, pontos árkalkuláció. Kérjen ajánlatot most!"
	},
	{
		id: "budapest-kozpont-betonozas-budapest",
		varos: "Budapest",
		kerulet: "Központ",
		marka: "N/A",
		modell: "betonozás budapest",
		szerviz_tipus: "fooldal",
		extra_igeny: "gyors kivitelezés, díjmentes felmérés",
		szerviz_nev: "BetonProfi",
		title: "Betonozás budapest – Budapest Központ",
		meta_description: "Betonozás budapest Budapest Központ környékén. BetonProfi szakértelemmel és korrekt árakkal.",
		h1: "Betonozás budapest – Budapest Központ",
		body: "A(z) betonozás budapest iránti igény egész Budapesten erős. BetonProfi csapata központi területen is gyorsan és precízen dolgozik. Gyors kivitelezés, díjmentes felmérés. Kérjen ajánlatot most!"
	}
];

const fixedLastMod = (/* @__PURE__ */ new Date("2025-10-28")).toISOString();
const beton_service_sitemap = defineSitemapEventHandler(async () => {
  try {
    const variations = variaciok;
    const baseUrl = process.env.BASE_URL || "https://aszfaltozas24.hu";
    return variations.map((variation) => {
      const slugUrl = `/betonozas/${variation.id}`;
      const imageUrl = `${baseUrl}img/default.jpg`;
      return {
        loc: slugUrl,
        lastmod: fixedLastMod,
        changefreq: "monthly",
        priority: 0.9,
        // A _images mező a nuxt-sitemap modulban használatos a képekhez
        _images: [
          {
            url: imageUrl,
            title: variation.title || `${variation.marka} ${variation.modell} ${variation.szerviz_tipus}`,
            caption: variation.meta_description || `${variation.marka} ${variation.modell} ${variation.szerviz_tipus} ${variation.kerulet}`,
            // Opcionális mezők
            license: "https://aszfaltozas24.hu/license",
            geoLocation: "Budapest, Hungary"
          }
        ],
        // Alternatív módszer, ha a fenti nem működik
        images: [
          {
            loc: imageUrl,
            title: variation.title || `${variation.marka} ${variation.modell} ${variation.szerviz_tipus}`,
            caption: variation.meta_description || `${variation.marka} ${variation.modell} ${variation.szerviz_tipus} ${variation.kerulet}`
          }
        ]
      };
    });
  } catch (error) {
    console.error("Error generating sitemap for mobile service variations:", error);
    return [];
  }
});

const beton_service_sitemap$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: beton_service_sitemap
});

const beton_service = defineEventHandler(() => variaciok);

const beton_service$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: beton_service
});

function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    "type": "application/json",
    "innerHTML": contents,
    "data-nuxt-data": appId,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  {
    payload.id = "__NUXT_DATA__";
  }
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  const config = uneval(opts.ssrContext.config);
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderSSRHeadOptions = {"omitLineBreaks":false};

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const ssrContext = createSSRContext(event);
  const headEntryOptions = { mode: "server" };
  ssrContext.head.push(appHead, headEntryOptions);
  if (ssrError) {
    ssrError.statusCode &&= Number.parseInt(ssrError.statusCode);
    setSSRError(ssrContext, ssrError);
  }
  const isRenderingPayload = PAYLOAD_URL_RE.test(ssrContext.url);
  if (isRenderingPayload) {
    const url = ssrContext.url.substring(0, ssrContext.url.lastIndexOf("/")) || "/";
    ssrContext.url = url;
    event._path = event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  if (routeOptions.ssr === false) {
    ssrContext.noSSR = true;
  }
  const renderer = await getRenderer(ssrContext);
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  const inlinedStyles = [];
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response = renderPayloadResponse(ssrContext);
    return response;
  }
  const NO_SCRIPTS = routeOptions.noScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  if (ssrContext._preloadManifest && !NO_SCRIPTS) {
    ssrContext.head.push({
      link: [
        { rel: "preload", as: "fetch", fetchpriority: "low", crossorigin: "anonymous", href: buildAssetsURL(`builds/meta/${ssrContext.runtimeConfig.app.buildId}.json`) }
      ]
    }, { ...headEntryOptions, tagPriority: "low" });
  }
  if (inlinedStyles.length) {
    ssrContext.head.push({ style: inlinedStyles });
  }
  const link = [];
  for (const resource of Object.values(styles)) {
    if ("inline" in getQuery(resource.file)) {
      continue;
    }
    link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
  }
  if (link.length) {
    ssrContext.head.push({ link }, headEntryOptions);
  }
  if (!NO_SCRIPTS) {
    ssrContext.head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    ssrContext.head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    ssrContext.head.push({
      script: renderPayloadJsonScript({ ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.noScripts) {
    ssrContext.head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        // if we are rendering script tag payloads that import an async payload
        // we need to ensure this resolves before executing the Nuxt entry
        tagPosition: "head",
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(ssrContext.head, renderSSRHeadOptions);
  const htmlContext = {
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      replaceIslandTeleports(ssrContext, _rendered.html) ,
      APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG
    ],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  return {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
});
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
    return "";
  }
  return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});
//# sourceMappingURL=index.mjs.map
