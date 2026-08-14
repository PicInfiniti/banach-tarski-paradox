(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
  new MutationObserver((s) => {
    for (const r of s) if (r.type === "childList") for (const a of r.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: true, subtree: true });
  function t(s) {
    const r = {};
    return s.integrity && (r.integrity = s.integrity), s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? r.credentials = "include" : s.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
  }
  function n(s) {
    if (s.ep) return;
    s.ep = true;
    const r = t(s);
    fetch(s.href, r);
  }
})();
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
const Kr = "181", si = { ROTATE: 0, DOLLY: 1, PAN: 2 }, ii = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, nc = 0, da = 1, ic = 2, _o = 1, sc = 2, rn = 3, yn = 0, wt = 1, an = 2, ln = 0, ri = 1, nr = 2, fa = 3, pa = 4, rc = 5, Nn = 100, ac = 101, oc = 102, cc = 103, lc = 104, hc = 200, uc = 201, dc = 202, fc = 203, ir = 204, sr = 205, pc = 206, mc = 207, xc = 208, _c = 209, gc = 210, vc = 211, Mc = 212, Sc = 213, bc = 214, rr = 0, ar = 1, or = 2, oi = 3, cr = 4, lr = 5, hr = 6, ur = 7, go = 0, Ec = 1, yc = 2, En = 0, Tc = 1, Ac = 2, wc = 3, Rc = 4, Cc = 5, Pc = 6, Dc = 7, vo = 300, ci = 301, li = 302, dr = 303, fr = 304, gs = 306, pr = 1e3, on = 1001, mr = 1002, It = 1003, Lc = 1004, Fi = 1005, zt = 1006, Ts = 1007, On = 1008, un = 1009, Mo = 1010, So = 1011, Ti = 1012, Zr = 1013, zn = 1014, cn = 1015, di = 1016, jr = 1017, $r = 1018, Ai = 1020, bo = 35902, Eo = 35899, yo = 1021, To = 1022, Xt = 1023, wi = 1026, Ri = 1027, Ao = 1028, Jr = 1029, Qr = 1030, ea = 1031, ta = 1033, os = 33776, cs = 33777, ls = 33778, hs = 33779, xr = 35840, _r = 35841, gr = 35842, vr = 35843, Mr = 36196, Sr = 37492, br = 37496, Er = 37808, yr = 37809, Tr = 37810, Ar = 37811, wr = 37812, Rr = 37813, Cr = 37814, Pr = 37815, Dr = 37816, Lr = 37817, Ur = 37818, Ir = 37819, Nr = 37820, Fr = 37821, Or = 36492, Br = 36494, zr = 36495, Vr = 36283, Gr = 36284, kr = 36285, Hr = 36286, Uc = 3200, Ic = 3201, Nc = 0, Fc = 1, Sn = "", Ut = "srgb", hi = "srgb-linear", fs = "linear", Ze = "srgb", Hn = 7680, ma = 519, Oc = 512, Bc = 513, zc = 514, wo = 515, Vc = 516, Gc = 517, kc = 518, Hc = 519, xa = 35044, _a = "300 es", jt = 2e3, ps = 2001;
function Ro(i) {
  for (let e = i.length - 1; e >= 0; --e) if (i[e] >= 65535) return true;
  return false;
}
function ms(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Wc() {
  const i = ms("canvas");
  return i.style.display = "block", i;
}
const ga = {};
function va(...i) {
  const e = "THREE." + i.shift();
  console.log(e, ...i);
}
function Ce(...i) {
  const e = "THREE." + i.shift();
  console.warn(e, ...i);
}
function lt(...i) {
  const e = "THREE." + i.shift();
  console.error(e, ...i);
}
function Ci(...i) {
  const e = i.join(" ");
  e in ga || (ga[e] = true, Ce(...i));
}
function Xc(i, e, t) {
  return new Promise(function(n, s) {
    function r() {
      switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          s();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(r, t);
          break;
        default:
          n();
      }
    }
    setTimeout(r, t);
  });
}
class Gn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    const n = this._listeners;
    return n === void 0 ? false : n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    const n = this._listeners;
    if (n === void 0) return;
    const s = n[e];
    if (s !== void 0) {
      const r = s.indexOf(t);
      r !== -1 && s.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const n = t[e.type];
    if (n !== void 0) {
      e.target = this;
      const s = n.slice(0);
      for (let r = 0, a = s.length; r < a; r++) s[r].call(this, e);
      e.target = null;
    }
  }
}
const _t = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], us = Math.PI / 180, Wr = 180 / Math.PI;
function Pi() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (_t[i & 255] + _t[i >> 8 & 255] + _t[i >> 16 & 255] + _t[i >> 24 & 255] + "-" + _t[e & 255] + _t[e >> 8 & 255] + "-" + _t[e >> 16 & 15 | 64] + _t[e >> 24 & 255] + "-" + _t[t & 63 | 128] + _t[t >> 8 & 255] + "-" + _t[t >> 16 & 255] + _t[t >> 24 & 255] + _t[n & 255] + _t[n >> 8 & 255] + _t[n >> 16 & 255] + _t[n >> 24 & 255]).toLowerCase();
}
function Oe(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function qc(i, e) {
  return (i % e + e) % e;
}
function As(i, e, t) {
  return (1 - t) * i + t * e;
}
function xi(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Tt(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Yc = { DEG2RAD: us };
class Ne {
  constructor(e = 0, t = 0) {
    Ne.prototype.isVector2 = true, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6], this.y = s[1] * t + s[4] * n + s[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Oe(this.x, e.x, t.x), this.y = Oe(this.y, e.y, t.y), this;
  }
  clampScalar(e, t) {
    return this.x = Oe(this.x, e, t), this.y = Oe(this.y, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Oe(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Oe(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), s = Math.sin(t), r = this.x - e.x, a = this.y - e.y;
    return this.x = r * n - a * s + e.x, this.y = r * s + a * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class qt {
  constructor(e = 0, t = 0, n = 0, s = 1) {
    this.isQuaternion = true, this._x = e, this._y = t, this._z = n, this._w = s;
  }
  static slerpFlat(e, t, n, s, r, a, o) {
    let l = n[s + 0], c = n[s + 1], u = n[s + 2], d = n[s + 3], f = r[a + 0], m = r[a + 1], _ = r[a + 2], g = r[a + 3];
    if (o <= 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = d;
      return;
    }
    if (o >= 1) {
      e[t + 0] = f, e[t + 1] = m, e[t + 2] = _, e[t + 3] = g;
      return;
    }
    if (d !== g || l !== f || c !== m || u !== _) {
      let p = l * f + c * m + u * _ + d * g;
      p < 0 && (f = -f, m = -m, _ = -_, g = -g, p = -p);
      let h = 1 - o;
      if (p < 0.9995) {
        const T = Math.acos(p), E = Math.sin(T);
        h = Math.sin(h * T) / E, o = Math.sin(o * T) / E, l = l * h + f * o, c = c * h + m * o, u = u * h + _ * o, d = d * h + g * o;
      } else {
        l = l * h + f * o, c = c * h + m * o, u = u * h + _ * o, d = d * h + g * o;
        const T = 1 / Math.sqrt(l * l + c * c + u * u + d * d);
        l *= T, c *= T, u *= T, d *= T;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = d;
  }
  static multiplyQuaternionsFlat(e, t, n, s, r, a) {
    const o = n[s], l = n[s + 1], c = n[s + 2], u = n[s + 3], d = r[a], f = r[a + 1], m = r[a + 2], _ = r[a + 3];
    return e[t] = o * _ + u * d + l * m - c * f, e[t + 1] = l * _ + u * f + c * d - o * m, e[t + 2] = c * _ + u * m + o * f - l * d, e[t + 3] = u * _ - o * d - l * f - c * m, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, s) {
    return this._x = e, this._y = t, this._z = n, this._w = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = true) {
    const n = e._x, s = e._y, r = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), u = o(s / 2), d = o(r / 2), f = l(n / 2), m = l(s / 2), _ = l(r / 2);
    switch (a) {
      case "XYZ":
        this._x = f * u * d + c * m * _, this._y = c * m * d - f * u * _, this._z = c * u * _ + f * m * d, this._w = c * u * d - f * m * _;
        break;
      case "YXZ":
        this._x = f * u * d + c * m * _, this._y = c * m * d - f * u * _, this._z = c * u * _ - f * m * d, this._w = c * u * d + f * m * _;
        break;
      case "ZXY":
        this._x = f * u * d - c * m * _, this._y = c * m * d + f * u * _, this._z = c * u * _ + f * m * d, this._w = c * u * d - f * m * _;
        break;
      case "ZYX":
        this._x = f * u * d - c * m * _, this._y = c * m * d + f * u * _, this._z = c * u * _ - f * m * d, this._w = c * u * d + f * m * _;
        break;
      case "YZX":
        this._x = f * u * d + c * m * _, this._y = c * m * d + f * u * _, this._z = c * u * _ - f * m * d, this._w = c * u * d - f * m * _;
        break;
      case "XZY":
        this._x = f * u * d - c * m * _, this._y = c * m * d - f * u * _, this._z = c * u * _ + f * m * d, this._w = c * u * d + f * m * _;
        break;
      default:
        Ce("Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, s = Math.sin(n);
    return this._x = e.x * s, this._y = e.y * s, this._z = e.z * s, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], s = t[4], r = t[8], a = t[1], o = t[5], l = t[9], c = t[2], u = t[6], d = t[10], f = n + o + d;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / m, this._x = (u - l) * m, this._y = (r - c) * m, this._z = (a - s) * m;
    } else if (n > o && n > d) {
      const m = 2 * Math.sqrt(1 + n - o - d);
      this._w = (u - l) / m, this._x = 0.25 * m, this._y = (s + a) / m, this._z = (r + c) / m;
    } else if (o > d) {
      const m = 2 * Math.sqrt(1 + o - n - d);
      this._w = (r - c) / m, this._x = (s + a) / m, this._y = 0.25 * m, this._z = (l + u) / m;
    } else {
      const m = 2 * Math.sqrt(1 + d - n - o);
      this._w = (a - s) / m, this._x = (r + c) / m, this._y = (l + u) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < 1e-8 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Oe(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const s = Math.min(1, t / n);
    return this.slerp(e, s), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, s = e._y, r = e._z, a = e._w, o = t._x, l = t._y, c = t._z, u = t._w;
    return this._x = n * u + a * o + s * c - r * l, this._y = s * u + a * l + r * o - n * c, this._z = r * u + a * c + n * l - s * o, this._w = a * u - n * o - s * l - r * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t <= 0) return this;
    if (t >= 1) return this.copy(e);
    let n = e._x, s = e._y, r = e._z, a = e._w, o = this.dot(e);
    o < 0 && (n = -n, s = -s, r = -r, a = -a, o = -o);
    let l = 1 - t;
    if (o < 0.9995) {
      const c = Math.acos(o), u = Math.sin(c);
      l = Math.sin(l * c) / u, t = Math.sin(t * c) / u, this._x = this._x * l + n * t, this._y = this._y * l + s * t, this._z = this._z * l + r * t, this._w = this._w * l + a * t, this._onChangeCallback();
    } else this._x = this._x * l + n * t, this._y = this._y * l + s * t, this._z = this._z * l + r * t, this._w = this._w * l + a * t, this.normalize();
    return this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), s = Math.sqrt(1 - n), r = Math.sqrt(n);
    return this.set(s * Math.sin(e), s * Math.cos(e), r * Math.sin(t), r * Math.cos(t));
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class I {
  constructor(e = 0, t = 0, n = 0) {
    I.prototype.isVector3 = true, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Ma.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Ma.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, s = this.z, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6] * s, this.y = r[1] * t + r[4] * n + r[7] * s, this.z = r[2] * t + r[5] * n + r[8] * s, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, s = this.z, r = e.elements, a = 1 / (r[3] * t + r[7] * n + r[11] * s + r[15]);
    return this.x = (r[0] * t + r[4] * n + r[8] * s + r[12]) * a, this.y = (r[1] * t + r[5] * n + r[9] * s + r[13]) * a, this.z = (r[2] * t + r[6] * n + r[10] * s + r[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, s = this.z, r = e.x, a = e.y, o = e.z, l = e.w, c = 2 * (a * s - o * n), u = 2 * (o * t - r * s), d = 2 * (r * n - a * t);
    return this.x = t + l * c + a * d - o * u, this.y = n + l * u + o * c - r * d, this.z = s + l * d + r * u - a * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, s = this.z, r = e.elements;
    return this.x = r[0] * t + r[4] * n + r[8] * s, this.y = r[1] * t + r[5] * n + r[9] * s, this.z = r[2] * t + r[6] * n + r[10] * s, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Oe(this.x, e.x, t.x), this.y = Oe(this.y, e.y, t.y), this.z = Oe(this.z, e.z, t.z), this;
  }
  clampScalar(e, t) {
    return this.x = Oe(this.x, e, t), this.y = Oe(this.y, e, t), this.z = Oe(this.z, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Oe(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, s = e.y, r = e.z, a = t.x, o = t.y, l = t.z;
    return this.x = s * l - r * o, this.y = r * a - n * l, this.z = n * o - s * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return ws.copy(this).projectOnVector(e), this.sub(ws);
  }
  reflect(e) {
    return this.sub(ws.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Oe(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, s = this.z - e.z;
    return t * t + n * n + s * s;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const s = Math.sin(t) * e;
    return this.x = s * Math.sin(n), this.y = Math.cos(t) * e, this.z = s * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), s = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = s, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const ws = new I(), Ma = new qt();
class Ue {
  constructor(e, t, n, s, r, a, o, l, c) {
    Ue.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, s, r, a, o, l, c);
  }
  set(e, t, n, s, r, a, o, l, c) {
    const u = this.elements;
    return u[0] = e, u[1] = s, u[2] = o, u[3] = t, u[4] = r, u[5] = l, u[6] = n, u[7] = a, u[8] = c, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, s = t.elements, r = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], u = n[4], d = n[7], f = n[2], m = n[5], _ = n[8], g = s[0], p = s[3], h = s[6], T = s[1], E = s[4], w = s[7], D = s[2], y = s[5], C = s[8];
    return r[0] = a * g + o * T + l * D, r[3] = a * p + o * E + l * y, r[6] = a * h + o * w + l * C, r[1] = c * g + u * T + d * D, r[4] = c * p + u * E + d * y, r[7] = c * h + u * w + d * C, r[2] = f * g + m * T + _ * D, r[5] = f * p + m * E + _ * y, r[8] = f * h + m * w + _ * C, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], s = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], u = e[8];
    return t * a * u - t * o * c - n * r * u + n * o * l + s * r * c - s * a * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], s = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], u = e[8], d = u * a - o * c, f = o * l - u * r, m = c * r - a * l, _ = t * d + n * f + s * m;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const g = 1 / _;
    return e[0] = d * g, e[1] = (s * c - u * n) * g, e[2] = (o * n - s * a) * g, e[3] = f * g, e[4] = (u * t - s * l) * g, e[5] = (s * r - o * t) * g, e[6] = m * g, e[7] = (n * l - c * t) * g, e[8] = (a * t - n * r) * g, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, s, r, a, o) {
    const l = Math.cos(r), c = Math.sin(r);
    return this.set(n * l, n * c, -n * (l * a + c * o) + a + e, -s * c, s * l, -s * (-c * a + l * o) + o + t, 0, 0, 1), this;
  }
  scale(e, t) {
    return this.premultiply(Rs.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Rs.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Rs.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let s = 0; s < 9; s++) if (t[s] !== n[s]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Rs = new Ue(), Sa = new Ue().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), ba = new Ue().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function Kc() {
  const i = { enabled: true, workingColorSpace: hi, spaces: {}, convert: function(s, r, a) {
    return this.enabled === false || r === a || !r || !a || (this.spaces[r].transfer === Ze && (s.r = hn(s.r), s.g = hn(s.g), s.b = hn(s.b)), this.spaces[r].primaries !== this.spaces[a].primaries && (s.applyMatrix3(this.spaces[r].toXYZ), s.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === Ze && (s.r = ai(s.r), s.g = ai(s.g), s.b = ai(s.b))), s;
  }, workingToColorSpace: function(s, r) {
    return this.convert(s, this.workingColorSpace, r);
  }, colorSpaceToWorking: function(s, r) {
    return this.convert(s, r, this.workingColorSpace);
  }, getPrimaries: function(s) {
    return this.spaces[s].primaries;
  }, getTransfer: function(s) {
    return s === Sn ? fs : this.spaces[s].transfer;
  }, getToneMappingMode: function(s) {
    return this.spaces[s].outputColorSpaceConfig.toneMappingMode || "standard";
  }, getLuminanceCoefficients: function(s, r = this.workingColorSpace) {
    return s.fromArray(this.spaces[r].luminanceCoefficients);
  }, define: function(s) {
    Object.assign(this.spaces, s);
  }, _getMatrix: function(s, r, a) {
    return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ);
  }, _getDrawingBufferColorSpace: function(s) {
    return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace;
  }, _getUnpackColorSpace: function(s = this.workingColorSpace) {
    return this.spaces[s].workingColorSpaceConfig.unpackColorSpace;
  }, fromWorkingColorSpace: function(s, r) {
    return Ci("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), i.workingToColorSpace(s, r);
  }, toWorkingColorSpace: function(s, r) {
    return Ci("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), i.colorSpaceToWorking(s, r);
  } }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return i.define({ [hi]: { primaries: e, whitePoint: n, transfer: fs, toXYZ: Sa, fromXYZ: ba, luminanceCoefficients: t, workingColorSpaceConfig: { unpackColorSpace: Ut }, outputColorSpaceConfig: { drawingBufferColorSpace: Ut } }, [Ut]: { primaries: e, whitePoint: n, transfer: Ze, toXYZ: Sa, fromXYZ: ba, luminanceCoefficients: t, outputColorSpaceConfig: { drawingBufferColorSpace: Ut } } }), i;
}
const Xe = Kc();
function hn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function ai(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Wn;
class Zc {
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let n;
    if (e instanceof HTMLCanvasElement) n = e;
    else {
      Wn === void 0 && (Wn = ms("canvas")), Wn.width = e.width, Wn.height = e.height;
      const s = Wn.getContext("2d");
      e instanceof ImageData ? s.putImageData(e, 0, 0) : s.drawImage(e, 0, 0, e.width, e.height), n = Wn;
    }
    return n.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = ms("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const s = n.getImageData(0, 0, e.width, e.height), r = s.data;
      for (let a = 0; a < r.length; a++) r[a] = hn(r[a] / 255) * 255;
      return n.putImageData(s, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(hn(t[n] / 255) * 255) : t[n] = hn(t[n]);
      return { data: t, width: e.width, height: e.height };
    } else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let jc = 0;
class na {
  constructor(e = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: jc++ }), this.uuid = Pi(), this.data = e, this.dataReady = true, this.version = 0;
  }
  getSize(e) {
    const t = this.data;
    return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : t instanceof VideoFrame ? e.set(t.displayHeight, t.displayWidth, 0) : t !== null ? e.set(t.width, t.height, t.depth || 0) : e.set(0, 0, 0), e;
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" }, s = this.data;
    if (s !== null) {
      let r;
      if (Array.isArray(s)) {
        r = [];
        for (let a = 0, o = s.length; a < o; a++) s[a].isDataTexture ? r.push(Cs(s[a].image)) : r.push(Cs(s[a]));
      } else r = Cs(s);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Cs(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Zc.getDataURL(i) : i.data ? { data: Array.from(i.data), width: i.width, height: i.height, type: i.data.constructor.name } : (Ce("Texture: Unable to serialize Texture."), {});
}
let $c = 0;
const Ps = new I();
class St extends Gn {
  constructor(e = St.DEFAULT_IMAGE, t = St.DEFAULT_MAPPING, n = on, s = on, r = zt, a = On, o = Xt, l = un, c = St.DEFAULT_ANISOTROPY, u = Sn) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: $c++ }), this.uuid = Pi(), this.name = "", this.source = new na(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = s, this.magFilter = r, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new Ne(0, 0), this.repeat = new Ne(1, 1), this.center = new Ne(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Ue(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0;
  }
  get width() {
    return this.source.getSize(Ps).x;
  }
  get height() {
    return this.source.getSize(Ps).y;
  }
  get depth() {
    return this.source.getSize(Ps).z;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = true, this;
  }
  setValues(e) {
    for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const s = this[t];
      if (s === void 0) {
        Ce(`Texture.setValues(): property '${t}' does not exist.`);
        continue;
      }
      s && n && s.isVector2 && n.isVector2 || s && n && s.isVector3 && n.isVector3 || s && n && s.isMatrix3 && n.isMatrix3 ? s.copy(n) : this[t] = n;
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = { metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== vo) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
      case pr:
        e.x = e.x - Math.floor(e.x);
        break;
      case on:
        e.x = e.x < 0 ? 0 : 1;
        break;
      case mr:
        Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
        break;
    }
    if (e.y < 0 || e.y > 1) switch (this.wrapT) {
      case pr:
        e.y = e.y - Math.floor(e.y);
        break;
      case on:
        e.y = e.y < 0 ? 0 : 1;
        break;
      case mr:
        Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
        break;
    }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === true && (this.version++, this.source.needsUpdate = true);
  }
  set needsPMREMUpdate(e) {
    e === true && this.pmremVersion++;
  }
}
St.DEFAULT_IMAGE = null;
St.DEFAULT_MAPPING = vo;
St.DEFAULT_ANISOTROPY = 1;
class ht {
  constructor(e = 0, t = 0, n = 0, s = 1) {
    ht.prototype.isVector4 = true, this.x = e, this.y = t, this.z = n, this.w = s;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, s) {
    return this.x = e, this.y = t, this.z = n, this.w = s, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, s = this.z, r = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * s + a[12] * r, this.y = a[1] * t + a[5] * n + a[9] * s + a[13] * r, this.z = a[2] * t + a[6] * n + a[10] * s + a[14] * r, this.w = a[3] * t + a[7] * n + a[11] * s + a[15] * r, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, s, r;
    const l = e.elements, c = l[0], u = l[4], d = l[8], f = l[1], m = l[5], _ = l[9], g = l[2], p = l[6], h = l[10];
    if (Math.abs(u - f) < 0.01 && Math.abs(d - g) < 0.01 && Math.abs(_ - p) < 0.01) {
      if (Math.abs(u + f) < 0.1 && Math.abs(d + g) < 0.1 && Math.abs(_ + p) < 0.1 && Math.abs(c + m + h - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const E = (c + 1) / 2, w = (m + 1) / 2, D = (h + 1) / 2, y = (u + f) / 4, C = (d + g) / 4, B = (_ + p) / 4;
      return E > w && E > D ? E < 0.01 ? (n = 0, s = 0.707106781, r = 0.707106781) : (n = Math.sqrt(E), s = y / n, r = C / n) : w > D ? w < 0.01 ? (n = 0.707106781, s = 0, r = 0.707106781) : (s = Math.sqrt(w), n = y / s, r = B / s) : D < 0.01 ? (n = 0.707106781, s = 0.707106781, r = 0) : (r = Math.sqrt(D), n = C / r, s = B / r), this.set(n, s, r, t), this;
    }
    let T = Math.sqrt((p - _) * (p - _) + (d - g) * (d - g) + (f - u) * (f - u));
    return Math.abs(T) < 1e-3 && (T = 1), this.x = (p - _) / T, this.y = (d - g) / T, this.z = (f - u) / T, this.w = Math.acos((c + m + h - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Oe(this.x, e.x, t.x), this.y = Oe(this.y, e.y, t.y), this.z = Oe(this.z, e.z, t.z), this.w = Oe(this.w, e.w, t.w), this;
  }
  clampScalar(e, t) {
    return this.x = Oe(this.x, e, t), this.y = Oe(this.y, e, t), this.z = Oe(this.z, e, t), this.w = Oe(this.w, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Oe(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Jc extends Gn {
  constructor(e = 1, t = 1, n = {}) {
    super(), n = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: zt, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1, depth: 1, multiview: false }, n), this.isRenderTarget = true, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new ht(0, 0, e, t), this.scissorTest = false, this.viewport = new ht(0, 0, e, t);
    const s = { width: e, height: t, depth: n.depth }, r = new St(s);
    this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++) this.textures[o] = r.clone(), this.textures[o].isRenderTargetTexture = true, this.textures[o].renderTarget = this;
    this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview;
  }
  _setTextureOptions(e = {}) {
    const t = { minFilter: zt, generateMipmaps: false, flipY: false, internalFormat: null };
    e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
    for (let n = 0; n < this.textures.length; n++) this.textures[n].setValues(t);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let s = 0, r = this.textures.length; s < r; s++) this.textures[s].image.width = e, this.textures[s].image.height = t, this.textures[s].image.depth = n, this.textures[s].isData3DTexture !== true && (this.textures[s].isArrayTexture = this.textures[s].image.depth > 1);
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let t = 0, n = e.textures.length; t < n; t++) {
      this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = true, this.textures[t].renderTarget = this;
      const s = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new na(s);
    }
    return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Vn extends Jc {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = true;
  }
}
class Co extends St {
  constructor(e = null, t = 1, n = 1, s = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: e, width: t, height: n, depth: s }, this.magFilter = It, this.minFilter = It, this.wrapR = on, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Qc extends St {
  constructor(e = null, t = 1, n = 1, s = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: e, width: t, height: n, depth: s }, this.magFilter = It, this.minFilter = It, this.wrapR = on, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class Di {
  constructor(e = new I(1 / 0, 1 / 0, 1 / 0), t = new I(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(Gt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(Gt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Gt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = false) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = false) {
    e.updateWorldMatrix(false, false);
    const n = e.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (t === true && r !== void 0 && e.isInstancedMesh !== true) for (let a = 0, o = r.count; a < o; a++) e.isMesh === true ? e.getVertexPosition(a, Gt) : Gt.fromBufferAttribute(r, a), Gt.applyMatrix4(e.matrixWorld), this.expandByPoint(Gt);
      else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Oi.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Oi.copy(n.boundingBox)), Oi.applyMatrix4(e.matrixWorld), this.union(Oi);
    }
    const s = e.children;
    for (let r = 0, a = s.length; r < a; r++) this.expandByObject(s[r], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Gt), Gt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return false;
    this.getCenter(_i), Bi.subVectors(this.max, _i), Xn.subVectors(e.a, _i), qn.subVectors(e.b, _i), Yn.subVectors(e.c, _i), pn.subVectors(qn, Xn), mn.subVectors(Yn, qn), Rn.subVectors(Xn, Yn);
    let t = [0, -pn.z, pn.y, 0, -mn.z, mn.y, 0, -Rn.z, Rn.y, pn.z, 0, -pn.x, mn.z, 0, -mn.x, Rn.z, 0, -Rn.x, -pn.y, pn.x, 0, -mn.y, mn.x, 0, -Rn.y, Rn.x, 0];
    return !Ds(t, Xn, qn, Yn, Bi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Ds(t, Xn, qn, Yn, Bi)) ? false : (zi.crossVectors(pn, mn), t = [zi.x, zi.y, zi.z], Ds(t, Xn, qn, Yn, Bi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Gt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Gt).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : ($t[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), $t[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), $t[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), $t[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), $t[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), $t[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), $t[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), $t[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints($t), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  toJSON() {
    return { min: this.min.toArray(), max: this.max.toArray() };
  }
  fromJSON(e) {
    return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
  }
}
const $t = [new I(), new I(), new I(), new I(), new I(), new I(), new I(), new I()], Gt = new I(), Oi = new Di(), Xn = new I(), qn = new I(), Yn = new I(), pn = new I(), mn = new I(), Rn = new I(), _i = new I(), Bi = new I(), zi = new I(), Cn = new I();
function Ds(i, e, t, n, s) {
  for (let r = 0, a = i.length - 3; r <= a; r += 3) {
    Cn.fromArray(i, r);
    const o = s.x * Math.abs(Cn.x) + s.y * Math.abs(Cn.y) + s.z * Math.abs(Cn.z), l = e.dot(Cn), c = t.dot(Cn), u = n.dot(Cn);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o) return false;
  }
  return true;
}
const el = new Di(), gi = new I(), Ls = new I();
class Li {
  constructor(e = new I(), t = -1) {
    this.isSphere = true, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : el.setFromPoints(e).getCenter(n);
    let s = 0;
    for (let r = 0, a = e.length; r < a; r++) s = Math.max(s, n.distanceToSquared(e[r]));
    return this.radius = Math.sqrt(s), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
    gi.subVectors(e, this.center);
    const t = gi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), s = (n - this.radius) * 0.5;
      this.center.addScaledVector(gi, s / n), this.radius += s;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === true ? this.radius = Math.max(this.radius, e.radius) : (Ls.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(gi.copy(e.center).add(Ls)), this.expandByPoint(gi.copy(e.center).sub(Ls))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { radius: this.radius, center: this.center.toArray() };
  }
  fromJSON(e) {
    return this.radius = e.radius, this.center.fromArray(e.center), this;
  }
}
const Jt = new I(), Us = new I(), Vi = new I(), xn = new I(), Is = new I(), Gi = new I(), Ns = new I();
class vs {
  constructor(e = new I(), t = new I(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Jt)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Jt.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Jt.copy(this.origin).addScaledVector(this.direction, t), Jt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, s) {
    Us.copy(e).add(t).multiplyScalar(0.5), Vi.copy(t).sub(e).normalize(), xn.copy(this.origin).sub(Us);
    const r = e.distanceTo(t) * 0.5, a = -this.direction.dot(Vi), o = xn.dot(this.direction), l = -xn.dot(Vi), c = xn.lengthSq(), u = Math.abs(1 - a * a);
    let d, f, m, _;
    if (u > 0) if (d = a * l - o, f = a * o - l, _ = r * u, d >= 0) if (f >= -_) if (f <= _) {
      const g = 1 / u;
      d *= g, f *= g, m = d * (d + a * f + 2 * o) + f * (a * d + f + 2 * l) + c;
    } else f = r, d = Math.max(0, -(a * f + o)), m = -d * d + f * (f + 2 * l) + c;
    else f = -r, d = Math.max(0, -(a * f + o)), m = -d * d + f * (f + 2 * l) + c;
    else f <= -_ ? (d = Math.max(0, -(-a * r + o)), f = d > 0 ? -r : Math.min(Math.max(-r, -l), r), m = -d * d + f * (f + 2 * l) + c) : f <= _ ? (d = 0, f = Math.min(Math.max(-r, -l), r), m = f * (f + 2 * l) + c) : (d = Math.max(0, -(a * r + o)), f = d > 0 ? r : Math.min(Math.max(-r, -l), r), m = -d * d + f * (f + 2 * l) + c);
    else f = a > 0 ? -r : r, d = Math.max(0, -(a * f + o)), m = -d * d + f * (f + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, d), s && s.copy(Us).addScaledVector(Vi, f), m;
  }
  intersectSphere(e, t) {
    Jt.subVectors(e.center, this.origin);
    const n = Jt.dot(this.direction), s = Jt.dot(Jt) - n * n, r = e.radius * e.radius;
    if (s > r) return null;
    const a = Math.sqrt(r - s), o = n - a, l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return e.radius < 0 ? false : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, s, r, a, o, l;
    const c = 1 / this.direction.x, u = 1 / this.direction.y, d = 1 / this.direction.z, f = this.origin;
    return c >= 0 ? (n = (e.min.x - f.x) * c, s = (e.max.x - f.x) * c) : (n = (e.max.x - f.x) * c, s = (e.min.x - f.x) * c), u >= 0 ? (r = (e.min.y - f.y) * u, a = (e.max.y - f.y) * u) : (r = (e.max.y - f.y) * u, a = (e.min.y - f.y) * u), n > a || r > s || ((r > n || isNaN(n)) && (n = r), (a < s || isNaN(s)) && (s = a), d >= 0 ? (o = (e.min.z - f.z) * d, l = (e.max.z - f.z) * d) : (o = (e.max.z - f.z) * d, l = (e.min.z - f.z) * d), n > l || o > s) || ((o > n || n !== n) && (n = o), (l < s || s !== s) && (s = l), s < 0) ? null : this.at(n >= 0 ? n : s, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Jt) !== null;
  }
  intersectTriangle(e, t, n, s, r) {
    Is.subVectors(t, e), Gi.subVectors(n, e), Ns.crossVectors(Is, Gi);
    let a = this.direction.dot(Ns), o;
    if (a > 0) {
      if (s) return null;
      o = 1;
    } else if (a < 0) o = -1, a = -a;
    else return null;
    xn.subVectors(this.origin, e);
    const l = o * this.direction.dot(Gi.crossVectors(xn, Gi));
    if (l < 0) return null;
    const c = o * this.direction.dot(Is.cross(xn));
    if (c < 0 || l + c > a) return null;
    const u = -o * xn.dot(Ns);
    return u < 0 ? null : this.at(u / a, r);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class at {
  constructor(e, t, n, s, r, a, o, l, c, u, d, f, m, _, g, p) {
    at.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, s, r, a, o, l, c, u, d, f, m, _, g, p);
  }
  set(e, t, n, s, r, a, o, l, c, u, d, f, m, _, g, p) {
    const h = this.elements;
    return h[0] = e, h[4] = t, h[8] = n, h[12] = s, h[1] = r, h[5] = a, h[9] = o, h[13] = l, h[2] = c, h[6] = u, h[10] = d, h[14] = f, h[3] = m, h[7] = _, h[11] = g, h[15] = p, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new at().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, s = 1 / Kn.setFromMatrixColumn(e, 0).length(), r = 1 / Kn.setFromMatrixColumn(e, 1).length(), a = 1 / Kn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * s, t[1] = n[1] * s, t[2] = n[2] * s, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, s = e.y, r = e.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(s), c = Math.sin(s), u = Math.cos(r), d = Math.sin(r);
    if (e.order === "XYZ") {
      const f = a * u, m = a * d, _ = o * u, g = o * d;
      t[0] = l * u, t[4] = -l * d, t[8] = c, t[1] = m + _ * c, t[5] = f - g * c, t[9] = -o * l, t[2] = g - f * c, t[6] = _ + m * c, t[10] = a * l;
    } else if (e.order === "YXZ") {
      const f = l * u, m = l * d, _ = c * u, g = c * d;
      t[0] = f + g * o, t[4] = _ * o - m, t[8] = a * c, t[1] = a * d, t[5] = a * u, t[9] = -o, t[2] = m * o - _, t[6] = g + f * o, t[10] = a * l;
    } else if (e.order === "ZXY") {
      const f = l * u, m = l * d, _ = c * u, g = c * d;
      t[0] = f - g * o, t[4] = -a * d, t[8] = _ + m * o, t[1] = m + _ * o, t[5] = a * u, t[9] = g - f * o, t[2] = -a * c, t[6] = o, t[10] = a * l;
    } else if (e.order === "ZYX") {
      const f = a * u, m = a * d, _ = o * u, g = o * d;
      t[0] = l * u, t[4] = _ * c - m, t[8] = f * c + g, t[1] = l * d, t[5] = g * c + f, t[9] = m * c - _, t[2] = -c, t[6] = o * l, t[10] = a * l;
    } else if (e.order === "YZX") {
      const f = a * l, m = a * c, _ = o * l, g = o * c;
      t[0] = l * u, t[4] = g - f * d, t[8] = _ * d + m, t[1] = d, t[5] = a * u, t[9] = -o * u, t[2] = -c * u, t[6] = m * d + _, t[10] = f - g * d;
    } else if (e.order === "XZY") {
      const f = a * l, m = a * c, _ = o * l, g = o * c;
      t[0] = l * u, t[4] = -d, t[8] = c * u, t[1] = f * d + g, t[5] = a * u, t[9] = m * d - _, t[2] = _ * d - m, t[6] = o * u, t[10] = g * d + f;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(tl, e, nl);
  }
  lookAt(e, t, n) {
    const s = this.elements;
    return Dt.subVectors(e, t), Dt.lengthSq() === 0 && (Dt.z = 1), Dt.normalize(), _n.crossVectors(n, Dt), _n.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Dt.x += 1e-4 : Dt.z += 1e-4, Dt.normalize(), _n.crossVectors(n, Dt)), _n.normalize(), ki.crossVectors(Dt, _n), s[0] = _n.x, s[4] = ki.x, s[8] = Dt.x, s[1] = _n.y, s[5] = ki.y, s[9] = Dt.y, s[2] = _n.z, s[6] = ki.z, s[10] = Dt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, s = t.elements, r = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], u = n[1], d = n[5], f = n[9], m = n[13], _ = n[2], g = n[6], p = n[10], h = n[14], T = n[3], E = n[7], w = n[11], D = n[15], y = s[0], C = s[4], B = s[8], S = s[12], M = s[1], P = s[5], z = s[9], G = s[13], Y = s[2], W = s[6], K = s[10], J = s[14], k = s[3], ne = s[7], re = s[11], Se = s[15];
    return r[0] = a * y + o * M + l * Y + c * k, r[4] = a * C + o * P + l * W + c * ne, r[8] = a * B + o * z + l * K + c * re, r[12] = a * S + o * G + l * J + c * Se, r[1] = u * y + d * M + f * Y + m * k, r[5] = u * C + d * P + f * W + m * ne, r[9] = u * B + d * z + f * K + m * re, r[13] = u * S + d * G + f * J + m * Se, r[2] = _ * y + g * M + p * Y + h * k, r[6] = _ * C + g * P + p * W + h * ne, r[10] = _ * B + g * z + p * K + h * re, r[14] = _ * S + g * G + p * J + h * Se, r[3] = T * y + E * M + w * Y + D * k, r[7] = T * C + E * P + w * W + D * ne, r[11] = T * B + E * z + w * K + D * re, r[15] = T * S + E * G + w * J + D * Se, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], s = e[8], r = e[12], a = e[1], o = e[5], l = e[9], c = e[13], u = e[2], d = e[6], f = e[10], m = e[14], _ = e[3], g = e[7], p = e[11], h = e[15];
    return _ * (+r * l * d - s * c * d - r * o * f + n * c * f + s * o * m - n * l * m) + g * (+t * l * m - t * c * f + r * a * f - s * a * m + s * c * u - r * l * u) + p * (+t * c * d - t * o * m - r * a * d + n * a * m + r * o * u - n * c * u) + h * (-s * o * u - t * l * d + t * o * f + s * a * d - n * a * f + n * l * u);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const s = this.elements;
    return e.isVector3 ? (s[12] = e.x, s[13] = e.y, s[14] = e.z) : (s[12] = e, s[13] = t, s[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], s = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], u = e[8], d = e[9], f = e[10], m = e[11], _ = e[12], g = e[13], p = e[14], h = e[15], T = d * p * c - g * f * c + g * l * m - o * p * m - d * l * h + o * f * h, E = _ * f * c - u * p * c - _ * l * m + a * p * m + u * l * h - a * f * h, w = u * g * c - _ * d * c + _ * o * m - a * g * m - u * o * h + a * d * h, D = _ * d * l - u * g * l - _ * o * f + a * g * f + u * o * p - a * d * p, y = t * T + n * E + s * w + r * D;
    if (y === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const C = 1 / y;
    return e[0] = T * C, e[1] = (g * f * r - d * p * r - g * s * m + n * p * m + d * s * h - n * f * h) * C, e[2] = (o * p * r - g * l * r + g * s * c - n * p * c - o * s * h + n * l * h) * C, e[3] = (d * l * r - o * f * r - d * s * c + n * f * c + o * s * m - n * l * m) * C, e[4] = E * C, e[5] = (u * p * r - _ * f * r + _ * s * m - t * p * m - u * s * h + t * f * h) * C, e[6] = (_ * l * r - a * p * r - _ * s * c + t * p * c + a * s * h - t * l * h) * C, e[7] = (a * f * r - u * l * r + u * s * c - t * f * c - a * s * m + t * l * m) * C, e[8] = w * C, e[9] = (_ * d * r - u * g * r - _ * n * m + t * g * m + u * n * h - t * d * h) * C, e[10] = (a * g * r - _ * o * r + _ * n * c - t * g * c - a * n * h + t * o * h) * C, e[11] = (u * o * r - a * d * r - u * n * c + t * d * c + a * n * m - t * o * m) * C, e[12] = D * C, e[13] = (u * g * s - _ * d * s + _ * n * f - t * g * f - u * n * p + t * d * p) * C, e[14] = (_ * o * s - a * g * s - _ * n * l + t * g * l + a * n * p - t * o * p) * C, e[15] = (a * d * s - u * o * s + u * n * l - t * d * l - a * n * f + t * o * f) * C, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, s = e.y, r = e.z;
    return t[0] *= n, t[4] *= s, t[8] *= r, t[1] *= n, t[5] *= s, t[9] *= r, t[2] *= n, t[6] *= s, t[10] *= r, t[3] *= n, t[7] *= s, t[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], s = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, s));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), s = Math.sin(t), r = 1 - n, a = e.x, o = e.y, l = e.z, c = r * a, u = r * o;
    return this.set(c * a + n, c * o - s * l, c * l + s * o, 0, c * o + s * l, u * o + n, u * l - s * a, 0, c * l - s * o, u * l + s * a, r * l * l + n, 0, 0, 0, 0, 1), this;
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, s, r, a) {
    return this.set(1, n, r, 0, e, 1, a, 0, t, s, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const s = this.elements, r = t._x, a = t._y, o = t._z, l = t._w, c = r + r, u = a + a, d = o + o, f = r * c, m = r * u, _ = r * d, g = a * u, p = a * d, h = o * d, T = l * c, E = l * u, w = l * d, D = n.x, y = n.y, C = n.z;
    return s[0] = (1 - (g + h)) * D, s[1] = (m + w) * D, s[2] = (_ - E) * D, s[3] = 0, s[4] = (m - w) * y, s[5] = (1 - (f + h)) * y, s[6] = (p + T) * y, s[7] = 0, s[8] = (_ + E) * C, s[9] = (p - T) * C, s[10] = (1 - (f + g)) * C, s[11] = 0, s[12] = e.x, s[13] = e.y, s[14] = e.z, s[15] = 1, this;
  }
  decompose(e, t, n) {
    const s = this.elements;
    let r = Kn.set(s[0], s[1], s[2]).length();
    const a = Kn.set(s[4], s[5], s[6]).length(), o = Kn.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (r = -r), e.x = s[12], e.y = s[13], e.z = s[14], kt.copy(this);
    const c = 1 / r, u = 1 / a, d = 1 / o;
    return kt.elements[0] *= c, kt.elements[1] *= c, kt.elements[2] *= c, kt.elements[4] *= u, kt.elements[5] *= u, kt.elements[6] *= u, kt.elements[8] *= d, kt.elements[9] *= d, kt.elements[10] *= d, t.setFromRotationMatrix(kt), n.x = r, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, s, r, a, o = jt, l = false) {
    const c = this.elements, u = 2 * r / (t - e), d = 2 * r / (n - s), f = (t + e) / (t - e), m = (n + s) / (n - s);
    let _, g;
    if (l) _ = r / (a - r), g = a * r / (a - r);
    else if (o === jt) _ = -(a + r) / (a - r), g = -2 * a * r / (a - r);
    else if (o === ps) _ = -a / (a - r), g = -a * r / (a - r);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return c[0] = u, c[4] = 0, c[8] = f, c[12] = 0, c[1] = 0, c[5] = d, c[9] = m, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = _, c[14] = g, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(e, t, n, s, r, a, o = jt, l = false) {
    const c = this.elements, u = 2 / (t - e), d = 2 / (n - s), f = -(t + e) / (t - e), m = -(n + s) / (n - s);
    let _, g;
    if (l) _ = 1 / (a - r), g = a / (a - r);
    else if (o === jt) _ = -2 / (a - r), g = -(a + r) / (a - r);
    else if (o === ps) _ = -1 / (a - r), g = -r / (a - r);
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return c[0] = u, c[4] = 0, c[8] = 0, c[12] = f, c[1] = 0, c[5] = d, c[9] = 0, c[13] = m, c[2] = 0, c[6] = 0, c[10] = _, c[14] = g, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let s = 0; s < 16; s++) if (t[s] !== n[s]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Kn = new I(), kt = new at(), tl = new I(0, 0, 0), nl = new I(1, 1, 1), _n = new I(), ki = new I(), Dt = new I(), Ea = new at(), ya = new qt();
class dn {
  constructor(e = 0, t = 0, n = 0, s = dn.DEFAULT_ORDER) {
    this.isEuler = true, this._x = e, this._y = t, this._z = n, this._order = s;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, s = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = true) {
    const s = e.elements, r = s[0], a = s[4], o = s[8], l = s[1], c = s[5], u = s[9], d = s[2], f = s[6], m = s[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Oe(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-u, m), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(f, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Oe(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-d, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Oe(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-d, m), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-Oe(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(f, m), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(Oe(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-d, r)) : (this._x = 0, this._y = Math.atan2(o, m));
        break;
      case "XZY":
        this._z = Math.asin(-Oe(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-u, m), this._y = 0);
        break;
      default:
        Ce("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Ea.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ea, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return ya.setFromEuler(this), this.setFromQuaternion(ya, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
dn.DEFAULT_ORDER = "XYZ";
class Po {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let il = 0;
const Ta = new I(), Zn = new qt(), Qt = new at(), Hi = new I(), vi = new I(), sl = new I(), rl = new qt(), Aa = new I(1, 0, 0), wa = new I(0, 1, 0), Ra = new I(0, 0, 1), Ca = { type: "added" }, al = { type: "removed" }, jn = { type: "childadded", child: null }, Fs = { type: "childremoved", child: null };
class bt extends Gn {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: il++ }), this.uuid = Pi(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = bt.DEFAULT_UP.clone();
    const e = new I(), t = new dn(), n = new qt(), s = new I(1, 1, 1);
    function r() {
      n.setFromEuler(t, false);
    }
    function a() {
      t.setFromQuaternion(n, void 0, false);
    }
    t._onChange(r), n._onChange(a), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: e }, rotation: { configurable: true, enumerable: true, value: t }, quaternion: { configurable: true, enumerable: true, value: n }, scale: { configurable: true, enumerable: true, value: s }, modelViewMatrix: { value: new at() }, normalMatrix: { value: new Ue() } }), this.matrix = new at(), this.matrixWorld = new at(), this.matrixAutoUpdate = bt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new Po(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, true);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Zn.setFromAxisAngle(e, t), this.quaternion.multiply(Zn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Zn.setFromAxisAngle(e, t), this.quaternion.premultiply(Zn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Aa, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(wa, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Ra, e);
  }
  translateOnAxis(e, t) {
    return Ta.copy(e).applyQuaternion(this.quaternion), this.position.add(Ta.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Aa, e);
  }
  translateY(e) {
    return this.translateOnAxis(wa, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Ra, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(Qt.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Hi.copy(e) : Hi.set(e, t, n);
    const s = this.parent;
    this.updateWorldMatrix(true, false), vi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Qt.lookAt(vi, Hi, this.up) : Qt.lookAt(Hi, vi, this.up), this.quaternion.setFromRotationMatrix(Qt), s && (Qt.extractRotation(s.matrixWorld), Zn.setFromRotationMatrix(Qt), this.quaternion.premultiply(Zn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this ? (lt("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Ca), jn.child = e, this.dispatchEvent(jn), jn.child = null) : lt("Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(al), Fs.child = e, this.dispatchEvent(Fs), Fs.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(true, false), Qt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(true, false), Qt.multiply(e.parent.matrixWorld)), e.applyMatrix4(Qt), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(false, true), e.dispatchEvent(Ca), jn.child = e, this.dispatchEvent(jn), jn.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, s = this.children.length; n < s; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const s = this.children;
    for (let r = 0, a = s.length; r < a; r++) s[r].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(true, false), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(vi, e, sl), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(vi, rl, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(true, false);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, s = t.length; n < s; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === false) return;
    e(this);
    const t = this.children;
    for (let n = 0, s = t.length; n < s; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, e = true);
    const t = this.children;
    for (let n = 0, s = t.length; n < s; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === true && n !== null && n.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === true) {
      const s = this.children;
      for (let r = 0, a = s.length; r < a; r++) s[r].updateWorldMatrix(false, true);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.7, type: "Object", generator: "Object3D.toJSON" });
    const s = {};
    s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === true && (s.castShadow = true), this.receiveShadow === true && (s.receiveShadow = true), this.visible === false && (s.visible = false), this.frustumCulled === false && (s.frustumCulled = false), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), this.matrixAutoUpdate === false && (s.matrixAutoUpdate = false), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s.type = "BatchedMesh", s.perObjectFrustumCulled = this.perObjectFrustumCulled, s.sortObjects = this.sortObjects, s.drawRanges = this._drawRanges, s.reservedRanges = this._reservedRanges, s.geometryInfo = this._geometryInfo.map((o) => ({ ...o, boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0, boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0 })), s.instanceInfo = this._instanceInfo.map((o) => ({ ...o })), s.availableInstanceIds = this._availableInstanceIds.slice(), s.availableGeometryIds = this._availableGeometryIds.slice(), s.nextIndexStart = this._nextIndexStart, s.nextVertexStart = this._nextVertexStart, s.geometryCount = this._geometryCount, s.maxInstanceCount = this._maxInstanceCount, s.maxVertexCount = this._maxVertexCount, s.maxIndexCount = this._maxIndexCount, s.geometryInitialized = this._geometryInitialized, s.matricesTexture = this._matricesTexture.toJSON(e), s.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (s.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (s.boundingBox = this.boundingBox.toJSON()));
    function r(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (s.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      s.geometry = r(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l)) for (let c = 0, u = l.length; c < u; c++) {
          const d = l[c];
          r(e.shapes, d);
        }
        else r(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const o = [];
      for (let l = 0, c = this.material.length; l < c; l++) o.push(r(e.materials, this.material[l]));
      s.material = o;
    } else s.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      s.children = [];
      for (let o = 0; o < this.children.length; o++) s.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      s.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        s.animations.push(r(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries), l = a(e.materials), c = a(e.textures), u = a(e.images), d = a(e.shapes), f = a(e.skeletons), m = a(e.animations), _ = a(e.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), u.length > 0 && (n.images = u), d.length > 0 && (n.shapes = d), f.length > 0 && (n.skeletons = f), m.length > 0 && (n.animations = m), _.length > 0 && (n.nodes = _);
    }
    return n.object = s, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const u = o[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = true) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === true) for (let n = 0; n < e.children.length; n++) {
      const s = e.children[n];
      this.add(s.clone());
    }
    return this;
  }
}
bt.DEFAULT_UP = new I(0, 1, 0);
bt.DEFAULT_MATRIX_AUTO_UPDATE = true;
bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const Ht = new I(), en = new I(), Os = new I(), tn = new I(), $n = new I(), Jn = new I(), Pa = new I(), Bs = new I(), zs = new I(), Vs = new I(), Gs = new ht(), ks = new ht(), Hs = new ht();
class Wt {
  constructor(e = new I(), t = new I(), n = new I()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, s) {
    s.subVectors(n, t), Ht.subVectors(e, t), s.cross(Ht);
    const r = s.lengthSq();
    return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, s, r) {
    Ht.subVectors(s, t), en.subVectors(n, t), Os.subVectors(e, t);
    const a = Ht.dot(Ht), o = Ht.dot(en), l = Ht.dot(Os), c = en.dot(en), u = en.dot(Os), d = a * c - o * o;
    if (d === 0) return r.set(0, 0, 0), null;
    const f = 1 / d, m = (c * l - o * u) * f, _ = (a * u - o * l) * f;
    return r.set(1 - m - _, _, m);
  }
  static containsPoint(e, t, n, s) {
    return this.getBarycoord(e, t, n, s, tn) === null ? false : tn.x >= 0 && tn.y >= 0 && tn.x + tn.y <= 1;
  }
  static getInterpolation(e, t, n, s, r, a, o, l) {
    return this.getBarycoord(e, t, n, s, tn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, tn.x), l.addScaledVector(a, tn.y), l.addScaledVector(o, tn.z), l);
  }
  static getInterpolatedAttribute(e, t, n, s, r, a) {
    return Gs.setScalar(0), ks.setScalar(0), Hs.setScalar(0), Gs.fromBufferAttribute(e, t), ks.fromBufferAttribute(e, n), Hs.fromBufferAttribute(e, s), a.setScalar(0), a.addScaledVector(Gs, r.x), a.addScaledVector(ks, r.y), a.addScaledVector(Hs, r.z), a;
  }
  static isFrontFacing(e, t, n, s) {
    return Ht.subVectors(n, t), en.subVectors(e, t), Ht.cross(en).dot(s) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, s) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[s]), this;
  }
  setFromAttributeAndIndices(e, t, n, s) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, s), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Ht.subVectors(this.c, this.b), en.subVectors(this.a, this.b), Ht.cross(en).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Wt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Wt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, s, r) {
    return Wt.getInterpolation(e, this.a, this.b, this.c, t, n, s, r);
  }
  containsPoint(e) {
    return Wt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Wt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, s = this.b, r = this.c;
    let a, o;
    $n.subVectors(s, n), Jn.subVectors(r, n), Bs.subVectors(e, n);
    const l = $n.dot(Bs), c = Jn.dot(Bs);
    if (l <= 0 && c <= 0) return t.copy(n);
    zs.subVectors(e, s);
    const u = $n.dot(zs), d = Jn.dot(zs);
    if (u >= 0 && d <= u) return t.copy(s);
    const f = l * d - u * c;
    if (f <= 0 && l >= 0 && u <= 0) return a = l / (l - u), t.copy(n).addScaledVector($n, a);
    Vs.subVectors(e, r);
    const m = $n.dot(Vs), _ = Jn.dot(Vs);
    if (_ >= 0 && m <= _) return t.copy(r);
    const g = m * c - l * _;
    if (g <= 0 && c >= 0 && _ <= 0) return o = c / (c - _), t.copy(n).addScaledVector(Jn, o);
    const p = u * _ - m * d;
    if (p <= 0 && d - u >= 0 && m - _ >= 0) return Pa.subVectors(r, s), o = (d - u) / (d - u + (m - _)), t.copy(s).addScaledVector(Pa, o);
    const h = 1 / (p + g + f);
    return a = g * h, o = f * h, t.copy(n).addScaledVector($n, a).addScaledVector(Jn, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Do = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, gn = { h: 0, s: 0, l: 0 }, Wi = { h: 0, s: 0, l: 0 };
function Ws(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class He {
  constructor(e, t, n) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const s = e;
      s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Ut) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Xe.colorSpaceToWorking(this, t), this;
  }
  setRGB(e, t, n, s = Xe.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Xe.colorSpaceToWorking(this, s), this;
  }
  setHSL(e, t, n, s = Xe.workingColorSpace) {
    if (e = qc(e, 1), t = Oe(t, 0, 1), n = Oe(n, 0, 1), t === 0) this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - r;
      this.r = Ws(a, r, e + 1 / 3), this.g = Ws(a, r, e), this.b = Ws(a, r, e - 1 / 3);
    }
    return Xe.colorSpaceToWorking(this, s), this;
  }
  setStyle(e, t = Ut) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && Ce("Color: Alpha component of " + e + " will be ignored.");
    }
    let s;
    if (s = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let r;
      const a = s[1], o = s[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, t);
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, t);
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, t);
          break;
        default:
          Ce("Color: Unknown color model " + e);
      }
    } else if (s = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = s[1], a = r.length;
      if (a === 3) return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, t);
      if (a === 6) return this.setHex(parseInt(r, 16), t);
      Ce("Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Ut) {
    const n = Do[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : Ce("Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = hn(e.r), this.g = hn(e.g), this.b = hn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = ai(e.r), this.g = ai(e.g), this.b = ai(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Ut) {
    return Xe.workingToColorSpace(gt.copy(this), e), Math.round(Oe(gt.r * 255, 0, 255)) * 65536 + Math.round(Oe(gt.g * 255, 0, 255)) * 256 + Math.round(Oe(gt.b * 255, 0, 255));
  }
  getHexString(e = Ut) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Xe.workingColorSpace) {
    Xe.workingToColorSpace(gt.copy(this), t);
    const n = gt.r, s = gt.g, r = gt.b, a = Math.max(n, s, r), o = Math.min(n, s, r);
    let l, c;
    const u = (o + a) / 2;
    if (o === a) l = 0, c = 0;
    else {
      const d = a - o;
      switch (c = u <= 0.5 ? d / (a + o) : d / (2 - a - o), a) {
        case n:
          l = (s - r) / d + (s < r ? 6 : 0);
          break;
        case s:
          l = (r - n) / d + 2;
          break;
        case r:
          l = (n - s) / d + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = u, e;
  }
  getRGB(e, t = Xe.workingColorSpace) {
    return Xe.workingToColorSpace(gt.copy(this), t), e.r = gt.r, e.g = gt.g, e.b = gt.b, e;
  }
  getStyle(e = Ut) {
    Xe.workingToColorSpace(gt.copy(this), e);
    const t = gt.r, n = gt.g, s = gt.b;
    return e !== Ut ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(s * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(gn), this.setHSL(gn.h + e, gn.s + t, gn.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(gn), e.getHSL(Wi);
    const n = As(gn.h, Wi.h, t), s = As(gn.s, Wi.s, t), r = As(gn.l, Wi.l, t);
    return this.setHSL(n, s, r), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, s = this.b, r = e.elements;
    return this.r = r[0] * t + r[3] * n + r[6] * s, this.g = r[1] * t + r[4] * n + r[7] * s, this.b = r[2] * t + r[5] * n + r[8] * s, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const gt = new He();
He.NAMES = Do;
let ol = 0;
class fi extends Gn {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: ol++ }), this.uuid = Pi(), this.name = "", this.type = "Material", this.blending = ri, this.side = yn, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = ir, this.blendDst = sr, this.blendEquation = Nn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new He(0, 0, 0), this.blendAlpha = 0, this.depthFunc = oi, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = ma, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Hn, this.stencilZFail = Hn, this.stencilZPass = Hn, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.allowOverride = true, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0) for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        Ce(`Material: parameter '${t}' has value of undefined.`);
        continue;
      }
      const s = this[t];
      if (s === void 0) {
        Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);
        continue;
      }
      s && s.isColor ? s.set(n) : s && s.isVector3 && n && n.isVector3 ? s.copy(n) : this[t] = n;
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = { metadata: { version: 4.7, type: "Material", generator: "Material.toJSON" } };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== ri && (n.blending = this.blending), this.side !== yn && (n.side = this.side), this.vertexColors === true && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = true), this.blendSrc !== ir && (n.blendSrc = this.blendSrc), this.blendDst !== sr && (n.blendDst = this.blendDst), this.blendEquation !== Nn && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== oi && (n.depthFunc = this.depthFunc), this.depthTest === false && (n.depthTest = this.depthTest), this.depthWrite === false && (n.depthWrite = this.depthWrite), this.colorWrite === false && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== ma && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Hn && (n.stencilFail = this.stencilFail), this.stencilZFail !== Hn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Hn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === true && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === true && (n.alphaHash = true), this.alphaToCoverage === true && (n.alphaToCoverage = true), this.premultipliedAlpha === true && (n.premultipliedAlpha = true), this.forceSinglePass === true && (n.forceSinglePass = true), this.wireframe === true && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = true), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function s(r) {
      const a = [];
      for (const o in r) {
        const l = r[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const r = s(e.textures), a = s(e.images);
      r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const s = t.length;
      n = new Array(s);
      for (let r = 0; r !== s; ++r) n[r] = t[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
}
class Lo extends fi {
  constructor(e) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new He(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new dn(), this.combine = go, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const ut = new I(), Xi = new Ne();
let cl = 0;
class Yt {
  constructor(e, t, n = false) {
    if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, Object.defineProperty(this, "id", { value: cl++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = xa, this.updateRanges = [], this.gpuType = cn, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let s = 0, r = this.itemSize; s < r; s++) this.array[e + s] = t.array[n + s];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) Xi.fromBufferAttribute(this, t), Xi.applyMatrix3(e), this.setXY(t, Xi.x, Xi.y);
    else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) ut.fromBufferAttribute(this, t), ut.applyMatrix3(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++) ut.fromBufferAttribute(this, t), ut.applyMatrix4(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) ut.fromBufferAttribute(this, t), ut.applyNormalMatrix(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) ut.fromBufferAttribute(this, t), ut.transformDirection(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = xi(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Tt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = xi(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Tt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = xi(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Tt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = xi(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Tt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = xi(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Tt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Tt(t, this.array), n = Tt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, s) {
    return e *= this.itemSize, this.normalized && (t = Tt(t, this.array), n = Tt(n, this.array), s = Tt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = s, this;
  }
  setXYZW(e, t, n, s, r) {
    return e *= this.itemSize, this.normalized && (t = Tt(t, this.array), n = Tt(n, this.array), s = Tt(s, this.array), r = Tt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = s, this.array[e + 3] = r, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (e.name = this.name), this.usage !== xa && (e.usage = this.usage), e;
  }
}
class Uo extends Yt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Io extends Yt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Nt extends Yt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let ll = 0;
const Ot = new at(), Xs = new bt(), Qn = new I(), Lt = new Di(), Mi = new Di(), mt = new I();
class Rt extends Gn {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: ll++ }), this.uuid = Pi(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Ro(e) ? Io : Uo)(e, 1) : this.index = e, this;
  }
  setIndirect(e) {
    return this.indirect = e, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = true);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new Ue().getNormalMatrix(e);
      n.applyNormalMatrix(r), n.needsUpdate = true;
    }
    const s = this.attributes.tangent;
    return s !== void 0 && (s.transformDirection(e), s.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Ot.makeRotationFromQuaternion(e), this.applyMatrix4(Ot), this;
  }
  rotateX(e) {
    return Ot.makeRotationX(e), this.applyMatrix4(Ot), this;
  }
  rotateY(e) {
    return Ot.makeRotationY(e), this.applyMatrix4(Ot), this;
  }
  rotateZ(e) {
    return Ot.makeRotationZ(e), this.applyMatrix4(Ot), this;
  }
  translate(e, t, n) {
    return Ot.makeTranslation(e, t, n), this.applyMatrix4(Ot), this;
  }
  scale(e, t, n) {
    return Ot.makeScale(e, t, n), this.applyMatrix4(Ot), this;
  }
  lookAt(e) {
    return Xs.lookAt(e), Xs.updateMatrix(), this.applyMatrix4(Xs.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Qn).negate(), this.translate(Qn.x, Qn.y, Qn.z), this;
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let s = 0, r = e.length; s < r; s++) {
        const a = e[s];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new Nt(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let s = 0; s < n; s++) {
        const r = e[s];
        t.setXYZ(s, r.x, r.y, r.z || 0);
      }
      e.length > t.count && Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Di());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new I(-1 / 0, -1 / 0, -1 / 0), new I(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t) for (let n = 0, s = t.length; n < s; n++) {
        const r = t[n];
        Lt.setFromBufferAttribute(r), this.morphTargetsRelative ? (mt.addVectors(this.boundingBox.min, Lt.min), this.boundingBox.expandByPoint(mt), mt.addVectors(this.boundingBox.max, Lt.max), this.boundingBox.expandByPoint(mt)) : (this.boundingBox.expandByPoint(Lt.min), this.boundingBox.expandByPoint(Lt.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Li());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new I(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Lt.setFromBufferAttribute(e), t) for (let r = 0, a = t.length; r < a; r++) {
        const o = t[r];
        Mi.setFromBufferAttribute(o), this.morphTargetsRelative ? (mt.addVectors(Lt.min, Mi.min), Lt.expandByPoint(mt), mt.addVectors(Lt.max, Mi.max), Lt.expandByPoint(mt)) : (Lt.expandByPoint(Mi.min), Lt.expandByPoint(Mi.max));
      }
      Lt.getCenter(n);
      let s = 0;
      for (let r = 0, a = e.count; r < a; r++) mt.fromBufferAttribute(e, r), s = Math.max(s, n.distanceToSquared(mt));
      if (t) for (let r = 0, a = t.length; r < a; r++) {
        const o = t[r], l = this.morphTargetsRelative;
        for (let c = 0, u = o.count; c < u; c++) mt.fromBufferAttribute(o, c), l && (Qn.fromBufferAttribute(e, c), mt.add(Qn)), s = Math.max(s, n.distanceToSquared(mt));
      }
      this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, s = t.normal, r = t.uv;
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new Yt(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let B = 0; B < n.count; B++) o[B] = new I(), l[B] = new I();
    const c = new I(), u = new I(), d = new I(), f = new Ne(), m = new Ne(), _ = new Ne(), g = new I(), p = new I();
    function h(B, S, M) {
      c.fromBufferAttribute(n, B), u.fromBufferAttribute(n, S), d.fromBufferAttribute(n, M), f.fromBufferAttribute(r, B), m.fromBufferAttribute(r, S), _.fromBufferAttribute(r, M), u.sub(c), d.sub(c), m.sub(f), _.sub(f);
      const P = 1 / (m.x * _.y - _.x * m.y);
      isFinite(P) && (g.copy(u).multiplyScalar(_.y).addScaledVector(d, -m.y).multiplyScalar(P), p.copy(d).multiplyScalar(m.x).addScaledVector(u, -_.x).multiplyScalar(P), o[B].add(g), o[S].add(g), o[M].add(g), l[B].add(p), l[S].add(p), l[M].add(p));
    }
    let T = this.groups;
    T.length === 0 && (T = [{ start: 0, count: e.count }]);
    for (let B = 0, S = T.length; B < S; ++B) {
      const M = T[B], P = M.start, z = M.count;
      for (let G = P, Y = P + z; G < Y; G += 3) h(e.getX(G + 0), e.getX(G + 1), e.getX(G + 2));
    }
    const E = new I(), w = new I(), D = new I(), y = new I();
    function C(B) {
      D.fromBufferAttribute(s, B), y.copy(D);
      const S = o[B];
      E.copy(S), E.sub(D.multiplyScalar(D.dot(S))).normalize(), w.crossVectors(y, S);
      const P = w.dot(l[B]) < 0 ? -1 : 1;
      a.setXYZW(B, E.x, E.y, E.z, P);
    }
    for (let B = 0, S = T.length; B < S; ++B) {
      const M = T[B], P = M.start, z = M.count;
      for (let G = P, Y = P + z; G < Y; G += 3) C(e.getX(G + 0)), C(e.getX(G + 1)), C(e.getX(G + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0) n = new Yt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else for (let f = 0, m = n.count; f < m; f++) n.setXYZ(f, 0, 0, 0);
      const s = new I(), r = new I(), a = new I(), o = new I(), l = new I(), c = new I(), u = new I(), d = new I();
      if (e) for (let f = 0, m = e.count; f < m; f += 3) {
        const _ = e.getX(f + 0), g = e.getX(f + 1), p = e.getX(f + 2);
        s.fromBufferAttribute(t, _), r.fromBufferAttribute(t, g), a.fromBufferAttribute(t, p), u.subVectors(a, r), d.subVectors(s, r), u.cross(d), o.fromBufferAttribute(n, _), l.fromBufferAttribute(n, g), c.fromBufferAttribute(n, p), o.add(u), l.add(u), c.add(u), n.setXYZ(_, o.x, o.y, o.z), n.setXYZ(g, l.x, l.y, l.z), n.setXYZ(p, c.x, c.y, c.z);
      }
      else for (let f = 0, m = t.count; f < m; f += 3) s.fromBufferAttribute(t, f + 0), r.fromBufferAttribute(t, f + 1), a.fromBufferAttribute(t, f + 2), u.subVectors(a, r), d.subVectors(s, r), u.cross(d), n.setXYZ(f + 0, u.x, u.y, u.z), n.setXYZ(f + 1, u.x, u.y, u.z), n.setXYZ(f + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++) mt.fromBufferAttribute(e, t), mt.normalize(), e.setXYZ(t, mt.x, mt.y, mt.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, u = o.itemSize, d = o.normalized, f = new c.constructor(l.length * u);
      let m = 0, _ = 0;
      for (let g = 0, p = l.length; g < p; g++) {
        o.isInterleavedBufferAttribute ? m = l[g] * o.data.stride + o.offset : m = l[g] * u;
        for (let h = 0; h < u; h++) f[_++] = c[m++];
      }
      return new Yt(f, u, d);
    }
    if (this.index === null) return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Rt(), n = this.index.array, s = this.attributes;
    for (const o in s) {
      const l = s[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const l = [], c = r[o];
      for (let u = 0, d = c.length; u < d; u++) {
        const f = c[u], m = e(f, n);
        l.push(m);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = { metadata: { version: 4.7, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const s = {};
    let r = false;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], u = [];
      for (let d = 0, f = c.length; d < f; d++) {
        const m = c[d];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && (s[l] = u, r = true);
    }
    r && (e.data.morphAttributes = s, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = o.toJSON()), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone());
    const s = e.attributes;
    for (const c in s) {
      const u = s[c];
      this.setAttribute(c, u.clone(t));
    }
    const r = e.morphAttributes;
    for (const c in r) {
      const u = [], d = r[c];
      for (let f = 0, m = d.length; f < m; f++) u.push(d[f].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, u = a.length; c < u; c++) {
      const d = a[c];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Da = new at(), Pn = new vs(), qi = new Li(), La = new I(), Yi = new I(), Ki = new I(), Zi = new I(), qs = new I(), ji = new I(), Ua = new I(), $i = new I();
class Tn extends bt {
  constructor(e = new Rt(), t = new Lo()) {
    super(), this.isMesh = true, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const s = t[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = s.length; r < a; r++) {
          const o = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, s = n.attributes.position, r = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(s, e);
    const o = this.morphTargetInfluences;
    if (r && o) {
      ji.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const u = o[l], d = r[l];
        u !== 0 && (qs.fromBufferAttribute(d, e), a ? ji.addScaledVector(qs, u) : ji.addScaledVector(qs.sub(t), u));
      }
      t.add(ji);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, s = this.material, r = this.matrixWorld;
    s !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), qi.copy(n.boundingSphere), qi.applyMatrix4(r), Pn.copy(e.ray).recast(e.near), !(qi.containsPoint(Pn.origin) === false && (Pn.intersectSphere(qi, La) === null || Pn.origin.distanceToSquared(La) > (e.far - e.near) ** 2)) && (Da.copy(r).invert(), Pn.copy(e.ray).applyMatrix4(Da), !(n.boundingBox !== null && Pn.intersectsBox(n.boundingBox) === false) && this._computeIntersections(e, t, Pn)));
  }
  _computeIntersections(e, t, n) {
    let s;
    const r = this.geometry, a = this.material, o = r.index, l = r.attributes.position, c = r.attributes.uv, u = r.attributes.uv1, d = r.attributes.normal, f = r.groups, m = r.drawRange;
    if (o !== null) if (Array.isArray(a)) for (let _ = 0, g = f.length; _ < g; _++) {
      const p = f[_], h = a[p.materialIndex], T = Math.max(p.start, m.start), E = Math.min(o.count, Math.min(p.start + p.count, m.start + m.count));
      for (let w = T, D = E; w < D; w += 3) {
        const y = o.getX(w), C = o.getX(w + 1), B = o.getX(w + 2);
        s = Ji(this, h, e, n, c, u, d, y, C, B), s && (s.faceIndex = Math.floor(w / 3), s.face.materialIndex = p.materialIndex, t.push(s));
      }
    }
    else {
      const _ = Math.max(0, m.start), g = Math.min(o.count, m.start + m.count);
      for (let p = _, h = g; p < h; p += 3) {
        const T = o.getX(p), E = o.getX(p + 1), w = o.getX(p + 2);
        s = Ji(this, a, e, n, c, u, d, T, E, w), s && (s.faceIndex = Math.floor(p / 3), t.push(s));
      }
    }
    else if (l !== void 0) if (Array.isArray(a)) for (let _ = 0, g = f.length; _ < g; _++) {
      const p = f[_], h = a[p.materialIndex], T = Math.max(p.start, m.start), E = Math.min(l.count, Math.min(p.start + p.count, m.start + m.count));
      for (let w = T, D = E; w < D; w += 3) {
        const y = w, C = w + 1, B = w + 2;
        s = Ji(this, h, e, n, c, u, d, y, C, B), s && (s.faceIndex = Math.floor(w / 3), s.face.materialIndex = p.materialIndex, t.push(s));
      }
    }
    else {
      const _ = Math.max(0, m.start), g = Math.min(l.count, m.start + m.count);
      for (let p = _, h = g; p < h; p += 3) {
        const T = p, E = p + 1, w = p + 2;
        s = Ji(this, a, e, n, c, u, d, T, E, w), s && (s.faceIndex = Math.floor(p / 3), t.push(s));
      }
    }
  }
}
function hl(i, e, t, n, s, r, a, o) {
  let l;
  if (e.side === wt ? l = n.intersectTriangle(a, r, s, true, o) : l = n.intersectTriangle(s, r, a, e.side === yn, o), l === null) return null;
  $i.copy(o), $i.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo($i);
  return c < t.near || c > t.far ? null : { distance: c, point: $i.clone(), object: i };
}
function Ji(i, e, t, n, s, r, a, o, l, c) {
  i.getVertexPosition(o, Yi), i.getVertexPosition(l, Ki), i.getVertexPosition(c, Zi);
  const u = hl(i, e, t, n, Yi, Ki, Zi, Ua);
  if (u) {
    const d = new I();
    Wt.getBarycoord(Ua, Yi, Ki, Zi, d), s && (u.uv = Wt.getInterpolatedAttribute(s, o, l, c, d, new Ne())), r && (u.uv1 = Wt.getInterpolatedAttribute(r, o, l, c, d, new Ne())), a && (u.normal = Wt.getInterpolatedAttribute(a, o, l, c, d, new I()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const f = { a: o, b: l, c, normal: new I(), materialIndex: 0 };
    Wt.getNormal(Yi, Ki, Zi, f.normal), u.face = f, u.barycoord = d;
  }
  return u;
}
class Ui extends Rt {
  constructor(e = 1, t = 1, n = 1, s = 1, r = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: n, widthSegments: s, heightSegments: r, depthSegments: a };
    const o = this;
    s = Math.floor(s), r = Math.floor(r), a = Math.floor(a);
    const l = [], c = [], u = [], d = [];
    let f = 0, m = 0;
    _("z", "y", "x", -1, -1, n, t, e, a, r, 0), _("z", "y", "x", 1, -1, n, t, -e, a, r, 1), _("x", "z", "y", 1, 1, e, n, t, s, a, 2), _("x", "z", "y", 1, -1, e, n, -t, s, a, 3), _("x", "y", "z", 1, -1, e, t, n, s, r, 4), _("x", "y", "z", -1, -1, e, t, -n, s, r, 5), this.setIndex(l), this.setAttribute("position", new Nt(c, 3)), this.setAttribute("normal", new Nt(u, 3)), this.setAttribute("uv", new Nt(d, 2));
    function _(g, p, h, T, E, w, D, y, C, B, S) {
      const M = w / C, P = D / B, z = w / 2, G = D / 2, Y = y / 2, W = C + 1, K = B + 1;
      let J = 0, k = 0;
      const ne = new I();
      for (let re = 0; re < K; re++) {
        const Se = re * P - G;
        for (let ke = 0; ke < W; ke++) {
          const qe = ke * M - z;
          ne[g] = qe * T, ne[p] = Se * E, ne[h] = Y, c.push(ne.x, ne.y, ne.z), ne[g] = 0, ne[p] = 0, ne[h] = y > 0 ? 1 : -1, u.push(ne.x, ne.y, ne.z), d.push(ke / C), d.push(1 - re / B), J += 1;
        }
      }
      for (let re = 0; re < B; re++) for (let Se = 0; Se < C; Se++) {
        const ke = f + Se + W * re, qe = f + Se + W * (re + 1), Je = f + (Se + 1) + W * (re + 1), Qe = f + (Se + 1) + W * re;
        l.push(ke, qe, Qe), l.push(qe, Je, Qe), k += 6;
      }
      o.addGroup(m, k, S), m += k, f += J;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ui(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function ui(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const s = i[t][n];
      s && (s.isColor || s.isMatrix3 || s.isMatrix4 || s.isVector2 || s.isVector3 || s.isVector4 || s.isTexture || s.isQuaternion) ? s.isRenderTargetTexture ? (Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = s.clone() : Array.isArray(s) ? e[t][n] = s.slice() : e[t][n] = s;
    }
  }
  return e;
}
function Mt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = ui(i[t]);
    for (const s in n) e[s] = n[s];
  }
  return e;
}
function ul(i) {
  const e = [];
  for (let t = 0; t < i.length; t++) e.push(i[t].clone());
  return e;
}
function No(i) {
  const e = i.getRenderTarget();
  return e === null ? i.outputColorSpace : e.isXRRenderTarget === true ? e.texture.colorSpace : Xe.workingColorSpace;
}
const dl = { clone: ui, merge: Mt };
var fl = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, pl = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class fn extends fi {
  constructor(e) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = fl, this.fragmentShader = pl, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = ui(e.uniforms), this.uniformsGroups = ul(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const s in this.uniforms) {
      const a = this.uniforms[s].value;
      a && a.isTexture ? t.uniforms[s] = { type: "t", value: a.toJSON(e).uuid } : a && a.isColor ? t.uniforms[s] = { type: "c", value: a.getHex() } : a && a.isVector2 ? t.uniforms[s] = { type: "v2", value: a.toArray() } : a && a.isVector3 ? t.uniforms[s] = { type: "v3", value: a.toArray() } : a && a.isVector4 ? t.uniforms[s] = { type: "v4", value: a.toArray() } : a && a.isMatrix3 ? t.uniforms[s] = { type: "m3", value: a.toArray() } : a && a.isMatrix4 ? t.uniforms[s] = { type: "m4", value: a.toArray() } : t.uniforms[s] = { value: a };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const s in this.extensions) this.extensions[s] === true && (n[s] = true);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Fo extends bt {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new at(), this.projectionMatrix = new at(), this.projectionMatrixInverse = new at(), this.coordinateSystem = jt, this._reversedDepth = false;
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const vn = new I(), Ia = new Ne(), Na = new Ne();
class Bt extends Fo {
  constructor(e = 50, t = 1, n = 0.1, s = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = s, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Wr * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(us * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Wr * 2 * Math.atan(Math.tan(us * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    vn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(vn.x, vn.y).multiplyScalar(-e / vn.z), vn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(vn.x, vn.y).multiplyScalar(-e / vn.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, Ia, Na), t.subVectors(Na, Ia);
  }
  setViewOffset(e, t, n, s, r, a) {
    this.aspect = e / t, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = s, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(us * 0.5 * this.fov) / this.zoom, n = 2 * t, s = this.aspect * n, r = -0.5 * s;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      r += a.offsetX * s / l, t -= a.offsetY * n / c, s *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (r += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + s, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const ei = -90, ti = 1;
class ml extends bt {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const s = new Bt(ei, ti, e, t);
    s.layers = this.layers, this.add(s);
    const r = new Bt(ei, ti, e, t);
    r.layers = this.layers, this.add(r);
    const a = new Bt(ei, ti, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Bt(ei, ti, e, t);
    o.layers = this.layers, this.add(o);
    const l = new Bt(ei, ti, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Bt(ei, ti, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, s, r, a, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === jt) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === ps) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), s.up.set(0, -1, 0), s.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t) this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: s } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [r, a, o, l, c, u] = this.children, d = e.getRenderTarget(), f = e.getActiveCubeFace(), m = e.getActiveMipmapLevel(), _ = e.xr.enabled;
    e.xr.enabled = false;
    const g = n.texture.generateMipmaps;
    n.texture.generateMipmaps = false, e.setRenderTarget(n, 0, s), e.render(t, r), e.setRenderTarget(n, 1, s), e.render(t, a), e.setRenderTarget(n, 2, s), e.render(t, o), e.setRenderTarget(n, 3, s), e.render(t, l), e.setRenderTarget(n, 4, s), e.render(t, c), n.texture.generateMipmaps = g, e.setRenderTarget(n, 5, s), e.render(t, u), e.setRenderTarget(d, f, m), e.xr.enabled = _, n.texture.needsPMREMUpdate = true;
  }
}
class Oo extends St {
  constructor(e = [], t = ci, n, s, r, a, o, l, c, u) {
    super(e, t, n, s, r, a, o, l, c, u), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class xl extends Vn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = true;
    const n = { width: e, height: e, depth: 1 }, s = [n, n, n, n, n, n];
    this.texture = new Oo(s), this._setTextureOptions(t), this.texture.isRenderTargetTexture = true;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` }, s = new Ui(5, 5, 5), r = new fn({ name: "CubemapFromEquirect", uniforms: ui(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: wt, blending: ln });
    r.uniforms.tEquirect.value = t;
    const a = new Tn(s, r), o = t.minFilter;
    return t.minFilter === On && (t.minFilter = zt), new ml(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t = true, n = true, s = true) {
    const r = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, s);
    e.setRenderTarget(r);
  }
}
class Bn extends bt {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
const _l = { type: "move" };
class Ys {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Bn(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Bn(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new I(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new I()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Bn(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new I(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new I()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
  }
  update(e, t, n) {
    let s = null, r = null, a = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = true;
        for (const g of e.hand.values()) {
          const p = t.getJointPose(g, n), h = this._getHandJoint(c, g);
          p !== null && (h.matrix.fromArray(p.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.matrixWorldNeedsUpdate = true, h.jointRadius = p.radius), h.visible = p !== null;
        }
        const u = c.joints["index-finger-tip"], d = c.joints["thumb-tip"], f = u.position.distanceTo(d.position), m = 0.02, _ = 5e-3;
        c.inputState.pinching && f > m + _ ? (c.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !c.inputState.pinching && f <= m - _ && (c.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this }));
      } else l !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = true, r.linearVelocity ? (l.hasLinearVelocity = true, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = false, r.angularVelocity ? (l.hasAngularVelocity = true, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = false));
      o !== null && (s = t.getPose(e.targetRaySpace, n), s === null && r !== null && (s = r), s !== null && (o.matrix.fromArray(s.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = true, s.linearVelocity ? (o.hasLinearVelocity = true, o.linearVelocity.copy(s.linearVelocity)) : o.hasLinearVelocity = false, s.angularVelocity ? (o.hasAngularVelocity = true, o.angularVelocity.copy(s.angularVelocity)) : o.hasAngularVelocity = false, this.dispatchEvent(_l)));
    }
    return o !== null && (o.visible = s !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = a !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Bn();
      n.matrixAutoUpdate = false, n.visible = false, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class gl extends bt {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new dn(), this.environmentIntensity = 1, this.environmentRotation = new dn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class vl extends St {
  constructor(e = null, t = 1, n = 1, s, r, a, o, l, c = It, u = It, d, f) {
    super(null, a, o, l, c, u, s, r, d, f), this.isDataTexture = true, this.image = { data: e, width: t, height: n }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
const Ks = new I(), Ml = new I(), Sl = new Ue();
class Mn {
  constructor(e = new I(1, 0, 0), t = 0) {
    this.isPlane = true, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, s) {
    return this.normal.set(e, t, n), this.constant = s, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const s = Ks.subVectors(n, t).cross(Ml.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(s, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Ks), s = this.normal.dot(n);
    if (s === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / s;
    return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Sl.getNormalMatrix(e), s = this.coplanarPoint(Ks).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -s.dot(r), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Dn = new Li(), bl = new Ne(0.5, 0.5), Qi = new I();
class Bo {
  constructor(e = new Mn(), t = new Mn(), n = new Mn(), s = new Mn(), r = new Mn(), a = new Mn()) {
    this.planes = [e, t, n, s, r, a];
  }
  set(e, t, n, s, r, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(s), o[4].copy(r), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = jt, n = false) {
    const s = this.planes, r = e.elements, a = r[0], o = r[1], l = r[2], c = r[3], u = r[4], d = r[5], f = r[6], m = r[7], _ = r[8], g = r[9], p = r[10], h = r[11], T = r[12], E = r[13], w = r[14], D = r[15];
    if (s[0].setComponents(c - a, m - u, h - _, D - T).normalize(), s[1].setComponents(c + a, m + u, h + _, D + T).normalize(), s[2].setComponents(c + o, m + d, h + g, D + E).normalize(), s[3].setComponents(c - o, m - d, h - g, D - E).normalize(), n) s[4].setComponents(l, f, p, w).normalize(), s[5].setComponents(c - l, m - f, h - p, D - w).normalize();
    else if (s[4].setComponents(c - l, m - f, h - p, D - w).normalize(), t === jt) s[5].setComponents(c + l, m + f, h + p, D + w).normalize();
    else if (t === ps) s[5].setComponents(l, f, p, w).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), Dn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Dn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Dn);
  }
  intersectsSprite(e) {
    Dn.center.set(0, 0, 0);
    const t = bl.distanceTo(e.center);
    return Dn.radius = 0.7071067811865476 + t, Dn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Dn);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, s = -e.radius;
    for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(n) < s) return false;
    return true;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const s = t[n];
      if (Qi.x = s.normal.x > 0 ? e.max.x : e.min.x, Qi.y = s.normal.y > 0 ? e.max.y : e.min.y, Qi.z = s.normal.z > 0 ? e.max.z : e.min.z, s.distanceToPoint(Qi) < 0) return false;
    }
    return true;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return false;
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Xr extends fi {
  constructor(e) {
    super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new He(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const xs = new I(), _s = new I(), Fa = new at(), Si = new vs(), es = new Li(), Zs = new I(), Oa = new I();
class zo extends bt {
  constructor(e = new Rt(), t = new Xr()) {
    super(), this.isLine = true, this.type = "Line", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let s = 1, r = t.count; s < r; s++) xs.fromBufferAttribute(t, s - 1), _s.fromBufferAttribute(t, s), n[s] = n[s - 1], n[s] += xs.distanceTo(_s);
      e.setAttribute("lineDistance", new Nt(n, 1));
    } else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, s = this.matrixWorld, r = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), es.copy(n.boundingSphere), es.applyMatrix4(s), es.radius += r, e.ray.intersectsSphere(es) === false) return;
    Fa.copy(s).invert(), Si.copy(e.ray).applyMatrix4(Fa);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, u = n.index, f = n.attributes.position;
    if (u !== null) {
      const m = Math.max(0, a.start), _ = Math.min(u.count, a.start + a.count);
      for (let g = m, p = _ - 1; g < p; g += c) {
        const h = u.getX(g), T = u.getX(g + 1), E = ts(this, e, Si, l, h, T, g);
        E && t.push(E);
      }
      if (this.isLineLoop) {
        const g = u.getX(_ - 1), p = u.getX(m), h = ts(this, e, Si, l, g, p, _ - 1);
        h && t.push(h);
      }
    } else {
      const m = Math.max(0, a.start), _ = Math.min(f.count, a.start + a.count);
      for (let g = m, p = _ - 1; g < p; g += c) {
        const h = ts(this, e, Si, l, g, g + 1, g);
        h && t.push(h);
      }
      if (this.isLineLoop) {
        const g = ts(this, e, Si, l, _ - 1, m, _ - 1);
        g && t.push(g);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const s = t[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = s.length; r < a; r++) {
          const o = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function ts(i, e, t, n, s, r, a) {
  const o = i.geometry.attributes.position;
  if (xs.fromBufferAttribute(o, s), _s.fromBufferAttribute(o, r), t.distanceSqToSegment(xs, _s, Zs, Oa) > n) return;
  Zs.applyMatrix4(i.matrixWorld);
  const c = e.ray.origin.distanceTo(Zs);
  if (!(c < e.near || c > e.far)) return { distance: c, point: Oa.clone().applyMatrix4(i.matrixWorld), index: a, face: null, faceIndex: null, barycoord: null, object: i };
}
const Ba = new I(), za = new I();
class El extends zo {
  constructor(e, t) {
    super(e, t), this.isLineSegments = true, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let s = 0, r = t.count; s < r; s += 2) Ba.fromBufferAttribute(t, s), za.fromBufferAttribute(t, s + 1), n[s] = s === 0 ? 0 : n[s - 1], n[s + 1] = n[s] + Ba.distanceTo(za);
      e.setAttribute("lineDistance", new Nt(n, 1));
    } else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class yl extends zo {
  constructor(e, t) {
    super(e, t), this.isLineLoop = true, this.type = "LineLoop";
  }
}
class Vo extends fi {
  constructor(e) {
    super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new He(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const Va = new at(), qr = new vs(), ns = new Li(), is = new I();
class Tl extends bt {
  constructor(e = new Rt(), t = new Vo()) {
    super(), this.isPoints = true, this.type = "Points", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, s = this.matrixWorld, r = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), ns.copy(n.boundingSphere), ns.applyMatrix4(s), ns.radius += r, e.ray.intersectsSphere(ns) === false) return;
    Va.copy(s).invert(), qr.copy(e.ray).applyMatrix4(Va);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = n.index, d = n.attributes.position;
    if (c !== null) {
      const f = Math.max(0, a.start), m = Math.min(c.count, a.start + a.count);
      for (let _ = f, g = m; _ < g; _++) {
        const p = c.getX(_);
        is.fromBufferAttribute(d, p), Ga(is, p, l, s, e, t, this);
      }
    } else {
      const f = Math.max(0, a.start), m = Math.min(d.count, a.start + a.count);
      for (let _ = f, g = m; _ < g; _++) is.fromBufferAttribute(d, _), Ga(is, _, l, s, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const s = t[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = s.length; r < a; r++) {
          const o = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function Ga(i, e, t, n, s, r, a) {
  const o = qr.distanceSqToPoint(i);
  if (o < t) {
    const l = new I();
    qr.closestPointToPoint(i, l), l.applyMatrix4(n);
    const c = s.ray.origin.distanceTo(l);
    if (c < s.near || c > s.far) return;
    r.push({ distance: c, distanceToRay: Math.sqrt(o), point: l, index: e, face: null, faceIndex: null, barycoord: null, object: a });
  }
}
class Go extends St {
  constructor(e, t, n = zn, s, r, a, o = It, l = It, c, u = wi, d = 1) {
    if (u !== wi && u !== Ri) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const f = { width: e, height: t, depth: d };
    super(f, s, r, a, o, l, u, n, c), this.isDepthTexture = true, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new na(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class ko extends St {
  constructor(e = null) {
    super(), this.sourceTexture = e, this.isExternalTexture = true;
  }
  copy(e) {
    return super.copy(e), this.sourceTexture = e.sourceTexture, this;
  }
}
class Ms extends Rt {
  constructor(e = 1, t = 1, n = 1, s = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: n, heightSegments: s };
    const r = e / 2, a = t / 2, o = Math.floor(n), l = Math.floor(s), c = o + 1, u = l + 1, d = e / o, f = t / l, m = [], _ = [], g = [], p = [];
    for (let h = 0; h < u; h++) {
      const T = h * f - a;
      for (let E = 0; E < c; E++) {
        const w = E * d - r;
        _.push(w, -T, 0), g.push(0, 0, 1), p.push(E / o), p.push(1 - h / l);
      }
    }
    for (let h = 0; h < l; h++) for (let T = 0; T < o; T++) {
      const E = T + c * h, w = T + c * (h + 1), D = T + 1 + c * (h + 1), y = T + 1 + c * h;
      m.push(E, w, y), m.push(w, D, y);
    }
    this.setIndex(m), this.setAttribute("position", new Nt(_, 3)), this.setAttribute("normal", new Nt(g, 3)), this.setAttribute("uv", new Nt(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ms(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class ia extends Rt {
  constructor(e = 1, t = 32, n = 16, s = 0, r = Math.PI * 2, a = 0, o = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = { radius: e, widthSegments: t, heightSegments: n, phiStart: s, phiLength: r, thetaStart: a, thetaLength: o }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
    const l = Math.min(a + o, Math.PI);
    let c = 0;
    const u = [], d = new I(), f = new I(), m = [], _ = [], g = [], p = [];
    for (let h = 0; h <= n; h++) {
      const T = [], E = h / n;
      let w = 0;
      h === 0 && a === 0 ? w = 0.5 / t : h === n && l === Math.PI && (w = -0.5 / t);
      for (let D = 0; D <= t; D++) {
        const y = D / t;
        d.x = -e * Math.cos(s + y * r) * Math.sin(a + E * o), d.y = e * Math.cos(a + E * o), d.z = e * Math.sin(s + y * r) * Math.sin(a + E * o), _.push(d.x, d.y, d.z), f.copy(d).normalize(), g.push(f.x, f.y, f.z), p.push(y + w, 1 - E), T.push(c++);
      }
      u.push(T);
    }
    for (let h = 0; h < n; h++) for (let T = 0; T < t; T++) {
      const E = u[h][T + 1], w = u[h][T], D = u[h + 1][T], y = u[h + 1][T + 1];
      (h !== 0 || a > 0) && m.push(E, w, y), (h !== n - 1 || l < Math.PI) && m.push(w, D, y);
    }
    this.setIndex(m), this.setAttribute("position", new Nt(_, 3)), this.setAttribute("normal", new Nt(g, 3)), this.setAttribute("uv", new Nt(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new ia(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
class Al extends Rt {
  constructor(e = null) {
    if (super(), this.type = "WireframeGeometry", this.parameters = { geometry: e }, e !== null) {
      const t = [], n = /* @__PURE__ */ new Set(), s = new I(), r = new I();
      if (e.index !== null) {
        const a = e.attributes.position, o = e.index;
        let l = e.groups;
        l.length === 0 && (l = [{ start: 0, count: o.count, materialIndex: 0 }]);
        for (let c = 0, u = l.length; c < u; ++c) {
          const d = l[c], f = d.start, m = d.count;
          for (let _ = f, g = f + m; _ < g; _ += 3) for (let p = 0; p < 3; p++) {
            const h = o.getX(_ + p), T = o.getX(_ + (p + 1) % 3);
            s.fromBufferAttribute(a, h), r.fromBufferAttribute(a, T), ka(s, r, n) === true && (t.push(s.x, s.y, s.z), t.push(r.x, r.y, r.z));
          }
        }
      } else {
        const a = e.attributes.position;
        for (let o = 0, l = a.count / 3; o < l; o++) for (let c = 0; c < 3; c++) {
          const u = 3 * o + c, d = 3 * o + (c + 1) % 3;
          s.fromBufferAttribute(a, u), r.fromBufferAttribute(a, d), ka(s, r, n) === true && (t.push(s.x, s.y, s.z), t.push(r.x, r.y, r.z));
        }
      }
      this.setAttribute("position", new Nt(t, 3));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
}
function ka(i, e, t) {
  const n = `${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`, s = `${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;
  return t.has(n) === true || t.has(s) === true ? false : (t.add(n), t.add(s), true);
}
class wl extends fi {
  constructor(e) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = Uc, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Rl extends fi {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
class Cl extends Fo {
  constructor(e = -1, t = 1, n = 1, s = -1, r = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = s, this.near = r, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, s, r, a) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = s, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, s = (this.top + this.bottom) / 2;
    let r = n - e, a = n + e, o = s + t, l = s - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, a = r + c * this.view.width, o -= u * this.view.offsetY, l = o - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, a, o, l, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class Pl extends Bt {
  constructor(e = []) {
    super(), this.isArrayCamera = true, this.isMultiViewCamera = false, this.cameras = e;
  }
}
class Dl {
  constructor(e = true) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = false;
  }
  start() {
    this.startTime = performance.now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = true;
  }
  stop() {
    this.getElapsedTime(), this.running = false, this.autoStart = false;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const t = performance.now();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
class Ha {
  constructor(e = 1, t = 0, n = 0) {
    this.radius = e, this.phi = t, this.theta = n;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  makeSafe() {
    return this.phi = Oe(this.phi, 1e-6, Math.PI - 1e-6), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(Oe(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ll extends Gn {
  constructor(e, t = null) {
    super(), this.object = e, this.domElement = t, this.enabled = true, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect(e) {
    if (e === void 0) {
      Ce("Controls: connect() now requires an element.");
      return;
    }
    this.domElement !== null && this.disconnect(), this.domElement = e;
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
function Wa(i, e, t, n) {
  const s = Ul(n);
  switch (t) {
    case yo:
      return i * e;
    case Ao:
      return i * e / s.components * s.byteLength;
    case Jr:
      return i * e / s.components * s.byteLength;
    case Qr:
      return i * e * 2 / s.components * s.byteLength;
    case ea:
      return i * e * 2 / s.components * s.byteLength;
    case To:
      return i * e * 3 / s.components * s.byteLength;
    case Xt:
      return i * e * 4 / s.components * s.byteLength;
    case ta:
      return i * e * 4 / s.components * s.byteLength;
    case os:
    case cs:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case ls:
    case hs:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case _r:
    case vr:
      return Math.max(i, 16) * Math.max(e, 8) / 4;
    case xr:
    case gr:
      return Math.max(i, 8) * Math.max(e, 8) / 2;
    case Mr:
    case Sr:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case br:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Er:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case yr:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Tr:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Ar:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case wr:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Rr:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Cr:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Pr:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Dr:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Lr:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case Ur:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Ir:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Nr:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case Fr:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case Or:
    case Br:
    case zr:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    case Vr:
    case Gr:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case kr:
    case Hr:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function Ul(i) {
  switch (i) {
    case un:
    case Mo:
      return { byteLength: 1, components: 1 };
    case Ti:
    case So:
    case di:
      return { byteLength: 2, components: 1 };
    case jr:
    case $r:
      return { byteLength: 2, components: 4 };
    case zn:
    case Zr:
    case cn:
      return { byteLength: 4, components: 1 };
    case bo:
    case Eo:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: Kr } }));
typeof window < "u" && (window.__THREE__ ? Ce("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Kr);
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function Ho() {
  let i = null, e = false, t = null, n = null;
  function s(r, a) {
    t(r, a), n = i.requestAnimationFrame(s);
  }
  return { start: function() {
    e !== true && t !== null && (n = i.requestAnimationFrame(s), e = true);
  }, stop: function() {
    i.cancelAnimationFrame(n), e = false;
  }, setAnimationLoop: function(r) {
    t = r;
  }, setContext: function(r) {
    i = r;
  } };
}
function Il(i) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, l) {
    const c = o.array, u = o.usage, d = c.byteLength, f = i.createBuffer();
    i.bindBuffer(l, f), i.bufferData(l, c, u), o.onUploadCallback();
    let m;
    if (c instanceof Float32Array) m = i.FLOAT;
    else if (typeof Float16Array < "u" && c instanceof Float16Array) m = i.HALF_FLOAT;
    else if (c instanceof Uint16Array) o.isFloat16BufferAttribute ? m = i.HALF_FLOAT : m = i.UNSIGNED_SHORT;
    else if (c instanceof Int16Array) m = i.SHORT;
    else if (c instanceof Uint32Array) m = i.UNSIGNED_INT;
    else if (c instanceof Int32Array) m = i.INT;
    else if (c instanceof Int8Array) m = i.BYTE;
    else if (c instanceof Uint8Array) m = i.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) m = i.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return { buffer: f, type: m, bytesPerElement: c.BYTES_PER_ELEMENT, version: o.version, size: d };
  }
  function n(o, l, c) {
    const u = l.array, d = l.updateRanges;
    if (i.bindBuffer(c, o), d.length === 0) i.bufferSubData(c, 0, u);
    else {
      d.sort((m, _) => m.start - _.start);
      let f = 0;
      for (let m = 1; m < d.length; m++) {
        const _ = d[f], g = d[m];
        g.start <= _.start + _.count + 1 ? _.count = Math.max(_.count, g.start + g.count - _.start) : (++f, d[f] = g);
      }
      d.length = f + 1;
      for (let m = 0, _ = d.length; m < _; m++) {
        const g = d[m];
        i.bufferSubData(c, g.start * u.BYTES_PER_ELEMENT, u, g.start, g.count);
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function s(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function r(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = e.get(o);
    l && (i.deleteBuffer(l.buffer), e.delete(o));
  }
  function a(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const u = e.get(o);
      (!u || u.version < o.version) && e.set(o, { buffer: o.buffer, type: o.type, bytesPerElement: o.elementSize, version: o.version });
      return;
    }
    const c = e.get(o);
    if (c === void 0) e.set(o, t(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, o, l), c.version = o.version;
    }
  }
  return { get: s, remove: r, update: a };
}
var Nl = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Fl = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Ol = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Bl = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, zl = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Vl = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Gl = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, kl = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Hl = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, Wl = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Xl = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, ql = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Yl = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Kl = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Zl = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, jl = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, $l = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Jl = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Ql = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, eh = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, th = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, nh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, ih = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, sh = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, rh = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, ah = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, oh = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, ch = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, lh = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, hh = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, uh = "gl_FragColor = linearToOutputTexel( gl_FragColor );", dh = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, fh = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, ph = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`, mh = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, xh = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, _h = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, gh = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, vh = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Mh = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Sh = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, bh = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Eh = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, yh = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Th = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Ah = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, wh = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, Rh = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Ch = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Ph = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Dh = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Lh = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, Uh = `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Ih = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Nh = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Fh = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Oh = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Bh = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, zh = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Vh = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Gh = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, kh = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Hh = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Wh = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Xh = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, qh = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Yh = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Kh = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Zh = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, jh = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, $h = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Jh = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Qh = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, eu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, tu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, nu = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, iu = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, su = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, ru = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, au = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, ou = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, cu = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, lu = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, hu = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, uu = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, du = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, fu = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, pu = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, mu = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, xu = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, _u = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, gu = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, vu = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Mu = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Su = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, bu = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Eu = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, yu = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Tu = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Au = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, wu = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Ru = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, Cu = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, Pu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Du = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Lu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Uu = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Iu = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Nu = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Fu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Ou = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Bu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, zu = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Vu = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Gu = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, ku = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Hu = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Wu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Xu = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, qu = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Yu = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Ku = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Zu = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ju = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, $u = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ju = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Qu = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ed = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, td = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, nd = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, id = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, sd = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, rd = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ad = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, od = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, cd = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, ld = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, hd = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, ud = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, dd = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, fd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ie = { alphahash_fragment: Nl, alphahash_pars_fragment: Fl, alphamap_fragment: Ol, alphamap_pars_fragment: Bl, alphatest_fragment: zl, alphatest_pars_fragment: Vl, aomap_fragment: Gl, aomap_pars_fragment: kl, batching_pars_vertex: Hl, batching_vertex: Wl, begin_vertex: Xl, beginnormal_vertex: ql, bsdfs: Yl, iridescence_fragment: Kl, bumpmap_pars_fragment: Zl, clipping_planes_fragment: jl, clipping_planes_pars_fragment: $l, clipping_planes_pars_vertex: Jl, clipping_planes_vertex: Ql, color_fragment: eh, color_pars_fragment: th, color_pars_vertex: nh, color_vertex: ih, common: sh, cube_uv_reflection_fragment: rh, defaultnormal_vertex: ah, displacementmap_pars_vertex: oh, displacementmap_vertex: ch, emissivemap_fragment: lh, emissivemap_pars_fragment: hh, colorspace_fragment: uh, colorspace_pars_fragment: dh, envmap_fragment: fh, envmap_common_pars_fragment: ph, envmap_pars_fragment: mh, envmap_pars_vertex: xh, envmap_physical_pars_fragment: wh, envmap_vertex: _h, fog_vertex: gh, fog_pars_vertex: vh, fog_fragment: Mh, fog_pars_fragment: Sh, gradientmap_pars_fragment: bh, lightmap_pars_fragment: Eh, lights_lambert_fragment: yh, lights_lambert_pars_fragment: Th, lights_pars_begin: Ah, lights_toon_fragment: Rh, lights_toon_pars_fragment: Ch, lights_phong_fragment: Ph, lights_phong_pars_fragment: Dh, lights_physical_fragment: Lh, lights_physical_pars_fragment: Uh, lights_fragment_begin: Ih, lights_fragment_maps: Nh, lights_fragment_end: Fh, logdepthbuf_fragment: Oh, logdepthbuf_pars_fragment: Bh, logdepthbuf_pars_vertex: zh, logdepthbuf_vertex: Vh, map_fragment: Gh, map_pars_fragment: kh, map_particle_fragment: Hh, map_particle_pars_fragment: Wh, metalnessmap_fragment: Xh, metalnessmap_pars_fragment: qh, morphinstance_vertex: Yh, morphcolor_vertex: Kh, morphnormal_vertex: Zh, morphtarget_pars_vertex: jh, morphtarget_vertex: $h, normal_fragment_begin: Jh, normal_fragment_maps: Qh, normal_pars_fragment: eu, normal_pars_vertex: tu, normal_vertex: nu, normalmap_pars_fragment: iu, clearcoat_normal_fragment_begin: su, clearcoat_normal_fragment_maps: ru, clearcoat_pars_fragment: au, iridescence_pars_fragment: ou, opaque_fragment: cu, packing: lu, premultiplied_alpha_fragment: hu, project_vertex: uu, dithering_fragment: du, dithering_pars_fragment: fu, roughnessmap_fragment: pu, roughnessmap_pars_fragment: mu, shadowmap_pars_fragment: xu, shadowmap_pars_vertex: _u, shadowmap_vertex: gu, shadowmask_pars_fragment: vu, skinbase_vertex: Mu, skinning_pars_vertex: Su, skinning_vertex: bu, skinnormal_vertex: Eu, specularmap_fragment: yu, specularmap_pars_fragment: Tu, tonemapping_fragment: Au, tonemapping_pars_fragment: wu, transmission_fragment: Ru, transmission_pars_fragment: Cu, uv_pars_fragment: Pu, uv_pars_vertex: Du, uv_vertex: Lu, worldpos_vertex: Uu, background_vert: Iu, background_frag: Nu, backgroundCube_vert: Fu, backgroundCube_frag: Ou, cube_vert: Bu, cube_frag: zu, depth_vert: Vu, depth_frag: Gu, distanceRGBA_vert: ku, distanceRGBA_frag: Hu, equirect_vert: Wu, equirect_frag: Xu, linedashed_vert: qu, linedashed_frag: Yu, meshbasic_vert: Ku, meshbasic_frag: Zu, meshlambert_vert: ju, meshlambert_frag: $u, meshmatcap_vert: Ju, meshmatcap_frag: Qu, meshnormal_vert: ed, meshnormal_frag: td, meshphong_vert: nd, meshphong_frag: id, meshphysical_vert: sd, meshphysical_frag: rd, meshtoon_vert: ad, meshtoon_frag: od, points_vert: cd, points_frag: ld, shadow_vert: hd, shadow_frag: ud, sprite_vert: dd, sprite_frag: fd }, ae = { common: { diffuse: { value: new He(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Ue() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ue() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Ue() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Ue() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 }, dfgLUT: { value: null } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Ue() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Ue() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Ue() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Ue() }, normalScale: { value: new Ne(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Ue() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Ue() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Ue() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Ue() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new He(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new He(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Ue() }, alphaTest: { value: 0 }, uvTransform: { value: new Ue() } }, sprite: { diffuse: { value: new He(16777215) }, opacity: { value: 1 }, center: { value: new Ne(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Ue() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ue() }, alphaTest: { value: 0 } } }, Zt = { basic: { uniforms: Mt([ae.common, ae.specularmap, ae.envmap, ae.aomap, ae.lightmap, ae.fog]), vertexShader: Ie.meshbasic_vert, fragmentShader: Ie.meshbasic_frag }, lambert: { uniforms: Mt([ae.common, ae.specularmap, ae.envmap, ae.aomap, ae.lightmap, ae.emissivemap, ae.bumpmap, ae.normalmap, ae.displacementmap, ae.fog, ae.lights, { emissive: { value: new He(0) } }]), vertexShader: Ie.meshlambert_vert, fragmentShader: Ie.meshlambert_frag }, phong: { uniforms: Mt([ae.common, ae.specularmap, ae.envmap, ae.aomap, ae.lightmap, ae.emissivemap, ae.bumpmap, ae.normalmap, ae.displacementmap, ae.fog, ae.lights, { emissive: { value: new He(0) }, specular: { value: new He(1118481) }, shininess: { value: 30 } }]), vertexShader: Ie.meshphong_vert, fragmentShader: Ie.meshphong_frag }, standard: { uniforms: Mt([ae.common, ae.envmap, ae.aomap, ae.lightmap, ae.emissivemap, ae.bumpmap, ae.normalmap, ae.displacementmap, ae.roughnessmap, ae.metalnessmap, ae.fog, ae.lights, { emissive: { value: new He(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Ie.meshphysical_vert, fragmentShader: Ie.meshphysical_frag }, toon: { uniforms: Mt([ae.common, ae.aomap, ae.lightmap, ae.emissivemap, ae.bumpmap, ae.normalmap, ae.displacementmap, ae.gradientmap, ae.fog, ae.lights, { emissive: { value: new He(0) } }]), vertexShader: Ie.meshtoon_vert, fragmentShader: Ie.meshtoon_frag }, matcap: { uniforms: Mt([ae.common, ae.bumpmap, ae.normalmap, ae.displacementmap, ae.fog, { matcap: { value: null } }]), vertexShader: Ie.meshmatcap_vert, fragmentShader: Ie.meshmatcap_frag }, points: { uniforms: Mt([ae.points, ae.fog]), vertexShader: Ie.points_vert, fragmentShader: Ie.points_frag }, dashed: { uniforms: Mt([ae.common, ae.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Ie.linedashed_vert, fragmentShader: Ie.linedashed_frag }, depth: { uniforms: Mt([ae.common, ae.displacementmap]), vertexShader: Ie.depth_vert, fragmentShader: Ie.depth_frag }, normal: { uniforms: Mt([ae.common, ae.bumpmap, ae.normalmap, ae.displacementmap, { opacity: { value: 1 } }]), vertexShader: Ie.meshnormal_vert, fragmentShader: Ie.meshnormal_frag }, sprite: { uniforms: Mt([ae.sprite, ae.fog]), vertexShader: Ie.sprite_vert, fragmentShader: Ie.sprite_frag }, background: { uniforms: { uvTransform: { value: new Ue() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Ie.background_vert, fragmentShader: Ie.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Ue() } }, vertexShader: Ie.backgroundCube_vert, fragmentShader: Ie.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Ie.cube_vert, fragmentShader: Ie.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Ie.equirect_vert, fragmentShader: Ie.equirect_frag }, distanceRGBA: { uniforms: Mt([ae.common, ae.displacementmap, { referencePosition: { value: new I() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Ie.distanceRGBA_vert, fragmentShader: Ie.distanceRGBA_frag }, shadow: { uniforms: Mt([ae.lights, ae.fog, { color: { value: new He(0) }, opacity: { value: 1 } }]), vertexShader: Ie.shadow_vert, fragmentShader: Ie.shadow_frag } };
Zt.physical = { uniforms: Mt([Zt.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Ue() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Ue() }, clearcoatNormalScale: { value: new Ne(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Ue() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Ue() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Ue() }, sheen: { value: 0 }, sheenColor: { value: new He(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Ue() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Ue() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Ue() }, transmissionSamplerSize: { value: new Ne() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Ue() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new He(0) }, specularColor: { value: new He(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Ue() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Ue() }, anisotropyVector: { value: new Ne() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Ue() } }]), vertexShader: Ie.meshphysical_vert, fragmentShader: Ie.meshphysical_frag };
const ss = { r: 0, b: 0, g: 0 }, Ln = new dn(), pd = new at();
function md(i, e, t, n, s, r, a) {
  const o = new He(0);
  let l = r === true ? 0 : 1, c, u, d = null, f = 0, m = null;
  function _(E) {
    let w = E.isScene === true ? E.background : null;
    return w && w.isTexture && (w = (E.backgroundBlurriness > 0 ? t : e).get(w)), w;
  }
  function g(E) {
    let w = false;
    const D = _(E);
    D === null ? h(o, l) : D && D.isColor && (h(D, 1), w = true);
    const y = i.xr.getEnvironmentBlendMode();
    y === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : y === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || w) && (n.buffers.depth.setTest(true), n.buffers.depth.setMask(true), n.buffers.color.setMask(true), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function p(E, w) {
    const D = _(w);
    D && (D.isCubeTexture || D.mapping === gs) ? (u === void 0 && (u = new Tn(new Ui(1, 1, 1), new fn({ name: "BackgroundCubeMaterial", uniforms: ui(Zt.backgroundCube.uniforms), vertexShader: Zt.backgroundCube.vertexShader, fragmentShader: Zt.backgroundCube.fragmentShader, side: wt, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(y, C, B) {
      this.matrixWorld.copyPosition(B.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), s.update(u)), Ln.copy(w.backgroundRotation), Ln.x *= -1, Ln.y *= -1, Ln.z *= -1, D.isCubeTexture && D.isRenderTargetTexture === false && (Ln.y *= -1, Ln.z *= -1), u.material.uniforms.envMap.value = D, u.material.uniforms.flipEnvMap.value = D.isCubeTexture && D.isRenderTargetTexture === false ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = w.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = w.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(pd.makeRotationFromEuler(Ln)), u.material.toneMapped = Xe.getTransfer(D.colorSpace) !== Ze, (d !== D || f !== D.version || m !== i.toneMapping) && (u.material.needsUpdate = true, d = D, f = D.version, m = i.toneMapping), u.layers.enableAll(), E.unshift(u, u.geometry, u.material, 0, 0, null)) : D && D.isTexture && (c === void 0 && (c = new Tn(new Ms(2, 2), new fn({ name: "BackgroundMaterial", uniforms: ui(Zt.background.uniforms), vertexShader: Zt.background.vertexShader, fragmentShader: Zt.background.fragmentShader, side: yn, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), s.update(c)), c.material.uniforms.t2D.value = D, c.material.uniforms.backgroundIntensity.value = w.backgroundIntensity, c.material.toneMapped = Xe.getTransfer(D.colorSpace) !== Ze, D.matrixAutoUpdate === true && D.updateMatrix(), c.material.uniforms.uvTransform.value.copy(D.matrix), (d !== D || f !== D.version || m !== i.toneMapping) && (c.material.needsUpdate = true, d = D, f = D.version, m = i.toneMapping), c.layers.enableAll(), E.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function h(E, w) {
    E.getRGB(ss, No(i)), n.buffers.color.setClear(ss.r, ss.g, ss.b, w, a);
  }
  function T() {
    u !== void 0 && (u.geometry.dispose(), u.material.dispose(), u = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return { getClearColor: function() {
    return o;
  }, setClearColor: function(E, w = 1) {
    o.set(E), l = w, h(o, l);
  }, getClearAlpha: function() {
    return l;
  }, setClearAlpha: function(E) {
    l = E, h(o, l);
  }, render: g, addToRenderList: p, dispose: T };
}
function xd(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, s = f(null);
  let r = s, a = false;
  function o(M, P, z, G, Y) {
    let W = false;
    const K = d(G, z, P);
    r !== K && (r = K, c(r.object)), W = m(M, G, z, Y), W && _(M, G, z, Y), Y !== null && e.update(Y, i.ELEMENT_ARRAY_BUFFER), (W || a) && (a = false, w(M, P, z, G), Y !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(Y).buffer));
  }
  function l() {
    return i.createVertexArray();
  }
  function c(M) {
    return i.bindVertexArray(M);
  }
  function u(M) {
    return i.deleteVertexArray(M);
  }
  function d(M, P, z) {
    const G = z.wireframe === true;
    let Y = n[M.id];
    Y === void 0 && (Y = {}, n[M.id] = Y);
    let W = Y[P.id];
    W === void 0 && (W = {}, Y[P.id] = W);
    let K = W[G];
    return K === void 0 && (K = f(l()), W[G] = K), K;
  }
  function f(M) {
    const P = [], z = [], G = [];
    for (let Y = 0; Y < t; Y++) P[Y] = 0, z[Y] = 0, G[Y] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: P, enabledAttributes: z, attributeDivisors: G, object: M, attributes: {}, index: null };
  }
  function m(M, P, z, G) {
    const Y = r.attributes, W = P.attributes;
    let K = 0;
    const J = z.getAttributes();
    for (const k in J) if (J[k].location >= 0) {
      const re = Y[k];
      let Se = W[k];
      if (Se === void 0 && (k === "instanceMatrix" && M.instanceMatrix && (Se = M.instanceMatrix), k === "instanceColor" && M.instanceColor && (Se = M.instanceColor)), re === void 0 || re.attribute !== Se || Se && re.data !== Se.data) return true;
      K++;
    }
    return r.attributesNum !== K || r.index !== G;
  }
  function _(M, P, z, G) {
    const Y = {}, W = P.attributes;
    let K = 0;
    const J = z.getAttributes();
    for (const k in J) if (J[k].location >= 0) {
      let re = W[k];
      re === void 0 && (k === "instanceMatrix" && M.instanceMatrix && (re = M.instanceMatrix), k === "instanceColor" && M.instanceColor && (re = M.instanceColor));
      const Se = {};
      Se.attribute = re, re && re.data && (Se.data = re.data), Y[k] = Se, K++;
    }
    r.attributes = Y, r.attributesNum = K, r.index = G;
  }
  function g() {
    const M = r.newAttributes;
    for (let P = 0, z = M.length; P < z; P++) M[P] = 0;
  }
  function p(M) {
    h(M, 0);
  }
  function h(M, P) {
    const z = r.newAttributes, G = r.enabledAttributes, Y = r.attributeDivisors;
    z[M] = 1, G[M] === 0 && (i.enableVertexAttribArray(M), G[M] = 1), Y[M] !== P && (i.vertexAttribDivisor(M, P), Y[M] = P);
  }
  function T() {
    const M = r.newAttributes, P = r.enabledAttributes;
    for (let z = 0, G = P.length; z < G; z++) P[z] !== M[z] && (i.disableVertexAttribArray(z), P[z] = 0);
  }
  function E(M, P, z, G, Y, W, K) {
    K === true ? i.vertexAttribIPointer(M, P, z, Y, W) : i.vertexAttribPointer(M, P, z, G, Y, W);
  }
  function w(M, P, z, G) {
    g();
    const Y = G.attributes, W = z.getAttributes(), K = P.defaultAttributeValues;
    for (const J in W) {
      const k = W[J];
      if (k.location >= 0) {
        let ne = Y[J];
        if (ne === void 0 && (J === "instanceMatrix" && M.instanceMatrix && (ne = M.instanceMatrix), J === "instanceColor" && M.instanceColor && (ne = M.instanceColor)), ne !== void 0) {
          const re = ne.normalized, Se = ne.itemSize, ke = e.get(ne);
          if (ke === void 0) continue;
          const qe = ke.buffer, Je = ke.type, Qe = ke.bytesPerElement, X = Je === i.INT || Je === i.UNSIGNED_INT || ne.gpuType === Zr;
          if (ne.isInterleavedBufferAttribute) {
            const j = ne.data, de = j.stride, Le = ne.offset;
            if (j.isInstancedInterleavedBuffer) {
              for (let ge = 0; ge < k.locationSize; ge++) h(k.location + ge, j.meshPerAttribute);
              M.isInstancedMesh !== true && G._maxInstanceCount === void 0 && (G._maxInstanceCount = j.meshPerAttribute * j.count);
            } else for (let ge = 0; ge < k.locationSize; ge++) p(k.location + ge);
            i.bindBuffer(i.ARRAY_BUFFER, qe);
            for (let ge = 0; ge < k.locationSize; ge++) E(k.location + ge, Se / k.locationSize, Je, re, de * Qe, (Le + Se / k.locationSize * ge) * Qe, X);
          } else {
            if (ne.isInstancedBufferAttribute) {
              for (let j = 0; j < k.locationSize; j++) h(k.location + j, ne.meshPerAttribute);
              M.isInstancedMesh !== true && G._maxInstanceCount === void 0 && (G._maxInstanceCount = ne.meshPerAttribute * ne.count);
            } else for (let j = 0; j < k.locationSize; j++) p(k.location + j);
            i.bindBuffer(i.ARRAY_BUFFER, qe);
            for (let j = 0; j < k.locationSize; j++) E(k.location + j, Se / k.locationSize, Je, re, Se * Qe, Se / k.locationSize * j * Qe, X);
          }
        } else if (K !== void 0) {
          const re = K[J];
          if (re !== void 0) switch (re.length) {
            case 2:
              i.vertexAttrib2fv(k.location, re);
              break;
            case 3:
              i.vertexAttrib3fv(k.location, re);
              break;
            case 4:
              i.vertexAttrib4fv(k.location, re);
              break;
            default:
              i.vertexAttrib1fv(k.location, re);
          }
        }
      }
    }
    T();
  }
  function D() {
    B();
    for (const M in n) {
      const P = n[M];
      for (const z in P) {
        const G = P[z];
        for (const Y in G) u(G[Y].object), delete G[Y];
        delete P[z];
      }
      delete n[M];
    }
  }
  function y(M) {
    if (n[M.id] === void 0) return;
    const P = n[M.id];
    for (const z in P) {
      const G = P[z];
      for (const Y in G) u(G[Y].object), delete G[Y];
      delete P[z];
    }
    delete n[M.id];
  }
  function C(M) {
    for (const P in n) {
      const z = n[P];
      if (z[M.id] === void 0) continue;
      const G = z[M.id];
      for (const Y in G) u(G[Y].object), delete G[Y];
      delete z[M.id];
    }
  }
  function B() {
    S(), a = true, r !== s && (r = s, c(r.object));
  }
  function S() {
    s.geometry = null, s.program = null, s.wireframe = false;
  }
  return { setup: o, reset: B, resetDefaultState: S, dispose: D, releaseStatesOfGeometry: y, releaseStatesOfProgram: C, initAttributes: g, enableAttribute: p, disableUnusedAttributes: T };
}
function _d(i, e, t) {
  let n;
  function s(c) {
    n = c;
  }
  function r(c, u) {
    i.drawArrays(n, c, u), t.update(u, n, 1);
  }
  function a(c, u, d) {
    d !== 0 && (i.drawArraysInstanced(n, c, u, d), t.update(u, n, d));
  }
  function o(c, u, d) {
    if (d === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, u, 0, d);
    let m = 0;
    for (let _ = 0; _ < d; _++) m += u[_];
    t.update(m, n, 1);
  }
  function l(c, u, d, f) {
    if (d === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null) for (let _ = 0; _ < c.length; _++) a(c[_], u[_], f[_]);
    else {
      m.multiDrawArraysInstancedWEBGL(n, c, 0, u, 0, f, 0, d);
      let _ = 0;
      for (let g = 0; g < d; g++) _ += u[g] * f[g];
      t.update(_, n, 1);
    }
  }
  this.setMode = s, this.render = r, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function gd(i, e, t, n) {
  let s;
  function r() {
    if (s !== void 0) return s;
    if (e.has("EXT_texture_filter_anisotropic") === true) {
      const C = e.get("EXT_texture_filter_anisotropic");
      s = i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else s = 0;
    return s;
  }
  function a(C) {
    return !(C !== Xt && n.convert(C) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(C) {
    const B = C === di && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(C !== un && n.convert(C) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && C !== cn && !B);
  }
  function l(C) {
    if (C === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0) return "highp";
      C = "mediump";
    }
    return C === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const u = l(c);
  u !== c && (Ce("WebGLRenderer:", c, "not supported, using", u, "instead."), c = u);
  const d = t.logarithmicDepthBuffer === true, f = t.reversedDepthBuffer === true && e.has("EXT_clip_control"), m = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), _ = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), g = i.getParameter(i.MAX_TEXTURE_SIZE), p = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), h = i.getParameter(i.MAX_VERTEX_ATTRIBS), T = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), E = i.getParameter(i.MAX_VARYING_VECTORS), w = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), D = _ > 0, y = i.getParameter(i.MAX_SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: r, getMaxPrecision: l, textureFormatReadable: a, textureTypeReadable: o, precision: c, logarithmicDepthBuffer: d, reversedDepthBuffer: f, maxTextures: m, maxVertexTextures: _, maxTextureSize: g, maxCubemapSize: p, maxAttributes: h, maxVertexUniforms: T, maxVaryings: E, maxFragmentUniforms: w, vertexTextures: D, maxSamples: y };
}
function vd(i) {
  const e = this;
  let t = null, n = 0, s = false, r = false;
  const a = new Mn(), o = new Ue(), l = { value: null, needsUpdate: false };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, f) {
    const m = d.length !== 0 || f || n !== 0 || s;
    return s = f, n = d.length, m;
  }, this.beginShadows = function() {
    r = true, u(null);
  }, this.endShadows = function() {
    r = false;
  }, this.setGlobalState = function(d, f) {
    t = u(d, f, 0);
  }, this.setState = function(d, f, m) {
    const _ = d.clippingPlanes, g = d.clipIntersection, p = d.clipShadows, h = i.get(d);
    if (!s || _ === null || _.length === 0 || r && !p) r ? u(null) : c();
    else {
      const T = r ? 0 : n, E = T * 4;
      let w = h.clippingState || null;
      l.value = w, w = u(_, f, E, m);
      for (let D = 0; D !== E; ++D) w[D] = t[D];
      h.clippingState = w, this.numIntersection = g ? this.numPlanes : 0, this.numPlanes += T;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function u(d, f, m, _) {
    const g = d !== null ? d.length : 0;
    let p = null;
    if (g !== 0) {
      if (p = l.value, _ !== true || p === null) {
        const h = m + g * 4, T = f.matrixWorldInverse;
        o.getNormalMatrix(T), (p === null || p.length < h) && (p = new Float32Array(h));
        for (let E = 0, w = m; E !== g; ++E, w += 4) a.copy(d[E]).applyMatrix4(T, o), a.normal.toArray(p, w), p[w + 3] = a.constant;
      }
      l.value = p, l.needsUpdate = true;
    }
    return e.numPlanes = g, e.numIntersection = 0, p;
  }
}
function Md(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === dr ? a.mapping = ci : o === fr && (a.mapping = li), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === dr || o === fr) if (e.has(a)) {
        const l = e.get(a).texture;
        return t(l, a.mapping);
      } else {
        const l = a.image;
        if (l && l.height > 0) {
          const c = new xl(l.height);
          return c.fromEquirectangularTexture(i, a), e.set(a, c), a.addEventListener("dispose", s), t(c.texture, a.mapping);
        } else return null;
      }
    }
    return a;
  }
  function s(a) {
    const o = a.target;
    o.removeEventListener("dispose", s);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: n, dispose: r };
}
const bn = 4, Xa = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Fn = 20, Sd = 256, bi = new Cl(), qa = new He();
let js = null, $s = 0, Js = 0, Qs = false;
const bd = new I();
class Ya {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._sigmas = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
  }
  fromScene(e, t = 0, n = 0.1, s = 100, r = {}) {
    const { size: a = 256, position: o = bd } = r;
    js = this._renderer.getRenderTarget(), $s = this._renderer.getActiveCubeFace(), Js = this._renderer.getActiveMipmapLevel(), Qs = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(a);
    const l = this._allocateTargets();
    return l.depthBuffer = true, this._sceneToCubeUV(e, n, s, l, o), t > 0 && this._blur(l, 0, 0, t), this._applyPMREM(l), this._cleanup(l), l;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = ja(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Za(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._backgroundBox !== null && (this._backgroundBox.geometry.dispose(), this._backgroundBox.material.dispose());
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodMeshes.length; e++) this._lodMeshes[e].geometry.dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(js, $s, Js), this._renderer.xr.enabled = Qs, e.scissorTest = false, ni(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === ci || e.mapping === li ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), js = this._renderer.getRenderTarget(), $s = this._renderer.getActiveCubeFace(), Js = this._renderer.getActiveMipmapLevel(), Qs = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = { magFilter: zt, minFilter: zt, generateMipmaps: false, type: di, format: Xt, colorSpace: hi, depthBuffer: false }, s = Ka(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Ka(e, t, n);
      const { _lodMax: r } = this;
      ({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this._sigmas } = Ed(r)), this._blurMaterial = Td(r, e, t);
    }
    return s;
  }
  _compileMaterial(e) {
    const t = new Tn(new Rt(), e);
    this._renderer.compile(t, bi);
  }
  _sceneToCubeUV(e, t, n, s, r) {
    const l = new Bt(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], u = [1, 1, 1, -1, -1, -1], d = this._renderer, f = d.autoClear, m = d.toneMapping;
    d.getClearColor(qa), d.toneMapping = En, d.autoClear = false, d.state.buffers.depth.getReversed() && (d.setRenderTarget(s), d.clearDepth(), d.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new Tn(new Ui(), new Lo({ name: "PMREM.Background", side: wt, depthWrite: false, depthTest: false })));
    const g = this._backgroundBox, p = g.material;
    let h = false;
    const T = e.background;
    T ? T.isColor && (p.color.copy(T), e.background = null, h = true) : (p.color.copy(qa), h = true);
    for (let E = 0; E < 6; E++) {
      const w = E % 3;
      w === 0 ? (l.up.set(0, c[E], 0), l.position.set(r.x, r.y, r.z), l.lookAt(r.x + u[E], r.y, r.z)) : w === 1 ? (l.up.set(0, 0, c[E]), l.position.set(r.x, r.y, r.z), l.lookAt(r.x, r.y + u[E], r.z)) : (l.up.set(0, c[E], 0), l.position.set(r.x, r.y, r.z), l.lookAt(r.x, r.y, r.z + u[E]));
      const D = this._cubeSize;
      ni(s, w * D, E > 2 ? D : 0, D, D), d.setRenderTarget(s), h && d.render(g, l), d.render(e, l);
    }
    d.toneMapping = m, d.autoClear = f, e.background = T;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, s = e.mapping === ci || e.mapping === li;
    s ? (this._cubemapMaterial === null && (this._cubemapMaterial = ja()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Za());
    const r = s ? this._cubemapMaterial : this._equirectMaterial, a = this._lodMeshes[0];
    a.material = r;
    const o = r.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    ni(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, bi);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = false;
    const s = this._lodMeshes.length;
    for (let r = 1; r < s; r++) this._applyGGXFilter(e, r - 1, r);
    t.autoClear = n;
  }
  _applyGGXFilter(e, t, n) {
    const s = this._renderer, r = this._pingPongRenderTarget;
    if (this._ggxMaterial === null) {
      const T = 3 * Math.max(this._cubeSize, 16), E = 4 * this._cubeSize;
      this._ggxMaterial = yd(this._lodMax, T, E);
    }
    const a = this._ggxMaterial, o = this._lodMeshes[n];
    o.material = a;
    const l = a.uniforms, c = n / (this._lodMeshes.length - 1), u = t / (this._lodMeshes.length - 1), d = Math.sqrt(c * c - u * u), f = 0.05 + c * 0.95, m = d * f, { _lodMax: _ } = this, g = this._sizeLods[n], p = 3 * g * (n > _ - bn ? n - _ + bn : 0), h = 4 * (this._cubeSize - g);
    l.envMap.value = e.texture, l.roughness.value = m, l.mipInt.value = _ - t, ni(r, p, h, 3 * g, 2 * g), s.setRenderTarget(r), s.render(o, bi), l.envMap.value = r.texture, l.roughness.value = 0, l.mipInt.value = _ - n, ni(e, p, h, 3 * g, 2 * g), s.setRenderTarget(e), s.render(o, bi);
  }
  _blur(e, t, n, s, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, n, s, "latitudinal", r), this._halfBlur(a, e, n, n, s, "longitudinal", r);
  }
  _halfBlur(e, t, n, s, r, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && lt("blur direction must be either latitudinal or longitudinal!");
    const u = 3, d = this._lodMeshes[s];
    d.material = c;
    const f = c.uniforms, m = this._sizeLods[n] - 1, _ = isFinite(r) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * Fn - 1), g = r / _, p = isFinite(r) ? 1 + Math.floor(u * g) : Fn;
    p > Fn && Ce(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fn}`);
    const h = [];
    let T = 0;
    for (let C = 0; C < Fn; ++C) {
      const B = C / g, S = Math.exp(-B * B / 2);
      h.push(S), C === 0 ? T += S : C < p && (T += 2 * S);
    }
    for (let C = 0; C < h.length; C++) h[C] = h[C] / T;
    f.envMap.value = e.texture, f.samples.value = p, f.weights.value = h, f.latitudinal.value = a === "latitudinal", o && (f.poleAxis.value = o);
    const { _lodMax: E } = this;
    f.dTheta.value = _, f.mipInt.value = E - n;
    const w = this._sizeLods[s], D = 3 * w * (s > E - bn ? s - E + bn : 0), y = 4 * (this._cubeSize - w);
    ni(t, D, y, 3 * w, 2 * w), l.setRenderTarget(t), l.render(d, bi);
  }
}
function Ed(i) {
  const e = [], t = [], n = [];
  let s = i;
  const r = i - bn + 1 + Xa.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, s);
    e.push(o);
    let l = 1 / o;
    a > i - bn ? l = Xa[a - i + bn - 1] : a === 0 && (l = 0), t.push(l);
    const c = 1 / (o - 2), u = -c, d = 1 + c, f = [u, u, d, u, d, d, u, u, d, d, u, d], m = 6, _ = 6, g = 3, p = 2, h = 1, T = new Float32Array(g * _ * m), E = new Float32Array(p * _ * m), w = new Float32Array(h * _ * m);
    for (let y = 0; y < m; y++) {
      const C = y % 3 * 2 / 3 - 1, B = y > 2 ? 0 : -1, S = [C, B, 0, C + 2 / 3, B, 0, C + 2 / 3, B + 1, 0, C, B, 0, C + 2 / 3, B + 1, 0, C, B + 1, 0];
      T.set(S, g * _ * y), E.set(f, p * _ * y);
      const M = [y, y, y, y, y, y];
      w.set(M, h * _ * y);
    }
    const D = new Rt();
    D.setAttribute("position", new Yt(T, g)), D.setAttribute("uv", new Yt(E, p)), D.setAttribute("faceIndex", new Yt(w, h)), n.push(new Tn(D, null)), s > bn && s--;
  }
  return { lodMeshes: n, sizeLods: e, sigmas: t };
}
function Ka(i, e, t) {
  const n = new Vn(i, e, t);
  return n.texture.mapping = gs, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
}
function ni(i, e, t, n, s) {
  i.viewport.set(e, t, n, s), i.scissor.set(e, t, n, s);
}
function yd(i, e, t) {
  return new fn({ name: "PMREMGGXConvolution", defines: { GGX_SAMPLES: Sd, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${i}.0` }, uniforms: { envMap: { value: null }, roughness: { value: 0 }, mipInt: { value: 0 } }, vertexShader: Ss(), fragmentShader: `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`, blending: ln, depthTest: false, depthWrite: false });
}
function Td(i, e, t) {
  const n = new Float32Array(Fn), s = new I(0, 1, 0);
  return new fn({ name: "SphericalGaussianBlur", defines: { n: Fn, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${i}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: s } }, vertexShader: Ss(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: ln, depthTest: false, depthWrite: false });
}
function Za() {
  return new fn({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: Ss(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: ln, depthTest: false, depthWrite: false });
}
function ja() {
  return new fn({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Ss(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: ln, depthTest: false, depthWrite: false });
}
function Ss() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function Ad(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === dr || l === fr, u = l === ci || l === li;
      if (c || u) {
        let d = e.get(o);
        const f = d !== void 0 ? d.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f) return t === null && (t = new Ya(i)), d = c ? t.fromEquirectangular(o, d) : t.fromCubemap(o, d), d.texture.pmremVersion = o.pmremVersion, e.set(o, d), d.texture;
        if (d !== void 0) return d.texture;
        {
          const m = o.image;
          return c && m && m.height > 0 || u && m && s(m) ? (t === null && (t = new Ya(i)), d = c ? t.fromEquirectangular(o) : t.fromCubemap(o), d.texture.pmremVersion = o.pmremVersion, e.set(o, d), o.addEventListener("dispose", r), d.texture) : null;
        }
      }
    }
    return o;
  }
  function s(o) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++) o[u] !== void 0 && l++;
    return l === c;
  }
  function r(o) {
    const l = o.target;
    l.removeEventListener("dispose", r);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return { get: n, dispose: a };
}
function wd(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    const s = i.getExtension(n);
    return e[n] = s, s;
  }
  return { has: function(n) {
    return t(n) !== null;
  }, init: function() {
    t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
  }, get: function(n) {
    const s = t(n);
    return s === null && Ci("WebGLRenderer: " + n + " extension not supported."), s;
  } };
}
function Rd(i, e, t, n) {
  const s = {}, r = /* @__PURE__ */ new WeakMap();
  function a(d) {
    const f = d.target;
    f.index !== null && e.remove(f.index);
    for (const _ in f.attributes) e.remove(f.attributes[_]);
    f.removeEventListener("dispose", a), delete s[f.id];
    const m = r.get(f);
    m && (e.remove(m), r.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === true && delete f._maxInstanceCount, t.memory.geometries--;
  }
  function o(d, f) {
    return s[f.id] === true || (f.addEventListener("dispose", a), s[f.id] = true, t.memory.geometries++), f;
  }
  function l(d) {
    const f = d.attributes;
    for (const m in f) e.update(f[m], i.ARRAY_BUFFER);
  }
  function c(d) {
    const f = [], m = d.index, _ = d.attributes.position;
    let g = 0;
    if (m !== null) {
      const T = m.array;
      g = m.version;
      for (let E = 0, w = T.length; E < w; E += 3) {
        const D = T[E + 0], y = T[E + 1], C = T[E + 2];
        f.push(D, y, y, C, C, D);
      }
    } else if (_ !== void 0) {
      const T = _.array;
      g = _.version;
      for (let E = 0, w = T.length / 3 - 1; E < w; E += 3) {
        const D = E + 0, y = E + 1, C = E + 2;
        f.push(D, y, y, C, C, D);
      }
    } else return;
    const p = new (Ro(f) ? Io : Uo)(f, 1);
    p.version = g;
    const h = r.get(d);
    h && e.remove(h), r.set(d, p);
  }
  function u(d) {
    const f = r.get(d);
    if (f) {
      const m = d.index;
      m !== null && f.version < m.version && c(d);
    } else c(d);
    return r.get(d);
  }
  return { get: o, update: l, getWireframeAttribute: u };
}
function Cd(i, e, t) {
  let n;
  function s(f) {
    n = f;
  }
  let r, a;
  function o(f) {
    r = f.type, a = f.bytesPerElement;
  }
  function l(f, m) {
    i.drawElements(n, m, r, f * a), t.update(m, n, 1);
  }
  function c(f, m, _) {
    _ !== 0 && (i.drawElementsInstanced(n, m, r, f * a, _), t.update(m, n, _));
  }
  function u(f, m, _) {
    if (_ === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, m, 0, r, f, 0, _);
    let p = 0;
    for (let h = 0; h < _; h++) p += m[h];
    t.update(p, n, 1);
  }
  function d(f, m, _, g) {
    if (_ === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null) for (let h = 0; h < f.length; h++) c(f[h] / a, m[h], g[h]);
    else {
      p.multiDrawElementsInstancedWEBGL(n, m, 0, r, f, 0, g, 0, _);
      let h = 0;
      for (let T = 0; T < _; T++) h += m[T] * g[T];
      t.update(h, n, 1);
    }
  }
  this.setMode = s, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = u, this.renderMultiDrawInstances = d;
}
function Pd(i) {
  const e = { geometries: 0, textures: 0 }, t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, a, o) {
    switch (t.calls++, a) {
      case i.TRIANGLES:
        t.triangles += o * (r / 3);
        break;
      case i.LINES:
        t.lines += o * (r / 2);
        break;
      case i.LINE_STRIP:
        t.lines += o * (r - 1);
        break;
      case i.LINE_LOOP:
        t.lines += o * r;
        break;
      case i.POINTS:
        t.points += o * r;
        break;
      default:
        lt("WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function s() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return { memory: e, render: t, programs: null, autoReset: true, reset: s, update: n };
}
function Dd(i, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), s = new ht();
  function r(a, o, l) {
    const c = a.morphTargetInfluences, u = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, d = u !== void 0 ? u.length : 0;
    let f = n.get(o);
    if (f === void 0 || f.count !== d) {
      let M = function() {
        B.dispose(), n.delete(o), o.removeEventListener("dispose", M);
      };
      var m = M;
      f !== void 0 && f.texture.dispose();
      const _ = o.morphAttributes.position !== void 0, g = o.morphAttributes.normal !== void 0, p = o.morphAttributes.color !== void 0, h = o.morphAttributes.position || [], T = o.morphAttributes.normal || [], E = o.morphAttributes.color || [];
      let w = 0;
      _ === true && (w = 1), g === true && (w = 2), p === true && (w = 3);
      let D = o.attributes.position.count * w, y = 1;
      D > e.maxTextureSize && (y = Math.ceil(D / e.maxTextureSize), D = e.maxTextureSize);
      const C = new Float32Array(D * y * 4 * d), B = new Co(C, D, y, d);
      B.type = cn, B.needsUpdate = true;
      const S = w * 4;
      for (let P = 0; P < d; P++) {
        const z = h[P], G = T[P], Y = E[P], W = D * y * 4 * P;
        for (let K = 0; K < z.count; K++) {
          const J = K * S;
          _ === true && (s.fromBufferAttribute(z, K), C[W + J + 0] = s.x, C[W + J + 1] = s.y, C[W + J + 2] = s.z, C[W + J + 3] = 0), g === true && (s.fromBufferAttribute(G, K), C[W + J + 4] = s.x, C[W + J + 5] = s.y, C[W + J + 6] = s.z, C[W + J + 7] = 0), p === true && (s.fromBufferAttribute(Y, K), C[W + J + 8] = s.x, C[W + J + 9] = s.y, C[W + J + 10] = s.z, C[W + J + 11] = Y.itemSize === 4 ? s.w : 1);
        }
      }
      f = { count: d, texture: B, size: new Ne(D, y) }, n.set(o, f), o.addEventListener("dispose", M);
    }
    if (a.isInstancedMesh === true && a.morphTexture !== null) l.getUniforms().setValue(i, "morphTexture", a.morphTexture, t);
    else {
      let _ = 0;
      for (let p = 0; p < c.length; p++) _ += c[p];
      const g = o.morphTargetsRelative ? 1 : 1 - _;
      l.getUniforms().setValue(i, "morphTargetBaseInfluence", g), l.getUniforms().setValue(i, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(i, "morphTargetsTexture", f.texture, t), l.getUniforms().setValue(i, "morphTargetsTextureSize", f.size);
  }
  return { update: r };
}
function Ld(i, e, t, n) {
  let s = /* @__PURE__ */ new WeakMap();
  function r(l) {
    const c = n.render.frame, u = l.geometry, d = e.get(l, u);
    if (s.get(d) !== c && (e.update(d), s.set(d, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === false && l.addEventListener("dispose", o), s.get(l) !== c && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER), s.set(l, c))), l.isSkinnedMesh) {
      const f = l.skeleton;
      s.get(f) !== c && (f.update(), s.set(f, c));
    }
    return d;
  }
  function a() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: r, dispose: a };
}
const Wo = new St(), $a = new Go(1, 1), Xo = new Co(), qo = new Qc(), Yo = new Oo(), Ja = [], Qa = [], eo = new Float32Array(16), to = new Float32Array(9), no = new Float32Array(4);
function pi(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const s = e * t;
  let r = Ja[s];
  if (r === void 0 && (r = new Float32Array(s), Ja[s] = r), e !== 0) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== e; ++a) o += t, i[a].toArray(r, o);
  }
  return r;
}
function ft(i, e) {
  if (i.length !== e.length) return false;
  for (let t = 0, n = i.length; t < n; t++) if (i[t] !== e[t]) return false;
  return true;
}
function pt(i, e) {
  for (let t = 0, n = e.length; t < n; t++) i[t] = e[t];
}
function bs(i, e) {
  let t = Qa[e];
  t === void 0 && (t = new Int32Array(e), Qa[e] = t);
  for (let n = 0; n !== e; ++n) t[n] = i.allocateTextureUnit();
  return t;
}
function Ud(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function Id(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ft(t, e)) return;
    i.uniform2fv(this.addr, e), pt(t, e);
  }
}
function Nd(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (ft(t, e)) return;
    i.uniform3fv(this.addr, e), pt(t, e);
  }
}
function Fd(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ft(t, e)) return;
    i.uniform4fv(this.addr, e), pt(t, e);
  }
}
function Od(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ft(t, e)) return;
    i.uniformMatrix2fv(this.addr, false, e), pt(t, e);
  } else {
    if (ft(t, n)) return;
    no.set(n), i.uniformMatrix2fv(this.addr, false, no), pt(t, n);
  }
}
function Bd(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ft(t, e)) return;
    i.uniformMatrix3fv(this.addr, false, e), pt(t, e);
  } else {
    if (ft(t, n)) return;
    to.set(n), i.uniformMatrix3fv(this.addr, false, to), pt(t, n);
  }
}
function zd(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ft(t, e)) return;
    i.uniformMatrix4fv(this.addr, false, e), pt(t, e);
  } else {
    if (ft(t, n)) return;
    eo.set(n), i.uniformMatrix4fv(this.addr, false, eo), pt(t, n);
  }
}
function Vd(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function Gd(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ft(t, e)) return;
    i.uniform2iv(this.addr, e), pt(t, e);
  }
}
function kd(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ft(t, e)) return;
    i.uniform3iv(this.addr, e), pt(t, e);
  }
}
function Hd(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ft(t, e)) return;
    i.uniform4iv(this.addr, e), pt(t, e);
  }
}
function Wd(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function Xd(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ft(t, e)) return;
    i.uniform2uiv(this.addr, e), pt(t, e);
  }
}
function qd(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ft(t, e)) return;
    i.uniform3uiv(this.addr, e), pt(t, e);
  }
}
function Yd(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ft(t, e)) return;
    i.uniform4uiv(this.addr, e), pt(t, e);
  }
}
function Kd(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s);
  let r;
  this.type === i.SAMPLER_2D_SHADOW ? ($a.compareFunction = wo, r = $a) : r = Wo, t.setTexture2D(e || r, s);
}
function Zd(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), t.setTexture3D(e || qo, s);
}
function jd(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), t.setTextureCube(e || Yo, s);
}
function $d(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), t.setTexture2DArray(e || Xo, s);
}
function Jd(i) {
  switch (i) {
    case 5126:
      return Ud;
    case 35664:
      return Id;
    case 35665:
      return Nd;
    case 35666:
      return Fd;
    case 35674:
      return Od;
    case 35675:
      return Bd;
    case 35676:
      return zd;
    case 5124:
    case 35670:
      return Vd;
    case 35667:
    case 35671:
      return Gd;
    case 35668:
    case 35672:
      return kd;
    case 35669:
    case 35673:
      return Hd;
    case 5125:
      return Wd;
    case 36294:
      return Xd;
    case 36295:
      return qd;
    case 36296:
      return Yd;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Kd;
    case 35679:
    case 36299:
    case 36307:
      return Zd;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return jd;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return $d;
  }
}
function Qd(i, e) {
  i.uniform1fv(this.addr, e);
}
function ef(i, e) {
  const t = pi(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function tf(i, e) {
  const t = pi(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function nf(i, e) {
  const t = pi(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function sf(i, e) {
  const t = pi(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, false, t);
}
function rf(i, e) {
  const t = pi(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, false, t);
}
function af(i, e) {
  const t = pi(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, false, t);
}
function of(i, e) {
  i.uniform1iv(this.addr, e);
}
function cf(i, e) {
  i.uniform2iv(this.addr, e);
}
function lf(i, e) {
  i.uniform3iv(this.addr, e);
}
function hf(i, e) {
  i.uniform4iv(this.addr, e);
}
function uf(i, e) {
  i.uniform1uiv(this.addr, e);
}
function df(i, e) {
  i.uniform2uiv(this.addr, e);
}
function ff(i, e) {
  i.uniform3uiv(this.addr, e);
}
function pf(i, e) {
  i.uniform4uiv(this.addr, e);
}
function mf(i, e, t) {
  const n = this.cache, s = e.length, r = bs(t, s);
  ft(n, r) || (i.uniform1iv(this.addr, r), pt(n, r));
  for (let a = 0; a !== s; ++a) t.setTexture2D(e[a] || Wo, r[a]);
}
function xf(i, e, t) {
  const n = this.cache, s = e.length, r = bs(t, s);
  ft(n, r) || (i.uniform1iv(this.addr, r), pt(n, r));
  for (let a = 0; a !== s; ++a) t.setTexture3D(e[a] || qo, r[a]);
}
function _f(i, e, t) {
  const n = this.cache, s = e.length, r = bs(t, s);
  ft(n, r) || (i.uniform1iv(this.addr, r), pt(n, r));
  for (let a = 0; a !== s; ++a) t.setTextureCube(e[a] || Yo, r[a]);
}
function gf(i, e, t) {
  const n = this.cache, s = e.length, r = bs(t, s);
  ft(n, r) || (i.uniform1iv(this.addr, r), pt(n, r));
  for (let a = 0; a !== s; ++a) t.setTexture2DArray(e[a] || Xo, r[a]);
}
function vf(i) {
  switch (i) {
    case 5126:
      return Qd;
    case 35664:
      return ef;
    case 35665:
      return tf;
    case 35666:
      return nf;
    case 35674:
      return sf;
    case 35675:
      return rf;
    case 35676:
      return af;
    case 5124:
    case 35670:
      return of;
    case 35667:
    case 35671:
      return cf;
    case 35668:
    case 35672:
      return lf;
    case 35669:
    case 35673:
      return hf;
    case 5125:
      return uf;
    case 36294:
      return df;
    case 36295:
      return ff;
    case 36296:
      return pf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return mf;
    case 35679:
    case 36299:
    case 36307:
      return xf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return _f;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return gf;
  }
}
class Mf {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Jd(t.type);
  }
}
class Sf {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = vf(t.type);
  }
}
class bf {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const s = this.seq;
    for (let r = 0, a = s.length; r !== a; ++r) {
      const o = s[r];
      o.setValue(e, t[o.id], n);
    }
  }
}
const er = /(\w+)(\])?(\[|\.)?/g;
function io(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function Ef(i, e, t) {
  const n = i.name, s = n.length;
  for (er.lastIndex = 0; ; ) {
    const r = er.exec(n), a = er.lastIndex;
    let o = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === s) {
      io(t, c === void 0 ? new Mf(o, i, e) : new Sf(o, i, e));
      break;
    } else {
      let d = t.map[o];
      d === void 0 && (d = new bf(o), io(t, d)), t = d;
    }
  }
}
class ds {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let s = 0; s < n; ++s) {
      const r = e.getActiveUniform(t, s), a = e.getUniformLocation(t, r.name);
      Ef(r, a, this);
    }
  }
  setValue(e, t, n, s) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, s);
  }
  setOptional(e, t, n) {
    const s = t[n];
    s !== void 0 && this.setValue(e, n, s);
  }
  static upload(e, t, n, s) {
    for (let r = 0, a = t.length; r !== a; ++r) {
      const o = t[r], l = n[o.id];
      l.needsUpdate !== false && o.setValue(e, l.value, s);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let s = 0, r = e.length; s !== r; ++s) {
      const a = e[s];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function so(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const yf = 37297;
let Tf = 0;
function Af(i, e) {
  const t = i.split(`
`), n = [], s = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let a = s; a < r; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const ro = new Ue();
function wf(i) {
  Xe._getMatrix(ro, Xe.workingColorSpace, i);
  const e = `mat3( ${ro.elements.map((t) => t.toFixed(4))} )`;
  switch (Xe.getTransfer(i)) {
    case fs:
      return [e, "LinearTransferOETF"];
    case Ze:
      return [e, "sRGBTransferOETF"];
    default:
      return Ce("WebGLProgram: Unsupported color space: ", i), [e, "LinearTransferOETF"];
  }
}
function ao(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), r = (i.getShaderInfoLog(e) || "").trim();
  if (n && r === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(r);
  if (a) {
    const o = parseInt(a[1]);
    return t.toUpperCase() + `

` + r + `

` + Af(i.getShaderSource(e), o);
  } else return r;
}
function Rf(i, e) {
  const t = wf(e);
  return [`vec4 ${i}( vec4 value ) {`, `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`, "}"].join(`
`);
}
function Cf(i, e) {
  let t;
  switch (e) {
    case Tc:
      t = "Linear";
      break;
    case Ac:
      t = "Reinhard";
      break;
    case wc:
      t = "Cineon";
      break;
    case Rc:
      t = "ACESFilmic";
      break;
    case Pc:
      t = "AgX";
      break;
    case Dc:
      t = "Neutral";
      break;
    case Cc:
      t = "Custom";
      break;
    default:
      Ce("WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const rs = new I();
function Pf() {
  Xe.getLuminanceCoefficients(rs);
  const i = rs.x.toFixed(4), e = rs.y.toFixed(4), t = rs.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function Df(i) {
  return [i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(yi).join(`
`);
}
function Lf(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== false && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Uf(i, e) {
  const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let s = 0; s < n; s++) {
    const r = i.getActiveAttrib(e, s), a = r.name;
    let o = 1;
    r.type === i.FLOAT_MAT2 && (o = 2), r.type === i.FLOAT_MAT3 && (o = 3), r.type === i.FLOAT_MAT4 && (o = 4), t[a] = { type: r.type, location: i.getAttribLocation(e, a), locationSize: o };
  }
  return t;
}
function yi(i) {
  return i !== "";
}
function oo(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function co(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const If = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Yr(i) {
  return i.replace(If, Ff);
}
const Nf = /* @__PURE__ */ new Map();
function Ff(i, e) {
  let t = Ie[e];
  if (t === void 0) {
    const n = Nf.get(e);
    if (n !== void 0) t = Ie[n], Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return Yr(t);
}
const Of = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function lo(i) {
  return i.replace(Of, Bf);
}
function Bf(i, e, t, n) {
  let s = "";
  for (let r = parseInt(e); r < parseInt(t); r++) s += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return s;
}
function ho(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function zf(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === _o ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === sc ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === rn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Vf(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap) switch (i.envMapMode) {
    case ci:
    case li:
      e = "ENVMAP_TYPE_CUBE";
      break;
    case gs:
      e = "ENVMAP_TYPE_CUBE_UV";
      break;
  }
  return e;
}
function Gf(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap) switch (i.envMapMode) {
    case li:
      e = "ENVMAP_MODE_REFRACTION";
      break;
  }
  return e;
}
function kf(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap) switch (i.combine) {
    case go:
      e = "ENVMAP_BLENDING_MULTIPLY";
      break;
    case Ec:
      e = "ENVMAP_BLENDING_MIX";
      break;
    case yc:
      e = "ENVMAP_BLENDING_ADD";
      break;
  }
  return e;
}
function Hf(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Wf(i, e, t, n) {
  const s = i.getContext(), r = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const l = zf(t), c = Vf(t), u = Gf(t), d = kf(t), f = Hf(t), m = Df(t), _ = Lf(r), g = s.createProgram();
  let p, h, T = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, _].filter(yi).join(`
`), p.length > 0 && (p += `
`), h = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, _].filter(yi).join(`
`), h.length > 0 && (h += `
`)) : (p = [ho(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, _, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + u : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === false ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(yi).join(`
`), h = [ho(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, _, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + u : "", t.envMap ? "#define " + d : "", f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "", f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "", f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== En ? "#define TONE_MAPPING" : "", t.toneMapping !== En ? Ie.tonemapping_pars_fragment : "", t.toneMapping !== En ? Cf("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Ie.colorspace_pars_fragment, Rf("linearToOutputTexel", t.outputColorSpace), Pf(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(yi).join(`
`)), a = Yr(a), a = oo(a, t), a = co(a, t), o = Yr(o), o = oo(o, t), o = co(o, t), a = lo(a), o = lo(o), t.isRawShaderMaterial !== true && (T = `#version 300 es
`, p = [m, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + p, h = ["#define varying in", t.glslVersion === _a ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === _a ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + h);
  const E = T + p + a, w = T + h + o, D = so(s, s.VERTEX_SHADER, E), y = so(s, s.FRAGMENT_SHADER, w);
  s.attachShader(g, D), s.attachShader(g, y), t.index0AttributeName !== void 0 ? s.bindAttribLocation(g, 0, t.index0AttributeName) : t.morphTargets === true && s.bindAttribLocation(g, 0, "position"), s.linkProgram(g);
  function C(P) {
    if (i.debug.checkShaderErrors) {
      const z = s.getProgramInfoLog(g) || "", G = s.getShaderInfoLog(D) || "", Y = s.getShaderInfoLog(y) || "", W = z.trim(), K = G.trim(), J = Y.trim();
      let k = true, ne = true;
      if (s.getProgramParameter(g, s.LINK_STATUS) === false) if (k = false, typeof i.debug.onShaderError == "function") i.debug.onShaderError(s, g, D, y);
      else {
        const re = ao(s, D, "vertex"), Se = ao(s, y, "fragment");
        lt("THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(g, s.VALIDATE_STATUS) + `

Material Name: ` + P.name + `
Material Type: ` + P.type + `

Program Info Log: ` + W + `
` + re + `
` + Se);
      }
      else W !== "" ? Ce("WebGLProgram: Program Info Log:", W) : (K === "" || J === "") && (ne = false);
      ne && (P.diagnostics = { runnable: k, programLog: W, vertexShader: { log: K, prefix: p }, fragmentShader: { log: J, prefix: h } });
    }
    s.deleteShader(D), s.deleteShader(y), B = new ds(s, g), S = Uf(s, g);
  }
  let B;
  this.getUniforms = function() {
    return B === void 0 && C(this), B;
  };
  let S;
  this.getAttributes = function() {
    return S === void 0 && C(this), S;
  };
  let M = t.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return M === false && (M = s.getProgramParameter(g, yf)), M;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), s.deleteProgram(g), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Tf++, this.cacheKey = e, this.usedTimes = 1, this.program = g, this.vertexShader = D, this.fragmentShader = y, this;
}
let Xf = 0;
class qf {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, s = this._getShaderStage(t), r = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(s) === false && (a.add(s), s.usedTimes++), a.has(r) === false && (a.add(r), r.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new Yf(e), t.set(e, n)), n;
  }
}
class Yf {
  constructor(e) {
    this.id = Xf++, this.code = e, this.usedTimes = 0;
  }
}
function Kf(i, e, t, n, s, r, a) {
  const o = new Po(), l = new qf(), c = /* @__PURE__ */ new Set(), u = [], d = s.logarithmicDepthBuffer, f = s.vertexTextures;
  let m = s.precision;
  const _ = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function g(S) {
    return c.add(S), S === 0 ? "uv" : `uv${S}`;
  }
  function p(S, M, P, z, G) {
    const Y = z.fog, W = G.geometry, K = S.isMeshStandardMaterial ? z.environment : null, J = (S.isMeshStandardMaterial ? t : e).get(S.envMap || K), k = J && J.mapping === gs ? J.image.height : null, ne = _[S.type];
    S.precision !== null && (m = s.getMaxPrecision(S.precision), m !== S.precision && Ce("WebGLProgram.getParameters:", S.precision, "not supported, using", m, "instead."));
    const re = W.morphAttributes.position || W.morphAttributes.normal || W.morphAttributes.color, Se = re !== void 0 ? re.length : 0;
    let ke = 0;
    W.morphAttributes.position !== void 0 && (ke = 1), W.morphAttributes.normal !== void 0 && (ke = 2), W.morphAttributes.color !== void 0 && (ke = 3);
    let qe, Je, Qe, X;
    if (ne) {
      const Ye = Zt[ne];
      qe = Ye.vertexShader, Je = Ye.fragmentShader;
    } else qe = S.vertexShader, Je = S.fragmentShader, l.update(S), Qe = l.getVertexShaderID(S), X = l.getFragmentShaderID(S);
    const j = i.getRenderTarget(), de = i.state.buffers.depth.getReversed(), Le = G.isInstancedMesh === true, ge = G.isBatchedMesh === true, Be = !!S.map, xt = !!S.matcap, Fe = !!J, nt = !!S.aoMap, A = !!S.lightMap, ze = !!S.bumpMap, Ve = !!S.normalMap, et = !!S.displacementMap, me = !!S.emissiveMap, it = !!S.metalnessMap, Me = !!S.roughnessMap, De = S.anisotropy > 0, b = S.clearcoat > 0, x = S.dispersion > 0, N = S.iridescence > 0, H = S.sheen > 0, Z = S.transmission > 0, V = De && !!S.anisotropyMap, _e = b && !!S.clearcoatMap, oe = b && !!S.clearcoatNormalMap, be = b && !!S.clearcoatRoughnessMap, xe = N && !!S.iridescenceMap, $ = N && !!S.iridescenceThicknessMap, te = H && !!S.sheenColorMap, Ae = H && !!S.sheenRoughnessMap, ye = !!S.specularMap, he = !!S.specularColorMap, Re = !!S.specularIntensityMap, R = Z && !!S.transmissionMap, ce = Z && !!S.thicknessMap, ie = !!S.gradientMap, se = !!S.alphaMap, Q = S.alphaTest > 0, q = !!S.alphaHash, fe = !!S.extensions;
    let Pe = En;
    S.toneMapped && (j === null || j.isXRRenderTarget === true) && (Pe = i.toneMapping);
    const tt = { shaderID: ne, shaderType: S.type, shaderName: S.name, vertexShader: qe, fragmentShader: Je, defines: S.defines, customVertexShaderID: Qe, customFragmentShaderID: X, isRawShaderMaterial: S.isRawShaderMaterial === true, glslVersion: S.glslVersion, precision: m, batching: ge, batchingColor: ge && G._colorsTexture !== null, instancing: Le, instancingColor: Le && G.instanceColor !== null, instancingMorph: Le && G.morphTexture !== null, supportsVertexTextures: f, outputColorSpace: j === null ? i.outputColorSpace : j.isXRRenderTarget === true ? j.texture.colorSpace : hi, alphaToCoverage: !!S.alphaToCoverage, map: Be, matcap: xt, envMap: Fe, envMapMode: Fe && J.mapping, envMapCubeUVHeight: k, aoMap: nt, lightMap: A, bumpMap: ze, normalMap: Ve, displacementMap: f && et, emissiveMap: me, normalMapObjectSpace: Ve && S.normalMapType === Fc, normalMapTangentSpace: Ve && S.normalMapType === Nc, metalnessMap: it, roughnessMap: Me, anisotropy: De, anisotropyMap: V, clearcoat: b, clearcoatMap: _e, clearcoatNormalMap: oe, clearcoatRoughnessMap: be, dispersion: x, iridescence: N, iridescenceMap: xe, iridescenceThicknessMap: $, sheen: H, sheenColorMap: te, sheenRoughnessMap: Ae, specularMap: ye, specularColorMap: he, specularIntensityMap: Re, transmission: Z, transmissionMap: R, thicknessMap: ce, gradientMap: ie, opaque: S.transparent === false && S.blending === ri && S.alphaToCoverage === false, alphaMap: se, alphaTest: Q, alphaHash: q, combine: S.combine, mapUv: Be && g(S.map.channel), aoMapUv: nt && g(S.aoMap.channel), lightMapUv: A && g(S.lightMap.channel), bumpMapUv: ze && g(S.bumpMap.channel), normalMapUv: Ve && g(S.normalMap.channel), displacementMapUv: et && g(S.displacementMap.channel), emissiveMapUv: me && g(S.emissiveMap.channel), metalnessMapUv: it && g(S.metalnessMap.channel), roughnessMapUv: Me && g(S.roughnessMap.channel), anisotropyMapUv: V && g(S.anisotropyMap.channel), clearcoatMapUv: _e && g(S.clearcoatMap.channel), clearcoatNormalMapUv: oe && g(S.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: be && g(S.clearcoatRoughnessMap.channel), iridescenceMapUv: xe && g(S.iridescenceMap.channel), iridescenceThicknessMapUv: $ && g(S.iridescenceThicknessMap.channel), sheenColorMapUv: te && g(S.sheenColorMap.channel), sheenRoughnessMapUv: Ae && g(S.sheenRoughnessMap.channel), specularMapUv: ye && g(S.specularMap.channel), specularColorMapUv: he && g(S.specularColorMap.channel), specularIntensityMapUv: Re && g(S.specularIntensityMap.channel), transmissionMapUv: R && g(S.transmissionMap.channel), thicknessMapUv: ce && g(S.thicknessMap.channel), alphaMapUv: se && g(S.alphaMap.channel), vertexTangents: !!W.attributes.tangent && (Ve || De), vertexColors: S.vertexColors, vertexAlphas: S.vertexColors === true && !!W.attributes.color && W.attributes.color.itemSize === 4, pointsUvs: G.isPoints === true && !!W.attributes.uv && (Be || se), fog: !!Y, useFog: S.fog === true, fogExp2: !!Y && Y.isFogExp2, flatShading: S.flatShading === true && S.wireframe === false, sizeAttenuation: S.sizeAttenuation === true, logarithmicDepthBuffer: d, reversedDepthBuffer: de, skinning: G.isSkinnedMesh === true, morphTargets: W.morphAttributes.position !== void 0, morphNormals: W.morphAttributes.normal !== void 0, morphColors: W.morphAttributes.color !== void 0, morphTargetsCount: Se, morphTextureStride: ke, numDirLights: M.directional.length, numPointLights: M.point.length, numSpotLights: M.spot.length, numSpotLightMaps: M.spotLightMap.length, numRectAreaLights: M.rectArea.length, numHemiLights: M.hemi.length, numDirLightShadows: M.directionalShadowMap.length, numPointLightShadows: M.pointShadowMap.length, numSpotLightShadows: M.spotShadowMap.length, numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps, numLightProbes: M.numLightProbes, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: S.dithering, shadowMapEnabled: i.shadowMap.enabled && P.length > 0, shadowMapType: i.shadowMap.type, toneMapping: Pe, decodeVideoTexture: Be && S.map.isVideoTexture === true && Xe.getTransfer(S.map.colorSpace) === Ze, decodeVideoTextureEmissive: me && S.emissiveMap.isVideoTexture === true && Xe.getTransfer(S.emissiveMap.colorSpace) === Ze, premultipliedAlpha: S.premultipliedAlpha, doubleSided: S.side === an, flipSided: S.side === wt, useDepthPacking: S.depthPacking >= 0, depthPacking: S.depthPacking || 0, index0AttributeName: S.index0AttributeName, extensionClipCullDistance: fe && S.extensions.clipCullDistance === true && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (fe && S.extensions.multiDraw === true || ge) && n.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: S.customProgramCacheKey() };
    return tt.vertexUv1s = c.has(1), tt.vertexUv2s = c.has(2), tt.vertexUv3s = c.has(3), c.clear(), tt;
  }
  function h(S) {
    const M = [];
    if (S.shaderID ? M.push(S.shaderID) : (M.push(S.customVertexShaderID), M.push(S.customFragmentShaderID)), S.defines !== void 0) for (const P in S.defines) M.push(P), M.push(S.defines[P]);
    return S.isRawShaderMaterial === false && (T(M, S), E(M, S), M.push(i.outputColorSpace)), M.push(S.customProgramCacheKey), M.join();
  }
  function T(S, M) {
    S.push(M.precision), S.push(M.outputColorSpace), S.push(M.envMapMode), S.push(M.envMapCubeUVHeight), S.push(M.mapUv), S.push(M.alphaMapUv), S.push(M.lightMapUv), S.push(M.aoMapUv), S.push(M.bumpMapUv), S.push(M.normalMapUv), S.push(M.displacementMapUv), S.push(M.emissiveMapUv), S.push(M.metalnessMapUv), S.push(M.roughnessMapUv), S.push(M.anisotropyMapUv), S.push(M.clearcoatMapUv), S.push(M.clearcoatNormalMapUv), S.push(M.clearcoatRoughnessMapUv), S.push(M.iridescenceMapUv), S.push(M.iridescenceThicknessMapUv), S.push(M.sheenColorMapUv), S.push(M.sheenRoughnessMapUv), S.push(M.specularMapUv), S.push(M.specularColorMapUv), S.push(M.specularIntensityMapUv), S.push(M.transmissionMapUv), S.push(M.thicknessMapUv), S.push(M.combine), S.push(M.fogExp2), S.push(M.sizeAttenuation), S.push(M.morphTargetsCount), S.push(M.morphAttributeCount), S.push(M.numDirLights), S.push(M.numPointLights), S.push(M.numSpotLights), S.push(M.numSpotLightMaps), S.push(M.numHemiLights), S.push(M.numRectAreaLights), S.push(M.numDirLightShadows), S.push(M.numPointLightShadows), S.push(M.numSpotLightShadows), S.push(M.numSpotLightShadowsWithMaps), S.push(M.numLightProbes), S.push(M.shadowMapType), S.push(M.toneMapping), S.push(M.numClippingPlanes), S.push(M.numClipIntersection), S.push(M.depthPacking);
  }
  function E(S, M) {
    o.disableAll(), M.supportsVertexTextures && o.enable(0), M.instancing && o.enable(1), M.instancingColor && o.enable(2), M.instancingMorph && o.enable(3), M.matcap && o.enable(4), M.envMap && o.enable(5), M.normalMapObjectSpace && o.enable(6), M.normalMapTangentSpace && o.enable(7), M.clearcoat && o.enable(8), M.iridescence && o.enable(9), M.alphaTest && o.enable(10), M.vertexColors && o.enable(11), M.vertexAlphas && o.enable(12), M.vertexUv1s && o.enable(13), M.vertexUv2s && o.enable(14), M.vertexUv3s && o.enable(15), M.vertexTangents && o.enable(16), M.anisotropy && o.enable(17), M.alphaHash && o.enable(18), M.batching && o.enable(19), M.dispersion && o.enable(20), M.batchingColor && o.enable(21), M.gradientMap && o.enable(22), S.push(o.mask), o.disableAll(), M.fog && o.enable(0), M.useFog && o.enable(1), M.flatShading && o.enable(2), M.logarithmicDepthBuffer && o.enable(3), M.reversedDepthBuffer && o.enable(4), M.skinning && o.enable(5), M.morphTargets && o.enable(6), M.morphNormals && o.enable(7), M.morphColors && o.enable(8), M.premultipliedAlpha && o.enable(9), M.shadowMapEnabled && o.enable(10), M.doubleSided && o.enable(11), M.flipSided && o.enable(12), M.useDepthPacking && o.enable(13), M.dithering && o.enable(14), M.transmission && o.enable(15), M.sheen && o.enable(16), M.opaque && o.enable(17), M.pointsUvs && o.enable(18), M.decodeVideoTexture && o.enable(19), M.decodeVideoTextureEmissive && o.enable(20), M.alphaToCoverage && o.enable(21), S.push(o.mask);
  }
  function w(S) {
    const M = _[S.type];
    let P;
    if (M) {
      const z = Zt[M];
      P = dl.clone(z.uniforms);
    } else P = S.uniforms;
    return P;
  }
  function D(S, M) {
    let P;
    for (let z = 0, G = u.length; z < G; z++) {
      const Y = u[z];
      if (Y.cacheKey === M) {
        P = Y, ++P.usedTimes;
        break;
      }
    }
    return P === void 0 && (P = new Wf(i, M, S, r), u.push(P)), P;
  }
  function y(S) {
    if (--S.usedTimes === 0) {
      const M = u.indexOf(S);
      u[M] = u[u.length - 1], u.pop(), S.destroy();
    }
  }
  function C(S) {
    l.remove(S);
  }
  function B() {
    l.dispose();
  }
  return { getParameters: p, getProgramCacheKey: h, getUniforms: w, acquireProgram: D, releaseProgram: y, releaseShaderCache: C, programs: u, dispose: B };
}
function Zf() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(a) {
    return i.has(a);
  }
  function t(a) {
    let o = i.get(a);
    return o === void 0 && (o = {}, i.set(a, o)), o;
  }
  function n(a) {
    i.delete(a);
  }
  function s(a, o, l) {
    i.get(a)[o] = l;
  }
  function r() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return { has: e, get: t, remove: n, update: s, dispose: r };
}
function jf(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function uo(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function fo() {
  const i = [];
  let e = 0;
  const t = [], n = [], s = [];
  function r() {
    e = 0, t.length = 0, n.length = 0, s.length = 0;
  }
  function a(d, f, m, _, g, p) {
    let h = i[e];
    return h === void 0 ? (h = { id: d.id, object: d, geometry: f, material: m, groupOrder: _, renderOrder: d.renderOrder, z: g, group: p }, i[e] = h) : (h.id = d.id, h.object = d, h.geometry = f, h.material = m, h.groupOrder = _, h.renderOrder = d.renderOrder, h.z = g, h.group = p), e++, h;
  }
  function o(d, f, m, _, g, p) {
    const h = a(d, f, m, _, g, p);
    m.transmission > 0 ? n.push(h) : m.transparent === true ? s.push(h) : t.push(h);
  }
  function l(d, f, m, _, g, p) {
    const h = a(d, f, m, _, g, p);
    m.transmission > 0 ? n.unshift(h) : m.transparent === true ? s.unshift(h) : t.unshift(h);
  }
  function c(d, f) {
    t.length > 1 && t.sort(d || jf), n.length > 1 && n.sort(f || uo), s.length > 1 && s.sort(f || uo);
  }
  function u() {
    for (let d = e, f = i.length; d < f; d++) {
      const m = i[d];
      if (m.id === null) break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return { opaque: t, transmissive: n, transparent: s, init: r, push: o, unshift: l, finish: u, sort: c };
}
function $f() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, s) {
    const r = i.get(n);
    let a;
    return r === void 0 ? (a = new fo(), i.set(n, [a])) : s >= r.length ? (a = new fo(), r.push(a)) : a = r[s], a;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: t };
}
function Jf() {
  const i = {};
  return { get: function(e) {
    if (i[e.id] !== void 0) return i[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { direction: new I(), color: new He() };
        break;
      case "SpotLight":
        t = { position: new I(), direction: new I(), color: new He(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        t = { position: new I(), color: new He(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        t = { direction: new I(), skyColor: new He(), groundColor: new He() };
        break;
      case "RectAreaLight":
        t = { color: new He(), position: new I(), halfWidth: new I(), halfHeight: new I() };
        break;
    }
    return i[e.id] = t, t;
  } };
}
function Qf() {
  const i = {};
  return { get: function(e) {
    if (i[e.id] !== void 0) return i[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Ne() };
        break;
      case "SpotLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Ne() };
        break;
      case "PointLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Ne(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return i[e.id] = t, t;
  } };
}
let ep = 0;
function tp(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function np(i) {
  const e = new Jf(), t = Qf(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let c = 0; c < 9; c++) n.probe.push(new I());
  const s = new I(), r = new at(), a = new at();
  function o(c) {
    let u = 0, d = 0, f = 0;
    for (let S = 0; S < 9; S++) n.probe[S].set(0, 0, 0);
    let m = 0, _ = 0, g = 0, p = 0, h = 0, T = 0, E = 0, w = 0, D = 0, y = 0, C = 0;
    c.sort(tp);
    for (let S = 0, M = c.length; S < M; S++) {
      const P = c[S], z = P.color, G = P.intensity, Y = P.distance, W = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
      if (P.isAmbientLight) u += z.r * G, d += z.g * G, f += z.b * G;
      else if (P.isLightProbe) {
        for (let K = 0; K < 9; K++) n.probe[K].addScaledVector(P.sh.coefficients[K], G);
        C++;
      } else if (P.isDirectionalLight) {
        const K = e.get(P);
        if (K.color.copy(P.color).multiplyScalar(P.intensity), P.castShadow) {
          const J = P.shadow, k = t.get(P);
          k.shadowIntensity = J.intensity, k.shadowBias = J.bias, k.shadowNormalBias = J.normalBias, k.shadowRadius = J.radius, k.shadowMapSize = J.mapSize, n.directionalShadow[m] = k, n.directionalShadowMap[m] = W, n.directionalShadowMatrix[m] = P.shadow.matrix, T++;
        }
        n.directional[m] = K, m++;
      } else if (P.isSpotLight) {
        const K = e.get(P);
        K.position.setFromMatrixPosition(P.matrixWorld), K.color.copy(z).multiplyScalar(G), K.distance = Y, K.coneCos = Math.cos(P.angle), K.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)), K.decay = P.decay, n.spot[g] = K;
        const J = P.shadow;
        if (P.map && (n.spotLightMap[D] = P.map, D++, J.updateMatrices(P), P.castShadow && y++), n.spotLightMatrix[g] = J.matrix, P.castShadow) {
          const k = t.get(P);
          k.shadowIntensity = J.intensity, k.shadowBias = J.bias, k.shadowNormalBias = J.normalBias, k.shadowRadius = J.radius, k.shadowMapSize = J.mapSize, n.spotShadow[g] = k, n.spotShadowMap[g] = W, w++;
        }
        g++;
      } else if (P.isRectAreaLight) {
        const K = e.get(P);
        K.color.copy(z).multiplyScalar(G), K.halfWidth.set(P.width * 0.5, 0, 0), K.halfHeight.set(0, P.height * 0.5, 0), n.rectArea[p] = K, p++;
      } else if (P.isPointLight) {
        const K = e.get(P);
        if (K.color.copy(P.color).multiplyScalar(P.intensity), K.distance = P.distance, K.decay = P.decay, P.castShadow) {
          const J = P.shadow, k = t.get(P);
          k.shadowIntensity = J.intensity, k.shadowBias = J.bias, k.shadowNormalBias = J.normalBias, k.shadowRadius = J.radius, k.shadowMapSize = J.mapSize, k.shadowCameraNear = J.camera.near, k.shadowCameraFar = J.camera.far, n.pointShadow[_] = k, n.pointShadowMap[_] = W, n.pointShadowMatrix[_] = P.shadow.matrix, E++;
        }
        n.point[_] = K, _++;
      } else if (P.isHemisphereLight) {
        const K = e.get(P);
        K.skyColor.copy(P.color).multiplyScalar(G), K.groundColor.copy(P.groundColor).multiplyScalar(G), n.hemi[h] = K, h++;
      }
    }
    p > 0 && (i.has("OES_texture_float_linear") === true ? (n.rectAreaLTC1 = ae.LTC_FLOAT_1, n.rectAreaLTC2 = ae.LTC_FLOAT_2) : (n.rectAreaLTC1 = ae.LTC_HALF_1, n.rectAreaLTC2 = ae.LTC_HALF_2)), n.ambient[0] = u, n.ambient[1] = d, n.ambient[2] = f;
    const B = n.hash;
    (B.directionalLength !== m || B.pointLength !== _ || B.spotLength !== g || B.rectAreaLength !== p || B.hemiLength !== h || B.numDirectionalShadows !== T || B.numPointShadows !== E || B.numSpotShadows !== w || B.numSpotMaps !== D || B.numLightProbes !== C) && (n.directional.length = m, n.spot.length = g, n.rectArea.length = p, n.point.length = _, n.hemi.length = h, n.directionalShadow.length = T, n.directionalShadowMap.length = T, n.pointShadow.length = E, n.pointShadowMap.length = E, n.spotShadow.length = w, n.spotShadowMap.length = w, n.directionalShadowMatrix.length = T, n.pointShadowMatrix.length = E, n.spotLightMatrix.length = w + D - y, n.spotLightMap.length = D, n.numSpotLightShadowsWithMaps = y, n.numLightProbes = C, B.directionalLength = m, B.pointLength = _, B.spotLength = g, B.rectAreaLength = p, B.hemiLength = h, B.numDirectionalShadows = T, B.numPointShadows = E, B.numSpotShadows = w, B.numSpotMaps = D, B.numLightProbes = C, n.version = ep++);
  }
  function l(c, u) {
    let d = 0, f = 0, m = 0, _ = 0, g = 0;
    const p = u.matrixWorldInverse;
    for (let h = 0, T = c.length; h < T; h++) {
      const E = c[h];
      if (E.isDirectionalLight) {
        const w = n.directional[d];
        w.direction.setFromMatrixPosition(E.matrixWorld), s.setFromMatrixPosition(E.target.matrixWorld), w.direction.sub(s), w.direction.transformDirection(p), d++;
      } else if (E.isSpotLight) {
        const w = n.spot[m];
        w.position.setFromMatrixPosition(E.matrixWorld), w.position.applyMatrix4(p), w.direction.setFromMatrixPosition(E.matrixWorld), s.setFromMatrixPosition(E.target.matrixWorld), w.direction.sub(s), w.direction.transformDirection(p), m++;
      } else if (E.isRectAreaLight) {
        const w = n.rectArea[_];
        w.position.setFromMatrixPosition(E.matrixWorld), w.position.applyMatrix4(p), a.identity(), r.copy(E.matrixWorld), r.premultiply(p), a.extractRotation(r), w.halfWidth.set(E.width * 0.5, 0, 0), w.halfHeight.set(0, E.height * 0.5, 0), w.halfWidth.applyMatrix4(a), w.halfHeight.applyMatrix4(a), _++;
      } else if (E.isPointLight) {
        const w = n.point[f];
        w.position.setFromMatrixPosition(E.matrixWorld), w.position.applyMatrix4(p), f++;
      } else if (E.isHemisphereLight) {
        const w = n.hemi[g];
        w.direction.setFromMatrixPosition(E.matrixWorld), w.direction.transformDirection(p), g++;
      }
    }
  }
  return { setup: o, setupView: l, state: n };
}
function po(i) {
  const e = new np(i), t = [], n = [];
  function s(u) {
    c.camera = u, t.length = 0, n.length = 0;
  }
  function r(u) {
    t.push(u);
  }
  function a(u) {
    n.push(u);
  }
  function o() {
    e.setup(t);
  }
  function l(u) {
    e.setupView(t, u);
  }
  const c = { lightsArray: t, shadowsArray: n, camera: null, lights: e, transmissionRenderTarget: {} };
  return { init: s, state: c, setupLights: o, setupLightsView: l, pushLight: r, pushShadow: a };
}
function ip(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(s, r = 0) {
    const a = e.get(s);
    let o;
    return a === void 0 ? (o = new po(i), e.set(s, [o])) : r >= a.length ? (o = new po(i), a.push(o)) : o = a[r], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: n };
}
const sp = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, rp = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function ap(i, e, t) {
  let n = new Bo();
  const s = new Ne(), r = new Ne(), a = new ht(), o = new wl({ depthPacking: Ic }), l = new Rl(), c = {}, u = t.maxTextureSize, d = { [yn]: wt, [wt]: yn, [an]: an }, f = new fn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new Ne() }, radius: { value: 4 } }, vertexShader: sp, fragmentShader: rp }), m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const _ = new Rt();
  _.setAttribute("position", new Yt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const g = new Tn(_, f), p = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = _o;
  let h = this.type;
  this.render = function(y, C, B) {
    if (p.enabled === false || p.autoUpdate === false && p.needsUpdate === false || y.length === 0) return;
    const S = i.getRenderTarget(), M = i.getActiveCubeFace(), P = i.getActiveMipmapLevel(), z = i.state;
    z.setBlending(ln), z.buffers.depth.getReversed() === true ? z.buffers.color.setClear(0, 0, 0, 0) : z.buffers.color.setClear(1, 1, 1, 1), z.buffers.depth.setTest(true), z.setScissorTest(false);
    const G = h !== rn && this.type === rn, Y = h === rn && this.type !== rn;
    for (let W = 0, K = y.length; W < K; W++) {
      const J = y[W], k = J.shadow;
      if (k === void 0) {
        Ce("WebGLShadowMap:", J, "has no shadow.");
        continue;
      }
      if (k.autoUpdate === false && k.needsUpdate === false) continue;
      s.copy(k.mapSize);
      const ne = k.getFrameExtents();
      if (s.multiply(ne), r.copy(k.mapSize), (s.x > u || s.y > u) && (s.x > u && (r.x = Math.floor(u / ne.x), s.x = r.x * ne.x, k.mapSize.x = r.x), s.y > u && (r.y = Math.floor(u / ne.y), s.y = r.y * ne.y, k.mapSize.y = r.y)), k.map === null || G === true || Y === true) {
        const Se = this.type !== rn ? { minFilter: It, magFilter: It } : {};
        k.map !== null && k.map.dispose(), k.map = new Vn(s.x, s.y, Se), k.map.texture.name = J.name + ".shadowMap", k.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(k.map), i.clear();
      const re = k.getViewportCount();
      for (let Se = 0; Se < re; Se++) {
        const ke = k.getViewport(Se);
        a.set(r.x * ke.x, r.y * ke.y, r.x * ke.z, r.y * ke.w), z.viewport(a), k.updateMatrices(J, Se), n = k.getFrustum(), w(C, B, k.camera, J, this.type);
      }
      k.isPointLightShadow !== true && this.type === rn && T(k, B), k.needsUpdate = false;
    }
    h = this.type, p.needsUpdate = false, i.setRenderTarget(S, M, P);
  };
  function T(y, C) {
    const B = e.update(g);
    f.defines.VSM_SAMPLES !== y.blurSamples && (f.defines.VSM_SAMPLES = y.blurSamples, m.defines.VSM_SAMPLES = y.blurSamples, f.needsUpdate = true, m.needsUpdate = true), y.mapPass === null && (y.mapPass = new Vn(s.x, s.y)), f.uniforms.shadow_pass.value = y.map.texture, f.uniforms.resolution.value = y.mapSize, f.uniforms.radius.value = y.radius, i.setRenderTarget(y.mapPass), i.clear(), i.renderBufferDirect(C, null, B, f, g, null), m.uniforms.shadow_pass.value = y.mapPass.texture, m.uniforms.resolution.value = y.mapSize, m.uniforms.radius.value = y.radius, i.setRenderTarget(y.map), i.clear(), i.renderBufferDirect(C, null, B, m, g, null);
  }
  function E(y, C, B, S) {
    let M = null;
    const P = B.isPointLight === true ? y.customDistanceMaterial : y.customDepthMaterial;
    if (P !== void 0) M = P;
    else if (M = B.isPointLight === true ? l : o, i.localClippingEnabled && C.clipShadows === true && Array.isArray(C.clippingPlanes) && C.clippingPlanes.length !== 0 || C.displacementMap && C.displacementScale !== 0 || C.alphaMap && C.alphaTest > 0 || C.map && C.alphaTest > 0 || C.alphaToCoverage === true) {
      const z = M.uuid, G = C.uuid;
      let Y = c[z];
      Y === void 0 && (Y = {}, c[z] = Y);
      let W = Y[G];
      W === void 0 && (W = M.clone(), Y[G] = W, C.addEventListener("dispose", D)), M = W;
    }
    if (M.visible = C.visible, M.wireframe = C.wireframe, S === rn ? M.side = C.shadowSide !== null ? C.shadowSide : C.side : M.side = C.shadowSide !== null ? C.shadowSide : d[C.side], M.alphaMap = C.alphaMap, M.alphaTest = C.alphaToCoverage === true ? 0.5 : C.alphaTest, M.map = C.map, M.clipShadows = C.clipShadows, M.clippingPlanes = C.clippingPlanes, M.clipIntersection = C.clipIntersection, M.displacementMap = C.displacementMap, M.displacementScale = C.displacementScale, M.displacementBias = C.displacementBias, M.wireframeLinewidth = C.wireframeLinewidth, M.linewidth = C.linewidth, B.isPointLight === true && M.isMeshDistanceMaterial === true) {
      const z = i.properties.get(M);
      z.light = B;
    }
    return M;
  }
  function w(y, C, B, S, M) {
    if (y.visible === false) return;
    if (y.layers.test(C.layers) && (y.isMesh || y.isLine || y.isPoints) && (y.castShadow || y.receiveShadow && M === rn) && (!y.frustumCulled || n.intersectsObject(y))) {
      y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, y.matrixWorld);
      const G = e.update(y), Y = y.material;
      if (Array.isArray(Y)) {
        const W = G.groups;
        for (let K = 0, J = W.length; K < J; K++) {
          const k = W[K], ne = Y[k.materialIndex];
          if (ne && ne.visible) {
            const re = E(y, ne, S, M);
            y.onBeforeShadow(i, y, C, B, G, re, k), i.renderBufferDirect(B, null, G, re, y, k), y.onAfterShadow(i, y, C, B, G, re, k);
          }
        }
      } else if (Y.visible) {
        const W = E(y, Y, S, M);
        y.onBeforeShadow(i, y, C, B, G, W, null), i.renderBufferDirect(B, null, G, W, y, null), y.onAfterShadow(i, y, C, B, G, W, null);
      }
    }
    const z = y.children;
    for (let G = 0, Y = z.length; G < Y; G++) w(z[G], C, B, S, M);
  }
  function D(y) {
    y.target.removeEventListener("dispose", D);
    for (const B in c) {
      const S = c[B], M = y.target.uuid;
      M in S && (S[M].dispose(), delete S[M]);
    }
  }
}
const op = { [rr]: ar, [or]: hr, [cr]: ur, [oi]: lr, [ar]: rr, [hr]: or, [ur]: cr, [lr]: oi };
function cp(i, e) {
  function t() {
    let R = false;
    const ce = new ht();
    let ie = null;
    const se = new ht(0, 0, 0, 0);
    return { setMask: function(Q) {
      ie !== Q && !R && (i.colorMask(Q, Q, Q, Q), ie = Q);
    }, setLocked: function(Q) {
      R = Q;
    }, setClear: function(Q, q, fe, Pe, tt) {
      tt === true && (Q *= Pe, q *= Pe, fe *= Pe), ce.set(Q, q, fe, Pe), se.equals(ce) === false && (i.clearColor(Q, q, fe, Pe), se.copy(ce));
    }, reset: function() {
      R = false, ie = null, se.set(-1, 0, 0, 0);
    } };
  }
  function n() {
    let R = false, ce = false, ie = null, se = null, Q = null;
    return { setReversed: function(q) {
      if (ce !== q) {
        const fe = e.get("EXT_clip_control");
        q ? fe.clipControlEXT(fe.LOWER_LEFT_EXT, fe.ZERO_TO_ONE_EXT) : fe.clipControlEXT(fe.LOWER_LEFT_EXT, fe.NEGATIVE_ONE_TO_ONE_EXT), ce = q;
        const Pe = Q;
        Q = null, this.setClear(Pe);
      }
    }, getReversed: function() {
      return ce;
    }, setTest: function(q) {
      q ? j(i.DEPTH_TEST) : de(i.DEPTH_TEST);
    }, setMask: function(q) {
      ie !== q && !R && (i.depthMask(q), ie = q);
    }, setFunc: function(q) {
      if (ce && (q = op[q]), se !== q) {
        switch (q) {
          case rr:
            i.depthFunc(i.NEVER);
            break;
          case ar:
            i.depthFunc(i.ALWAYS);
            break;
          case or:
            i.depthFunc(i.LESS);
            break;
          case oi:
            i.depthFunc(i.LEQUAL);
            break;
          case cr:
            i.depthFunc(i.EQUAL);
            break;
          case lr:
            i.depthFunc(i.GEQUAL);
            break;
          case hr:
            i.depthFunc(i.GREATER);
            break;
          case ur:
            i.depthFunc(i.NOTEQUAL);
            break;
          default:
            i.depthFunc(i.LEQUAL);
        }
        se = q;
      }
    }, setLocked: function(q) {
      R = q;
    }, setClear: function(q) {
      Q !== q && (ce && (q = 1 - q), i.clearDepth(q), Q = q);
    }, reset: function() {
      R = false, ie = null, se = null, Q = null, ce = false;
    } };
  }
  function s() {
    let R = false, ce = null, ie = null, se = null, Q = null, q = null, fe = null, Pe = null, tt = null;
    return { setTest: function(Ye) {
      R || (Ye ? j(i.STENCIL_TEST) : de(i.STENCIL_TEST));
    }, setMask: function(Ye) {
      ce !== Ye && !R && (i.stencilMask(Ye), ce = Ye);
    }, setFunc: function(Ye, Kt, Vt) {
      (ie !== Ye || se !== Kt || Q !== Vt) && (i.stencilFunc(Ye, Kt, Vt), ie = Ye, se = Kt, Q = Vt);
    }, setOp: function(Ye, Kt, Vt) {
      (q !== Ye || fe !== Kt || Pe !== Vt) && (i.stencilOp(Ye, Kt, Vt), q = Ye, fe = Kt, Pe = Vt);
    }, setLocked: function(Ye) {
      R = Ye;
    }, setClear: function(Ye) {
      tt !== Ye && (i.clearStencil(Ye), tt = Ye);
    }, reset: function() {
      R = false, ce = null, ie = null, se = null, Q = null, q = null, fe = null, Pe = null, tt = null;
    } };
  }
  const r = new t(), a = new n(), o = new s(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let u = {}, d = {}, f = /* @__PURE__ */ new WeakMap(), m = [], _ = null, g = false, p = null, h = null, T = null, E = null, w = null, D = null, y = null, C = new He(0, 0, 0), B = 0, S = false, M = null, P = null, z = null, G = null, Y = null;
  const W = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let K = false, J = 0;
  const k = i.getParameter(i.VERSION);
  k.indexOf("WebGL") !== -1 ? (J = parseFloat(/^WebGL (\d)/.exec(k)[1]), K = J >= 1) : k.indexOf("OpenGL ES") !== -1 && (J = parseFloat(/^OpenGL ES (\d)/.exec(k)[1]), K = J >= 2);
  let ne = null, re = {};
  const Se = i.getParameter(i.SCISSOR_BOX), ke = i.getParameter(i.VIEWPORT), qe = new ht().fromArray(Se), Je = new ht().fromArray(ke);
  function Qe(R, ce, ie, se) {
    const Q = new Uint8Array(4), q = i.createTexture();
    i.bindTexture(R, q), i.texParameteri(R, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(R, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let fe = 0; fe < ie; fe++) R === i.TEXTURE_3D || R === i.TEXTURE_2D_ARRAY ? i.texImage3D(ce, 0, i.RGBA, 1, 1, se, 0, i.RGBA, i.UNSIGNED_BYTE, Q) : i.texImage2D(ce + fe, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, Q);
    return q;
  }
  const X = {};
  X[i.TEXTURE_2D] = Qe(i.TEXTURE_2D, i.TEXTURE_2D, 1), X[i.TEXTURE_CUBE_MAP] = Qe(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), X[i.TEXTURE_2D_ARRAY] = Qe(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), X[i.TEXTURE_3D] = Qe(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), j(i.DEPTH_TEST), a.setFunc(oi), ze(false), Ve(da), j(i.CULL_FACE), nt(ln);
  function j(R) {
    u[R] !== true && (i.enable(R), u[R] = true);
  }
  function de(R) {
    u[R] !== false && (i.disable(R), u[R] = false);
  }
  function Le(R, ce) {
    return d[R] !== ce ? (i.bindFramebuffer(R, ce), d[R] = ce, R === i.DRAW_FRAMEBUFFER && (d[i.FRAMEBUFFER] = ce), R === i.FRAMEBUFFER && (d[i.DRAW_FRAMEBUFFER] = ce), true) : false;
  }
  function ge(R, ce) {
    let ie = m, se = false;
    if (R) {
      ie = f.get(ce), ie === void 0 && (ie = [], f.set(ce, ie));
      const Q = R.textures;
      if (ie.length !== Q.length || ie[0] !== i.COLOR_ATTACHMENT0) {
        for (let q = 0, fe = Q.length; q < fe; q++) ie[q] = i.COLOR_ATTACHMENT0 + q;
        ie.length = Q.length, se = true;
      }
    } else ie[0] !== i.BACK && (ie[0] = i.BACK, se = true);
    se && i.drawBuffers(ie);
  }
  function Be(R) {
    return _ !== R ? (i.useProgram(R), _ = R, true) : false;
  }
  const xt = { [Nn]: i.FUNC_ADD, [ac]: i.FUNC_SUBTRACT, [oc]: i.FUNC_REVERSE_SUBTRACT };
  xt[cc] = i.MIN, xt[lc] = i.MAX;
  const Fe = { [hc]: i.ZERO, [uc]: i.ONE, [dc]: i.SRC_COLOR, [ir]: i.SRC_ALPHA, [gc]: i.SRC_ALPHA_SATURATE, [xc]: i.DST_COLOR, [pc]: i.DST_ALPHA, [fc]: i.ONE_MINUS_SRC_COLOR, [sr]: i.ONE_MINUS_SRC_ALPHA, [_c]: i.ONE_MINUS_DST_COLOR, [mc]: i.ONE_MINUS_DST_ALPHA, [vc]: i.CONSTANT_COLOR, [Mc]: i.ONE_MINUS_CONSTANT_COLOR, [Sc]: i.CONSTANT_ALPHA, [bc]: i.ONE_MINUS_CONSTANT_ALPHA };
  function nt(R, ce, ie, se, Q, q, fe, Pe, tt, Ye) {
    if (R === ln) {
      g === true && (de(i.BLEND), g = false);
      return;
    }
    if (g === false && (j(i.BLEND), g = true), R !== rc) {
      if (R !== p || Ye !== S) {
        if ((h !== Nn || w !== Nn) && (i.blendEquation(i.FUNC_ADD), h = Nn, w = Nn), Ye) switch (R) {
          case ri:
            i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
            break;
          case nr:
            i.blendFunc(i.ONE, i.ONE);
            break;
          case fa:
            i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
            break;
          case pa:
            i.blendFuncSeparate(i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA, i.ZERO, i.ONE);
            break;
          default:
            lt("WebGLState: Invalid blending: ", R);
            break;
        }
        else switch (R) {
          case ri:
            i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
            break;
          case nr:
            i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
            break;
          case fa:
            lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
            break;
          case pa:
            lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
            break;
          default:
            lt("WebGLState: Invalid blending: ", R);
            break;
        }
        T = null, E = null, D = null, y = null, C.set(0, 0, 0), B = 0, p = R, S = Ye;
      }
      return;
    }
    Q = Q || ce, q = q || ie, fe = fe || se, (ce !== h || Q !== w) && (i.blendEquationSeparate(xt[ce], xt[Q]), h = ce, w = Q), (ie !== T || se !== E || q !== D || fe !== y) && (i.blendFuncSeparate(Fe[ie], Fe[se], Fe[q], Fe[fe]), T = ie, E = se, D = q, y = fe), (Pe.equals(C) === false || tt !== B) && (i.blendColor(Pe.r, Pe.g, Pe.b, tt), C.copy(Pe), B = tt), p = R, S = false;
  }
  function A(R, ce) {
    R.side === an ? de(i.CULL_FACE) : j(i.CULL_FACE);
    let ie = R.side === wt;
    ce && (ie = !ie), ze(ie), R.blending === ri && R.transparent === false ? nt(ln) : nt(R.blending, R.blendEquation, R.blendSrc, R.blendDst, R.blendEquationAlpha, R.blendSrcAlpha, R.blendDstAlpha, R.blendColor, R.blendAlpha, R.premultipliedAlpha), a.setFunc(R.depthFunc), a.setTest(R.depthTest), a.setMask(R.depthWrite), r.setMask(R.colorWrite);
    const se = R.stencilWrite;
    o.setTest(se), se && (o.setMask(R.stencilWriteMask), o.setFunc(R.stencilFunc, R.stencilRef, R.stencilFuncMask), o.setOp(R.stencilFail, R.stencilZFail, R.stencilZPass)), me(R.polygonOffset, R.polygonOffsetFactor, R.polygonOffsetUnits), R.alphaToCoverage === true ? j(i.SAMPLE_ALPHA_TO_COVERAGE) : de(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function ze(R) {
    M !== R && (R ? i.frontFace(i.CW) : i.frontFace(i.CCW), M = R);
  }
  function Ve(R) {
    R !== nc ? (j(i.CULL_FACE), R !== P && (R === da ? i.cullFace(i.BACK) : R === ic ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : de(i.CULL_FACE), P = R;
  }
  function et(R) {
    R !== z && (K && i.lineWidth(R), z = R);
  }
  function me(R, ce, ie) {
    R ? (j(i.POLYGON_OFFSET_FILL), (G !== ce || Y !== ie) && (i.polygonOffset(ce, ie), G = ce, Y = ie)) : de(i.POLYGON_OFFSET_FILL);
  }
  function it(R) {
    R ? j(i.SCISSOR_TEST) : de(i.SCISSOR_TEST);
  }
  function Me(R) {
    R === void 0 && (R = i.TEXTURE0 + W - 1), ne !== R && (i.activeTexture(R), ne = R);
  }
  function De(R, ce, ie) {
    ie === void 0 && (ne === null ? ie = i.TEXTURE0 + W - 1 : ie = ne);
    let se = re[ie];
    se === void 0 && (se = { type: void 0, texture: void 0 }, re[ie] = se), (se.type !== R || se.texture !== ce) && (ne !== ie && (i.activeTexture(ie), ne = ie), i.bindTexture(R, ce || X[R]), se.type = R, se.texture = ce);
  }
  function b() {
    const R = re[ne];
    R !== void 0 && R.type !== void 0 && (i.bindTexture(R.type, null), R.type = void 0, R.texture = void 0);
  }
  function x() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (R) {
      R("WebGLState:", R);
    }
  }
  function N() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (R) {
      R("WebGLState:", R);
    }
  }
  function H() {
    try {
      i.texSubImage2D(...arguments);
    } catch (R) {
      R("WebGLState:", R);
    }
  }
  function Z() {
    try {
      i.texSubImage3D(...arguments);
    } catch (R) {
      R("WebGLState:", R);
    }
  }
  function V() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (R) {
      R("WebGLState:", R);
    }
  }
  function _e() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (R) {
      R("WebGLState:", R);
    }
  }
  function oe() {
    try {
      i.texStorage2D(...arguments);
    } catch (R) {
      R("WebGLState:", R);
    }
  }
  function be() {
    try {
      i.texStorage3D(...arguments);
    } catch (R) {
      R("WebGLState:", R);
    }
  }
  function xe() {
    try {
      i.texImage2D(...arguments);
    } catch (R) {
      R("WebGLState:", R);
    }
  }
  function $() {
    try {
      i.texImage3D(...arguments);
    } catch (R) {
      R("WebGLState:", R);
    }
  }
  function te(R) {
    qe.equals(R) === false && (i.scissor(R.x, R.y, R.z, R.w), qe.copy(R));
  }
  function Ae(R) {
    Je.equals(R) === false && (i.viewport(R.x, R.y, R.z, R.w), Je.copy(R));
  }
  function ye(R, ce) {
    let ie = c.get(ce);
    ie === void 0 && (ie = /* @__PURE__ */ new WeakMap(), c.set(ce, ie));
    let se = ie.get(R);
    se === void 0 && (se = i.getUniformBlockIndex(ce, R.name), ie.set(R, se));
  }
  function he(R, ce) {
    const se = c.get(ce).get(R);
    l.get(ce) !== se && (i.uniformBlockBinding(ce, se, R.__bindingPointIndex), l.set(ce, se));
  }
  function Re() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(true, true, true, true), i.clearColor(0, 0, 0, 0), i.depthMask(true), i.depthFunc(i.LESS), a.setReversed(false), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), u = {}, ne = null, re = {}, d = {}, f = /* @__PURE__ */ new WeakMap(), m = [], _ = null, g = false, p = null, h = null, T = null, E = null, w = null, D = null, y = null, C = new He(0, 0, 0), B = 0, S = false, M = null, P = null, z = null, G = null, Y = null, qe.set(0, 0, i.canvas.width, i.canvas.height), Je.set(0, 0, i.canvas.width, i.canvas.height), r.reset(), a.reset(), o.reset();
  }
  return { buffers: { color: r, depth: a, stencil: o }, enable: j, disable: de, bindFramebuffer: Le, drawBuffers: ge, useProgram: Be, setBlending: nt, setMaterial: A, setFlipSided: ze, setCullFace: Ve, setLineWidth: et, setPolygonOffset: me, setScissorTest: it, activeTexture: Me, bindTexture: De, unbindTexture: b, compressedTexImage2D: x, compressedTexImage3D: N, texImage2D: xe, texImage3D: $, updateUBOMapping: ye, uniformBlockBinding: he, texStorage2D: oe, texStorage3D: be, texSubImage2D: H, texSubImage3D: Z, compressedTexSubImage2D: V, compressedTexSubImage3D: _e, scissor: te, viewport: Ae, reset: Re };
}
function lp(i, e, t, n, s, r, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), c = new Ne(), u = /* @__PURE__ */ new WeakMap();
  let d;
  const f = /* @__PURE__ */ new WeakMap();
  let m = false;
  try {
    m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function _(b, x) {
    return m ? new OffscreenCanvas(b, x) : ms("canvas");
  }
  function g(b, x, N) {
    let H = 1;
    const Z = De(b);
    if ((Z.width > N || Z.height > N) && (H = N / Math.max(Z.width, Z.height)), H < 1) if (typeof HTMLImageElement < "u" && b instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && b instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && b instanceof ImageBitmap || typeof VideoFrame < "u" && b instanceof VideoFrame) {
      const V = Math.floor(H * Z.width), _e = Math.floor(H * Z.height);
      d === void 0 && (d = _(V, _e));
      const oe = x ? _(V, _e) : d;
      return oe.width = V, oe.height = _e, oe.getContext("2d").drawImage(b, 0, 0, V, _e), Ce("WebGLRenderer: Texture has been resized from (" + Z.width + "x" + Z.height + ") to (" + V + "x" + _e + ")."), oe;
    } else return "data" in b && Ce("WebGLRenderer: Image in DataTexture is too big (" + Z.width + "x" + Z.height + ")."), b;
    return b;
  }
  function p(b) {
    return b.generateMipmaps;
  }
  function h(b) {
    i.generateMipmap(b);
  }
  function T(b) {
    return b.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : b.isWebGL3DRenderTarget ? i.TEXTURE_3D : b.isWebGLArrayRenderTarget || b.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function E(b, x, N, H, Z = false) {
    if (b !== null) {
      if (i[b] !== void 0) return i[b];
      Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + b + "'");
    }
    let V = x;
    if (x === i.RED && (N === i.FLOAT && (V = i.R32F), N === i.HALF_FLOAT && (V = i.R16F), N === i.UNSIGNED_BYTE && (V = i.R8)), x === i.RED_INTEGER && (N === i.UNSIGNED_BYTE && (V = i.R8UI), N === i.UNSIGNED_SHORT && (V = i.R16UI), N === i.UNSIGNED_INT && (V = i.R32UI), N === i.BYTE && (V = i.R8I), N === i.SHORT && (V = i.R16I), N === i.INT && (V = i.R32I)), x === i.RG && (N === i.FLOAT && (V = i.RG32F), N === i.HALF_FLOAT && (V = i.RG16F), N === i.UNSIGNED_BYTE && (V = i.RG8)), x === i.RG_INTEGER && (N === i.UNSIGNED_BYTE && (V = i.RG8UI), N === i.UNSIGNED_SHORT && (V = i.RG16UI), N === i.UNSIGNED_INT && (V = i.RG32UI), N === i.BYTE && (V = i.RG8I), N === i.SHORT && (V = i.RG16I), N === i.INT && (V = i.RG32I)), x === i.RGB_INTEGER && (N === i.UNSIGNED_BYTE && (V = i.RGB8UI), N === i.UNSIGNED_SHORT && (V = i.RGB16UI), N === i.UNSIGNED_INT && (V = i.RGB32UI), N === i.BYTE && (V = i.RGB8I), N === i.SHORT && (V = i.RGB16I), N === i.INT && (V = i.RGB32I)), x === i.RGBA_INTEGER && (N === i.UNSIGNED_BYTE && (V = i.RGBA8UI), N === i.UNSIGNED_SHORT && (V = i.RGBA16UI), N === i.UNSIGNED_INT && (V = i.RGBA32UI), N === i.BYTE && (V = i.RGBA8I), N === i.SHORT && (V = i.RGBA16I), N === i.INT && (V = i.RGBA32I)), x === i.RGB && (N === i.UNSIGNED_INT_5_9_9_9_REV && (V = i.RGB9_E5), N === i.UNSIGNED_INT_10F_11F_11F_REV && (V = i.R11F_G11F_B10F)), x === i.RGBA) {
      const _e = Z ? fs : Xe.getTransfer(H);
      N === i.FLOAT && (V = i.RGBA32F), N === i.HALF_FLOAT && (V = i.RGBA16F), N === i.UNSIGNED_BYTE && (V = _e === Ze ? i.SRGB8_ALPHA8 : i.RGBA8), N === i.UNSIGNED_SHORT_4_4_4_4 && (V = i.RGBA4), N === i.UNSIGNED_SHORT_5_5_5_1 && (V = i.RGB5_A1);
    }
    return (V === i.R16F || V === i.R32F || V === i.RG16F || V === i.RG32F || V === i.RGBA16F || V === i.RGBA32F) && e.get("EXT_color_buffer_float"), V;
  }
  function w(b, x) {
    let N;
    return b ? x === null || x === zn || x === Ai ? N = i.DEPTH24_STENCIL8 : x === cn ? N = i.DEPTH32F_STENCIL8 : x === Ti && (N = i.DEPTH24_STENCIL8, Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : x === null || x === zn || x === Ai ? N = i.DEPTH_COMPONENT24 : x === cn ? N = i.DEPTH_COMPONENT32F : x === Ti && (N = i.DEPTH_COMPONENT16), N;
  }
  function D(b, x) {
    return p(b) === true || b.isFramebufferTexture && b.minFilter !== It && b.minFilter !== zt ? Math.log2(Math.max(x.width, x.height)) + 1 : b.mipmaps !== void 0 && b.mipmaps.length > 0 ? b.mipmaps.length : b.isCompressedTexture && Array.isArray(b.image) ? x.mipmaps.length : 1;
  }
  function y(b) {
    const x = b.target;
    x.removeEventListener("dispose", y), B(x), x.isVideoTexture && u.delete(x);
  }
  function C(b) {
    const x = b.target;
    x.removeEventListener("dispose", C), M(x);
  }
  function B(b) {
    const x = n.get(b);
    if (x.__webglInit === void 0) return;
    const N = b.source, H = f.get(N);
    if (H) {
      const Z = H[x.__cacheKey];
      Z.usedTimes--, Z.usedTimes === 0 && S(b), Object.keys(H).length === 0 && f.delete(N);
    }
    n.remove(b);
  }
  function S(b) {
    const x = n.get(b);
    i.deleteTexture(x.__webglTexture);
    const N = b.source, H = f.get(N);
    delete H[x.__cacheKey], a.memory.textures--;
  }
  function M(b) {
    const x = n.get(b);
    if (b.depthTexture && (b.depthTexture.dispose(), n.remove(b.depthTexture)), b.isWebGLCubeRenderTarget) for (let H = 0; H < 6; H++) {
      if (Array.isArray(x.__webglFramebuffer[H])) for (let Z = 0; Z < x.__webglFramebuffer[H].length; Z++) i.deleteFramebuffer(x.__webglFramebuffer[H][Z]);
      else i.deleteFramebuffer(x.__webglFramebuffer[H]);
      x.__webglDepthbuffer && i.deleteRenderbuffer(x.__webglDepthbuffer[H]);
    }
    else {
      if (Array.isArray(x.__webglFramebuffer)) for (let H = 0; H < x.__webglFramebuffer.length; H++) i.deleteFramebuffer(x.__webglFramebuffer[H]);
      else i.deleteFramebuffer(x.__webglFramebuffer);
      if (x.__webglDepthbuffer && i.deleteRenderbuffer(x.__webglDepthbuffer), x.__webglMultisampledFramebuffer && i.deleteFramebuffer(x.__webglMultisampledFramebuffer), x.__webglColorRenderbuffer) for (let H = 0; H < x.__webglColorRenderbuffer.length; H++) x.__webglColorRenderbuffer[H] && i.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);
      x.__webglDepthRenderbuffer && i.deleteRenderbuffer(x.__webglDepthRenderbuffer);
    }
    const N = b.textures;
    for (let H = 0, Z = N.length; H < Z; H++) {
      const V = n.get(N[H]);
      V.__webglTexture && (i.deleteTexture(V.__webglTexture), a.memory.textures--), n.remove(N[H]);
    }
    n.remove(b);
  }
  let P = 0;
  function z() {
    P = 0;
  }
  function G() {
    const b = P;
    return b >= s.maxTextures && Ce("WebGLTextures: Trying to use " + b + " texture units while this GPU supports only " + s.maxTextures), P += 1, b;
  }
  function Y(b) {
    const x = [];
    return x.push(b.wrapS), x.push(b.wrapT), x.push(b.wrapR || 0), x.push(b.magFilter), x.push(b.minFilter), x.push(b.anisotropy), x.push(b.internalFormat), x.push(b.format), x.push(b.type), x.push(b.generateMipmaps), x.push(b.premultiplyAlpha), x.push(b.flipY), x.push(b.unpackAlignment), x.push(b.colorSpace), x.join();
  }
  function W(b, x) {
    const N = n.get(b);
    if (b.isVideoTexture && it(b), b.isRenderTargetTexture === false && b.isExternalTexture !== true && b.version > 0 && N.__version !== b.version) {
      const H = b.image;
      if (H === null) Ce("WebGLRenderer: Texture marked for update but no image data found.");
      else if (H.complete === false) Ce("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        X(N, b, x);
        return;
      }
    } else b.isExternalTexture && (N.__webglTexture = b.sourceTexture ? b.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D, N.__webglTexture, i.TEXTURE0 + x);
  }
  function K(b, x) {
    const N = n.get(b);
    if (b.isRenderTargetTexture === false && b.version > 0 && N.__version !== b.version) {
      X(N, b, x);
      return;
    } else b.isExternalTexture && (N.__webglTexture = b.sourceTexture ? b.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D_ARRAY, N.__webglTexture, i.TEXTURE0 + x);
  }
  function J(b, x) {
    const N = n.get(b);
    if (b.isRenderTargetTexture === false && b.version > 0 && N.__version !== b.version) {
      X(N, b, x);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, N.__webglTexture, i.TEXTURE0 + x);
  }
  function k(b, x) {
    const N = n.get(b);
    if (b.version > 0 && N.__version !== b.version) {
      j(N, b, x);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, N.__webglTexture, i.TEXTURE0 + x);
  }
  const ne = { [pr]: i.REPEAT, [on]: i.CLAMP_TO_EDGE, [mr]: i.MIRRORED_REPEAT }, re = { [It]: i.NEAREST, [Lc]: i.NEAREST_MIPMAP_NEAREST, [Fi]: i.NEAREST_MIPMAP_LINEAR, [zt]: i.LINEAR, [Ts]: i.LINEAR_MIPMAP_NEAREST, [On]: i.LINEAR_MIPMAP_LINEAR }, Se = { [Oc]: i.NEVER, [Hc]: i.ALWAYS, [Bc]: i.LESS, [wo]: i.LEQUAL, [zc]: i.EQUAL, [kc]: i.GEQUAL, [Vc]: i.GREATER, [Gc]: i.NOTEQUAL };
  function ke(b, x) {
    if (x.type === cn && e.has("OES_texture_float_linear") === false && (x.magFilter === zt || x.magFilter === Ts || x.magFilter === Fi || x.magFilter === On || x.minFilter === zt || x.minFilter === Ts || x.minFilter === Fi || x.minFilter === On) && Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(b, i.TEXTURE_WRAP_S, ne[x.wrapS]), i.texParameteri(b, i.TEXTURE_WRAP_T, ne[x.wrapT]), (b === i.TEXTURE_3D || b === i.TEXTURE_2D_ARRAY) && i.texParameteri(b, i.TEXTURE_WRAP_R, ne[x.wrapR]), i.texParameteri(b, i.TEXTURE_MAG_FILTER, re[x.magFilter]), i.texParameteri(b, i.TEXTURE_MIN_FILTER, re[x.minFilter]), x.compareFunction && (i.texParameteri(b, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(b, i.TEXTURE_COMPARE_FUNC, Se[x.compareFunction])), e.has("EXT_texture_filter_anisotropic") === true) {
      if (x.magFilter === It || x.minFilter !== Fi && x.minFilter !== On || x.type === cn && e.has("OES_texture_float_linear") === false) return;
      if (x.anisotropy > 1 || n.get(x).__currentAnisotropy) {
        const N = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(b, N.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(x.anisotropy, s.getMaxAnisotropy())), n.get(x).__currentAnisotropy = x.anisotropy;
      }
    }
  }
  function qe(b, x) {
    let N = false;
    b.__webglInit === void 0 && (b.__webglInit = true, x.addEventListener("dispose", y));
    const H = x.source;
    let Z = f.get(H);
    Z === void 0 && (Z = {}, f.set(H, Z));
    const V = Y(x);
    if (V !== b.__cacheKey) {
      Z[V] === void 0 && (Z[V] = { texture: i.createTexture(), usedTimes: 0 }, a.memory.textures++, N = true), Z[V].usedTimes++;
      const _e = Z[b.__cacheKey];
      _e !== void 0 && (Z[b.__cacheKey].usedTimes--, _e.usedTimes === 0 && S(x)), b.__cacheKey = V, b.__webglTexture = Z[V].texture;
    }
    return N;
  }
  function Je(b, x, N) {
    return Math.floor(Math.floor(b / N) / x);
  }
  function Qe(b, x, N, H) {
    const V = b.updateRanges;
    if (V.length === 0) t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, x.width, x.height, N, H, x.data);
    else {
      V.sort(($, te) => $.start - te.start);
      let _e = 0;
      for (let $ = 1; $ < V.length; $++) {
        const te = V[_e], Ae = V[$], ye = te.start + te.count, he = Je(Ae.start, x.width, 4), Re = Je(te.start, x.width, 4);
        Ae.start <= ye + 1 && he === Re && Je(Ae.start + Ae.count - 1, x.width, 4) === he ? te.count = Math.max(te.count, Ae.start + Ae.count - te.start) : (++_e, V[_e] = Ae);
      }
      V.length = _e + 1;
      const oe = i.getParameter(i.UNPACK_ROW_LENGTH), be = i.getParameter(i.UNPACK_SKIP_PIXELS), xe = i.getParameter(i.UNPACK_SKIP_ROWS);
      i.pixelStorei(i.UNPACK_ROW_LENGTH, x.width);
      for (let $ = 0, te = V.length; $ < te; $++) {
        const Ae = V[$], ye = Math.floor(Ae.start / 4), he = Math.ceil(Ae.count / 4), Re = ye % x.width, R = Math.floor(ye / x.width), ce = he, ie = 1;
        i.pixelStorei(i.UNPACK_SKIP_PIXELS, Re), i.pixelStorei(i.UNPACK_SKIP_ROWS, R), t.texSubImage2D(i.TEXTURE_2D, 0, Re, R, ce, ie, N, H, x.data);
      }
      b.clearUpdateRanges(), i.pixelStorei(i.UNPACK_ROW_LENGTH, oe), i.pixelStorei(i.UNPACK_SKIP_PIXELS, be), i.pixelStorei(i.UNPACK_SKIP_ROWS, xe);
    }
  }
  function X(b, x, N) {
    let H = i.TEXTURE_2D;
    (x.isDataArrayTexture || x.isCompressedArrayTexture) && (H = i.TEXTURE_2D_ARRAY), x.isData3DTexture && (H = i.TEXTURE_3D);
    const Z = qe(b, x), V = x.source;
    t.bindTexture(H, b.__webglTexture, i.TEXTURE0 + N);
    const _e = n.get(V);
    if (V.version !== _e.__version || Z === true) {
      t.activeTexture(i.TEXTURE0 + N);
      const oe = Xe.getPrimaries(Xe.workingColorSpace), be = x.colorSpace === Sn ? null : Xe.getPrimaries(x.colorSpace), xe = x.colorSpace === Sn || oe === be ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, x.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, x.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, xe);
      let $ = g(x.image, false, s.maxTextureSize);
      $ = Me(x, $);
      const te = r.convert(x.format, x.colorSpace), Ae = r.convert(x.type);
      let ye = E(x.internalFormat, te, Ae, x.colorSpace, x.isVideoTexture);
      ke(H, x);
      let he;
      const Re = x.mipmaps, R = x.isVideoTexture !== true, ce = _e.__version === void 0 || Z === true, ie = V.dataReady, se = D(x, $);
      if (x.isDepthTexture) ye = w(x.format === Ri, x.type), ce && (R ? t.texStorage2D(i.TEXTURE_2D, 1, ye, $.width, $.height) : t.texImage2D(i.TEXTURE_2D, 0, ye, $.width, $.height, 0, te, Ae, null));
      else if (x.isDataTexture) if (Re.length > 0) {
        R && ce && t.texStorage2D(i.TEXTURE_2D, se, ye, Re[0].width, Re[0].height);
        for (let Q = 0, q = Re.length; Q < q; Q++) he = Re[Q], R ? ie && t.texSubImage2D(i.TEXTURE_2D, Q, 0, 0, he.width, he.height, te, Ae, he.data) : t.texImage2D(i.TEXTURE_2D, Q, ye, he.width, he.height, 0, te, Ae, he.data);
        x.generateMipmaps = false;
      } else R ? (ce && t.texStorage2D(i.TEXTURE_2D, se, ye, $.width, $.height), ie && Qe(x, $, te, Ae)) : t.texImage2D(i.TEXTURE_2D, 0, ye, $.width, $.height, 0, te, Ae, $.data);
      else if (x.isCompressedTexture) if (x.isCompressedArrayTexture) {
        R && ce && t.texStorage3D(i.TEXTURE_2D_ARRAY, se, ye, Re[0].width, Re[0].height, $.depth);
        for (let Q = 0, q = Re.length; Q < q; Q++) if (he = Re[Q], x.format !== Xt) if (te !== null) if (R) {
          if (ie) if (x.layerUpdates.size > 0) {
            const fe = Wa(he.width, he.height, x.format, x.type);
            for (const Pe of x.layerUpdates) {
              const tt = he.data.subarray(Pe * fe / he.data.BYTES_PER_ELEMENT, (Pe + 1) * fe / he.data.BYTES_PER_ELEMENT);
              t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, Q, 0, 0, Pe, he.width, he.height, 1, te, tt);
            }
            x.clearLayerUpdates();
          } else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, Q, 0, 0, 0, he.width, he.height, $.depth, te, he.data);
        } else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, Q, ye, he.width, he.height, $.depth, 0, he.data, 0, 0);
        else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else R ? ie && t.texSubImage3D(i.TEXTURE_2D_ARRAY, Q, 0, 0, 0, he.width, he.height, $.depth, te, Ae, he.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, Q, ye, he.width, he.height, $.depth, 0, te, Ae, he.data);
      } else {
        R && ce && t.texStorage2D(i.TEXTURE_2D, se, ye, Re[0].width, Re[0].height);
        for (let Q = 0, q = Re.length; Q < q; Q++) he = Re[Q], x.format !== Xt ? te !== null ? R ? ie && t.compressedTexSubImage2D(i.TEXTURE_2D, Q, 0, 0, he.width, he.height, te, he.data) : t.compressedTexImage2D(i.TEXTURE_2D, Q, ye, he.width, he.height, 0, he.data) : Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : R ? ie && t.texSubImage2D(i.TEXTURE_2D, Q, 0, 0, he.width, he.height, te, Ae, he.data) : t.texImage2D(i.TEXTURE_2D, Q, ye, he.width, he.height, 0, te, Ae, he.data);
      }
      else if (x.isDataArrayTexture) if (R) {
        if (ce && t.texStorage3D(i.TEXTURE_2D_ARRAY, se, ye, $.width, $.height, $.depth), ie) if (x.layerUpdates.size > 0) {
          const Q = Wa($.width, $.height, x.format, x.type);
          for (const q of x.layerUpdates) {
            const fe = $.data.subarray(q * Q / $.data.BYTES_PER_ELEMENT, (q + 1) * Q / $.data.BYTES_PER_ELEMENT);
            t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, q, $.width, $.height, 1, te, Ae, fe);
          }
          x.clearLayerUpdates();
        } else t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, $.width, $.height, $.depth, te, Ae, $.data);
      } else t.texImage3D(i.TEXTURE_2D_ARRAY, 0, ye, $.width, $.height, $.depth, 0, te, Ae, $.data);
      else if (x.isData3DTexture) R ? (ce && t.texStorage3D(i.TEXTURE_3D, se, ye, $.width, $.height, $.depth), ie && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, $.width, $.height, $.depth, te, Ae, $.data)) : t.texImage3D(i.TEXTURE_3D, 0, ye, $.width, $.height, $.depth, 0, te, Ae, $.data);
      else if (x.isFramebufferTexture) {
        if (ce) if (R) t.texStorage2D(i.TEXTURE_2D, se, ye, $.width, $.height);
        else {
          let Q = $.width, q = $.height;
          for (let fe = 0; fe < se; fe++) t.texImage2D(i.TEXTURE_2D, fe, ye, Q, q, 0, te, Ae, null), Q >>= 1, q >>= 1;
        }
      } else if (Re.length > 0) {
        if (R && ce) {
          const Q = De(Re[0]);
          t.texStorage2D(i.TEXTURE_2D, se, ye, Q.width, Q.height);
        }
        for (let Q = 0, q = Re.length; Q < q; Q++) he = Re[Q], R ? ie && t.texSubImage2D(i.TEXTURE_2D, Q, 0, 0, te, Ae, he) : t.texImage2D(i.TEXTURE_2D, Q, ye, te, Ae, he);
        x.generateMipmaps = false;
      } else if (R) {
        if (ce) {
          const Q = De($);
          t.texStorage2D(i.TEXTURE_2D, se, ye, Q.width, Q.height);
        }
        ie && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, te, Ae, $);
      } else t.texImage2D(i.TEXTURE_2D, 0, ye, te, Ae, $);
      p(x) && h(H), _e.__version = V.version, x.onUpdate && x.onUpdate(x);
    }
    b.__version = x.version;
  }
  function j(b, x, N) {
    if (x.image.length !== 6) return;
    const H = qe(b, x), Z = x.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, b.__webglTexture, i.TEXTURE0 + N);
    const V = n.get(Z);
    if (Z.version !== V.__version || H === true) {
      t.activeTexture(i.TEXTURE0 + N);
      const _e = Xe.getPrimaries(Xe.workingColorSpace), oe = x.colorSpace === Sn ? null : Xe.getPrimaries(x.colorSpace), be = x.colorSpace === Sn || _e === oe ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, x.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, x.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, be);
      const xe = x.isCompressedTexture || x.image[0].isCompressedTexture, $ = x.image[0] && x.image[0].isDataTexture, te = [];
      for (let q = 0; q < 6; q++) !xe && !$ ? te[q] = g(x.image[q], true, s.maxCubemapSize) : te[q] = $ ? x.image[q].image : x.image[q], te[q] = Me(x, te[q]);
      const Ae = te[0], ye = r.convert(x.format, x.colorSpace), he = r.convert(x.type), Re = E(x.internalFormat, ye, he, x.colorSpace), R = x.isVideoTexture !== true, ce = V.__version === void 0 || H === true, ie = Z.dataReady;
      let se = D(x, Ae);
      ke(i.TEXTURE_CUBE_MAP, x);
      let Q;
      if (xe) {
        R && ce && t.texStorage2D(i.TEXTURE_CUBE_MAP, se, Re, Ae.width, Ae.height);
        for (let q = 0; q < 6; q++) {
          Q = te[q].mipmaps;
          for (let fe = 0; fe < Q.length; fe++) {
            const Pe = Q[fe];
            x.format !== Xt ? ye !== null ? R ? ie && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, fe, 0, 0, Pe.width, Pe.height, ye, Pe.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, fe, Re, Pe.width, Pe.height, 0, Pe.data) : Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : R ? ie && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, fe, 0, 0, Pe.width, Pe.height, ye, he, Pe.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, fe, Re, Pe.width, Pe.height, 0, ye, he, Pe.data);
          }
        }
      } else {
        if (Q = x.mipmaps, R && ce) {
          Q.length > 0 && se++;
          const q = De(te[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, se, Re, q.width, q.height);
        }
        for (let q = 0; q < 6; q++) if ($) {
          R ? ie && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, 0, 0, te[q].width, te[q].height, ye, he, te[q].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, Re, te[q].width, te[q].height, 0, ye, he, te[q].data);
          for (let fe = 0; fe < Q.length; fe++) {
            const tt = Q[fe].image[q].image;
            R ? ie && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, fe + 1, 0, 0, tt.width, tt.height, ye, he, tt.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, fe + 1, Re, tt.width, tt.height, 0, ye, he, tt.data);
          }
        } else {
          R ? ie && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, 0, 0, ye, he, te[q]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, Re, ye, he, te[q]);
          for (let fe = 0; fe < Q.length; fe++) {
            const Pe = Q[fe];
            R ? ie && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, fe + 1, 0, 0, ye, he, Pe.image[q]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, fe + 1, Re, ye, he, Pe.image[q]);
          }
        }
      }
      p(x) && h(i.TEXTURE_CUBE_MAP), V.__version = Z.version, x.onUpdate && x.onUpdate(x);
    }
    b.__version = x.version;
  }
  function de(b, x, N, H, Z, V) {
    const _e = r.convert(N.format, N.colorSpace), oe = r.convert(N.type), be = E(N.internalFormat, _e, oe, N.colorSpace), xe = n.get(x), $ = n.get(N);
    if ($.__renderTarget = x, !xe.__hasExternalTextures) {
      const te = Math.max(1, x.width >> V), Ae = Math.max(1, x.height >> V);
      Z === i.TEXTURE_3D || Z === i.TEXTURE_2D_ARRAY ? t.texImage3D(Z, V, be, te, Ae, x.depth, 0, _e, oe, null) : t.texImage2D(Z, V, be, te, Ae, 0, _e, oe, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, b), me(x) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, H, Z, $.__webglTexture, 0, et(x)) : (Z === i.TEXTURE_2D || Z >= i.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, H, Z, $.__webglTexture, V), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Le(b, x, N) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, b), x.depthBuffer) {
      const H = x.depthTexture, Z = H && H.isDepthTexture ? H.type : null, V = w(x.stencilBuffer, Z), _e = x.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, oe = et(x);
      me(x) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, oe, V, x.width, x.height) : N ? i.renderbufferStorageMultisample(i.RENDERBUFFER, oe, V, x.width, x.height) : i.renderbufferStorage(i.RENDERBUFFER, V, x.width, x.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, _e, i.RENDERBUFFER, b);
    } else {
      const H = x.textures;
      for (let Z = 0; Z < H.length; Z++) {
        const V = H[Z], _e = r.convert(V.format, V.colorSpace), oe = r.convert(V.type), be = E(V.internalFormat, _e, oe, V.colorSpace), xe = et(x);
        N && me(x) === false ? i.renderbufferStorageMultisample(i.RENDERBUFFER, xe, be, x.width, x.height) : me(x) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, xe, be, x.width, x.height) : i.renderbufferStorage(i.RENDERBUFFER, be, x.width, x.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function ge(b, x) {
    if (x && x.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i.FRAMEBUFFER, b), !(x.depthTexture && x.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const H = n.get(x.depthTexture);
    H.__renderTarget = x, (!H.__webglTexture || x.depthTexture.image.width !== x.width || x.depthTexture.image.height !== x.height) && (x.depthTexture.image.width = x.width, x.depthTexture.image.height = x.height, x.depthTexture.needsUpdate = true), W(x.depthTexture, 0);
    const Z = H.__webglTexture, V = et(x);
    if (x.depthTexture.format === wi) me(x) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Z, 0, V) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Z, 0);
    else if (x.depthTexture.format === Ri) me(x) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Z, 0, V) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Z, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function Be(b) {
    const x = n.get(b), N = b.isWebGLCubeRenderTarget === true;
    if (x.__boundDepthTexture !== b.depthTexture) {
      const H = b.depthTexture;
      if (x.__depthDisposeCallback && x.__depthDisposeCallback(), H) {
        const Z = () => {
          delete x.__boundDepthTexture, delete x.__depthDisposeCallback, H.removeEventListener("dispose", Z);
        };
        H.addEventListener("dispose", Z), x.__depthDisposeCallback = Z;
      }
      x.__boundDepthTexture = H;
    }
    if (b.depthTexture && !x.__autoAllocateDepthBuffer) {
      if (N) throw new Error("target.depthTexture not supported in Cube render targets");
      const H = b.texture.mipmaps;
      H && H.length > 0 ? ge(x.__webglFramebuffer[0], b) : ge(x.__webglFramebuffer, b);
    } else if (N) {
      x.__webglDepthbuffer = [];
      for (let H = 0; H < 6; H++) if (t.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer[H]), x.__webglDepthbuffer[H] === void 0) x.__webglDepthbuffer[H] = i.createRenderbuffer(), Le(x.__webglDepthbuffer[H], b, false);
      else {
        const Z = b.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, V = x.__webglDepthbuffer[H];
        i.bindRenderbuffer(i.RENDERBUFFER, V), i.framebufferRenderbuffer(i.FRAMEBUFFER, Z, i.RENDERBUFFER, V);
      }
    } else {
      const H = b.texture.mipmaps;
      if (H && H.length > 0 ? t.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer[0]) : t.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer), x.__webglDepthbuffer === void 0) x.__webglDepthbuffer = i.createRenderbuffer(), Le(x.__webglDepthbuffer, b, false);
      else {
        const Z = b.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, V = x.__webglDepthbuffer;
        i.bindRenderbuffer(i.RENDERBUFFER, V), i.framebufferRenderbuffer(i.FRAMEBUFFER, Z, i.RENDERBUFFER, V);
      }
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function xt(b, x, N) {
    const H = n.get(b);
    x !== void 0 && de(H.__webglFramebuffer, b, b.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), N !== void 0 && Be(b);
  }
  function Fe(b) {
    const x = b.texture, N = n.get(b), H = n.get(x);
    b.addEventListener("dispose", C);
    const Z = b.textures, V = b.isWebGLCubeRenderTarget === true, _e = Z.length > 1;
    if (_e || (H.__webglTexture === void 0 && (H.__webglTexture = i.createTexture()), H.__version = x.version, a.memory.textures++), V) {
      N.__webglFramebuffer = [];
      for (let oe = 0; oe < 6; oe++) if (x.mipmaps && x.mipmaps.length > 0) {
        N.__webglFramebuffer[oe] = [];
        for (let be = 0; be < x.mipmaps.length; be++) N.__webglFramebuffer[oe][be] = i.createFramebuffer();
      } else N.__webglFramebuffer[oe] = i.createFramebuffer();
    } else {
      if (x.mipmaps && x.mipmaps.length > 0) {
        N.__webglFramebuffer = [];
        for (let oe = 0; oe < x.mipmaps.length; oe++) N.__webglFramebuffer[oe] = i.createFramebuffer();
      } else N.__webglFramebuffer = i.createFramebuffer();
      if (_e) for (let oe = 0, be = Z.length; oe < be; oe++) {
        const xe = n.get(Z[oe]);
        xe.__webglTexture === void 0 && (xe.__webglTexture = i.createTexture(), a.memory.textures++);
      }
      if (b.samples > 0 && me(b) === false) {
        N.__webglMultisampledFramebuffer = i.createFramebuffer(), N.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, N.__webglMultisampledFramebuffer);
        for (let oe = 0; oe < Z.length; oe++) {
          const be = Z[oe];
          N.__webglColorRenderbuffer[oe] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, N.__webglColorRenderbuffer[oe]);
          const xe = r.convert(be.format, be.colorSpace), $ = r.convert(be.type), te = E(be.internalFormat, xe, $, be.colorSpace, b.isXRRenderTarget === true), Ae = et(b);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, Ae, te, b.width, b.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + oe, i.RENDERBUFFER, N.__webglColorRenderbuffer[oe]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), b.depthBuffer && (N.__webglDepthRenderbuffer = i.createRenderbuffer(), Le(N.__webglDepthRenderbuffer, b, true)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (V) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, H.__webglTexture), ke(i.TEXTURE_CUBE_MAP, x);
      for (let oe = 0; oe < 6; oe++) if (x.mipmaps && x.mipmaps.length > 0) for (let be = 0; be < x.mipmaps.length; be++) de(N.__webglFramebuffer[oe][be], b, x, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + oe, be);
      else de(N.__webglFramebuffer[oe], b, x, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + oe, 0);
      p(x) && h(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (_e) {
      for (let oe = 0, be = Z.length; oe < be; oe++) {
        const xe = Z[oe], $ = n.get(xe);
        let te = i.TEXTURE_2D;
        (b.isWebGL3DRenderTarget || b.isWebGLArrayRenderTarget) && (te = b.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(te, $.__webglTexture), ke(te, xe), de(N.__webglFramebuffer, b, xe, i.COLOR_ATTACHMENT0 + oe, te, 0), p(xe) && h(te);
      }
      t.unbindTexture();
    } else {
      let oe = i.TEXTURE_2D;
      if ((b.isWebGL3DRenderTarget || b.isWebGLArrayRenderTarget) && (oe = b.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(oe, H.__webglTexture), ke(oe, x), x.mipmaps && x.mipmaps.length > 0) for (let be = 0; be < x.mipmaps.length; be++) de(N.__webglFramebuffer[be], b, x, i.COLOR_ATTACHMENT0, oe, be);
      else de(N.__webglFramebuffer, b, x, i.COLOR_ATTACHMENT0, oe, 0);
      p(x) && h(oe), t.unbindTexture();
    }
    b.depthBuffer && Be(b);
  }
  function nt(b) {
    const x = b.textures;
    for (let N = 0, H = x.length; N < H; N++) {
      const Z = x[N];
      if (p(Z)) {
        const V = T(b), _e = n.get(Z).__webglTexture;
        t.bindTexture(V, _e), h(V), t.unbindTexture();
      }
    }
  }
  const A = [], ze = [];
  function Ve(b) {
    if (b.samples > 0) {
      if (me(b) === false) {
        const x = b.textures, N = b.width, H = b.height;
        let Z = i.COLOR_BUFFER_BIT;
        const V = b.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, _e = n.get(b), oe = x.length > 1;
        if (oe) for (let xe = 0; xe < x.length; xe++) t.bindFramebuffer(i.FRAMEBUFFER, _e.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xe, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, _e.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xe, i.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i.READ_FRAMEBUFFER, _e.__webglMultisampledFramebuffer);
        const be = b.texture.mipmaps;
        be && be.length > 0 ? t.bindFramebuffer(i.DRAW_FRAMEBUFFER, _e.__webglFramebuffer[0]) : t.bindFramebuffer(i.DRAW_FRAMEBUFFER, _e.__webglFramebuffer);
        for (let xe = 0; xe < x.length; xe++) {
          if (b.resolveDepthBuffer && (b.depthBuffer && (Z |= i.DEPTH_BUFFER_BIT), b.stencilBuffer && b.resolveStencilBuffer && (Z |= i.STENCIL_BUFFER_BIT)), oe) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, _e.__webglColorRenderbuffer[xe]);
            const $ = n.get(x[xe]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, $, 0);
          }
          i.blitFramebuffer(0, 0, N, H, 0, 0, N, H, Z, i.NEAREST), l === true && (A.length = 0, ze.length = 0, A.push(i.COLOR_ATTACHMENT0 + xe), b.depthBuffer && b.resolveDepthBuffer === false && (A.push(V), ze.push(V), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, ze)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, A));
        }
        if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), oe) for (let xe = 0; xe < x.length; xe++) {
          t.bindFramebuffer(i.FRAMEBUFFER, _e.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xe, i.RENDERBUFFER, _e.__webglColorRenderbuffer[xe]);
          const $ = n.get(x[xe]).__webglTexture;
          t.bindFramebuffer(i.FRAMEBUFFER, _e.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xe, i.TEXTURE_2D, $, 0);
        }
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, _e.__webglMultisampledFramebuffer);
      } else if (b.depthBuffer && b.resolveDepthBuffer === false && l) {
        const x = b.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [x]);
      }
    }
  }
  function et(b) {
    return Math.min(s.maxSamples, b.samples);
  }
  function me(b) {
    const x = n.get(b);
    return b.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === true && x.__useRenderToTexture !== false;
  }
  function it(b) {
    const x = a.render.frame;
    u.get(b) !== x && (u.set(b, x), b.update());
  }
  function Me(b, x) {
    const N = b.colorSpace, H = b.format, Z = b.type;
    return b.isCompressedTexture === true || b.isVideoTexture === true || N !== hi && N !== Sn && (Xe.getTransfer(N) === Ze ? (H !== Xt || Z !== un) && Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : lt("WebGLTextures: Unsupported texture color space:", N)), x;
  }
  function De(b) {
    return typeof HTMLImageElement < "u" && b instanceof HTMLImageElement ? (c.width = b.naturalWidth || b.width, c.height = b.naturalHeight || b.height) : typeof VideoFrame < "u" && b instanceof VideoFrame ? (c.width = b.displayWidth, c.height = b.displayHeight) : (c.width = b.width, c.height = b.height), c;
  }
  this.allocateTextureUnit = G, this.resetTextureUnits = z, this.setTexture2D = W, this.setTexture2DArray = K, this.setTexture3D = J, this.setTextureCube = k, this.rebindTextures = xt, this.setupRenderTarget = Fe, this.updateRenderTargetMipmap = nt, this.updateMultisampleRenderTarget = Ve, this.setupDepthRenderbuffer = Be, this.setupFrameBufferTexture = de, this.useMultisampledRTT = me;
}
function hp(i, e) {
  function t(n, s = Sn) {
    let r;
    const a = Xe.getTransfer(s);
    if (n === un) return i.UNSIGNED_BYTE;
    if (n === jr) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === $r) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === bo) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Eo) return i.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === Mo) return i.BYTE;
    if (n === So) return i.SHORT;
    if (n === Ti) return i.UNSIGNED_SHORT;
    if (n === Zr) return i.INT;
    if (n === zn) return i.UNSIGNED_INT;
    if (n === cn) return i.FLOAT;
    if (n === di) return i.HALF_FLOAT;
    if (n === yo) return i.ALPHA;
    if (n === To) return i.RGB;
    if (n === Xt) return i.RGBA;
    if (n === wi) return i.DEPTH_COMPONENT;
    if (n === Ri) return i.DEPTH_STENCIL;
    if (n === Ao) return i.RED;
    if (n === Jr) return i.RED_INTEGER;
    if (n === Qr) return i.RG;
    if (n === ea) return i.RG_INTEGER;
    if (n === ta) return i.RGBA_INTEGER;
    if (n === os || n === cs || n === ls || n === hs) if (a === Ze) if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
      if (n === os) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (n === cs) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (n === ls) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (n === hs) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (r = e.get("WEBGL_compressed_texture_s3tc"), r !== null) {
      if (n === os) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (n === cs) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (n === ls) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (n === hs) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (n === xr || n === _r || n === gr || n === vr) if (r = e.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
      if (n === xr) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (n === _r) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (n === gr) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (n === vr) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (n === Mr || n === Sr || n === br) if (r = e.get("WEBGL_compressed_texture_etc"), r !== null) {
      if (n === Mr || n === Sr) return a === Ze ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
      if (n === br) return a === Ze ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
    } else return null;
    if (n === Er || n === yr || n === Tr || n === Ar || n === wr || n === Rr || n === Cr || n === Pr || n === Dr || n === Lr || n === Ur || n === Ir || n === Nr || n === Fr) if (r = e.get("WEBGL_compressed_texture_astc"), r !== null) {
      if (n === Er) return a === Ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (n === yr) return a === Ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (n === Tr) return a === Ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (n === Ar) return a === Ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (n === wr) return a === Ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (n === Rr) return a === Ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (n === Cr) return a === Ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (n === Pr) return a === Ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (n === Dr) return a === Ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (n === Lr) return a === Ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (n === Ur) return a === Ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (n === Ir) return a === Ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (n === Nr) return a === Ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (n === Fr) return a === Ze ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (n === Or || n === Br || n === zr) if (r = e.get("EXT_texture_compression_bptc"), r !== null) {
      if (n === Or) return a === Ze ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (n === Br) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (n === zr) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (n === Vr || n === Gr || n === kr || n === Hr) if (r = e.get("EXT_texture_compression_rgtc"), r !== null) {
      if (n === Vr) return r.COMPRESSED_RED_RGTC1_EXT;
      if (n === Gr) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (n === kr) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (n === Hr) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return n === Ai ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
const up = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, dp = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class fp {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t) {
    if (this.texture === null) {
      const n = new ko(e.texture);
      (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = n;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new fn({ vertexShader: up, fragmentShader: dp, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t.z }, depthHeight: { value: t.w } } });
      this.mesh = new Tn(new Ms(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class pp extends Gn {
  constructor(e, t) {
    super();
    const n = this;
    let s = null, r = 1, a = null, o = "local-floor", l = 1, c = null, u = null, d = null, f = null, m = null, _ = null;
    const g = typeof XRWebGLBinding < "u", p = new fp(), h = {}, T = t.getContextAttributes();
    let E = null, w = null;
    const D = [], y = [], C = new Ne();
    let B = null;
    const S = new Bt();
    S.viewport = new ht();
    const M = new Bt();
    M.viewport = new ht();
    const P = [S, M], z = new Pl();
    let G = null, Y = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(X) {
      let j = D[X];
      return j === void 0 && (j = new Ys(), D[X] = j), j.getTargetRaySpace();
    }, this.getControllerGrip = function(X) {
      let j = D[X];
      return j === void 0 && (j = new Ys(), D[X] = j), j.getGripSpace();
    }, this.getHand = function(X) {
      let j = D[X];
      return j === void 0 && (j = new Ys(), D[X] = j), j.getHandSpace();
    };
    function W(X) {
      const j = y.indexOf(X.inputSource);
      if (j === -1) return;
      const de = D[j];
      de !== void 0 && (de.update(X.inputSource, X.frame, c || a), de.dispatchEvent({ type: X.type, data: X.inputSource }));
    }
    function K() {
      s.removeEventListener("select", W), s.removeEventListener("selectstart", W), s.removeEventListener("selectend", W), s.removeEventListener("squeeze", W), s.removeEventListener("squeezestart", W), s.removeEventListener("squeezeend", W), s.removeEventListener("end", K), s.removeEventListener("inputsourceschange", J);
      for (let X = 0; X < D.length; X++) {
        const j = y[X];
        j !== null && (y[X] = null, D[X].disconnect(j));
      }
      G = null, Y = null, p.reset();
      for (const X in h) delete h[X];
      e.setRenderTarget(E), m = null, f = null, d = null, s = null, w = null, Qe.stop(), n.isPresenting = false, e.setPixelRatio(B), e.setSize(C.width, C.height, false), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(X) {
      r = X, n.isPresenting === true && Ce("WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(X) {
      o = X, n.isPresenting === true && Ce("WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(X) {
      c = X;
    }, this.getBaseLayer = function() {
      return f !== null ? f : m;
    }, this.getBinding = function() {
      return d === null && g && (d = new XRWebGLBinding(s, t)), d;
    }, this.getFrame = function() {
      return _;
    }, this.getSession = function() {
      return s;
    }, this.setSession = async function(X) {
      if (s = X, s !== null) {
        if (E = e.getRenderTarget(), s.addEventListener("select", W), s.addEventListener("selectstart", W), s.addEventListener("selectend", W), s.addEventListener("squeeze", W), s.addEventListener("squeezestart", W), s.addEventListener("squeezeend", W), s.addEventListener("end", K), s.addEventListener("inputsourceschange", J), T.xrCompatible !== true && await t.makeXRCompatible(), B = e.getPixelRatio(), e.getSize(C), g && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let de = null, Le = null, ge = null;
          T.depth && (ge = T.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, de = T.stencil ? Ri : wi, Le = T.stencil ? Ai : zn);
          const Be = { colorFormat: t.RGBA8, depthFormat: ge, scaleFactor: r };
          d = this.getBinding(), f = d.createProjectionLayer(Be), s.updateRenderState({ layers: [f] }), e.setPixelRatio(1), e.setSize(f.textureWidth, f.textureHeight, false), w = new Vn(f.textureWidth, f.textureHeight, { format: Xt, type: un, depthTexture: new Go(f.textureWidth, f.textureHeight, Le, void 0, void 0, void 0, void 0, void 0, void 0, de), stencilBuffer: T.stencil, colorSpace: e.outputColorSpace, samples: T.antialias ? 4 : 0, resolveDepthBuffer: f.ignoreDepthValues === false, resolveStencilBuffer: f.ignoreDepthValues === false });
        } else {
          const de = { antialias: T.antialias, alpha: true, depth: T.depth, stencil: T.stencil, framebufferScaleFactor: r };
          m = new XRWebGLLayer(s, t, de), s.updateRenderState({ baseLayer: m }), e.setPixelRatio(1), e.setSize(m.framebufferWidth, m.framebufferHeight, false), w = new Vn(m.framebufferWidth, m.framebufferHeight, { format: Xt, type: un, colorSpace: e.outputColorSpace, stencilBuffer: T.stencil, resolveDepthBuffer: m.ignoreDepthValues === false, resolveStencilBuffer: m.ignoreDepthValues === false });
        }
        w.isXRRenderTarget = true, this.setFoveation(l), c = null, a = await s.requestReferenceSpace(o), Qe.setContext(s), Qe.start(), n.isPresenting = true, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (s !== null) return s.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return p.getDepthTexture();
    };
    function J(X) {
      for (let j = 0; j < X.removed.length; j++) {
        const de = X.removed[j], Le = y.indexOf(de);
        Le >= 0 && (y[Le] = null, D[Le].disconnect(de));
      }
      for (let j = 0; j < X.added.length; j++) {
        const de = X.added[j];
        let Le = y.indexOf(de);
        if (Le === -1) {
          for (let Be = 0; Be < D.length; Be++) if (Be >= y.length) {
            y.push(de), Le = Be;
            break;
          } else if (y[Be] === null) {
            y[Be] = de, Le = Be;
            break;
          }
          if (Le === -1) break;
        }
        const ge = D[Le];
        ge && ge.connect(de);
      }
    }
    const k = new I(), ne = new I();
    function re(X, j, de) {
      k.setFromMatrixPosition(j.matrixWorld), ne.setFromMatrixPosition(de.matrixWorld);
      const Le = k.distanceTo(ne), ge = j.projectionMatrix.elements, Be = de.projectionMatrix.elements, xt = ge[14] / (ge[10] - 1), Fe = ge[14] / (ge[10] + 1), nt = (ge[9] + 1) / ge[5], A = (ge[9] - 1) / ge[5], ze = (ge[8] - 1) / ge[0], Ve = (Be[8] + 1) / Be[0], et = xt * ze, me = xt * Ve, it = Le / (-ze + Ve), Me = it * -ze;
      if (j.matrixWorld.decompose(X.position, X.quaternion, X.scale), X.translateX(Me), X.translateZ(it), X.matrixWorld.compose(X.position, X.quaternion, X.scale), X.matrixWorldInverse.copy(X.matrixWorld).invert(), ge[10] === -1) X.projectionMatrix.copy(j.projectionMatrix), X.projectionMatrixInverse.copy(j.projectionMatrixInverse);
      else {
        const De = xt + it, b = Fe + it, x = et - Me, N = me + (Le - Me), H = nt * Fe / b * De, Z = A * Fe / b * De;
        X.projectionMatrix.makePerspective(x, N, H, Z, De, b), X.projectionMatrixInverse.copy(X.projectionMatrix).invert();
      }
    }
    function Se(X, j) {
      j === null ? X.matrixWorld.copy(X.matrix) : X.matrixWorld.multiplyMatrices(j.matrixWorld, X.matrix), X.matrixWorldInverse.copy(X.matrixWorld).invert();
    }
    this.updateCamera = function(X) {
      if (s === null) return;
      let j = X.near, de = X.far;
      p.texture !== null && (p.depthNear > 0 && (j = p.depthNear), p.depthFar > 0 && (de = p.depthFar)), z.near = M.near = S.near = j, z.far = M.far = S.far = de, (G !== z.near || Y !== z.far) && (s.updateRenderState({ depthNear: z.near, depthFar: z.far }), G = z.near, Y = z.far), z.layers.mask = X.layers.mask | 6, S.layers.mask = z.layers.mask & 3, M.layers.mask = z.layers.mask & 5;
      const Le = X.parent, ge = z.cameras;
      Se(z, Le);
      for (let Be = 0; Be < ge.length; Be++) Se(ge[Be], Le);
      ge.length === 2 ? re(z, S, M) : z.projectionMatrix.copy(S.projectionMatrix), ke(X, z, Le);
    };
    function ke(X, j, de) {
      de === null ? X.matrix.copy(j.matrixWorld) : (X.matrix.copy(de.matrixWorld), X.matrix.invert(), X.matrix.multiply(j.matrixWorld)), X.matrix.decompose(X.position, X.quaternion, X.scale), X.updateMatrixWorld(true), X.projectionMatrix.copy(j.projectionMatrix), X.projectionMatrixInverse.copy(j.projectionMatrixInverse), X.isPerspectiveCamera && (X.fov = Wr * 2 * Math.atan(1 / X.projectionMatrix.elements[5]), X.zoom = 1);
    }
    this.getCamera = function() {
      return z;
    }, this.getFoveation = function() {
      if (!(f === null && m === null)) return l;
    }, this.setFoveation = function(X) {
      l = X, f !== null && (f.fixedFoveation = X), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = X);
    }, this.hasDepthSensing = function() {
      return p.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return p.getMesh(z);
    }, this.getCameraTexture = function(X) {
      return h[X];
    };
    let qe = null;
    function Je(X, j) {
      if (u = j.getViewerPose(c || a), _ = j, u !== null) {
        const de = u.views;
        m !== null && (e.setRenderTargetFramebuffer(w, m.framebuffer), e.setRenderTarget(w));
        let Le = false;
        de.length !== z.cameras.length && (z.cameras.length = 0, Le = true);
        for (let Fe = 0; Fe < de.length; Fe++) {
          const nt = de[Fe];
          let A = null;
          if (m !== null) A = m.getViewport(nt);
          else {
            const Ve = d.getViewSubImage(f, nt);
            A = Ve.viewport, Fe === 0 && (e.setRenderTargetTextures(w, Ve.colorTexture, Ve.depthStencilTexture), e.setRenderTarget(w));
          }
          let ze = P[Fe];
          ze === void 0 && (ze = new Bt(), ze.layers.enable(Fe), ze.viewport = new ht(), P[Fe] = ze), ze.matrix.fromArray(nt.transform.matrix), ze.matrix.decompose(ze.position, ze.quaternion, ze.scale), ze.projectionMatrix.fromArray(nt.projectionMatrix), ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(), ze.viewport.set(A.x, A.y, A.width, A.height), Fe === 0 && (z.matrix.copy(ze.matrix), z.matrix.decompose(z.position, z.quaternion, z.scale)), Le === true && z.cameras.push(ze);
        }
        const ge = s.enabledFeatures;
        if (ge && ge.includes("depth-sensing") && s.depthUsage == "gpu-optimized" && g) {
          d = n.getBinding();
          const Fe = d.getDepthInformation(de[0]);
          Fe && Fe.isValid && Fe.texture && p.init(Fe, s.renderState);
        }
        if (ge && ge.includes("camera-access") && g) {
          e.state.unbindTexture(), d = n.getBinding();
          for (let Fe = 0; Fe < de.length; Fe++) {
            const nt = de[Fe].camera;
            if (nt) {
              let A = h[nt];
              A || (A = new ko(), h[nt] = A);
              const ze = d.getCameraImage(nt);
              A.sourceTexture = ze;
            }
          }
        }
      }
      for (let de = 0; de < D.length; de++) {
        const Le = y[de], ge = D[de];
        Le !== null && ge !== void 0 && ge.update(Le, j, c || a);
      }
      qe && qe(X, j), j.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: j }), _ = null;
    }
    const Qe = new Ho();
    Qe.setAnimationLoop(Je), this.setAnimationLoop = function(X) {
      qe = X;
    }, this.dispose = function() {
    };
  }
}
const Un = new dn(), mp = new at();
function xp(i, e) {
  function t(p, h) {
    p.matrixAutoUpdate === true && p.updateMatrix(), h.value.copy(p.matrix);
  }
  function n(p, h) {
    h.color.getRGB(p.fogColor.value, No(i)), h.isFog ? (p.fogNear.value = h.near, p.fogFar.value = h.far) : h.isFogExp2 && (p.fogDensity.value = h.density);
  }
  function s(p, h, T, E, w) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial ? r(p, h) : h.isMeshToonMaterial ? (r(p, h), d(p, h)) : h.isMeshPhongMaterial ? (r(p, h), u(p, h)) : h.isMeshStandardMaterial ? (r(p, h), f(p, h), h.isMeshPhysicalMaterial && m(p, h, w)) : h.isMeshMatcapMaterial ? (r(p, h), _(p, h)) : h.isMeshDepthMaterial ? r(p, h) : h.isMeshDistanceMaterial ? (r(p, h), g(p, h)) : h.isMeshNormalMaterial ? r(p, h) : h.isLineBasicMaterial ? (a(p, h), h.isLineDashedMaterial && o(p, h)) : h.isPointsMaterial ? l(p, h, T, E) : h.isSpriteMaterial ? c(p, h) : h.isShadowMaterial ? (p.color.value.copy(h.color), p.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = false);
  }
  function r(p, h) {
    p.opacity.value = h.opacity, h.color && p.diffuse.value.copy(h.color), h.emissive && p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (p.map.value = h.map, t(h.map, p.mapTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, t(h.alphaMap, p.alphaMapTransform)), h.bumpMap && (p.bumpMap.value = h.bumpMap, t(h.bumpMap, p.bumpMapTransform), p.bumpScale.value = h.bumpScale, h.side === wt && (p.bumpScale.value *= -1)), h.normalMap && (p.normalMap.value = h.normalMap, t(h.normalMap, p.normalMapTransform), p.normalScale.value.copy(h.normalScale), h.side === wt && p.normalScale.value.negate()), h.displacementMap && (p.displacementMap.value = h.displacementMap, t(h.displacementMap, p.displacementMapTransform), p.displacementScale.value = h.displacementScale, p.displacementBias.value = h.displacementBias), h.emissiveMap && (p.emissiveMap.value = h.emissiveMap, t(h.emissiveMap, p.emissiveMapTransform)), h.specularMap && (p.specularMap.value = h.specularMap, t(h.specularMap, p.specularMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
    const T = e.get(h), E = T.envMap, w = T.envMapRotation;
    E && (p.envMap.value = E, Un.copy(w), Un.x *= -1, Un.y *= -1, Un.z *= -1, E.isCubeTexture && E.isRenderTargetTexture === false && (Un.y *= -1, Un.z *= -1), p.envMapRotation.value.setFromMatrix4(mp.makeRotationFromEuler(Un)), p.flipEnvMap.value = E.isCubeTexture && E.isRenderTargetTexture === false ? -1 : 1, p.reflectivity.value = h.reflectivity, p.ior.value = h.ior, p.refractionRatio.value = h.refractionRatio), h.lightMap && (p.lightMap.value = h.lightMap, p.lightMapIntensity.value = h.lightMapIntensity, t(h.lightMap, p.lightMapTransform)), h.aoMap && (p.aoMap.value = h.aoMap, p.aoMapIntensity.value = h.aoMapIntensity, t(h.aoMap, p.aoMapTransform));
  }
  function a(p, h) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, h.map && (p.map.value = h.map, t(h.map, p.mapTransform));
  }
  function o(p, h) {
    p.dashSize.value = h.dashSize, p.totalSize.value = h.dashSize + h.gapSize, p.scale.value = h.scale;
  }
  function l(p, h, T, E) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.size.value = h.size * T, p.scale.value = E * 0.5, h.map && (p.map.value = h.map, t(h.map, p.uvTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, t(h.alphaMap, p.alphaMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function c(p, h) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.rotation.value = h.rotation, h.map && (p.map.value = h.map, t(h.map, p.mapTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, t(h.alphaMap, p.alphaMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function u(p, h) {
    p.specular.value.copy(h.specular), p.shininess.value = Math.max(h.shininess, 1e-4);
  }
  function d(p, h) {
    h.gradientMap && (p.gradientMap.value = h.gradientMap);
  }
  function f(p, h) {
    p.metalness.value = h.metalness, h.metalnessMap && (p.metalnessMap.value = h.metalnessMap, t(h.metalnessMap, p.metalnessMapTransform)), p.roughness.value = h.roughness, h.roughnessMap && (p.roughnessMap.value = h.roughnessMap, t(h.roughnessMap, p.roughnessMapTransform)), h.envMap && (p.envMapIntensity.value = h.envMapIntensity);
  }
  function m(p, h, T) {
    p.ior.value = h.ior, h.sheen > 0 && (p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), p.sheenRoughness.value = h.sheenRoughness, h.sheenColorMap && (p.sheenColorMap.value = h.sheenColorMap, t(h.sheenColorMap, p.sheenColorMapTransform)), h.sheenRoughnessMap && (p.sheenRoughnessMap.value = h.sheenRoughnessMap, t(h.sheenRoughnessMap, p.sheenRoughnessMapTransform))), h.clearcoat > 0 && (p.clearcoat.value = h.clearcoat, p.clearcoatRoughness.value = h.clearcoatRoughness, h.clearcoatMap && (p.clearcoatMap.value = h.clearcoatMap, t(h.clearcoatMap, p.clearcoatMapTransform)), h.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap, t(h.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), h.clearcoatNormalMap && (p.clearcoatNormalMap.value = h.clearcoatNormalMap, t(h.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), h.side === wt && p.clearcoatNormalScale.value.negate())), h.dispersion > 0 && (p.dispersion.value = h.dispersion), h.iridescence > 0 && (p.iridescence.value = h.iridescence, p.iridescenceIOR.value = h.iridescenceIOR, p.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1], h.iridescenceMap && (p.iridescenceMap.value = h.iridescenceMap, t(h.iridescenceMap, p.iridescenceMapTransform)), h.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = h.iridescenceThicknessMap, t(h.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), h.transmission > 0 && (p.transmission.value = h.transmission, p.transmissionSamplerMap.value = T.texture, p.transmissionSamplerSize.value.set(T.width, T.height), h.transmissionMap && (p.transmissionMap.value = h.transmissionMap, t(h.transmissionMap, p.transmissionMapTransform)), p.thickness.value = h.thickness, h.thicknessMap && (p.thicknessMap.value = h.thicknessMap, t(h.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = h.attenuationDistance, p.attenuationColor.value.copy(h.attenuationColor)), h.anisotropy > 0 && (p.anisotropyVector.value.set(h.anisotropy * Math.cos(h.anisotropyRotation), h.anisotropy * Math.sin(h.anisotropyRotation)), h.anisotropyMap && (p.anisotropyMap.value = h.anisotropyMap, t(h.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = h.specularIntensity, p.specularColor.value.copy(h.specularColor), h.specularColorMap && (p.specularColorMap.value = h.specularColorMap, t(h.specularColorMap, p.specularColorMapTransform)), h.specularIntensityMap && (p.specularIntensityMap.value = h.specularIntensityMap, t(h.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function _(p, h) {
    h.matcap && (p.matcap.value = h.matcap);
  }
  function g(p, h) {
    const T = e.get(h).light;
    p.referencePosition.value.setFromMatrixPosition(T.matrixWorld), p.nearDistance.value = T.shadow.camera.near, p.farDistance.value = T.shadow.camera.far;
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: s };
}
function _p(i, e, t, n) {
  let s = {}, r = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(T, E) {
    const w = E.program;
    n.uniformBlockBinding(T, w);
  }
  function c(T, E) {
    let w = s[T.id];
    w === void 0 && (_(T), w = u(T), s[T.id] = w, T.addEventListener("dispose", p));
    const D = E.program;
    n.updateUBOMapping(T, D);
    const y = e.render.frame;
    r[T.id] !== y && (f(T), r[T.id] = y);
  }
  function u(T) {
    const E = d();
    T.__bindingPointIndex = E;
    const w = i.createBuffer(), D = T.__size, y = T.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, w), i.bufferData(i.UNIFORM_BUFFER, D, y), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, E, w), w;
  }
  function d() {
    for (let T = 0; T < o; T++) if (a.indexOf(T) === -1) return a.push(T), T;
    return lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(T) {
    const E = s[T.id], w = T.uniforms, D = T.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, E);
    for (let y = 0, C = w.length; y < C; y++) {
      const B = Array.isArray(w[y]) ? w[y] : [w[y]];
      for (let S = 0, M = B.length; S < M; S++) {
        const P = B[S];
        if (m(P, y, S, D) === true) {
          const z = P.__offset, G = Array.isArray(P.value) ? P.value : [P.value];
          let Y = 0;
          for (let W = 0; W < G.length; W++) {
            const K = G[W], J = g(K);
            typeof K == "number" || typeof K == "boolean" ? (P.__data[0] = K, i.bufferSubData(i.UNIFORM_BUFFER, z + Y, P.__data)) : K.isMatrix3 ? (P.__data[0] = K.elements[0], P.__data[1] = K.elements[1], P.__data[2] = K.elements[2], P.__data[3] = 0, P.__data[4] = K.elements[3], P.__data[5] = K.elements[4], P.__data[6] = K.elements[5], P.__data[7] = 0, P.__data[8] = K.elements[6], P.__data[9] = K.elements[7], P.__data[10] = K.elements[8], P.__data[11] = 0) : (K.toArray(P.__data, Y), Y += J.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, z, P.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function m(T, E, w, D) {
    const y = T.value, C = E + "_" + w;
    if (D[C] === void 0) return typeof y == "number" || typeof y == "boolean" ? D[C] = y : D[C] = y.clone(), true;
    {
      const B = D[C];
      if (typeof y == "number" || typeof y == "boolean") {
        if (B !== y) return D[C] = y, true;
      } else if (B.equals(y) === false) return B.copy(y), true;
    }
    return false;
  }
  function _(T) {
    const E = T.uniforms;
    let w = 0;
    const D = 16;
    for (let C = 0, B = E.length; C < B; C++) {
      const S = Array.isArray(E[C]) ? E[C] : [E[C]];
      for (let M = 0, P = S.length; M < P; M++) {
        const z = S[M], G = Array.isArray(z.value) ? z.value : [z.value];
        for (let Y = 0, W = G.length; Y < W; Y++) {
          const K = G[Y], J = g(K), k = w % D, ne = k % J.boundary, re = k + ne;
          w += ne, re !== 0 && D - re < J.storage && (w += D - re), z.__data = new Float32Array(J.storage / Float32Array.BYTES_PER_ELEMENT), z.__offset = w, w += J.storage;
        }
      }
    }
    const y = w % D;
    return y > 0 && (w += D - y), T.__size = w, T.__cache = {}, this;
  }
  function g(T) {
    const E = { boundary: 0, storage: 0 };
    return typeof T == "number" || typeof T == "boolean" ? (E.boundary = 4, E.storage = 4) : T.isVector2 ? (E.boundary = 8, E.storage = 8) : T.isVector3 || T.isColor ? (E.boundary = 16, E.storage = 12) : T.isVector4 ? (E.boundary = 16, E.storage = 16) : T.isMatrix3 ? (E.boundary = 48, E.storage = 48) : T.isMatrix4 ? (E.boundary = 64, E.storage = 64) : T.isTexture ? Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : Ce("WebGLRenderer: Unsupported uniform value type.", T), E;
  }
  function p(T) {
    const E = T.target;
    E.removeEventListener("dispose", p);
    const w = a.indexOf(E.__bindingPointIndex);
    a.splice(w, 1), i.deleteBuffer(s[E.id]), delete s[E.id], delete r[E.id];
  }
  function h() {
    for (const T in s) i.deleteBuffer(s[T]);
    a = [], s = {}, r = {};
  }
  return { bind: l, update: c, dispose: h };
}
const gp = new Uint16Array([11481, 15204, 11534, 15171, 11808, 15015, 12385, 14843, 12894, 14716, 13396, 14600, 13693, 14483, 13976, 14366, 14237, 14171, 14405, 13961, 14511, 13770, 14605, 13598, 14687, 13444, 14760, 13305, 14822, 13066, 14876, 12857, 14923, 12675, 14963, 12517, 14997, 12379, 15025, 12230, 15049, 12023, 15070, 11843, 15086, 11687, 15100, 11551, 15111, 11433, 15120, 11330, 15127, 11217, 15132, 11060, 15135, 10922, 15138, 10801, 15139, 10695, 15139, 10600, 13012, 14923, 13020, 14917, 13064, 14886, 13176, 14800, 13349, 14666, 13513, 14526, 13724, 14398, 13960, 14230, 14200, 14020, 14383, 13827, 14488, 13651, 14583, 13491, 14667, 13348, 14740, 13132, 14803, 12908, 14856, 12713, 14901, 12542, 14938, 12394, 14968, 12241, 14992, 12017, 15010, 11822, 15024, 11654, 15034, 11507, 15041, 11380, 15044, 11269, 15044, 11081, 15042, 10913, 15037, 10764, 15031, 10635, 15023, 10520, 15014, 10419, 15003, 10330, 13657, 14676, 13658, 14673, 13670, 14660, 13698, 14622, 13750, 14547, 13834, 14442, 13956, 14317, 14112, 14093, 14291, 13889, 14407, 13704, 14499, 13538, 14586, 13389, 14664, 13201, 14733, 12966, 14792, 12758, 14842, 12577, 14882, 12418, 14915, 12272, 14940, 12033, 14959, 11826, 14972, 11646, 14980, 11490, 14983, 11355, 14983, 11212, 14979, 11008, 14971, 10830, 14961, 10675, 14950, 10540, 14936, 10420, 14923, 10315, 14909, 10204, 14894, 10041, 14089, 14460, 14090, 14459, 14096, 14452, 14112, 14431, 14141, 14388, 14186, 14305, 14252, 14130, 14341, 13941, 14399, 13756, 14467, 13585, 14539, 13430, 14610, 13272, 14677, 13026, 14737, 12808, 14790, 12617, 14833, 12449, 14869, 12303, 14896, 12065, 14916, 11845, 14929, 11655, 14937, 11490, 14939, 11347, 14936, 11184, 14930, 10970, 14921, 10783, 14912, 10621, 14900, 10480, 14885, 10356, 14867, 10247, 14848, 10062, 14827, 9894, 14805, 9745, 14400, 14208, 14400, 14206, 14402, 14198, 14406, 14174, 14415, 14122, 14427, 14035, 14444, 13913, 14469, 13767, 14504, 13613, 14548, 13463, 14598, 13324, 14651, 13082, 14704, 12858, 14752, 12658, 14795, 12483, 14831, 12330, 14860, 12106, 14881, 11875, 14895, 11675, 14903, 11501, 14905, 11351, 14903, 11178, 14900, 10953, 14892, 10757, 14880, 10589, 14865, 10442, 14847, 10313, 14827, 10162, 14805, 9965, 14782, 9792, 14757, 9642, 14731, 9507, 14562, 13883, 14562, 13883, 14563, 13877, 14566, 13862, 14570, 13830, 14576, 13773, 14584, 13689, 14595, 13582, 14613, 13461, 14637, 13336, 14668, 13120, 14704, 12897, 14741, 12695, 14776, 12516, 14808, 12358, 14835, 12150, 14856, 11910, 14870, 11701, 14878, 11519, 14882, 11361, 14884, 11187, 14880, 10951, 14871, 10748, 14858, 10572, 14842, 10418, 14823, 10286, 14801, 10099, 14777, 9897, 14751, 9722, 14725, 9567, 14696, 9430, 14666, 9309, 14702, 13604, 14702, 13604, 14702, 13600, 14703, 13591, 14705, 13570, 14707, 13533, 14709, 13477, 14712, 13400, 14718, 13305, 14727, 13106, 14743, 12907, 14762, 12716, 14784, 12539, 14807, 12380, 14827, 12190, 14844, 11943, 14855, 11727, 14863, 11539, 14870, 11376, 14871, 11204, 14868, 10960, 14858, 10748, 14845, 10565, 14829, 10406, 14809, 10269, 14786, 10058, 14761, 9852, 14734, 9671, 14705, 9512, 14674, 9374, 14641, 9253, 14608, 9076, 14821, 13366, 14821, 13365, 14821, 13364, 14821, 13358, 14821, 13344, 14821, 13320, 14819, 13252, 14817, 13145, 14815, 13011, 14814, 12858, 14817, 12698, 14823, 12539, 14832, 12389, 14841, 12214, 14850, 11968, 14856, 11750, 14861, 11558, 14866, 11390, 14867, 11226, 14862, 10972, 14853, 10754, 14840, 10565, 14823, 10401, 14803, 10259, 14780, 10032, 14754, 9820, 14725, 9635, 14694, 9473, 14661, 9333, 14627, 9203, 14593, 8988, 14557, 8798, 14923, 13014, 14922, 13014, 14922, 13012, 14922, 13004, 14920, 12987, 14919, 12957, 14915, 12907, 14909, 12834, 14902, 12738, 14894, 12623, 14888, 12498, 14883, 12370, 14880, 12203, 14878, 11970, 14875, 11759, 14873, 11569, 14874, 11401, 14872, 11243, 14865, 10986, 14855, 10762, 14842, 10568, 14825, 10401, 14804, 10255, 14781, 10017, 14754, 9799, 14725, 9611, 14692, 9445, 14658, 9301, 14623, 9139, 14587, 8920, 14548, 8729, 14509, 8562, 15008, 12672, 15008, 12672, 15008, 12671, 15007, 12667, 15005, 12656, 15001, 12637, 14997, 12605, 14989, 12556, 14978, 12490, 14966, 12407, 14953, 12313, 14940, 12136, 14927, 11934, 14914, 11742, 14903, 11563, 14896, 11401, 14889, 11247, 14879, 10992, 14866, 10767, 14851, 10570, 14833, 10400, 14812, 10252, 14789, 10007, 14761, 9784, 14731, 9592, 14698, 9424, 14663, 9279, 14627, 9088, 14588, 8868, 14548, 8676, 14508, 8508, 14467, 8360, 15080, 12386, 15080, 12386, 15079, 12385, 15078, 12383, 15076, 12378, 15072, 12367, 15066, 12347, 15057, 12315, 15045, 12253, 15030, 12138, 15012, 11998, 14993, 11845, 14972, 11685, 14951, 11530, 14935, 11383, 14920, 11228, 14904, 10981, 14887, 10762, 14870, 10567, 14850, 10397, 14827, 10248, 14803, 9997, 14774, 9771, 14743, 9578, 14710, 9407, 14674, 9259, 14637, 9048, 14596, 8826, 14555, 8632, 14514, 8464, 14471, 8317, 14427, 8182, 15139, 12008, 15139, 12008, 15138, 12008, 15137, 12007, 15135, 12003, 15130, 11990, 15124, 11969, 15115, 11929, 15102, 11872, 15086, 11794, 15064, 11693, 15041, 11581, 15013, 11459, 14987, 11336, 14966, 11170, 14944, 10944, 14921, 10738, 14898, 10552, 14875, 10387, 14850, 10239, 14824, 9983, 14794, 9758, 14762, 9563, 14728, 9392, 14692, 9244, 14653, 9014, 14611, 8791, 14569, 8597, 14526, 8427, 14481, 8281, 14436, 8110, 14391, 7885, 15188, 11617, 15188, 11617, 15187, 11617, 15186, 11618, 15183, 11617, 15179, 11612, 15173, 11601, 15163, 11581, 15150, 11546, 15133, 11495, 15110, 11427, 15083, 11346, 15051, 11246, 15024, 11057, 14996, 10868, 14967, 10687, 14938, 10517, 14911, 10362, 14882, 10206, 14853, 9956, 14821, 9737, 14787, 9543, 14752, 9375, 14715, 9228, 14675, 8980, 14632, 8760, 14589, 8565, 14544, 8395, 14498, 8248, 14451, 8049, 14404, 7824, 14357, 7630, 15228, 11298, 15228, 11298, 15227, 11299, 15226, 11301, 15223, 11303, 15219, 11302, 15213, 11299, 15204, 11290, 15191, 11271, 15174, 11217, 15150, 11129, 15119, 11015, 15087, 10886, 15057, 10744, 15024, 10599, 14990, 10455, 14957, 10318, 14924, 10143, 14891, 9911, 14856, 9701, 14820, 9516, 14782, 9352, 14744, 9200, 14703, 8946, 14659, 8725, 14615, 8533, 14568, 8366, 14521, 8220, 14472, 7992, 14423, 7770, 14374, 7578, 14315, 7408, 15260, 10819, 15260, 10819, 15259, 10822, 15258, 10826, 15256, 10832, 15251, 10836, 15246, 10841, 15237, 10838, 15225, 10821, 15207, 10788, 15183, 10734, 15151, 10660, 15120, 10571, 15087, 10469, 15049, 10359, 15012, 10249, 14974, 10041, 14937, 9837, 14900, 9647, 14860, 9475, 14820, 9320, 14779, 9147, 14736, 8902, 14691, 8688, 14646, 8499, 14598, 8335, 14549, 8189, 14499, 7940, 14448, 7720, 14397, 7529, 14347, 7363, 14256, 7218, 15285, 10410, 15285, 10411, 15285, 10413, 15284, 10418, 15282, 10425, 15278, 10434, 15272, 10442, 15264, 10449, 15252, 10445, 15235, 10433, 15210, 10403, 15179, 10358, 15149, 10301, 15113, 10218, 15073, 10059, 15033, 9894, 14991, 9726, 14951, 9565, 14909, 9413, 14865, 9273, 14822, 9073, 14777, 8845, 14730, 8641, 14682, 8459, 14633, 8300, 14583, 8129, 14531, 7883, 14479, 7670, 14426, 7482, 14373, 7321, 14305, 7176, 14201, 6939, 15305, 9939, 15305, 9940, 15305, 9945, 15304, 9955, 15302, 9967, 15298, 9989, 15293, 10010, 15286, 10033, 15274, 10044, 15258, 10045, 15233, 10022, 15205, 9975, 15174, 9903, 15136, 9808, 15095, 9697, 15053, 9578, 15009, 9451, 14965, 9327, 14918, 9198, 14871, 8973, 14825, 8766, 14775, 8579, 14725, 8408, 14675, 8259, 14622, 8058, 14569, 7821, 14515, 7615, 14460, 7435, 14405, 7276, 14350, 7108, 14256, 6866, 14149, 6653, 15321, 9444, 15321, 9445, 15321, 9448, 15320, 9458, 15317, 9470, 15314, 9490, 15310, 9515, 15302, 9540, 15292, 9562, 15276, 9579, 15251, 9577, 15226, 9559, 15195, 9519, 15156, 9463, 15116, 9389, 15071, 9304, 15025, 9208, 14978, 9023, 14927, 8838, 14878, 8661, 14827, 8496, 14774, 8344, 14722, 8206, 14667, 7973, 14612, 7749, 14556, 7555, 14499, 7382, 14443, 7229, 14385, 7025, 14322, 6791, 14210, 6588, 14100, 6409, 15333, 8920, 15333, 8921, 15332, 8927, 15332, 8943, 15329, 8965, 15326, 9002, 15322, 9048, 15316, 9106, 15307, 9162, 15291, 9204, 15267, 9221, 15244, 9221, 15212, 9196, 15175, 9134, 15133, 9043, 15088, 8930, 15040, 8801, 14990, 8665, 14938, 8526, 14886, 8391, 14830, 8261, 14775, 8087, 14719, 7866, 14661, 7664, 14603, 7482, 14544, 7322, 14485, 7178, 14426, 6936, 14367, 6713, 14281, 6517, 14166, 6348, 14054, 6198, 15341, 8360, 15341, 8361, 15341, 8366, 15341, 8379, 15339, 8399, 15336, 8431, 15332, 8473, 15326, 8527, 15318, 8585, 15302, 8632, 15281, 8670, 15258, 8690, 15227, 8690, 15191, 8664, 15149, 8612, 15104, 8543, 15055, 8456, 15001, 8360, 14948, 8259, 14892, 8122, 14834, 7923, 14776, 7734, 14716, 7558, 14656, 7397, 14595, 7250, 14534, 7070, 14472, 6835, 14410, 6628, 14350, 6443, 14243, 6283, 14125, 6135, 14010, 5889, 15348, 7715, 15348, 7717, 15348, 7725, 15347, 7745, 15345, 7780, 15343, 7836, 15339, 7905, 15334, 8e3, 15326, 8103, 15310, 8193, 15293, 8239, 15270, 8270, 15240, 8287, 15204, 8283, 15163, 8260, 15118, 8223, 15067, 8143, 15014, 8014, 14958, 7873, 14899, 7723, 14839, 7573, 14778, 7430, 14715, 7293, 14652, 7164, 14588, 6931, 14524, 6720, 14460, 6531, 14396, 6362, 14330, 6210, 14207, 6015, 14086, 5781, 13969, 5576, 15352, 7114, 15352, 7116, 15352, 7128, 15352, 7159, 15350, 7195, 15348, 7237, 15345, 7299, 15340, 7374, 15332, 7457, 15317, 7544, 15301, 7633, 15280, 7703, 15251, 7754, 15216, 7775, 15176, 7767, 15131, 7733, 15079, 7670, 15026, 7588, 14967, 7492, 14906, 7387, 14844, 7278, 14779, 7171, 14714, 6965, 14648, 6770, 14581, 6587, 14515, 6420, 14448, 6269, 14382, 6123, 14299, 5881, 14172, 5665, 14049, 5477, 13929, 5310, 15355, 6329, 15355, 6330, 15355, 6339, 15355, 6362, 15353, 6410, 15351, 6472, 15349, 6572, 15344, 6688, 15337, 6835, 15323, 6985, 15309, 7142, 15287, 7220, 15260, 7277, 15226, 7310, 15188, 7326, 15142, 7318, 15090, 7285, 15036, 7239, 14976, 7177, 14914, 7045, 14849, 6892, 14782, 6736, 14714, 6581, 14645, 6433, 14576, 6293, 14506, 6164, 14438, 5946, 14369, 5733, 14270, 5540, 14140, 5369, 14014, 5216, 13892, 5043, 15357, 5483, 15357, 5484, 15357, 5496, 15357, 5528, 15356, 5597, 15354, 5692, 15351, 5835, 15347, 6011, 15339, 6195, 15328, 6317, 15314, 6446, 15293, 6566, 15268, 6668, 15235, 6746, 15197, 6796, 15152, 6811, 15101, 6790, 15046, 6748, 14985, 6673, 14921, 6583, 14854, 6479, 14785, 6371, 14714, 6259, 14643, 6149, 14571, 5946, 14499, 5750, 14428, 5567, 14358, 5401, 14242, 5250, 14109, 5111, 13980, 4870, 13856, 4657, 15359, 4555, 15359, 4557, 15358, 4573, 15358, 4633, 15357, 4715, 15355, 4841, 15353, 5061, 15349, 5216, 15342, 5391, 15331, 5577, 15318, 5770, 15299, 5967, 15274, 6150, 15243, 6223, 15206, 6280, 15161, 6310, 15111, 6317, 15055, 6300, 14994, 6262, 14928, 6208, 14860, 6141, 14788, 5994, 14715, 5838, 14641, 5684, 14566, 5529, 14492, 5384, 14418, 5247, 14346, 5121, 14216, 4892, 14079, 4682, 13948, 4496, 13822, 4330, 15359, 3498, 15359, 3501, 15359, 3520, 15359, 3598, 15358, 3719, 15356, 3860, 15355, 4137, 15351, 4305, 15344, 4563, 15334, 4809, 15321, 5116, 15303, 5273, 15280, 5418, 15250, 5547, 15214, 5653, 15170, 5722, 15120, 5761, 15064, 5763, 15002, 5733, 14935, 5673, 14865, 5597, 14792, 5504, 14716, 5400, 14640, 5294, 14563, 5185, 14486, 5041, 14410, 4841, 14335, 4655, 14191, 4482, 14051, 4325, 13918, 4183, 13790, 4012, 15360, 2282, 15360, 2285, 15360, 2306, 15360, 2401, 15359, 2547, 15357, 2748, 15355, 3103, 15352, 3349, 15345, 3675, 15336, 4020, 15324, 4272, 15307, 4496, 15285, 4716, 15255, 4908, 15220, 5086, 15178, 5170, 15128, 5214, 15072, 5234, 15010, 5231, 14943, 5206, 14871, 5166, 14796, 5102, 14718, 4971, 14639, 4833, 14559, 4687, 14480, 4541, 14402, 4401, 14315, 4268, 14167, 4142, 14025, 3958, 13888, 3747, 13759, 3556, 15360, 923, 15360, 925, 15360, 946, 15360, 1052, 15359, 1214, 15357, 1494, 15356, 1892, 15352, 2274, 15346, 2663, 15338, 3099, 15326, 3393, 15309, 3679, 15288, 3980, 15260, 4183, 15226, 4325, 15185, 4437, 15136, 4517, 15080, 4570, 15018, 4591, 14950, 4581, 14877, 4545, 14800, 4485, 14720, 4411, 14638, 4325, 14556, 4231, 14475, 4136, 14395, 3988, 14297, 3803, 14145, 3628, 13999, 3465, 13861, 3314, 13729, 3177, 15360, 263, 15360, 264, 15360, 272, 15360, 325, 15359, 407, 15358, 548, 15356, 780, 15352, 1144, 15347, 1580, 15339, 2099, 15328, 2425, 15312, 2795, 15292, 3133, 15264, 3329, 15232, 3517, 15191, 3689, 15143, 3819, 15088, 3923, 15025, 3978, 14956, 3999, 14882, 3979, 14804, 3931, 14722, 3855, 14639, 3756, 14554, 3645, 14470, 3529, 14388, 3409, 14279, 3289, 14124, 3173, 13975, 3055, 13834, 2848, 13701, 2658, 15360, 49, 15360, 49, 15360, 52, 15360, 75, 15359, 111, 15358, 201, 15356, 283, 15353, 519, 15348, 726, 15340, 1045, 15329, 1415, 15314, 1795, 15295, 2173, 15269, 2410, 15237, 2649, 15197, 2866, 15150, 3054, 15095, 3140, 15032, 3196, 14963, 3228, 14888, 3236, 14808, 3224, 14725, 3191, 14639, 3146, 14553, 3088, 14466, 2976, 14382, 2836, 14262, 2692, 14103, 2549, 13952, 2409, 13808, 2278, 13674, 2154, 15360, 4, 15360, 4, 15360, 4, 15360, 13, 15359, 33, 15358, 59, 15357, 112, 15353, 199, 15348, 302, 15341, 456, 15331, 628, 15316, 827, 15297, 1082, 15272, 1332, 15241, 1601, 15202, 1851, 15156, 2069, 15101, 2172, 15039, 2256, 14970, 2314, 14894, 2348, 14813, 2358, 14728, 2344, 14640, 2311, 14551, 2263, 14463, 2203, 14376, 2133, 14247, 2059, 14084, 1915, 13930, 1761, 13784, 1609, 13648, 1464, 15360, 0, 15360, 0, 15360, 0, 15360, 3, 15359, 18, 15358, 26, 15357, 53, 15354, 80, 15348, 97, 15341, 165, 15332, 238, 15318, 326, 15299, 427, 15275, 529, 15245, 654, 15207, 771, 15161, 885, 15108, 994, 15046, 1089, 14976, 1170, 14900, 1229, 14817, 1266, 14731, 1284, 14641, 1282, 14550, 1260, 14460, 1223, 14370, 1174, 14232, 1116, 14066, 1050, 13909, 981, 13761, 910, 13623, 839]);
let nn = null;
function vp() {
  return nn === null && (nn = new vl(gp, 32, 32, Qr, di), nn.minFilter = zt, nn.magFilter = zt, nn.wrapS = on, nn.wrapT = on, nn.generateMipmaps = false, nn.needsUpdate = true), nn;
}
class Mp {
  constructor(e = {}) {
    const { canvas: t = Wc(), context: n = null, depth: s = true, stencil: r = false, alpha: a = false, antialias: o = false, premultipliedAlpha: l = true, preserveDrawingBuffer: c = false, powerPreference: u = "default", failIfMajorPerformanceCaveat: d = false, reversedDepthBuffer: f = false } = e;
    this.isWebGLRenderer = true;
    let m;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      m = n.getContextAttributes().alpha;
    } else m = a;
    const _ = /* @__PURE__ */ new Set([ta, ea, Jr]), g = /* @__PURE__ */ new Set([un, zn, Ti, Ai, jr, $r]), p = new Uint32Array(4), h = new Int32Array(4);
    let T = null, E = null;
    const w = [], D = [];
    this.domElement = t, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.toneMapping = En, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const y = this;
    let C = false;
    this._outputColorSpace = Ut;
    let B = 0, S = 0, M = null, P = -1, z = null;
    const G = new ht(), Y = new ht();
    let W = null;
    const K = new He(0);
    let J = 0, k = t.width, ne = t.height, re = 1, Se = null, ke = null;
    const qe = new ht(0, 0, k, ne), Je = new ht(0, 0, k, ne);
    let Qe = false;
    const X = new Bo();
    let j = false, de = false;
    const Le = new at(), ge = new I(), Be = new ht(), xt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let Fe = false;
    function nt() {
      return M === null ? re : 1;
    }
    let A = n;
    function ze(v, L) {
      return t.getContext(v, L);
    }
    try {
      const v = { alpha: true, depth: s, stencil: r, antialias: o, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: u, failIfMajorPerformanceCaveat: d };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Kr}`), t.addEventListener("webglcontextlost", Q, false), t.addEventListener("webglcontextrestored", q, false), t.addEventListener("webglcontextcreationerror", fe, false), A === null) {
        const L = "webgl2";
        if (A = ze(L, v), A === null) throw ze(L) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (v) {
      throw v("WebGLRenderer: " + v.message), v;
    }
    let Ve, et, me, it, Me, De, b, x, N, H, Z, V, _e, oe, be, xe, $, te, Ae, ye, he, Re, R, ce;
    function ie() {
      Ve = new wd(A), Ve.init(), Re = new hp(A, Ve), et = new gd(A, Ve, e, Re), me = new cp(A, Ve), et.reversedDepthBuffer && f && me.buffers.depth.setReversed(true), it = new Pd(A), Me = new Zf(), De = new lp(A, Ve, me, Me, et, Re, it), b = new Md(y), x = new Ad(y), N = new Il(A), R = new xd(A, N), H = new Rd(A, N, it, R), Z = new Ld(A, H, N, it), Ae = new Dd(A, et, De), xe = new vd(Me), V = new Kf(y, b, x, Ve, et, R, xe), _e = new xp(y, Me), oe = new $f(), be = new ip(Ve), te = new md(y, b, x, me, Z, m, l), $ = new ap(y, Z, et), ce = new _p(A, it, et, me), ye = new _d(A, Ve, it), he = new Cd(A, Ve, it), it.programs = V.programs, y.capabilities = et, y.extensions = Ve, y.properties = Me, y.renderLists = oe, y.shadowMap = $, y.state = me, y.info = it;
    }
    ie();
    const se = new pp(y, A);
    this.xr = se, this.getContext = function() {
      return A;
    }, this.getContextAttributes = function() {
      return A.getContextAttributes();
    }, this.forceContextLoss = function() {
      const v = Ve.get("WEBGL_lose_context");
      v && v.loseContext();
    }, this.forceContextRestore = function() {
      const v = Ve.get("WEBGL_lose_context");
      v && v.restoreContext();
    }, this.getPixelRatio = function() {
      return re;
    }, this.setPixelRatio = function(v) {
      v !== void 0 && (re = v, this.setSize(k, ne, false));
    }, this.getSize = function(v) {
      return v.set(k, ne);
    }, this.setSize = function(v, L, F = true) {
      if (se.isPresenting) {
        Ce("WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      k = v, ne = L, t.width = Math.floor(v * re), t.height = Math.floor(L * re), F === true && (t.style.width = v + "px", t.style.height = L + "px"), this.setViewport(0, 0, v, L);
    }, this.getDrawingBufferSize = function(v) {
      return v.set(k * re, ne * re).floor();
    }, this.setDrawingBufferSize = function(v, L, F) {
      k = v, ne = L, re = F, t.width = Math.floor(v * F), t.height = Math.floor(L * F), this.setViewport(0, 0, v, L);
    }, this.getCurrentViewport = function(v) {
      return v.copy(G);
    }, this.getViewport = function(v) {
      return v.copy(qe);
    }, this.setViewport = function(v, L, F, O) {
      v.isVector4 ? qe.set(v.x, v.y, v.z, v.w) : qe.set(v, L, F, O), me.viewport(G.copy(qe).multiplyScalar(re).round());
    }, this.getScissor = function(v) {
      return v.copy(Je);
    }, this.setScissor = function(v, L, F, O) {
      v.isVector4 ? Je.set(v.x, v.y, v.z, v.w) : Je.set(v, L, F, O), me.scissor(Y.copy(Je).multiplyScalar(re).round());
    }, this.getScissorTest = function() {
      return Qe;
    }, this.setScissorTest = function(v) {
      me.setScissorTest(Qe = v);
    }, this.setOpaqueSort = function(v) {
      Se = v;
    }, this.setTransparentSort = function(v) {
      ke = v;
    }, this.getClearColor = function(v) {
      return v.copy(te.getClearColor());
    }, this.setClearColor = function() {
      te.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return te.getClearAlpha();
    }, this.setClearAlpha = function() {
      te.setClearAlpha(...arguments);
    }, this.clear = function(v = true, L = true, F = true) {
      let O = 0;
      if (v) {
        let U = false;
        if (M !== null) {
          const ee = M.texture.format;
          U = _.has(ee);
        }
        if (U) {
          const ee = M.texture.type, le = g.has(ee), pe = te.getClearColor(), ue = te.getClearAlpha(), Te = pe.r, we = pe.g, ve = pe.b;
          le ? (p[0] = Te, p[1] = we, p[2] = ve, p[3] = ue, A.clearBufferuiv(A.COLOR, 0, p)) : (h[0] = Te, h[1] = we, h[2] = ve, h[3] = ue, A.clearBufferiv(A.COLOR, 0, h));
        } else O |= A.COLOR_BUFFER_BIT;
      }
      L && (O |= A.DEPTH_BUFFER_BIT), F && (O |= A.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), A.clear(O);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", Q, false), t.removeEventListener("webglcontextrestored", q, false), t.removeEventListener("webglcontextcreationerror", fe, false), te.dispose(), oe.dispose(), be.dispose(), Me.dispose(), b.dispose(), x.dispose(), Z.dispose(), R.dispose(), ce.dispose(), V.dispose(), se.dispose(), se.removeEventListener("sessionstart", ra), se.removeEventListener("sessionend", aa), An.stop();
    };
    function Q(v) {
      v.preventDefault(), va("WebGLRenderer: Context Lost."), C = true;
    }
    function q() {
      va("WebGLRenderer: Context Restored."), C = false;
      const v = it.autoReset, L = $.enabled, F = $.autoUpdate, O = $.needsUpdate, U = $.type;
      ie(), it.autoReset = v, $.enabled = L, $.autoUpdate = F, $.needsUpdate = O, $.type = U;
    }
    function fe(v) {
      lt("WebGLRenderer: A WebGL context could not be created. Reason: ", v.statusMessage);
    }
    function Pe(v) {
      const L = v.target;
      L.removeEventListener("dispose", Pe), tt(L);
    }
    function tt(v) {
      Ye(v), Me.remove(v);
    }
    function Ye(v) {
      const L = Me.get(v).programs;
      L !== void 0 && (L.forEach(function(F) {
        V.releaseProgram(F);
      }), v.isShaderMaterial && V.releaseShaderCache(v));
    }
    this.renderBufferDirect = function(v, L, F, O, U, ee) {
      L === null && (L = xt);
      const le = U.isMesh && U.matrixWorld.determinant() < 0, pe = jo(v, L, F, O, U);
      me.setMaterial(O, le);
      let ue = F.index, Te = 1;
      if (O.wireframe === true) {
        if (ue = H.getWireframeAttribute(F), ue === void 0) return;
        Te = 2;
      }
      const we = F.drawRange, ve = F.attributes.position;
      let Ge = we.start * Te, Ke = (we.start + we.count) * Te;
      ee !== null && (Ge = Math.max(Ge, ee.start * Te), Ke = Math.min(Ke, (ee.start + ee.count) * Te)), ue !== null ? (Ge = Math.max(Ge, 0), Ke = Math.min(Ke, ue.count)) : ve != null && (Ge = Math.max(Ge, 0), Ke = Math.min(Ke, ve.count));
      const ot = Ke - Ge;
      if (ot < 0 || ot === 1 / 0) return;
      R.setup(U, O, pe, F, ue);
      let ct, $e = ye;
      if (ue !== null && (ct = N.get(ue), $e = he, $e.setIndex(ct)), U.isMesh) O.wireframe === true ? (me.setLineWidth(O.wireframeLinewidth * nt()), $e.setMode(A.LINES)) : $e.setMode(A.TRIANGLES);
      else if (U.isLine) {
        let Ee = O.linewidth;
        Ee === void 0 && (Ee = 1), me.setLineWidth(Ee * nt()), U.isLineSegments ? $e.setMode(A.LINES) : U.isLineLoop ? $e.setMode(A.LINE_LOOP) : $e.setMode(A.LINE_STRIP);
      } else U.isPoints ? $e.setMode(A.POINTS) : U.isSprite && $e.setMode(A.TRIANGLES);
      if (U.isBatchedMesh) if (U._multiDrawInstances !== null) Ci("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), $e.renderMultiDrawInstances(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount, U._multiDrawInstances);
      else if (Ve.get("WEBGL_multi_draw")) $e.renderMultiDraw(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount);
      else {
        const Ee = U._multiDrawStarts, st = U._multiDrawCounts, We = U._multiDrawCount, Ct = ue ? N.get(ue).bytesPerElement : 1, kn = Me.get(O).currentProgram.getUniforms();
        for (let Pt = 0; Pt < We; Pt++) kn.setValue(A, "_gl_DrawID", Pt), $e.render(Ee[Pt] / Ct, st[Pt]);
      }
      else if (U.isInstancedMesh) $e.renderInstances(Ge, ot, U.count);
      else if (F.isInstancedBufferGeometry) {
        const Ee = F._maxInstanceCount !== void 0 ? F._maxInstanceCount : 1 / 0, st = Math.min(F.instanceCount, Ee);
        $e.renderInstances(Ge, ot, st);
      } else $e.render(Ge, ot);
    };
    function Kt(v, L, F) {
      v.transparent === true && v.side === an && v.forceSinglePass === false ? (v.side = wt, v.needsUpdate = true, Ni(v, L, F), v.side = yn, v.needsUpdate = true, Ni(v, L, F), v.side = an) : Ni(v, L, F);
    }
    this.compile = function(v, L, F = null) {
      F === null && (F = v), E = be.get(F), E.init(L), D.push(E), F.traverseVisible(function(U) {
        U.isLight && U.layers.test(L.layers) && (E.pushLight(U), U.castShadow && E.pushShadow(U));
      }), v !== F && v.traverseVisible(function(U) {
        U.isLight && U.layers.test(L.layers) && (E.pushLight(U), U.castShadow && E.pushShadow(U));
      }), E.setupLights();
      const O = /* @__PURE__ */ new Set();
      return v.traverse(function(U) {
        if (!(U.isMesh || U.isPoints || U.isLine || U.isSprite)) return;
        const ee = U.material;
        if (ee) if (Array.isArray(ee)) for (let le = 0; le < ee.length; le++) {
          const pe = ee[le];
          Kt(pe, F, U), O.add(pe);
        }
        else Kt(ee, F, U), O.add(ee);
      }), E = D.pop(), O;
    }, this.compileAsync = function(v, L, F = null) {
      const O = this.compile(v, L, F);
      return new Promise((U) => {
        function ee() {
          if (O.forEach(function(le) {
            Me.get(le).currentProgram.isReady() && O.delete(le);
          }), O.size === 0) {
            U(v);
            return;
          }
          setTimeout(ee, 10);
        }
        Ve.get("KHR_parallel_shader_compile") !== null ? ee() : setTimeout(ee, 10);
      });
    };
    let Vt = null;
    function Zo(v) {
      Vt && Vt(v);
    }
    function ra() {
      An.stop();
    }
    function aa() {
      An.start();
    }
    const An = new Ho();
    An.setAnimationLoop(Zo), typeof self < "u" && An.setContext(self), this.setAnimationLoop = function(v) {
      Vt = v, se.setAnimationLoop(v), v === null ? An.stop() : An.start();
    }, se.addEventListener("sessionstart", ra), se.addEventListener("sessionend", aa), this.render = function(v, L) {
      if (L !== void 0 && L.isCamera !== true) {
        lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (C === true) return;
      if (v.matrixWorldAutoUpdate === true && v.updateMatrixWorld(), L.parent === null && L.matrixWorldAutoUpdate === true && L.updateMatrixWorld(), se.enabled === true && se.isPresenting === true && (se.cameraAutoUpdate === true && se.updateCamera(L), L = se.getCamera()), v.isScene === true && v.onBeforeRender(y, v, L, M), E = be.get(v, D.length), E.init(L), D.push(E), Le.multiplyMatrices(L.projectionMatrix, L.matrixWorldInverse), X.setFromProjectionMatrix(Le, jt, L.reversedDepth), de = this.localClippingEnabled, j = xe.init(this.clippingPlanes, de), T = oe.get(v, w.length), T.init(), w.push(T), se.enabled === true && se.isPresenting === true) {
        const ee = y.xr.getDepthSensingMesh();
        ee !== null && Es(ee, L, -1 / 0, y.sortObjects);
      }
      Es(v, L, 0, y.sortObjects), T.finish(), y.sortObjects === true && T.sort(Se, ke), Fe = se.enabled === false || se.isPresenting === false || se.hasDepthSensing() === false, Fe && te.addToRenderList(T, v), this.info.render.frame++, j === true && xe.beginShadows();
      const F = E.state.shadowsArray;
      $.render(F, v, L), j === true && xe.endShadows(), this.info.autoReset === true && this.info.reset();
      const O = T.opaque, U = T.transmissive;
      if (E.setupLights(), L.isArrayCamera) {
        const ee = L.cameras;
        if (U.length > 0) for (let le = 0, pe = ee.length; le < pe; le++) {
          const ue = ee[le];
          ca(O, U, v, ue);
        }
        Fe && te.render(v);
        for (let le = 0, pe = ee.length; le < pe; le++) {
          const ue = ee[le];
          oa(T, v, ue, ue.viewport);
        }
      } else U.length > 0 && ca(O, U, v, L), Fe && te.render(v), oa(T, v, L);
      M !== null && S === 0 && (De.updateMultisampleRenderTarget(M), De.updateRenderTargetMipmap(M)), v.isScene === true && v.onAfterRender(y, v, L), R.resetDefaultState(), P = -1, z = null, D.pop(), D.length > 0 ? (E = D[D.length - 1], j === true && xe.setGlobalState(y.clippingPlanes, E.state.camera)) : E = null, w.pop(), w.length > 0 ? T = w[w.length - 1] : T = null;
    };
    function Es(v, L, F, O) {
      if (v.visible === false) return;
      if (v.layers.test(L.layers)) {
        if (v.isGroup) F = v.renderOrder;
        else if (v.isLOD) v.autoUpdate === true && v.update(L);
        else if (v.isLight) E.pushLight(v), v.castShadow && E.pushShadow(v);
        else if (v.isSprite) {
          if (!v.frustumCulled || X.intersectsSprite(v)) {
            O && Be.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Le);
            const le = Z.update(v), pe = v.material;
            pe.visible && T.push(v, le, pe, F, Be.z, null);
          }
        } else if ((v.isMesh || v.isLine || v.isPoints) && (!v.frustumCulled || X.intersectsObject(v))) {
          const le = Z.update(v), pe = v.material;
          if (O && (v.boundingSphere !== void 0 ? (v.boundingSphere === null && v.computeBoundingSphere(), Be.copy(v.boundingSphere.center)) : (le.boundingSphere === null && le.computeBoundingSphere(), Be.copy(le.boundingSphere.center)), Be.applyMatrix4(v.matrixWorld).applyMatrix4(Le)), Array.isArray(pe)) {
            const ue = le.groups;
            for (let Te = 0, we = ue.length; Te < we; Te++) {
              const ve = ue[Te], Ge = pe[ve.materialIndex];
              Ge && Ge.visible && T.push(v, le, Ge, F, Be.z, ve);
            }
          } else pe.visible && T.push(v, le, pe, F, Be.z, null);
        }
      }
      const ee = v.children;
      for (let le = 0, pe = ee.length; le < pe; le++) Es(ee[le], L, F, O);
    }
    function oa(v, L, F, O) {
      const { opaque: U, transmissive: ee, transparent: le } = v;
      E.setupLightsView(F), j === true && xe.setGlobalState(y.clippingPlanes, F), O && me.viewport(G.copy(O)), U.length > 0 && Ii(U, L, F), ee.length > 0 && Ii(ee, L, F), le.length > 0 && Ii(le, L, F), me.buffers.depth.setTest(true), me.buffers.depth.setMask(true), me.buffers.color.setMask(true), me.setPolygonOffset(false);
    }
    function ca(v, L, F, O) {
      if ((F.isScene === true ? F.overrideMaterial : null) !== null) return;
      E.state.transmissionRenderTarget[O.id] === void 0 && (E.state.transmissionRenderTarget[O.id] = new Vn(1, 1, { generateMipmaps: true, type: Ve.has("EXT_color_buffer_half_float") || Ve.has("EXT_color_buffer_float") ? di : un, minFilter: On, samples: 4, stencilBuffer: r, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: Xe.workingColorSpace }));
      const ee = E.state.transmissionRenderTarget[O.id], le = O.viewport || G;
      ee.setSize(le.z * y.transmissionResolutionScale, le.w * y.transmissionResolutionScale);
      const pe = y.getRenderTarget(), ue = y.getActiveCubeFace(), Te = y.getActiveMipmapLevel();
      y.setRenderTarget(ee), y.getClearColor(K), J = y.getClearAlpha(), J < 1 && y.setClearColor(16777215, 0.5), y.clear(), Fe && te.render(F);
      const we = y.toneMapping;
      y.toneMapping = En;
      const ve = O.viewport;
      if (O.viewport !== void 0 && (O.viewport = void 0), E.setupLightsView(O), j === true && xe.setGlobalState(y.clippingPlanes, O), Ii(v, F, O), De.updateMultisampleRenderTarget(ee), De.updateRenderTargetMipmap(ee), Ve.has("WEBGL_multisampled_render_to_texture") === false) {
        let Ge = false;
        for (let Ke = 0, ot = L.length; Ke < ot; Ke++) {
          const ct = L[Ke], { object: $e, geometry: Ee, material: st, group: We } = ct;
          if (st.side === an && $e.layers.test(O.layers)) {
            const Ct = st.side;
            st.side = wt, st.needsUpdate = true, la($e, F, O, Ee, st, We), st.side = Ct, st.needsUpdate = true, Ge = true;
          }
        }
        Ge === true && (De.updateMultisampleRenderTarget(ee), De.updateRenderTargetMipmap(ee));
      }
      y.setRenderTarget(pe, ue, Te), y.setClearColor(K, J), ve !== void 0 && (O.viewport = ve), y.toneMapping = we;
    }
    function Ii(v, L, F) {
      const O = L.isScene === true ? L.overrideMaterial : null;
      for (let U = 0, ee = v.length; U < ee; U++) {
        const le = v[U], { object: pe, geometry: ue, group: Te } = le;
        let we = le.material;
        we.allowOverride === true && O !== null && (we = O), pe.layers.test(F.layers) && la(pe, L, F, ue, we, Te);
      }
    }
    function la(v, L, F, O, U, ee) {
      v.onBeforeRender(y, L, F, O, U, ee), v.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse, v.matrixWorld), v.normalMatrix.getNormalMatrix(v.modelViewMatrix), U.onBeforeRender(y, L, F, O, v, ee), U.transparent === true && U.side === an && U.forceSinglePass === false ? (U.side = wt, U.needsUpdate = true, y.renderBufferDirect(F, L, O, U, v, ee), U.side = yn, U.needsUpdate = true, y.renderBufferDirect(F, L, O, U, v, ee), U.side = an) : y.renderBufferDirect(F, L, O, U, v, ee), v.onAfterRender(y, L, F, O, U, ee);
    }
    function Ni(v, L, F) {
      L.isScene !== true && (L = xt);
      const O = Me.get(v), U = E.state.lights, ee = E.state.shadowsArray, le = U.state.version, pe = V.getParameters(v, U.state, ee, L, F), ue = V.getProgramCacheKey(pe);
      let Te = O.programs;
      O.environment = v.isMeshStandardMaterial ? L.environment : null, O.fog = L.fog, O.envMap = (v.isMeshStandardMaterial ? x : b).get(v.envMap || O.environment), O.envMapRotation = O.environment !== null && v.envMap === null ? L.environmentRotation : v.envMapRotation, Te === void 0 && (v.addEventListener("dispose", Pe), Te = /* @__PURE__ */ new Map(), O.programs = Te);
      let we = Te.get(ue);
      if (we !== void 0) {
        if (O.currentProgram === we && O.lightsStateVersion === le) return ua(v, pe), we;
      } else pe.uniforms = V.getUniforms(v), v.onBeforeCompile(pe, y), we = V.acquireProgram(pe, ue), Te.set(ue, we), O.uniforms = pe.uniforms;
      const ve = O.uniforms;
      return (!v.isShaderMaterial && !v.isRawShaderMaterial || v.clipping === true) && (ve.clippingPlanes = xe.uniform), ua(v, pe), O.needsLights = Jo(v), O.lightsStateVersion = le, O.needsLights && (ve.ambientLightColor.value = U.state.ambient, ve.lightProbe.value = U.state.probe, ve.directionalLights.value = U.state.directional, ve.directionalLightShadows.value = U.state.directionalShadow, ve.spotLights.value = U.state.spot, ve.spotLightShadows.value = U.state.spotShadow, ve.rectAreaLights.value = U.state.rectArea, ve.ltc_1.value = U.state.rectAreaLTC1, ve.ltc_2.value = U.state.rectAreaLTC2, ve.pointLights.value = U.state.point, ve.pointLightShadows.value = U.state.pointShadow, ve.hemisphereLights.value = U.state.hemi, ve.directionalShadowMap.value = U.state.directionalShadowMap, ve.directionalShadowMatrix.value = U.state.directionalShadowMatrix, ve.spotShadowMap.value = U.state.spotShadowMap, ve.spotLightMatrix.value = U.state.spotLightMatrix, ve.spotLightMap.value = U.state.spotLightMap, ve.pointShadowMap.value = U.state.pointShadowMap, ve.pointShadowMatrix.value = U.state.pointShadowMatrix), O.currentProgram = we, O.uniformsList = null, we;
    }
    function ha(v) {
      if (v.uniformsList === null) {
        const L = v.currentProgram.getUniforms();
        v.uniformsList = ds.seqWithValue(L.seq, v.uniforms);
      }
      return v.uniformsList;
    }
    function ua(v, L) {
      const F = Me.get(v);
      F.outputColorSpace = L.outputColorSpace, F.batching = L.batching, F.batchingColor = L.batchingColor, F.instancing = L.instancing, F.instancingColor = L.instancingColor, F.instancingMorph = L.instancingMorph, F.skinning = L.skinning, F.morphTargets = L.morphTargets, F.morphNormals = L.morphNormals, F.morphColors = L.morphColors, F.morphTargetsCount = L.morphTargetsCount, F.numClippingPlanes = L.numClippingPlanes, F.numIntersection = L.numClipIntersection, F.vertexAlphas = L.vertexAlphas, F.vertexTangents = L.vertexTangents, F.toneMapping = L.toneMapping;
    }
    function jo(v, L, F, O, U) {
      L.isScene !== true && (L = xt), De.resetTextureUnits();
      const ee = L.fog, le = O.isMeshStandardMaterial ? L.environment : null, pe = M === null ? y.outputColorSpace : M.isXRRenderTarget === true ? M.texture.colorSpace : hi, ue = (O.isMeshStandardMaterial ? x : b).get(O.envMap || le), Te = O.vertexColors === true && !!F.attributes.color && F.attributes.color.itemSize === 4, we = !!F.attributes.tangent && (!!O.normalMap || O.anisotropy > 0), ve = !!F.morphAttributes.position, Ge = !!F.morphAttributes.normal, Ke = !!F.morphAttributes.color;
      let ot = En;
      O.toneMapped && (M === null || M.isXRRenderTarget === true) && (ot = y.toneMapping);
      const ct = F.morphAttributes.position || F.morphAttributes.normal || F.morphAttributes.color, $e = ct !== void 0 ? ct.length : 0, Ee = Me.get(O), st = E.state.lights;
      if (j === true && (de === true || v !== z)) {
        const vt = v === z && O.id === P;
        xe.setState(O, v, vt);
      }
      let We = false;
      O.version === Ee.__version ? (Ee.needsLights && Ee.lightsStateVersion !== st.state.version || Ee.outputColorSpace !== pe || U.isBatchedMesh && Ee.batching === false || !U.isBatchedMesh && Ee.batching === true || U.isBatchedMesh && Ee.batchingColor === true && U.colorTexture === null || U.isBatchedMesh && Ee.batchingColor === false && U.colorTexture !== null || U.isInstancedMesh && Ee.instancing === false || !U.isInstancedMesh && Ee.instancing === true || U.isSkinnedMesh && Ee.skinning === false || !U.isSkinnedMesh && Ee.skinning === true || U.isInstancedMesh && Ee.instancingColor === true && U.instanceColor === null || U.isInstancedMesh && Ee.instancingColor === false && U.instanceColor !== null || U.isInstancedMesh && Ee.instancingMorph === true && U.morphTexture === null || U.isInstancedMesh && Ee.instancingMorph === false && U.morphTexture !== null || Ee.envMap !== ue || O.fog === true && Ee.fog !== ee || Ee.numClippingPlanes !== void 0 && (Ee.numClippingPlanes !== xe.numPlanes || Ee.numIntersection !== xe.numIntersection) || Ee.vertexAlphas !== Te || Ee.vertexTangents !== we || Ee.morphTargets !== ve || Ee.morphNormals !== Ge || Ee.morphColors !== Ke || Ee.toneMapping !== ot || Ee.morphTargetsCount !== $e) && (We = true) : (We = true, Ee.__version = O.version);
      let Ct = Ee.currentProgram;
      We === true && (Ct = Ni(O, L, U));
      let kn = false, Pt = false, mi = false;
      const rt = Ct.getUniforms(), Et = Ee.uniforms;
      if (me.useProgram(Ct.program) && (kn = true, Pt = true, mi = true), O.id !== P && (P = O.id, Pt = true), kn || z !== v) {
        me.buffers.depth.getReversed() && v.reversedDepth !== true && (v._reversedDepth = true, v.updateProjectionMatrix()), rt.setValue(A, "projectionMatrix", v.projectionMatrix), rt.setValue(A, "viewMatrix", v.matrixWorldInverse);
        const yt = rt.map.cameraPosition;
        yt !== void 0 && yt.setValue(A, ge.setFromMatrixPosition(v.matrixWorld)), et.logarithmicDepthBuffer && rt.setValue(A, "logDepthBufFC", 2 / (Math.log(v.far + 1) / Math.LN2)), (O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshLambertMaterial || O.isMeshBasicMaterial || O.isMeshStandardMaterial || O.isShaderMaterial) && rt.setValue(A, "isOrthographic", v.isOrthographicCamera === true), z !== v && (z = v, Pt = true, mi = true);
      }
      if (U.isSkinnedMesh) {
        rt.setOptional(A, U, "bindMatrix"), rt.setOptional(A, U, "bindMatrixInverse");
        const vt = U.skeleton;
        vt && (vt.boneTexture === null && vt.computeBoneTexture(), rt.setValue(A, "boneTexture", vt.boneTexture, De));
      }
      U.isBatchedMesh && (rt.setOptional(A, U, "batchingTexture"), rt.setValue(A, "batchingTexture", U._matricesTexture, De), rt.setOptional(A, U, "batchingIdTexture"), rt.setValue(A, "batchingIdTexture", U._indirectTexture, De), rt.setOptional(A, U, "batchingColorTexture"), U._colorsTexture !== null && rt.setValue(A, "batchingColorTexture", U._colorsTexture, De));
      const Ft = F.morphAttributes;
      if ((Ft.position !== void 0 || Ft.normal !== void 0 || Ft.color !== void 0) && Ae.update(U, F, Ct), (Pt || Ee.receiveShadow !== U.receiveShadow) && (Ee.receiveShadow = U.receiveShadow, rt.setValue(A, "receiveShadow", U.receiveShadow)), O.isMeshGouraudMaterial && O.envMap !== null && (Et.envMap.value = ue, Et.flipEnvMap.value = ue.isCubeTexture && ue.isRenderTargetTexture === false ? -1 : 1), O.isMeshStandardMaterial && O.envMap === null && L.environment !== null && (Et.envMapIntensity.value = L.environmentIntensity), Et.dfgLUT !== void 0 && (Et.dfgLUT.value = vp()), Pt && (rt.setValue(A, "toneMappingExposure", y.toneMappingExposure), Ee.needsLights && $o(Et, mi), ee && O.fog === true && _e.refreshFogUniforms(Et, ee), _e.refreshMaterialUniforms(Et, O, re, ne, E.state.transmissionRenderTarget[v.id]), ds.upload(A, ha(Ee), Et, De)), O.isShaderMaterial && O.uniformsNeedUpdate === true && (ds.upload(A, ha(Ee), Et, De), O.uniformsNeedUpdate = false), O.isSpriteMaterial && rt.setValue(A, "center", U.center), rt.setValue(A, "modelViewMatrix", U.modelViewMatrix), rt.setValue(A, "normalMatrix", U.normalMatrix), rt.setValue(A, "modelMatrix", U.matrixWorld), O.isShaderMaterial || O.isRawShaderMaterial) {
        const vt = O.uniformsGroups;
        for (let yt = 0, ys = vt.length; yt < ys; yt++) {
          const wn = vt[yt];
          ce.update(wn, Ct), ce.bind(wn, Ct);
        }
      }
      return Ct;
    }
    function $o(v, L) {
      v.ambientLightColor.needsUpdate = L, v.lightProbe.needsUpdate = L, v.directionalLights.needsUpdate = L, v.directionalLightShadows.needsUpdate = L, v.pointLights.needsUpdate = L, v.pointLightShadows.needsUpdate = L, v.spotLights.needsUpdate = L, v.spotLightShadows.needsUpdate = L, v.rectAreaLights.needsUpdate = L, v.hemisphereLights.needsUpdate = L;
    }
    function Jo(v) {
      return v.isMeshLambertMaterial || v.isMeshToonMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isShadowMaterial || v.isShaderMaterial && v.lights === true;
    }
    this.getActiveCubeFace = function() {
      return B;
    }, this.getActiveMipmapLevel = function() {
      return S;
    }, this.getRenderTarget = function() {
      return M;
    }, this.setRenderTargetTextures = function(v, L, F) {
      const O = Me.get(v);
      O.__autoAllocateDepthBuffer = v.resolveDepthBuffer === false, O.__autoAllocateDepthBuffer === false && (O.__useRenderToTexture = false), Me.get(v.texture).__webglTexture = L, Me.get(v.depthTexture).__webglTexture = O.__autoAllocateDepthBuffer ? void 0 : F, O.__hasExternalTextures = true;
    }, this.setRenderTargetFramebuffer = function(v, L) {
      const F = Me.get(v);
      F.__webglFramebuffer = L, F.__useDefaultFramebuffer = L === void 0;
    };
    const Qo = A.createFramebuffer();
    this.setRenderTarget = function(v, L = 0, F = 0) {
      M = v, B = L, S = F;
      let O = true, U = null, ee = false, le = false;
      if (v) {
        const ue = Me.get(v);
        if (ue.__useDefaultFramebuffer !== void 0) me.bindFramebuffer(A.FRAMEBUFFER, null), O = false;
        else if (ue.__webglFramebuffer === void 0) De.setupRenderTarget(v);
        else if (ue.__hasExternalTextures) De.rebindTextures(v, Me.get(v.texture).__webglTexture, Me.get(v.depthTexture).__webglTexture);
        else if (v.depthBuffer) {
          const ve = v.depthTexture;
          if (ue.__boundDepthTexture !== ve) {
            if (ve !== null && Me.has(ve) && (v.width !== ve.image.width || v.height !== ve.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            De.setupDepthRenderbuffer(v);
          }
        }
        const Te = v.texture;
        (Te.isData3DTexture || Te.isDataArrayTexture || Te.isCompressedArrayTexture) && (le = true);
        const we = Me.get(v).__webglFramebuffer;
        v.isWebGLCubeRenderTarget ? (Array.isArray(we[L]) ? U = we[L][F] : U = we[L], ee = true) : v.samples > 0 && De.useMultisampledRTT(v) === false ? U = Me.get(v).__webglMultisampledFramebuffer : Array.isArray(we) ? U = we[F] : U = we, G.copy(v.viewport), Y.copy(v.scissor), W = v.scissorTest;
      } else G.copy(qe).multiplyScalar(re).floor(), Y.copy(Je).multiplyScalar(re).floor(), W = Qe;
      if (F !== 0 && (U = Qo), me.bindFramebuffer(A.FRAMEBUFFER, U) && O && me.drawBuffers(v, U), me.viewport(G), me.scissor(Y), me.setScissorTest(W), ee) {
        const ue = Me.get(v.texture);
        A.framebufferTexture2D(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_CUBE_MAP_POSITIVE_X + L, ue.__webglTexture, F);
      } else if (le) {
        const ue = L;
        for (let Te = 0; Te < v.textures.length; Te++) {
          const we = Me.get(v.textures[Te]);
          A.framebufferTextureLayer(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0 + Te, we.__webglTexture, F, ue);
        }
      } else if (v !== null && F !== 0) {
        const ue = Me.get(v.texture);
        A.framebufferTexture2D(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, ue.__webglTexture, F);
      }
      P = -1;
    }, this.readRenderTargetPixels = function(v, L, F, O, U, ee, le, pe = 0) {
      if (!(v && v.isWebGLRenderTarget)) {
        lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ue = Me.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && le !== void 0 && (ue = ue[le]), ue) {
        me.bindFramebuffer(A.FRAMEBUFFER, ue);
        try {
          const Te = v.textures[pe], we = Te.format, ve = Te.type;
          if (!et.textureFormatReadable(we)) {
            lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!et.textureTypeReadable(ve)) {
            lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          L >= 0 && L <= v.width - O && F >= 0 && F <= v.height - U && (v.textures.length > 1 && A.readBuffer(A.COLOR_ATTACHMENT0 + pe), A.readPixels(L, F, O, U, Re.convert(we), Re.convert(ve), ee));
        } finally {
          const Te = M !== null ? Me.get(M).__webglFramebuffer : null;
          me.bindFramebuffer(A.FRAMEBUFFER, Te);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(v, L, F, O, U, ee, le, pe = 0) {
      if (!(v && v.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ue = Me.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && le !== void 0 && (ue = ue[le]), ue) if (L >= 0 && L <= v.width - O && F >= 0 && F <= v.height - U) {
        me.bindFramebuffer(A.FRAMEBUFFER, ue);
        const Te = v.textures[pe], we = Te.format, ve = Te.type;
        if (!et.textureFormatReadable(we)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!et.textureTypeReadable(ve)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        const Ge = A.createBuffer();
        A.bindBuffer(A.PIXEL_PACK_BUFFER, Ge), A.bufferData(A.PIXEL_PACK_BUFFER, ee.byteLength, A.STREAM_READ), v.textures.length > 1 && A.readBuffer(A.COLOR_ATTACHMENT0 + pe), A.readPixels(L, F, O, U, Re.convert(we), Re.convert(ve), 0);
        const Ke = M !== null ? Me.get(M).__webglFramebuffer : null;
        me.bindFramebuffer(A.FRAMEBUFFER, Ke);
        const ot = A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return A.flush(), await Xc(A, ot, 4), A.bindBuffer(A.PIXEL_PACK_BUFFER, Ge), A.getBufferSubData(A.PIXEL_PACK_BUFFER, 0, ee), A.deleteBuffer(Ge), A.deleteSync(ot), ee;
      } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(v, L = null, F = 0) {
      const O = Math.pow(2, -F), U = Math.floor(v.image.width * O), ee = Math.floor(v.image.height * O), le = L !== null ? L.x : 0, pe = L !== null ? L.y : 0;
      De.setTexture2D(v, 0), A.copyTexSubImage2D(A.TEXTURE_2D, F, 0, 0, le, pe, U, ee), me.unbindTexture();
    };
    const ec = A.createFramebuffer(), tc = A.createFramebuffer();
    this.copyTextureToTexture = function(v, L, F = null, O = null, U = 0, ee = null) {
      ee === null && (U !== 0 ? (Ci("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), ee = U, U = 0) : ee = 0);
      let le, pe, ue, Te, we, ve, Ge, Ke, ot;
      const ct = v.isCompressedTexture ? v.mipmaps[ee] : v.image;
      if (F !== null) le = F.max.x - F.min.x, pe = F.max.y - F.min.y, ue = F.isBox3 ? F.max.z - F.min.z : 1, Te = F.min.x, we = F.min.y, ve = F.isBox3 ? F.min.z : 0;
      else {
        const Ft = Math.pow(2, -U);
        le = Math.floor(ct.width * Ft), pe = Math.floor(ct.height * Ft), v.isDataArrayTexture ? ue = ct.depth : v.isData3DTexture ? ue = Math.floor(ct.depth * Ft) : ue = 1, Te = 0, we = 0, ve = 0;
      }
      O !== null ? (Ge = O.x, Ke = O.y, ot = O.z) : (Ge = 0, Ke = 0, ot = 0);
      const $e = Re.convert(L.format), Ee = Re.convert(L.type);
      let st;
      L.isData3DTexture ? (De.setTexture3D(L, 0), st = A.TEXTURE_3D) : L.isDataArrayTexture || L.isCompressedArrayTexture ? (De.setTexture2DArray(L, 0), st = A.TEXTURE_2D_ARRAY) : (De.setTexture2D(L, 0), st = A.TEXTURE_2D), A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL, L.flipY), A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL, L.premultiplyAlpha), A.pixelStorei(A.UNPACK_ALIGNMENT, L.unpackAlignment);
      const We = A.getParameter(A.UNPACK_ROW_LENGTH), Ct = A.getParameter(A.UNPACK_IMAGE_HEIGHT), kn = A.getParameter(A.UNPACK_SKIP_PIXELS), Pt = A.getParameter(A.UNPACK_SKIP_ROWS), mi = A.getParameter(A.UNPACK_SKIP_IMAGES);
      A.pixelStorei(A.UNPACK_ROW_LENGTH, ct.width), A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, ct.height), A.pixelStorei(A.UNPACK_SKIP_PIXELS, Te), A.pixelStorei(A.UNPACK_SKIP_ROWS, we), A.pixelStorei(A.UNPACK_SKIP_IMAGES, ve);
      const rt = v.isDataArrayTexture || v.isData3DTexture, Et = L.isDataArrayTexture || L.isData3DTexture;
      if (v.isDepthTexture) {
        const Ft = Me.get(v), vt = Me.get(L), yt = Me.get(Ft.__renderTarget), ys = Me.get(vt.__renderTarget);
        me.bindFramebuffer(A.READ_FRAMEBUFFER, yt.__webglFramebuffer), me.bindFramebuffer(A.DRAW_FRAMEBUFFER, ys.__webglFramebuffer);
        for (let wn = 0; wn < ue; wn++) rt && (A.framebufferTextureLayer(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, Me.get(v).__webglTexture, U, ve + wn), A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, Me.get(L).__webglTexture, ee, ot + wn)), A.blitFramebuffer(Te, we, le, pe, Ge, Ke, le, pe, A.DEPTH_BUFFER_BIT, A.NEAREST);
        me.bindFramebuffer(A.READ_FRAMEBUFFER, null), me.bindFramebuffer(A.DRAW_FRAMEBUFFER, null);
      } else if (U !== 0 || v.isRenderTargetTexture || Me.has(v)) {
        const Ft = Me.get(v), vt = Me.get(L);
        me.bindFramebuffer(A.READ_FRAMEBUFFER, ec), me.bindFramebuffer(A.DRAW_FRAMEBUFFER, tc);
        for (let yt = 0; yt < ue; yt++) rt ? A.framebufferTextureLayer(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, Ft.__webglTexture, U, ve + yt) : A.framebufferTexture2D(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, Ft.__webglTexture, U), Et ? A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, vt.__webglTexture, ee, ot + yt) : A.framebufferTexture2D(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, vt.__webglTexture, ee), U !== 0 ? A.blitFramebuffer(Te, we, le, pe, Ge, Ke, le, pe, A.COLOR_BUFFER_BIT, A.NEAREST) : Et ? A.copyTexSubImage3D(st, ee, Ge, Ke, ot + yt, Te, we, le, pe) : A.copyTexSubImage2D(st, ee, Ge, Ke, Te, we, le, pe);
        me.bindFramebuffer(A.READ_FRAMEBUFFER, null), me.bindFramebuffer(A.DRAW_FRAMEBUFFER, null);
      } else Et ? v.isDataTexture || v.isData3DTexture ? A.texSubImage3D(st, ee, Ge, Ke, ot, le, pe, ue, $e, Ee, ct.data) : L.isCompressedArrayTexture ? A.compressedTexSubImage3D(st, ee, Ge, Ke, ot, le, pe, ue, $e, ct.data) : A.texSubImage3D(st, ee, Ge, Ke, ot, le, pe, ue, $e, Ee, ct) : v.isDataTexture ? A.texSubImage2D(A.TEXTURE_2D, ee, Ge, Ke, le, pe, $e, Ee, ct.data) : v.isCompressedTexture ? A.compressedTexSubImage2D(A.TEXTURE_2D, ee, Ge, Ke, ct.width, ct.height, $e, ct.data) : A.texSubImage2D(A.TEXTURE_2D, ee, Ge, Ke, le, pe, $e, Ee, ct);
      A.pixelStorei(A.UNPACK_ROW_LENGTH, We), A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, Ct), A.pixelStorei(A.UNPACK_SKIP_PIXELS, kn), A.pixelStorei(A.UNPACK_SKIP_ROWS, Pt), A.pixelStorei(A.UNPACK_SKIP_IMAGES, mi), ee === 0 && L.generateMipmaps && A.generateMipmap(st), me.unbindTexture();
    }, this.initRenderTarget = function(v) {
      Me.get(v).__webglFramebuffer === void 0 && De.setupRenderTarget(v);
    }, this.initTexture = function(v) {
      v.isCubeTexture ? De.setTextureCube(v, 0) : v.isData3DTexture ? De.setTexture3D(v, 0) : v.isDataArrayTexture || v.isCompressedArrayTexture ? De.setTexture2DArray(v, 0) : De.setTexture2D(v, 0), me.unbindTexture();
    }, this.resetState = function() {
      B = 0, S = 0, M = null, me.reset(), R.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return jt;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = Xe._getDrawingBufferColorSpace(e), t.unpackColorSpace = Xe._getUnpackColorSpace();
  }
}
const mo = { type: "change" }, sa = { type: "start" }, Ko = { type: "end" }, as = new vs(), xo = new Mn(), Sp = Math.cos(70 * Yc.DEG2RAD), dt = new I(), At = 2 * Math.PI, je = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, tr = 1e-6;
class bp extends Ll {
  constructor(e, t = null) {
    super(e, t), this.state = je.NONE, this.target = new I(), this.cursor = new I(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: si.ROTATE, MIDDLE: si.DOLLY, RIGHT: si.PAN }, this.touches = { ONE: ii.ROTATE, TWO: ii.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new I(), this._lastQuaternion = new qt(), this._lastTargetPosition = new I(), this._quat = new qt().setFromUnitVectors(e.up, new I(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Ha(), this._sphericalDelta = new Ha(), this._scale = 1, this._panOffset = new I(), this._rotateStart = new Ne(), this._rotateEnd = new Ne(), this._rotateDelta = new Ne(), this._panStart = new Ne(), this._panEnd = new Ne(), this._panDelta = new Ne(), this._dollyStart = new Ne(), this._dollyEnd = new Ne(), this._dollyDelta = new Ne(), this._dollyDirection = new I(), this._mouse = new Ne(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = yp.bind(this), this._onPointerDown = Ep.bind(this), this._onPointerUp = Tp.bind(this), this._onContextMenu = Lp.bind(this), this._onMouseWheel = Rp.bind(this), this._onKeyDown = Cp.bind(this), this._onTouchStart = Pp.bind(this), this._onTouchMove = Dp.bind(this), this._onMouseDown = Ap.bind(this), this._onMouseMove = wp.bind(this), this._interceptControlDown = Up.bind(this), this._interceptControlUp = Ip.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
  }
  connect(e) {
    super.connect(e), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: false }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: true, capture: true }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: true }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(e) {
    e.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = e;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(mo), this.update(), this.state = je.NONE;
  }
  update(e = null) {
    const t = this.object.position;
    dt.copy(t).sub(this.target), dt.applyQuaternion(this._quat), this._spherical.setFromVector3(dt), this.autoRotate && this.state === je.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, s = this.maxAzimuthAngle;
    isFinite(n) && isFinite(s) && (n < -Math.PI ? n += At : n > Math.PI && (n -= At), s < -Math.PI ? s += At : s > Math.PI && (s -= At), n <= s ? this._spherical.theta = Math.max(n, Math.min(s, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + s) / 2 ? Math.max(n, this._spherical.theta) : Math.min(s, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = a != this._spherical.radius;
    }
    if (dt.setFromSpherical(this._spherical), dt.applyQuaternion(this._quatInverse), t.copy(this.target).add(dt), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const o = dt.length();
        a = this._clampDistance(o * this._scale);
        const l = o - a;
        this.object.position.addScaledVector(this._dollyDirection, l), this.object.updateMatrixWorld(), r = !!l;
      } else if (this.object.isOrthographicCamera) {
        const o = new I(this._mouse.x, this._mouse.y, 0);
        o.unproject(this.object);
        const l = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = l !== this.object.zoom;
        const c = new I(this._mouse.x, this._mouse.y, 0);
        c.unproject(this.object), this.object.position.sub(c).add(o), this.object.updateMatrixWorld(), a = dt.length();
      } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
      a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (as.origin.copy(this.object.position), as.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(as.direction)) < Sp ? this.object.lookAt(this.target) : (xo.setFromNormalAndCoplanarPoint(this.object.up, this.target), as.intersectPlane(xo, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), a !== this.object.zoom && (this.object.updateProjectionMatrix(), r = true);
    }
    return this._scale = 1, this._performCursorZoom = false, r || this._lastPosition.distanceToSquared(this.object.position) > tr || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > tr || this._lastTargetPosition.distanceToSquared(this.target) > tr ? (this.dispatchEvent(mo), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
  }
  _getAutoRotationAngle(e) {
    return e !== null ? At / 60 * this.autoRotateSpeed * e : At / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(e) {
    const t = Math.abs(e * 0.01);
    return Math.pow(0.95, this.zoomSpeed * t);
  }
  _rotateLeft(e) {
    this._sphericalDelta.theta -= e;
  }
  _rotateUp(e) {
    this._sphericalDelta.phi -= e;
  }
  _panLeft(e, t) {
    dt.setFromMatrixColumn(t, 0), dt.multiplyScalar(-e), this._panOffset.add(dt);
  }
  _panUp(e, t) {
    this.screenSpacePanning === true ? dt.setFromMatrixColumn(t, 1) : (dt.setFromMatrixColumn(t, 0), dt.crossVectors(this.object.up, dt)), dt.multiplyScalar(e), this._panOffset.add(dt);
  }
  _pan(e, t) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const s = this.object.position;
      dt.copy(s).sub(this.target);
      let r = dt.length();
      r *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * r / n.clientHeight, this.object.matrix), this._panUp(2 * t * r / n.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = false);
  }
  _dollyOut(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _dollyIn(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _updateZoomParameters(e, t) {
    if (!this.zoomToCursor) return;
    this._performCursorZoom = true;
    const n = this.domElement.getBoundingClientRect(), s = e - n.left, r = t - n.top, a = n.width, o = n.height;
    this._mouse.x = s / a * 2 - 1, this._mouse.y = -(r / o) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(e) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, e));
  }
  _handleMouseDownRotate(e) {
    this._rotateStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownDolly(e) {
    this._updateZoomParameters(e.clientX, e.clientX), this._dollyStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownPan(e) {
    this._panStart.set(e.clientX, e.clientY);
  }
  _handleMouseMoveRotate(e) {
    this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(At * this._rotateDelta.x / t.clientHeight), this._rotateUp(At * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(e) {
    this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(e) {
    this._panEnd.set(e.clientX, e.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(e) {
    this._updateZoomParameters(e.clientX, e.clientY), e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)), this.update();
  }
  _handleKeyDown(e) {
    let t = false;
    switch (e.code) {
      case this.keys.UP:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(At * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), t = true;
        break;
      case this.keys.BOTTOM:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-At * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), t = true;
        break;
      case this.keys.LEFT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(At * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), t = true;
        break;
      case this.keys.RIGHT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-At * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), t = true;
        break;
    }
    t && (e.preventDefault(), this.update());
  }
  _handleTouchStartRotate(e) {
    if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), s = 0.5 * (e.pageY + t.y);
      this._rotateStart.set(n, s);
    }
  }
  _handleTouchStartPan(e) {
    if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), s = 0.5 * (e.pageY + t.y);
      this._panStart.set(n, s);
    }
  }
  _handleTouchStartDolly(e) {
    const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, s = e.pageY - t.y, r = Math.sqrt(n * n + s * s);
    this._dollyStart.set(0, r);
  }
  _handleTouchStartDollyPan(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enablePan && this._handleTouchStartPan(e);
  }
  _handleTouchStartDollyRotate(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enableRotate && this._handleTouchStartRotate(e);
  }
  _handleTouchMoveRotate(e) {
    if (this._pointers.length == 1) this._rotateEnd.set(e.pageX, e.pageY);
    else {
      const n = this._getSecondPointerPosition(e), s = 0.5 * (e.pageX + n.x), r = 0.5 * (e.pageY + n.y);
      this._rotateEnd.set(s, r);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(At * this._rotateDelta.x / t.clientHeight), this._rotateUp(At * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(e) {
    if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), s = 0.5 * (e.pageY + t.y);
      this._panEnd.set(n, s);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(e) {
    const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, s = e.pageY - t.y, r = Math.sqrt(n * n + s * s);
    this._dollyEnd.set(0, r), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const a = (e.pageX + t.x) * 0.5, o = (e.pageY + t.y) * 0.5;
    this._updateZoomParameters(a, o);
  }
  _handleTouchMoveDollyPan(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enablePan && this._handleTouchMovePan(e);
  }
  _handleTouchMoveDollyRotate(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enableRotate && this._handleTouchMoveRotate(e);
  }
  _addPointer(e) {
    this._pointers.push(e.pointerId);
  }
  _removePointer(e) {
    delete this._pointerPositions[e.pointerId];
    for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) {
      this._pointers.splice(t, 1);
      return;
    }
  }
  _isTrackingPointer(e) {
    for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) return true;
    return false;
  }
  _trackPointer(e) {
    let t = this._pointerPositions[e.pointerId];
    t === void 0 && (t = new Ne(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
  }
  _getSecondPointerPosition(e) {
    const t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[t];
  }
  _customWheelEvent(e) {
    const t = e.deltaMode, n = { clientX: e.clientX, clientY: e.clientY, deltaY: e.deltaY };
    switch (t) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
        break;
    }
    return e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
  }
}
function Ep(i) {
  this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(i.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(i) && (this._addPointer(i), i.pointerType === "touch" ? this._onTouchStart(i) : this._onMouseDown(i)));
}
function yp(i) {
  this.enabled !== false && (i.pointerType === "touch" ? this._onTouchMove(i) : this._onMouseMove(i));
}
function Tp(i) {
  switch (this._removePointer(i), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(i.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(Ko), this.state = je.NONE;
      break;
    case 1:
      const e = this._pointers[0], t = this._pointerPositions[e];
      this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y });
      break;
  }
}
function Ap(i) {
  let e;
  switch (i.button) {
    case 0:
      e = this.mouseButtons.LEFT;
      break;
    case 1:
      e = this.mouseButtons.MIDDLE;
      break;
    case 2:
      e = this.mouseButtons.RIGHT;
      break;
    default:
      e = -1;
  }
  switch (e) {
    case si.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseDownDolly(i), this.state = je.DOLLY;
      break;
    case si.ROTATE:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(i), this.state = je.PAN;
      } else {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(i), this.state = je.ROTATE;
      }
      break;
    case si.PAN:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(i), this.state = je.ROTATE;
      } else {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(i), this.state = je.PAN;
      }
      break;
    default:
      this.state = je.NONE;
  }
  this.state !== je.NONE && this.dispatchEvent(sa);
}
function wp(i) {
  switch (this.state) {
    case je.ROTATE:
      if (this.enableRotate === false) return;
      this._handleMouseMoveRotate(i);
      break;
    case je.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseMoveDolly(i);
      break;
    case je.PAN:
      if (this.enablePan === false) return;
      this._handleMouseMovePan(i);
      break;
  }
}
function Rp(i) {
  this.enabled === false || this.enableZoom === false || this.state !== je.NONE || (i.preventDefault(), this.dispatchEvent(sa), this._handleMouseWheel(this._customWheelEvent(i)), this.dispatchEvent(Ko));
}
function Cp(i) {
  this.enabled !== false && this._handleKeyDown(i);
}
function Pp(i) {
  switch (this._trackPointer(i), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case ii.ROTATE:
          if (this.enableRotate === false) return;
          this._handleTouchStartRotate(i), this.state = je.TOUCH_ROTATE;
          break;
        case ii.PAN:
          if (this.enablePan === false) return;
          this._handleTouchStartPan(i), this.state = je.TOUCH_PAN;
          break;
        default:
          this.state = je.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case ii.DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;
          this._handleTouchStartDollyPan(i), this.state = je.TOUCH_DOLLY_PAN;
          break;
        case ii.DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;
          this._handleTouchStartDollyRotate(i), this.state = je.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = je.NONE;
      }
      break;
    default:
      this.state = je.NONE;
  }
  this.state !== je.NONE && this.dispatchEvent(sa);
}
function Dp(i) {
  switch (this._trackPointer(i), this.state) {
    case je.TOUCH_ROTATE:
      if (this.enableRotate === false) return;
      this._handleTouchMoveRotate(i), this.update();
      break;
    case je.TOUCH_PAN:
      if (this.enablePan === false) return;
      this._handleTouchMovePan(i), this.update();
      break;
    case je.TOUCH_DOLLY_PAN:
      if (this.enableZoom === false && this.enablePan === false) return;
      this._handleTouchMoveDollyPan(i), this.update();
      break;
    case je.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === false && this.enableRotate === false) return;
      this._handleTouchMoveDollyRotate(i), this.update();
      break;
    default:
      this.state = je.NONE;
  }
}
function Lp(i) {
  this.enabled !== false && i.preventDefault();
}
function Up(i) {
  i.key === "Control" && (this._controlActive = true, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function Ip(i) {
  i.key === "Control" && (this._controlActive = false, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
const Np = "/assets/main-MEExnRoD.pdf", sn = [{ kicker: "Step I \xB7 the geometric stage", title: "Begin on the sphere S\xB2", body: "The proof first works on the unit sphere, where rotations act without changing distance or shape. The solid ball comes later by radial extension.", note: "This opening shell follows Section 3.2 of the paper. It is a mathematical sphere, not a physical material." }, { kicker: "Step II \xB7 a free subgroup", title: "Two free rotations", body: "Choose rotations A and B about orthogonal axes through \u03B8 = arccos(1/3). Their reduced words form a copy of the free group F\u2082 inside SO(3).", note: "Colors track the four first-letter classes S(a), S(a\u207B\xB9), S(b), S(b\u207B\xB9); E marks the exceptional remainder." }, { kicker: "Step III \xB7 the axiom of choice", title: "One seed per orbit", body: "Remove the countable fixed-point set D, then choose a set M containing one representative from every F\u2082-orbit. Each word class acting on M becomes a scattered piece of S\xB2.", note: "The exploded colors symbolize E\u1D62\xB7M. The exact sets are non-measurable and cannot be explicitly rendered point-by-point." }, { kicker: "Step IV \xB7 radial invariance", title: "From shell to solid ball", body: "Extend every spherical piece along its radial segment: \xC3\u1D62 = { rx : x \u2208 A\u1D62, 0 < r \u2264 1 }. Rotations commute with this extension, filling B \u2216 {0}.", note: "The center and the countable set D are restored by equidecomposability\u2014the paper\u2019s countable absorption step." }, { kicker: "Conclusion \xB7 paradoxical decomposition", title: "One ball becomes two", body: "The free-group identities now become two rigid reassemblies. No color is split, stretched, or copied; every displayed piece receives one rotation and one translation.", note: "Left: S(a) \u222A A\xB7S(a\u207B\xB9). Right: S(b) \u222A B\xB7S(b\u207B\xB9), with E absorbed into the finite decomposition." }], In = [{ name: "S(a)", color: "#ff6b4a", offset: [-1.2, 0.65, 0.1] }, { name: "S(a\u207B\xB9)", color: "#f7c455", offset: [-0.7, -0.85, 0.35] }, { name: "S(b)", color: "#8bd3b0", offset: [0.05, 1.05, -0.25] }, { name: "S(b\u207B\xB9)", color: "#58a6d8", offset: [0.85, -0.7, 0.2] }, { name: "E", color: "#bd8ce6", offset: [1.2, 0.55, -0.2] }], Ei = (i, e, t) => Math.max(e, Math.min(t, i)), Fp = (i) => i * i * (3 - 2 * i);
class Op {
  constructor(e) {
    this.root = e;
    const t = Number(new URLSearchParams(window.location.search).get("stage"));
    this.stage = Number.isInteger(t) ? Ei(t, 0, sn.length - 1) : 0, this.visualStage = this.stage, this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches, this.clock = new Dl(), this.pieces = [], this.pointer = new Ne(), this.generatorAngle = Math.acos(1 / 3), this.frame = null, this.renderShell(), this.cacheDom(), this.setupScene(), this.buildSphere(), this.bindEvents(), this.setStage(this.stage, true), this.animate();
  }
  renderShell() {
    this.root.innerHTML = `
      <div class="experience">
        <div class="ambient ambient--one"></div>
        <div class="ambient ambient--two"></div>

        <header class="topbar">
          <a class="brand" href="#" aria-label="Banach\u2013Tarski interactive home">
            <span class="brand__mark" aria-hidden="true"><i></i><i></i></span>
            <span>Impossible Objects</span>
          </a>
          <div class="topbar__meta">
            <span class="edition">Visual essay \xB7 01</span>
            <a class="icon-button" href="https://github.com/PicInfiniti/banach-tarski-paradox" target="_blank" rel="noreferrer" aria-label="View this project on GitHub">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.24c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.57-.3-5.27-1.29-5.27-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18A10.9 10.9 0 0 1 12 6.09c.98 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.71 5.39-5.29 5.68.42.36.78 1.07.78 2.16v3.26c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z"/></svg>
            </a>
            <button class="text-button" data-open-guide>Field guide <span>\u2197</span></button>
          </div>
        </header>

        <section class="intro" aria-labelledby="page-title">
          <p class="eyebrow"><span></span> The Banach\u2013Tarski paradox</p>
          <h1 id="page-title">One sphere.<br /><em>Two spheres.</em></h1>
          <p class="lede">How infinity breaks our everyday intuition about volume.</p>
        </section>

        <div class="viewport" aria-label="Interactive visualization of an abstract sphere decomposition"></div>

        <aside class="stage-card" aria-live="polite">
          <div class="stage-card__topline">
            <span class="stage-number">01</span>
            <span class="stage-kicker"></span>
          </div>
          <h2 class="stage-title"></h2>
          <p class="stage-body"></p>
          <div class="stage-note">
            <span aria-hidden="true">\u2726</span>
            <p></p>
          </div>
          <div class="piece-key" aria-label="Five abstract pieces">
            ${In.map((e) => `<span style="--piece:${e.color}"><i></i>${e.name}</span>`).join("")}
          </div>
        </aside>

        <div class="stage-nav" aria-label="Visualization stages">
          <button class="stage-arrow stage-prev" aria-label="Previous stage">\u2190</button>
          <div class="stage-track">
            ${sn.map((e, t) => `
                <button class="stage-step" data-stage="${t}" aria-label="Stage ${t + 1}: ${e.title}">
                  <span>${String(t + 1).padStart(2, "0")}</span>
                  <i></i>
                </button>`).join("")}
          </div>
          <button class="stage-arrow stage-next" aria-label="Next stage">\u2192</button>
        </div>

        <div class="interaction-hint"><span class="mouse-icon"></span> Drag to orbit</div>
        <p class="figure-label"><span>Fig. 1</span> A finite analogy for an infinite construction</p>

        <dialog class="guide">
          <div class="guide__head">
            <div>
              <p class="eyebrow"><span></span> Field guide</p>
              <h2>What the paradox<br /><em>actually says</em></h2>
            </div>
            <button class="guide__close" aria-label="Close field guide">\xD7</button>
          </div>
          <div class="guide__grid">
            <article><span>01 / Free group</span><h3>Reduced words in F\u2082</h3><p>The classes S(a), S(a\u207B\xB9), S(b), and S(b\u207B\xB9) partition all nonidentity reduced words by their first letter. Cancellation produces two paradoxical reassemblies.</p></article>
            <article><span>02 / Rotations</span><h3>Embed F\u2082 in SO(3)</h3><p>Rotations A and B use orthogonal axes and \u03B8 = arccos(1/3). No nontrivial reduced word becomes the identity, so they generate a free subgroup.</p></article>
            <article><span>03 / Exceptional set</span><h3>Remove the fixed poles</h3><p>Every nonidentity rotation fixes two antipodal points. Their union D is countable; on S\xB2 \u2216 D, the free-group action has no fixed points.</p></article>
            <article><span>04 / Choice</span><h3>Select the orbit seeds M</h3><p>The axiom of choice supplies exactly one representative from every orbit. Acting on M transfers the word decomposition of F\u2082 onto the sphere.</p></article>
            <article><span>05 / Radial lift</span><h3>Turn S\xB2 into a ball</h3><p>Each surface piece is extended along 0 &lt; r \u2264 1. Because rotations preserve radial lines, the same paradoxical relations hold throughout B \u2216 {0}.</p></article>
            <article><span>06 / Boundary</span><h3>A proof map, not the pieces</h3><p>The colored particles show the paper\u2019s logical structure. The true pieces are non-measurable infinite sets, and no finite rendering can literally construct them.</p></article>
          </div>
          <footer><span>Self-contained proof \xB7 March 2026</span><div><a href="${Np}" target="_blank" rel="noreferrer">Read the paper \u2197</a><button data-restart>Replay the proof \u2192</button></div></footer>
        </dialog>
      </div>`;
  }
  cacheDom() {
    this.viewport = this.root.querySelector(".viewport"), this.numberEl = this.root.querySelector(".stage-number"), this.kickerEl = this.root.querySelector(".stage-kicker"), this.titleEl = this.root.querySelector(".stage-title"), this.bodyEl = this.root.querySelector(".stage-body"), this.noteEl = this.root.querySelector(".stage-note p"), this.cardEl = this.root.querySelector(".stage-card"), this.keyEl = this.root.querySelector(".piece-key"), this.steps = [...this.root.querySelectorAll(".stage-step")], this.prev = this.root.querySelector(".stage-prev"), this.next = this.root.querySelector(".stage-next"), this.guide = this.root.querySelector(".guide");
  }
  setupScene() {
    this.scene = new gl(), this.isNarrow = window.innerWidth < 700, this.camera = new Bt(38, 1, 0.1, 100), this.camera.position.set(0, 0.15, 6.2), this.renderer = new Mp({ antialias: true, alpha: true }), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), this.renderer.outputColorSpace = Ut, this.renderer.setClearColor(0, 0), this.viewport.appendChild(this.renderer.domElement), this.controls = new bp(this.camera, this.renderer.domElement), this.controls.enableDamping = true, this.controls.enablePan = false, this.controls.enableZoom = true, this.controls.minDistance = 4.5, this.controls.maxDistance = this.isNarrow ? 24 : 12, this.controls.autoRotate = !this.reducedMotion, this.controls.autoRotateSpeed = 0.32, this.world = new Bn(), this.world.rotation.set(-0.08, -0.28, 0.04), this.scene.add(this.world), this.guideSphere = this.makeGuideSphere(1.52), this.world.add(this.guideSphere), this.baseCameraDistance = 6.2, this.choiceCameraDistance = this.isNarrow ? 17.5 : 10, this.finalCameraDistance = this.isNarrow ? 19.5 : 9.2, this.cameraGoalDistance = this.baseCameraDistance, this.cameraIsTweening = false, this.targetGuides = new Bn(), this.targetGuides.add(this.makeGuideSphere(1.52, -1.65), this.makeGuideSphere(1.52, 1.65)), this.targetGuides.visible = false, this.world.add(this.targetGuides), this.resize();
  }
  makeGuideSphere(e, t = 0) {
    const n = new Bn();
    n.position.x = t;
    const s = new El(new Al(new ia(e, 24, 16)), new Xr({ color: 12110269, transparent: true, opacity: 0.09 })), r = new yl(new Rt().setFromPoints(Array.from({ length: 96 }, (a, o) => {
      const l = o / 96 * Math.PI * 2;
      return new I(Math.cos(l) * e, Math.sin(l) * e, 0);
    })), new Xr({ color: 14674659, transparent: true, opacity: 0.2 }));
    return n.add(s, r), n;
  }
  buildSphere() {
    const e = this.isNarrow ? 10500 : 18e3, t = Array.from({ length: In.length }, () => []), n = Array.from({ length: In.length }, () => []), s = Array.from({ length: In.length }, () => []), r = Array.from({ length: In.length }, () => []), a = Math.PI * (3 - Math.sqrt(5));
    for (let o = 0; o < e; o += 1) {
      const l = 1 - 2 * (o + 0.5) / e, c = Math.sqrt(1 - l * l), u = o * a, f = o % 4 !== 0 ? 1.5 * (0.965 + o * 17 % 31 / 1e3) : 1.5 * Math.cbrt(o * 67 % 997 / 997), m = Math.cos(u) * c * f, _ = l * f, g = Math.sin(u) * c * f, p = Math.hypot(m, _, g) || 1, h = m / p * 1.5, T = _ / p * 1.5, E = g / p * 1.5, D = Math.abs(Math.sin(m * 91.7 + _ * 117.3 + g * 73.9) * 43758.5453) % 1, C = [0.249, 0.498, 0.747, 0.996, 1].findIndex((z) => D < z), B = In[C];
      t[C].push(h, T, E), n[C].push(m, _, g);
      const S = this.rotatePoint(h, T, E, (C - 2) * 0.16, (C - 2) * 0.27);
      s[C].push(S.x + B.offset[0] * 1.15, S.y + B.offset[1] * 1.15, S.z + B.offset[2] * 1.15);
      const M = C < 2 ? -1 : 1;
      let P = { x: m, y: _, z: g };
      C === 1 && (P = this.rotateAroundZ(m, _, g, this.generatorAngle)), C === 3 && (P = this.rotatePoint(m, _, g, this.generatorAngle, 0)), C === 4 && (P = this.rotatePoint(m, _, g, 0, this.generatorAngle)), r[C].push(P.x + M * 1.65, P.y, P.z);
    }
    In.forEach((o, l) => {
      const c = new Rt(), u = new Float32Array(t[l]);
      c.setAttribute("position", new Yt(u, 3));
      const d = new Vo({ color: new He("#e5d7ad"), size: this.isNarrow ? 0.026 : 0.022, sizeAttenuation: true, transparent: true, opacity: 0.78, depthWrite: false, blending: nr }), f = new Tl(c, d);
      this.world.add(f);
      const m = new at().makeRotationY((l - 2) * 0.27).multiply(new at().makeRotationX((l - 2) * 0.16)), _ = new qt().setFromRotationMatrix(m), g = new qt();
      l === 1 && g.setFromAxisAngle(new I(0, 0, 1), this.generatorAngle), l === 3 && g.setFromAxisAngle(new I(1, 0, 0), this.generatorAngle), l === 4 && g.setFromAxisAngle(new I(0, 1, 0), this.generatorAngle), this.pieces.push({ points: f, surface: new Float32Array(t[l]), original: new Float32Array(n[l]), separated: new Float32Array(s[l]), doubled: new Float32Array(r[l]), color: new He(o.color), baseSize: d.size, splitQuaternion: _, splitTranslation: new I(...o.offset).multiplyScalar(1.15), finalQuaternion: g, finalTranslation: new I(l < 2 ? -1.65 : 1.65, 0, 0) });
    });
  }
  rotatePoint(e, t, n, s, r) {
    const a = Math.cos(s), o = Math.sin(s), l = t * a - n * o, c = t * o + n * a, u = Math.cos(r), d = Math.sin(r);
    return { x: e * u + c * d, y: l, z: -e * d + c * u };
  }
  rotateAroundZ(e, t, n, s) {
    const r = Math.cos(s), a = Math.sin(s);
    return { x: e * r - t * a, y: e * a + t * r, z: n };
  }
  bindEvents() {
    this.steps.forEach((e) => e.addEventListener("click", () => this.setStage(Number(e.dataset.stage)))), this.prev.addEventListener("click", () => this.setStage(this.stage - 1)), this.next.addEventListener("click", () => this.setStage(this.stage + 1)), this.root.querySelector("[data-open-guide]").addEventListener("click", () => this.guide.showModal()), this.root.querySelector(".guide__close").addEventListener("click", () => this.guide.close()), this.root.querySelector("[data-restart]").addEventListener("click", () => {
      this.guide.close(), this.setStage(0);
    }), this.guide.addEventListener("click", (e) => {
      e.target === this.guide && this.guide.close();
    }), window.addEventListener("resize", () => this.resize()), window.addEventListener("keydown", (e) => {
      this.guide.open || (e.key === "ArrowRight" && this.setStage(this.stage + 1), e.key === "ArrowLeft" && this.setStage(this.stage - 1));
    }), this.viewport.addEventListener("pointermove", (e) => {
      this.pointer.x = (e.clientX / window.innerWidth - 0.5) * 2, this.pointer.y = (e.clientY / window.innerHeight - 0.5) * 2;
    });
  }
  setStage(e, t = false) {
    this.stage = Ei(e, 0, sn.length - 1), t && (this.visualStage = this.stage);
    const n = new URL(window.location.href);
    this.stage === 0 ? n.searchParams.delete("stage") : n.searchParams.set("stage", this.stage), window.history.replaceState({}, "", n);
    const s = sn[this.stage];
    this.numberEl.textContent = String(this.stage + 1).padStart(2, "0"), this.kickerEl.textContent = s.kicker, this.titleEl.textContent = s.title, this.bodyEl.textContent = s.body, this.noteEl.textContent = s.note, this.keyEl.classList.toggle("is-visible", this.stage > 0), this.keyEl.classList.toggle("is-final", this.stage === sn.length - 1), this.cardEl.classList.toggle("is-final", this.stage === 2 || this.stage === sn.length - 1), this.steps.forEach((r, a) => {
      r.classList.toggle("is-active", a === this.stage), r.classList.toggle("is-past", a < this.stage), r.setAttribute("aria-current", a === this.stage ? "step" : "false");
    }), this.prev.disabled = this.stage === 0, this.next.disabled = this.stage === sn.length - 1, this.next.textContent = this.stage === sn.length - 1 ? "\u2713" : "\u2192", this.stage === 2 ? this.cameraGoalDistance = this.choiceCameraDistance : this.stage === sn.length - 1 ? this.cameraGoalDistance = this.finalCameraDistance : this.cameraGoalDistance = this.baseCameraDistance, t ? this.setCameraDistance(this.cameraGoalDistance) : this.cameraIsTweening = true;
  }
  setCameraDistance(e) {
    const t = this.camera.position.clone().sub(this.controls.target);
    t.lengthSq() === 0 && t.set(0, 0, 1), t.setLength(e), this.camera.position.copy(this.controls.target).add(t), this.controls.update();
  }
  updateGeometry() {
    const e = this.visualStage, t = Math.min(Math.floor(e), 3), n = Fp(e - t);
    if (this.targetGuides.visible = e > 3.35, this.targetGuides.children.forEach((s) => {
      s.scale.setScalar(Ei((e - 3.25) / 0.75, 0, 1));
    }), this.guideSphere.visible = e < 3.7, this.guideSphere.visible) {
      const s = e > 3 ? 1 - (e - 3) / 0.7 : 1;
      this.guideSphere.children.forEach((r) => r.material.opacity = r.type === "LineLoop" ? 0.2 * s : 0.09 * s);
    }
    this.pieces.forEach((s) => {
      const r = s.points.geometry.attributes.position.array, a = [s.surface, s.surface, s.separated, s.original, s.doubled], o = a[t], l = a[t + 1];
      if (t === 1 || t === 3) {
        const u = t === 1 ? s.surface : s.original, d = t === 1 ? s.splitQuaternion : s.finalQuaternion, f = t === 1 ? s.splitTranslation : s.finalTranslation, m = new qt().slerpQuaternions(new qt(), d, n), _ = new I();
        for (let g = 0; g < r.length; g += 3) _.set(u[g], u[g + 1], u[g + 2]).applyQuaternion(m).addScaledVector(f, n), r[g] = _.x, r[g + 1] = _.y, r[g + 2] = _.z;
      } else for (let u = 0; u < r.length; u += 1) r[u] = o[u] + (l[u] - o[u]) * n;
      s.points.geometry.attributes.position.needsUpdate = true, s.points.material.color.copy(new He("#e5d7ad")).lerp(s.color, Ei(e, 0, 1)), s.points.material.opacity = 0.7 + Math.min(e, 1) * 0.18;
      const c = Ei(e - 3, 0, 1);
      s.points.material.size = s.baseSize * (1 + c * (this.isNarrow ? 2.2 : 0.15));
    });
  }
  resize() {
    const { clientWidth: e, clientHeight: t } = this.viewport;
    this.camera.aspect = e / t, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t, false);
  }
  animate() {
    const e = Math.min(this.clock.getDelta(), 0.05), t = this.reducedMotion ? 10 : 2.6;
    if (this.visualStage += (this.stage - this.visualStage) * Math.min(1, e * t), Math.abs(this.stage - this.visualStage) < 1e-3 && (this.visualStage = this.stage), this.updateGeometry(), this.cameraIsTweening) {
      const n = this.camera.position.distanceTo(this.controls.target), s = n + (this.cameraGoalDistance - n) * Math.min(1, e * 2.8);
      this.setCameraDistance(s), Math.abs(this.cameraGoalDistance - s) < 0.01 && (this.setCameraDistance(this.cameraGoalDistance), this.cameraIsTweening = false);
    }
    this.controls.update(), this.reducedMotion || (this.world.position.x += (this.pointer.x * 0.05 - this.world.position.x) * e, this.world.rotation.x += (-this.pointer.y * 0.025 - this.world.rotation.x - 0.08) * e), this.renderer.render(this.scene, this.camera), this.frame = requestAnimationFrame(() => this.animate());
  }
}
new Op(document.querySelector("#app"));
