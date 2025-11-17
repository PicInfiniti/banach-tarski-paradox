(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
  new MutationObserver((s) => {
    for (const r of s) if (r.type === "childList") for (const a of r.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: true, subtree: true });
  function e(s) {
    const r = {};
    return s.integrity && (r.integrity = s.integrity), s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? r.credentials = "include" : s.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
  }
  function n(s) {
    if (s.ep) return;
    s.ep = true;
    const r = e(s);
    fetch(s.href, r);
  }
})();
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
const jr = "181", ii = { ROTATE: 0, DOLLY: 1, PAN: 2 }, ei = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, il = 0, fa = 1, sl = 2, vo = 1, rl = 2, rn = 3, yn = 0, we = 1, an = 2, cn = 0, si = 1, pa = 2, ma = 3, xa = 4, al = 5, Un = 100, ol = 101, ll = 102, cl = 103, hl = 104, ul = 200, dl = 201, fl = 202, pl = 203, sr = 204, rr = 205, ml = 206, xl = 207, _l = 208, gl = 209, vl = 210, Ml = 211, bl = 212, Sl = 213, El = 214, ar = 0, or = 1, lr = 2, ai = 3, cr = 4, hr = 5, ur = 6, dr = 7, Mo = 0, yl = 1, Tl = 2, En = 0, Al = 1, wl = 2, Rl = 3, Cl = 4, Pl = 5, Dl = 6, Ll = 7, bo = 300, oi = 301, li = 302, fr = 303, pr = 304, vs = 306, mr = 1e3, on = 1001, xr = 1002, Ue = 1003, Ul = 1004, Ni = 1005, ze = 1006, As = 1007, Nn = 1008, un = 1009, So = 1010, Eo = 1011, Ei = 1012, Kr = 1013, Fn = 1014, ln = 1015, ui = 1016, Zr = 1017, Jr = 1018, yi = 1020, yo = 35902, To = 35899, Ao = 1021, wo = 1022, Ye = 1023, Ti = 1026, Ai = 1027, Ro = 1028, Qr = 1029, ta = 1030, ea = 1031, na = 1033, as = 33776, os = 33777, ls = 33778, cs = 33779, _r = 35840, gr = 35841, vr = 35842, Mr = 35843, br = 36196, Sr = 37492, Er = 37496, yr = 37808, Tr = 37809, Ar = 37810, wr = 37811, Rr = 37812, Cr = 37813, Pr = 37814, Dr = 37815, Lr = 37816, Ur = 37817, Ir = 37818, Nr = 37819, Fr = 37820, Or = 37821, Br = 36492, zr = 36494, Vr = 36495, kr = 36283, Gr = 36284, Hr = 36285, Wr = 36286, Il = 3200, Nl = 3201, Fl = 0, Ol = 1, bn = "", Oe = "srgb", ci = "srgb-linear", ds = "linear", jt = "srgb", kn = 7680, _a = 519, Bl = 512, zl = 513, Vl = 514, Co = 515, kl = 516, Gl = 517, Hl = 518, Wl = 519, ga = 35044, va = "300 es", je = 2e3, fs = 2001;
function Po(i) {
  for (let t = i.length - 1; t >= 0; --t) if (i[t] >= 65535) return true;
  return false;
}
function ps(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Xl() {
  const i = ps("canvas");
  return i.style.display = "block", i;
}
const Ma = {};
function ba(...i) {
  const t = "THREE." + i.shift();
  console.log(t, ...i);
}
function Ct(...i) {
  const t = "THREE." + i.shift();
  console.warn(t, ...i);
}
function ce(...i) {
  const t = "THREE." + i.shift();
  console.error(t, ...i);
}
function wi(...i) {
  const t = i.join(" ");
  t in Ma || (Ma[t] = true, Ct(...i));
}
function Yl(i, t, e) {
  return new Promise(function(n, s) {
    function r() {
      switch (i.clientWaitSync(t, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          s();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(r, e);
          break;
        default:
          n();
      }
    }
    setTimeout(r, e);
  });
}
class zn {
  addEventListener(t, e) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e);
  }
  hasEventListener(t, e) {
    const n = this._listeners;
    return n === void 0 ? false : n[t] !== void 0 && n[t].indexOf(e) !== -1;
  }
  removeEventListener(t, e) {
    const n = this._listeners;
    if (n === void 0) return;
    const s = n[t];
    if (s !== void 0) {
      const r = s.indexOf(e);
      r !== -1 && s.splice(r, 1);
    }
  }
  dispatchEvent(t) {
    const e = this._listeners;
    if (e === void 0) return;
    const n = e[t.type];
    if (n !== void 0) {
      t.target = this;
      const s = n.slice(0);
      for (let r = 0, a = s.length; r < a; r++) s[r].call(this, t);
      t.target = null;
    }
  }
}
const _e = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], hs = Math.PI / 180, Xr = 180 / Math.PI;
function Ci() {
  const i = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (_e[i & 255] + _e[i >> 8 & 255] + _e[i >> 16 & 255] + _e[i >> 24 & 255] + "-" + _e[t & 255] + _e[t >> 8 & 255] + "-" + _e[t >> 16 & 15 | 64] + _e[t >> 24 & 255] + "-" + _e[e & 63 | 128] + _e[e >> 8 & 255] + "-" + _e[e >> 16 & 255] + _e[e >> 24 & 255] + _e[n & 255] + _e[n >> 8 & 255] + _e[n >> 16 & 255] + _e[n >> 24 & 255]).toLowerCase();
}
function Ot(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function ql(i, t) {
  return (i % t + t) % t;
}
function ws(i, t, e) {
  return (1 - e) * i + e * t;
}
function mi(i, t) {
  switch (t.constructor) {
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
function Te(i, t) {
  switch (t.constructor) {
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
const $l = { DEG2RAD: hs };
class Nt {
  constructor(t = 0, e = 0) {
    Nt.prototype.isVector2 = true, this.x = t, this.y = e;
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, e) {
    return this.x = t, this.y = e, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, s = t.elements;
    return this.x = s[0] * e + s[3] * n + s[6], this.y = s[1] * e + s[4] * n + s[7], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  clamp(t, e) {
    return this.x = Ot(this.x, t.x, e.x), this.y = Ot(this.y, t.y, e.y), this;
  }
  clampScalar(t, e) {
    return this.x = Ot(this.x, t, e), this.y = Ot(this.y, t, e), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ot(n, t, e));
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
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
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
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(Ot(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y;
    return e * e + n * n;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this;
  }
  rotateAround(t, e) {
    const n = Math.cos(e), s = Math.sin(e), r = this.x - t.x, a = this.y - t.y;
    return this.x = r * n - a * s + t.x, this.y = r * s + a * n + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class On {
  constructor(t = 0, e = 0, n = 0, s = 1) {
    this.isQuaternion = true, this._x = t, this._y = e, this._z = n, this._w = s;
  }
  static slerpFlat(t, e, n, s, r, a, o) {
    let c = n[s + 0], l = n[s + 1], u = n[s + 2], d = n[s + 3], f = r[a + 0], m = r[a + 1], _ = r[a + 2], v = r[a + 3];
    if (o <= 0) {
      t[e + 0] = c, t[e + 1] = l, t[e + 2] = u, t[e + 3] = d;
      return;
    }
    if (o >= 1) {
      t[e + 0] = f, t[e + 1] = m, t[e + 2] = _, t[e + 3] = v;
      return;
    }
    if (d !== v || c !== f || l !== m || u !== _) {
      let p = c * f + l * m + u * _ + d * v;
      p < 0 && (f = -f, m = -m, _ = -_, v = -v, p = -p);
      let h = 1 - o;
      if (p < 0.9995) {
        const S = Math.acos(p), y = Math.sin(S);
        h = Math.sin(h * S) / y, o = Math.sin(o * S) / y, c = c * h + f * o, l = l * h + m * o, u = u * h + _ * o, d = d * h + v * o;
      } else {
        c = c * h + f * o, l = l * h + m * o, u = u * h + _ * o, d = d * h + v * o;
        const S = 1 / Math.sqrt(c * c + l * l + u * u + d * d);
        c *= S, l *= S, u *= S, d *= S;
      }
    }
    t[e] = c, t[e + 1] = l, t[e + 2] = u, t[e + 3] = d;
  }
  static multiplyQuaternionsFlat(t, e, n, s, r, a) {
    const o = n[s], c = n[s + 1], l = n[s + 2], u = n[s + 3], d = r[a], f = r[a + 1], m = r[a + 2], _ = r[a + 3];
    return t[e] = o * _ + u * d + c * m - l * f, t[e + 1] = c * _ + u * f + l * d - o * m, t[e + 2] = l * _ + u * m + o * f - c * d, t[e + 3] = u * _ - o * d - c * f - l * m, t;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    this._w = t, this._onChangeCallback();
  }
  set(t, e, n, s) {
    return this._x = t, this._y = e, this._z = n, this._w = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
  setFromEuler(t, e = true) {
    const n = t._x, s = t._y, r = t._z, a = t._order, o = Math.cos, c = Math.sin, l = o(n / 2), u = o(s / 2), d = o(r / 2), f = c(n / 2), m = c(s / 2), _ = c(r / 2);
    switch (a) {
      case "XYZ":
        this._x = f * u * d + l * m * _, this._y = l * m * d - f * u * _, this._z = l * u * _ + f * m * d, this._w = l * u * d - f * m * _;
        break;
      case "YXZ":
        this._x = f * u * d + l * m * _, this._y = l * m * d - f * u * _, this._z = l * u * _ - f * m * d, this._w = l * u * d + f * m * _;
        break;
      case "ZXY":
        this._x = f * u * d - l * m * _, this._y = l * m * d + f * u * _, this._z = l * u * _ + f * m * d, this._w = l * u * d - f * m * _;
        break;
      case "ZYX":
        this._x = f * u * d - l * m * _, this._y = l * m * d + f * u * _, this._z = l * u * _ - f * m * d, this._w = l * u * d + f * m * _;
        break;
      case "YZX":
        this._x = f * u * d + l * m * _, this._y = l * m * d + f * u * _, this._z = l * u * _ - f * m * d, this._w = l * u * d - f * m * _;
        break;
      case "XZY":
        this._x = f * u * d - l * m * _, this._y = l * m * d - f * u * _, this._z = l * u * _ + f * m * d, this._w = l * u * d + f * m * _;
        break;
      default:
        Ct("Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return e === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, e) {
    const n = e / 2, s = Math.sin(n);
    return this._x = t.x * s, this._y = t.y * s, this._z = t.z * s, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t) {
    const e = t.elements, n = e[0], s = e[4], r = e[8], a = e[1], o = e[5], c = e[9], l = e[2], u = e[6], d = e[10], f = n + o + d;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / m, this._x = (u - c) * m, this._y = (r - l) * m, this._z = (a - s) * m;
    } else if (n > o && n > d) {
      const m = 2 * Math.sqrt(1 + n - o - d);
      this._w = (u - c) / m, this._x = 0.25 * m, this._y = (s + a) / m, this._z = (r + l) / m;
    } else if (o > d) {
      const m = 2 * Math.sqrt(1 + o - n - d);
      this._w = (r - l) / m, this._x = (s + a) / m, this._y = 0.25 * m, this._z = (c + u) / m;
    } else {
      const m = 2 * Math.sqrt(1 + d - n - o);
      this._w = (a - s) / m, this._x = (r + l) / m, this._y = (c + u) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, e) {
    let n = t.dot(e) + 1;
    return n < 1e-8 ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize();
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(Ot(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    const n = this.angleTo(t);
    if (n === 0) return this;
    const s = Math.min(1, e / n);
    return this.slerp(t, s), this;
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
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let t = this.length();
    return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    const n = t._x, s = t._y, r = t._z, a = t._w, o = e._x, c = e._y, l = e._z, u = e._w;
    return this._x = n * u + a * o + s * l - r * c, this._y = s * u + a * c + r * o - n * l, this._z = r * u + a * l + n * c - s * o, this._w = a * u - n * o - s * c - r * l, this._onChangeCallback(), this;
  }
  slerp(t, e) {
    if (e <= 0) return this;
    if (e >= 1) return this.copy(t);
    let n = t._x, s = t._y, r = t._z, a = t._w, o = this.dot(t);
    o < 0 && (n = -n, s = -s, r = -r, a = -a, o = -o);
    let c = 1 - e;
    if (o < 0.9995) {
      const l = Math.acos(o), u = Math.sin(l);
      c = Math.sin(c * l) / u, e = Math.sin(e * l) / u, this._x = this._x * c + n * e, this._y = this._y * c + s * e, this._z = this._z * c + r * e, this._w = this._w * c + a * e, this._onChangeCallback();
    } else this._x = this._x * c + n * e, this._y = this._y * c + s * e, this._z = this._z * c + r * e, this._w = this._w * c + a * e, this.normalize();
    return this;
  }
  slerpQuaternions(t, e, n) {
    return this.copy(t).slerp(e, n);
  }
  random() {
    const t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), n = Math.random(), s = Math.sqrt(1 - n), r = Math.sqrt(n);
    return this.set(s * Math.sin(t), s * Math.cos(t), r * Math.sin(e), r * Math.cos(e));
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
  }
  fromArray(t, e = 0) {
    return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
  }
  fromBufferAttribute(t, e) {
    return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class N {
  constructor(t = 0, e = 0, n = 0) {
    N.prototype.isVector3 = true, this.x = t, this.y = e, this.z = n;
  }
  set(t, e, n) {
    return n === void 0 && (n = this.z), this.x = t, this.y = e, this.z = n, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  multiplyVectors(t, e) {
    return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
  }
  applyEuler(t) {
    return this.applyQuaternion(Sa.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(Sa.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, s = this.z, r = t.elements;
    return this.x = r[0] * e + r[3] * n + r[6] * s, this.y = r[1] * e + r[4] * n + r[7] * s, this.z = r[2] * e + r[5] * n + r[8] * s, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, s = this.z, r = t.elements, a = 1 / (r[3] * e + r[7] * n + r[11] * s + r[15]);
    return this.x = (r[0] * e + r[4] * n + r[8] * s + r[12]) * a, this.y = (r[1] * e + r[5] * n + r[9] * s + r[13]) * a, this.z = (r[2] * e + r[6] * n + r[10] * s + r[14]) * a, this;
  }
  applyQuaternion(t) {
    const e = this.x, n = this.y, s = this.z, r = t.x, a = t.y, o = t.z, c = t.w, l = 2 * (a * s - o * n), u = 2 * (o * e - r * s), d = 2 * (r * n - a * e);
    return this.x = e + c * l + a * d - o * u, this.y = n + c * u + o * l - r * d, this.z = s + c * d + r * u - a * l, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    const e = this.x, n = this.y, s = this.z, r = t.elements;
    return this.x = r[0] * e + r[4] * n + r[8] * s, this.y = r[1] * e + r[5] * n + r[9] * s, this.z = r[2] * e + r[6] * n + r[10] * s, this.normalize();
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  clamp(t, e) {
    return this.x = Ot(this.x, t.x, e.x), this.y = Ot(this.y, t.y, e.y), this.z = Ot(this.z, t.z, e.z), this;
  }
  clampScalar(t, e) {
    return this.x = Ot(this.x, t, e), this.y = Ot(this.y, t, e), this.z = Ot(this.z, t, e), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ot(n, t, e));
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
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
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
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this;
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    const n = t.x, s = t.y, r = t.z, a = e.x, o = e.y, c = e.z;
    return this.x = s * c - r * o, this.y = r * a - n * c, this.z = n * o - s * a, this;
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (e === 0) return this.set(0, 0, 0);
    const n = t.dot(this) / e;
    return this.copy(t).multiplyScalar(n);
  }
  projectOnPlane(t) {
    return Rs.copy(this).projectOnVector(t), this.sub(Rs);
  }
  reflect(t) {
    return this.sub(Rs.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(Ot(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y, s = this.z - t.z;
    return e * e + n * n + s * s;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, n) {
    const s = Math.sin(e) * t;
    return this.x = s * Math.sin(n), this.y = Math.cos(e) * t, this.z = s * Math.cos(n), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, n) {
    return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this;
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), s = this.setFromMatrixColumn(t, 2).length();
    return this.x = e, this.y = n, this.z = s, this;
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, e * 4);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, e * 3);
  }
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  setFromColor(t) {
    return this.x = t.r, this.y = t.g, this.z = t.b, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const t = Math.random() * Math.PI * 2, e = Math.random() * 2 - 1, n = Math.sqrt(1 - e * e);
    return this.x = n * Math.cos(t), this.y = e, this.z = n * Math.sin(t), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Rs = new N(), Sa = new On();
class Ut {
  constructor(t, e, n, s, r, a, o, c, l) {
    Ut.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n, s, r, a, o, c, l);
  }
  set(t, e, n, s, r, a, o, c, l) {
    const u = this.elements;
    return u[0] = t, u[1] = s, u[2] = o, u[3] = e, u[4] = r, u[5] = c, u[6] = n, u[7] = a, u[8] = l, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(t) {
    const e = t.elements;
    return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, s = e.elements, r = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], u = n[4], d = n[7], f = n[2], m = n[5], _ = n[8], v = s[0], p = s[3], h = s[6], S = s[1], y = s[4], A = s[7], P = s[2], T = s[5], C = s[8];
    return r[0] = a * v + o * S + c * P, r[3] = a * p + o * y + c * T, r[6] = a * h + o * A + c * C, r[1] = l * v + u * S + d * P, r[4] = l * p + u * y + d * T, r[7] = l * h + u * A + d * C, r[2] = f * v + m * S + _ * P, r[5] = f * p + m * y + _ * T, r[8] = f * h + m * A + _ * C, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], c = t[6], l = t[7], u = t[8];
    return e * a * u - e * o * l - n * r * u + n * o * c + s * r * l - s * a * c;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], c = t[6], l = t[7], u = t[8], d = u * a - o * l, f = o * c - u * r, m = l * r - a * c, _ = e * d + n * f + s * m;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const v = 1 / _;
    return t[0] = d * v, t[1] = (s * l - u * n) * v, t[2] = (o * n - s * a) * v, t[3] = f * v, t[4] = (u * e - s * c) * v, t[5] = (s * r - o * e) * v, t[6] = m * v, t[7] = (n * c - l * e) * v, t[8] = (a * e - n * r) * v, this;
  }
  transpose() {
    let t;
    const e = this.elements;
    return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const e = this.elements;
    return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
  }
  setUvTransform(t, e, n, s, r, a, o) {
    const c = Math.cos(r), l = Math.sin(r);
    return this.set(n * c, n * l, -n * (c * a + l * o) + a + t, -s * l, s * c, -s * (-l * a + c * o) + o + e, 0, 0, 1), this;
  }
  scale(t, e) {
    return this.premultiply(Cs.makeScale(t, e)), this;
  }
  rotate(t) {
    return this.premultiply(Cs.makeRotation(-t)), this;
  }
  translate(t, e) {
    return this.premultiply(Cs.makeTranslation(t, e)), this;
  }
  makeTranslation(t, e) {
    return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, e, 0, 0, 1), this;
  }
  makeRotation(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this;
  }
  makeScale(t, e) {
    return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this;
  }
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let s = 0; s < 9; s++) if (e[s] !== n[s]) return false;
    return true;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Cs = new Ut(), Ea = new Ut().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), ya = new Ut().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function jl() {
  const i = { enabled: true, workingColorSpace: ci, spaces: {}, convert: function(s, r, a) {
    return this.enabled === false || r === a || !r || !a || (this.spaces[r].transfer === jt && (s.r = hn(s.r), s.g = hn(s.g), s.b = hn(s.b)), this.spaces[r].primaries !== this.spaces[a].primaries && (s.applyMatrix3(this.spaces[r].toXYZ), s.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === jt && (s.r = ri(s.r), s.g = ri(s.g), s.b = ri(s.b))), s;
  }, workingToColorSpace: function(s, r) {
    return this.convert(s, this.workingColorSpace, r);
  }, colorSpaceToWorking: function(s, r) {
    return this.convert(s, r, this.workingColorSpace);
  }, getPrimaries: function(s) {
    return this.spaces[s].primaries;
  }, getTransfer: function(s) {
    return s === bn ? ds : this.spaces[s].transfer;
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
    return wi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), i.workingToColorSpace(s, r);
  }, toWorkingColorSpace: function(s, r) {
    return wi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), i.colorSpaceToWorking(s, r);
  } }, t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], e = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return i.define({ [ci]: { primaries: t, whitePoint: n, transfer: ds, toXYZ: Ea, fromXYZ: ya, luminanceCoefficients: e, workingColorSpaceConfig: { unpackColorSpace: Oe }, outputColorSpaceConfig: { drawingBufferColorSpace: Oe } }, [Oe]: { primaries: t, whitePoint: n, transfer: jt, toXYZ: Ea, fromXYZ: ya, luminanceCoefficients: e, outputColorSpaceConfig: { drawingBufferColorSpace: Oe } } }), i;
}
const Xt = jl();
function hn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function ri(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Gn;
class Kl {
  static getDataURL(t, e = "image/png") {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u") return t.src;
    let n;
    if (t instanceof HTMLCanvasElement) n = t;
    else {
      Gn === void 0 && (Gn = ps("canvas")), Gn.width = t.width, Gn.height = t.height;
      const s = Gn.getContext("2d");
      t instanceof ImageData ? s.putImageData(t, 0, 0) : s.drawImage(t, 0, 0, t.width, t.height), n = Gn;
    }
    return n.toDataURL(e);
  }
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const e = ps("canvas");
      e.width = t.width, e.height = t.height;
      const n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      const s = n.getImageData(0, 0, t.width, t.height), r = s.data;
      for (let a = 0; a < r.length; a++) r[a] = hn(r[a] / 255) * 255;
      return n.putImageData(s, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let n = 0; n < e.length; n++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(hn(e[n] / 255) * 255) : e[n] = hn(e[n]);
      return { data: e, width: t.width, height: t.height };
    } else return Ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let Zl = 0;
class ia {
  constructor(t = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: Zl++ }), this.uuid = Ci(), this.data = t, this.dataReady = true, this.version = 0;
  }
  getSize(t) {
    const e = this.data;
    return typeof HTMLVideoElement < "u" && e instanceof HTMLVideoElement ? t.set(e.videoWidth, e.videoHeight, 0) : e instanceof VideoFrame ? t.set(e.displayHeight, e.displayWidth, 0) : e !== null ? t.set(e.width, e.height, e.depth || 0) : t.set(0, 0, 0), t;
  }
  set needsUpdate(t) {
    t === true && this.version++;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.images[this.uuid] !== void 0) return t.images[this.uuid];
    const n = { uuid: this.uuid, url: "" }, s = this.data;
    if (s !== null) {
      let r;
      if (Array.isArray(s)) {
        r = [];
        for (let a = 0, o = s.length; a < o; a++) s[a].isDataTexture ? r.push(Ps(s[a].image)) : r.push(Ps(s[a]));
      } else r = Ps(s);
      n.url = r;
    }
    return e || (t.images[this.uuid] = n), n;
  }
}
function Ps(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Kl.getDataURL(i) : i.data ? { data: Array.from(i.data), width: i.width, height: i.height, type: i.data.constructor.name } : (Ct("Texture: Unable to serialize Texture."), {});
}
let Jl = 0;
const Ds = new N();
class ve extends zn {
  constructor(t = ve.DEFAULT_IMAGE, e = ve.DEFAULT_MAPPING, n = on, s = on, r = ze, a = Nn, o = Ye, c = un, l = ve.DEFAULT_ANISOTROPY, u = bn) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: Jl++ }), this.uuid = Ci(), this.name = "", this.source = new ia(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = s, this.magFilter = r, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new Nt(0, 0), this.repeat = new Nt(1, 1), this.center = new Nt(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Ut(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0;
  }
  get width() {
    return this.source.getSize(Ds).x;
  }
  get height() {
    return this.source.getSize(Ds).y;
  }
  get depth() {
    return this.source.getSize(Ds).z;
  }
  get image() {
    return this.source.data;
  }
  set image(t = null) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.renderTarget = t.renderTarget, this.isRenderTargetTexture = t.isRenderTargetTexture, this.isArrayTexture = t.isArrayTexture, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = true, this;
  }
  setValues(t) {
    for (const e in t) {
      const n = t[e];
      if (n === void 0) {
        Ct(`Texture.setValues(): parameter '${e}' has value of undefined.`);
        continue;
      }
      const s = this[e];
      if (s === void 0) {
        Ct(`Texture.setValues(): property '${e}' does not exist.`);
        continue;
      }
      s && n && s.isVector2 && n.isVector2 || s && n && s.isVector3 && n.isVector3 || s && n && s.isMatrix3 && n.isMatrix3 ? s.copy(n) : this[e] = n;
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.textures[this.uuid] !== void 0) return t.textures[this.uuid];
    const n = { metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== bo) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
      case mr:
        t.x = t.x - Math.floor(t.x);
        break;
      case on:
        t.x = t.x < 0 ? 0 : 1;
        break;
      case xr:
        Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
        break;
    }
    if (t.y < 0 || t.y > 1) switch (this.wrapT) {
      case mr:
        t.y = t.y - Math.floor(t.y);
        break;
      case on:
        t.y = t.y < 0 ? 0 : 1;
        break;
      case xr:
        Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
        break;
    }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    t === true && (this.version++, this.source.needsUpdate = true);
  }
  set needsPMREMUpdate(t) {
    t === true && this.pmremVersion++;
  }
}
ve.DEFAULT_IMAGE = null;
ve.DEFAULT_MAPPING = bo;
ve.DEFAULT_ANISOTROPY = 1;
class he {
  constructor(t = 0, e = 0, n = 0, s = 1) {
    he.prototype.isVector4 = true, this.x = t, this.y = e, this.z = n, this.w = s;
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, e, n, s) {
    return this.x = t, this.y = e, this.z = n, this.w = s, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this.w = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setW(t) {
    return this.w = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this.w += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, s = this.z, r = this.w, a = t.elements;
    return this.x = a[0] * e + a[4] * n + a[8] * s + a[12] * r, this.y = a[1] * e + a[5] * n + a[9] * s + a[13] * r, this.z = a[2] * e + a[6] * n + a[10] * s + a[14] * r, this.w = a[3] * e + a[7] * n + a[11] * s + a[15] * r, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this.w /= t.w, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const e = Math.sqrt(1 - t.w * t.w);
    return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
  }
  setAxisAngleFromRotationMatrix(t) {
    let e, n, s, r;
    const c = t.elements, l = c[0], u = c[4], d = c[8], f = c[1], m = c[5], _ = c[9], v = c[2], p = c[6], h = c[10];
    if (Math.abs(u - f) < 0.01 && Math.abs(d - v) < 0.01 && Math.abs(_ - p) < 0.01) {
      if (Math.abs(u + f) < 0.1 && Math.abs(d + v) < 0.1 && Math.abs(_ + p) < 0.1 && Math.abs(l + m + h - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const y = (l + 1) / 2, A = (m + 1) / 2, P = (h + 1) / 2, T = (u + f) / 4, C = (d + v) / 4, z = (_ + p) / 4;
      return y > A && y > P ? y < 0.01 ? (n = 0, s = 0.707106781, r = 0.707106781) : (n = Math.sqrt(y), s = T / n, r = C / n) : A > P ? A < 0.01 ? (n = 0.707106781, s = 0, r = 0.707106781) : (s = Math.sqrt(A), n = T / s, r = z / s) : P < 0.01 ? (n = 0.707106781, s = 0.707106781, r = 0) : (r = Math.sqrt(P), n = C / r, s = z / r), this.set(n, s, r, e), this;
    }
    let S = Math.sqrt((p - _) * (p - _) + (d - v) * (d - v) + (f - u) * (f - u));
    return Math.abs(S) < 1e-3 && (S = 1), this.x = (p - _) / S, this.y = (d - v) / S, this.z = (f - u) / S, this.w = Math.acos((l + m + h - 1) / 2), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
  }
  clamp(t, e) {
    return this.x = Ot(this.x, t.x, e.x), this.y = Ot(this.y, t.y, e.y), this.z = Ot(this.z, t.z, e.z), this.w = Ot(this.w, t.w, e.w), this;
  }
  clampScalar(t, e) {
    return this.x = Ot(this.x, t, e), this.y = Ot(this.y, t, e), this.z = Ot(this.z, t, e), this.w = Ot(this.w, t, e), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ot(n, t, e));
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
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
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
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Ql extends zn {
  constructor(t = 1, e = 1, n = {}) {
    super(), n = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: ze, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1, depth: 1, multiview: false }, n), this.isRenderTarget = true, this.width = t, this.height = e, this.depth = n.depth, this.scissor = new he(0, 0, t, e), this.scissorTest = false, this.viewport = new he(0, 0, t, e);
    const s = { width: t, height: e, depth: n.depth }, r = new ve(s);
    this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++) this.textures[o] = r.clone(), this.textures[o].isRenderTargetTexture = true, this.textures[o].renderTarget = this;
    this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview;
  }
  _setTextureOptions(t = {}) {
    const e = { minFilter: ze, generateMipmaps: false, flipY: false, internalFormat: null };
    t.mapping !== void 0 && (e.mapping = t.mapping), t.wrapS !== void 0 && (e.wrapS = t.wrapS), t.wrapT !== void 0 && (e.wrapT = t.wrapT), t.wrapR !== void 0 && (e.wrapR = t.wrapR), t.magFilter !== void 0 && (e.magFilter = t.magFilter), t.minFilter !== void 0 && (e.minFilter = t.minFilter), t.format !== void 0 && (e.format = t.format), t.type !== void 0 && (e.type = t.type), t.anisotropy !== void 0 && (e.anisotropy = t.anisotropy), t.colorSpace !== void 0 && (e.colorSpace = t.colorSpace), t.flipY !== void 0 && (e.flipY = t.flipY), t.generateMipmaps !== void 0 && (e.generateMipmaps = t.generateMipmaps), t.internalFormat !== void 0 && (e.internalFormat = t.internalFormat);
    for (let n = 0; n < this.textures.length; n++) this.textures[n].setValues(e);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(t) {
    this.textures[0] = t;
  }
  set depthTexture(t) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), t !== null && (t.renderTarget = this), this._depthTexture = t;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(t, e, n = 1) {
    if (this.width !== t || this.height !== e || this.depth !== n) {
      this.width = t, this.height = e, this.depth = n;
      for (let s = 0, r = this.textures.length; s < r; s++) this.textures[s].image.width = t, this.textures[s].image.height = e, this.textures[s].image.depth = n, this.textures[s].isData3DTexture !== true && (this.textures[s].isArrayTexture = this.textures[s].image.depth > 1);
      this.dispose();
    }
    this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.textures.length = 0;
    for (let e = 0, n = t.textures.length; e < n; e++) {
      this.textures[e] = t.textures[e].clone(), this.textures[e].isRenderTargetTexture = true, this.textures[e].renderTarget = this;
      const s = Object.assign({}, t.textures[e].image);
      this.textures[e].source = new ia(s);
    }
    return this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Bn extends Ql {
  constructor(t = 1, e = 1, n = {}) {
    super(t, e, n), this.isWebGLRenderTarget = true;
  }
}
class Do extends ve {
  constructor(t = null, e = 1, n = 1, s = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: t, width: e, height: n, depth: s }, this.magFilter = Ue, this.minFilter = Ue, this.wrapR = on, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class tc extends ve {
  constructor(t = null, e = 1, n = 1, s = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: t, width: e, height: n, depth: s }, this.magFilter = Ue, this.minFilter = Ue, this.wrapR = on, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class Pi {
  constructor(t = new N(1 / 0, 1 / 0, 1 / 0), e = new N(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = t, this.max = e;
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e += 3) this.expandByPoint(Ge.fromArray(t, e));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, n = t.count; e < n; e++) this.expandByPoint(Ge.fromBufferAttribute(t, e));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const n = Ge.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
  }
  setFromObject(t, e = false) {
    return this.makeEmpty(), this.expandByObject(t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  expandByObject(t, e = false) {
    t.updateWorldMatrix(false, false);
    const n = t.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (e === true && r !== void 0 && t.isInstancedMesh !== true) for (let a = 0, o = r.count; a < o; a++) t.isMesh === true ? t.getVertexPosition(a, Ge) : Ge.fromBufferAttribute(r, a), Ge.applyMatrix4(t.matrixWorld), this.expandByPoint(Ge);
      else t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), Fi.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Fi.copy(n.boundingBox)), Fi.applyMatrix4(t.matrixWorld), this.union(Fi);
    }
    const s = t.children;
    for (let r = 0, a = s.length; r < a; r++) this.expandByObject(s[r], e);
    return this;
  }
  containsPoint(t) {
    return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z;
  }
  containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
  }
  getParameter(t, e) {
    return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(t) {
    return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z;
  }
  intersectsSphere(t) {
    return this.clampPoint(t.center, Ge), Ge.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  intersectsPlane(t) {
    let e, n;
    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
  }
  intersectsTriangle(t) {
    if (this.isEmpty()) return false;
    this.getCenter(xi), Oi.subVectors(this.max, xi), Hn.subVectors(t.a, xi), Wn.subVectors(t.b, xi), Xn.subVectors(t.c, xi), pn.subVectors(Wn, Hn), mn.subVectors(Xn, Wn), wn.subVectors(Hn, Xn);
    let e = [0, -pn.z, pn.y, 0, -mn.z, mn.y, 0, -wn.z, wn.y, pn.z, 0, -pn.x, mn.z, 0, -mn.x, wn.z, 0, -wn.x, -pn.y, pn.x, 0, -mn.y, mn.x, 0, -wn.y, wn.x, 0];
    return !Ls(e, Hn, Wn, Xn, Oi) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Ls(e, Hn, Wn, Xn, Oi)) ? false : (Bi.crossVectors(pn, mn), e = [Bi.x, Bi.y, Bi.z], Ls(e, Hn, Wn, Xn, Oi));
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, Ge).distanceTo(t);
  }
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(Ge).length() * 0.5), t;
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty() ? this : (Je[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), Je[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), Je[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), Je[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), Je[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), Je[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), Je[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), Je[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(Je), this);
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
  toJSON() {
    return { min: this.min.toArray(), max: this.max.toArray() };
  }
  fromJSON(t) {
    return this.min.fromArray(t.min), this.max.fromArray(t.max), this;
  }
}
const Je = [new N(), new N(), new N(), new N(), new N(), new N(), new N(), new N()], Ge = new N(), Fi = new Pi(), Hn = new N(), Wn = new N(), Xn = new N(), pn = new N(), mn = new N(), wn = new N(), xi = new N(), Oi = new N(), Bi = new N(), Rn = new N();
function Ls(i, t, e, n, s) {
  for (let r = 0, a = i.length - 3; r <= a; r += 3) {
    Rn.fromArray(i, r);
    const o = s.x * Math.abs(Rn.x) + s.y * Math.abs(Rn.y) + s.z * Math.abs(Rn.z), c = t.dot(Rn), l = e.dot(Rn), u = n.dot(Rn);
    if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > o) return false;
  }
  return true;
}
const ec = new Pi(), _i = new N(), Us = new N();
class Di {
  constructor(t = new N(), e = -1) {
    this.isSphere = true, this.center = t, this.radius = e;
  }
  set(t, e) {
    return this.center.copy(t), this.radius = e, this;
  }
  setFromPoints(t, e) {
    const n = this.center;
    e !== void 0 ? n.copy(e) : ec.setFromPoints(t).getCenter(n);
    let s = 0;
    for (let r = 0, a = t.length; r < a; r++) s = Math.max(s, n.distanceToSquared(t[r]));
    return this.radius = Math.sqrt(s), this;
  }
  copy(t) {
    return this.center.copy(t.center), this.radius = t.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t) {
    const e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, e) {
    const n = this.center.distanceToSquared(t);
    return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
  }
  getBoundingBox(t) {
    return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  applyMatrix4(t) {
    return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
  }
  translate(t) {
    return this.center.add(t), this;
  }
  expandByPoint(t) {
    if (this.isEmpty()) return this.center.copy(t), this.radius = 0, this;
    _i.subVectors(t, this.center);
    const e = _i.lengthSq();
    if (e > this.radius * this.radius) {
      const n = Math.sqrt(e), s = (n - this.radius) * 0.5;
      this.center.addScaledVector(_i, s / n), this.radius += s;
    }
    return this;
  }
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === true ? this.radius = Math.max(this.radius, t.radius) : (Us.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(_i.copy(t.center).add(Us)), this.expandByPoint(_i.copy(t.center).sub(Us))), this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { radius: this.radius, center: this.center.toArray() };
  }
  fromJSON(t) {
    return this.radius = t.radius, this.center.fromArray(t.center), this;
  }
}
const Qe = new N(), Is = new N(), zi = new N(), xn = new N(), Ns = new N(), Vi = new N(), Fs = new N();
class Ms {
  constructor(t = new N(), e = new N(0, 0, -1)) {
    this.origin = t, this.direction = e;
  }
  set(t, e) {
    return this.origin.copy(t), this.direction.copy(e), this;
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  at(t, e) {
    return e.copy(this.origin).addScaledVector(this.direction, t);
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  recast(t) {
    return this.origin.copy(this.at(t, Qe)), this;
  }
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin);
    const n = e.dot(this.direction);
    return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const e = Qe.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (Qe.copy(this.origin).addScaledVector(this.direction, e), Qe.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, n, s) {
    Is.copy(t).add(e).multiplyScalar(0.5), zi.copy(e).sub(t).normalize(), xn.copy(this.origin).sub(Is);
    const r = t.distanceTo(e) * 0.5, a = -this.direction.dot(zi), o = xn.dot(this.direction), c = -xn.dot(zi), l = xn.lengthSq(), u = Math.abs(1 - a * a);
    let d, f, m, _;
    if (u > 0) if (d = a * c - o, f = a * o - c, _ = r * u, d >= 0) if (f >= -_) if (f <= _) {
      const v = 1 / u;
      d *= v, f *= v, m = d * (d + a * f + 2 * o) + f * (a * d + f + 2 * c) + l;
    } else f = r, d = Math.max(0, -(a * f + o)), m = -d * d + f * (f + 2 * c) + l;
    else f = -r, d = Math.max(0, -(a * f + o)), m = -d * d + f * (f + 2 * c) + l;
    else f <= -_ ? (d = Math.max(0, -(-a * r + o)), f = d > 0 ? -r : Math.min(Math.max(-r, -c), r), m = -d * d + f * (f + 2 * c) + l) : f <= _ ? (d = 0, f = Math.min(Math.max(-r, -c), r), m = f * (f + 2 * c) + l) : (d = Math.max(0, -(a * r + o)), f = d > 0 ? r : Math.min(Math.max(-r, -c), r), m = -d * d + f * (f + 2 * c) + l);
    else f = a > 0 ? -r : r, d = Math.max(0, -(a * f + o)), m = -d * d + f * (f + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, d), s && s.copy(Is).addScaledVector(zi, f), m;
  }
  intersectSphere(t, e) {
    Qe.subVectors(t.center, this.origin);
    const n = Qe.dot(this.direction), s = Qe.dot(Qe) - n * n, r = t.radius * t.radius;
    if (s > r) return null;
    const a = Math.sqrt(r - s), o = n - a, c = n + a;
    return c < 0 ? null : o < 0 ? this.at(c, e) : this.at(o, e);
  }
  intersectsSphere(t) {
    return t.radius < 0 ? false : this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (e === 0) return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(t.normal) + t.constant) / e;
    return n >= 0 ? n : null;
  }
  intersectPlane(t, e) {
    const n = this.distanceToPlane(t);
    return n === null ? null : this.at(n, e);
  }
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    return e === 0 || t.normal.dot(this.direction) * e < 0;
  }
  intersectBox(t, e) {
    let n, s, r, a, o, c;
    const l = 1 / this.direction.x, u = 1 / this.direction.y, d = 1 / this.direction.z, f = this.origin;
    return l >= 0 ? (n = (t.min.x - f.x) * l, s = (t.max.x - f.x) * l) : (n = (t.max.x - f.x) * l, s = (t.min.x - f.x) * l), u >= 0 ? (r = (t.min.y - f.y) * u, a = (t.max.y - f.y) * u) : (r = (t.max.y - f.y) * u, a = (t.min.y - f.y) * u), n > a || r > s || ((r > n || isNaN(n)) && (n = r), (a < s || isNaN(s)) && (s = a), d >= 0 ? (o = (t.min.z - f.z) * d, c = (t.max.z - f.z) * d) : (o = (t.max.z - f.z) * d, c = (t.min.z - f.z) * d), n > c || o > s) || ((o > n || n !== n) && (n = o), (c < s || s !== s) && (s = c), s < 0) ? null : this.at(n >= 0 ? n : s, e);
  }
  intersectsBox(t) {
    return this.intersectBox(t, Qe) !== null;
  }
  intersectTriangle(t, e, n, s, r) {
    Ns.subVectors(e, t), Vi.subVectors(n, t), Fs.crossVectors(Ns, Vi);
    let a = this.direction.dot(Fs), o;
    if (a > 0) {
      if (s) return null;
      o = 1;
    } else if (a < 0) o = -1, a = -a;
    else return null;
    xn.subVectors(this.origin, t);
    const c = o * this.direction.dot(Vi.crossVectors(xn, Vi));
    if (c < 0) return null;
    const l = o * this.direction.dot(Ns.cross(xn));
    if (l < 0 || c + l > a) return null;
    const u = -o * xn.dot(Fs);
    return u < 0 ? null : this.at(u / a, r);
  }
  applyMatrix4(t) {
    return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ie {
  constructor(t, e, n, s, r, a, o, c, l, u, d, f, m, _, v, p) {
    ie.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n, s, r, a, o, c, l, u, d, f, m, _, v, p);
  }
  set(t, e, n, s, r, a, o, c, l, u, d, f, m, _, v, p) {
    const h = this.elements;
    return h[0] = t, h[4] = e, h[8] = n, h[12] = s, h[1] = r, h[5] = a, h[9] = o, h[13] = c, h[2] = l, h[6] = u, h[10] = d, h[14] = f, h[3] = m, h[7] = _, h[11] = v, h[15] = p, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new ie().fromArray(this.elements);
  }
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
  }
  copyPosition(t) {
    const e = this.elements, n = t.elements;
    return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
  }
  setFromMatrix3(t) {
    const e = t.elements;
    return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(t, e, n) {
    return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(t) {
    const e = this.elements, n = t.elements, s = 1 / Yn.setFromMatrixColumn(t, 0).length(), r = 1 / Yn.setFromMatrixColumn(t, 1).length(), a = 1 / Yn.setFromMatrixColumn(t, 2).length();
    return e[0] = n[0] * s, e[1] = n[1] * s, e[2] = n[2] * s, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const e = this.elements, n = t.x, s = t.y, r = t.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(s), l = Math.sin(s), u = Math.cos(r), d = Math.sin(r);
    if (t.order === "XYZ") {
      const f = a * u, m = a * d, _ = o * u, v = o * d;
      e[0] = c * u, e[4] = -c * d, e[8] = l, e[1] = m + _ * l, e[5] = f - v * l, e[9] = -o * c, e[2] = v - f * l, e[6] = _ + m * l, e[10] = a * c;
    } else if (t.order === "YXZ") {
      const f = c * u, m = c * d, _ = l * u, v = l * d;
      e[0] = f + v * o, e[4] = _ * o - m, e[8] = a * l, e[1] = a * d, e[5] = a * u, e[9] = -o, e[2] = m * o - _, e[6] = v + f * o, e[10] = a * c;
    } else if (t.order === "ZXY") {
      const f = c * u, m = c * d, _ = l * u, v = l * d;
      e[0] = f - v * o, e[4] = -a * d, e[8] = _ + m * o, e[1] = m + _ * o, e[5] = a * u, e[9] = v - f * o, e[2] = -a * l, e[6] = o, e[10] = a * c;
    } else if (t.order === "ZYX") {
      const f = a * u, m = a * d, _ = o * u, v = o * d;
      e[0] = c * u, e[4] = _ * l - m, e[8] = f * l + v, e[1] = c * d, e[5] = v * l + f, e[9] = m * l - _, e[2] = -l, e[6] = o * c, e[10] = a * c;
    } else if (t.order === "YZX") {
      const f = a * c, m = a * l, _ = o * c, v = o * l;
      e[0] = c * u, e[4] = v - f * d, e[8] = _ * d + m, e[1] = d, e[5] = a * u, e[9] = -o * u, e[2] = -l * u, e[6] = m * d + _, e[10] = f - v * d;
    } else if (t.order === "XZY") {
      const f = a * c, m = a * l, _ = o * c, v = o * l;
      e[0] = c * u, e[4] = -d, e[8] = l * u, e[1] = f * d + v, e[5] = a * u, e[9] = m * d - _, e[2] = _ * d - m, e[6] = o * u, e[10] = v * d + f;
    }
    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(nc, t, ic);
  }
  lookAt(t, e, n) {
    const s = this.elements;
    return De.subVectors(t, e), De.lengthSq() === 0 && (De.z = 1), De.normalize(), _n.crossVectors(n, De), _n.lengthSq() === 0 && (Math.abs(n.z) === 1 ? De.x += 1e-4 : De.z += 1e-4, De.normalize(), _n.crossVectors(n, De)), _n.normalize(), ki.crossVectors(De, _n), s[0] = _n.x, s[4] = ki.x, s[8] = De.x, s[1] = _n.y, s[5] = ki.y, s[9] = De.y, s[2] = _n.z, s[6] = ki.z, s[10] = De.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, s = e.elements, r = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], u = n[1], d = n[5], f = n[9], m = n[13], _ = n[2], v = n[6], p = n[10], h = n[14], S = n[3], y = n[7], A = n[11], P = n[15], T = s[0], C = s[4], z = s[8], b = s[12], M = s[1], D = s[5], B = s[9], k = s[13], q = s[2], W = s[6], $ = s[10], J = s[14], G = s[3], nt = s[7], rt = s[11], bt = s[15];
    return r[0] = a * T + o * M + c * q + l * G, r[4] = a * C + o * D + c * W + l * nt, r[8] = a * z + o * B + c * $ + l * rt, r[12] = a * b + o * k + c * J + l * bt, r[1] = u * T + d * M + f * q + m * G, r[5] = u * C + d * D + f * W + m * nt, r[9] = u * z + d * B + f * $ + m * rt, r[13] = u * b + d * k + f * J + m * bt, r[2] = _ * T + v * M + p * q + h * G, r[6] = _ * C + v * D + p * W + h * nt, r[10] = _ * z + v * B + p * $ + h * rt, r[14] = _ * b + v * k + p * J + h * bt, r[3] = S * T + y * M + A * q + P * G, r[7] = S * C + y * D + A * W + P * nt, r[11] = S * z + y * B + A * $ + P * rt, r[15] = S * b + y * k + A * J + P * bt, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[4], s = t[8], r = t[12], a = t[1], o = t[5], c = t[9], l = t[13], u = t[2], d = t[6], f = t[10], m = t[14], _ = t[3], v = t[7], p = t[11], h = t[15];
    return _ * (+r * c * d - s * l * d - r * o * f + n * l * f + s * o * m - n * c * m) + v * (+e * c * m - e * l * f + r * a * f - s * a * m + s * l * u - r * c * u) + p * (+e * l * d - e * o * m - r * a * d + n * a * m + r * o * u - n * l * u) + h * (-s * o * u - e * c * d + e * o * f + s * a * d - n * a * f + n * c * u);
  }
  transpose() {
    const t = this.elements;
    let e;
    return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
  }
  setPosition(t, e, n) {
    const s = this.elements;
    return t.isVector3 ? (s[12] = t.x, s[13] = t.y, s[14] = t.z) : (s[12] = t, s[13] = e, s[14] = n), this;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], c = t[6], l = t[7], u = t[8], d = t[9], f = t[10], m = t[11], _ = t[12], v = t[13], p = t[14], h = t[15], S = d * p * l - v * f * l + v * c * m - o * p * m - d * c * h + o * f * h, y = _ * f * l - u * p * l - _ * c * m + a * p * m + u * c * h - a * f * h, A = u * v * l - _ * d * l + _ * o * m - a * v * m - u * o * h + a * d * h, P = _ * d * c - u * v * c - _ * o * f + a * v * f + u * o * p - a * d * p, T = e * S + n * y + s * A + r * P;
    if (T === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const C = 1 / T;
    return t[0] = S * C, t[1] = (v * f * r - d * p * r - v * s * m + n * p * m + d * s * h - n * f * h) * C, t[2] = (o * p * r - v * c * r + v * s * l - n * p * l - o * s * h + n * c * h) * C, t[3] = (d * c * r - o * f * r - d * s * l + n * f * l + o * s * m - n * c * m) * C, t[4] = y * C, t[5] = (u * p * r - _ * f * r + _ * s * m - e * p * m - u * s * h + e * f * h) * C, t[6] = (_ * c * r - a * p * r - _ * s * l + e * p * l + a * s * h - e * c * h) * C, t[7] = (a * f * r - u * c * r + u * s * l - e * f * l - a * s * m + e * c * m) * C, t[8] = A * C, t[9] = (_ * d * r - u * v * r - _ * n * m + e * v * m + u * n * h - e * d * h) * C, t[10] = (a * v * r - _ * o * r + _ * n * l - e * v * l - a * n * h + e * o * h) * C, t[11] = (u * o * r - a * d * r - u * n * l + e * d * l + a * n * m - e * o * m) * C, t[12] = P * C, t[13] = (u * v * s - _ * d * s + _ * n * f - e * v * f - u * n * p + e * d * p) * C, t[14] = (_ * o * s - a * v * s - _ * n * c + e * v * c + a * n * p - e * o * p) * C, t[15] = (a * d * s - u * o * s + u * n * c - e * d * c - a * n * f + e * o * f) * C, this;
  }
  scale(t) {
    const e = this.elements, n = t.x, s = t.y, r = t.z;
    return e[0] *= n, e[4] *= s, e[8] *= r, e[1] *= n, e[5] *= s, e[9] *= r, e[2] *= n, e[6] *= s, e[10] *= r, e[3] *= n, e[7] *= s, e[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], s = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, n, s));
  }
  makeTranslation(t, e, n) {
    return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(t, e) {
    const n = Math.cos(e), s = Math.sin(e), r = 1 - n, a = t.x, o = t.y, c = t.z, l = r * a, u = r * o;
    return this.set(l * a + n, l * o - s * c, l * c + s * o, 0, l * o + s * c, u * o + n, u * c - s * a, 0, l * c - s * o, u * c + s * a, r * c * c + n, 0, 0, 0, 0, 1), this;
  }
  makeScale(t, e, n) {
    return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(t, e, n, s, r, a) {
    return this.set(1, n, r, 0, t, 1, a, 0, e, s, 1, 0, 0, 0, 0, 1), this;
  }
  compose(t, e, n) {
    const s = this.elements, r = e._x, a = e._y, o = e._z, c = e._w, l = r + r, u = a + a, d = o + o, f = r * l, m = r * u, _ = r * d, v = a * u, p = a * d, h = o * d, S = c * l, y = c * u, A = c * d, P = n.x, T = n.y, C = n.z;
    return s[0] = (1 - (v + h)) * P, s[1] = (m + A) * P, s[2] = (_ - y) * P, s[3] = 0, s[4] = (m - A) * T, s[5] = (1 - (f + h)) * T, s[6] = (p + S) * T, s[7] = 0, s[8] = (_ + y) * C, s[9] = (p - S) * C, s[10] = (1 - (f + v)) * C, s[11] = 0, s[12] = t.x, s[13] = t.y, s[14] = t.z, s[15] = 1, this;
  }
  decompose(t, e, n) {
    const s = this.elements;
    let r = Yn.set(s[0], s[1], s[2]).length();
    const a = Yn.set(s[4], s[5], s[6]).length(), o = Yn.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (r = -r), t.x = s[12], t.y = s[13], t.z = s[14], He.copy(this);
    const l = 1 / r, u = 1 / a, d = 1 / o;
    return He.elements[0] *= l, He.elements[1] *= l, He.elements[2] *= l, He.elements[4] *= u, He.elements[5] *= u, He.elements[6] *= u, He.elements[8] *= d, He.elements[9] *= d, He.elements[10] *= d, e.setFromRotationMatrix(He), n.x = r, n.y = a, n.z = o, this;
  }
  makePerspective(t, e, n, s, r, a, o = je, c = false) {
    const l = this.elements, u = 2 * r / (e - t), d = 2 * r / (n - s), f = (e + t) / (e - t), m = (n + s) / (n - s);
    let _, v;
    if (c) _ = r / (a - r), v = a * r / (a - r);
    else if (o === je) _ = -(a + r) / (a - r), v = -2 * a * r / (a - r);
    else if (o === fs) _ = -a / (a - r), v = -a * r / (a - r);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = u, l[4] = 0, l[8] = f, l[12] = 0, l[1] = 0, l[5] = d, l[9] = m, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = _, l[14] = v, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(t, e, n, s, r, a, o = je, c = false) {
    const l = this.elements, u = 2 / (e - t), d = 2 / (n - s), f = -(e + t) / (e - t), m = -(n + s) / (n - s);
    let _, v;
    if (c) _ = 1 / (a - r), v = a / (a - r);
    else if (o === je) _ = -2 / (a - r), v = -(a + r) / (a - r);
    else if (o === fs) _ = -1 / (a - r), v = -r / (a - r);
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = u, l[4] = 0, l[8] = 0, l[12] = f, l[1] = 0, l[5] = d, l[9] = 0, l[13] = m, l[2] = 0, l[6] = 0, l[10] = _, l[14] = v, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let s = 0; s < 16; s++) if (e[s] !== n[s]) return false;
    return true;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t;
  }
}
const Yn = new N(), He = new ie(), nc = new N(0, 0, 0), ic = new N(1, 1, 1), _n = new N(), ki = new N(), De = new N(), Ta = new ie(), Aa = new On();
class dn {
  constructor(t = 0, e = 0, n = 0, s = dn.DEFAULT_ORDER) {
    this.isEuler = true, this._x = t, this._y = e, this._z = n, this._order = s;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  set(t, e, n, s = this._order) {
    return this._x = t, this._y = e, this._z = n, this._order = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t, e = this._order, n = true) {
    const s = t.elements, r = s[0], a = s[4], o = s[8], c = s[1], l = s[5], u = s[9], d = s[2], f = s[6], m = s[10];
    switch (e) {
      case "XYZ":
        this._y = Math.asin(Ot(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-u, m), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(f, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ot(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-d, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ot(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-d, m), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, r));
        break;
      case "ZYX":
        this._y = Math.asin(-Ot(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(f, m), this._z = Math.atan2(c, r)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(Ot(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-d, r)) : (this._x = 0, this._y = Math.atan2(o, m));
        break;
      case "XZY":
        this._z = Math.asin(-Ot(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(f, l), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-u, m), this._y = 0);
        break;
      default:
        Ct("Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
    }
    return this._order = e, n === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, e, n) {
    return Ta.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Ta, e, n);
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return Aa.setFromEuler(this), this.setFromQuaternion(Aa, t);
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
dn.DEFAULT_ORDER = "XYZ";
class Lo {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = (1 << t | 0) >>> 0;
  }
  enable(t) {
    this.mask |= 1 << t | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= 1 << t | 0;
  }
  disable(t) {
    this.mask &= ~(1 << t | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
  isEnabled(t) {
    return (this.mask & (1 << t | 0)) !== 0;
  }
}
let sc = 0;
const wa = new N(), qn = new On(), tn = new ie(), Gi = new N(), gi = new N(), rc = new N(), ac = new On(), Ra = new N(1, 0, 0), Ca = new N(0, 1, 0), Pa = new N(0, 0, 1), Da = { type: "added" }, oc = { type: "removed" }, $n = { type: "childadded", child: null }, Os = { type: "childremoved", child: null };
class Se extends zn {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: sc++ }), this.uuid = Ci(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Se.DEFAULT_UP.clone();
    const t = new N(), e = new dn(), n = new On(), s = new N(1, 1, 1);
    function r() {
      n.setFromEuler(e, false);
    }
    function a() {
      e.setFromQuaternion(n, void 0, false);
    }
    e._onChange(r), n._onChange(a), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: t }, rotation: { configurable: true, enumerable: true, value: e }, quaternion: { configurable: true, enumerable: true, value: n }, scale: { configurable: true, enumerable: true, value: s }, modelViewMatrix: { value: new ie() }, normalMatrix: { value: new Ut() } }), this.matrix = new ie(), this.matrixWorld = new ie(), this.matrixAutoUpdate = Se.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new Lo(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, true);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, e) {
    return qn.setFromAxisAngle(t, e), this.quaternion.multiply(qn), this;
  }
  rotateOnWorldAxis(t, e) {
    return qn.setFromAxisAngle(t, e), this.quaternion.premultiply(qn), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(Ra, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(Ca, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(Pa, t);
  }
  translateOnAxis(t, e) {
    return wa.copy(t).applyQuaternion(this.quaternion), this.position.add(wa.multiplyScalar(e)), this;
  }
  translateX(t) {
    return this.translateOnAxis(Ra, t);
  }
  translateY(t) {
    return this.translateOnAxis(Ca, t);
  }
  translateZ(t) {
    return this.translateOnAxis(Pa, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(true, false), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(true, false), t.applyMatrix4(tn.copy(this.matrixWorld).invert());
  }
  lookAt(t, e, n) {
    t.isVector3 ? Gi.copy(t) : Gi.set(t, e, n);
    const s = this.parent;
    this.updateWorldMatrix(true, false), gi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? tn.lookAt(gi, Gi, this.up) : tn.lookAt(Gi, gi, this.up), this.quaternion.setFromRotationMatrix(tn), s && (tn.extractRotation(s.matrixWorld), qn.setFromRotationMatrix(tn), this.quaternion.premultiply(qn.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
      return this;
    }
    return t === this ? (ce("Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(Da), $n.child = t, this.dispatchEvent($n), $n.child = null) : ce("Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const e = this.children.indexOf(t);
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(oc), Os.child = t, this.dispatchEvent(Os), Os.child = null), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(true, false), tn.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(true, false), tn.multiply(t.parent.matrixWorld)), t.applyMatrix4(tn), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(false, true), t.dispatchEvent(Da), $n.child = t, this.dispatchEvent($n), $n.child = null, this;
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, e) {
    if (this[t] === e) return this;
    for (let n = 0, s = this.children.length; n < s; n++) {
      const a = this.children[n].getObjectByProperty(t, e);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(t, e, n = []) {
    this[t] === e && n.push(this);
    const s = this.children;
    for (let r = 0, a = s.length; r < a; r++) s[r].getObjectsByProperty(t, e, n);
    return n;
  }
  getWorldPosition(t) {
    return this.updateWorldMatrix(true, false), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(gi, t, rc), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(gi, ac, t), t;
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(true, false);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {
  }
  traverse(t) {
    t(this);
    const e = this.children;
    for (let n = 0, s = e.length; n < s; n++) e[n].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === false) return;
    t(this);
    const e = this.children;
    for (let n = 0, s = e.length; n < s; n++) e[n].traverseVisible(t);
  }
  traverseAncestors(t) {
    const e = this.parent;
    e !== null && (t(e), e.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, t = true);
    const e = this.children;
    for (let n = 0, s = e.length; n < s; n++) e[n].updateMatrixWorld(t);
  }
  updateWorldMatrix(t, e) {
    const n = this.parent;
    if (t === true && n !== null && n.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), e === true) {
      const s = this.children;
      for (let r = 0, a = s.length; r < a; r++) s[r].updateWorldMatrix(false, true);
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string", n = {};
    e && (t = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.7, type: "Object", generator: "Object3D.toJSON" });
    const s = {};
    s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === true && (s.castShadow = true), this.receiveShadow === true && (s.receiveShadow = true), this.visible === false && (s.visible = false), this.frustumCulled === false && (s.frustumCulled = false), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), this.matrixAutoUpdate === false && (s.matrixAutoUpdate = false), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s.type = "BatchedMesh", s.perObjectFrustumCulled = this.perObjectFrustumCulled, s.sortObjects = this.sortObjects, s.drawRanges = this._drawRanges, s.reservedRanges = this._reservedRanges, s.geometryInfo = this._geometryInfo.map((o) => ({ ...o, boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0, boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0 })), s.instanceInfo = this._instanceInfo.map((o) => ({ ...o })), s.availableInstanceIds = this._availableInstanceIds.slice(), s.availableGeometryIds = this._availableGeometryIds.slice(), s.nextIndexStart = this._nextIndexStart, s.nextVertexStart = this._nextVertexStart, s.geometryCount = this._geometryCount, s.maxInstanceCount = this._maxInstanceCount, s.maxVertexCount = this._maxVertexCount, s.maxIndexCount = this._maxIndexCount, s.geometryInitialized = this._geometryInitialized, s.matricesTexture = this._matricesTexture.toJSON(t), s.indirectTexture = this._indirectTexture.toJSON(t), this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (s.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (s.boundingBox = this.boundingBox.toJSON()));
    function r(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(t)), c.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (s.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      s.geometry = r(t.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c)) for (let l = 0, u = c.length; l < u; l++) {
          const d = c[l];
          r(t.shapes, d);
        }
        else r(t.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(t.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const o = [];
      for (let c = 0, l = this.material.length; c < l; c++) o.push(r(t.materials, this.material[c]));
      s.material = o;
    } else s.material = r(t.materials, this.material);
    if (this.children.length > 0) {
      s.children = [];
      for (let o = 0; o < this.children.length; o++) s.children.push(this.children[o].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      s.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        s.animations.push(r(t.animations, c));
      }
    }
    if (e) {
      const o = a(t.geometries), c = a(t.materials), l = a(t.textures), u = a(t.images), d = a(t.shapes), f = a(t.skeletons), m = a(t.animations), _ = a(t.nodes);
      o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), u.length > 0 && (n.images = u), d.length > 0 && (n.shapes = d), f.length > 0 && (n.skeletons = f), m.length > 0 && (n.animations = m), _.length > 0 && (n.nodes = _);
    }
    return n.object = s, n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const u = o[l];
        delete u.metadata, c.push(u);
      }
      return c;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, e = true) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), e === true) for (let n = 0; n < t.children.length; n++) {
      const s = t.children[n];
      this.add(s.clone());
    }
    return this;
  }
}
Se.DEFAULT_UP = new N(0, 1, 0);
Se.DEFAULT_MATRIX_AUTO_UPDATE = true;
Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const We = new N(), en = new N(), Bs = new N(), nn = new N(), jn = new N(), Kn = new N(), La = new N(), zs = new N(), Vs = new N(), ks = new N(), Gs = new he(), Hs = new he(), Ws = new he();
class Xe {
  constructor(t = new N(), e = new N(), n = new N()) {
    this.a = t, this.b = e, this.c = n;
  }
  static getNormal(t, e, n, s) {
    s.subVectors(n, e), We.subVectors(t, e), s.cross(We);
    const r = s.lengthSq();
    return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0);
  }
  static getBarycoord(t, e, n, s, r) {
    We.subVectors(s, e), en.subVectors(n, e), Bs.subVectors(t, e);
    const a = We.dot(We), o = We.dot(en), c = We.dot(Bs), l = en.dot(en), u = en.dot(Bs), d = a * l - o * o;
    if (d === 0) return r.set(0, 0, 0), null;
    const f = 1 / d, m = (l * c - o * u) * f, _ = (a * u - o * c) * f;
    return r.set(1 - m - _, _, m);
  }
  static containsPoint(t, e, n, s) {
    return this.getBarycoord(t, e, n, s, nn) === null ? false : nn.x >= 0 && nn.y >= 0 && nn.x + nn.y <= 1;
  }
  static getInterpolation(t, e, n, s, r, a, o, c) {
    return this.getBarycoord(t, e, n, s, nn) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(r, nn.x), c.addScaledVector(a, nn.y), c.addScaledVector(o, nn.z), c);
  }
  static getInterpolatedAttribute(t, e, n, s, r, a) {
    return Gs.setScalar(0), Hs.setScalar(0), Ws.setScalar(0), Gs.fromBufferAttribute(t, e), Hs.fromBufferAttribute(t, n), Ws.fromBufferAttribute(t, s), a.setScalar(0), a.addScaledVector(Gs, r.x), a.addScaledVector(Hs, r.y), a.addScaledVector(Ws, r.z), a;
  }
  static isFrontFacing(t, e, n, s) {
    return We.subVectors(n, e), en.subVectors(t, e), We.cross(en).dot(s) < 0;
  }
  set(t, e, n) {
    return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
  }
  setFromPointsAndIndices(t, e, n, s) {
    return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[s]), this;
  }
  setFromAttributeAndIndices(t, e, n, s) {
    return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, s), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return We.subVectors(this.c, this.b), en.subVectors(this.a, this.b), We.cross(en).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return Xe.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return Xe.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getInterpolation(t, e, n, s, r) {
    return Xe.getInterpolation(t, this.a, this.b, this.c, e, n, s, r);
  }
  containsPoint(t) {
    return Xe.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return Xe.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    const n = this.a, s = this.b, r = this.c;
    let a, o;
    jn.subVectors(s, n), Kn.subVectors(r, n), zs.subVectors(t, n);
    const c = jn.dot(zs), l = Kn.dot(zs);
    if (c <= 0 && l <= 0) return e.copy(n);
    Vs.subVectors(t, s);
    const u = jn.dot(Vs), d = Kn.dot(Vs);
    if (u >= 0 && d <= u) return e.copy(s);
    const f = c * d - u * l;
    if (f <= 0 && c >= 0 && u <= 0) return a = c / (c - u), e.copy(n).addScaledVector(jn, a);
    ks.subVectors(t, r);
    const m = jn.dot(ks), _ = Kn.dot(ks);
    if (_ >= 0 && m <= _) return e.copy(r);
    const v = m * l - c * _;
    if (v <= 0 && l >= 0 && _ <= 0) return o = l / (l - _), e.copy(n).addScaledVector(Kn, o);
    const p = u * _ - m * d;
    if (p <= 0 && d - u >= 0 && m - _ >= 0) return La.subVectors(r, s), o = (d - u) / (d - u + (m - _)), e.copy(s).addScaledVector(La, o);
    const h = 1 / (p + v + f);
    return a = v * h, o = f * h, e.copy(n).addScaledVector(jn, a).addScaledVector(Kn, o);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
const Uo = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, gn = { h: 0, s: 0, l: 0 }, Hi = { h: 0, s: 0, l: 0 };
function Xs(i, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? i + (t - i) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? i + (t - i) * 6 * (2 / 3 - e) : i;
}
class Bt {
  constructor(t, e, n) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, n);
  }
  set(t, e, n) {
    if (e === void 0 && n === void 0) {
      const s = t;
      s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s);
    } else this.setRGB(t, e, n);
    return this;
  }
  setScalar(t) {
    return this.r = t, this.g = t, this.b = t, this;
  }
  setHex(t, e = Oe) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, Xt.colorSpaceToWorking(this, e), this;
  }
  setRGB(t, e, n, s = Xt.workingColorSpace) {
    return this.r = t, this.g = e, this.b = n, Xt.colorSpaceToWorking(this, s), this;
  }
  setHSL(t, e, n, s = Xt.workingColorSpace) {
    if (t = ql(t, 1), e = Ot(e, 0, 1), n = Ot(n, 0, 1), e === 0) this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + e) : n + e - n * e, a = 2 * n - r;
      this.r = Xs(a, r, t + 1 / 3), this.g = Xs(a, r, t), this.b = Xs(a, r, t - 1 / 3);
    }
    return Xt.colorSpaceToWorking(this, s), this;
  }
  setStyle(t, e = Oe) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && Ct("Color: Alpha component of " + t + " will be ignored.");
    }
    let s;
    if (s = /^(\w+)\(([^\)]*)\)/.exec(t)) {
      let r;
      const a = s[1], o = s[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, e);
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, e);
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, e);
          break;
        default:
          Ct("Color: Unknown color model " + t);
      }
    } else if (s = /^\#([A-Fa-f\d]+)$/.exec(t)) {
      const r = s[1], a = r.length;
      if (a === 3) return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, e);
      if (a === 6) return this.setHex(parseInt(r, 16), e);
      Ct("Color: Invalid hex color " + t);
    } else if (t && t.length > 0) return this.setColorName(t, e);
    return this;
  }
  setColorName(t, e = Oe) {
    const n = Uo[t.toLowerCase()];
    return n !== void 0 ? this.setHex(n, e) : Ct("Color: Unknown color " + t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  copySRGBToLinear(t) {
    return this.r = hn(t.r), this.g = hn(t.g), this.b = hn(t.b), this;
  }
  copyLinearToSRGB(t) {
    return this.r = ri(t.r), this.g = ri(t.g), this.b = ri(t.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = Oe) {
    return Xt.workingToColorSpace(ge.copy(this), t), Math.round(Ot(ge.r * 255, 0, 255)) * 65536 + Math.round(Ot(ge.g * 255, 0, 255)) * 256 + Math.round(Ot(ge.b * 255, 0, 255));
  }
  getHexString(t = Oe) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, e = Xt.workingColorSpace) {
    Xt.workingToColorSpace(ge.copy(this), e);
    const n = ge.r, s = ge.g, r = ge.b, a = Math.max(n, s, r), o = Math.min(n, s, r);
    let c, l;
    const u = (o + a) / 2;
    if (o === a) c = 0, l = 0;
    else {
      const d = a - o;
      switch (l = u <= 0.5 ? d / (a + o) : d / (2 - a - o), a) {
        case n:
          c = (s - r) / d + (s < r ? 6 : 0);
          break;
        case s:
          c = (r - n) / d + 2;
          break;
        case r:
          c = (n - s) / d + 4;
          break;
      }
      c /= 6;
    }
    return t.h = c, t.s = l, t.l = u, t;
  }
  getRGB(t, e = Xt.workingColorSpace) {
    return Xt.workingToColorSpace(ge.copy(this), e), t.r = ge.r, t.g = ge.g, t.b = ge.b, t;
  }
  getStyle(t = Oe) {
    Xt.workingToColorSpace(ge.copy(this), t);
    const e = ge.r, n = ge.g, s = ge.b;
    return t !== Oe ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(s * 255)})`;
  }
  offsetHSL(t, e, n) {
    return this.getHSL(gn), this.setHSL(gn.h + t, gn.s + e, gn.l + n);
  }
  add(t) {
    return this.r += t.r, this.g += t.g, this.b += t.b, this;
  }
  addColors(t, e) {
    return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
  }
  addScalar(t) {
    return this.r += t, this.g += t, this.b += t, this;
  }
  sub(t) {
    return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
  }
  multiply(t) {
    return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
  }
  multiplyScalar(t) {
    return this.r *= t, this.g *= t, this.b *= t, this;
  }
  lerp(t, e) {
    return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
  }
  lerpColors(t, e, n) {
    return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this;
  }
  lerpHSL(t, e) {
    this.getHSL(gn), t.getHSL(Hi);
    const n = ws(gn.h, Hi.h, e), s = ws(gn.s, Hi.s, e), r = ws(gn.l, Hi.l, e);
    return this.setHSL(n, s, r), this;
  }
  setFromVector3(t) {
    return this.r = t.x, this.g = t.y, this.b = t.z, this;
  }
  applyMatrix3(t) {
    const e = this.r, n = this.g, s = this.b, r = t.elements;
    return this.r = r[0] * e + r[3] * n + r[6] * s, this.g = r[1] * e + r[4] * n + r[7] * s, this.b = r[2] * e + r[5] * n + r[8] * s, this;
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, e = 0) {
    return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
  }
  fromBufferAttribute(t, e) {
    return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const ge = new Bt();
Bt.NAMES = Uo;
let lc = 0;
class di extends zn {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: lc++ }), this.uuid = Ci(), this.name = "", this.type = "Material", this.blending = si, this.side = yn, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = sr, this.blendDst = rr, this.blendEquation = Un, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Bt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = ai, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = _a, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = kn, this.stencilZFail = kn, this.stencilZPass = kn, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.allowOverride = true, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(t) {
    if (t !== void 0) for (const e in t) {
      const n = t[e];
      if (n === void 0) {
        Ct(`Material: parameter '${e}' has value of undefined.`);
        continue;
      }
      const s = this[e];
      if (s === void 0) {
        Ct(`Material: '${e}' is not a property of THREE.${this.type}.`);
        continue;
      }
      s && s.isColor ? s.set(n) : s && s.isVector3 && n && n.isVector3 ? s.copy(n) : this[e] = n;
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    e && (t = { textures: {}, images: {} });
    const n = { metadata: { version: 4.7, type: "Material", generator: "Material.toJSON" } };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(t).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(t).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== si && (n.blending = this.blending), this.side !== yn && (n.side = this.side), this.vertexColors === true && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = true), this.blendSrc !== sr && (n.blendSrc = this.blendSrc), this.blendDst !== rr && (n.blendDst = this.blendDst), this.blendEquation !== Un && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== ai && (n.depthFunc = this.depthFunc), this.depthTest === false && (n.depthTest = this.depthTest), this.depthWrite === false && (n.depthWrite = this.depthWrite), this.colorWrite === false && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== _a && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== kn && (n.stencilFail = this.stencilFail), this.stencilZFail !== kn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== kn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === true && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === true && (n.alphaHash = true), this.alphaToCoverage === true && (n.alphaToCoverage = true), this.premultipliedAlpha === true && (n.premultipliedAlpha = true), this.forceSinglePass === true && (n.forceSinglePass = true), this.wireframe === true && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = true), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function s(r) {
      const a = [];
      for (const o in r) {
        const c = r[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (e) {
      const r = s(t.textures), a = s(t.images);
      r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
    const e = t.clippingPlanes;
    let n = null;
    if (e !== null) {
      const s = e.length;
      n = new Array(s);
      for (let r = 0; r !== s; ++r) n[r] = e[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(t) {
    t === true && this.version++;
  }
}
class ms extends di {
  constructor(t) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Bt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new dn(), this.combine = Mo, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const ue = new N(), Wi = new Nt();
let cc = 0;
class Ve {
  constructor(t, e, n = false) {
    if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, Object.defineProperty(this, "id", { value: cc++ }), this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = ga, this.updateRanges = [], this.gpuType = ln, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(t) {
    t === true && this.version++;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this;
  }
  copyAt(t, e, n) {
    t *= this.itemSize, n *= e.itemSize;
    for (let s = 0, r = this.itemSize; s < r; s++) this.array[t + s] = e.array[n + s];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  applyMatrix3(t) {
    if (this.itemSize === 2) for (let e = 0, n = this.count; e < n; e++) Wi.fromBufferAttribute(this, e), Wi.applyMatrix3(t), this.setXY(e, Wi.x, Wi.y);
    else if (this.itemSize === 3) for (let e = 0, n = this.count; e < n; e++) ue.fromBufferAttribute(this, e), ue.applyMatrix3(t), this.setXYZ(e, ue.x, ue.y, ue.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.count; e < n; e++) ue.fromBufferAttribute(this, e), ue.applyMatrix4(t), this.setXYZ(e, ue.x, ue.y, ue.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++) ue.fromBufferAttribute(this, e), ue.applyNormalMatrix(t), this.setXYZ(e, ue.x, ue.y, ue.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++) ue.fromBufferAttribute(this, e), ue.transformDirection(t), this.setXYZ(e, ue.x, ue.y, ue.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.itemSize + e];
    return this.normalized && (n = mi(n, this.array)), n;
  }
  setComponent(t, e, n) {
    return this.normalized && (n = Te(n, this.array)), this.array[t * this.itemSize + e] = n, this;
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = mi(e, this.array)), e;
  }
  setX(t, e) {
    return this.normalized && (e = Te(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = mi(e, this.array)), e;
  }
  setY(t, e) {
    return this.normalized && (e = Te(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = mi(e, this.array)), e;
  }
  setZ(t, e) {
    return this.normalized && (e = Te(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = mi(e, this.array)), e;
  }
  setW(t, e) {
    return this.normalized && (e = Te(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
  }
  setXY(t, e, n) {
    return t *= this.itemSize, this.normalized && (e = Te(e, this.array), n = Te(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this;
  }
  setXYZ(t, e, n, s) {
    return t *= this.itemSize, this.normalized && (e = Te(e, this.array), n = Te(n, this.array), s = Te(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = s, this;
  }
  setXYZW(t, e, n, s, r) {
    return t *= this.itemSize, this.normalized && (e = Te(e, this.array), n = Te(n, this.array), s = Te(s, this.array), r = Te(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = s, this.array[t + 3] = r, this;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (t.name = this.name), this.usage !== ga && (t.usage = this.usage), t;
  }
}
class Io extends Ve {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
}
class No extends Ve {
  constructor(t, e, n) {
    super(new Uint32Array(t), e, n);
  }
}
class Re extends Ve {
  constructor(t, e, n) {
    super(new Float32Array(t), e, n);
  }
}
let hc = 0;
const Fe = new ie(), Ys = new Se(), Zn = new N(), Le = new Pi(), vi = new Pi(), me = new N();
class Ie extends zn {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: hc++ }), this.uuid = Ci(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (Po(t) ? No : Io)(t, 1) : this.index = t, this;
  }
  setIndirect(t) {
    return this.indirect = t, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, e) {
    return this.attributes[t] = e, this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, e, n = 0) {
    this.groups.push({ start: t, count: e, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, e) {
    this.drawRange.start = t, this.drawRange.count = e;
  }
  applyMatrix4(t) {
    const e = this.attributes.position;
    e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = true);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new Ut().getNormalMatrix(t);
      n.applyNormalMatrix(r), n.needsUpdate = true;
    }
    const s = this.attributes.tangent;
    return s !== void 0 && (s.transformDirection(t), s.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(t) {
    return Fe.makeRotationFromQuaternion(t), this.applyMatrix4(Fe), this;
  }
  rotateX(t) {
    return Fe.makeRotationX(t), this.applyMatrix4(Fe), this;
  }
  rotateY(t) {
    return Fe.makeRotationY(t), this.applyMatrix4(Fe), this;
  }
  rotateZ(t) {
    return Fe.makeRotationZ(t), this.applyMatrix4(Fe), this;
  }
  translate(t, e, n) {
    return Fe.makeTranslation(t, e, n), this.applyMatrix4(Fe), this;
  }
  scale(t, e, n) {
    return Fe.makeScale(t, e, n), this.applyMatrix4(Fe), this;
  }
  lookAt(t) {
    return Ys.lookAt(t), Ys.updateMatrix(), this.applyMatrix4(Ys.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Zn).negate(), this.translate(Zn.x, Zn.y, Zn.z), this;
  }
  setFromPoints(t) {
    const e = this.getAttribute("position");
    if (e === void 0) {
      const n = [];
      for (let s = 0, r = t.length; s < r; s++) {
        const a = t[s];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new Re(n, 3));
    } else {
      const n = Math.min(t.length, e.count);
      for (let s = 0; s < n; s++) {
        const r = t[s];
        e.setXYZ(s, r.x, r.y, r.z || 0);
      }
      t.length > e.count && Ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), e.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Pi());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new N(-1 / 0, -1 / 0, -1 / 0), new N(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), e) for (let n = 0, s = e.length; n < s; n++) {
        const r = e[n];
        Le.setFromBufferAttribute(r), this.morphTargetsRelative ? (me.addVectors(this.boundingBox.min, Le.min), this.boundingBox.expandByPoint(me), me.addVectors(this.boundingBox.max, Le.max), this.boundingBox.expandByPoint(me)) : (this.boundingBox.expandByPoint(Le.min), this.boundingBox.expandByPoint(Le.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Di());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new N(), 1 / 0);
      return;
    }
    if (t) {
      const n = this.boundingSphere.center;
      if (Le.setFromBufferAttribute(t), e) for (let r = 0, a = e.length; r < a; r++) {
        const o = e[r];
        vi.setFromBufferAttribute(o), this.morphTargetsRelative ? (me.addVectors(Le.min, vi.min), Le.expandByPoint(me), me.addVectors(Le.max, vi.max), Le.expandByPoint(me)) : (Le.expandByPoint(vi.min), Le.expandByPoint(vi.max));
      }
      Le.getCenter(n);
      let s = 0;
      for (let r = 0, a = t.count; r < a; r++) me.fromBufferAttribute(t, r), s = Math.max(s, n.distanceToSquared(me));
      if (e) for (let r = 0, a = e.length; r < a; r++) {
        const o = e[r], c = this.morphTargetsRelative;
        for (let l = 0, u = o.count; l < u; l++) me.fromBufferAttribute(o, l), c && (Zn.fromBufferAttribute(t, l), me.add(Zn)), s = Math.max(s, n.distanceToSquared(me));
      }
      this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const t = this.index, e = this.attributes;
    if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
      ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.position, s = e.normal, r = e.uv;
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new Ve(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], c = [];
    for (let z = 0; z < n.count; z++) o[z] = new N(), c[z] = new N();
    const l = new N(), u = new N(), d = new N(), f = new Nt(), m = new Nt(), _ = new Nt(), v = new N(), p = new N();
    function h(z, b, M) {
      l.fromBufferAttribute(n, z), u.fromBufferAttribute(n, b), d.fromBufferAttribute(n, M), f.fromBufferAttribute(r, z), m.fromBufferAttribute(r, b), _.fromBufferAttribute(r, M), u.sub(l), d.sub(l), m.sub(f), _.sub(f);
      const D = 1 / (m.x * _.y - _.x * m.y);
      isFinite(D) && (v.copy(u).multiplyScalar(_.y).addScaledVector(d, -m.y).multiplyScalar(D), p.copy(d).multiplyScalar(m.x).addScaledVector(u, -_.x).multiplyScalar(D), o[z].add(v), o[b].add(v), o[M].add(v), c[z].add(p), c[b].add(p), c[M].add(p));
    }
    let S = this.groups;
    S.length === 0 && (S = [{ start: 0, count: t.count }]);
    for (let z = 0, b = S.length; z < b; ++z) {
      const M = S[z], D = M.start, B = M.count;
      for (let k = D, q = D + B; k < q; k += 3) h(t.getX(k + 0), t.getX(k + 1), t.getX(k + 2));
    }
    const y = new N(), A = new N(), P = new N(), T = new N();
    function C(z) {
      P.fromBufferAttribute(s, z), T.copy(P);
      const b = o[z];
      y.copy(b), y.sub(P.multiplyScalar(P.dot(b))).normalize(), A.crossVectors(T, b);
      const D = A.dot(c[z]) < 0 ? -1 : 1;
      a.setXYZW(z, y.x, y.y, y.z, D);
    }
    for (let z = 0, b = S.length; z < b; ++z) {
      const M = S[z], D = M.start, B = M.count;
      for (let k = D, q = D + B; k < q; k += 3) C(t.getX(k + 0)), C(t.getX(k + 1)), C(t.getX(k + 2));
    }
  }
  computeVertexNormals() {
    const t = this.index, e = this.getAttribute("position");
    if (e !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0) n = new Ve(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n);
      else for (let f = 0, m = n.count; f < m; f++) n.setXYZ(f, 0, 0, 0);
      const s = new N(), r = new N(), a = new N(), o = new N(), c = new N(), l = new N(), u = new N(), d = new N();
      if (t) for (let f = 0, m = t.count; f < m; f += 3) {
        const _ = t.getX(f + 0), v = t.getX(f + 1), p = t.getX(f + 2);
        s.fromBufferAttribute(e, _), r.fromBufferAttribute(e, v), a.fromBufferAttribute(e, p), u.subVectors(a, r), d.subVectors(s, r), u.cross(d), o.fromBufferAttribute(n, _), c.fromBufferAttribute(n, v), l.fromBufferAttribute(n, p), o.add(u), c.add(u), l.add(u), n.setXYZ(_, o.x, o.y, o.z), n.setXYZ(v, c.x, c.y, c.z), n.setXYZ(p, l.x, l.y, l.z);
      }
      else for (let f = 0, m = e.count; f < m; f += 3) s.fromBufferAttribute(e, f + 0), r.fromBufferAttribute(e, f + 1), a.fromBufferAttribute(e, f + 2), u.subVectors(a, r), d.subVectors(s, r), u.cross(d), n.setXYZ(f + 0, u.x, u.y, u.z), n.setXYZ(f + 1, u.x, u.y, u.z), n.setXYZ(f + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, n = t.count; e < n; e++) me.fromBufferAttribute(t, e), me.normalize(), t.setXYZ(e, me.x, me.y, me.z);
  }
  toNonIndexed() {
    function t(o, c) {
      const l = o.array, u = o.itemSize, d = o.normalized, f = new l.constructor(c.length * u);
      let m = 0, _ = 0;
      for (let v = 0, p = c.length; v < p; v++) {
        o.isInterleavedBufferAttribute ? m = c[v] * o.data.stride + o.offset : m = c[v] * u;
        for (let h = 0; h < u; h++) f[_++] = l[m++];
      }
      return new Ve(f, u, d);
    }
    if (this.index === null) return Ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e = new Ie(), n = this.index.array, s = this.attributes;
    for (const o in s) {
      const c = s[o], l = t(c, n);
      e.setAttribute(o, l);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const c = [], l = r[o];
      for (let u = 0, d = l.length; u < d; u++) {
        const f = l[u], m = t(f, n);
        c.push(m);
      }
      e.morphAttributes[o] = c;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      e.addGroup(l.start, l.count, l.materialIndex);
    }
    return e;
  }
  toJSON() {
    const t = { metadata: { version: 4.7, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c) c[l] !== void 0 && (t[l] = c[l]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    e !== null && (t.data.index = { type: e.array.constructor.name, array: Array.prototype.slice.call(e.array) });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      t.data.attributes[c] = l.toJSON(t.data);
    }
    const s = {};
    let r = false;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], u = [];
      for (let d = 0, f = l.length; d < f; d++) {
        const m = l[d];
        u.push(m.toJSON(t.data));
      }
      u.length > 0 && (s[c] = u, r = true);
    }
    r && (t.data.morphAttributes = s, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (t.data.boundingSphere = o.toJSON()), t;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const e = {};
    this.name = t.name;
    const n = t.index;
    n !== null && this.setIndex(n.clone());
    const s = t.attributes;
    for (const l in s) {
      const u = s[l];
      this.setAttribute(l, u.clone(e));
    }
    const r = t.morphAttributes;
    for (const l in r) {
      const u = [], d = r[l];
      for (let f = 0, m = d.length; f < m; f++) u.push(d[f].clone(e));
      this.morphAttributes[l] = u;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const a = t.groups;
    for (let l = 0, u = a.length; l < u; l++) {
      const d = a[l];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const o = t.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = t.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Ua = new ie(), Cn = new Ms(), Xi = new Di(), Ia = new N(), Yi = new N(), qi = new N(), $i = new N(), qs = new N(), ji = new N(), Na = new N(), Ki = new N();
class Ze extends Se {
  constructor(t = new Ie(), e = new ms()) {
    super(), this.isMesh = true, this.type = "Mesh", this.geometry = t, this.material = e, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const s = e[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = s.length; r < a; r++) {
          const o = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
  getVertexPosition(t, e) {
    const n = this.geometry, s = n.attributes.position, r = n.morphAttributes.position, a = n.morphTargetsRelative;
    e.fromBufferAttribute(s, t);
    const o = this.morphTargetInfluences;
    if (r && o) {
      ji.set(0, 0, 0);
      for (let c = 0, l = r.length; c < l; c++) {
        const u = o[c], d = r[c];
        u !== 0 && (qs.fromBufferAttribute(d, t), a ? ji.addScaledVector(qs, u) : ji.addScaledVector(qs.sub(e), u));
      }
      e.add(ji);
    }
    return e;
  }
  raycast(t, e) {
    const n = this.geometry, s = this.material, r = this.matrixWorld;
    s !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Xi.copy(n.boundingSphere), Xi.applyMatrix4(r), Cn.copy(t.ray).recast(t.near), !(Xi.containsPoint(Cn.origin) === false && (Cn.intersectSphere(Xi, Ia) === null || Cn.origin.distanceToSquared(Ia) > (t.far - t.near) ** 2)) && (Ua.copy(r).invert(), Cn.copy(t.ray).applyMatrix4(Ua), !(n.boundingBox !== null && Cn.intersectsBox(n.boundingBox) === false) && this._computeIntersections(t, e, Cn)));
  }
  _computeIntersections(t, e, n) {
    let s;
    const r = this.geometry, a = this.material, o = r.index, c = r.attributes.position, l = r.attributes.uv, u = r.attributes.uv1, d = r.attributes.normal, f = r.groups, m = r.drawRange;
    if (o !== null) if (Array.isArray(a)) for (let _ = 0, v = f.length; _ < v; _++) {
      const p = f[_], h = a[p.materialIndex], S = Math.max(p.start, m.start), y = Math.min(o.count, Math.min(p.start + p.count, m.start + m.count));
      for (let A = S, P = y; A < P; A += 3) {
        const T = o.getX(A), C = o.getX(A + 1), z = o.getX(A + 2);
        s = Zi(this, h, t, n, l, u, d, T, C, z), s && (s.faceIndex = Math.floor(A / 3), s.face.materialIndex = p.materialIndex, e.push(s));
      }
    }
    else {
      const _ = Math.max(0, m.start), v = Math.min(o.count, m.start + m.count);
      for (let p = _, h = v; p < h; p += 3) {
        const S = o.getX(p), y = o.getX(p + 1), A = o.getX(p + 2);
        s = Zi(this, a, t, n, l, u, d, S, y, A), s && (s.faceIndex = Math.floor(p / 3), e.push(s));
      }
    }
    else if (c !== void 0) if (Array.isArray(a)) for (let _ = 0, v = f.length; _ < v; _++) {
      const p = f[_], h = a[p.materialIndex], S = Math.max(p.start, m.start), y = Math.min(c.count, Math.min(p.start + p.count, m.start + m.count));
      for (let A = S, P = y; A < P; A += 3) {
        const T = A, C = A + 1, z = A + 2;
        s = Zi(this, h, t, n, l, u, d, T, C, z), s && (s.faceIndex = Math.floor(A / 3), s.face.materialIndex = p.materialIndex, e.push(s));
      }
    }
    else {
      const _ = Math.max(0, m.start), v = Math.min(c.count, m.start + m.count);
      for (let p = _, h = v; p < h; p += 3) {
        const S = p, y = p + 1, A = p + 2;
        s = Zi(this, a, t, n, l, u, d, S, y, A), s && (s.faceIndex = Math.floor(p / 3), e.push(s));
      }
    }
  }
}
function uc(i, t, e, n, s, r, a, o) {
  let c;
  if (t.side === we ? c = n.intersectTriangle(a, r, s, true, o) : c = n.intersectTriangle(s, r, a, t.side === yn, o), c === null) return null;
  Ki.copy(o), Ki.applyMatrix4(i.matrixWorld);
  const l = e.ray.origin.distanceTo(Ki);
  return l < e.near || l > e.far ? null : { distance: l, point: Ki.clone(), object: i };
}
function Zi(i, t, e, n, s, r, a, o, c, l) {
  i.getVertexPosition(o, Yi), i.getVertexPosition(c, qi), i.getVertexPosition(l, $i);
  const u = uc(i, t, e, n, Yi, qi, $i, Na);
  if (u) {
    const d = new N();
    Xe.getBarycoord(Na, Yi, qi, $i, d), s && (u.uv = Xe.getInterpolatedAttribute(s, o, c, l, d, new Nt())), r && (u.uv1 = Xe.getInterpolatedAttribute(r, o, c, l, d, new Nt())), a && (u.normal = Xe.getInterpolatedAttribute(a, o, c, l, d, new N()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const f = { a: o, b: c, c: l, normal: new N(), materialIndex: 0 };
    Xe.getNormal(Yi, qi, $i, f.normal), u.face = f, u.barycoord = d;
  }
  return u;
}
class Li extends Ie {
  constructor(t = 1, e = 1, n = 1, s = 1, r = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: t, height: e, depth: n, widthSegments: s, heightSegments: r, depthSegments: a };
    const o = this;
    s = Math.floor(s), r = Math.floor(r), a = Math.floor(a);
    const c = [], l = [], u = [], d = [];
    let f = 0, m = 0;
    _("z", "y", "x", -1, -1, n, e, t, a, r, 0), _("z", "y", "x", 1, -1, n, e, -t, a, r, 1), _("x", "z", "y", 1, 1, t, n, e, s, a, 2), _("x", "z", "y", 1, -1, t, n, -e, s, a, 3), _("x", "y", "z", 1, -1, t, e, n, s, r, 4), _("x", "y", "z", -1, -1, t, e, -n, s, r, 5), this.setIndex(c), this.setAttribute("position", new Re(l, 3)), this.setAttribute("normal", new Re(u, 3)), this.setAttribute("uv", new Re(d, 2));
    function _(v, p, h, S, y, A, P, T, C, z, b) {
      const M = A / C, D = P / z, B = A / 2, k = P / 2, q = T / 2, W = C + 1, $ = z + 1;
      let J = 0, G = 0;
      const nt = new N();
      for (let rt = 0; rt < $; rt++) {
        const bt = rt * D - k;
        for (let Ht = 0; Ht < W; Ht++) {
          const Yt = Ht * M - B;
          nt[v] = Yt * S, nt[p] = bt * y, nt[h] = q, l.push(nt.x, nt.y, nt.z), nt[v] = 0, nt[p] = 0, nt[h] = T > 0 ? 1 : -1, u.push(nt.x, nt.y, nt.z), d.push(Ht / C), d.push(1 - rt / z), J += 1;
        }
      }
      for (let rt = 0; rt < z; rt++) for (let bt = 0; bt < C; bt++) {
        const Ht = f + bt + W * rt, Yt = f + bt + W * (rt + 1), Jt = f + (bt + 1) + W * (rt + 1), Qt = f + (bt + 1) + W * rt;
        c.push(Ht, Yt, Qt), c.push(Yt, Jt, Qt), G += 6;
      }
      o.addGroup(m, G, b), m += G, f += J;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Li(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}
function hi(i) {
  const t = {};
  for (const e in i) {
    t[e] = {};
    for (const n in i[e]) {
      const s = i[e][n];
      s && (s.isColor || s.isMatrix3 || s.isMatrix4 || s.isVector2 || s.isVector3 || s.isVector4 || s.isTexture || s.isQuaternion) ? s.isRenderTargetTexture ? (Ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[e][n] = null) : t[e][n] = s.clone() : Array.isArray(s) ? t[e][n] = s.slice() : t[e][n] = s;
    }
  }
  return t;
}
function be(i) {
  const t = {};
  for (let e = 0; e < i.length; e++) {
    const n = hi(i[e]);
    for (const s in n) t[s] = n[s];
  }
  return t;
}
function dc(i) {
  const t = [];
  for (let e = 0; e < i.length; e++) t.push(i[e].clone());
  return t;
}
function Fo(i) {
  const t = i.getRenderTarget();
  return t === null ? i.outputColorSpace : t.isXRRenderTarget === true ? t.texture.colorSpace : Xt.workingColorSpace;
}
const fc = { clone: hi, merge: be };
var pc = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, mc = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class fn extends di {
  constructor(t) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = pc, this.fragmentShader = mc, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, t !== void 0 && this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = hi(t.uniforms), this.uniformsGroups = dc(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    e.glslVersion = this.glslVersion, e.uniforms = {};
    for (const s in this.uniforms) {
      const a = this.uniforms[s].value;
      a && a.isTexture ? e.uniforms[s] = { type: "t", value: a.toJSON(t).uuid } : a && a.isColor ? e.uniforms[s] = { type: "c", value: a.getHex() } : a && a.isVector2 ? e.uniforms[s] = { type: "v2", value: a.toArray() } : a && a.isVector3 ? e.uniforms[s] = { type: "v3", value: a.toArray() } : a && a.isVector4 ? e.uniforms[s] = { type: "v4", value: a.toArray() } : a && a.isMatrix3 ? e.uniforms[s] = { type: "m3", value: a.toArray() } : a && a.isMatrix4 ? e.uniforms[s] = { type: "m4", value: a.toArray() } : e.uniforms[s] = { value: a };
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
    const n = {};
    for (const s in this.extensions) this.extensions[s] === true && (n[s] = true);
    return Object.keys(n).length > 0 && (e.extensions = n), e;
  }
}
class Oo extends Se {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new ie(), this.projectionMatrix = new ie(), this.projectionMatrixInverse = new ie(), this.coordinateSystem = je, this._reversedDepth = false;
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(t, e) {
    return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this.coordinateSystem = t.coordinateSystem, this;
  }
  getWorldDirection(t) {
    return super.getWorldDirection(t).negate();
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(t, e) {
    super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const vn = new N(), Fa = new Nt(), Oa = new Nt();
class Be extends Oo {
  constructor(t = 50, e = 1, n = 0.1, s = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = s, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
  }
  setFocalLength(t) {
    const e = 0.5 * this.getFilmHeight() / t;
    this.fov = Xr * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const t = Math.tan(hs * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  getEffectiveFOV() {
    return Xr * 2 * Math.atan(Math.tan(hs * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(t, e, n) {
    vn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(vn.x, vn.y).multiplyScalar(-t / vn.z), vn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(vn.x, vn.y).multiplyScalar(-t / vn.z);
  }
  getViewSize(t, e) {
    return this.getViewBounds(t, Fa, Oa), e.subVectors(Oa, Fa);
  }
  setViewOffset(t, e, n, s, r, a) {
    this.aspect = t / e, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = s, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = this.near;
    let e = t * Math.tan(hs * 0.5 * this.fov) / this.zoom, n = 2 * e, s = this.aspect * n, r = -0.5 * s;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth, l = a.fullHeight;
      r += a.offsetX * s / c, e -= a.offsetY * n / l, s *= a.width / c, n *= a.height / l;
    }
    const o = this.filmOffset;
    o !== 0 && (r += t * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + s, e, e - n, t, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
  }
}
const Jn = -90, Qn = 1;
class xc extends Se {
  constructor(t, e, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const s = new Be(Jn, Qn, t, e);
    s.layers = this.layers, this.add(s);
    const r = new Be(Jn, Qn, t, e);
    r.layers = this.layers, this.add(r);
    const a = new Be(Jn, Qn, t, e);
    a.layers = this.layers, this.add(a);
    const o = new Be(Jn, Qn, t, e);
    o.layers = this.layers, this.add(o);
    const c = new Be(Jn, Qn, t, e);
    c.layers = this.layers, this.add(c);
    const l = new Be(Jn, Qn, t, e);
    l.layers = this.layers, this.add(l);
  }
  updateCoordinateSystem() {
    const t = this.coordinateSystem, e = this.children.concat(), [n, s, r, a, o, c] = e;
    for (const l of e) this.remove(l);
    if (t === je) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (t === fs) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), s.up.set(0, -1, 0), s.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
    for (const l of e) this.add(l), l.updateMatrixWorld();
  }
  update(t, e) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: s } = this;
    this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem());
    const [r, a, o, c, l, u] = this.children, d = t.getRenderTarget(), f = t.getActiveCubeFace(), m = t.getActiveMipmapLevel(), _ = t.xr.enabled;
    t.xr.enabled = false;
    const v = n.texture.generateMipmaps;
    n.texture.generateMipmaps = false, t.setRenderTarget(n, 0, s), t.render(e, r), t.setRenderTarget(n, 1, s), t.render(e, a), t.setRenderTarget(n, 2, s), t.render(e, o), t.setRenderTarget(n, 3, s), t.render(e, c), t.setRenderTarget(n, 4, s), t.render(e, l), n.texture.generateMipmaps = v, t.setRenderTarget(n, 5, s), t.render(e, u), t.setRenderTarget(d, f, m), t.xr.enabled = _, n.texture.needsPMREMUpdate = true;
  }
}
class Bo extends ve {
  constructor(t = [], e = oi, n, s, r, a, o, c, l, u) {
    super(t, e, n, s, r, a, o, c, l, u), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class _c extends Bn {
  constructor(t = 1, e = {}) {
    super(t, t, e), this.isWebGLCubeRenderTarget = true;
    const n = { width: t, height: t, depth: 1 }, s = [n, n, n, n, n, n];
    this.texture = new Bo(s), this._setTextureOptions(e), this.texture.isRenderTargetTexture = true;
  }
  fromEquirectangularTexture(t, e) {
    this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
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
			` }, s = new Li(5, 5, 5), r = new fn({ name: "CubemapFromEquirect", uniforms: hi(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: we, blending: cn });
    r.uniforms.tEquirect.value = e;
    const a = new Ze(s, r), o = e.minFilter;
    return e.minFilter === Nn && (e.minFilter = ze), new xc(1, 10, this).update(t, a), e.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(t, e = true, n = true, s = true) {
    const r = t.getRenderTarget();
    for (let a = 0; a < 6; a++) t.setRenderTarget(this, a), t.clear(e, n, s);
    t.setRenderTarget(r);
  }
}
class ni extends Se {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
const gc = { type: "move" };
class $s {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new ni(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new ni(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new N(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new N()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new ni(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new N(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new N()), this._grip;
  }
  dispatchEvent(t) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(t), this._grip !== null && this._grip.dispatchEvent(t), this._hand !== null && this._hand.dispatchEvent(t), this;
  }
  connect(t) {
    if (t && t.hand) {
      const e = this._hand;
      if (e) for (const n of t.hand.values()) this._getHandJoint(e, n);
    }
    return this.dispatchEvent({ type: "connected", data: t }), this;
  }
  disconnect(t) {
    return this.dispatchEvent({ type: "disconnected", data: t }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
  }
  update(t, e, n) {
    let s = null, r = null, a = null;
    const o = this._targetRay, c = this._grip, l = this._hand;
    if (t && e.session.visibilityState !== "visible-blurred") {
      if (l && t.hand) {
        a = true;
        for (const v of t.hand.values()) {
          const p = e.getJointPose(v, n), h = this._getHandJoint(l, v);
          p !== null && (h.matrix.fromArray(p.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.matrixWorldNeedsUpdate = true, h.jointRadius = p.radius), h.visible = p !== null;
        }
        const u = l.joints["index-finger-tip"], d = l.joints["thumb-tip"], f = u.position.distanceTo(d.position), m = 0.02, _ = 5e-3;
        l.inputState.pinching && f > m + _ ? (l.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: t.handedness, target: this })) : !l.inputState.pinching && f <= m - _ && (l.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: t.handedness, target: this }));
      } else c !== null && t.gripSpace && (r = e.getPose(t.gripSpace, n), r !== null && (c.matrix.fromArray(r.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = true, r.linearVelocity ? (c.hasLinearVelocity = true, c.linearVelocity.copy(r.linearVelocity)) : c.hasLinearVelocity = false, r.angularVelocity ? (c.hasAngularVelocity = true, c.angularVelocity.copy(r.angularVelocity)) : c.hasAngularVelocity = false));
      o !== null && (s = e.getPose(t.targetRaySpace, n), s === null && r !== null && (s = r), s !== null && (o.matrix.fromArray(s.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = true, s.linearVelocity ? (o.hasLinearVelocity = true, o.linearVelocity.copy(s.linearVelocity)) : o.hasLinearVelocity = false, s.angularVelocity ? (o.hasAngularVelocity = true, o.angularVelocity.copy(s.angularVelocity)) : o.hasAngularVelocity = false, this.dispatchEvent(gc)));
    }
    return o !== null && (o.visible = s !== null), c !== null && (c.visible = r !== null), l !== null && (l.visible = a !== null), this;
  }
  _getHandJoint(t, e) {
    if (t.joints[e.jointName] === void 0) {
      const n = new ni();
      n.matrixAutoUpdate = false, n.visible = false, t.joints[e.jointName] = n, t.add(n);
    }
    return t.joints[e.jointName];
  }
}
class vc extends Se {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new dn(), this.environmentIntensity = 1, this.environmentRotation = new dn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
  }
}
class Mc extends ve {
  constructor(t = null, e = 1, n = 1, s, r, a, o, c, l = Ue, u = Ue, d, f) {
    super(null, a, o, c, l, u, s, r, d, f), this.isDataTexture = true, this.image = { data: t, width: e, height: n }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
const js = new N(), bc = new N(), Sc = new Ut();
class Mn {
  constructor(t = new N(1, 0, 0), e = 0) {
    this.isPlane = true, this.normal = t, this.constant = e;
  }
  set(t, e) {
    return this.normal.copy(t), this.constant = e, this;
  }
  setComponents(t, e, n, s) {
    return this.normal.set(t, e, n), this.constant = s, this;
  }
  setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
  }
  setFromCoplanarPoints(t, e, n) {
    const s = js.subVectors(n, e).cross(bc.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(s, t), this;
  }
  copy(t) {
    return this.normal.copy(t.normal), this.constant = t.constant, this;
  }
  normalize() {
    const t = 1 / this.normal.length();
    return this.normal.multiplyScalar(t), this.constant *= t, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant;
  }
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius;
  }
  projectPoint(t, e) {
    return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
  }
  intersectLine(t, e) {
    const n = t.delta(js), s = this.normal.dot(n);
    if (s === 0) return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
    const r = -(t.start.dot(this.normal) + this.constant) / s;
    return r < 0 || r > 1 ? null : e.copy(t.start).addScaledVector(n, r);
  }
  intersectsLine(t) {
    const e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end);
    return e < 0 && n > 0 || n < 0 && e > 0;
  }
  intersectsBox(t) {
    return t.intersectsPlane(this);
  }
  intersectsSphere(t) {
    return t.intersectsPlane(this);
  }
  coplanarPoint(t) {
    return t.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(t, e) {
    const n = e || Sc.getNormalMatrix(t), s = this.coplanarPoint(js).applyMatrix4(t), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -s.dot(r), this;
  }
  translate(t) {
    return this.constant -= t.dot(this.normal), this;
  }
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Pn = new Di(), Ec = new Nt(0.5, 0.5), Ji = new N();
class zo {
  constructor(t = new Mn(), e = new Mn(), n = new Mn(), s = new Mn(), r = new Mn(), a = new Mn()) {
    this.planes = [t, e, n, s, r, a];
  }
  set(t, e, n, s, r, a) {
    const o = this.planes;
    return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(s), o[4].copy(r), o[5].copy(a), this;
  }
  copy(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
    return this;
  }
  setFromProjectionMatrix(t, e = je, n = false) {
    const s = this.planes, r = t.elements, a = r[0], o = r[1], c = r[2], l = r[3], u = r[4], d = r[5], f = r[6], m = r[7], _ = r[8], v = r[9], p = r[10], h = r[11], S = r[12], y = r[13], A = r[14], P = r[15];
    if (s[0].setComponents(l - a, m - u, h - _, P - S).normalize(), s[1].setComponents(l + a, m + u, h + _, P + S).normalize(), s[2].setComponents(l + o, m + d, h + v, P + y).normalize(), s[3].setComponents(l - o, m - d, h - v, P - y).normalize(), n) s[4].setComponents(c, f, p, A).normalize(), s[5].setComponents(l - c, m - f, h - p, P - A).normalize();
    else if (s[4].setComponents(l - c, m - f, h - p, P - A).normalize(), e === je) s[5].setComponents(l + c, m + f, h + p, P + A).normalize();
    else if (e === fs) s[5].setComponents(c, f, p, A).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
    return this;
  }
  intersectsObject(t) {
    if (t.boundingSphere !== void 0) t.boundingSphere === null && t.computeBoundingSphere(), Pn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      const e = t.geometry;
      e.boundingSphere === null && e.computeBoundingSphere(), Pn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere(Pn);
  }
  intersectsSprite(t) {
    Pn.center.set(0, 0, 0);
    const e = Ec.distanceTo(t.center);
    return Pn.radius = 0.7071067811865476 + e, Pn.applyMatrix4(t.matrixWorld), this.intersectsSphere(Pn);
  }
  intersectsSphere(t) {
    const e = this.planes, n = t.center, s = -t.radius;
    for (let r = 0; r < 6; r++) if (e[r].distanceToPoint(n) < s) return false;
    return true;
  }
  intersectsBox(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) {
      const s = e[n];
      if (Ji.x = s.normal.x > 0 ? t.max.x : t.min.x, Ji.y = s.normal.y > 0 ? t.max.y : t.min.y, Ji.z = s.normal.z > 0 ? t.max.z : t.min.z, s.distanceToPoint(Ji) < 0) return false;
    }
    return true;
  }
  containsPoint(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < 0) return false;
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Vo extends di {
  constructor(t) {
    super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new Bt(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this;
  }
}
const xs = new N(), _s = new N(), Ba = new ie(), Mi = new Ms(), Qi = new Di(), Ks = new N(), za = new N();
class yc extends Se {
  constructor(t = new Ie(), e = new Vo()) {
    super(), this.isLine = true, this.type = "Line", this.geometry = t, this.material = e, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, n = [0];
      for (let s = 1, r = e.count; s < r; s++) xs.fromBufferAttribute(e, s - 1), _s.fromBufferAttribute(e, s), n[s] = n[s - 1], n[s] += xs.distanceTo(_s);
      t.setAttribute("lineDistance", new Re(n, 1));
    } else Ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(t, e) {
    const n = this.geometry, s = this.matrixWorld, r = t.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Qi.copy(n.boundingSphere), Qi.applyMatrix4(s), Qi.radius += r, t.ray.intersectsSphere(Qi) === false) return;
    Ba.copy(s).invert(), Mi.copy(t.ray).applyMatrix4(Ba);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = this.isLineSegments ? 2 : 1, u = n.index, f = n.attributes.position;
    if (u !== null) {
      const m = Math.max(0, a.start), _ = Math.min(u.count, a.start + a.count);
      for (let v = m, p = _ - 1; v < p; v += l) {
        const h = u.getX(v), S = u.getX(v + 1), y = ts(this, t, Mi, c, h, S, v);
        y && e.push(y);
      }
      if (this.isLineLoop) {
        const v = u.getX(_ - 1), p = u.getX(m), h = ts(this, t, Mi, c, v, p, _ - 1);
        h && e.push(h);
      }
    } else {
      const m = Math.max(0, a.start), _ = Math.min(f.count, a.start + a.count);
      for (let v = m, p = _ - 1; v < p; v += l) {
        const h = ts(this, t, Mi, c, v, v + 1, v);
        h && e.push(h);
      }
      if (this.isLineLoop) {
        const v = ts(this, t, Mi, c, _ - 1, m, _ - 1);
        v && e.push(v);
      }
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const s = e[n[0]];
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
function ts(i, t, e, n, s, r, a) {
  const o = i.geometry.attributes.position;
  if (xs.fromBufferAttribute(o, s), _s.fromBufferAttribute(o, r), e.distanceSqToSegment(xs, _s, Ks, za) > n) return;
  Ks.applyMatrix4(i.matrixWorld);
  const l = t.ray.origin.distanceTo(Ks);
  if (!(l < t.near || l > t.far)) return { distance: l, point: za.clone().applyMatrix4(i.matrixWorld), index: a, face: null, faceIndex: null, barycoord: null, object: i };
}
const Va = new N(), ka = new N();
class Tc extends yc {
  constructor(t, e) {
    super(t, e), this.isLineSegments = true, this.type = "LineSegments";
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, n = [];
      for (let s = 0, r = e.count; s < r; s += 2) Va.fromBufferAttribute(e, s), ka.fromBufferAttribute(e, s + 1), n[s] = s === 0 ? 0 : n[s - 1], n[s + 1] = n[s] + Va.distanceTo(ka);
      t.setAttribute("lineDistance", new Re(n, 1));
    } else Ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class ko extends di {
  constructor(t) {
    super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new Bt(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
  }
}
const Ga = new ie(), Yr = new Ms(), es = new Di(), ns = new N();
class Ac extends Se {
  constructor(t = new Ie(), e = new ko()) {
    super(), this.isPoints = true, this.type = "Points", this.geometry = t, this.material = e, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  raycast(t, e) {
    const n = this.geometry, s = this.matrixWorld, r = t.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), es.copy(n.boundingSphere), es.applyMatrix4(s), es.radius += r, t.ray.intersectsSphere(es) === false) return;
    Ga.copy(s).invert(), Yr.copy(t.ray).applyMatrix4(Ga);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = n.index, d = n.attributes.position;
    if (l !== null) {
      const f = Math.max(0, a.start), m = Math.min(l.count, a.start + a.count);
      for (let _ = f, v = m; _ < v; _++) {
        const p = l.getX(_);
        ns.fromBufferAttribute(d, p), Ha(ns, p, c, s, t, e, this);
      }
    } else {
      const f = Math.max(0, a.start), m = Math.min(d.count, a.start + a.count);
      for (let _ = f, v = m; _ < v; _++) ns.fromBufferAttribute(d, _), Ha(ns, _, c, s, t, e, this);
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const s = e[n[0]];
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
function Ha(i, t, e, n, s, r, a) {
  const o = Yr.distanceSqToPoint(i);
  if (o < e) {
    const c = new N();
    Yr.closestPointToPoint(i, c), c.applyMatrix4(n);
    const l = s.ray.origin.distanceTo(c);
    if (l < s.near || l > s.far) return;
    r.push({ distance: l, distanceToRay: Math.sqrt(o), point: c, index: t, face: null, faceIndex: null, barycoord: null, object: a });
  }
}
class wc extends ve {
  constructor(t, e, n, s, r, a, o, c, l) {
    super(t, e, n, s, r, a, o, c, l), this.isCanvasTexture = true, this.needsUpdate = true;
  }
}
class Go extends ve {
  constructor(t, e, n = Fn, s, r, a, o = Ue, c = Ue, l, u = Ti, d = 1) {
    if (u !== Ti && u !== Ai) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const f = { width: t, height: e, depth: d };
    super(f, s, r, a, o, c, u, n, l), this.isDepthTexture = true, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(t) {
    return super.copy(t), this.source = new ia(Object.assign({}, t.image)), this.compareFunction = t.compareFunction, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
  }
}
class Ho extends ve {
  constructor(t = null) {
    super(), this.sourceTexture = t, this.isExternalTexture = true;
  }
  copy(t) {
    return super.copy(t), this.sourceTexture = t.sourceTexture, this;
  }
}
class bs extends Ie {
  constructor(t = 1, e = 1, n = 1, s = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: t, height: e, widthSegments: n, heightSegments: s };
    const r = t / 2, a = e / 2, o = Math.floor(n), c = Math.floor(s), l = o + 1, u = c + 1, d = t / o, f = e / c, m = [], _ = [], v = [], p = [];
    for (let h = 0; h < u; h++) {
      const S = h * f - a;
      for (let y = 0; y < l; y++) {
        const A = y * d - r;
        _.push(A, -S, 0), v.push(0, 0, 1), p.push(y / o), p.push(1 - h / c);
      }
    }
    for (let h = 0; h < c; h++) for (let S = 0; S < o; S++) {
      const y = S + l * h, A = S + l * (h + 1), P = S + 1 + l * (h + 1), T = S + 1 + l * h;
      m.push(y, A, T), m.push(A, P, T);
    }
    this.setIndex(m), this.setAttribute("position", new Re(_, 3)), this.setAttribute("normal", new Re(v, 3)), this.setAttribute("uv", new Re(p, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new bs(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
class gs extends Ie {
  constructor(t = 1, e = 32, n = 16, s = 0, r = Math.PI * 2, a = 0, o = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = { radius: t, widthSegments: e, heightSegments: n, phiStart: s, phiLength: r, thetaStart: a, thetaLength: o }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
    const c = Math.min(a + o, Math.PI);
    let l = 0;
    const u = [], d = new N(), f = new N(), m = [], _ = [], v = [], p = [];
    for (let h = 0; h <= n; h++) {
      const S = [], y = h / n;
      let A = 0;
      h === 0 && a === 0 ? A = 0.5 / e : h === n && c === Math.PI && (A = -0.5 / e);
      for (let P = 0; P <= e; P++) {
        const T = P / e;
        d.x = -t * Math.cos(s + T * r) * Math.sin(a + y * o), d.y = t * Math.cos(a + y * o), d.z = t * Math.sin(s + T * r) * Math.sin(a + y * o), _.push(d.x, d.y, d.z), f.copy(d).normalize(), v.push(f.x, f.y, f.z), p.push(T + A, 1 - y), S.push(l++);
      }
      u.push(S);
    }
    for (let h = 0; h < n; h++) for (let S = 0; S < e; S++) {
      const y = u[h][S + 1], A = u[h][S], P = u[h + 1][S], T = u[h + 1][S + 1];
      (h !== 0 || a > 0) && m.push(y, A, T), (h !== n - 1 || c < Math.PI) && m.push(A, P, T);
    }
    this.setIndex(m), this.setAttribute("position", new Re(_, 3)), this.setAttribute("normal", new Re(v, 3)), this.setAttribute("uv", new Re(p, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new gs(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
  }
}
class Rc extends di {
  constructor(t) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = Il, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
}
class Cc extends di {
  constructor(t) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
  }
}
class Pc extends Oo {
  constructor(t = -1, e = 1, n = 1, s = -1, r = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = s, this.near = r, this.far = a, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this;
  }
  setViewOffset(t, e, n, s, r, a) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = s, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, s = (this.top + this.bottom) / 2;
    let r = n - t, a = n + t, o = s + e, c = s - e;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += l * this.view.offsetX, a = r + l * this.view.width, o -= u * this.view.offsetY, c = o - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, a, o, c, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
  }
}
class Dc extends Be {
  constructor(t = []) {
    super(), this.isArrayCamera = true, this.isMultiViewCamera = false, this.cameras = t;
  }
}
class Lc {
  constructor(t = true) {
    this.autoStart = t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = false;
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
    let t = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const e = performance.now();
      t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t;
    }
    return t;
  }
}
class Wa {
  constructor(t = 1, e = 0, n = 0) {
    this.radius = t, this.phi = e, this.theta = n;
  }
  set(t, e, n) {
    return this.radius = t, this.phi = e, this.theta = n, this;
  }
  copy(t) {
    return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this;
  }
  makeSafe() {
    return this.phi = Ot(this.phi, 1e-6, Math.PI - 1e-6), this;
  }
  setFromVector3(t) {
    return this.setFromCartesianCoords(t.x, t.y, t.z);
  }
  setFromCartesianCoords(t, e, n) {
    return this.radius = Math.sqrt(t * t + e * e + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(Ot(e / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Uc extends Tc {
  constructor(t = 1) {
    const e = [0, 0, 0, t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t], n = [1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1], s = new Ie();
    s.setAttribute("position", new Re(e, 3)), s.setAttribute("color", new Re(n, 3));
    const r = new Vo({ vertexColors: true, toneMapped: false });
    super(s, r), this.type = "AxesHelper";
  }
  setColors(t, e, n) {
    const s = new Bt(), r = this.geometry.attributes.color.array;
    return s.set(t), s.toArray(r, 0), s.toArray(r, 3), s.set(e), s.toArray(r, 6), s.toArray(r, 9), s.set(n), s.toArray(r, 12), s.toArray(r, 15), this.geometry.attributes.color.needsUpdate = true, this;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class Ic extends zn {
  constructor(t, e = null) {
    super(), this.object = t, this.domElement = e, this.enabled = true, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect(t) {
    if (t === void 0) {
      Ct("Controls: connect() now requires an element.");
      return;
    }
    this.domElement !== null && this.disconnect(), this.domElement = t;
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
function Xa(i, t, e, n) {
  const s = Nc(n);
  switch (e) {
    case Ao:
      return i * t;
    case Ro:
      return i * t / s.components * s.byteLength;
    case Qr:
      return i * t / s.components * s.byteLength;
    case ta:
      return i * t * 2 / s.components * s.byteLength;
    case ea:
      return i * t * 2 / s.components * s.byteLength;
    case wo:
      return i * t * 3 / s.components * s.byteLength;
    case Ye:
      return i * t * 4 / s.components * s.byteLength;
    case na:
      return i * t * 4 / s.components * s.byteLength;
    case as:
    case os:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case ls:
    case cs:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case gr:
    case Mr:
      return Math.max(i, 16) * Math.max(t, 8) / 4;
    case _r:
    case vr:
      return Math.max(i, 8) * Math.max(t, 8) / 2;
    case br:
    case Sr:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Er:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case yr:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Tr:
      return Math.floor((i + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case Ar:
      return Math.floor((i + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case wr:
      return Math.floor((i + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case Rr:
      return Math.floor((i + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case Cr:
      return Math.floor((i + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case Pr:
      return Math.floor((i + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case Dr:
      return Math.floor((i + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case Lr:
      return Math.floor((i + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case Ur:
      return Math.floor((i + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case Ir:
      return Math.floor((i + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case Nr:
      return Math.floor((i + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case Fr:
      return Math.floor((i + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case Or:
      return Math.floor((i + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case Br:
    case zr:
    case Vr:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
    case kr:
    case Gr:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 8;
    case Hr:
    case Wr:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${e} format.`);
}
function Nc(i) {
  switch (i) {
    case un:
    case So:
      return { byteLength: 1, components: 1 };
    case Ei:
    case Eo:
    case ui:
      return { byteLength: 2, components: 1 };
    case Zr:
    case Jr:
      return { byteLength: 2, components: 4 };
    case Fn:
    case Kr:
    case ln:
      return { byteLength: 4, components: 1 };
    case yo:
    case To:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: jr } }));
typeof window < "u" && (window.__THREE__ ? Ct("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = jr);
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function Wo() {
  let i = null, t = false, e = null, n = null;
  function s(r, a) {
    e(r, a), n = i.requestAnimationFrame(s);
  }
  return { start: function() {
    t !== true && e !== null && (n = i.requestAnimationFrame(s), t = true);
  }, stop: function() {
    i.cancelAnimationFrame(n), t = false;
  }, setAnimationLoop: function(r) {
    e = r;
  }, setContext: function(r) {
    i = r;
  } };
}
function Fc(i) {
  const t = /* @__PURE__ */ new WeakMap();
  function e(o, c) {
    const l = o.array, u = o.usage, d = l.byteLength, f = i.createBuffer();
    i.bindBuffer(c, f), i.bufferData(c, l, u), o.onUploadCallback();
    let m;
    if (l instanceof Float32Array) m = i.FLOAT;
    else if (typeof Float16Array < "u" && l instanceof Float16Array) m = i.HALF_FLOAT;
    else if (l instanceof Uint16Array) o.isFloat16BufferAttribute ? m = i.HALF_FLOAT : m = i.UNSIGNED_SHORT;
    else if (l instanceof Int16Array) m = i.SHORT;
    else if (l instanceof Uint32Array) m = i.UNSIGNED_INT;
    else if (l instanceof Int32Array) m = i.INT;
    else if (l instanceof Int8Array) m = i.BYTE;
    else if (l instanceof Uint8Array) m = i.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray) m = i.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
    return { buffer: f, type: m, bytesPerElement: l.BYTES_PER_ELEMENT, version: o.version, size: d };
  }
  function n(o, c, l) {
    const u = c.array, d = c.updateRanges;
    if (i.bindBuffer(l, o), d.length === 0) i.bufferSubData(l, 0, u);
    else {
      d.sort((m, _) => m.start - _.start);
      let f = 0;
      for (let m = 1; m < d.length; m++) {
        const _ = d[f], v = d[m];
        v.start <= _.start + _.count + 1 ? _.count = Math.max(_.count, v.start + v.count - _.start) : (++f, d[f] = v);
      }
      d.length = f + 1;
      for (let m = 0, _ = d.length; m < _; m++) {
        const v = d[m];
        i.bufferSubData(l, v.start * u.BYTES_PER_ELEMENT, u, v.start, v.count);
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function s(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), t.get(o);
  }
  function r(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = t.get(o);
    c && (i.deleteBuffer(c.buffer), t.delete(o));
  }
  function a(o, c) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const u = t.get(o);
      (!u || u.version < o.version) && t.set(o, { buffer: o.buffer, type: o.type, bytesPerElement: o.elementSize, version: o.version });
      return;
    }
    const l = t.get(o);
    if (l === void 0) t.set(o, e(o, c));
    else if (l.version < o.version) {
      if (l.size !== o.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(l.buffer, o, c), l.version = o.version;
    }
  }
  return { get: s, remove: r, update: a };
}
var Oc = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Bc = `#ifdef USE_ALPHAHASH
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
#endif`, zc = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Vc = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, kc = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Gc = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Hc = `#ifdef USE_AOMAP
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
#endif`, Wc = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Xc = `#ifdef USE_BATCHING
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
#endif`, Yc = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, qc = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, $c = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, jc = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, Kc = `#ifdef USE_IRIDESCENCE
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
#endif`, Zc = `#ifdef USE_BUMPMAP
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
#endif`, Jc = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, Qc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, th = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, eh = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, nh = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, ih = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, sh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, rh = `#if defined( USE_COLOR_ALPHA )
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
#endif`, ah = `#define PI 3.141592653589793
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
} // validated`, oh = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, lh = `vec3 transformedNormal = objectNormal;
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
#endif`, ch = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, hh = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, uh = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, dh = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, fh = "gl_FragColor = linearToOutputTexel( gl_FragColor );", ph = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, mh = `#ifdef USE_ENVMAP
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
#endif`, xh = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`, _h = `#ifdef USE_ENVMAP
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
#endif`, gh = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, vh = `#ifdef USE_ENVMAP
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
#endif`, Mh = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, bh = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Sh = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Eh = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, yh = `#ifdef USE_GRADIENTMAP
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
}`, Th = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Ah = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, wh = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Rh = `uniform bool receiveShadow;
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
#endif`, Ch = `#ifdef USE_ENVMAP
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
#endif`, Ph = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Dh = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Lh = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Uh = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Ih = `PhysicalMaterial material;
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
#endif`, Nh = `uniform sampler2D dfgLUT;
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
}`, Fh = `
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
#endif`, Oh = `#if defined( RE_IndirectDiffuse )
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
#endif`, Bh = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, zh = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Vh = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, kh = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Gh = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Hh = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Wh = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Xh = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, Yh = `#if defined( USE_POINTS_UV )
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
#endif`, qh = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, $h = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, jh = `#ifdef USE_INSTANCING_MORPH
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
#endif`, Jh = `#ifdef USE_MORPHTARGETS
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
#endif`, Qh = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, tu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, eu = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, nu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, iu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, su = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, ru = `#ifdef USE_NORMALMAP
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
#endif`, au = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, ou = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, lu = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, cu = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, hu = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, uu = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, du = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, fu = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, pu = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, mu = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, xu = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, _u = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, gu = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, vu = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Mu = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, bu = `float getShadowMask() {
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
}`, Su = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Eu = `#ifdef USE_SKINNING
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
#endif`, yu = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Tu = `#ifdef USE_SKINNING
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
#endif`, Au = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, wu = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Ru = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Cu = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, Pu = `#ifdef USE_TRANSMISSION
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
#endif`, Du = `#ifdef USE_TRANSMISSION
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
#endif`, Lu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Uu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Iu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Nu = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Fu = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Ou = `uniform sampler2D t2D;
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
}`, Bu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, zu = `#ifdef ENVMAP_TYPE_CUBE
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
}`, Vu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, ku = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Gu = `#include <common>
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
}`, Hu = `#if DEPTH_PACKING == 3200
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
}`, Wu = `#define DISTANCE
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
}`, Xu = `#define DISTANCE
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
}`, Yu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, qu = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, $u = `uniform float scale;
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
}`, ju = `uniform vec3 diffuse;
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
}`, Ju = `#define LAMBERT
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
}`, Qu = `#define LAMBERT
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
}`, td = `#define MATCAP
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
}`, ed = `#define MATCAP
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
}`, nd = `#define NORMAL
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
}`, id = `#define NORMAL
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
}`, sd = `#define PHONG
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
}`, rd = `#define PHONG
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
}`, ad = `#define STANDARD
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
}`, od = `#define STANDARD
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
}`, ld = `#define TOON
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
}`, cd = `#define TOON
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
}`, hd = `uniform float size;
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
}`, ud = `uniform vec3 diffuse;
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
}`, dd = `#include <common>
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
}`, fd = `uniform vec3 color;
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
}`, pd = `uniform float rotation;
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
}`, md = `uniform vec3 diffuse;
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
}`, It = { alphahash_fragment: Oc, alphahash_pars_fragment: Bc, alphamap_fragment: zc, alphamap_pars_fragment: Vc, alphatest_fragment: kc, alphatest_pars_fragment: Gc, aomap_fragment: Hc, aomap_pars_fragment: Wc, batching_pars_vertex: Xc, batching_vertex: Yc, begin_vertex: qc, beginnormal_vertex: $c, bsdfs: jc, iridescence_fragment: Kc, bumpmap_pars_fragment: Zc, clipping_planes_fragment: Jc, clipping_planes_pars_fragment: Qc, clipping_planes_pars_vertex: th, clipping_planes_vertex: eh, color_fragment: nh, color_pars_fragment: ih, color_pars_vertex: sh, color_vertex: rh, common: ah, cube_uv_reflection_fragment: oh, defaultnormal_vertex: lh, displacementmap_pars_vertex: ch, displacementmap_vertex: hh, emissivemap_fragment: uh, emissivemap_pars_fragment: dh, colorspace_fragment: fh, colorspace_pars_fragment: ph, envmap_fragment: mh, envmap_common_pars_fragment: xh, envmap_pars_fragment: _h, envmap_pars_vertex: gh, envmap_physical_pars_fragment: Ch, envmap_vertex: vh, fog_vertex: Mh, fog_pars_vertex: bh, fog_fragment: Sh, fog_pars_fragment: Eh, gradientmap_pars_fragment: yh, lightmap_pars_fragment: Th, lights_lambert_fragment: Ah, lights_lambert_pars_fragment: wh, lights_pars_begin: Rh, lights_toon_fragment: Ph, lights_toon_pars_fragment: Dh, lights_phong_fragment: Lh, lights_phong_pars_fragment: Uh, lights_physical_fragment: Ih, lights_physical_pars_fragment: Nh, lights_fragment_begin: Fh, lights_fragment_maps: Oh, lights_fragment_end: Bh, logdepthbuf_fragment: zh, logdepthbuf_pars_fragment: Vh, logdepthbuf_pars_vertex: kh, logdepthbuf_vertex: Gh, map_fragment: Hh, map_pars_fragment: Wh, map_particle_fragment: Xh, map_particle_pars_fragment: Yh, metalnessmap_fragment: qh, metalnessmap_pars_fragment: $h, morphinstance_vertex: jh, morphcolor_vertex: Kh, morphnormal_vertex: Zh, morphtarget_pars_vertex: Jh, morphtarget_vertex: Qh, normal_fragment_begin: tu, normal_fragment_maps: eu, normal_pars_fragment: nu, normal_pars_vertex: iu, normal_vertex: su, normalmap_pars_fragment: ru, clearcoat_normal_fragment_begin: au, clearcoat_normal_fragment_maps: ou, clearcoat_pars_fragment: lu, iridescence_pars_fragment: cu, opaque_fragment: hu, packing: uu, premultiplied_alpha_fragment: du, project_vertex: fu, dithering_fragment: pu, dithering_pars_fragment: mu, roughnessmap_fragment: xu, roughnessmap_pars_fragment: _u, shadowmap_pars_fragment: gu, shadowmap_pars_vertex: vu, shadowmap_vertex: Mu, shadowmask_pars_fragment: bu, skinbase_vertex: Su, skinning_pars_vertex: Eu, skinning_vertex: yu, skinnormal_vertex: Tu, specularmap_fragment: Au, specularmap_pars_fragment: wu, tonemapping_fragment: Ru, tonemapping_pars_fragment: Cu, transmission_fragment: Pu, transmission_pars_fragment: Du, uv_pars_fragment: Lu, uv_pars_vertex: Uu, uv_vertex: Iu, worldpos_vertex: Nu, background_vert: Fu, background_frag: Ou, backgroundCube_vert: Bu, backgroundCube_frag: zu, cube_vert: Vu, cube_frag: ku, depth_vert: Gu, depth_frag: Hu, distanceRGBA_vert: Wu, distanceRGBA_frag: Xu, equirect_vert: Yu, equirect_frag: qu, linedashed_vert: $u, linedashed_frag: ju, meshbasic_vert: Ku, meshbasic_frag: Zu, meshlambert_vert: Ju, meshlambert_frag: Qu, meshmatcap_vert: td, meshmatcap_frag: ed, meshnormal_vert: nd, meshnormal_frag: id, meshphong_vert: sd, meshphong_frag: rd, meshphysical_vert: ad, meshphysical_frag: od, meshtoon_vert: ld, meshtoon_frag: cd, points_vert: hd, points_frag: ud, shadow_vert: dd, shadow_frag: fd, sprite_vert: pd, sprite_frag: md }, at = { common: { diffuse: { value: new Bt(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Ut() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ut() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Ut() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Ut() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 }, dfgLUT: { value: null } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Ut() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Ut() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Ut() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Ut() }, normalScale: { value: new Nt(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Ut() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Ut() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Ut() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Ut() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Bt(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Bt(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Ut() }, alphaTest: { value: 0 }, uvTransform: { value: new Ut() } }, sprite: { diffuse: { value: new Bt(16777215) }, opacity: { value: 1 }, center: { value: new Nt(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Ut() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ut() }, alphaTest: { value: 0 } } }, $e = { basic: { uniforms: be([at.common, at.specularmap, at.envmap, at.aomap, at.lightmap, at.fog]), vertexShader: It.meshbasic_vert, fragmentShader: It.meshbasic_frag }, lambert: { uniforms: be([at.common, at.specularmap, at.envmap, at.aomap, at.lightmap, at.emissivemap, at.bumpmap, at.normalmap, at.displacementmap, at.fog, at.lights, { emissive: { value: new Bt(0) } }]), vertexShader: It.meshlambert_vert, fragmentShader: It.meshlambert_frag }, phong: { uniforms: be([at.common, at.specularmap, at.envmap, at.aomap, at.lightmap, at.emissivemap, at.bumpmap, at.normalmap, at.displacementmap, at.fog, at.lights, { emissive: { value: new Bt(0) }, specular: { value: new Bt(1118481) }, shininess: { value: 30 } }]), vertexShader: It.meshphong_vert, fragmentShader: It.meshphong_frag }, standard: { uniforms: be([at.common, at.envmap, at.aomap, at.lightmap, at.emissivemap, at.bumpmap, at.normalmap, at.displacementmap, at.roughnessmap, at.metalnessmap, at.fog, at.lights, { emissive: { value: new Bt(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: It.meshphysical_vert, fragmentShader: It.meshphysical_frag }, toon: { uniforms: be([at.common, at.aomap, at.lightmap, at.emissivemap, at.bumpmap, at.normalmap, at.displacementmap, at.gradientmap, at.fog, at.lights, { emissive: { value: new Bt(0) } }]), vertexShader: It.meshtoon_vert, fragmentShader: It.meshtoon_frag }, matcap: { uniforms: be([at.common, at.bumpmap, at.normalmap, at.displacementmap, at.fog, { matcap: { value: null } }]), vertexShader: It.meshmatcap_vert, fragmentShader: It.meshmatcap_frag }, points: { uniforms: be([at.points, at.fog]), vertexShader: It.points_vert, fragmentShader: It.points_frag }, dashed: { uniforms: be([at.common, at.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: It.linedashed_vert, fragmentShader: It.linedashed_frag }, depth: { uniforms: be([at.common, at.displacementmap]), vertexShader: It.depth_vert, fragmentShader: It.depth_frag }, normal: { uniforms: be([at.common, at.bumpmap, at.normalmap, at.displacementmap, { opacity: { value: 1 } }]), vertexShader: It.meshnormal_vert, fragmentShader: It.meshnormal_frag }, sprite: { uniforms: be([at.sprite, at.fog]), vertexShader: It.sprite_vert, fragmentShader: It.sprite_frag }, background: { uniforms: { uvTransform: { value: new Ut() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: It.background_vert, fragmentShader: It.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Ut() } }, vertexShader: It.backgroundCube_vert, fragmentShader: It.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: It.cube_vert, fragmentShader: It.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: It.equirect_vert, fragmentShader: It.equirect_frag }, distanceRGBA: { uniforms: be([at.common, at.displacementmap, { referencePosition: { value: new N() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: It.distanceRGBA_vert, fragmentShader: It.distanceRGBA_frag }, shadow: { uniforms: be([at.lights, at.fog, { color: { value: new Bt(0) }, opacity: { value: 1 } }]), vertexShader: It.shadow_vert, fragmentShader: It.shadow_frag } };
$e.physical = { uniforms: be([$e.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Ut() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Ut() }, clearcoatNormalScale: { value: new Nt(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Ut() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Ut() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Ut() }, sheen: { value: 0 }, sheenColor: { value: new Bt(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Ut() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Ut() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Ut() }, transmissionSamplerSize: { value: new Nt() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Ut() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Bt(0) }, specularColor: { value: new Bt(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Ut() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Ut() }, anisotropyVector: { value: new Nt() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Ut() } }]), vertexShader: It.meshphysical_vert, fragmentShader: It.meshphysical_frag };
const is = { r: 0, b: 0, g: 0 }, Dn = new dn(), xd = new ie();
function _d(i, t, e, n, s, r, a) {
  const o = new Bt(0);
  let c = r === true ? 0 : 1, l, u, d = null, f = 0, m = null;
  function _(y) {
    let A = y.isScene === true ? y.background : null;
    return A && A.isTexture && (A = (y.backgroundBlurriness > 0 ? e : t).get(A)), A;
  }
  function v(y) {
    let A = false;
    const P = _(y);
    P === null ? h(o, c) : P && P.isColor && (h(P, 1), A = true);
    const T = i.xr.getEnvironmentBlendMode();
    T === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : T === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || A) && (n.buffers.depth.setTest(true), n.buffers.depth.setMask(true), n.buffers.color.setMask(true), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function p(y, A) {
    const P = _(A);
    P && (P.isCubeTexture || P.mapping === vs) ? (u === void 0 && (u = new Ze(new Li(1, 1, 1), new fn({ name: "BackgroundCubeMaterial", uniforms: hi($e.backgroundCube.uniforms), vertexShader: $e.backgroundCube.vertexShader, fragmentShader: $e.backgroundCube.fragmentShader, side: we, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(T, C, z) {
      this.matrixWorld.copyPosition(z.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), s.update(u)), Dn.copy(A.backgroundRotation), Dn.x *= -1, Dn.y *= -1, Dn.z *= -1, P.isCubeTexture && P.isRenderTargetTexture === false && (Dn.y *= -1, Dn.z *= -1), u.material.uniforms.envMap.value = P, u.material.uniforms.flipEnvMap.value = P.isCubeTexture && P.isRenderTargetTexture === false ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = A.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = A.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(xd.makeRotationFromEuler(Dn)), u.material.toneMapped = Xt.getTransfer(P.colorSpace) !== jt, (d !== P || f !== P.version || m !== i.toneMapping) && (u.material.needsUpdate = true, d = P, f = P.version, m = i.toneMapping), u.layers.enableAll(), y.unshift(u, u.geometry, u.material, 0, 0, null)) : P && P.isTexture && (l === void 0 && (l = new Ze(new bs(2, 2), new fn({ name: "BackgroundMaterial", uniforms: hi($e.background.uniforms), vertexShader: $e.background.vertexShader, fragmentShader: $e.background.fragmentShader, side: yn, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), s.update(l)), l.material.uniforms.t2D.value = P, l.material.uniforms.backgroundIntensity.value = A.backgroundIntensity, l.material.toneMapped = Xt.getTransfer(P.colorSpace) !== jt, P.matrixAutoUpdate === true && P.updateMatrix(), l.material.uniforms.uvTransform.value.copy(P.matrix), (d !== P || f !== P.version || m !== i.toneMapping) && (l.material.needsUpdate = true, d = P, f = P.version, m = i.toneMapping), l.layers.enableAll(), y.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function h(y, A) {
    y.getRGB(is, Fo(i)), n.buffers.color.setClear(is.r, is.g, is.b, A, a);
  }
  function S() {
    u !== void 0 && (u.geometry.dispose(), u.material.dispose(), u = void 0), l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0);
  }
  return { getClearColor: function() {
    return o;
  }, setClearColor: function(y, A = 1) {
    o.set(y), c = A, h(o, c);
  }, getClearAlpha: function() {
    return c;
  }, setClearAlpha: function(y) {
    c = y, h(o, c);
  }, render: v, addToRenderList: p, dispose: S };
}
function gd(i, t) {
  const e = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, s = f(null);
  let r = s, a = false;
  function o(M, D, B, k, q) {
    let W = false;
    const $ = d(k, B, D);
    r !== $ && (r = $, l(r.object)), W = m(M, k, B, q), W && _(M, k, B, q), q !== null && t.update(q, i.ELEMENT_ARRAY_BUFFER), (W || a) && (a = false, A(M, D, B, k), q !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(q).buffer));
  }
  function c() {
    return i.createVertexArray();
  }
  function l(M) {
    return i.bindVertexArray(M);
  }
  function u(M) {
    return i.deleteVertexArray(M);
  }
  function d(M, D, B) {
    const k = B.wireframe === true;
    let q = n[M.id];
    q === void 0 && (q = {}, n[M.id] = q);
    let W = q[D.id];
    W === void 0 && (W = {}, q[D.id] = W);
    let $ = W[k];
    return $ === void 0 && ($ = f(c()), W[k] = $), $;
  }
  function f(M) {
    const D = [], B = [], k = [];
    for (let q = 0; q < e; q++) D[q] = 0, B[q] = 0, k[q] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: D, enabledAttributes: B, attributeDivisors: k, object: M, attributes: {}, index: null };
  }
  function m(M, D, B, k) {
    const q = r.attributes, W = D.attributes;
    let $ = 0;
    const J = B.getAttributes();
    for (const G in J) if (J[G].location >= 0) {
      const rt = q[G];
      let bt = W[G];
      if (bt === void 0 && (G === "instanceMatrix" && M.instanceMatrix && (bt = M.instanceMatrix), G === "instanceColor" && M.instanceColor && (bt = M.instanceColor)), rt === void 0 || rt.attribute !== bt || bt && rt.data !== bt.data) return true;
      $++;
    }
    return r.attributesNum !== $ || r.index !== k;
  }
  function _(M, D, B, k) {
    const q = {}, W = D.attributes;
    let $ = 0;
    const J = B.getAttributes();
    for (const G in J) if (J[G].location >= 0) {
      let rt = W[G];
      rt === void 0 && (G === "instanceMatrix" && M.instanceMatrix && (rt = M.instanceMatrix), G === "instanceColor" && M.instanceColor && (rt = M.instanceColor));
      const bt = {};
      bt.attribute = rt, rt && rt.data && (bt.data = rt.data), q[G] = bt, $++;
    }
    r.attributes = q, r.attributesNum = $, r.index = k;
  }
  function v() {
    const M = r.newAttributes;
    for (let D = 0, B = M.length; D < B; D++) M[D] = 0;
  }
  function p(M) {
    h(M, 0);
  }
  function h(M, D) {
    const B = r.newAttributes, k = r.enabledAttributes, q = r.attributeDivisors;
    B[M] = 1, k[M] === 0 && (i.enableVertexAttribArray(M), k[M] = 1), q[M] !== D && (i.vertexAttribDivisor(M, D), q[M] = D);
  }
  function S() {
    const M = r.newAttributes, D = r.enabledAttributes;
    for (let B = 0, k = D.length; B < k; B++) D[B] !== M[B] && (i.disableVertexAttribArray(B), D[B] = 0);
  }
  function y(M, D, B, k, q, W, $) {
    $ === true ? i.vertexAttribIPointer(M, D, B, q, W) : i.vertexAttribPointer(M, D, B, k, q, W);
  }
  function A(M, D, B, k) {
    v();
    const q = k.attributes, W = B.getAttributes(), $ = D.defaultAttributeValues;
    for (const J in W) {
      const G = W[J];
      if (G.location >= 0) {
        let nt = q[J];
        if (nt === void 0 && (J === "instanceMatrix" && M.instanceMatrix && (nt = M.instanceMatrix), J === "instanceColor" && M.instanceColor && (nt = M.instanceColor)), nt !== void 0) {
          const rt = nt.normalized, bt = nt.itemSize, Ht = t.get(nt);
          if (Ht === void 0) continue;
          const Yt = Ht.buffer, Jt = Ht.type, Qt = Ht.bytesPerElement, X = Jt === i.INT || Jt === i.UNSIGNED_INT || nt.gpuType === Kr;
          if (nt.isInterleavedBufferAttribute) {
            const K = nt.data, dt = K.stride, Lt = nt.offset;
            if (K.isInstancedInterleavedBuffer) {
              for (let gt = 0; gt < G.locationSize; gt++) h(G.location + gt, K.meshPerAttribute);
              M.isInstancedMesh !== true && k._maxInstanceCount === void 0 && (k._maxInstanceCount = K.meshPerAttribute * K.count);
            } else for (let gt = 0; gt < G.locationSize; gt++) p(G.location + gt);
            i.bindBuffer(i.ARRAY_BUFFER, Yt);
            for (let gt = 0; gt < G.locationSize; gt++) y(G.location + gt, bt / G.locationSize, Jt, rt, dt * Qt, (Lt + bt / G.locationSize * gt) * Qt, X);
          } else {
            if (nt.isInstancedBufferAttribute) {
              for (let K = 0; K < G.locationSize; K++) h(G.location + K, nt.meshPerAttribute);
              M.isInstancedMesh !== true && k._maxInstanceCount === void 0 && (k._maxInstanceCount = nt.meshPerAttribute * nt.count);
            } else for (let K = 0; K < G.locationSize; K++) p(G.location + K);
            i.bindBuffer(i.ARRAY_BUFFER, Yt);
            for (let K = 0; K < G.locationSize; K++) y(G.location + K, bt / G.locationSize, Jt, rt, bt * Qt, bt / G.locationSize * K * Qt, X);
          }
        } else if ($ !== void 0) {
          const rt = $[J];
          if (rt !== void 0) switch (rt.length) {
            case 2:
              i.vertexAttrib2fv(G.location, rt);
              break;
            case 3:
              i.vertexAttrib3fv(G.location, rt);
              break;
            case 4:
              i.vertexAttrib4fv(G.location, rt);
              break;
            default:
              i.vertexAttrib1fv(G.location, rt);
          }
        }
      }
    }
    S();
  }
  function P() {
    z();
    for (const M in n) {
      const D = n[M];
      for (const B in D) {
        const k = D[B];
        for (const q in k) u(k[q].object), delete k[q];
        delete D[B];
      }
      delete n[M];
    }
  }
  function T(M) {
    if (n[M.id] === void 0) return;
    const D = n[M.id];
    for (const B in D) {
      const k = D[B];
      for (const q in k) u(k[q].object), delete k[q];
      delete D[B];
    }
    delete n[M.id];
  }
  function C(M) {
    for (const D in n) {
      const B = n[D];
      if (B[M.id] === void 0) continue;
      const k = B[M.id];
      for (const q in k) u(k[q].object), delete k[q];
      delete B[M.id];
    }
  }
  function z() {
    b(), a = true, r !== s && (r = s, l(r.object));
  }
  function b() {
    s.geometry = null, s.program = null, s.wireframe = false;
  }
  return { setup: o, reset: z, resetDefaultState: b, dispose: P, releaseStatesOfGeometry: T, releaseStatesOfProgram: C, initAttributes: v, enableAttribute: p, disableUnusedAttributes: S };
}
function vd(i, t, e) {
  let n;
  function s(l) {
    n = l;
  }
  function r(l, u) {
    i.drawArrays(n, l, u), e.update(u, n, 1);
  }
  function a(l, u, d) {
    d !== 0 && (i.drawArraysInstanced(n, l, u, d), e.update(u, n, d));
  }
  function o(l, u, d) {
    if (d === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, u, 0, d);
    let m = 0;
    for (let _ = 0; _ < d; _++) m += u[_];
    e.update(m, n, 1);
  }
  function c(l, u, d, f) {
    if (d === 0) return;
    const m = t.get("WEBGL_multi_draw");
    if (m === null) for (let _ = 0; _ < l.length; _++) a(l[_], u[_], f[_]);
    else {
      m.multiDrawArraysInstancedWEBGL(n, l, 0, u, 0, f, 0, d);
      let _ = 0;
      for (let v = 0; v < d; v++) _ += u[v] * f[v];
      e.update(_, n, 1);
    }
  }
  this.setMode = s, this.render = r, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = c;
}
function Md(i, t, e, n) {
  let s;
  function r() {
    if (s !== void 0) return s;
    if (t.has("EXT_texture_filter_anisotropic") === true) {
      const C = t.get("EXT_texture_filter_anisotropic");
      s = i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else s = 0;
    return s;
  }
  function a(C) {
    return !(C !== Ye && n.convert(C) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(C) {
    const z = C === ui && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(C !== un && n.convert(C) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && C !== ln && !z);
  }
  function c(C) {
    if (C === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0) return "highp";
      C = "mediump";
    }
    return C === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let l = e.precision !== void 0 ? e.precision : "highp";
  const u = c(l);
  u !== l && (Ct("WebGLRenderer:", l, "not supported, using", u, "instead."), l = u);
  const d = e.logarithmicDepthBuffer === true, f = e.reversedDepthBuffer === true && t.has("EXT_clip_control"), m = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), _ = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), v = i.getParameter(i.MAX_TEXTURE_SIZE), p = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), h = i.getParameter(i.MAX_VERTEX_ATTRIBS), S = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), y = i.getParameter(i.MAX_VARYING_VECTORS), A = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), P = _ > 0, T = i.getParameter(i.MAX_SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: r, getMaxPrecision: c, textureFormatReadable: a, textureTypeReadable: o, precision: l, logarithmicDepthBuffer: d, reversedDepthBuffer: f, maxTextures: m, maxVertexTextures: _, maxTextureSize: v, maxCubemapSize: p, maxAttributes: h, maxVertexUniforms: S, maxVaryings: y, maxFragmentUniforms: A, vertexTextures: P, maxSamples: T };
}
function bd(i) {
  const t = this;
  let e = null, n = 0, s = false, r = false;
  const a = new Mn(), o = new Ut(), c = { value: null, needsUpdate: false };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, f) {
    const m = d.length !== 0 || f || n !== 0 || s;
    return s = f, n = d.length, m;
  }, this.beginShadows = function() {
    r = true, u(null);
  }, this.endShadows = function() {
    r = false;
  }, this.setGlobalState = function(d, f) {
    e = u(d, f, 0);
  }, this.setState = function(d, f, m) {
    const _ = d.clippingPlanes, v = d.clipIntersection, p = d.clipShadows, h = i.get(d);
    if (!s || _ === null || _.length === 0 || r && !p) r ? u(null) : l();
    else {
      const S = r ? 0 : n, y = S * 4;
      let A = h.clippingState || null;
      c.value = A, A = u(_, f, y, m);
      for (let P = 0; P !== y; ++P) A[P] = e[P];
      h.clippingState = A, this.numIntersection = v ? this.numPlanes : 0, this.numPlanes += S;
    }
  };
  function l() {
    c.value !== e && (c.value = e, c.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0;
  }
  function u(d, f, m, _) {
    const v = d !== null ? d.length : 0;
    let p = null;
    if (v !== 0) {
      if (p = c.value, _ !== true || p === null) {
        const h = m + v * 4, S = f.matrixWorldInverse;
        o.getNormalMatrix(S), (p === null || p.length < h) && (p = new Float32Array(h));
        for (let y = 0, A = m; y !== v; ++y, A += 4) a.copy(d[y]).applyMatrix4(S, o), a.normal.toArray(p, A), p[A + 3] = a.constant;
      }
      c.value = p, c.needsUpdate = true;
    }
    return t.numPlanes = v, t.numIntersection = 0, p;
  }
}
function Sd(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(a, o) {
    return o === fr ? a.mapping = oi : o === pr && (a.mapping = li), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === fr || o === pr) if (t.has(a)) {
        const c = t.get(a).texture;
        return e(c, a.mapping);
      } else {
        const c = a.image;
        if (c && c.height > 0) {
          const l = new _c(c.height);
          return l.fromEquirectangularTexture(i, a), t.set(a, l), a.addEventListener("dispose", s), e(l.texture, a.mapping);
        } else return null;
      }
    }
    return a;
  }
  function s(a) {
    const o = a.target;
    o.removeEventListener("dispose", s);
    const c = t.get(o);
    c !== void 0 && (t.delete(o), c.dispose());
  }
  function r() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return { get: n, dispose: r };
}
const Sn = 4, Ya = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], In = 20, Ed = 256, bi = new Pc(), qa = new Bt();
let Zs = null, Js = 0, Qs = 0, tr = false;
const yd = new N();
class $a {
  constructor(t) {
    this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._sigmas = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
  }
  fromScene(t, e = 0, n = 0.1, s = 100, r = {}) {
    const { size: a = 256, position: o = yd } = r;
    Zs = this._renderer.getRenderTarget(), Js = this._renderer.getActiveCubeFace(), Qs = this._renderer.getActiveMipmapLevel(), tr = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(a);
    const c = this._allocateTargets();
    return c.depthBuffer = true, this._sceneToCubeUV(t, n, s, c, o), e > 0 && this._blur(c, 0, 0, e), this._applyPMREM(c), this._cleanup(c), c;
  }
  fromEquirectangular(t, e = null) {
    return this._fromTexture(t, e);
  }
  fromCubemap(t, e = null) {
    return this._fromTexture(t, e);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Za(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Ka(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._backgroundBox !== null && (this._backgroundBox.geometry.dispose(), this._backgroundBox.material.dispose());
  }
  _setSize(t) {
    this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let t = 0; t < this._lodMeshes.length; t++) this._lodMeshes[t].geometry.dispose();
  }
  _cleanup(t) {
    this._renderer.setRenderTarget(Zs, Js, Qs), this._renderer.xr.enabled = tr, t.scissorTest = false, ti(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === oi || t.mapping === li ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), Zs = this._renderer.getRenderTarget(), Js = this._renderer.getActiveCubeFace(), Qs = this._renderer.getActiveMipmapLevel(), tr = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const n = e || this._allocateTargets();
    return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = { magFilter: ze, minFilter: ze, generateMipmaps: false, type: ui, format: Ye, colorSpace: ci, depthBuffer: false }, s = ja(t, e, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = ja(t, e, n);
      const { _lodMax: r } = this;
      ({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this._sigmas } = Td(r)), this._blurMaterial = wd(r, t, e);
    }
    return s;
  }
  _compileMaterial(t) {
    const e = new Ze(new Ie(), t);
    this._renderer.compile(e, bi);
  }
  _sceneToCubeUV(t, e, n, s, r) {
    const c = new Be(90, 1, e, n), l = [1, -1, 1, 1, 1, 1], u = [1, 1, 1, -1, -1, -1], d = this._renderer, f = d.autoClear, m = d.toneMapping;
    d.getClearColor(qa), d.toneMapping = En, d.autoClear = false, d.state.buffers.depth.getReversed() && (d.setRenderTarget(s), d.clearDepth(), d.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new Ze(new Li(), new ms({ name: "PMREM.Background", side: we, depthWrite: false, depthTest: false })));
    const v = this._backgroundBox, p = v.material;
    let h = false;
    const S = t.background;
    S ? S.isColor && (p.color.copy(S), t.background = null, h = true) : (p.color.copy(qa), h = true);
    for (let y = 0; y < 6; y++) {
      const A = y % 3;
      A === 0 ? (c.up.set(0, l[y], 0), c.position.set(r.x, r.y, r.z), c.lookAt(r.x + u[y], r.y, r.z)) : A === 1 ? (c.up.set(0, 0, l[y]), c.position.set(r.x, r.y, r.z), c.lookAt(r.x, r.y + u[y], r.z)) : (c.up.set(0, l[y], 0), c.position.set(r.x, r.y, r.z), c.lookAt(r.x, r.y, r.z + u[y]));
      const P = this._cubeSize;
      ti(s, A * P, y > 2 ? P : 0, P, P), d.setRenderTarget(s), h && d.render(v, c), d.render(t, c);
    }
    d.toneMapping = m, d.autoClear = f, t.background = S;
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer, s = t.mapping === oi || t.mapping === li;
    s ? (this._cubemapMaterial === null && (this._cubemapMaterial = Za()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Ka());
    const r = s ? this._cubemapMaterial : this._equirectMaterial, a = this._lodMeshes[0];
    a.material = r;
    const o = r.uniforms;
    o.envMap.value = t;
    const c = this._cubeSize;
    ti(e, 0, 0, 3 * c, 2 * c), n.setRenderTarget(e), n.render(a, bi);
  }
  _applyPMREM(t) {
    const e = this._renderer, n = e.autoClear;
    e.autoClear = false;
    const s = this._lodMeshes.length;
    for (let r = 1; r < s; r++) this._applyGGXFilter(t, r - 1, r);
    e.autoClear = n;
  }
  _applyGGXFilter(t, e, n) {
    const s = this._renderer, r = this._pingPongRenderTarget;
    if (this._ggxMaterial === null) {
      const S = 3 * Math.max(this._cubeSize, 16), y = 4 * this._cubeSize;
      this._ggxMaterial = Ad(this._lodMax, S, y);
    }
    const a = this._ggxMaterial, o = this._lodMeshes[n];
    o.material = a;
    const c = a.uniforms, l = n / (this._lodMeshes.length - 1), u = e / (this._lodMeshes.length - 1), d = Math.sqrt(l * l - u * u), f = 0.05 + l * 0.95, m = d * f, { _lodMax: _ } = this, v = this._sizeLods[n], p = 3 * v * (n > _ - Sn ? n - _ + Sn : 0), h = 4 * (this._cubeSize - v);
    c.envMap.value = t.texture, c.roughness.value = m, c.mipInt.value = _ - e, ti(r, p, h, 3 * v, 2 * v), s.setRenderTarget(r), s.render(o, bi), c.envMap.value = r.texture, c.roughness.value = 0, c.mipInt.value = _ - n, ti(t, p, h, 3 * v, 2 * v), s.setRenderTarget(t), s.render(o, bi);
  }
  _blur(t, e, n, s, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(t, a, e, n, s, "latitudinal", r), this._halfBlur(a, t, n, n, s, "longitudinal", r);
  }
  _halfBlur(t, e, n, s, r, a, o) {
    const c = this._renderer, l = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && ce("blur direction must be either latitudinal or longitudinal!");
    const u = 3, d = this._lodMeshes[s];
    d.material = l;
    const f = l.uniforms, m = this._sizeLods[n] - 1, _ = isFinite(r) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * In - 1), v = r / _, p = isFinite(r) ? 1 + Math.floor(u * v) : In;
    p > In && Ct(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${In}`);
    const h = [];
    let S = 0;
    for (let C = 0; C < In; ++C) {
      const z = C / v, b = Math.exp(-z * z / 2);
      h.push(b), C === 0 ? S += b : C < p && (S += 2 * b);
    }
    for (let C = 0; C < h.length; C++) h[C] = h[C] / S;
    f.envMap.value = t.texture, f.samples.value = p, f.weights.value = h, f.latitudinal.value = a === "latitudinal", o && (f.poleAxis.value = o);
    const { _lodMax: y } = this;
    f.dTheta.value = _, f.mipInt.value = y - n;
    const A = this._sizeLods[s], P = 3 * A * (s > y - Sn ? s - y + Sn : 0), T = 4 * (this._cubeSize - A);
    ti(e, P, T, 3 * A, 2 * A), c.setRenderTarget(e), c.render(d, bi);
  }
}
function Td(i) {
  const t = [], e = [], n = [];
  let s = i;
  const r = i - Sn + 1 + Ya.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, s);
    t.push(o);
    let c = 1 / o;
    a > i - Sn ? c = Ya[a - i + Sn - 1] : a === 0 && (c = 0), e.push(c);
    const l = 1 / (o - 2), u = -l, d = 1 + l, f = [u, u, d, u, d, d, u, u, d, d, u, d], m = 6, _ = 6, v = 3, p = 2, h = 1, S = new Float32Array(v * _ * m), y = new Float32Array(p * _ * m), A = new Float32Array(h * _ * m);
    for (let T = 0; T < m; T++) {
      const C = T % 3 * 2 / 3 - 1, z = T > 2 ? 0 : -1, b = [C, z, 0, C + 2 / 3, z, 0, C + 2 / 3, z + 1, 0, C, z, 0, C + 2 / 3, z + 1, 0, C, z + 1, 0];
      S.set(b, v * _ * T), y.set(f, p * _ * T);
      const M = [T, T, T, T, T, T];
      A.set(M, h * _ * T);
    }
    const P = new Ie();
    P.setAttribute("position", new Ve(S, v)), P.setAttribute("uv", new Ve(y, p)), P.setAttribute("faceIndex", new Ve(A, h)), n.push(new Ze(P, null)), s > Sn && s--;
  }
  return { lodMeshes: n, sizeLods: t, sigmas: e };
}
function ja(i, t, e) {
  const n = new Bn(i, t, e);
  return n.texture.mapping = vs, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
}
function ti(i, t, e, n, s) {
  i.viewport.set(t, e, n, s), i.scissor.set(t, e, n, s);
}
function Ad(i, t, e) {
  return new fn({ name: "PMREMGGXConvolution", defines: { GGX_SAMPLES: Ed, CUBEUV_TEXEL_WIDTH: 1 / t, CUBEUV_TEXEL_HEIGHT: 1 / e, CUBEUV_MAX_MIP: `${i}.0` }, uniforms: { envMap: { value: null }, roughness: { value: 0 }, mipInt: { value: 0 } }, vertexShader: Ss(), fragmentShader: `

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
		`, blending: cn, depthTest: false, depthWrite: false });
}
function wd(i, t, e) {
  const n = new Float32Array(In), s = new N(0, 1, 0);
  return new fn({ name: "SphericalGaussianBlur", defines: { n: In, CUBEUV_TEXEL_WIDTH: 1 / t, CUBEUV_TEXEL_HEIGHT: 1 / e, CUBEUV_MAX_MIP: `${i}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: s } }, vertexShader: Ss(), fragmentShader: `

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
		`, blending: cn, depthTest: false, depthWrite: false });
}
function Ka() {
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
		`, blending: cn, depthTest: false, depthWrite: false });
}
function Za() {
  return new fn({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Ss(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: cn, depthTest: false, depthWrite: false });
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
function Rd(i) {
  let t = /* @__PURE__ */ new WeakMap(), e = null;
  function n(o) {
    if (o && o.isTexture) {
      const c = o.mapping, l = c === fr || c === pr, u = c === oi || c === li;
      if (l || u) {
        let d = t.get(o);
        const f = d !== void 0 ? d.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f) return e === null && (e = new $a(i)), d = l ? e.fromEquirectangular(o, d) : e.fromCubemap(o, d), d.texture.pmremVersion = o.pmremVersion, t.set(o, d), d.texture;
        if (d !== void 0) return d.texture;
        {
          const m = o.image;
          return l && m && m.height > 0 || u && m && s(m) ? (e === null && (e = new $a(i)), d = l ? e.fromEquirectangular(o) : e.fromCubemap(o), d.texture.pmremVersion = o.pmremVersion, t.set(o, d), o.addEventListener("dispose", r), d.texture) : null;
        }
      }
    }
    return o;
  }
  function s(o) {
    let c = 0;
    const l = 6;
    for (let u = 0; u < l; u++) o[u] !== void 0 && c++;
    return c === l;
  }
  function r(o) {
    const c = o.target;
    c.removeEventListener("dispose", r);
    const l = t.get(c);
    l !== void 0 && (t.delete(c), l.dispose());
  }
  function a() {
    t = /* @__PURE__ */ new WeakMap(), e !== null && (e.dispose(), e = null);
  }
  return { get: n, dispose: a };
}
function Cd(i) {
  const t = {};
  function e(n) {
    if (t[n] !== void 0) return t[n];
    const s = i.getExtension(n);
    return t[n] = s, s;
  }
  return { has: function(n) {
    return e(n) !== null;
  }, init: function() {
    e("EXT_color_buffer_float"), e("WEBGL_clip_cull_distance"), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float"), e("WEBGL_multisampled_render_to_texture"), e("WEBGL_render_shared_exponent");
  }, get: function(n) {
    const s = e(n);
    return s === null && wi("WebGLRenderer: " + n + " extension not supported."), s;
  } };
}
function Pd(i, t, e, n) {
  const s = {}, r = /* @__PURE__ */ new WeakMap();
  function a(d) {
    const f = d.target;
    f.index !== null && t.remove(f.index);
    for (const _ in f.attributes) t.remove(f.attributes[_]);
    f.removeEventListener("dispose", a), delete s[f.id];
    const m = r.get(f);
    m && (t.remove(m), r.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === true && delete f._maxInstanceCount, e.memory.geometries--;
  }
  function o(d, f) {
    return s[f.id] === true || (f.addEventListener("dispose", a), s[f.id] = true, e.memory.geometries++), f;
  }
  function c(d) {
    const f = d.attributes;
    for (const m in f) t.update(f[m], i.ARRAY_BUFFER);
  }
  function l(d) {
    const f = [], m = d.index, _ = d.attributes.position;
    let v = 0;
    if (m !== null) {
      const S = m.array;
      v = m.version;
      for (let y = 0, A = S.length; y < A; y += 3) {
        const P = S[y + 0], T = S[y + 1], C = S[y + 2];
        f.push(P, T, T, C, C, P);
      }
    } else if (_ !== void 0) {
      const S = _.array;
      v = _.version;
      for (let y = 0, A = S.length / 3 - 1; y < A; y += 3) {
        const P = y + 0, T = y + 1, C = y + 2;
        f.push(P, T, T, C, C, P);
      }
    } else return;
    const p = new (Po(f) ? No : Io)(f, 1);
    p.version = v;
    const h = r.get(d);
    h && t.remove(h), r.set(d, p);
  }
  function u(d) {
    const f = r.get(d);
    if (f) {
      const m = d.index;
      m !== null && f.version < m.version && l(d);
    } else l(d);
    return r.get(d);
  }
  return { get: o, update: c, getWireframeAttribute: u };
}
function Dd(i, t, e) {
  let n;
  function s(f) {
    n = f;
  }
  let r, a;
  function o(f) {
    r = f.type, a = f.bytesPerElement;
  }
  function c(f, m) {
    i.drawElements(n, m, r, f * a), e.update(m, n, 1);
  }
  function l(f, m, _) {
    _ !== 0 && (i.drawElementsInstanced(n, m, r, f * a, _), e.update(m, n, _));
  }
  function u(f, m, _) {
    if (_ === 0) return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, m, 0, r, f, 0, _);
    let p = 0;
    for (let h = 0; h < _; h++) p += m[h];
    e.update(p, n, 1);
  }
  function d(f, m, _, v) {
    if (_ === 0) return;
    const p = t.get("WEBGL_multi_draw");
    if (p === null) for (let h = 0; h < f.length; h++) l(f[h] / a, m[h], v[h]);
    else {
      p.multiDrawElementsInstancedWEBGL(n, m, 0, r, f, 0, v, 0, _);
      let h = 0;
      for (let S = 0; S < _; S++) h += m[S] * v[S];
      e.update(h, n, 1);
    }
  }
  this.setMode = s, this.setIndex = o, this.render = c, this.renderInstances = l, this.renderMultiDraw = u, this.renderMultiDrawInstances = d;
}
function Ld(i) {
  const t = { geometries: 0, textures: 0 }, e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, a, o) {
    switch (e.calls++, a) {
      case i.TRIANGLES:
        e.triangles += o * (r / 3);
        break;
      case i.LINES:
        e.lines += o * (r / 2);
        break;
      case i.LINE_STRIP:
        e.lines += o * (r - 1);
        break;
      case i.LINE_LOOP:
        e.lines += o * r;
        break;
      case i.POINTS:
        e.points += o * r;
        break;
      default:
        ce("WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function s() {
    e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
  }
  return { memory: t, render: e, programs: null, autoReset: true, reset: s, update: n };
}
function Ud(i, t, e) {
  const n = /* @__PURE__ */ new WeakMap(), s = new he();
  function r(a, o, c) {
    const l = a.morphTargetInfluences, u = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, d = u !== void 0 ? u.length : 0;
    let f = n.get(o);
    if (f === void 0 || f.count !== d) {
      let M = function() {
        z.dispose(), n.delete(o), o.removeEventListener("dispose", M);
      };
      var m = M;
      f !== void 0 && f.texture.dispose();
      const _ = o.morphAttributes.position !== void 0, v = o.morphAttributes.normal !== void 0, p = o.morphAttributes.color !== void 0, h = o.morphAttributes.position || [], S = o.morphAttributes.normal || [], y = o.morphAttributes.color || [];
      let A = 0;
      _ === true && (A = 1), v === true && (A = 2), p === true && (A = 3);
      let P = o.attributes.position.count * A, T = 1;
      P > t.maxTextureSize && (T = Math.ceil(P / t.maxTextureSize), P = t.maxTextureSize);
      const C = new Float32Array(P * T * 4 * d), z = new Do(C, P, T, d);
      z.type = ln, z.needsUpdate = true;
      const b = A * 4;
      for (let D = 0; D < d; D++) {
        const B = h[D], k = S[D], q = y[D], W = P * T * 4 * D;
        for (let $ = 0; $ < B.count; $++) {
          const J = $ * b;
          _ === true && (s.fromBufferAttribute(B, $), C[W + J + 0] = s.x, C[W + J + 1] = s.y, C[W + J + 2] = s.z, C[W + J + 3] = 0), v === true && (s.fromBufferAttribute(k, $), C[W + J + 4] = s.x, C[W + J + 5] = s.y, C[W + J + 6] = s.z, C[W + J + 7] = 0), p === true && (s.fromBufferAttribute(q, $), C[W + J + 8] = s.x, C[W + J + 9] = s.y, C[W + J + 10] = s.z, C[W + J + 11] = q.itemSize === 4 ? s.w : 1);
        }
      }
      f = { count: d, texture: z, size: new Nt(P, T) }, n.set(o, f), o.addEventListener("dispose", M);
    }
    if (a.isInstancedMesh === true && a.morphTexture !== null) c.getUniforms().setValue(i, "morphTexture", a.morphTexture, e);
    else {
      let _ = 0;
      for (let p = 0; p < l.length; p++) _ += l[p];
      const v = o.morphTargetsRelative ? 1 : 1 - _;
      c.getUniforms().setValue(i, "morphTargetBaseInfluence", v), c.getUniforms().setValue(i, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(i, "morphTargetsTexture", f.texture, e), c.getUniforms().setValue(i, "morphTargetsTextureSize", f.size);
  }
  return { update: r };
}
function Id(i, t, e, n) {
  let s = /* @__PURE__ */ new WeakMap();
  function r(c) {
    const l = n.render.frame, u = c.geometry, d = t.get(c, u);
    if (s.get(d) !== l && (t.update(d), s.set(d, l)), c.isInstancedMesh && (c.hasEventListener("dispose", o) === false && c.addEventListener("dispose", o), s.get(c) !== l && (e.update(c.instanceMatrix, i.ARRAY_BUFFER), c.instanceColor !== null && e.update(c.instanceColor, i.ARRAY_BUFFER), s.set(c, l))), c.isSkinnedMesh) {
      const f = c.skeleton;
      s.get(f) !== l && (f.update(), s.set(f, l));
    }
    return d;
  }
  function a() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function o(c) {
    const l = c.target;
    l.removeEventListener("dispose", o), e.remove(l.instanceMatrix), l.instanceColor !== null && e.remove(l.instanceColor);
  }
  return { update: r, dispose: a };
}
const Xo = new ve(), Ja = new Go(1, 1), Yo = new Do(), qo = new tc(), $o = new Bo(), Qa = [], to = [], eo = new Float32Array(16), no = new Float32Array(9), io = new Float32Array(4);
function fi(i, t, e) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const s = t * e;
  let r = Qa[s];
  if (r === void 0 && (r = new Float32Array(s), Qa[s] = r), t !== 0) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== t; ++a) o += e, i[a].toArray(r, o);
  }
  return r;
}
function fe(i, t) {
  if (i.length !== t.length) return false;
  for (let e = 0, n = i.length; e < n; e++) if (i[e] !== t[e]) return false;
  return true;
}
function pe(i, t) {
  for (let e = 0, n = t.length; e < n; e++) i[e] = t[e];
}
function Es(i, t) {
  let e = to[t];
  e === void 0 && (e = new Int32Array(t), to[t] = e);
  for (let n = 0; n !== t; ++n) e[n] = i.allocateTextureUnit();
  return e;
}
function Nd(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1f(this.addr, t), e[0] = t);
}
function Fd(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (i.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (fe(e, t)) return;
    i.uniform2fv(this.addr, t), pe(e, t);
  }
}
function Od(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else if (t.r !== void 0) (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (i.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
  else {
    if (fe(e, t)) return;
    i.uniform3fv(this.addr, t), pe(e, t);
  }
}
function Bd(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (fe(e, t)) return;
    i.uniform4fv(this.addr, t), pe(e, t);
  }
}
function zd(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (fe(e, t)) return;
    i.uniformMatrix2fv(this.addr, false, t), pe(e, t);
  } else {
    if (fe(e, n)) return;
    io.set(n), i.uniformMatrix2fv(this.addr, false, io), pe(e, n);
  }
}
function Vd(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (fe(e, t)) return;
    i.uniformMatrix3fv(this.addr, false, t), pe(e, t);
  } else {
    if (fe(e, n)) return;
    no.set(n), i.uniformMatrix3fv(this.addr, false, no), pe(e, n);
  }
}
function kd(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (fe(e, t)) return;
    i.uniformMatrix4fv(this.addr, false, t), pe(e, t);
  } else {
    if (fe(e, n)) return;
    eo.set(n), i.uniformMatrix4fv(this.addr, false, eo), pe(e, n);
  }
}
function Gd(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1i(this.addr, t), e[0] = t);
}
function Hd(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (i.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (fe(e, t)) return;
    i.uniform2iv(this.addr, t), pe(e, t);
  }
}
function Wd(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (fe(e, t)) return;
    i.uniform3iv(this.addr, t), pe(e, t);
  }
}
function Xd(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (fe(e, t)) return;
    i.uniform4iv(this.addr, t), pe(e, t);
  }
}
function Yd(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1ui(this.addr, t), e[0] = t);
}
function qd(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (i.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (fe(e, t)) return;
    i.uniform2uiv(this.addr, t), pe(e, t);
  }
}
function $d(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (fe(e, t)) return;
    i.uniform3uiv(this.addr, t), pe(e, t);
  }
}
function jd(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (fe(e, t)) return;
    i.uniform4uiv(this.addr, t), pe(e, t);
  }
}
function Kd(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s);
  let r;
  this.type === i.SAMPLER_2D_SHADOW ? (Ja.compareFunction = Co, r = Ja) : r = Xo, e.setTexture2D(t || r, s);
}
function Zd(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTexture3D(t || qo, s);
}
function Jd(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTextureCube(t || $o, s);
}
function Qd(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTexture2DArray(t || Yo, s);
}
function tf(i) {
  switch (i) {
    case 5126:
      return Nd;
    case 35664:
      return Fd;
    case 35665:
      return Od;
    case 35666:
      return Bd;
    case 35674:
      return zd;
    case 35675:
      return Vd;
    case 35676:
      return kd;
    case 5124:
    case 35670:
      return Gd;
    case 35667:
    case 35671:
      return Hd;
    case 35668:
    case 35672:
      return Wd;
    case 35669:
    case 35673:
      return Xd;
    case 5125:
      return Yd;
    case 36294:
      return qd;
    case 36295:
      return $d;
    case 36296:
      return jd;
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
      return Jd;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Qd;
  }
}
function ef(i, t) {
  i.uniform1fv(this.addr, t);
}
function nf(i, t) {
  const e = fi(t, this.size, 2);
  i.uniform2fv(this.addr, e);
}
function sf(i, t) {
  const e = fi(t, this.size, 3);
  i.uniform3fv(this.addr, e);
}
function rf(i, t) {
  const e = fi(t, this.size, 4);
  i.uniform4fv(this.addr, e);
}
function af(i, t) {
  const e = fi(t, this.size, 4);
  i.uniformMatrix2fv(this.addr, false, e);
}
function of(i, t) {
  const e = fi(t, this.size, 9);
  i.uniformMatrix3fv(this.addr, false, e);
}
function lf(i, t) {
  const e = fi(t, this.size, 16);
  i.uniformMatrix4fv(this.addr, false, e);
}
function cf(i, t) {
  i.uniform1iv(this.addr, t);
}
function hf(i, t) {
  i.uniform2iv(this.addr, t);
}
function uf(i, t) {
  i.uniform3iv(this.addr, t);
}
function df(i, t) {
  i.uniform4iv(this.addr, t);
}
function ff(i, t) {
  i.uniform1uiv(this.addr, t);
}
function pf(i, t) {
  i.uniform2uiv(this.addr, t);
}
function mf(i, t) {
  i.uniform3uiv(this.addr, t);
}
function xf(i, t) {
  i.uniform4uiv(this.addr, t);
}
function _f(i, t, e) {
  const n = this.cache, s = t.length, r = Es(e, s);
  fe(n, r) || (i.uniform1iv(this.addr, r), pe(n, r));
  for (let a = 0; a !== s; ++a) e.setTexture2D(t[a] || Xo, r[a]);
}
function gf(i, t, e) {
  const n = this.cache, s = t.length, r = Es(e, s);
  fe(n, r) || (i.uniform1iv(this.addr, r), pe(n, r));
  for (let a = 0; a !== s; ++a) e.setTexture3D(t[a] || qo, r[a]);
}
function vf(i, t, e) {
  const n = this.cache, s = t.length, r = Es(e, s);
  fe(n, r) || (i.uniform1iv(this.addr, r), pe(n, r));
  for (let a = 0; a !== s; ++a) e.setTextureCube(t[a] || $o, r[a]);
}
function Mf(i, t, e) {
  const n = this.cache, s = t.length, r = Es(e, s);
  fe(n, r) || (i.uniform1iv(this.addr, r), pe(n, r));
  for (let a = 0; a !== s; ++a) e.setTexture2DArray(t[a] || Yo, r[a]);
}
function bf(i) {
  switch (i) {
    case 5126:
      return ef;
    case 35664:
      return nf;
    case 35665:
      return sf;
    case 35666:
      return rf;
    case 35674:
      return af;
    case 35675:
      return of;
    case 35676:
      return lf;
    case 5124:
    case 35670:
      return cf;
    case 35667:
    case 35671:
      return hf;
    case 35668:
    case 35672:
      return uf;
    case 35669:
    case 35673:
      return df;
    case 5125:
      return ff;
    case 36294:
      return pf;
    case 36295:
      return mf;
    case 36296:
      return xf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return _f;
    case 35679:
    case 36299:
    case 36307:
      return gf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return vf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Mf;
  }
}
class Sf {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = tf(e.type);
  }
}
class Ef {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = bf(e.type);
  }
}
class yf {
  constructor(t) {
    this.id = t, this.seq = [], this.map = {};
  }
  setValue(t, e, n) {
    const s = this.seq;
    for (let r = 0, a = s.length; r !== a; ++r) {
      const o = s[r];
      o.setValue(t, e[o.id], n);
    }
  }
}
const er = /(\w+)(\])?(\[|\.)?/g;
function so(i, t) {
  i.seq.push(t), i.map[t.id] = t;
}
function Tf(i, t, e) {
  const n = i.name, s = n.length;
  for (er.lastIndex = 0; ; ) {
    const r = er.exec(n), a = er.lastIndex;
    let o = r[1];
    const c = r[2] === "]", l = r[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === s) {
      so(e, l === void 0 ? new Sf(o, i, t) : new Ef(o, i, t));
      break;
    } else {
      let d = e.map[o];
      d === void 0 && (d = new yf(o), so(e, d)), e = d;
    }
  }
}
class us {
  constructor(t, e) {
    this.seq = [], this.map = {};
    const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let s = 0; s < n; ++s) {
      const r = t.getActiveUniform(e, s), a = t.getUniformLocation(e, r.name);
      Tf(r, a, this);
    }
  }
  setValue(t, e, n, s) {
    const r = this.map[e];
    r !== void 0 && r.setValue(t, n, s);
  }
  setOptional(t, e, n) {
    const s = e[n];
    s !== void 0 && this.setValue(t, n, s);
  }
  static upload(t, e, n, s) {
    for (let r = 0, a = e.length; r !== a; ++r) {
      const o = e[r], c = n[o.id];
      c.needsUpdate !== false && o.setValue(t, c.value, s);
    }
  }
  static seqWithValue(t, e) {
    const n = [];
    for (let s = 0, r = t.length; s !== r; ++s) {
      const a = t[s];
      a.id in e && n.push(a);
    }
    return n;
  }
}
function ro(i, t, e) {
  const n = i.createShader(t);
  return i.shaderSource(n, e), i.compileShader(n), n;
}
const Af = 37297;
let wf = 0;
function Rf(i, t) {
  const e = i.split(`
`), n = [], s = Math.max(t - 6, 0), r = Math.min(t + 6, e.length);
  for (let a = s; a < r; a++) {
    const o = a + 1;
    n.push(`${o === t ? ">" : " "} ${o}: ${e[a]}`);
  }
  return n.join(`
`);
}
const ao = new Ut();
function Cf(i) {
  Xt._getMatrix(ao, Xt.workingColorSpace, i);
  const t = `mat3( ${ao.elements.map((e) => e.toFixed(4))} )`;
  switch (Xt.getTransfer(i)) {
    case ds:
      return [t, "LinearTransferOETF"];
    case jt:
      return [t, "sRGBTransferOETF"];
    default:
      return Ct("WebGLProgram: Unsupported color space: ", i), [t, "LinearTransferOETF"];
  }
}
function oo(i, t, e) {
  const n = i.getShaderParameter(t, i.COMPILE_STATUS), r = (i.getShaderInfoLog(t) || "").trim();
  if (n && r === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(r);
  if (a) {
    const o = parseInt(a[1]);
    return e.toUpperCase() + `

` + r + `

` + Rf(i.getShaderSource(t), o);
  } else return r;
}
function Pf(i, t) {
  const e = Cf(t);
  return [`vec4 ${i}( vec4 value ) {`, `	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`, "}"].join(`
`);
}
function Df(i, t) {
  let e;
  switch (t) {
    case Al:
      e = "Linear";
      break;
    case wl:
      e = "Reinhard";
      break;
    case Rl:
      e = "Cineon";
      break;
    case Cl:
      e = "ACESFilmic";
      break;
    case Dl:
      e = "AgX";
      break;
    case Ll:
      e = "Neutral";
      break;
    case Pl:
      e = "Custom";
      break;
    default:
      Ct("WebGLProgram: Unsupported toneMapping:", t), e = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
const ss = new N();
function Lf() {
  Xt.getLuminanceCoefficients(ss);
  const i = ss.x.toFixed(4), t = ss.y.toFixed(4), e = ss.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${i}, ${t}, ${e} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function Uf(i) {
  return [i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Si).join(`
`);
}
function If(i) {
  const t = [];
  for (const e in i) {
    const n = i[e];
    n !== false && t.push("#define " + e + " " + n);
  }
  return t.join(`
`);
}
function Nf(i, t) {
  const e = {}, n = i.getProgramParameter(t, i.ACTIVE_ATTRIBUTES);
  for (let s = 0; s < n; s++) {
    const r = i.getActiveAttrib(t, s), a = r.name;
    let o = 1;
    r.type === i.FLOAT_MAT2 && (o = 2), r.type === i.FLOAT_MAT3 && (o = 3), r.type === i.FLOAT_MAT4 && (o = 4), e[a] = { type: r.type, location: i.getAttribLocation(t, a), locationSize: o };
  }
  return e;
}
function Si(i) {
  return i !== "";
}
function lo(i, t) {
  const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function co(i, t) {
  return i.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const Ff = /^[ \t]*#include +<([\w\d./]+)>/gm;
function qr(i) {
  return i.replace(Ff, Bf);
}
const Of = /* @__PURE__ */ new Map();
function Bf(i, t) {
  let e = It[t];
  if (e === void 0) {
    const n = Of.get(t);
    if (n !== void 0) e = It[n], Ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
    else throw new Error("Can not resolve #include <" + t + ">");
  }
  return qr(e);
}
const zf = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function ho(i) {
  return i.replace(zf, Vf);
}
function Vf(i, t, e, n) {
  let s = "";
  for (let r = parseInt(t); r < parseInt(e); r++) s += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return s;
}
function uo(i) {
  let t = `precision ${i.precision} float;
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
  return i.precision === "highp" ? t += `
#define HIGH_PRECISION` : i.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
}
function kf(i) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === vo ? t = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === rl ? t = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === rn && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function Gf(i) {
  let t = "ENVMAP_TYPE_CUBE";
  if (i.envMap) switch (i.envMapMode) {
    case oi:
    case li:
      t = "ENVMAP_TYPE_CUBE";
      break;
    case vs:
      t = "ENVMAP_TYPE_CUBE_UV";
      break;
  }
  return t;
}
function Hf(i) {
  let t = "ENVMAP_MODE_REFLECTION";
  if (i.envMap) switch (i.envMapMode) {
    case li:
      t = "ENVMAP_MODE_REFRACTION";
      break;
  }
  return t;
}
function Wf(i) {
  let t = "ENVMAP_BLENDING_NONE";
  if (i.envMap) switch (i.combine) {
    case Mo:
      t = "ENVMAP_BLENDING_MULTIPLY";
      break;
    case yl:
      t = "ENVMAP_BLENDING_MIX";
      break;
    case Tl:
      t = "ENVMAP_BLENDING_ADD";
      break;
  }
  return t;
}
function Xf(i) {
  const t = i.envMapCubeUVHeight;
  if (t === null) return null;
  const e = Math.log2(t) - 2, n = 1 / t;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 7 * 16)), texelHeight: n, maxMip: e };
}
function Yf(i, t, e, n) {
  const s = i.getContext(), r = e.defines;
  let a = e.vertexShader, o = e.fragmentShader;
  const c = kf(e), l = Gf(e), u = Hf(e), d = Wf(e), f = Xf(e), m = Uf(e), _ = If(r), v = s.createProgram();
  let p, h, S = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
  e.isRawShaderMaterial ? (p = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, _].filter(Si).join(`
`), p.length > 0 && (p += `
`), h = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, _].filter(Si).join(`
`), h.length > 0 && (h += `
`)) : (p = [uo(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, _, e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", e.batching ? "#define USE_BATCHING" : "", e.batchingColor ? "#define USE_BATCHING_COLOR" : "", e.instancing ? "#define USE_INSTANCING" : "", e.instancingColor ? "#define USE_INSTANCING_COLOR" : "", e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + u : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.mapUv ? "#define MAP_UV " + e.mapUv : "", e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "", e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "", e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "", e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "", e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "", e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "", e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "", e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "", e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "", e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "", e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "", e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "", e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "", e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "", e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "", e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "", e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "", e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "", e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "", e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "", e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "", e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "", e.vertexTangents && e.flatShading === false ? "#define USE_TANGENT" : "", e.vertexColors ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.skinning ? "#define USE_SKINNING" : "", e.morphTargets ? "#define USE_MORPHTARGETS" : "", e.morphNormals && e.flatShading === false ? "#define USE_MORPHNORMALS" : "", e.morphColors ? "#define USE_MORPHCOLORS" : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + c : "", e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", e.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Si).join(`
`), h = [uo(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, _, e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", e.map ? "#define USE_MAP" : "", e.matcap ? "#define USE_MATCAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + l : "", e.envMap ? "#define " + u : "", e.envMap ? "#define " + d : "", f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "", f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "", f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoat ? "#define USE_CLEARCOAT" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.dispersion ? "#define USE_DISPERSION" : "", e.iridescence ? "#define USE_IRIDESCENCE" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaTest ? "#define USE_ALPHATEST" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.sheen ? "#define USE_SHEEN" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.vertexTangents && e.flatShading === false ? "#define USE_TANGENT" : "", e.vertexColors || e.instancingColor || e.batchingColor ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.gradientMap ? "#define USE_GRADIENTMAP" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + c : "", e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", e.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", e.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", e.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", e.toneMapping !== En ? "#define TONE_MAPPING" : "", e.toneMapping !== En ? It.tonemapping_pars_fragment : "", e.toneMapping !== En ? Df("toneMapping", e.toneMapping) : "", e.dithering ? "#define DITHERING" : "", e.opaque ? "#define OPAQUE" : "", It.colorspace_pars_fragment, Pf("linearToOutputTexel", e.outputColorSpace), Lf(), e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "", `
`].filter(Si).join(`
`)), a = qr(a), a = lo(a, e), a = co(a, e), o = qr(o), o = lo(o, e), o = co(o, e), a = ho(a), o = ho(o), e.isRawShaderMaterial !== true && (S = `#version 300 es
`, p = [m, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + p, h = ["#define varying in", e.glslVersion === va ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", e.glslVersion === va ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + h);
  const y = S + p + a, A = S + h + o, P = ro(s, s.VERTEX_SHADER, y), T = ro(s, s.FRAGMENT_SHADER, A);
  s.attachShader(v, P), s.attachShader(v, T), e.index0AttributeName !== void 0 ? s.bindAttribLocation(v, 0, e.index0AttributeName) : e.morphTargets === true && s.bindAttribLocation(v, 0, "position"), s.linkProgram(v);
  function C(D) {
    if (i.debug.checkShaderErrors) {
      const B = s.getProgramInfoLog(v) || "", k = s.getShaderInfoLog(P) || "", q = s.getShaderInfoLog(T) || "", W = B.trim(), $ = k.trim(), J = q.trim();
      let G = true, nt = true;
      if (s.getProgramParameter(v, s.LINK_STATUS) === false) if (G = false, typeof i.debug.onShaderError == "function") i.debug.onShaderError(s, v, P, T);
      else {
        const rt = oo(s, P, "vertex"), bt = oo(s, T, "fragment");
        ce("THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(v, s.VALIDATE_STATUS) + `

Material Name: ` + D.name + `
Material Type: ` + D.type + `

Program Info Log: ` + W + `
` + rt + `
` + bt);
      }
      else W !== "" ? Ct("WebGLProgram: Program Info Log:", W) : ($ === "" || J === "") && (nt = false);
      nt && (D.diagnostics = { runnable: G, programLog: W, vertexShader: { log: $, prefix: p }, fragmentShader: { log: J, prefix: h } });
    }
    s.deleteShader(P), s.deleteShader(T), z = new us(s, v), b = Nf(s, v);
  }
  let z;
  this.getUniforms = function() {
    return z === void 0 && C(this), z;
  };
  let b;
  this.getAttributes = function() {
    return b === void 0 && C(this), b;
  };
  let M = e.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return M === false && (M = s.getProgramParameter(v, Af)), M;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), s.deleteProgram(v), this.program = void 0;
  }, this.type = e.shaderType, this.name = e.shaderName, this.id = wf++, this.cacheKey = t, this.usedTimes = 1, this.program = v, this.vertexShader = P, this.fragmentShader = T, this;
}
let qf = 0;
class $f {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(t) {
    const e = t.vertexShader, n = t.fragmentShader, s = this._getShaderStage(e), r = this._getShaderStage(n), a = this._getShaderCacheForMaterial(t);
    return a.has(s) === false && (a.add(s), s.usedTimes++), a.has(r) === false && (a.add(r), r.usedTimes++), this;
  }
  remove(t) {
    const e = this.materialCache.get(t);
    for (const n of e) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(t), this;
  }
  getVertexShaderID(t) {
    return this._getShaderStage(t.vertexShader).id;
  }
  getFragmentShaderID(t) {
    return this._getShaderStage(t.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(t) {
    const e = this.materialCache;
    let n = e.get(t);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), e.set(t, n)), n;
  }
  _getShaderStage(t) {
    const e = this.shaderCache;
    let n = e.get(t);
    return n === void 0 && (n = new jf(t), e.set(t, n)), n;
  }
}
class jf {
  constructor(t) {
    this.id = qf++, this.code = t, this.usedTimes = 0;
  }
}
function Kf(i, t, e, n, s, r, a) {
  const o = new Lo(), c = new $f(), l = /* @__PURE__ */ new Set(), u = [], d = s.logarithmicDepthBuffer, f = s.vertexTextures;
  let m = s.precision;
  const _ = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function v(b) {
    return l.add(b), b === 0 ? "uv" : `uv${b}`;
  }
  function p(b, M, D, B, k) {
    const q = B.fog, W = k.geometry, $ = b.isMeshStandardMaterial ? B.environment : null, J = (b.isMeshStandardMaterial ? e : t).get(b.envMap || $), G = J && J.mapping === vs ? J.image.height : null, nt = _[b.type];
    b.precision !== null && (m = s.getMaxPrecision(b.precision), m !== b.precision && Ct("WebGLProgram.getParameters:", b.precision, "not supported, using", m, "instead."));
    const rt = W.morphAttributes.position || W.morphAttributes.normal || W.morphAttributes.color, bt = rt !== void 0 ? rt.length : 0;
    let Ht = 0;
    W.morphAttributes.position !== void 0 && (Ht = 1), W.morphAttributes.normal !== void 0 && (Ht = 2), W.morphAttributes.color !== void 0 && (Ht = 3);
    let Yt, Jt, Qt, X;
    if (nt) {
      const qt = $e[nt];
      Yt = qt.vertexShader, Jt = qt.fragmentShader;
    } else Yt = b.vertexShader, Jt = b.fragmentShader, c.update(b), Qt = c.getVertexShaderID(b), X = c.getFragmentShaderID(b);
    const K = i.getRenderTarget(), dt = i.state.buffers.depth.getReversed(), Lt = k.isInstancedMesh === true, gt = k.isBatchedMesh === true, zt = !!b.map, xe = !!b.matcap, Ft = !!J, ne = !!b.aoMap, w = !!b.lightMap, Vt = !!b.bumpMap, kt = !!b.normalMap, te = !!b.displacementMap, mt = !!b.emissiveMap, se = !!b.metalnessMap, Mt = !!b.roughnessMap, Dt = b.anisotropy > 0, E = b.clearcoat > 0, x = b.dispersion > 0, I = b.iridescence > 0, H = b.sheen > 0, j = b.transmission > 0, V = Dt && !!b.anisotropyMap, _t = E && !!b.clearcoatMap, ot = E && !!b.clearcoatNormalMap, St = E && !!b.clearcoatRoughnessMap, xt = I && !!b.iridescenceMap, Z = I && !!b.iridescenceThicknessMap, et = H && !!b.sheenColorMap, At = H && !!b.sheenRoughnessMap, yt = !!b.specularMap, ht = !!b.specularColorMap, Rt = !!b.specularIntensityMap, R = j && !!b.transmissionMap, lt = j && !!b.thicknessMap, it = !!b.gradientMap, st = !!b.alphaMap, Q = b.alphaTest > 0, Y = !!b.alphaHash, ft = !!b.extensions;
    let Pt = En;
    b.toneMapped && (K === null || K.isXRRenderTarget === true) && (Pt = i.toneMapping);
    const ee = { shaderID: nt, shaderType: b.type, shaderName: b.name, vertexShader: Yt, fragmentShader: Jt, defines: b.defines, customVertexShaderID: Qt, customFragmentShaderID: X, isRawShaderMaterial: b.isRawShaderMaterial === true, glslVersion: b.glslVersion, precision: m, batching: gt, batchingColor: gt && k._colorsTexture !== null, instancing: Lt, instancingColor: Lt && k.instanceColor !== null, instancingMorph: Lt && k.morphTexture !== null, supportsVertexTextures: f, outputColorSpace: K === null ? i.outputColorSpace : K.isXRRenderTarget === true ? K.texture.colorSpace : ci, alphaToCoverage: !!b.alphaToCoverage, map: zt, matcap: xe, envMap: Ft, envMapMode: Ft && J.mapping, envMapCubeUVHeight: G, aoMap: ne, lightMap: w, bumpMap: Vt, normalMap: kt, displacementMap: f && te, emissiveMap: mt, normalMapObjectSpace: kt && b.normalMapType === Ol, normalMapTangentSpace: kt && b.normalMapType === Fl, metalnessMap: se, roughnessMap: Mt, anisotropy: Dt, anisotropyMap: V, clearcoat: E, clearcoatMap: _t, clearcoatNormalMap: ot, clearcoatRoughnessMap: St, dispersion: x, iridescence: I, iridescenceMap: xt, iridescenceThicknessMap: Z, sheen: H, sheenColorMap: et, sheenRoughnessMap: At, specularMap: yt, specularColorMap: ht, specularIntensityMap: Rt, transmission: j, transmissionMap: R, thicknessMap: lt, gradientMap: it, opaque: b.transparent === false && b.blending === si && b.alphaToCoverage === false, alphaMap: st, alphaTest: Q, alphaHash: Y, combine: b.combine, mapUv: zt && v(b.map.channel), aoMapUv: ne && v(b.aoMap.channel), lightMapUv: w && v(b.lightMap.channel), bumpMapUv: Vt && v(b.bumpMap.channel), normalMapUv: kt && v(b.normalMap.channel), displacementMapUv: te && v(b.displacementMap.channel), emissiveMapUv: mt && v(b.emissiveMap.channel), metalnessMapUv: se && v(b.metalnessMap.channel), roughnessMapUv: Mt && v(b.roughnessMap.channel), anisotropyMapUv: V && v(b.anisotropyMap.channel), clearcoatMapUv: _t && v(b.clearcoatMap.channel), clearcoatNormalMapUv: ot && v(b.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: St && v(b.clearcoatRoughnessMap.channel), iridescenceMapUv: xt && v(b.iridescenceMap.channel), iridescenceThicknessMapUv: Z && v(b.iridescenceThicknessMap.channel), sheenColorMapUv: et && v(b.sheenColorMap.channel), sheenRoughnessMapUv: At && v(b.sheenRoughnessMap.channel), specularMapUv: yt && v(b.specularMap.channel), specularColorMapUv: ht && v(b.specularColorMap.channel), specularIntensityMapUv: Rt && v(b.specularIntensityMap.channel), transmissionMapUv: R && v(b.transmissionMap.channel), thicknessMapUv: lt && v(b.thicknessMap.channel), alphaMapUv: st && v(b.alphaMap.channel), vertexTangents: !!W.attributes.tangent && (kt || Dt), vertexColors: b.vertexColors, vertexAlphas: b.vertexColors === true && !!W.attributes.color && W.attributes.color.itemSize === 4, pointsUvs: k.isPoints === true && !!W.attributes.uv && (zt || st), fog: !!q, useFog: b.fog === true, fogExp2: !!q && q.isFogExp2, flatShading: b.flatShading === true && b.wireframe === false, sizeAttenuation: b.sizeAttenuation === true, logarithmicDepthBuffer: d, reversedDepthBuffer: dt, skinning: k.isSkinnedMesh === true, morphTargets: W.morphAttributes.position !== void 0, morphNormals: W.morphAttributes.normal !== void 0, morphColors: W.morphAttributes.color !== void 0, morphTargetsCount: bt, morphTextureStride: Ht, numDirLights: M.directional.length, numPointLights: M.point.length, numSpotLights: M.spot.length, numSpotLightMaps: M.spotLightMap.length, numRectAreaLights: M.rectArea.length, numHemiLights: M.hemi.length, numDirLightShadows: M.directionalShadowMap.length, numPointLightShadows: M.pointShadowMap.length, numSpotLightShadows: M.spotShadowMap.length, numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps, numLightProbes: M.numLightProbes, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: b.dithering, shadowMapEnabled: i.shadowMap.enabled && D.length > 0, shadowMapType: i.shadowMap.type, toneMapping: Pt, decodeVideoTexture: zt && b.map.isVideoTexture === true && Xt.getTransfer(b.map.colorSpace) === jt, decodeVideoTextureEmissive: mt && b.emissiveMap.isVideoTexture === true && Xt.getTransfer(b.emissiveMap.colorSpace) === jt, premultipliedAlpha: b.premultipliedAlpha, doubleSided: b.side === an, flipSided: b.side === we, useDepthPacking: b.depthPacking >= 0, depthPacking: b.depthPacking || 0, index0AttributeName: b.index0AttributeName, extensionClipCullDistance: ft && b.extensions.clipCullDistance === true && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (ft && b.extensions.multiDraw === true || gt) && n.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: b.customProgramCacheKey() };
    return ee.vertexUv1s = l.has(1), ee.vertexUv2s = l.has(2), ee.vertexUv3s = l.has(3), l.clear(), ee;
  }
  function h(b) {
    const M = [];
    if (b.shaderID ? M.push(b.shaderID) : (M.push(b.customVertexShaderID), M.push(b.customFragmentShaderID)), b.defines !== void 0) for (const D in b.defines) M.push(D), M.push(b.defines[D]);
    return b.isRawShaderMaterial === false && (S(M, b), y(M, b), M.push(i.outputColorSpace)), M.push(b.customProgramCacheKey), M.join();
  }
  function S(b, M) {
    b.push(M.precision), b.push(M.outputColorSpace), b.push(M.envMapMode), b.push(M.envMapCubeUVHeight), b.push(M.mapUv), b.push(M.alphaMapUv), b.push(M.lightMapUv), b.push(M.aoMapUv), b.push(M.bumpMapUv), b.push(M.normalMapUv), b.push(M.displacementMapUv), b.push(M.emissiveMapUv), b.push(M.metalnessMapUv), b.push(M.roughnessMapUv), b.push(M.anisotropyMapUv), b.push(M.clearcoatMapUv), b.push(M.clearcoatNormalMapUv), b.push(M.clearcoatRoughnessMapUv), b.push(M.iridescenceMapUv), b.push(M.iridescenceThicknessMapUv), b.push(M.sheenColorMapUv), b.push(M.sheenRoughnessMapUv), b.push(M.specularMapUv), b.push(M.specularColorMapUv), b.push(M.specularIntensityMapUv), b.push(M.transmissionMapUv), b.push(M.thicknessMapUv), b.push(M.combine), b.push(M.fogExp2), b.push(M.sizeAttenuation), b.push(M.morphTargetsCount), b.push(M.morphAttributeCount), b.push(M.numDirLights), b.push(M.numPointLights), b.push(M.numSpotLights), b.push(M.numSpotLightMaps), b.push(M.numHemiLights), b.push(M.numRectAreaLights), b.push(M.numDirLightShadows), b.push(M.numPointLightShadows), b.push(M.numSpotLightShadows), b.push(M.numSpotLightShadowsWithMaps), b.push(M.numLightProbes), b.push(M.shadowMapType), b.push(M.toneMapping), b.push(M.numClippingPlanes), b.push(M.numClipIntersection), b.push(M.depthPacking);
  }
  function y(b, M) {
    o.disableAll(), M.supportsVertexTextures && o.enable(0), M.instancing && o.enable(1), M.instancingColor && o.enable(2), M.instancingMorph && o.enable(3), M.matcap && o.enable(4), M.envMap && o.enable(5), M.normalMapObjectSpace && o.enable(6), M.normalMapTangentSpace && o.enable(7), M.clearcoat && o.enable(8), M.iridescence && o.enable(9), M.alphaTest && o.enable(10), M.vertexColors && o.enable(11), M.vertexAlphas && o.enable(12), M.vertexUv1s && o.enable(13), M.vertexUv2s && o.enable(14), M.vertexUv3s && o.enable(15), M.vertexTangents && o.enable(16), M.anisotropy && o.enable(17), M.alphaHash && o.enable(18), M.batching && o.enable(19), M.dispersion && o.enable(20), M.batchingColor && o.enable(21), M.gradientMap && o.enable(22), b.push(o.mask), o.disableAll(), M.fog && o.enable(0), M.useFog && o.enable(1), M.flatShading && o.enable(2), M.logarithmicDepthBuffer && o.enable(3), M.reversedDepthBuffer && o.enable(4), M.skinning && o.enable(5), M.morphTargets && o.enable(6), M.morphNormals && o.enable(7), M.morphColors && o.enable(8), M.premultipliedAlpha && o.enable(9), M.shadowMapEnabled && o.enable(10), M.doubleSided && o.enable(11), M.flipSided && o.enable(12), M.useDepthPacking && o.enable(13), M.dithering && o.enable(14), M.transmission && o.enable(15), M.sheen && o.enable(16), M.opaque && o.enable(17), M.pointsUvs && o.enable(18), M.decodeVideoTexture && o.enable(19), M.decodeVideoTextureEmissive && o.enable(20), M.alphaToCoverage && o.enable(21), b.push(o.mask);
  }
  function A(b) {
    const M = _[b.type];
    let D;
    if (M) {
      const B = $e[M];
      D = fc.clone(B.uniforms);
    } else D = b.uniforms;
    return D;
  }
  function P(b, M) {
    let D;
    for (let B = 0, k = u.length; B < k; B++) {
      const q = u[B];
      if (q.cacheKey === M) {
        D = q, ++D.usedTimes;
        break;
      }
    }
    return D === void 0 && (D = new Yf(i, M, b, r), u.push(D)), D;
  }
  function T(b) {
    if (--b.usedTimes === 0) {
      const M = u.indexOf(b);
      u[M] = u[u.length - 1], u.pop(), b.destroy();
    }
  }
  function C(b) {
    c.remove(b);
  }
  function z() {
    c.dispose();
  }
  return { getParameters: p, getProgramCacheKey: h, getUniforms: A, acquireProgram: P, releaseProgram: T, releaseShaderCache: C, programs: u, dispose: z };
}
function Zf() {
  let i = /* @__PURE__ */ new WeakMap();
  function t(a) {
    return i.has(a);
  }
  function e(a) {
    let o = i.get(a);
    return o === void 0 && (o = {}, i.set(a, o)), o;
  }
  function n(a) {
    i.delete(a);
  }
  function s(a, o, c) {
    i.get(a)[o] = c;
  }
  function r() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return { has: t, get: e, remove: n, update: s, dispose: r };
}
function Jf(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.material.id !== t.material.id ? i.material.id - t.material.id : i.z !== t.z ? i.z - t.z : i.id - t.id;
}
function fo(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.z !== t.z ? t.z - i.z : i.id - t.id;
}
function po() {
  const i = [];
  let t = 0;
  const e = [], n = [], s = [];
  function r() {
    t = 0, e.length = 0, n.length = 0, s.length = 0;
  }
  function a(d, f, m, _, v, p) {
    let h = i[t];
    return h === void 0 ? (h = { id: d.id, object: d, geometry: f, material: m, groupOrder: _, renderOrder: d.renderOrder, z: v, group: p }, i[t] = h) : (h.id = d.id, h.object = d, h.geometry = f, h.material = m, h.groupOrder = _, h.renderOrder = d.renderOrder, h.z = v, h.group = p), t++, h;
  }
  function o(d, f, m, _, v, p) {
    const h = a(d, f, m, _, v, p);
    m.transmission > 0 ? n.push(h) : m.transparent === true ? s.push(h) : e.push(h);
  }
  function c(d, f, m, _, v, p) {
    const h = a(d, f, m, _, v, p);
    m.transmission > 0 ? n.unshift(h) : m.transparent === true ? s.unshift(h) : e.unshift(h);
  }
  function l(d, f) {
    e.length > 1 && e.sort(d || Jf), n.length > 1 && n.sort(f || fo), s.length > 1 && s.sort(f || fo);
  }
  function u() {
    for (let d = t, f = i.length; d < f; d++) {
      const m = i[d];
      if (m.id === null) break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return { opaque: e, transmissive: n, transparent: s, init: r, push: o, unshift: c, finish: u, sort: l };
}
function Qf() {
  let i = /* @__PURE__ */ new WeakMap();
  function t(n, s) {
    const r = i.get(n);
    let a;
    return r === void 0 ? (a = new po(), i.set(n, [a])) : s >= r.length ? (a = new po(), r.push(a)) : a = r[s], a;
  }
  function e() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: e };
}
function tp() {
  const i = {};
  return { get: function(t) {
    if (i[t.id] !== void 0) return i[t.id];
    let e;
    switch (t.type) {
      case "DirectionalLight":
        e = { direction: new N(), color: new Bt() };
        break;
      case "SpotLight":
        e = { position: new N(), direction: new N(), color: new Bt(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        e = { position: new N(), color: new Bt(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        e = { direction: new N(), skyColor: new Bt(), groundColor: new Bt() };
        break;
      case "RectAreaLight":
        e = { color: new Bt(), position: new N(), halfWidth: new N(), halfHeight: new N() };
        break;
    }
    return i[t.id] = e, e;
  } };
}
function ep() {
  const i = {};
  return { get: function(t) {
    if (i[t.id] !== void 0) return i[t.id];
    let e;
    switch (t.type) {
      case "DirectionalLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Nt() };
        break;
      case "SpotLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Nt() };
        break;
      case "PointLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Nt(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return i[t.id] = e, e;
  } };
}
let np = 0;
function ip(i, t) {
  return (t.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (i.map ? 1 : 0);
}
function sp(i) {
  const t = new tp(), e = ep(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let l = 0; l < 9; l++) n.probe.push(new N());
  const s = new N(), r = new ie(), a = new ie();
  function o(l) {
    let u = 0, d = 0, f = 0;
    for (let b = 0; b < 9; b++) n.probe[b].set(0, 0, 0);
    let m = 0, _ = 0, v = 0, p = 0, h = 0, S = 0, y = 0, A = 0, P = 0, T = 0, C = 0;
    l.sort(ip);
    for (let b = 0, M = l.length; b < M; b++) {
      const D = l[b], B = D.color, k = D.intensity, q = D.distance, W = D.shadow && D.shadow.map ? D.shadow.map.texture : null;
      if (D.isAmbientLight) u += B.r * k, d += B.g * k, f += B.b * k;
      else if (D.isLightProbe) {
        for (let $ = 0; $ < 9; $++) n.probe[$].addScaledVector(D.sh.coefficients[$], k);
        C++;
      } else if (D.isDirectionalLight) {
        const $ = t.get(D);
        if ($.color.copy(D.color).multiplyScalar(D.intensity), D.castShadow) {
          const J = D.shadow, G = e.get(D);
          G.shadowIntensity = J.intensity, G.shadowBias = J.bias, G.shadowNormalBias = J.normalBias, G.shadowRadius = J.radius, G.shadowMapSize = J.mapSize, n.directionalShadow[m] = G, n.directionalShadowMap[m] = W, n.directionalShadowMatrix[m] = D.shadow.matrix, S++;
        }
        n.directional[m] = $, m++;
      } else if (D.isSpotLight) {
        const $ = t.get(D);
        $.position.setFromMatrixPosition(D.matrixWorld), $.color.copy(B).multiplyScalar(k), $.distance = q, $.coneCos = Math.cos(D.angle), $.penumbraCos = Math.cos(D.angle * (1 - D.penumbra)), $.decay = D.decay, n.spot[v] = $;
        const J = D.shadow;
        if (D.map && (n.spotLightMap[P] = D.map, P++, J.updateMatrices(D), D.castShadow && T++), n.spotLightMatrix[v] = J.matrix, D.castShadow) {
          const G = e.get(D);
          G.shadowIntensity = J.intensity, G.shadowBias = J.bias, G.shadowNormalBias = J.normalBias, G.shadowRadius = J.radius, G.shadowMapSize = J.mapSize, n.spotShadow[v] = G, n.spotShadowMap[v] = W, A++;
        }
        v++;
      } else if (D.isRectAreaLight) {
        const $ = t.get(D);
        $.color.copy(B).multiplyScalar(k), $.halfWidth.set(D.width * 0.5, 0, 0), $.halfHeight.set(0, D.height * 0.5, 0), n.rectArea[p] = $, p++;
      } else if (D.isPointLight) {
        const $ = t.get(D);
        if ($.color.copy(D.color).multiplyScalar(D.intensity), $.distance = D.distance, $.decay = D.decay, D.castShadow) {
          const J = D.shadow, G = e.get(D);
          G.shadowIntensity = J.intensity, G.shadowBias = J.bias, G.shadowNormalBias = J.normalBias, G.shadowRadius = J.radius, G.shadowMapSize = J.mapSize, G.shadowCameraNear = J.camera.near, G.shadowCameraFar = J.camera.far, n.pointShadow[_] = G, n.pointShadowMap[_] = W, n.pointShadowMatrix[_] = D.shadow.matrix, y++;
        }
        n.point[_] = $, _++;
      } else if (D.isHemisphereLight) {
        const $ = t.get(D);
        $.skyColor.copy(D.color).multiplyScalar(k), $.groundColor.copy(D.groundColor).multiplyScalar(k), n.hemi[h] = $, h++;
      }
    }
    p > 0 && (i.has("OES_texture_float_linear") === true ? (n.rectAreaLTC1 = at.LTC_FLOAT_1, n.rectAreaLTC2 = at.LTC_FLOAT_2) : (n.rectAreaLTC1 = at.LTC_HALF_1, n.rectAreaLTC2 = at.LTC_HALF_2)), n.ambient[0] = u, n.ambient[1] = d, n.ambient[2] = f;
    const z = n.hash;
    (z.directionalLength !== m || z.pointLength !== _ || z.spotLength !== v || z.rectAreaLength !== p || z.hemiLength !== h || z.numDirectionalShadows !== S || z.numPointShadows !== y || z.numSpotShadows !== A || z.numSpotMaps !== P || z.numLightProbes !== C) && (n.directional.length = m, n.spot.length = v, n.rectArea.length = p, n.point.length = _, n.hemi.length = h, n.directionalShadow.length = S, n.directionalShadowMap.length = S, n.pointShadow.length = y, n.pointShadowMap.length = y, n.spotShadow.length = A, n.spotShadowMap.length = A, n.directionalShadowMatrix.length = S, n.pointShadowMatrix.length = y, n.spotLightMatrix.length = A + P - T, n.spotLightMap.length = P, n.numSpotLightShadowsWithMaps = T, n.numLightProbes = C, z.directionalLength = m, z.pointLength = _, z.spotLength = v, z.rectAreaLength = p, z.hemiLength = h, z.numDirectionalShadows = S, z.numPointShadows = y, z.numSpotShadows = A, z.numSpotMaps = P, z.numLightProbes = C, n.version = np++);
  }
  function c(l, u) {
    let d = 0, f = 0, m = 0, _ = 0, v = 0;
    const p = u.matrixWorldInverse;
    for (let h = 0, S = l.length; h < S; h++) {
      const y = l[h];
      if (y.isDirectionalLight) {
        const A = n.directional[d];
        A.direction.setFromMatrixPosition(y.matrixWorld), s.setFromMatrixPosition(y.target.matrixWorld), A.direction.sub(s), A.direction.transformDirection(p), d++;
      } else if (y.isSpotLight) {
        const A = n.spot[m];
        A.position.setFromMatrixPosition(y.matrixWorld), A.position.applyMatrix4(p), A.direction.setFromMatrixPosition(y.matrixWorld), s.setFromMatrixPosition(y.target.matrixWorld), A.direction.sub(s), A.direction.transformDirection(p), m++;
      } else if (y.isRectAreaLight) {
        const A = n.rectArea[_];
        A.position.setFromMatrixPosition(y.matrixWorld), A.position.applyMatrix4(p), a.identity(), r.copy(y.matrixWorld), r.premultiply(p), a.extractRotation(r), A.halfWidth.set(y.width * 0.5, 0, 0), A.halfHeight.set(0, y.height * 0.5, 0), A.halfWidth.applyMatrix4(a), A.halfHeight.applyMatrix4(a), _++;
      } else if (y.isPointLight) {
        const A = n.point[f];
        A.position.setFromMatrixPosition(y.matrixWorld), A.position.applyMatrix4(p), f++;
      } else if (y.isHemisphereLight) {
        const A = n.hemi[v];
        A.direction.setFromMatrixPosition(y.matrixWorld), A.direction.transformDirection(p), v++;
      }
    }
  }
  return { setup: o, setupView: c, state: n };
}
function mo(i) {
  const t = new sp(i), e = [], n = [];
  function s(u) {
    l.camera = u, e.length = 0, n.length = 0;
  }
  function r(u) {
    e.push(u);
  }
  function a(u) {
    n.push(u);
  }
  function o() {
    t.setup(e);
  }
  function c(u) {
    t.setupView(e, u);
  }
  const l = { lightsArray: e, shadowsArray: n, camera: null, lights: t, transmissionRenderTarget: {} };
  return { init: s, state: l, setupLights: o, setupLightsView: c, pushLight: r, pushShadow: a };
}
function rp(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(s, r = 0) {
    const a = t.get(s);
    let o;
    return a === void 0 ? (o = new mo(i), t.set(s, [o])) : r >= a.length ? (o = new mo(i), a.push(o)) : o = a[r], o;
  }
  function n() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: n };
}
const ap = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, op = `uniform sampler2D shadow_pass;
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
function lp(i, t, e) {
  let n = new zo();
  const s = new Nt(), r = new Nt(), a = new he(), o = new Rc({ depthPacking: Nl }), c = new Cc(), l = {}, u = e.maxTextureSize, d = { [yn]: we, [we]: yn, [an]: an }, f = new fn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new Nt() }, radius: { value: 4 } }, vertexShader: ap, fragmentShader: op }), m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const _ = new Ie();
  _.setAttribute("position", new Ve(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const v = new Ze(_, f), p = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = vo;
  let h = this.type;
  this.render = function(T, C, z) {
    if (p.enabled === false || p.autoUpdate === false && p.needsUpdate === false || T.length === 0) return;
    const b = i.getRenderTarget(), M = i.getActiveCubeFace(), D = i.getActiveMipmapLevel(), B = i.state;
    B.setBlending(cn), B.buffers.depth.getReversed() === true ? B.buffers.color.setClear(0, 0, 0, 0) : B.buffers.color.setClear(1, 1, 1, 1), B.buffers.depth.setTest(true), B.setScissorTest(false);
    const k = h !== rn && this.type === rn, q = h === rn && this.type !== rn;
    for (let W = 0, $ = T.length; W < $; W++) {
      const J = T[W], G = J.shadow;
      if (G === void 0) {
        Ct("WebGLShadowMap:", J, "has no shadow.");
        continue;
      }
      if (G.autoUpdate === false && G.needsUpdate === false) continue;
      s.copy(G.mapSize);
      const nt = G.getFrameExtents();
      if (s.multiply(nt), r.copy(G.mapSize), (s.x > u || s.y > u) && (s.x > u && (r.x = Math.floor(u / nt.x), s.x = r.x * nt.x, G.mapSize.x = r.x), s.y > u && (r.y = Math.floor(u / nt.y), s.y = r.y * nt.y, G.mapSize.y = r.y)), G.map === null || k === true || q === true) {
        const bt = this.type !== rn ? { minFilter: Ue, magFilter: Ue } : {};
        G.map !== null && G.map.dispose(), G.map = new Bn(s.x, s.y, bt), G.map.texture.name = J.name + ".shadowMap", G.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(G.map), i.clear();
      const rt = G.getViewportCount();
      for (let bt = 0; bt < rt; bt++) {
        const Ht = G.getViewport(bt);
        a.set(r.x * Ht.x, r.y * Ht.y, r.x * Ht.z, r.y * Ht.w), B.viewport(a), G.updateMatrices(J, bt), n = G.getFrustum(), A(C, z, G.camera, J, this.type);
      }
      G.isPointLightShadow !== true && this.type === rn && S(G, z), G.needsUpdate = false;
    }
    h = this.type, p.needsUpdate = false, i.setRenderTarget(b, M, D);
  };
  function S(T, C) {
    const z = t.update(v);
    f.defines.VSM_SAMPLES !== T.blurSamples && (f.defines.VSM_SAMPLES = T.blurSamples, m.defines.VSM_SAMPLES = T.blurSamples, f.needsUpdate = true, m.needsUpdate = true), T.mapPass === null && (T.mapPass = new Bn(s.x, s.y)), f.uniforms.shadow_pass.value = T.map.texture, f.uniforms.resolution.value = T.mapSize, f.uniforms.radius.value = T.radius, i.setRenderTarget(T.mapPass), i.clear(), i.renderBufferDirect(C, null, z, f, v, null), m.uniforms.shadow_pass.value = T.mapPass.texture, m.uniforms.resolution.value = T.mapSize, m.uniforms.radius.value = T.radius, i.setRenderTarget(T.map), i.clear(), i.renderBufferDirect(C, null, z, m, v, null);
  }
  function y(T, C, z, b) {
    let M = null;
    const D = z.isPointLight === true ? T.customDistanceMaterial : T.customDepthMaterial;
    if (D !== void 0) M = D;
    else if (M = z.isPointLight === true ? c : o, i.localClippingEnabled && C.clipShadows === true && Array.isArray(C.clippingPlanes) && C.clippingPlanes.length !== 0 || C.displacementMap && C.displacementScale !== 0 || C.alphaMap && C.alphaTest > 0 || C.map && C.alphaTest > 0 || C.alphaToCoverage === true) {
      const B = M.uuid, k = C.uuid;
      let q = l[B];
      q === void 0 && (q = {}, l[B] = q);
      let W = q[k];
      W === void 0 && (W = M.clone(), q[k] = W, C.addEventListener("dispose", P)), M = W;
    }
    if (M.visible = C.visible, M.wireframe = C.wireframe, b === rn ? M.side = C.shadowSide !== null ? C.shadowSide : C.side : M.side = C.shadowSide !== null ? C.shadowSide : d[C.side], M.alphaMap = C.alphaMap, M.alphaTest = C.alphaToCoverage === true ? 0.5 : C.alphaTest, M.map = C.map, M.clipShadows = C.clipShadows, M.clippingPlanes = C.clippingPlanes, M.clipIntersection = C.clipIntersection, M.displacementMap = C.displacementMap, M.displacementScale = C.displacementScale, M.displacementBias = C.displacementBias, M.wireframeLinewidth = C.wireframeLinewidth, M.linewidth = C.linewidth, z.isPointLight === true && M.isMeshDistanceMaterial === true) {
      const B = i.properties.get(M);
      B.light = z;
    }
    return M;
  }
  function A(T, C, z, b, M) {
    if (T.visible === false) return;
    if (T.layers.test(C.layers) && (T.isMesh || T.isLine || T.isPoints) && (T.castShadow || T.receiveShadow && M === rn) && (!T.frustumCulled || n.intersectsObject(T))) {
      T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, T.matrixWorld);
      const k = t.update(T), q = T.material;
      if (Array.isArray(q)) {
        const W = k.groups;
        for (let $ = 0, J = W.length; $ < J; $++) {
          const G = W[$], nt = q[G.materialIndex];
          if (nt && nt.visible) {
            const rt = y(T, nt, b, M);
            T.onBeforeShadow(i, T, C, z, k, rt, G), i.renderBufferDirect(z, null, k, rt, T, G), T.onAfterShadow(i, T, C, z, k, rt, G);
          }
        }
      } else if (q.visible) {
        const W = y(T, q, b, M);
        T.onBeforeShadow(i, T, C, z, k, W, null), i.renderBufferDirect(z, null, k, W, T, null), T.onAfterShadow(i, T, C, z, k, W, null);
      }
    }
    const B = T.children;
    for (let k = 0, q = B.length; k < q; k++) A(B[k], C, z, b, M);
  }
  function P(T) {
    T.target.removeEventListener("dispose", P);
    for (const z in l) {
      const b = l[z], M = T.target.uuid;
      M in b && (b[M].dispose(), delete b[M]);
    }
  }
}
const cp = { [ar]: or, [lr]: ur, [cr]: dr, [ai]: hr, [or]: ar, [ur]: lr, [dr]: cr, [hr]: ai };
function hp(i, t) {
  function e() {
    let R = false;
    const lt = new he();
    let it = null;
    const st = new he(0, 0, 0, 0);
    return { setMask: function(Q) {
      it !== Q && !R && (i.colorMask(Q, Q, Q, Q), it = Q);
    }, setLocked: function(Q) {
      R = Q;
    }, setClear: function(Q, Y, ft, Pt, ee) {
      ee === true && (Q *= Pt, Y *= Pt, ft *= Pt), lt.set(Q, Y, ft, Pt), st.equals(lt) === false && (i.clearColor(Q, Y, ft, Pt), st.copy(lt));
    }, reset: function() {
      R = false, it = null, st.set(-1, 0, 0, 0);
    } };
  }
  function n() {
    let R = false, lt = false, it = null, st = null, Q = null;
    return { setReversed: function(Y) {
      if (lt !== Y) {
        const ft = t.get("EXT_clip_control");
        Y ? ft.clipControlEXT(ft.LOWER_LEFT_EXT, ft.ZERO_TO_ONE_EXT) : ft.clipControlEXT(ft.LOWER_LEFT_EXT, ft.NEGATIVE_ONE_TO_ONE_EXT), lt = Y;
        const Pt = Q;
        Q = null, this.setClear(Pt);
      }
    }, getReversed: function() {
      return lt;
    }, setTest: function(Y) {
      Y ? K(i.DEPTH_TEST) : dt(i.DEPTH_TEST);
    }, setMask: function(Y) {
      it !== Y && !R && (i.depthMask(Y), it = Y);
    }, setFunc: function(Y) {
      if (lt && (Y = cp[Y]), st !== Y) {
        switch (Y) {
          case ar:
            i.depthFunc(i.NEVER);
            break;
          case or:
            i.depthFunc(i.ALWAYS);
            break;
          case lr:
            i.depthFunc(i.LESS);
            break;
          case ai:
            i.depthFunc(i.LEQUAL);
            break;
          case cr:
            i.depthFunc(i.EQUAL);
            break;
          case hr:
            i.depthFunc(i.GEQUAL);
            break;
          case ur:
            i.depthFunc(i.GREATER);
            break;
          case dr:
            i.depthFunc(i.NOTEQUAL);
            break;
          default:
            i.depthFunc(i.LEQUAL);
        }
        st = Y;
      }
    }, setLocked: function(Y) {
      R = Y;
    }, setClear: function(Y) {
      Q !== Y && (lt && (Y = 1 - Y), i.clearDepth(Y), Q = Y);
    }, reset: function() {
      R = false, it = null, st = null, Q = null, lt = false;
    } };
  }
  function s() {
    let R = false, lt = null, it = null, st = null, Q = null, Y = null, ft = null, Pt = null, ee = null;
    return { setTest: function(qt) {
      R || (qt ? K(i.STENCIL_TEST) : dt(i.STENCIL_TEST));
    }, setMask: function(qt) {
      lt !== qt && !R && (i.stencilMask(qt), lt = qt);
    }, setFunc: function(qt, qe, ke) {
      (it !== qt || st !== qe || Q !== ke) && (i.stencilFunc(qt, qe, ke), it = qt, st = qe, Q = ke);
    }, setOp: function(qt, qe, ke) {
      (Y !== qt || ft !== qe || Pt !== ke) && (i.stencilOp(qt, qe, ke), Y = qt, ft = qe, Pt = ke);
    }, setLocked: function(qt) {
      R = qt;
    }, setClear: function(qt) {
      ee !== qt && (i.clearStencil(qt), ee = qt);
    }, reset: function() {
      R = false, lt = null, it = null, st = null, Q = null, Y = null, ft = null, Pt = null, ee = null;
    } };
  }
  const r = new e(), a = new n(), o = new s(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let u = {}, d = {}, f = /* @__PURE__ */ new WeakMap(), m = [], _ = null, v = false, p = null, h = null, S = null, y = null, A = null, P = null, T = null, C = new Bt(0, 0, 0), z = 0, b = false, M = null, D = null, B = null, k = null, q = null;
  const W = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let $ = false, J = 0;
  const G = i.getParameter(i.VERSION);
  G.indexOf("WebGL") !== -1 ? (J = parseFloat(/^WebGL (\d)/.exec(G)[1]), $ = J >= 1) : G.indexOf("OpenGL ES") !== -1 && (J = parseFloat(/^OpenGL ES (\d)/.exec(G)[1]), $ = J >= 2);
  let nt = null, rt = {};
  const bt = i.getParameter(i.SCISSOR_BOX), Ht = i.getParameter(i.VIEWPORT), Yt = new he().fromArray(bt), Jt = new he().fromArray(Ht);
  function Qt(R, lt, it, st) {
    const Q = new Uint8Array(4), Y = i.createTexture();
    i.bindTexture(R, Y), i.texParameteri(R, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(R, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let ft = 0; ft < it; ft++) R === i.TEXTURE_3D || R === i.TEXTURE_2D_ARRAY ? i.texImage3D(lt, 0, i.RGBA, 1, 1, st, 0, i.RGBA, i.UNSIGNED_BYTE, Q) : i.texImage2D(lt + ft, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, Q);
    return Y;
  }
  const X = {};
  X[i.TEXTURE_2D] = Qt(i.TEXTURE_2D, i.TEXTURE_2D, 1), X[i.TEXTURE_CUBE_MAP] = Qt(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), X[i.TEXTURE_2D_ARRAY] = Qt(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), X[i.TEXTURE_3D] = Qt(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), K(i.DEPTH_TEST), a.setFunc(ai), Vt(false), kt(fa), K(i.CULL_FACE), ne(cn);
  function K(R) {
    u[R] !== true && (i.enable(R), u[R] = true);
  }
  function dt(R) {
    u[R] !== false && (i.disable(R), u[R] = false);
  }
  function Lt(R, lt) {
    return d[R] !== lt ? (i.bindFramebuffer(R, lt), d[R] = lt, R === i.DRAW_FRAMEBUFFER && (d[i.FRAMEBUFFER] = lt), R === i.FRAMEBUFFER && (d[i.DRAW_FRAMEBUFFER] = lt), true) : false;
  }
  function gt(R, lt) {
    let it = m, st = false;
    if (R) {
      it = f.get(lt), it === void 0 && (it = [], f.set(lt, it));
      const Q = R.textures;
      if (it.length !== Q.length || it[0] !== i.COLOR_ATTACHMENT0) {
        for (let Y = 0, ft = Q.length; Y < ft; Y++) it[Y] = i.COLOR_ATTACHMENT0 + Y;
        it.length = Q.length, st = true;
      }
    } else it[0] !== i.BACK && (it[0] = i.BACK, st = true);
    st && i.drawBuffers(it);
  }
  function zt(R) {
    return _ !== R ? (i.useProgram(R), _ = R, true) : false;
  }
  const xe = { [Un]: i.FUNC_ADD, [ol]: i.FUNC_SUBTRACT, [ll]: i.FUNC_REVERSE_SUBTRACT };
  xe[cl] = i.MIN, xe[hl] = i.MAX;
  const Ft = { [ul]: i.ZERO, [dl]: i.ONE, [fl]: i.SRC_COLOR, [sr]: i.SRC_ALPHA, [vl]: i.SRC_ALPHA_SATURATE, [_l]: i.DST_COLOR, [ml]: i.DST_ALPHA, [pl]: i.ONE_MINUS_SRC_COLOR, [rr]: i.ONE_MINUS_SRC_ALPHA, [gl]: i.ONE_MINUS_DST_COLOR, [xl]: i.ONE_MINUS_DST_ALPHA, [Ml]: i.CONSTANT_COLOR, [bl]: i.ONE_MINUS_CONSTANT_COLOR, [Sl]: i.CONSTANT_ALPHA, [El]: i.ONE_MINUS_CONSTANT_ALPHA };
  function ne(R, lt, it, st, Q, Y, ft, Pt, ee, qt) {
    if (R === cn) {
      v === true && (dt(i.BLEND), v = false);
      return;
    }
    if (v === false && (K(i.BLEND), v = true), R !== al) {
      if (R !== p || qt !== b) {
        if ((h !== Un || A !== Un) && (i.blendEquation(i.FUNC_ADD), h = Un, A = Un), qt) switch (R) {
          case si:
            i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
            break;
          case pa:
            i.blendFunc(i.ONE, i.ONE);
            break;
          case ma:
            i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
            break;
          case xa:
            i.blendFuncSeparate(i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA, i.ZERO, i.ONE);
            break;
          default:
            ce("WebGLState: Invalid blending: ", R);
            break;
        }
        else switch (R) {
          case si:
            i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
            break;
          case pa:
            i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
            break;
          case ma:
            ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
            break;
          case xa:
            ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
            break;
          default:
            ce("WebGLState: Invalid blending: ", R);
            break;
        }
        S = null, y = null, P = null, T = null, C.set(0, 0, 0), z = 0, p = R, b = qt;
      }
      return;
    }
    Q = Q || lt, Y = Y || it, ft = ft || st, (lt !== h || Q !== A) && (i.blendEquationSeparate(xe[lt], xe[Q]), h = lt, A = Q), (it !== S || st !== y || Y !== P || ft !== T) && (i.blendFuncSeparate(Ft[it], Ft[st], Ft[Y], Ft[ft]), S = it, y = st, P = Y, T = ft), (Pt.equals(C) === false || ee !== z) && (i.blendColor(Pt.r, Pt.g, Pt.b, ee), C.copy(Pt), z = ee), p = R, b = false;
  }
  function w(R, lt) {
    R.side === an ? dt(i.CULL_FACE) : K(i.CULL_FACE);
    let it = R.side === we;
    lt && (it = !it), Vt(it), R.blending === si && R.transparent === false ? ne(cn) : ne(R.blending, R.blendEquation, R.blendSrc, R.blendDst, R.blendEquationAlpha, R.blendSrcAlpha, R.blendDstAlpha, R.blendColor, R.blendAlpha, R.premultipliedAlpha), a.setFunc(R.depthFunc), a.setTest(R.depthTest), a.setMask(R.depthWrite), r.setMask(R.colorWrite);
    const st = R.stencilWrite;
    o.setTest(st), st && (o.setMask(R.stencilWriteMask), o.setFunc(R.stencilFunc, R.stencilRef, R.stencilFuncMask), o.setOp(R.stencilFail, R.stencilZFail, R.stencilZPass)), mt(R.polygonOffset, R.polygonOffsetFactor, R.polygonOffsetUnits), R.alphaToCoverage === true ? K(i.SAMPLE_ALPHA_TO_COVERAGE) : dt(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Vt(R) {
    M !== R && (R ? i.frontFace(i.CW) : i.frontFace(i.CCW), M = R);
  }
  function kt(R) {
    R !== il ? (K(i.CULL_FACE), R !== D && (R === fa ? i.cullFace(i.BACK) : R === sl ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : dt(i.CULL_FACE), D = R;
  }
  function te(R) {
    R !== B && ($ && i.lineWidth(R), B = R);
  }
  function mt(R, lt, it) {
    R ? (K(i.POLYGON_OFFSET_FILL), (k !== lt || q !== it) && (i.polygonOffset(lt, it), k = lt, q = it)) : dt(i.POLYGON_OFFSET_FILL);
  }
  function se(R) {
    R ? K(i.SCISSOR_TEST) : dt(i.SCISSOR_TEST);
  }
  function Mt(R) {
    R === void 0 && (R = i.TEXTURE0 + W - 1), nt !== R && (i.activeTexture(R), nt = R);
  }
  function Dt(R, lt, it) {
    it === void 0 && (nt === null ? it = i.TEXTURE0 + W - 1 : it = nt);
    let st = rt[it];
    st === void 0 && (st = { type: void 0, texture: void 0 }, rt[it] = st), (st.type !== R || st.texture !== lt) && (nt !== it && (i.activeTexture(it), nt = it), i.bindTexture(R, lt || X[R]), st.type = R, st.texture = lt);
  }
  function E() {
    const R = rt[nt];
    R !== void 0 && R.type !== void 0 && (i.bindTexture(R.type, null), R.type = void 0, R.texture = void 0);
  }
  function x() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (R) {
      R("WebGLState:", R);
    }
  }
  function I() {
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
  function j() {
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
  function _t() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (R) {
      R("WebGLState:", R);
    }
  }
  function ot() {
    try {
      i.texStorage2D(...arguments);
    } catch (R) {
      R("WebGLState:", R);
    }
  }
  function St() {
    try {
      i.texStorage3D(...arguments);
    } catch (R) {
      R("WebGLState:", R);
    }
  }
  function xt() {
    try {
      i.texImage2D(...arguments);
    } catch (R) {
      R("WebGLState:", R);
    }
  }
  function Z() {
    try {
      i.texImage3D(...arguments);
    } catch (R) {
      R("WebGLState:", R);
    }
  }
  function et(R) {
    Yt.equals(R) === false && (i.scissor(R.x, R.y, R.z, R.w), Yt.copy(R));
  }
  function At(R) {
    Jt.equals(R) === false && (i.viewport(R.x, R.y, R.z, R.w), Jt.copy(R));
  }
  function yt(R, lt) {
    let it = l.get(lt);
    it === void 0 && (it = /* @__PURE__ */ new WeakMap(), l.set(lt, it));
    let st = it.get(R);
    st === void 0 && (st = i.getUniformBlockIndex(lt, R.name), it.set(R, st));
  }
  function ht(R, lt) {
    const st = l.get(lt).get(R);
    c.get(lt) !== st && (i.uniformBlockBinding(lt, st, R.__bindingPointIndex), c.set(lt, st));
  }
  function Rt() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(true, true, true, true), i.clearColor(0, 0, 0, 0), i.depthMask(true), i.depthFunc(i.LESS), a.setReversed(false), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), u = {}, nt = null, rt = {}, d = {}, f = /* @__PURE__ */ new WeakMap(), m = [], _ = null, v = false, p = null, h = null, S = null, y = null, A = null, P = null, T = null, C = new Bt(0, 0, 0), z = 0, b = false, M = null, D = null, B = null, k = null, q = null, Yt.set(0, 0, i.canvas.width, i.canvas.height), Jt.set(0, 0, i.canvas.width, i.canvas.height), r.reset(), a.reset(), o.reset();
  }
  return { buffers: { color: r, depth: a, stencil: o }, enable: K, disable: dt, bindFramebuffer: Lt, drawBuffers: gt, useProgram: zt, setBlending: ne, setMaterial: w, setFlipSided: Vt, setCullFace: kt, setLineWidth: te, setPolygonOffset: mt, setScissorTest: se, activeTexture: Mt, bindTexture: Dt, unbindTexture: E, compressedTexImage2D: x, compressedTexImage3D: I, texImage2D: xt, texImage3D: Z, updateUBOMapping: yt, uniformBlockBinding: ht, texStorage2D: ot, texStorage3D: St, texSubImage2D: H, texSubImage3D: j, compressedTexSubImage2D: V, compressedTexSubImage3D: _t, scissor: et, viewport: At, reset: Rt };
}
function up(i, t, e, n, s, r, a) {
  const o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), l = new Nt(), u = /* @__PURE__ */ new WeakMap();
  let d;
  const f = /* @__PURE__ */ new WeakMap();
  let m = false;
  try {
    m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function _(E, x) {
    return m ? new OffscreenCanvas(E, x) : ps("canvas");
  }
  function v(E, x, I) {
    let H = 1;
    const j = Dt(E);
    if ((j.width > I || j.height > I) && (H = I / Math.max(j.width, j.height)), H < 1) if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap || typeof VideoFrame < "u" && E instanceof VideoFrame) {
      const V = Math.floor(H * j.width), _t = Math.floor(H * j.height);
      d === void 0 && (d = _(V, _t));
      const ot = x ? _(V, _t) : d;
      return ot.width = V, ot.height = _t, ot.getContext("2d").drawImage(E, 0, 0, V, _t), Ct("WebGLRenderer: Texture has been resized from (" + j.width + "x" + j.height + ") to (" + V + "x" + _t + ")."), ot;
    } else return "data" in E && Ct("WebGLRenderer: Image in DataTexture is too big (" + j.width + "x" + j.height + ")."), E;
    return E;
  }
  function p(E) {
    return E.generateMipmaps;
  }
  function h(E) {
    i.generateMipmap(E);
  }
  function S(E) {
    return E.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : E.isWebGL3DRenderTarget ? i.TEXTURE_3D : E.isWebGLArrayRenderTarget || E.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function y(E, x, I, H, j = false) {
    if (E !== null) {
      if (i[E] !== void 0) return i[E];
      Ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let V = x;
    if (x === i.RED && (I === i.FLOAT && (V = i.R32F), I === i.HALF_FLOAT && (V = i.R16F), I === i.UNSIGNED_BYTE && (V = i.R8)), x === i.RED_INTEGER && (I === i.UNSIGNED_BYTE && (V = i.R8UI), I === i.UNSIGNED_SHORT && (V = i.R16UI), I === i.UNSIGNED_INT && (V = i.R32UI), I === i.BYTE && (V = i.R8I), I === i.SHORT && (V = i.R16I), I === i.INT && (V = i.R32I)), x === i.RG && (I === i.FLOAT && (V = i.RG32F), I === i.HALF_FLOAT && (V = i.RG16F), I === i.UNSIGNED_BYTE && (V = i.RG8)), x === i.RG_INTEGER && (I === i.UNSIGNED_BYTE && (V = i.RG8UI), I === i.UNSIGNED_SHORT && (V = i.RG16UI), I === i.UNSIGNED_INT && (V = i.RG32UI), I === i.BYTE && (V = i.RG8I), I === i.SHORT && (V = i.RG16I), I === i.INT && (V = i.RG32I)), x === i.RGB_INTEGER && (I === i.UNSIGNED_BYTE && (V = i.RGB8UI), I === i.UNSIGNED_SHORT && (V = i.RGB16UI), I === i.UNSIGNED_INT && (V = i.RGB32UI), I === i.BYTE && (V = i.RGB8I), I === i.SHORT && (V = i.RGB16I), I === i.INT && (V = i.RGB32I)), x === i.RGBA_INTEGER && (I === i.UNSIGNED_BYTE && (V = i.RGBA8UI), I === i.UNSIGNED_SHORT && (V = i.RGBA16UI), I === i.UNSIGNED_INT && (V = i.RGBA32UI), I === i.BYTE && (V = i.RGBA8I), I === i.SHORT && (V = i.RGBA16I), I === i.INT && (V = i.RGBA32I)), x === i.RGB && (I === i.UNSIGNED_INT_5_9_9_9_REV && (V = i.RGB9_E5), I === i.UNSIGNED_INT_10F_11F_11F_REV && (V = i.R11F_G11F_B10F)), x === i.RGBA) {
      const _t = j ? ds : Xt.getTransfer(H);
      I === i.FLOAT && (V = i.RGBA32F), I === i.HALF_FLOAT && (V = i.RGBA16F), I === i.UNSIGNED_BYTE && (V = _t === jt ? i.SRGB8_ALPHA8 : i.RGBA8), I === i.UNSIGNED_SHORT_4_4_4_4 && (V = i.RGBA4), I === i.UNSIGNED_SHORT_5_5_5_1 && (V = i.RGB5_A1);
    }
    return (V === i.R16F || V === i.R32F || V === i.RG16F || V === i.RG32F || V === i.RGBA16F || V === i.RGBA32F) && t.get("EXT_color_buffer_float"), V;
  }
  function A(E, x) {
    let I;
    return E ? x === null || x === Fn || x === yi ? I = i.DEPTH24_STENCIL8 : x === ln ? I = i.DEPTH32F_STENCIL8 : x === Ei && (I = i.DEPTH24_STENCIL8, Ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : x === null || x === Fn || x === yi ? I = i.DEPTH_COMPONENT24 : x === ln ? I = i.DEPTH_COMPONENT32F : x === Ei && (I = i.DEPTH_COMPONENT16), I;
  }
  function P(E, x) {
    return p(E) === true || E.isFramebufferTexture && E.minFilter !== Ue && E.minFilter !== ze ? Math.log2(Math.max(x.width, x.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? x.mipmaps.length : 1;
  }
  function T(E) {
    const x = E.target;
    x.removeEventListener("dispose", T), z(x), x.isVideoTexture && u.delete(x);
  }
  function C(E) {
    const x = E.target;
    x.removeEventListener("dispose", C), M(x);
  }
  function z(E) {
    const x = n.get(E);
    if (x.__webglInit === void 0) return;
    const I = E.source, H = f.get(I);
    if (H) {
      const j = H[x.__cacheKey];
      j.usedTimes--, j.usedTimes === 0 && b(E), Object.keys(H).length === 0 && f.delete(I);
    }
    n.remove(E);
  }
  function b(E) {
    const x = n.get(E);
    i.deleteTexture(x.__webglTexture);
    const I = E.source, H = f.get(I);
    delete H[x.__cacheKey], a.memory.textures--;
  }
  function M(E) {
    const x = n.get(E);
    if (E.depthTexture && (E.depthTexture.dispose(), n.remove(E.depthTexture)), E.isWebGLCubeRenderTarget) for (let H = 0; H < 6; H++) {
      if (Array.isArray(x.__webglFramebuffer[H])) for (let j = 0; j < x.__webglFramebuffer[H].length; j++) i.deleteFramebuffer(x.__webglFramebuffer[H][j]);
      else i.deleteFramebuffer(x.__webglFramebuffer[H]);
      x.__webglDepthbuffer && i.deleteRenderbuffer(x.__webglDepthbuffer[H]);
    }
    else {
      if (Array.isArray(x.__webglFramebuffer)) for (let H = 0; H < x.__webglFramebuffer.length; H++) i.deleteFramebuffer(x.__webglFramebuffer[H]);
      else i.deleteFramebuffer(x.__webglFramebuffer);
      if (x.__webglDepthbuffer && i.deleteRenderbuffer(x.__webglDepthbuffer), x.__webglMultisampledFramebuffer && i.deleteFramebuffer(x.__webglMultisampledFramebuffer), x.__webglColorRenderbuffer) for (let H = 0; H < x.__webglColorRenderbuffer.length; H++) x.__webglColorRenderbuffer[H] && i.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);
      x.__webglDepthRenderbuffer && i.deleteRenderbuffer(x.__webglDepthRenderbuffer);
    }
    const I = E.textures;
    for (let H = 0, j = I.length; H < j; H++) {
      const V = n.get(I[H]);
      V.__webglTexture && (i.deleteTexture(V.__webglTexture), a.memory.textures--), n.remove(I[H]);
    }
    n.remove(E);
  }
  let D = 0;
  function B() {
    D = 0;
  }
  function k() {
    const E = D;
    return E >= s.maxTextures && Ct("WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + s.maxTextures), D += 1, E;
  }
  function q(E) {
    const x = [];
    return x.push(E.wrapS), x.push(E.wrapT), x.push(E.wrapR || 0), x.push(E.magFilter), x.push(E.minFilter), x.push(E.anisotropy), x.push(E.internalFormat), x.push(E.format), x.push(E.type), x.push(E.generateMipmaps), x.push(E.premultiplyAlpha), x.push(E.flipY), x.push(E.unpackAlignment), x.push(E.colorSpace), x.join();
  }
  function W(E, x) {
    const I = n.get(E);
    if (E.isVideoTexture && se(E), E.isRenderTargetTexture === false && E.isExternalTexture !== true && E.version > 0 && I.__version !== E.version) {
      const H = E.image;
      if (H === null) Ct("WebGLRenderer: Texture marked for update but no image data found.");
      else if (H.complete === false) Ct("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        X(I, E, x);
        return;
      }
    } else E.isExternalTexture && (I.__webglTexture = E.sourceTexture ? E.sourceTexture : null);
    e.bindTexture(i.TEXTURE_2D, I.__webglTexture, i.TEXTURE0 + x);
  }
  function $(E, x) {
    const I = n.get(E);
    if (E.isRenderTargetTexture === false && E.version > 0 && I.__version !== E.version) {
      X(I, E, x);
      return;
    } else E.isExternalTexture && (I.__webglTexture = E.sourceTexture ? E.sourceTexture : null);
    e.bindTexture(i.TEXTURE_2D_ARRAY, I.__webglTexture, i.TEXTURE0 + x);
  }
  function J(E, x) {
    const I = n.get(E);
    if (E.isRenderTargetTexture === false && E.version > 0 && I.__version !== E.version) {
      X(I, E, x);
      return;
    }
    e.bindTexture(i.TEXTURE_3D, I.__webglTexture, i.TEXTURE0 + x);
  }
  function G(E, x) {
    const I = n.get(E);
    if (E.version > 0 && I.__version !== E.version) {
      K(I, E, x);
      return;
    }
    e.bindTexture(i.TEXTURE_CUBE_MAP, I.__webglTexture, i.TEXTURE0 + x);
  }
  const nt = { [mr]: i.REPEAT, [on]: i.CLAMP_TO_EDGE, [xr]: i.MIRRORED_REPEAT }, rt = { [Ue]: i.NEAREST, [Ul]: i.NEAREST_MIPMAP_NEAREST, [Ni]: i.NEAREST_MIPMAP_LINEAR, [ze]: i.LINEAR, [As]: i.LINEAR_MIPMAP_NEAREST, [Nn]: i.LINEAR_MIPMAP_LINEAR }, bt = { [Bl]: i.NEVER, [Wl]: i.ALWAYS, [zl]: i.LESS, [Co]: i.LEQUAL, [Vl]: i.EQUAL, [Hl]: i.GEQUAL, [kl]: i.GREATER, [Gl]: i.NOTEQUAL };
  function Ht(E, x) {
    if (x.type === ln && t.has("OES_texture_float_linear") === false && (x.magFilter === ze || x.magFilter === As || x.magFilter === Ni || x.magFilter === Nn || x.minFilter === ze || x.minFilter === As || x.minFilter === Ni || x.minFilter === Nn) && Ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(E, i.TEXTURE_WRAP_S, nt[x.wrapS]), i.texParameteri(E, i.TEXTURE_WRAP_T, nt[x.wrapT]), (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) && i.texParameteri(E, i.TEXTURE_WRAP_R, nt[x.wrapR]), i.texParameteri(E, i.TEXTURE_MAG_FILTER, rt[x.magFilter]), i.texParameteri(E, i.TEXTURE_MIN_FILTER, rt[x.minFilter]), x.compareFunction && (i.texParameteri(E, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(E, i.TEXTURE_COMPARE_FUNC, bt[x.compareFunction])), t.has("EXT_texture_filter_anisotropic") === true) {
      if (x.magFilter === Ue || x.minFilter !== Ni && x.minFilter !== Nn || x.type === ln && t.has("OES_texture_float_linear") === false) return;
      if (x.anisotropy > 1 || n.get(x).__currentAnisotropy) {
        const I = t.get("EXT_texture_filter_anisotropic");
        i.texParameterf(E, I.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(x.anisotropy, s.getMaxAnisotropy())), n.get(x).__currentAnisotropy = x.anisotropy;
      }
    }
  }
  function Yt(E, x) {
    let I = false;
    E.__webglInit === void 0 && (E.__webglInit = true, x.addEventListener("dispose", T));
    const H = x.source;
    let j = f.get(H);
    j === void 0 && (j = {}, f.set(H, j));
    const V = q(x);
    if (V !== E.__cacheKey) {
      j[V] === void 0 && (j[V] = { texture: i.createTexture(), usedTimes: 0 }, a.memory.textures++, I = true), j[V].usedTimes++;
      const _t = j[E.__cacheKey];
      _t !== void 0 && (j[E.__cacheKey].usedTimes--, _t.usedTimes === 0 && b(x)), E.__cacheKey = V, E.__webglTexture = j[V].texture;
    }
    return I;
  }
  function Jt(E, x, I) {
    return Math.floor(Math.floor(E / I) / x);
  }
  function Qt(E, x, I, H) {
    const V = E.updateRanges;
    if (V.length === 0) e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, x.width, x.height, I, H, x.data);
    else {
      V.sort((Z, et) => Z.start - et.start);
      let _t = 0;
      for (let Z = 1; Z < V.length; Z++) {
        const et = V[_t], At = V[Z], yt = et.start + et.count, ht = Jt(At.start, x.width, 4), Rt = Jt(et.start, x.width, 4);
        At.start <= yt + 1 && ht === Rt && Jt(At.start + At.count - 1, x.width, 4) === ht ? et.count = Math.max(et.count, At.start + At.count - et.start) : (++_t, V[_t] = At);
      }
      V.length = _t + 1;
      const ot = i.getParameter(i.UNPACK_ROW_LENGTH), St = i.getParameter(i.UNPACK_SKIP_PIXELS), xt = i.getParameter(i.UNPACK_SKIP_ROWS);
      i.pixelStorei(i.UNPACK_ROW_LENGTH, x.width);
      for (let Z = 0, et = V.length; Z < et; Z++) {
        const At = V[Z], yt = Math.floor(At.start / 4), ht = Math.ceil(At.count / 4), Rt = yt % x.width, R = Math.floor(yt / x.width), lt = ht, it = 1;
        i.pixelStorei(i.UNPACK_SKIP_PIXELS, Rt), i.pixelStorei(i.UNPACK_SKIP_ROWS, R), e.texSubImage2D(i.TEXTURE_2D, 0, Rt, R, lt, it, I, H, x.data);
      }
      E.clearUpdateRanges(), i.pixelStorei(i.UNPACK_ROW_LENGTH, ot), i.pixelStorei(i.UNPACK_SKIP_PIXELS, St), i.pixelStorei(i.UNPACK_SKIP_ROWS, xt);
    }
  }
  function X(E, x, I) {
    let H = i.TEXTURE_2D;
    (x.isDataArrayTexture || x.isCompressedArrayTexture) && (H = i.TEXTURE_2D_ARRAY), x.isData3DTexture && (H = i.TEXTURE_3D);
    const j = Yt(E, x), V = x.source;
    e.bindTexture(H, E.__webglTexture, i.TEXTURE0 + I);
    const _t = n.get(V);
    if (V.version !== _t.__version || j === true) {
      e.activeTexture(i.TEXTURE0 + I);
      const ot = Xt.getPrimaries(Xt.workingColorSpace), St = x.colorSpace === bn ? null : Xt.getPrimaries(x.colorSpace), xt = x.colorSpace === bn || ot === St ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, x.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, x.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, xt);
      let Z = v(x.image, false, s.maxTextureSize);
      Z = Mt(x, Z);
      const et = r.convert(x.format, x.colorSpace), At = r.convert(x.type);
      let yt = y(x.internalFormat, et, At, x.colorSpace, x.isVideoTexture);
      Ht(H, x);
      let ht;
      const Rt = x.mipmaps, R = x.isVideoTexture !== true, lt = _t.__version === void 0 || j === true, it = V.dataReady, st = P(x, Z);
      if (x.isDepthTexture) yt = A(x.format === Ai, x.type), lt && (R ? e.texStorage2D(i.TEXTURE_2D, 1, yt, Z.width, Z.height) : e.texImage2D(i.TEXTURE_2D, 0, yt, Z.width, Z.height, 0, et, At, null));
      else if (x.isDataTexture) if (Rt.length > 0) {
        R && lt && e.texStorage2D(i.TEXTURE_2D, st, yt, Rt[0].width, Rt[0].height);
        for (let Q = 0, Y = Rt.length; Q < Y; Q++) ht = Rt[Q], R ? it && e.texSubImage2D(i.TEXTURE_2D, Q, 0, 0, ht.width, ht.height, et, At, ht.data) : e.texImage2D(i.TEXTURE_2D, Q, yt, ht.width, ht.height, 0, et, At, ht.data);
        x.generateMipmaps = false;
      } else R ? (lt && e.texStorage2D(i.TEXTURE_2D, st, yt, Z.width, Z.height), it && Qt(x, Z, et, At)) : e.texImage2D(i.TEXTURE_2D, 0, yt, Z.width, Z.height, 0, et, At, Z.data);
      else if (x.isCompressedTexture) if (x.isCompressedArrayTexture) {
        R && lt && e.texStorage3D(i.TEXTURE_2D_ARRAY, st, yt, Rt[0].width, Rt[0].height, Z.depth);
        for (let Q = 0, Y = Rt.length; Q < Y; Q++) if (ht = Rt[Q], x.format !== Ye) if (et !== null) if (R) {
          if (it) if (x.layerUpdates.size > 0) {
            const ft = Xa(ht.width, ht.height, x.format, x.type);
            for (const Pt of x.layerUpdates) {
              const ee = ht.data.subarray(Pt * ft / ht.data.BYTES_PER_ELEMENT, (Pt + 1) * ft / ht.data.BYTES_PER_ELEMENT);
              e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, Q, 0, 0, Pt, ht.width, ht.height, 1, et, ee);
            }
            x.clearLayerUpdates();
          } else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, Q, 0, 0, 0, ht.width, ht.height, Z.depth, et, ht.data);
        } else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY, Q, yt, ht.width, ht.height, Z.depth, 0, ht.data, 0, 0);
        else Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else R ? it && e.texSubImage3D(i.TEXTURE_2D_ARRAY, Q, 0, 0, 0, ht.width, ht.height, Z.depth, et, At, ht.data) : e.texImage3D(i.TEXTURE_2D_ARRAY, Q, yt, ht.width, ht.height, Z.depth, 0, et, At, ht.data);
      } else {
        R && lt && e.texStorage2D(i.TEXTURE_2D, st, yt, Rt[0].width, Rt[0].height);
        for (let Q = 0, Y = Rt.length; Q < Y; Q++) ht = Rt[Q], x.format !== Ye ? et !== null ? R ? it && e.compressedTexSubImage2D(i.TEXTURE_2D, Q, 0, 0, ht.width, ht.height, et, ht.data) : e.compressedTexImage2D(i.TEXTURE_2D, Q, yt, ht.width, ht.height, 0, ht.data) : Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : R ? it && e.texSubImage2D(i.TEXTURE_2D, Q, 0, 0, ht.width, ht.height, et, At, ht.data) : e.texImage2D(i.TEXTURE_2D, Q, yt, ht.width, ht.height, 0, et, At, ht.data);
      }
      else if (x.isDataArrayTexture) if (R) {
        if (lt && e.texStorage3D(i.TEXTURE_2D_ARRAY, st, yt, Z.width, Z.height, Z.depth), it) if (x.layerUpdates.size > 0) {
          const Q = Xa(Z.width, Z.height, x.format, x.type);
          for (const Y of x.layerUpdates) {
            const ft = Z.data.subarray(Y * Q / Z.data.BYTES_PER_ELEMENT, (Y + 1) * Q / Z.data.BYTES_PER_ELEMENT);
            e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, Y, Z.width, Z.height, 1, et, At, ft);
          }
          x.clearLayerUpdates();
        } else e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Z.width, Z.height, Z.depth, et, At, Z.data);
      } else e.texImage3D(i.TEXTURE_2D_ARRAY, 0, yt, Z.width, Z.height, Z.depth, 0, et, At, Z.data);
      else if (x.isData3DTexture) R ? (lt && e.texStorage3D(i.TEXTURE_3D, st, yt, Z.width, Z.height, Z.depth), it && e.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, Z.width, Z.height, Z.depth, et, At, Z.data)) : e.texImage3D(i.TEXTURE_3D, 0, yt, Z.width, Z.height, Z.depth, 0, et, At, Z.data);
      else if (x.isFramebufferTexture) {
        if (lt) if (R) e.texStorage2D(i.TEXTURE_2D, st, yt, Z.width, Z.height);
        else {
          let Q = Z.width, Y = Z.height;
          for (let ft = 0; ft < st; ft++) e.texImage2D(i.TEXTURE_2D, ft, yt, Q, Y, 0, et, At, null), Q >>= 1, Y >>= 1;
        }
      } else if (Rt.length > 0) {
        if (R && lt) {
          const Q = Dt(Rt[0]);
          e.texStorage2D(i.TEXTURE_2D, st, yt, Q.width, Q.height);
        }
        for (let Q = 0, Y = Rt.length; Q < Y; Q++) ht = Rt[Q], R ? it && e.texSubImage2D(i.TEXTURE_2D, Q, 0, 0, et, At, ht) : e.texImage2D(i.TEXTURE_2D, Q, yt, et, At, ht);
        x.generateMipmaps = false;
      } else if (R) {
        if (lt) {
          const Q = Dt(Z);
          e.texStorage2D(i.TEXTURE_2D, st, yt, Q.width, Q.height);
        }
        it && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, et, At, Z);
      } else e.texImage2D(i.TEXTURE_2D, 0, yt, et, At, Z);
      p(x) && h(H), _t.__version = V.version, x.onUpdate && x.onUpdate(x);
    }
    E.__version = x.version;
  }
  function K(E, x, I) {
    if (x.image.length !== 6) return;
    const H = Yt(E, x), j = x.source;
    e.bindTexture(i.TEXTURE_CUBE_MAP, E.__webglTexture, i.TEXTURE0 + I);
    const V = n.get(j);
    if (j.version !== V.__version || H === true) {
      e.activeTexture(i.TEXTURE0 + I);
      const _t = Xt.getPrimaries(Xt.workingColorSpace), ot = x.colorSpace === bn ? null : Xt.getPrimaries(x.colorSpace), St = x.colorSpace === bn || _t === ot ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, x.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, x.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, St);
      const xt = x.isCompressedTexture || x.image[0].isCompressedTexture, Z = x.image[0] && x.image[0].isDataTexture, et = [];
      for (let Y = 0; Y < 6; Y++) !xt && !Z ? et[Y] = v(x.image[Y], true, s.maxCubemapSize) : et[Y] = Z ? x.image[Y].image : x.image[Y], et[Y] = Mt(x, et[Y]);
      const At = et[0], yt = r.convert(x.format, x.colorSpace), ht = r.convert(x.type), Rt = y(x.internalFormat, yt, ht, x.colorSpace), R = x.isVideoTexture !== true, lt = V.__version === void 0 || H === true, it = j.dataReady;
      let st = P(x, At);
      Ht(i.TEXTURE_CUBE_MAP, x);
      let Q;
      if (xt) {
        R && lt && e.texStorage2D(i.TEXTURE_CUBE_MAP, st, Rt, At.width, At.height);
        for (let Y = 0; Y < 6; Y++) {
          Q = et[Y].mipmaps;
          for (let ft = 0; ft < Q.length; ft++) {
            const Pt = Q[ft];
            x.format !== Ye ? yt !== null ? R ? it && e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, ft, 0, 0, Pt.width, Pt.height, yt, Pt.data) : e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, ft, Rt, Pt.width, Pt.height, 0, Pt.data) : Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : R ? it && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, ft, 0, 0, Pt.width, Pt.height, yt, ht, Pt.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, ft, Rt, Pt.width, Pt.height, 0, yt, ht, Pt.data);
          }
        }
      } else {
        if (Q = x.mipmaps, R && lt) {
          Q.length > 0 && st++;
          const Y = Dt(et[0]);
          e.texStorage2D(i.TEXTURE_CUBE_MAP, st, Rt, Y.width, Y.height);
        }
        for (let Y = 0; Y < 6; Y++) if (Z) {
          R ? it && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, 0, 0, et[Y].width, et[Y].height, yt, ht, et[Y].data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, Rt, et[Y].width, et[Y].height, 0, yt, ht, et[Y].data);
          for (let ft = 0; ft < Q.length; ft++) {
            const ee = Q[ft].image[Y].image;
            R ? it && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, ft + 1, 0, 0, ee.width, ee.height, yt, ht, ee.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, ft + 1, Rt, ee.width, ee.height, 0, yt, ht, ee.data);
          }
        } else {
          R ? it && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, 0, 0, yt, ht, et[Y]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, Rt, yt, ht, et[Y]);
          for (let ft = 0; ft < Q.length; ft++) {
            const Pt = Q[ft];
            R ? it && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, ft + 1, 0, 0, yt, ht, Pt.image[Y]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, ft + 1, Rt, yt, ht, Pt.image[Y]);
          }
        }
      }
      p(x) && h(i.TEXTURE_CUBE_MAP), V.__version = j.version, x.onUpdate && x.onUpdate(x);
    }
    E.__version = x.version;
  }
  function dt(E, x, I, H, j, V) {
    const _t = r.convert(I.format, I.colorSpace), ot = r.convert(I.type), St = y(I.internalFormat, _t, ot, I.colorSpace), xt = n.get(x), Z = n.get(I);
    if (Z.__renderTarget = x, !xt.__hasExternalTextures) {
      const et = Math.max(1, x.width >> V), At = Math.max(1, x.height >> V);
      j === i.TEXTURE_3D || j === i.TEXTURE_2D_ARRAY ? e.texImage3D(j, V, St, et, At, x.depth, 0, _t, ot, null) : e.texImage2D(j, V, St, et, At, 0, _t, ot, null);
    }
    e.bindFramebuffer(i.FRAMEBUFFER, E), mt(x) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, H, j, Z.__webglTexture, 0, te(x)) : (j === i.TEXTURE_2D || j >= i.TEXTURE_CUBE_MAP_POSITIVE_X && j <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, H, j, Z.__webglTexture, V), e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Lt(E, x, I) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, E), x.depthBuffer) {
      const H = x.depthTexture, j = H && H.isDepthTexture ? H.type : null, V = A(x.stencilBuffer, j), _t = x.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, ot = te(x);
      mt(x) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ot, V, x.width, x.height) : I ? i.renderbufferStorageMultisample(i.RENDERBUFFER, ot, V, x.width, x.height) : i.renderbufferStorage(i.RENDERBUFFER, V, x.width, x.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, _t, i.RENDERBUFFER, E);
    } else {
      const H = x.textures;
      for (let j = 0; j < H.length; j++) {
        const V = H[j], _t = r.convert(V.format, V.colorSpace), ot = r.convert(V.type), St = y(V.internalFormat, _t, ot, V.colorSpace), xt = te(x);
        I && mt(x) === false ? i.renderbufferStorageMultisample(i.RENDERBUFFER, xt, St, x.width, x.height) : mt(x) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, xt, St, x.width, x.height) : i.renderbufferStorage(i.RENDERBUFFER, St, x.width, x.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function gt(E, x) {
    if (x && x.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(i.FRAMEBUFFER, E), !(x.depthTexture && x.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const H = n.get(x.depthTexture);
    H.__renderTarget = x, (!H.__webglTexture || x.depthTexture.image.width !== x.width || x.depthTexture.image.height !== x.height) && (x.depthTexture.image.width = x.width, x.depthTexture.image.height = x.height, x.depthTexture.needsUpdate = true), W(x.depthTexture, 0);
    const j = H.__webglTexture, V = te(x);
    if (x.depthTexture.format === Ti) mt(x) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, j, 0, V) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, j, 0);
    else if (x.depthTexture.format === Ai) mt(x) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, j, 0, V) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, j, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function zt(E) {
    const x = n.get(E), I = E.isWebGLCubeRenderTarget === true;
    if (x.__boundDepthTexture !== E.depthTexture) {
      const H = E.depthTexture;
      if (x.__depthDisposeCallback && x.__depthDisposeCallback(), H) {
        const j = () => {
          delete x.__boundDepthTexture, delete x.__depthDisposeCallback, H.removeEventListener("dispose", j);
        };
        H.addEventListener("dispose", j), x.__depthDisposeCallback = j;
      }
      x.__boundDepthTexture = H;
    }
    if (E.depthTexture && !x.__autoAllocateDepthBuffer) {
      if (I) throw new Error("target.depthTexture not supported in Cube render targets");
      const H = E.texture.mipmaps;
      H && H.length > 0 ? gt(x.__webglFramebuffer[0], E) : gt(x.__webglFramebuffer, E);
    } else if (I) {
      x.__webglDepthbuffer = [];
      for (let H = 0; H < 6; H++) if (e.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer[H]), x.__webglDepthbuffer[H] === void 0) x.__webglDepthbuffer[H] = i.createRenderbuffer(), Lt(x.__webglDepthbuffer[H], E, false);
      else {
        const j = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, V = x.__webglDepthbuffer[H];
        i.bindRenderbuffer(i.RENDERBUFFER, V), i.framebufferRenderbuffer(i.FRAMEBUFFER, j, i.RENDERBUFFER, V);
      }
    } else {
      const H = E.texture.mipmaps;
      if (H && H.length > 0 ? e.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer[0]) : e.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer), x.__webglDepthbuffer === void 0) x.__webglDepthbuffer = i.createRenderbuffer(), Lt(x.__webglDepthbuffer, E, false);
      else {
        const j = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, V = x.__webglDepthbuffer;
        i.bindRenderbuffer(i.RENDERBUFFER, V), i.framebufferRenderbuffer(i.FRAMEBUFFER, j, i.RENDERBUFFER, V);
      }
    }
    e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function xe(E, x, I) {
    const H = n.get(E);
    x !== void 0 && dt(H.__webglFramebuffer, E, E.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), I !== void 0 && zt(E);
  }
  function Ft(E) {
    const x = E.texture, I = n.get(E), H = n.get(x);
    E.addEventListener("dispose", C);
    const j = E.textures, V = E.isWebGLCubeRenderTarget === true, _t = j.length > 1;
    if (_t || (H.__webglTexture === void 0 && (H.__webglTexture = i.createTexture()), H.__version = x.version, a.memory.textures++), V) {
      I.__webglFramebuffer = [];
      for (let ot = 0; ot < 6; ot++) if (x.mipmaps && x.mipmaps.length > 0) {
        I.__webglFramebuffer[ot] = [];
        for (let St = 0; St < x.mipmaps.length; St++) I.__webglFramebuffer[ot][St] = i.createFramebuffer();
      } else I.__webglFramebuffer[ot] = i.createFramebuffer();
    } else {
      if (x.mipmaps && x.mipmaps.length > 0) {
        I.__webglFramebuffer = [];
        for (let ot = 0; ot < x.mipmaps.length; ot++) I.__webglFramebuffer[ot] = i.createFramebuffer();
      } else I.__webglFramebuffer = i.createFramebuffer();
      if (_t) for (let ot = 0, St = j.length; ot < St; ot++) {
        const xt = n.get(j[ot]);
        xt.__webglTexture === void 0 && (xt.__webglTexture = i.createTexture(), a.memory.textures++);
      }
      if (E.samples > 0 && mt(E) === false) {
        I.__webglMultisampledFramebuffer = i.createFramebuffer(), I.__webglColorRenderbuffer = [], e.bindFramebuffer(i.FRAMEBUFFER, I.__webglMultisampledFramebuffer);
        for (let ot = 0; ot < j.length; ot++) {
          const St = j[ot];
          I.__webglColorRenderbuffer[ot] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, I.__webglColorRenderbuffer[ot]);
          const xt = r.convert(St.format, St.colorSpace), Z = r.convert(St.type), et = y(St.internalFormat, xt, Z, St.colorSpace, E.isXRRenderTarget === true), At = te(E);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, At, et, E.width, E.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ot, i.RENDERBUFFER, I.__webglColorRenderbuffer[ot]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), E.depthBuffer && (I.__webglDepthRenderbuffer = i.createRenderbuffer(), Lt(I.__webglDepthRenderbuffer, E, true)), e.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (V) {
      e.bindTexture(i.TEXTURE_CUBE_MAP, H.__webglTexture), Ht(i.TEXTURE_CUBE_MAP, x);
      for (let ot = 0; ot < 6; ot++) if (x.mipmaps && x.mipmaps.length > 0) for (let St = 0; St < x.mipmaps.length; St++) dt(I.__webglFramebuffer[ot][St], E, x, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ot, St);
      else dt(I.__webglFramebuffer[ot], E, x, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ot, 0);
      p(x) && h(i.TEXTURE_CUBE_MAP), e.unbindTexture();
    } else if (_t) {
      for (let ot = 0, St = j.length; ot < St; ot++) {
        const xt = j[ot], Z = n.get(xt);
        let et = i.TEXTURE_2D;
        (E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (et = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), e.bindTexture(et, Z.__webglTexture), Ht(et, xt), dt(I.__webglFramebuffer, E, xt, i.COLOR_ATTACHMENT0 + ot, et, 0), p(xt) && h(et);
      }
      e.unbindTexture();
    } else {
      let ot = i.TEXTURE_2D;
      if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (ot = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), e.bindTexture(ot, H.__webglTexture), Ht(ot, x), x.mipmaps && x.mipmaps.length > 0) for (let St = 0; St < x.mipmaps.length; St++) dt(I.__webglFramebuffer[St], E, x, i.COLOR_ATTACHMENT0, ot, St);
      else dt(I.__webglFramebuffer, E, x, i.COLOR_ATTACHMENT0, ot, 0);
      p(x) && h(ot), e.unbindTexture();
    }
    E.depthBuffer && zt(E);
  }
  function ne(E) {
    const x = E.textures;
    for (let I = 0, H = x.length; I < H; I++) {
      const j = x[I];
      if (p(j)) {
        const V = S(E), _t = n.get(j).__webglTexture;
        e.bindTexture(V, _t), h(V), e.unbindTexture();
      }
    }
  }
  const w = [], Vt = [];
  function kt(E) {
    if (E.samples > 0) {
      if (mt(E) === false) {
        const x = E.textures, I = E.width, H = E.height;
        let j = i.COLOR_BUFFER_BIT;
        const V = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, _t = n.get(E), ot = x.length > 1;
        if (ot) for (let xt = 0; xt < x.length; xt++) e.bindFramebuffer(i.FRAMEBUFFER, _t.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xt, i.RENDERBUFFER, null), e.bindFramebuffer(i.FRAMEBUFFER, _t.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xt, i.TEXTURE_2D, null, 0);
        e.bindFramebuffer(i.READ_FRAMEBUFFER, _t.__webglMultisampledFramebuffer);
        const St = E.texture.mipmaps;
        St && St.length > 0 ? e.bindFramebuffer(i.DRAW_FRAMEBUFFER, _t.__webglFramebuffer[0]) : e.bindFramebuffer(i.DRAW_FRAMEBUFFER, _t.__webglFramebuffer);
        for (let xt = 0; xt < x.length; xt++) {
          if (E.resolveDepthBuffer && (E.depthBuffer && (j |= i.DEPTH_BUFFER_BIT), E.stencilBuffer && E.resolveStencilBuffer && (j |= i.STENCIL_BUFFER_BIT)), ot) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, _t.__webglColorRenderbuffer[xt]);
            const Z = n.get(x[xt]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Z, 0);
          }
          i.blitFramebuffer(0, 0, I, H, 0, 0, I, H, j, i.NEAREST), c === true && (w.length = 0, Vt.length = 0, w.push(i.COLOR_ATTACHMENT0 + xt), E.depthBuffer && E.resolveDepthBuffer === false && (w.push(V), Vt.push(V), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, Vt)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, w));
        }
        if (e.bindFramebuffer(i.READ_FRAMEBUFFER, null), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), ot) for (let xt = 0; xt < x.length; xt++) {
          e.bindFramebuffer(i.FRAMEBUFFER, _t.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xt, i.RENDERBUFFER, _t.__webglColorRenderbuffer[xt]);
          const Z = n.get(x[xt]).__webglTexture;
          e.bindFramebuffer(i.FRAMEBUFFER, _t.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xt, i.TEXTURE_2D, Z, 0);
        }
        e.bindFramebuffer(i.DRAW_FRAMEBUFFER, _t.__webglMultisampledFramebuffer);
      } else if (E.depthBuffer && E.resolveDepthBuffer === false && c) {
        const x = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [x]);
      }
    }
  }
  function te(E) {
    return Math.min(s.maxSamples, E.samples);
  }
  function mt(E) {
    const x = n.get(E);
    return E.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === true && x.__useRenderToTexture !== false;
  }
  function se(E) {
    const x = a.render.frame;
    u.get(E) !== x && (u.set(E, x), E.update());
  }
  function Mt(E, x) {
    const I = E.colorSpace, H = E.format, j = E.type;
    return E.isCompressedTexture === true || E.isVideoTexture === true || I !== ci && I !== bn && (Xt.getTransfer(I) === jt ? (H !== Ye || j !== un) && Ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : ce("WebGLTextures: Unsupported texture color space:", I)), x;
  }
  function Dt(E) {
    return typeof HTMLImageElement < "u" && E instanceof HTMLImageElement ? (l.width = E.naturalWidth || E.width, l.height = E.naturalHeight || E.height) : typeof VideoFrame < "u" && E instanceof VideoFrame ? (l.width = E.displayWidth, l.height = E.displayHeight) : (l.width = E.width, l.height = E.height), l;
  }
  this.allocateTextureUnit = k, this.resetTextureUnits = B, this.setTexture2D = W, this.setTexture2DArray = $, this.setTexture3D = J, this.setTextureCube = G, this.rebindTextures = xe, this.setupRenderTarget = Ft, this.updateRenderTargetMipmap = ne, this.updateMultisampleRenderTarget = kt, this.setupDepthRenderbuffer = zt, this.setupFrameBufferTexture = dt, this.useMultisampledRTT = mt;
}
function dp(i, t) {
  function e(n, s = bn) {
    let r;
    const a = Xt.getTransfer(s);
    if (n === un) return i.UNSIGNED_BYTE;
    if (n === Zr) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === Jr) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === yo) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === To) return i.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === So) return i.BYTE;
    if (n === Eo) return i.SHORT;
    if (n === Ei) return i.UNSIGNED_SHORT;
    if (n === Kr) return i.INT;
    if (n === Fn) return i.UNSIGNED_INT;
    if (n === ln) return i.FLOAT;
    if (n === ui) return i.HALF_FLOAT;
    if (n === Ao) return i.ALPHA;
    if (n === wo) return i.RGB;
    if (n === Ye) return i.RGBA;
    if (n === Ti) return i.DEPTH_COMPONENT;
    if (n === Ai) return i.DEPTH_STENCIL;
    if (n === Ro) return i.RED;
    if (n === Qr) return i.RED_INTEGER;
    if (n === ta) return i.RG;
    if (n === ea) return i.RG_INTEGER;
    if (n === na) return i.RGBA_INTEGER;
    if (n === as || n === os || n === ls || n === cs) if (a === jt) if (r = t.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
      if (n === as) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (n === os) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (n === ls) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (n === cs) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (r = t.get("WEBGL_compressed_texture_s3tc"), r !== null) {
      if (n === as) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (n === os) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (n === ls) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (n === cs) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (n === _r || n === gr || n === vr || n === Mr) if (r = t.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
      if (n === _r) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (n === gr) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (n === vr) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (n === Mr) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (n === br || n === Sr || n === Er) if (r = t.get("WEBGL_compressed_texture_etc"), r !== null) {
      if (n === br || n === Sr) return a === jt ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
      if (n === Er) return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
    } else return null;
    if (n === yr || n === Tr || n === Ar || n === wr || n === Rr || n === Cr || n === Pr || n === Dr || n === Lr || n === Ur || n === Ir || n === Nr || n === Fr || n === Or) if (r = t.get("WEBGL_compressed_texture_astc"), r !== null) {
      if (n === yr) return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (n === Tr) return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (n === Ar) return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (n === wr) return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (n === Rr) return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (n === Cr) return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (n === Pr) return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (n === Dr) return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (n === Lr) return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (n === Ur) return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (n === Ir) return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (n === Nr) return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (n === Fr) return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (n === Or) return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (n === Br || n === zr || n === Vr) if (r = t.get("EXT_texture_compression_bptc"), r !== null) {
      if (n === Br) return a === jt ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (n === zr) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (n === Vr) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (n === kr || n === Gr || n === Hr || n === Wr) if (r = t.get("EXT_texture_compression_rgtc"), r !== null) {
      if (n === kr) return r.COMPRESSED_RED_RGTC1_EXT;
      if (n === Gr) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (n === Hr) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (n === Wr) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return n === yi ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: e };
}
const fp = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, pp = `
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
class mp {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(t, e) {
    if (this.texture === null) {
      const n = new Ho(t.texture);
      (t.depthNear !== e.depthNear || t.depthFar !== e.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = n;
    }
  }
  getMesh(t) {
    if (this.texture !== null && this.mesh === null) {
      const e = t.cameras[0].viewport, n = new fn({ vertexShader: fp, fragmentShader: pp, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: e.z }, depthHeight: { value: e.w } } });
      this.mesh = new Ze(new bs(20, 20), n);
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
class xp extends zn {
  constructor(t, e) {
    super();
    const n = this;
    let s = null, r = 1, a = null, o = "local-floor", c = 1, l = null, u = null, d = null, f = null, m = null, _ = null;
    const v = typeof XRWebGLBinding < "u", p = new mp(), h = {}, S = e.getContextAttributes();
    let y = null, A = null;
    const P = [], T = [], C = new Nt();
    let z = null;
    const b = new Be();
    b.viewport = new he();
    const M = new Be();
    M.viewport = new he();
    const D = [b, M], B = new Dc();
    let k = null, q = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(X) {
      let K = P[X];
      return K === void 0 && (K = new $s(), P[X] = K), K.getTargetRaySpace();
    }, this.getControllerGrip = function(X) {
      let K = P[X];
      return K === void 0 && (K = new $s(), P[X] = K), K.getGripSpace();
    }, this.getHand = function(X) {
      let K = P[X];
      return K === void 0 && (K = new $s(), P[X] = K), K.getHandSpace();
    };
    function W(X) {
      const K = T.indexOf(X.inputSource);
      if (K === -1) return;
      const dt = P[K];
      dt !== void 0 && (dt.update(X.inputSource, X.frame, l || a), dt.dispatchEvent({ type: X.type, data: X.inputSource }));
    }
    function $() {
      s.removeEventListener("select", W), s.removeEventListener("selectstart", W), s.removeEventListener("selectend", W), s.removeEventListener("squeeze", W), s.removeEventListener("squeezestart", W), s.removeEventListener("squeezeend", W), s.removeEventListener("end", $), s.removeEventListener("inputsourceschange", J);
      for (let X = 0; X < P.length; X++) {
        const K = T[X];
        K !== null && (T[X] = null, P[X].disconnect(K));
      }
      k = null, q = null, p.reset();
      for (const X in h) delete h[X];
      t.setRenderTarget(y), m = null, f = null, d = null, s = null, A = null, Qt.stop(), n.isPresenting = false, t.setPixelRatio(z), t.setSize(C.width, C.height, false), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(X) {
      r = X, n.isPresenting === true && Ct("WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(X) {
      o = X, n.isPresenting === true && Ct("WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(X) {
      l = X;
    }, this.getBaseLayer = function() {
      return f !== null ? f : m;
    }, this.getBinding = function() {
      return d === null && v && (d = new XRWebGLBinding(s, e)), d;
    }, this.getFrame = function() {
      return _;
    }, this.getSession = function() {
      return s;
    }, this.setSession = async function(X) {
      if (s = X, s !== null) {
        if (y = t.getRenderTarget(), s.addEventListener("select", W), s.addEventListener("selectstart", W), s.addEventListener("selectend", W), s.addEventListener("squeeze", W), s.addEventListener("squeezestart", W), s.addEventListener("squeezeend", W), s.addEventListener("end", $), s.addEventListener("inputsourceschange", J), S.xrCompatible !== true && await e.makeXRCompatible(), z = t.getPixelRatio(), t.getSize(C), v && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let dt = null, Lt = null, gt = null;
          S.depth && (gt = S.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, dt = S.stencil ? Ai : Ti, Lt = S.stencil ? yi : Fn);
          const zt = { colorFormat: e.RGBA8, depthFormat: gt, scaleFactor: r };
          d = this.getBinding(), f = d.createProjectionLayer(zt), s.updateRenderState({ layers: [f] }), t.setPixelRatio(1), t.setSize(f.textureWidth, f.textureHeight, false), A = new Bn(f.textureWidth, f.textureHeight, { format: Ye, type: un, depthTexture: new Go(f.textureWidth, f.textureHeight, Lt, void 0, void 0, void 0, void 0, void 0, void 0, dt), stencilBuffer: S.stencil, colorSpace: t.outputColorSpace, samples: S.antialias ? 4 : 0, resolveDepthBuffer: f.ignoreDepthValues === false, resolveStencilBuffer: f.ignoreDepthValues === false });
        } else {
          const dt = { antialias: S.antialias, alpha: true, depth: S.depth, stencil: S.stencil, framebufferScaleFactor: r };
          m = new XRWebGLLayer(s, e, dt), s.updateRenderState({ baseLayer: m }), t.setPixelRatio(1), t.setSize(m.framebufferWidth, m.framebufferHeight, false), A = new Bn(m.framebufferWidth, m.framebufferHeight, { format: Ye, type: un, colorSpace: t.outputColorSpace, stencilBuffer: S.stencil, resolveDepthBuffer: m.ignoreDepthValues === false, resolveStencilBuffer: m.ignoreDepthValues === false });
        }
        A.isXRRenderTarget = true, this.setFoveation(c), l = null, a = await s.requestReferenceSpace(o), Qt.setContext(s), Qt.start(), n.isPresenting = true, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (s !== null) return s.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return p.getDepthTexture();
    };
    function J(X) {
      for (let K = 0; K < X.removed.length; K++) {
        const dt = X.removed[K], Lt = T.indexOf(dt);
        Lt >= 0 && (T[Lt] = null, P[Lt].disconnect(dt));
      }
      for (let K = 0; K < X.added.length; K++) {
        const dt = X.added[K];
        let Lt = T.indexOf(dt);
        if (Lt === -1) {
          for (let zt = 0; zt < P.length; zt++) if (zt >= T.length) {
            T.push(dt), Lt = zt;
            break;
          } else if (T[zt] === null) {
            T[zt] = dt, Lt = zt;
            break;
          }
          if (Lt === -1) break;
        }
        const gt = P[Lt];
        gt && gt.connect(dt);
      }
    }
    const G = new N(), nt = new N();
    function rt(X, K, dt) {
      G.setFromMatrixPosition(K.matrixWorld), nt.setFromMatrixPosition(dt.matrixWorld);
      const Lt = G.distanceTo(nt), gt = K.projectionMatrix.elements, zt = dt.projectionMatrix.elements, xe = gt[14] / (gt[10] - 1), Ft = gt[14] / (gt[10] + 1), ne = (gt[9] + 1) / gt[5], w = (gt[9] - 1) / gt[5], Vt = (gt[8] - 1) / gt[0], kt = (zt[8] + 1) / zt[0], te = xe * Vt, mt = xe * kt, se = Lt / (-Vt + kt), Mt = se * -Vt;
      if (K.matrixWorld.decompose(X.position, X.quaternion, X.scale), X.translateX(Mt), X.translateZ(se), X.matrixWorld.compose(X.position, X.quaternion, X.scale), X.matrixWorldInverse.copy(X.matrixWorld).invert(), gt[10] === -1) X.projectionMatrix.copy(K.projectionMatrix), X.projectionMatrixInverse.copy(K.projectionMatrixInverse);
      else {
        const Dt = xe + se, E = Ft + se, x = te - Mt, I = mt + (Lt - Mt), H = ne * Ft / E * Dt, j = w * Ft / E * Dt;
        X.projectionMatrix.makePerspective(x, I, H, j, Dt, E), X.projectionMatrixInverse.copy(X.projectionMatrix).invert();
      }
    }
    function bt(X, K) {
      K === null ? X.matrixWorld.copy(X.matrix) : X.matrixWorld.multiplyMatrices(K.matrixWorld, X.matrix), X.matrixWorldInverse.copy(X.matrixWorld).invert();
    }
    this.updateCamera = function(X) {
      if (s === null) return;
      let K = X.near, dt = X.far;
      p.texture !== null && (p.depthNear > 0 && (K = p.depthNear), p.depthFar > 0 && (dt = p.depthFar)), B.near = M.near = b.near = K, B.far = M.far = b.far = dt, (k !== B.near || q !== B.far) && (s.updateRenderState({ depthNear: B.near, depthFar: B.far }), k = B.near, q = B.far), B.layers.mask = X.layers.mask | 6, b.layers.mask = B.layers.mask & 3, M.layers.mask = B.layers.mask & 5;
      const Lt = X.parent, gt = B.cameras;
      bt(B, Lt);
      for (let zt = 0; zt < gt.length; zt++) bt(gt[zt], Lt);
      gt.length === 2 ? rt(B, b, M) : B.projectionMatrix.copy(b.projectionMatrix), Ht(X, B, Lt);
    };
    function Ht(X, K, dt) {
      dt === null ? X.matrix.copy(K.matrixWorld) : (X.matrix.copy(dt.matrixWorld), X.matrix.invert(), X.matrix.multiply(K.matrixWorld)), X.matrix.decompose(X.position, X.quaternion, X.scale), X.updateMatrixWorld(true), X.projectionMatrix.copy(K.projectionMatrix), X.projectionMatrixInverse.copy(K.projectionMatrixInverse), X.isPerspectiveCamera && (X.fov = Xr * 2 * Math.atan(1 / X.projectionMatrix.elements[5]), X.zoom = 1);
    }
    this.getCamera = function() {
      return B;
    }, this.getFoveation = function() {
      if (!(f === null && m === null)) return c;
    }, this.setFoveation = function(X) {
      c = X, f !== null && (f.fixedFoveation = X), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = X);
    }, this.hasDepthSensing = function() {
      return p.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return p.getMesh(B);
    }, this.getCameraTexture = function(X) {
      return h[X];
    };
    let Yt = null;
    function Jt(X, K) {
      if (u = K.getViewerPose(l || a), _ = K, u !== null) {
        const dt = u.views;
        m !== null && (t.setRenderTargetFramebuffer(A, m.framebuffer), t.setRenderTarget(A));
        let Lt = false;
        dt.length !== B.cameras.length && (B.cameras.length = 0, Lt = true);
        for (let Ft = 0; Ft < dt.length; Ft++) {
          const ne = dt[Ft];
          let w = null;
          if (m !== null) w = m.getViewport(ne);
          else {
            const kt = d.getViewSubImage(f, ne);
            w = kt.viewport, Ft === 0 && (t.setRenderTargetTextures(A, kt.colorTexture, kt.depthStencilTexture), t.setRenderTarget(A));
          }
          let Vt = D[Ft];
          Vt === void 0 && (Vt = new Be(), Vt.layers.enable(Ft), Vt.viewport = new he(), D[Ft] = Vt), Vt.matrix.fromArray(ne.transform.matrix), Vt.matrix.decompose(Vt.position, Vt.quaternion, Vt.scale), Vt.projectionMatrix.fromArray(ne.projectionMatrix), Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(), Vt.viewport.set(w.x, w.y, w.width, w.height), Ft === 0 && (B.matrix.copy(Vt.matrix), B.matrix.decompose(B.position, B.quaternion, B.scale)), Lt === true && B.cameras.push(Vt);
        }
        const gt = s.enabledFeatures;
        if (gt && gt.includes("depth-sensing") && s.depthUsage == "gpu-optimized" && v) {
          d = n.getBinding();
          const Ft = d.getDepthInformation(dt[0]);
          Ft && Ft.isValid && Ft.texture && p.init(Ft, s.renderState);
        }
        if (gt && gt.includes("camera-access") && v) {
          t.state.unbindTexture(), d = n.getBinding();
          for (let Ft = 0; Ft < dt.length; Ft++) {
            const ne = dt[Ft].camera;
            if (ne) {
              let w = h[ne];
              w || (w = new Ho(), h[ne] = w);
              const Vt = d.getCameraImage(ne);
              w.sourceTexture = Vt;
            }
          }
        }
      }
      for (let dt = 0; dt < P.length; dt++) {
        const Lt = T[dt], gt = P[dt];
        Lt !== null && gt !== void 0 && gt.update(Lt, K, l || a);
      }
      Yt && Yt(X, K), K.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: K }), _ = null;
    }
    const Qt = new Wo();
    Qt.setAnimationLoop(Jt), this.setAnimationLoop = function(X) {
      Yt = X;
    }, this.dispose = function() {
    };
  }
}
const Ln = new dn(), _p = new ie();
function gp(i, t) {
  function e(p, h) {
    p.matrixAutoUpdate === true && p.updateMatrix(), h.value.copy(p.matrix);
  }
  function n(p, h) {
    h.color.getRGB(p.fogColor.value, Fo(i)), h.isFog ? (p.fogNear.value = h.near, p.fogFar.value = h.far) : h.isFogExp2 && (p.fogDensity.value = h.density);
  }
  function s(p, h, S, y, A) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial ? r(p, h) : h.isMeshToonMaterial ? (r(p, h), d(p, h)) : h.isMeshPhongMaterial ? (r(p, h), u(p, h)) : h.isMeshStandardMaterial ? (r(p, h), f(p, h), h.isMeshPhysicalMaterial && m(p, h, A)) : h.isMeshMatcapMaterial ? (r(p, h), _(p, h)) : h.isMeshDepthMaterial ? r(p, h) : h.isMeshDistanceMaterial ? (r(p, h), v(p, h)) : h.isMeshNormalMaterial ? r(p, h) : h.isLineBasicMaterial ? (a(p, h), h.isLineDashedMaterial && o(p, h)) : h.isPointsMaterial ? c(p, h, S, y) : h.isSpriteMaterial ? l(p, h) : h.isShadowMaterial ? (p.color.value.copy(h.color), p.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = false);
  }
  function r(p, h) {
    p.opacity.value = h.opacity, h.color && p.diffuse.value.copy(h.color), h.emissive && p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (p.map.value = h.map, e(h.map, p.mapTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, e(h.alphaMap, p.alphaMapTransform)), h.bumpMap && (p.bumpMap.value = h.bumpMap, e(h.bumpMap, p.bumpMapTransform), p.bumpScale.value = h.bumpScale, h.side === we && (p.bumpScale.value *= -1)), h.normalMap && (p.normalMap.value = h.normalMap, e(h.normalMap, p.normalMapTransform), p.normalScale.value.copy(h.normalScale), h.side === we && p.normalScale.value.negate()), h.displacementMap && (p.displacementMap.value = h.displacementMap, e(h.displacementMap, p.displacementMapTransform), p.displacementScale.value = h.displacementScale, p.displacementBias.value = h.displacementBias), h.emissiveMap && (p.emissiveMap.value = h.emissiveMap, e(h.emissiveMap, p.emissiveMapTransform)), h.specularMap && (p.specularMap.value = h.specularMap, e(h.specularMap, p.specularMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
    const S = t.get(h), y = S.envMap, A = S.envMapRotation;
    y && (p.envMap.value = y, Ln.copy(A), Ln.x *= -1, Ln.y *= -1, Ln.z *= -1, y.isCubeTexture && y.isRenderTargetTexture === false && (Ln.y *= -1, Ln.z *= -1), p.envMapRotation.value.setFromMatrix4(_p.makeRotationFromEuler(Ln)), p.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === false ? -1 : 1, p.reflectivity.value = h.reflectivity, p.ior.value = h.ior, p.refractionRatio.value = h.refractionRatio), h.lightMap && (p.lightMap.value = h.lightMap, p.lightMapIntensity.value = h.lightMapIntensity, e(h.lightMap, p.lightMapTransform)), h.aoMap && (p.aoMap.value = h.aoMap, p.aoMapIntensity.value = h.aoMapIntensity, e(h.aoMap, p.aoMapTransform));
  }
  function a(p, h) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, h.map && (p.map.value = h.map, e(h.map, p.mapTransform));
  }
  function o(p, h) {
    p.dashSize.value = h.dashSize, p.totalSize.value = h.dashSize + h.gapSize, p.scale.value = h.scale;
  }
  function c(p, h, S, y) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.size.value = h.size * S, p.scale.value = y * 0.5, h.map && (p.map.value = h.map, e(h.map, p.uvTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, e(h.alphaMap, p.alphaMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function l(p, h) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.rotation.value = h.rotation, h.map && (p.map.value = h.map, e(h.map, p.mapTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, e(h.alphaMap, p.alphaMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function u(p, h) {
    p.specular.value.copy(h.specular), p.shininess.value = Math.max(h.shininess, 1e-4);
  }
  function d(p, h) {
    h.gradientMap && (p.gradientMap.value = h.gradientMap);
  }
  function f(p, h) {
    p.metalness.value = h.metalness, h.metalnessMap && (p.metalnessMap.value = h.metalnessMap, e(h.metalnessMap, p.metalnessMapTransform)), p.roughness.value = h.roughness, h.roughnessMap && (p.roughnessMap.value = h.roughnessMap, e(h.roughnessMap, p.roughnessMapTransform)), h.envMap && (p.envMapIntensity.value = h.envMapIntensity);
  }
  function m(p, h, S) {
    p.ior.value = h.ior, h.sheen > 0 && (p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), p.sheenRoughness.value = h.sheenRoughness, h.sheenColorMap && (p.sheenColorMap.value = h.sheenColorMap, e(h.sheenColorMap, p.sheenColorMapTransform)), h.sheenRoughnessMap && (p.sheenRoughnessMap.value = h.sheenRoughnessMap, e(h.sheenRoughnessMap, p.sheenRoughnessMapTransform))), h.clearcoat > 0 && (p.clearcoat.value = h.clearcoat, p.clearcoatRoughness.value = h.clearcoatRoughness, h.clearcoatMap && (p.clearcoatMap.value = h.clearcoatMap, e(h.clearcoatMap, p.clearcoatMapTransform)), h.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap, e(h.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), h.clearcoatNormalMap && (p.clearcoatNormalMap.value = h.clearcoatNormalMap, e(h.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), h.side === we && p.clearcoatNormalScale.value.negate())), h.dispersion > 0 && (p.dispersion.value = h.dispersion), h.iridescence > 0 && (p.iridescence.value = h.iridescence, p.iridescenceIOR.value = h.iridescenceIOR, p.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1], h.iridescenceMap && (p.iridescenceMap.value = h.iridescenceMap, e(h.iridescenceMap, p.iridescenceMapTransform)), h.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = h.iridescenceThicknessMap, e(h.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), h.transmission > 0 && (p.transmission.value = h.transmission, p.transmissionSamplerMap.value = S.texture, p.transmissionSamplerSize.value.set(S.width, S.height), h.transmissionMap && (p.transmissionMap.value = h.transmissionMap, e(h.transmissionMap, p.transmissionMapTransform)), p.thickness.value = h.thickness, h.thicknessMap && (p.thicknessMap.value = h.thicknessMap, e(h.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = h.attenuationDistance, p.attenuationColor.value.copy(h.attenuationColor)), h.anisotropy > 0 && (p.anisotropyVector.value.set(h.anisotropy * Math.cos(h.anisotropyRotation), h.anisotropy * Math.sin(h.anisotropyRotation)), h.anisotropyMap && (p.anisotropyMap.value = h.anisotropyMap, e(h.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = h.specularIntensity, p.specularColor.value.copy(h.specularColor), h.specularColorMap && (p.specularColorMap.value = h.specularColorMap, e(h.specularColorMap, p.specularColorMapTransform)), h.specularIntensityMap && (p.specularIntensityMap.value = h.specularIntensityMap, e(h.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function _(p, h) {
    h.matcap && (p.matcap.value = h.matcap);
  }
  function v(p, h) {
    const S = t.get(h).light;
    p.referencePosition.value.setFromMatrixPosition(S.matrixWorld), p.nearDistance.value = S.shadow.camera.near, p.farDistance.value = S.shadow.camera.far;
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: s };
}
function vp(i, t, e, n) {
  let s = {}, r = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(S, y) {
    const A = y.program;
    n.uniformBlockBinding(S, A);
  }
  function l(S, y) {
    let A = s[S.id];
    A === void 0 && (_(S), A = u(S), s[S.id] = A, S.addEventListener("dispose", p));
    const P = y.program;
    n.updateUBOMapping(S, P);
    const T = t.render.frame;
    r[S.id] !== T && (f(S), r[S.id] = T);
  }
  function u(S) {
    const y = d();
    S.__bindingPointIndex = y;
    const A = i.createBuffer(), P = S.__size, T = S.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, A), i.bufferData(i.UNIFORM_BUFFER, P, T), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, y, A), A;
  }
  function d() {
    for (let S = 0; S < o; S++) if (a.indexOf(S) === -1) return a.push(S), S;
    return ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(S) {
    const y = s[S.id], A = S.uniforms, P = S.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, y);
    for (let T = 0, C = A.length; T < C; T++) {
      const z = Array.isArray(A[T]) ? A[T] : [A[T]];
      for (let b = 0, M = z.length; b < M; b++) {
        const D = z[b];
        if (m(D, T, b, P) === true) {
          const B = D.__offset, k = Array.isArray(D.value) ? D.value : [D.value];
          let q = 0;
          for (let W = 0; W < k.length; W++) {
            const $ = k[W], J = v($);
            typeof $ == "number" || typeof $ == "boolean" ? (D.__data[0] = $, i.bufferSubData(i.UNIFORM_BUFFER, B + q, D.__data)) : $.isMatrix3 ? (D.__data[0] = $.elements[0], D.__data[1] = $.elements[1], D.__data[2] = $.elements[2], D.__data[3] = 0, D.__data[4] = $.elements[3], D.__data[5] = $.elements[4], D.__data[6] = $.elements[5], D.__data[7] = 0, D.__data[8] = $.elements[6], D.__data[9] = $.elements[7], D.__data[10] = $.elements[8], D.__data[11] = 0) : ($.toArray(D.__data, q), q += J.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, B, D.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function m(S, y, A, P) {
    const T = S.value, C = y + "_" + A;
    if (P[C] === void 0) return typeof T == "number" || typeof T == "boolean" ? P[C] = T : P[C] = T.clone(), true;
    {
      const z = P[C];
      if (typeof T == "number" || typeof T == "boolean") {
        if (z !== T) return P[C] = T, true;
      } else if (z.equals(T) === false) return z.copy(T), true;
    }
    return false;
  }
  function _(S) {
    const y = S.uniforms;
    let A = 0;
    const P = 16;
    for (let C = 0, z = y.length; C < z; C++) {
      const b = Array.isArray(y[C]) ? y[C] : [y[C]];
      for (let M = 0, D = b.length; M < D; M++) {
        const B = b[M], k = Array.isArray(B.value) ? B.value : [B.value];
        for (let q = 0, W = k.length; q < W; q++) {
          const $ = k[q], J = v($), G = A % P, nt = G % J.boundary, rt = G + nt;
          A += nt, rt !== 0 && P - rt < J.storage && (A += P - rt), B.__data = new Float32Array(J.storage / Float32Array.BYTES_PER_ELEMENT), B.__offset = A, A += J.storage;
        }
      }
    }
    const T = A % P;
    return T > 0 && (A += P - T), S.__size = A, S.__cache = {}, this;
  }
  function v(S) {
    const y = { boundary: 0, storage: 0 };
    return typeof S == "number" || typeof S == "boolean" ? (y.boundary = 4, y.storage = 4) : S.isVector2 ? (y.boundary = 8, y.storage = 8) : S.isVector3 || S.isColor ? (y.boundary = 16, y.storage = 12) : S.isVector4 ? (y.boundary = 16, y.storage = 16) : S.isMatrix3 ? (y.boundary = 48, y.storage = 48) : S.isMatrix4 ? (y.boundary = 64, y.storage = 64) : S.isTexture ? Ct("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : Ct("WebGLRenderer: Unsupported uniform value type.", S), y;
  }
  function p(S) {
    const y = S.target;
    y.removeEventListener("dispose", p);
    const A = a.indexOf(y.__bindingPointIndex);
    a.splice(A, 1), i.deleteBuffer(s[y.id]), delete s[y.id], delete r[y.id];
  }
  function h() {
    for (const S in s) i.deleteBuffer(s[S]);
    a = [], s = {}, r = {};
  }
  return { bind: c, update: l, dispose: h };
}
const Mp = new Uint16Array([11481, 15204, 11534, 15171, 11808, 15015, 12385, 14843, 12894, 14716, 13396, 14600, 13693, 14483, 13976, 14366, 14237, 14171, 14405, 13961, 14511, 13770, 14605, 13598, 14687, 13444, 14760, 13305, 14822, 13066, 14876, 12857, 14923, 12675, 14963, 12517, 14997, 12379, 15025, 12230, 15049, 12023, 15070, 11843, 15086, 11687, 15100, 11551, 15111, 11433, 15120, 11330, 15127, 11217, 15132, 11060, 15135, 10922, 15138, 10801, 15139, 10695, 15139, 10600, 13012, 14923, 13020, 14917, 13064, 14886, 13176, 14800, 13349, 14666, 13513, 14526, 13724, 14398, 13960, 14230, 14200, 14020, 14383, 13827, 14488, 13651, 14583, 13491, 14667, 13348, 14740, 13132, 14803, 12908, 14856, 12713, 14901, 12542, 14938, 12394, 14968, 12241, 14992, 12017, 15010, 11822, 15024, 11654, 15034, 11507, 15041, 11380, 15044, 11269, 15044, 11081, 15042, 10913, 15037, 10764, 15031, 10635, 15023, 10520, 15014, 10419, 15003, 10330, 13657, 14676, 13658, 14673, 13670, 14660, 13698, 14622, 13750, 14547, 13834, 14442, 13956, 14317, 14112, 14093, 14291, 13889, 14407, 13704, 14499, 13538, 14586, 13389, 14664, 13201, 14733, 12966, 14792, 12758, 14842, 12577, 14882, 12418, 14915, 12272, 14940, 12033, 14959, 11826, 14972, 11646, 14980, 11490, 14983, 11355, 14983, 11212, 14979, 11008, 14971, 10830, 14961, 10675, 14950, 10540, 14936, 10420, 14923, 10315, 14909, 10204, 14894, 10041, 14089, 14460, 14090, 14459, 14096, 14452, 14112, 14431, 14141, 14388, 14186, 14305, 14252, 14130, 14341, 13941, 14399, 13756, 14467, 13585, 14539, 13430, 14610, 13272, 14677, 13026, 14737, 12808, 14790, 12617, 14833, 12449, 14869, 12303, 14896, 12065, 14916, 11845, 14929, 11655, 14937, 11490, 14939, 11347, 14936, 11184, 14930, 10970, 14921, 10783, 14912, 10621, 14900, 10480, 14885, 10356, 14867, 10247, 14848, 10062, 14827, 9894, 14805, 9745, 14400, 14208, 14400, 14206, 14402, 14198, 14406, 14174, 14415, 14122, 14427, 14035, 14444, 13913, 14469, 13767, 14504, 13613, 14548, 13463, 14598, 13324, 14651, 13082, 14704, 12858, 14752, 12658, 14795, 12483, 14831, 12330, 14860, 12106, 14881, 11875, 14895, 11675, 14903, 11501, 14905, 11351, 14903, 11178, 14900, 10953, 14892, 10757, 14880, 10589, 14865, 10442, 14847, 10313, 14827, 10162, 14805, 9965, 14782, 9792, 14757, 9642, 14731, 9507, 14562, 13883, 14562, 13883, 14563, 13877, 14566, 13862, 14570, 13830, 14576, 13773, 14584, 13689, 14595, 13582, 14613, 13461, 14637, 13336, 14668, 13120, 14704, 12897, 14741, 12695, 14776, 12516, 14808, 12358, 14835, 12150, 14856, 11910, 14870, 11701, 14878, 11519, 14882, 11361, 14884, 11187, 14880, 10951, 14871, 10748, 14858, 10572, 14842, 10418, 14823, 10286, 14801, 10099, 14777, 9897, 14751, 9722, 14725, 9567, 14696, 9430, 14666, 9309, 14702, 13604, 14702, 13604, 14702, 13600, 14703, 13591, 14705, 13570, 14707, 13533, 14709, 13477, 14712, 13400, 14718, 13305, 14727, 13106, 14743, 12907, 14762, 12716, 14784, 12539, 14807, 12380, 14827, 12190, 14844, 11943, 14855, 11727, 14863, 11539, 14870, 11376, 14871, 11204, 14868, 10960, 14858, 10748, 14845, 10565, 14829, 10406, 14809, 10269, 14786, 10058, 14761, 9852, 14734, 9671, 14705, 9512, 14674, 9374, 14641, 9253, 14608, 9076, 14821, 13366, 14821, 13365, 14821, 13364, 14821, 13358, 14821, 13344, 14821, 13320, 14819, 13252, 14817, 13145, 14815, 13011, 14814, 12858, 14817, 12698, 14823, 12539, 14832, 12389, 14841, 12214, 14850, 11968, 14856, 11750, 14861, 11558, 14866, 11390, 14867, 11226, 14862, 10972, 14853, 10754, 14840, 10565, 14823, 10401, 14803, 10259, 14780, 10032, 14754, 9820, 14725, 9635, 14694, 9473, 14661, 9333, 14627, 9203, 14593, 8988, 14557, 8798, 14923, 13014, 14922, 13014, 14922, 13012, 14922, 13004, 14920, 12987, 14919, 12957, 14915, 12907, 14909, 12834, 14902, 12738, 14894, 12623, 14888, 12498, 14883, 12370, 14880, 12203, 14878, 11970, 14875, 11759, 14873, 11569, 14874, 11401, 14872, 11243, 14865, 10986, 14855, 10762, 14842, 10568, 14825, 10401, 14804, 10255, 14781, 10017, 14754, 9799, 14725, 9611, 14692, 9445, 14658, 9301, 14623, 9139, 14587, 8920, 14548, 8729, 14509, 8562, 15008, 12672, 15008, 12672, 15008, 12671, 15007, 12667, 15005, 12656, 15001, 12637, 14997, 12605, 14989, 12556, 14978, 12490, 14966, 12407, 14953, 12313, 14940, 12136, 14927, 11934, 14914, 11742, 14903, 11563, 14896, 11401, 14889, 11247, 14879, 10992, 14866, 10767, 14851, 10570, 14833, 10400, 14812, 10252, 14789, 10007, 14761, 9784, 14731, 9592, 14698, 9424, 14663, 9279, 14627, 9088, 14588, 8868, 14548, 8676, 14508, 8508, 14467, 8360, 15080, 12386, 15080, 12386, 15079, 12385, 15078, 12383, 15076, 12378, 15072, 12367, 15066, 12347, 15057, 12315, 15045, 12253, 15030, 12138, 15012, 11998, 14993, 11845, 14972, 11685, 14951, 11530, 14935, 11383, 14920, 11228, 14904, 10981, 14887, 10762, 14870, 10567, 14850, 10397, 14827, 10248, 14803, 9997, 14774, 9771, 14743, 9578, 14710, 9407, 14674, 9259, 14637, 9048, 14596, 8826, 14555, 8632, 14514, 8464, 14471, 8317, 14427, 8182, 15139, 12008, 15139, 12008, 15138, 12008, 15137, 12007, 15135, 12003, 15130, 11990, 15124, 11969, 15115, 11929, 15102, 11872, 15086, 11794, 15064, 11693, 15041, 11581, 15013, 11459, 14987, 11336, 14966, 11170, 14944, 10944, 14921, 10738, 14898, 10552, 14875, 10387, 14850, 10239, 14824, 9983, 14794, 9758, 14762, 9563, 14728, 9392, 14692, 9244, 14653, 9014, 14611, 8791, 14569, 8597, 14526, 8427, 14481, 8281, 14436, 8110, 14391, 7885, 15188, 11617, 15188, 11617, 15187, 11617, 15186, 11618, 15183, 11617, 15179, 11612, 15173, 11601, 15163, 11581, 15150, 11546, 15133, 11495, 15110, 11427, 15083, 11346, 15051, 11246, 15024, 11057, 14996, 10868, 14967, 10687, 14938, 10517, 14911, 10362, 14882, 10206, 14853, 9956, 14821, 9737, 14787, 9543, 14752, 9375, 14715, 9228, 14675, 8980, 14632, 8760, 14589, 8565, 14544, 8395, 14498, 8248, 14451, 8049, 14404, 7824, 14357, 7630, 15228, 11298, 15228, 11298, 15227, 11299, 15226, 11301, 15223, 11303, 15219, 11302, 15213, 11299, 15204, 11290, 15191, 11271, 15174, 11217, 15150, 11129, 15119, 11015, 15087, 10886, 15057, 10744, 15024, 10599, 14990, 10455, 14957, 10318, 14924, 10143, 14891, 9911, 14856, 9701, 14820, 9516, 14782, 9352, 14744, 9200, 14703, 8946, 14659, 8725, 14615, 8533, 14568, 8366, 14521, 8220, 14472, 7992, 14423, 7770, 14374, 7578, 14315, 7408, 15260, 10819, 15260, 10819, 15259, 10822, 15258, 10826, 15256, 10832, 15251, 10836, 15246, 10841, 15237, 10838, 15225, 10821, 15207, 10788, 15183, 10734, 15151, 10660, 15120, 10571, 15087, 10469, 15049, 10359, 15012, 10249, 14974, 10041, 14937, 9837, 14900, 9647, 14860, 9475, 14820, 9320, 14779, 9147, 14736, 8902, 14691, 8688, 14646, 8499, 14598, 8335, 14549, 8189, 14499, 7940, 14448, 7720, 14397, 7529, 14347, 7363, 14256, 7218, 15285, 10410, 15285, 10411, 15285, 10413, 15284, 10418, 15282, 10425, 15278, 10434, 15272, 10442, 15264, 10449, 15252, 10445, 15235, 10433, 15210, 10403, 15179, 10358, 15149, 10301, 15113, 10218, 15073, 10059, 15033, 9894, 14991, 9726, 14951, 9565, 14909, 9413, 14865, 9273, 14822, 9073, 14777, 8845, 14730, 8641, 14682, 8459, 14633, 8300, 14583, 8129, 14531, 7883, 14479, 7670, 14426, 7482, 14373, 7321, 14305, 7176, 14201, 6939, 15305, 9939, 15305, 9940, 15305, 9945, 15304, 9955, 15302, 9967, 15298, 9989, 15293, 10010, 15286, 10033, 15274, 10044, 15258, 10045, 15233, 10022, 15205, 9975, 15174, 9903, 15136, 9808, 15095, 9697, 15053, 9578, 15009, 9451, 14965, 9327, 14918, 9198, 14871, 8973, 14825, 8766, 14775, 8579, 14725, 8408, 14675, 8259, 14622, 8058, 14569, 7821, 14515, 7615, 14460, 7435, 14405, 7276, 14350, 7108, 14256, 6866, 14149, 6653, 15321, 9444, 15321, 9445, 15321, 9448, 15320, 9458, 15317, 9470, 15314, 9490, 15310, 9515, 15302, 9540, 15292, 9562, 15276, 9579, 15251, 9577, 15226, 9559, 15195, 9519, 15156, 9463, 15116, 9389, 15071, 9304, 15025, 9208, 14978, 9023, 14927, 8838, 14878, 8661, 14827, 8496, 14774, 8344, 14722, 8206, 14667, 7973, 14612, 7749, 14556, 7555, 14499, 7382, 14443, 7229, 14385, 7025, 14322, 6791, 14210, 6588, 14100, 6409, 15333, 8920, 15333, 8921, 15332, 8927, 15332, 8943, 15329, 8965, 15326, 9002, 15322, 9048, 15316, 9106, 15307, 9162, 15291, 9204, 15267, 9221, 15244, 9221, 15212, 9196, 15175, 9134, 15133, 9043, 15088, 8930, 15040, 8801, 14990, 8665, 14938, 8526, 14886, 8391, 14830, 8261, 14775, 8087, 14719, 7866, 14661, 7664, 14603, 7482, 14544, 7322, 14485, 7178, 14426, 6936, 14367, 6713, 14281, 6517, 14166, 6348, 14054, 6198, 15341, 8360, 15341, 8361, 15341, 8366, 15341, 8379, 15339, 8399, 15336, 8431, 15332, 8473, 15326, 8527, 15318, 8585, 15302, 8632, 15281, 8670, 15258, 8690, 15227, 8690, 15191, 8664, 15149, 8612, 15104, 8543, 15055, 8456, 15001, 8360, 14948, 8259, 14892, 8122, 14834, 7923, 14776, 7734, 14716, 7558, 14656, 7397, 14595, 7250, 14534, 7070, 14472, 6835, 14410, 6628, 14350, 6443, 14243, 6283, 14125, 6135, 14010, 5889, 15348, 7715, 15348, 7717, 15348, 7725, 15347, 7745, 15345, 7780, 15343, 7836, 15339, 7905, 15334, 8e3, 15326, 8103, 15310, 8193, 15293, 8239, 15270, 8270, 15240, 8287, 15204, 8283, 15163, 8260, 15118, 8223, 15067, 8143, 15014, 8014, 14958, 7873, 14899, 7723, 14839, 7573, 14778, 7430, 14715, 7293, 14652, 7164, 14588, 6931, 14524, 6720, 14460, 6531, 14396, 6362, 14330, 6210, 14207, 6015, 14086, 5781, 13969, 5576, 15352, 7114, 15352, 7116, 15352, 7128, 15352, 7159, 15350, 7195, 15348, 7237, 15345, 7299, 15340, 7374, 15332, 7457, 15317, 7544, 15301, 7633, 15280, 7703, 15251, 7754, 15216, 7775, 15176, 7767, 15131, 7733, 15079, 7670, 15026, 7588, 14967, 7492, 14906, 7387, 14844, 7278, 14779, 7171, 14714, 6965, 14648, 6770, 14581, 6587, 14515, 6420, 14448, 6269, 14382, 6123, 14299, 5881, 14172, 5665, 14049, 5477, 13929, 5310, 15355, 6329, 15355, 6330, 15355, 6339, 15355, 6362, 15353, 6410, 15351, 6472, 15349, 6572, 15344, 6688, 15337, 6835, 15323, 6985, 15309, 7142, 15287, 7220, 15260, 7277, 15226, 7310, 15188, 7326, 15142, 7318, 15090, 7285, 15036, 7239, 14976, 7177, 14914, 7045, 14849, 6892, 14782, 6736, 14714, 6581, 14645, 6433, 14576, 6293, 14506, 6164, 14438, 5946, 14369, 5733, 14270, 5540, 14140, 5369, 14014, 5216, 13892, 5043, 15357, 5483, 15357, 5484, 15357, 5496, 15357, 5528, 15356, 5597, 15354, 5692, 15351, 5835, 15347, 6011, 15339, 6195, 15328, 6317, 15314, 6446, 15293, 6566, 15268, 6668, 15235, 6746, 15197, 6796, 15152, 6811, 15101, 6790, 15046, 6748, 14985, 6673, 14921, 6583, 14854, 6479, 14785, 6371, 14714, 6259, 14643, 6149, 14571, 5946, 14499, 5750, 14428, 5567, 14358, 5401, 14242, 5250, 14109, 5111, 13980, 4870, 13856, 4657, 15359, 4555, 15359, 4557, 15358, 4573, 15358, 4633, 15357, 4715, 15355, 4841, 15353, 5061, 15349, 5216, 15342, 5391, 15331, 5577, 15318, 5770, 15299, 5967, 15274, 6150, 15243, 6223, 15206, 6280, 15161, 6310, 15111, 6317, 15055, 6300, 14994, 6262, 14928, 6208, 14860, 6141, 14788, 5994, 14715, 5838, 14641, 5684, 14566, 5529, 14492, 5384, 14418, 5247, 14346, 5121, 14216, 4892, 14079, 4682, 13948, 4496, 13822, 4330, 15359, 3498, 15359, 3501, 15359, 3520, 15359, 3598, 15358, 3719, 15356, 3860, 15355, 4137, 15351, 4305, 15344, 4563, 15334, 4809, 15321, 5116, 15303, 5273, 15280, 5418, 15250, 5547, 15214, 5653, 15170, 5722, 15120, 5761, 15064, 5763, 15002, 5733, 14935, 5673, 14865, 5597, 14792, 5504, 14716, 5400, 14640, 5294, 14563, 5185, 14486, 5041, 14410, 4841, 14335, 4655, 14191, 4482, 14051, 4325, 13918, 4183, 13790, 4012, 15360, 2282, 15360, 2285, 15360, 2306, 15360, 2401, 15359, 2547, 15357, 2748, 15355, 3103, 15352, 3349, 15345, 3675, 15336, 4020, 15324, 4272, 15307, 4496, 15285, 4716, 15255, 4908, 15220, 5086, 15178, 5170, 15128, 5214, 15072, 5234, 15010, 5231, 14943, 5206, 14871, 5166, 14796, 5102, 14718, 4971, 14639, 4833, 14559, 4687, 14480, 4541, 14402, 4401, 14315, 4268, 14167, 4142, 14025, 3958, 13888, 3747, 13759, 3556, 15360, 923, 15360, 925, 15360, 946, 15360, 1052, 15359, 1214, 15357, 1494, 15356, 1892, 15352, 2274, 15346, 2663, 15338, 3099, 15326, 3393, 15309, 3679, 15288, 3980, 15260, 4183, 15226, 4325, 15185, 4437, 15136, 4517, 15080, 4570, 15018, 4591, 14950, 4581, 14877, 4545, 14800, 4485, 14720, 4411, 14638, 4325, 14556, 4231, 14475, 4136, 14395, 3988, 14297, 3803, 14145, 3628, 13999, 3465, 13861, 3314, 13729, 3177, 15360, 263, 15360, 264, 15360, 272, 15360, 325, 15359, 407, 15358, 548, 15356, 780, 15352, 1144, 15347, 1580, 15339, 2099, 15328, 2425, 15312, 2795, 15292, 3133, 15264, 3329, 15232, 3517, 15191, 3689, 15143, 3819, 15088, 3923, 15025, 3978, 14956, 3999, 14882, 3979, 14804, 3931, 14722, 3855, 14639, 3756, 14554, 3645, 14470, 3529, 14388, 3409, 14279, 3289, 14124, 3173, 13975, 3055, 13834, 2848, 13701, 2658, 15360, 49, 15360, 49, 15360, 52, 15360, 75, 15359, 111, 15358, 201, 15356, 283, 15353, 519, 15348, 726, 15340, 1045, 15329, 1415, 15314, 1795, 15295, 2173, 15269, 2410, 15237, 2649, 15197, 2866, 15150, 3054, 15095, 3140, 15032, 3196, 14963, 3228, 14888, 3236, 14808, 3224, 14725, 3191, 14639, 3146, 14553, 3088, 14466, 2976, 14382, 2836, 14262, 2692, 14103, 2549, 13952, 2409, 13808, 2278, 13674, 2154, 15360, 4, 15360, 4, 15360, 4, 15360, 13, 15359, 33, 15358, 59, 15357, 112, 15353, 199, 15348, 302, 15341, 456, 15331, 628, 15316, 827, 15297, 1082, 15272, 1332, 15241, 1601, 15202, 1851, 15156, 2069, 15101, 2172, 15039, 2256, 14970, 2314, 14894, 2348, 14813, 2358, 14728, 2344, 14640, 2311, 14551, 2263, 14463, 2203, 14376, 2133, 14247, 2059, 14084, 1915, 13930, 1761, 13784, 1609, 13648, 1464, 15360, 0, 15360, 0, 15360, 0, 15360, 3, 15359, 18, 15358, 26, 15357, 53, 15354, 80, 15348, 97, 15341, 165, 15332, 238, 15318, 326, 15299, 427, 15275, 529, 15245, 654, 15207, 771, 15161, 885, 15108, 994, 15046, 1089, 14976, 1170, 14900, 1229, 14817, 1266, 14731, 1284, 14641, 1282, 14550, 1260, 14460, 1223, 14370, 1174, 14232, 1116, 14066, 1050, 13909, 981, 13761, 910, 13623, 839]);
let sn = null;
function bp() {
  return sn === null && (sn = new Mc(Mp, 32, 32, ta, ui), sn.minFilter = ze, sn.magFilter = ze, sn.wrapS = on, sn.wrapT = on, sn.generateMipmaps = false, sn.needsUpdate = true), sn;
}
class Sp {
  constructor(t = {}) {
    const { canvas: e = Xl(), context: n = null, depth: s = true, stencil: r = false, alpha: a = false, antialias: o = false, premultipliedAlpha: c = true, preserveDrawingBuffer: l = false, powerPreference: u = "default", failIfMajorPerformanceCaveat: d = false, reversedDepthBuffer: f = false } = t;
    this.isWebGLRenderer = true;
    let m;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      m = n.getContextAttributes().alpha;
    } else m = a;
    const _ = /* @__PURE__ */ new Set([na, ea, Qr]), v = /* @__PURE__ */ new Set([un, Fn, Ei, yi, Zr, Jr]), p = new Uint32Array(4), h = new Int32Array(4);
    let S = null, y = null;
    const A = [], P = [];
    this.domElement = e, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.toneMapping = En, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const T = this;
    let C = false;
    this._outputColorSpace = Oe;
    let z = 0, b = 0, M = null, D = -1, B = null;
    const k = new he(), q = new he();
    let W = null;
    const $ = new Bt(0);
    let J = 0, G = e.width, nt = e.height, rt = 1, bt = null, Ht = null;
    const Yt = new he(0, 0, G, nt), Jt = new he(0, 0, G, nt);
    let Qt = false;
    const X = new zo();
    let K = false, dt = false;
    const Lt = new ie(), gt = new N(), zt = new he(), xe = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let Ft = false;
    function ne() {
      return M === null ? rt : 1;
    }
    let w = n;
    function Vt(g, L) {
      return e.getContext(g, L);
    }
    try {
      const g = { alpha: true, depth: s, stencil: r, antialias: o, premultipliedAlpha: c, preserveDrawingBuffer: l, powerPreference: u, failIfMajorPerformanceCaveat: d };
      if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${jr}`), e.addEventListener("webglcontextlost", Q, false), e.addEventListener("webglcontextrestored", Y, false), e.addEventListener("webglcontextcreationerror", ft, false), w === null) {
        const L = "webgl2";
        if (w = Vt(L, g), w === null) throw Vt(L) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (g) {
      throw g("WebGLRenderer: " + g.message), g;
    }
    let kt, te, mt, se, Mt, Dt, E, x, I, H, j, V, _t, ot, St, xt, Z, et, At, yt, ht, Rt, R, lt;
    function it() {
      kt = new Cd(w), kt.init(), Rt = new dp(w, kt), te = new Md(w, kt, t, Rt), mt = new hp(w, kt), te.reversedDepthBuffer && f && mt.buffers.depth.setReversed(true), se = new Ld(w), Mt = new Zf(), Dt = new up(w, kt, mt, Mt, te, Rt, se), E = new Sd(T), x = new Rd(T), I = new Fc(w), R = new gd(w, I), H = new Pd(w, I, se, R), j = new Id(w, H, I, se), At = new Ud(w, te, Dt), xt = new bd(Mt), V = new Kf(T, E, x, kt, te, R, xt), _t = new gp(T, Mt), ot = new Qf(), St = new rp(kt), et = new _d(T, E, x, mt, j, m, c), Z = new lp(T, j, te), lt = new vp(w, se, te, mt), yt = new vd(w, kt, se), ht = new Dd(w, kt, se), se.programs = V.programs, T.capabilities = te, T.extensions = kt, T.properties = Mt, T.renderLists = ot, T.shadowMap = Z, T.state = mt, T.info = se;
    }
    it();
    const st = new xp(T, w);
    this.xr = st, this.getContext = function() {
      return w;
    }, this.getContextAttributes = function() {
      return w.getContextAttributes();
    }, this.forceContextLoss = function() {
      const g = kt.get("WEBGL_lose_context");
      g && g.loseContext();
    }, this.forceContextRestore = function() {
      const g = kt.get("WEBGL_lose_context");
      g && g.restoreContext();
    }, this.getPixelRatio = function() {
      return rt;
    }, this.setPixelRatio = function(g) {
      g !== void 0 && (rt = g, this.setSize(G, nt, false));
    }, this.getSize = function(g) {
      return g.set(G, nt);
    }, this.setSize = function(g, L, F = true) {
      if (st.isPresenting) {
        Ct("WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      G = g, nt = L, e.width = Math.floor(g * rt), e.height = Math.floor(L * rt), F === true && (e.style.width = g + "px", e.style.height = L + "px"), this.setViewport(0, 0, g, L);
    }, this.getDrawingBufferSize = function(g) {
      return g.set(G * rt, nt * rt).floor();
    }, this.setDrawingBufferSize = function(g, L, F) {
      G = g, nt = L, rt = F, e.width = Math.floor(g * F), e.height = Math.floor(L * F), this.setViewport(0, 0, g, L);
    }, this.getCurrentViewport = function(g) {
      return g.copy(k);
    }, this.getViewport = function(g) {
      return g.copy(Yt);
    }, this.setViewport = function(g, L, F, O) {
      g.isVector4 ? Yt.set(g.x, g.y, g.z, g.w) : Yt.set(g, L, F, O), mt.viewport(k.copy(Yt).multiplyScalar(rt).round());
    }, this.getScissor = function(g) {
      return g.copy(Jt);
    }, this.setScissor = function(g, L, F, O) {
      g.isVector4 ? Jt.set(g.x, g.y, g.z, g.w) : Jt.set(g, L, F, O), mt.scissor(q.copy(Jt).multiplyScalar(rt).round());
    }, this.getScissorTest = function() {
      return Qt;
    }, this.setScissorTest = function(g) {
      mt.setScissorTest(Qt = g);
    }, this.setOpaqueSort = function(g) {
      bt = g;
    }, this.setTransparentSort = function(g) {
      Ht = g;
    }, this.getClearColor = function(g) {
      return g.copy(et.getClearColor());
    }, this.setClearColor = function() {
      et.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return et.getClearAlpha();
    }, this.setClearAlpha = function() {
      et.setClearAlpha(...arguments);
    }, this.clear = function(g = true, L = true, F = true) {
      let O = 0;
      if (g) {
        let U = false;
        if (M !== null) {
          const tt = M.texture.format;
          U = _.has(tt);
        }
        if (U) {
          const tt = M.texture.type, ct = v.has(tt), pt = et.getClearColor(), ut = et.getClearAlpha(), Tt = pt.r, wt = pt.g, vt = pt.b;
          ct ? (p[0] = Tt, p[1] = wt, p[2] = vt, p[3] = ut, w.clearBufferuiv(w.COLOR, 0, p)) : (h[0] = Tt, h[1] = wt, h[2] = vt, h[3] = ut, w.clearBufferiv(w.COLOR, 0, h));
        } else O |= w.COLOR_BUFFER_BIT;
      }
      L && (O |= w.DEPTH_BUFFER_BIT), F && (O |= w.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), w.clear(O);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      e.removeEventListener("webglcontextlost", Q, false), e.removeEventListener("webglcontextrestored", Y, false), e.removeEventListener("webglcontextcreationerror", ft, false), et.dispose(), ot.dispose(), St.dispose(), Mt.dispose(), E.dispose(), x.dispose(), j.dispose(), R.dispose(), lt.dispose(), V.dispose(), st.dispose(), st.removeEventListener("sessionstart", aa), st.removeEventListener("sessionend", oa), Tn.stop();
    };
    function Q(g) {
      g.preventDefault(), ba("WebGLRenderer: Context Lost."), C = true;
    }
    function Y() {
      ba("WebGLRenderer: Context Restored."), C = false;
      const g = se.autoReset, L = Z.enabled, F = Z.autoUpdate, O = Z.needsUpdate, U = Z.type;
      it(), se.autoReset = g, Z.enabled = L, Z.autoUpdate = F, Z.needsUpdate = O, Z.type = U;
    }
    function ft(g) {
      ce("WebGLRenderer: A WebGL context could not be created. Reason: ", g.statusMessage);
    }
    function Pt(g) {
      const L = g.target;
      L.removeEventListener("dispose", Pt), ee(L);
    }
    function ee(g) {
      qt(g), Mt.remove(g);
    }
    function qt(g) {
      const L = Mt.get(g).programs;
      L !== void 0 && (L.forEach(function(F) {
        V.releaseProgram(F);
      }), g.isShaderMaterial && V.releaseShaderCache(g));
    }
    this.renderBufferDirect = function(g, L, F, O, U, tt) {
      L === null && (L = xe);
      const ct = U.isMesh && U.matrixWorld.determinant() < 0, pt = Zo(g, L, F, O, U);
      mt.setMaterial(O, ct);
      let ut = F.index, Tt = 1;
      if (O.wireframe === true) {
        if (ut = H.getWireframeAttribute(F), ut === void 0) return;
        Tt = 2;
      }
      const wt = F.drawRange, vt = F.attributes.position;
      let Gt = wt.start * Tt, $t = (wt.start + wt.count) * Tt;
      tt !== null && (Gt = Math.max(Gt, tt.start * Tt), $t = Math.min($t, (tt.start + tt.count) * Tt)), ut !== null ? (Gt = Math.max(Gt, 0), $t = Math.min($t, ut.count)) : vt != null && (Gt = Math.max(Gt, 0), $t = Math.min($t, vt.count));
      const oe = $t - Gt;
      if (oe < 0 || oe === 1 / 0) return;
      R.setup(U, O, pt, F, ut);
      let le, Zt = yt;
      if (ut !== null && (le = I.get(ut), Zt = ht, Zt.setIndex(le)), U.isMesh) O.wireframe === true ? (mt.setLineWidth(O.wireframeLinewidth * ne()), Zt.setMode(w.LINES)) : Zt.setMode(w.TRIANGLES);
      else if (U.isLine) {
        let Et = O.linewidth;
        Et === void 0 && (Et = 1), mt.setLineWidth(Et * ne()), U.isLineSegments ? Zt.setMode(w.LINES) : U.isLineLoop ? Zt.setMode(w.LINE_LOOP) : Zt.setMode(w.LINE_STRIP);
      } else U.isPoints ? Zt.setMode(w.POINTS) : U.isSprite && Zt.setMode(w.TRIANGLES);
      if (U.isBatchedMesh) if (U._multiDrawInstances !== null) wi("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), Zt.renderMultiDrawInstances(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount, U._multiDrawInstances);
      else if (kt.get("WEBGL_multi_draw")) Zt.renderMultiDraw(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount);
      else {
        const Et = U._multiDrawStarts, re = U._multiDrawCounts, Wt = U._multiDrawCount, Ce = ut ? I.get(ut).bytesPerElement : 1, Vn = Mt.get(O).currentProgram.getUniforms();
        for (let Pe = 0; Pe < Wt; Pe++) Vn.setValue(w, "_gl_DrawID", Pe), Zt.render(Et[Pe] / Ce, re[Pe]);
      }
      else if (U.isInstancedMesh) Zt.renderInstances(Gt, oe, U.count);
      else if (F.isInstancedBufferGeometry) {
        const Et = F._maxInstanceCount !== void 0 ? F._maxInstanceCount : 1 / 0, re = Math.min(F.instanceCount, Et);
        Zt.renderInstances(Gt, oe, re);
      } else Zt.render(Gt, oe);
    };
    function qe(g, L, F) {
      g.transparent === true && g.side === an && g.forceSinglePass === false ? (g.side = we, g.needsUpdate = true, Ii(g, L, F), g.side = yn, g.needsUpdate = true, Ii(g, L, F), g.side = an) : Ii(g, L, F);
    }
    this.compile = function(g, L, F = null) {
      F === null && (F = g), y = St.get(F), y.init(L), P.push(y), F.traverseVisible(function(U) {
        U.isLight && U.layers.test(L.layers) && (y.pushLight(U), U.castShadow && y.pushShadow(U));
      }), g !== F && g.traverseVisible(function(U) {
        U.isLight && U.layers.test(L.layers) && (y.pushLight(U), U.castShadow && y.pushShadow(U));
      }), y.setupLights();
      const O = /* @__PURE__ */ new Set();
      return g.traverse(function(U) {
        if (!(U.isMesh || U.isPoints || U.isLine || U.isSprite)) return;
        const tt = U.material;
        if (tt) if (Array.isArray(tt)) for (let ct = 0; ct < tt.length; ct++) {
          const pt = tt[ct];
          qe(pt, F, U), O.add(pt);
        }
        else qe(tt, F, U), O.add(tt);
      }), y = P.pop(), O;
    }, this.compileAsync = function(g, L, F = null) {
      const O = this.compile(g, L, F);
      return new Promise((U) => {
        function tt() {
          if (O.forEach(function(ct) {
            Mt.get(ct).currentProgram.isReady() && O.delete(ct);
          }), O.size === 0) {
            U(g);
            return;
          }
          setTimeout(tt, 10);
        }
        kt.get("KHR_parallel_shader_compile") !== null ? tt() : setTimeout(tt, 10);
      });
    };
    let ke = null;
    function Ko(g) {
      ke && ke(g);
    }
    function aa() {
      Tn.stop();
    }
    function oa() {
      Tn.start();
    }
    const Tn = new Wo();
    Tn.setAnimationLoop(Ko), typeof self < "u" && Tn.setContext(self), this.setAnimationLoop = function(g) {
      ke = g, st.setAnimationLoop(g), g === null ? Tn.stop() : Tn.start();
    }, st.addEventListener("sessionstart", aa), st.addEventListener("sessionend", oa), this.render = function(g, L) {
      if (L !== void 0 && L.isCamera !== true) {
        ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (C === true) return;
      if (g.matrixWorldAutoUpdate === true && g.updateMatrixWorld(), L.parent === null && L.matrixWorldAutoUpdate === true && L.updateMatrixWorld(), st.enabled === true && st.isPresenting === true && (st.cameraAutoUpdate === true && st.updateCamera(L), L = st.getCamera()), g.isScene === true && g.onBeforeRender(T, g, L, M), y = St.get(g, P.length), y.init(L), P.push(y), Lt.multiplyMatrices(L.projectionMatrix, L.matrixWorldInverse), X.setFromProjectionMatrix(Lt, je, L.reversedDepth), dt = this.localClippingEnabled, K = xt.init(this.clippingPlanes, dt), S = ot.get(g, A.length), S.init(), A.push(S), st.enabled === true && st.isPresenting === true) {
        const tt = T.xr.getDepthSensingMesh();
        tt !== null && ys(tt, L, -1 / 0, T.sortObjects);
      }
      ys(g, L, 0, T.sortObjects), S.finish(), T.sortObjects === true && S.sort(bt, Ht), Ft = st.enabled === false || st.isPresenting === false || st.hasDepthSensing() === false, Ft && et.addToRenderList(S, g), this.info.render.frame++, K === true && xt.beginShadows();
      const F = y.state.shadowsArray;
      Z.render(F, g, L), K === true && xt.endShadows(), this.info.autoReset === true && this.info.reset();
      const O = S.opaque, U = S.transmissive;
      if (y.setupLights(), L.isArrayCamera) {
        const tt = L.cameras;
        if (U.length > 0) for (let ct = 0, pt = tt.length; ct < pt; ct++) {
          const ut = tt[ct];
          ca(O, U, g, ut);
        }
        Ft && et.render(g);
        for (let ct = 0, pt = tt.length; ct < pt; ct++) {
          const ut = tt[ct];
          la(S, g, ut, ut.viewport);
        }
      } else U.length > 0 && ca(O, U, g, L), Ft && et.render(g), la(S, g, L);
      M !== null && b === 0 && (Dt.updateMultisampleRenderTarget(M), Dt.updateRenderTargetMipmap(M)), g.isScene === true && g.onAfterRender(T, g, L), R.resetDefaultState(), D = -1, B = null, P.pop(), P.length > 0 ? (y = P[P.length - 1], K === true && xt.setGlobalState(T.clippingPlanes, y.state.camera)) : y = null, A.pop(), A.length > 0 ? S = A[A.length - 1] : S = null;
    };
    function ys(g, L, F, O) {
      if (g.visible === false) return;
      if (g.layers.test(L.layers)) {
        if (g.isGroup) F = g.renderOrder;
        else if (g.isLOD) g.autoUpdate === true && g.update(L);
        else if (g.isLight) y.pushLight(g), g.castShadow && y.pushShadow(g);
        else if (g.isSprite) {
          if (!g.frustumCulled || X.intersectsSprite(g)) {
            O && zt.setFromMatrixPosition(g.matrixWorld).applyMatrix4(Lt);
            const ct = j.update(g), pt = g.material;
            pt.visible && S.push(g, ct, pt, F, zt.z, null);
          }
        } else if ((g.isMesh || g.isLine || g.isPoints) && (!g.frustumCulled || X.intersectsObject(g))) {
          const ct = j.update(g), pt = g.material;
          if (O && (g.boundingSphere !== void 0 ? (g.boundingSphere === null && g.computeBoundingSphere(), zt.copy(g.boundingSphere.center)) : (ct.boundingSphere === null && ct.computeBoundingSphere(), zt.copy(ct.boundingSphere.center)), zt.applyMatrix4(g.matrixWorld).applyMatrix4(Lt)), Array.isArray(pt)) {
            const ut = ct.groups;
            for (let Tt = 0, wt = ut.length; Tt < wt; Tt++) {
              const vt = ut[Tt], Gt = pt[vt.materialIndex];
              Gt && Gt.visible && S.push(g, ct, Gt, F, zt.z, vt);
            }
          } else pt.visible && S.push(g, ct, pt, F, zt.z, null);
        }
      }
      const tt = g.children;
      for (let ct = 0, pt = tt.length; ct < pt; ct++) ys(tt[ct], L, F, O);
    }
    function la(g, L, F, O) {
      const { opaque: U, transmissive: tt, transparent: ct } = g;
      y.setupLightsView(F), K === true && xt.setGlobalState(T.clippingPlanes, F), O && mt.viewport(k.copy(O)), U.length > 0 && Ui(U, L, F), tt.length > 0 && Ui(tt, L, F), ct.length > 0 && Ui(ct, L, F), mt.buffers.depth.setTest(true), mt.buffers.depth.setMask(true), mt.buffers.color.setMask(true), mt.setPolygonOffset(false);
    }
    function ca(g, L, F, O) {
      if ((F.isScene === true ? F.overrideMaterial : null) !== null) return;
      y.state.transmissionRenderTarget[O.id] === void 0 && (y.state.transmissionRenderTarget[O.id] = new Bn(1, 1, { generateMipmaps: true, type: kt.has("EXT_color_buffer_half_float") || kt.has("EXT_color_buffer_float") ? ui : un, minFilter: Nn, samples: 4, stencilBuffer: r, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: Xt.workingColorSpace }));
      const tt = y.state.transmissionRenderTarget[O.id], ct = O.viewport || k;
      tt.setSize(ct.z * T.transmissionResolutionScale, ct.w * T.transmissionResolutionScale);
      const pt = T.getRenderTarget(), ut = T.getActiveCubeFace(), Tt = T.getActiveMipmapLevel();
      T.setRenderTarget(tt), T.getClearColor($), J = T.getClearAlpha(), J < 1 && T.setClearColor(16777215, 0.5), T.clear(), Ft && et.render(F);
      const wt = T.toneMapping;
      T.toneMapping = En;
      const vt = O.viewport;
      if (O.viewport !== void 0 && (O.viewport = void 0), y.setupLightsView(O), K === true && xt.setGlobalState(T.clippingPlanes, O), Ui(g, F, O), Dt.updateMultisampleRenderTarget(tt), Dt.updateRenderTargetMipmap(tt), kt.has("WEBGL_multisampled_render_to_texture") === false) {
        let Gt = false;
        for (let $t = 0, oe = L.length; $t < oe; $t++) {
          const le = L[$t], { object: Zt, geometry: Et, material: re, group: Wt } = le;
          if (re.side === an && Zt.layers.test(O.layers)) {
            const Ce = re.side;
            re.side = we, re.needsUpdate = true, ha(Zt, F, O, Et, re, Wt), re.side = Ce, re.needsUpdate = true, Gt = true;
          }
        }
        Gt === true && (Dt.updateMultisampleRenderTarget(tt), Dt.updateRenderTargetMipmap(tt));
      }
      T.setRenderTarget(pt, ut, Tt), T.setClearColor($, J), vt !== void 0 && (O.viewport = vt), T.toneMapping = wt;
    }
    function Ui(g, L, F) {
      const O = L.isScene === true ? L.overrideMaterial : null;
      for (let U = 0, tt = g.length; U < tt; U++) {
        const ct = g[U], { object: pt, geometry: ut, group: Tt } = ct;
        let wt = ct.material;
        wt.allowOverride === true && O !== null && (wt = O), pt.layers.test(F.layers) && ha(pt, L, F, ut, wt, Tt);
      }
    }
    function ha(g, L, F, O, U, tt) {
      g.onBeforeRender(T, L, F, O, U, tt), g.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse, g.matrixWorld), g.normalMatrix.getNormalMatrix(g.modelViewMatrix), U.onBeforeRender(T, L, F, O, g, tt), U.transparent === true && U.side === an && U.forceSinglePass === false ? (U.side = we, U.needsUpdate = true, T.renderBufferDirect(F, L, O, U, g, tt), U.side = yn, U.needsUpdate = true, T.renderBufferDirect(F, L, O, U, g, tt), U.side = an) : T.renderBufferDirect(F, L, O, U, g, tt), g.onAfterRender(T, L, F, O, U, tt);
    }
    function Ii(g, L, F) {
      L.isScene !== true && (L = xe);
      const O = Mt.get(g), U = y.state.lights, tt = y.state.shadowsArray, ct = U.state.version, pt = V.getParameters(g, U.state, tt, L, F), ut = V.getProgramCacheKey(pt);
      let Tt = O.programs;
      O.environment = g.isMeshStandardMaterial ? L.environment : null, O.fog = L.fog, O.envMap = (g.isMeshStandardMaterial ? x : E).get(g.envMap || O.environment), O.envMapRotation = O.environment !== null && g.envMap === null ? L.environmentRotation : g.envMapRotation, Tt === void 0 && (g.addEventListener("dispose", Pt), Tt = /* @__PURE__ */ new Map(), O.programs = Tt);
      let wt = Tt.get(ut);
      if (wt !== void 0) {
        if (O.currentProgram === wt && O.lightsStateVersion === ct) return da(g, pt), wt;
      } else pt.uniforms = V.getUniforms(g), g.onBeforeCompile(pt, T), wt = V.acquireProgram(pt, ut), Tt.set(ut, wt), O.uniforms = pt.uniforms;
      const vt = O.uniforms;
      return (!g.isShaderMaterial && !g.isRawShaderMaterial || g.clipping === true) && (vt.clippingPlanes = xt.uniform), da(g, pt), O.needsLights = Qo(g), O.lightsStateVersion = ct, O.needsLights && (vt.ambientLightColor.value = U.state.ambient, vt.lightProbe.value = U.state.probe, vt.directionalLights.value = U.state.directional, vt.directionalLightShadows.value = U.state.directionalShadow, vt.spotLights.value = U.state.spot, vt.spotLightShadows.value = U.state.spotShadow, vt.rectAreaLights.value = U.state.rectArea, vt.ltc_1.value = U.state.rectAreaLTC1, vt.ltc_2.value = U.state.rectAreaLTC2, vt.pointLights.value = U.state.point, vt.pointLightShadows.value = U.state.pointShadow, vt.hemisphereLights.value = U.state.hemi, vt.directionalShadowMap.value = U.state.directionalShadowMap, vt.directionalShadowMatrix.value = U.state.directionalShadowMatrix, vt.spotShadowMap.value = U.state.spotShadowMap, vt.spotLightMatrix.value = U.state.spotLightMatrix, vt.spotLightMap.value = U.state.spotLightMap, vt.pointShadowMap.value = U.state.pointShadowMap, vt.pointShadowMatrix.value = U.state.pointShadowMatrix), O.currentProgram = wt, O.uniformsList = null, wt;
    }
    function ua(g) {
      if (g.uniformsList === null) {
        const L = g.currentProgram.getUniforms();
        g.uniformsList = us.seqWithValue(L.seq, g.uniforms);
      }
      return g.uniformsList;
    }
    function da(g, L) {
      const F = Mt.get(g);
      F.outputColorSpace = L.outputColorSpace, F.batching = L.batching, F.batchingColor = L.batchingColor, F.instancing = L.instancing, F.instancingColor = L.instancingColor, F.instancingMorph = L.instancingMorph, F.skinning = L.skinning, F.morphTargets = L.morphTargets, F.morphNormals = L.morphNormals, F.morphColors = L.morphColors, F.morphTargetsCount = L.morphTargetsCount, F.numClippingPlanes = L.numClippingPlanes, F.numIntersection = L.numClipIntersection, F.vertexAlphas = L.vertexAlphas, F.vertexTangents = L.vertexTangents, F.toneMapping = L.toneMapping;
    }
    function Zo(g, L, F, O, U) {
      L.isScene !== true && (L = xe), Dt.resetTextureUnits();
      const tt = L.fog, ct = O.isMeshStandardMaterial ? L.environment : null, pt = M === null ? T.outputColorSpace : M.isXRRenderTarget === true ? M.texture.colorSpace : ci, ut = (O.isMeshStandardMaterial ? x : E).get(O.envMap || ct), Tt = O.vertexColors === true && !!F.attributes.color && F.attributes.color.itemSize === 4, wt = !!F.attributes.tangent && (!!O.normalMap || O.anisotropy > 0), vt = !!F.morphAttributes.position, Gt = !!F.morphAttributes.normal, $t = !!F.morphAttributes.color;
      let oe = En;
      O.toneMapped && (M === null || M.isXRRenderTarget === true) && (oe = T.toneMapping);
      const le = F.morphAttributes.position || F.morphAttributes.normal || F.morphAttributes.color, Zt = le !== void 0 ? le.length : 0, Et = Mt.get(O), re = y.state.lights;
      if (K === true && (dt === true || g !== B)) {
        const Me = g === B && O.id === D;
        xt.setState(O, g, Me);
      }
      let Wt = false;
      O.version === Et.__version ? (Et.needsLights && Et.lightsStateVersion !== re.state.version || Et.outputColorSpace !== pt || U.isBatchedMesh && Et.batching === false || !U.isBatchedMesh && Et.batching === true || U.isBatchedMesh && Et.batchingColor === true && U.colorTexture === null || U.isBatchedMesh && Et.batchingColor === false && U.colorTexture !== null || U.isInstancedMesh && Et.instancing === false || !U.isInstancedMesh && Et.instancing === true || U.isSkinnedMesh && Et.skinning === false || !U.isSkinnedMesh && Et.skinning === true || U.isInstancedMesh && Et.instancingColor === true && U.instanceColor === null || U.isInstancedMesh && Et.instancingColor === false && U.instanceColor !== null || U.isInstancedMesh && Et.instancingMorph === true && U.morphTexture === null || U.isInstancedMesh && Et.instancingMorph === false && U.morphTexture !== null || Et.envMap !== ut || O.fog === true && Et.fog !== tt || Et.numClippingPlanes !== void 0 && (Et.numClippingPlanes !== xt.numPlanes || Et.numIntersection !== xt.numIntersection) || Et.vertexAlphas !== Tt || Et.vertexTangents !== wt || Et.morphTargets !== vt || Et.morphNormals !== Gt || Et.morphColors !== $t || Et.toneMapping !== oe || Et.morphTargetsCount !== Zt) && (Wt = true) : (Wt = true, Et.__version = O.version);
      let Ce = Et.currentProgram;
      Wt === true && (Ce = Ii(O, L, U));
      let Vn = false, Pe = false, pi = false;
      const ae = Ce.getUniforms(), Ee = Et.uniforms;
      if (mt.useProgram(Ce.program) && (Vn = true, Pe = true, pi = true), O.id !== D && (D = O.id, Pe = true), Vn || B !== g) {
        mt.buffers.depth.getReversed() && g.reversedDepth !== true && (g._reversedDepth = true, g.updateProjectionMatrix()), ae.setValue(w, "projectionMatrix", g.projectionMatrix), ae.setValue(w, "viewMatrix", g.matrixWorldInverse);
        const ye = ae.map.cameraPosition;
        ye !== void 0 && ye.setValue(w, gt.setFromMatrixPosition(g.matrixWorld)), te.logarithmicDepthBuffer && ae.setValue(w, "logDepthBufFC", 2 / (Math.log(g.far + 1) / Math.LN2)), (O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshLambertMaterial || O.isMeshBasicMaterial || O.isMeshStandardMaterial || O.isShaderMaterial) && ae.setValue(w, "isOrthographic", g.isOrthographicCamera === true), B !== g && (B = g, Pe = true, pi = true);
      }
      if (U.isSkinnedMesh) {
        ae.setOptional(w, U, "bindMatrix"), ae.setOptional(w, U, "bindMatrixInverse");
        const Me = U.skeleton;
        Me && (Me.boneTexture === null && Me.computeBoneTexture(), ae.setValue(w, "boneTexture", Me.boneTexture, Dt));
      }
      U.isBatchedMesh && (ae.setOptional(w, U, "batchingTexture"), ae.setValue(w, "batchingTexture", U._matricesTexture, Dt), ae.setOptional(w, U, "batchingIdTexture"), ae.setValue(w, "batchingIdTexture", U._indirectTexture, Dt), ae.setOptional(w, U, "batchingColorTexture"), U._colorsTexture !== null && ae.setValue(w, "batchingColorTexture", U._colorsTexture, Dt));
      const Ne = F.morphAttributes;
      if ((Ne.position !== void 0 || Ne.normal !== void 0 || Ne.color !== void 0) && At.update(U, F, Ce), (Pe || Et.receiveShadow !== U.receiveShadow) && (Et.receiveShadow = U.receiveShadow, ae.setValue(w, "receiveShadow", U.receiveShadow)), O.isMeshGouraudMaterial && O.envMap !== null && (Ee.envMap.value = ut, Ee.flipEnvMap.value = ut.isCubeTexture && ut.isRenderTargetTexture === false ? -1 : 1), O.isMeshStandardMaterial && O.envMap === null && L.environment !== null && (Ee.envMapIntensity.value = L.environmentIntensity), Ee.dfgLUT !== void 0 && (Ee.dfgLUT.value = bp()), Pe && (ae.setValue(w, "toneMappingExposure", T.toneMappingExposure), Et.needsLights && Jo(Ee, pi), tt && O.fog === true && _t.refreshFogUniforms(Ee, tt), _t.refreshMaterialUniforms(Ee, O, rt, nt, y.state.transmissionRenderTarget[g.id]), us.upload(w, ua(Et), Ee, Dt)), O.isShaderMaterial && O.uniformsNeedUpdate === true && (us.upload(w, ua(Et), Ee, Dt), O.uniformsNeedUpdate = false), O.isSpriteMaterial && ae.setValue(w, "center", U.center), ae.setValue(w, "modelViewMatrix", U.modelViewMatrix), ae.setValue(w, "normalMatrix", U.normalMatrix), ae.setValue(w, "modelMatrix", U.matrixWorld), O.isShaderMaterial || O.isRawShaderMaterial) {
        const Me = O.uniformsGroups;
        for (let ye = 0, Ts = Me.length; ye < Ts; ye++) {
          const An = Me[ye];
          lt.update(An, Ce), lt.bind(An, Ce);
        }
      }
      return Ce;
    }
    function Jo(g, L) {
      g.ambientLightColor.needsUpdate = L, g.lightProbe.needsUpdate = L, g.directionalLights.needsUpdate = L, g.directionalLightShadows.needsUpdate = L, g.pointLights.needsUpdate = L, g.pointLightShadows.needsUpdate = L, g.spotLights.needsUpdate = L, g.spotLightShadows.needsUpdate = L, g.rectAreaLights.needsUpdate = L, g.hemisphereLights.needsUpdate = L;
    }
    function Qo(g) {
      return g.isMeshLambertMaterial || g.isMeshToonMaterial || g.isMeshPhongMaterial || g.isMeshStandardMaterial || g.isShadowMaterial || g.isShaderMaterial && g.lights === true;
    }
    this.getActiveCubeFace = function() {
      return z;
    }, this.getActiveMipmapLevel = function() {
      return b;
    }, this.getRenderTarget = function() {
      return M;
    }, this.setRenderTargetTextures = function(g, L, F) {
      const O = Mt.get(g);
      O.__autoAllocateDepthBuffer = g.resolveDepthBuffer === false, O.__autoAllocateDepthBuffer === false && (O.__useRenderToTexture = false), Mt.get(g.texture).__webglTexture = L, Mt.get(g.depthTexture).__webglTexture = O.__autoAllocateDepthBuffer ? void 0 : F, O.__hasExternalTextures = true;
    }, this.setRenderTargetFramebuffer = function(g, L) {
      const F = Mt.get(g);
      F.__webglFramebuffer = L, F.__useDefaultFramebuffer = L === void 0;
    };
    const tl = w.createFramebuffer();
    this.setRenderTarget = function(g, L = 0, F = 0) {
      M = g, z = L, b = F;
      let O = true, U = null, tt = false, ct = false;
      if (g) {
        const ut = Mt.get(g);
        if (ut.__useDefaultFramebuffer !== void 0) mt.bindFramebuffer(w.FRAMEBUFFER, null), O = false;
        else if (ut.__webglFramebuffer === void 0) Dt.setupRenderTarget(g);
        else if (ut.__hasExternalTextures) Dt.rebindTextures(g, Mt.get(g.texture).__webglTexture, Mt.get(g.depthTexture).__webglTexture);
        else if (g.depthBuffer) {
          const vt = g.depthTexture;
          if (ut.__boundDepthTexture !== vt) {
            if (vt !== null && Mt.has(vt) && (g.width !== vt.image.width || g.height !== vt.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            Dt.setupDepthRenderbuffer(g);
          }
        }
        const Tt = g.texture;
        (Tt.isData3DTexture || Tt.isDataArrayTexture || Tt.isCompressedArrayTexture) && (ct = true);
        const wt = Mt.get(g).__webglFramebuffer;
        g.isWebGLCubeRenderTarget ? (Array.isArray(wt[L]) ? U = wt[L][F] : U = wt[L], tt = true) : g.samples > 0 && Dt.useMultisampledRTT(g) === false ? U = Mt.get(g).__webglMultisampledFramebuffer : Array.isArray(wt) ? U = wt[F] : U = wt, k.copy(g.viewport), q.copy(g.scissor), W = g.scissorTest;
      } else k.copy(Yt).multiplyScalar(rt).floor(), q.copy(Jt).multiplyScalar(rt).floor(), W = Qt;
      if (F !== 0 && (U = tl), mt.bindFramebuffer(w.FRAMEBUFFER, U) && O && mt.drawBuffers(g, U), mt.viewport(k), mt.scissor(q), mt.setScissorTest(W), tt) {
        const ut = Mt.get(g.texture);
        w.framebufferTexture2D(w.FRAMEBUFFER, w.COLOR_ATTACHMENT0, w.TEXTURE_CUBE_MAP_POSITIVE_X + L, ut.__webglTexture, F);
      } else if (ct) {
        const ut = L;
        for (let Tt = 0; Tt < g.textures.length; Tt++) {
          const wt = Mt.get(g.textures[Tt]);
          w.framebufferTextureLayer(w.FRAMEBUFFER, w.COLOR_ATTACHMENT0 + Tt, wt.__webglTexture, F, ut);
        }
      } else if (g !== null && F !== 0) {
        const ut = Mt.get(g.texture);
        w.framebufferTexture2D(w.FRAMEBUFFER, w.COLOR_ATTACHMENT0, w.TEXTURE_2D, ut.__webglTexture, F);
      }
      D = -1;
    }, this.readRenderTargetPixels = function(g, L, F, O, U, tt, ct, pt = 0) {
      if (!(g && g.isWebGLRenderTarget)) {
        ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ut = Mt.get(g).__webglFramebuffer;
      if (g.isWebGLCubeRenderTarget && ct !== void 0 && (ut = ut[ct]), ut) {
        mt.bindFramebuffer(w.FRAMEBUFFER, ut);
        try {
          const Tt = g.textures[pt], wt = Tt.format, vt = Tt.type;
          if (!te.textureFormatReadable(wt)) {
            ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!te.textureTypeReadable(vt)) {
            ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          L >= 0 && L <= g.width - O && F >= 0 && F <= g.height - U && (g.textures.length > 1 && w.readBuffer(w.COLOR_ATTACHMENT0 + pt), w.readPixels(L, F, O, U, Rt.convert(wt), Rt.convert(vt), tt));
        } finally {
          const Tt = M !== null ? Mt.get(M).__webglFramebuffer : null;
          mt.bindFramebuffer(w.FRAMEBUFFER, Tt);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(g, L, F, O, U, tt, ct, pt = 0) {
      if (!(g && g.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ut = Mt.get(g).__webglFramebuffer;
      if (g.isWebGLCubeRenderTarget && ct !== void 0 && (ut = ut[ct]), ut) if (L >= 0 && L <= g.width - O && F >= 0 && F <= g.height - U) {
        mt.bindFramebuffer(w.FRAMEBUFFER, ut);
        const Tt = g.textures[pt], wt = Tt.format, vt = Tt.type;
        if (!te.textureFormatReadable(wt)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!te.textureTypeReadable(vt)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        const Gt = w.createBuffer();
        w.bindBuffer(w.PIXEL_PACK_BUFFER, Gt), w.bufferData(w.PIXEL_PACK_BUFFER, tt.byteLength, w.STREAM_READ), g.textures.length > 1 && w.readBuffer(w.COLOR_ATTACHMENT0 + pt), w.readPixels(L, F, O, U, Rt.convert(wt), Rt.convert(vt), 0);
        const $t = M !== null ? Mt.get(M).__webglFramebuffer : null;
        mt.bindFramebuffer(w.FRAMEBUFFER, $t);
        const oe = w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return w.flush(), await Yl(w, oe, 4), w.bindBuffer(w.PIXEL_PACK_BUFFER, Gt), w.getBufferSubData(w.PIXEL_PACK_BUFFER, 0, tt), w.deleteBuffer(Gt), w.deleteSync(oe), tt;
      } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(g, L = null, F = 0) {
      const O = Math.pow(2, -F), U = Math.floor(g.image.width * O), tt = Math.floor(g.image.height * O), ct = L !== null ? L.x : 0, pt = L !== null ? L.y : 0;
      Dt.setTexture2D(g, 0), w.copyTexSubImage2D(w.TEXTURE_2D, F, 0, 0, ct, pt, U, tt), mt.unbindTexture();
    };
    const el = w.createFramebuffer(), nl = w.createFramebuffer();
    this.copyTextureToTexture = function(g, L, F = null, O = null, U = 0, tt = null) {
      tt === null && (U !== 0 ? (wi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), tt = U, U = 0) : tt = 0);
      let ct, pt, ut, Tt, wt, vt, Gt, $t, oe;
      const le = g.isCompressedTexture ? g.mipmaps[tt] : g.image;
      if (F !== null) ct = F.max.x - F.min.x, pt = F.max.y - F.min.y, ut = F.isBox3 ? F.max.z - F.min.z : 1, Tt = F.min.x, wt = F.min.y, vt = F.isBox3 ? F.min.z : 0;
      else {
        const Ne = Math.pow(2, -U);
        ct = Math.floor(le.width * Ne), pt = Math.floor(le.height * Ne), g.isDataArrayTexture ? ut = le.depth : g.isData3DTexture ? ut = Math.floor(le.depth * Ne) : ut = 1, Tt = 0, wt = 0, vt = 0;
      }
      O !== null ? (Gt = O.x, $t = O.y, oe = O.z) : (Gt = 0, $t = 0, oe = 0);
      const Zt = Rt.convert(L.format), Et = Rt.convert(L.type);
      let re;
      L.isData3DTexture ? (Dt.setTexture3D(L, 0), re = w.TEXTURE_3D) : L.isDataArrayTexture || L.isCompressedArrayTexture ? (Dt.setTexture2DArray(L, 0), re = w.TEXTURE_2D_ARRAY) : (Dt.setTexture2D(L, 0), re = w.TEXTURE_2D), w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL, L.flipY), w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL, L.premultiplyAlpha), w.pixelStorei(w.UNPACK_ALIGNMENT, L.unpackAlignment);
      const Wt = w.getParameter(w.UNPACK_ROW_LENGTH), Ce = w.getParameter(w.UNPACK_IMAGE_HEIGHT), Vn = w.getParameter(w.UNPACK_SKIP_PIXELS), Pe = w.getParameter(w.UNPACK_SKIP_ROWS), pi = w.getParameter(w.UNPACK_SKIP_IMAGES);
      w.pixelStorei(w.UNPACK_ROW_LENGTH, le.width), w.pixelStorei(w.UNPACK_IMAGE_HEIGHT, le.height), w.pixelStorei(w.UNPACK_SKIP_PIXELS, Tt), w.pixelStorei(w.UNPACK_SKIP_ROWS, wt), w.pixelStorei(w.UNPACK_SKIP_IMAGES, vt);
      const ae = g.isDataArrayTexture || g.isData3DTexture, Ee = L.isDataArrayTexture || L.isData3DTexture;
      if (g.isDepthTexture) {
        const Ne = Mt.get(g), Me = Mt.get(L), ye = Mt.get(Ne.__renderTarget), Ts = Mt.get(Me.__renderTarget);
        mt.bindFramebuffer(w.READ_FRAMEBUFFER, ye.__webglFramebuffer), mt.bindFramebuffer(w.DRAW_FRAMEBUFFER, Ts.__webglFramebuffer);
        for (let An = 0; An < ut; An++) ae && (w.framebufferTextureLayer(w.READ_FRAMEBUFFER, w.COLOR_ATTACHMENT0, Mt.get(g).__webglTexture, U, vt + An), w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER, w.COLOR_ATTACHMENT0, Mt.get(L).__webglTexture, tt, oe + An)), w.blitFramebuffer(Tt, wt, ct, pt, Gt, $t, ct, pt, w.DEPTH_BUFFER_BIT, w.NEAREST);
        mt.bindFramebuffer(w.READ_FRAMEBUFFER, null), mt.bindFramebuffer(w.DRAW_FRAMEBUFFER, null);
      } else if (U !== 0 || g.isRenderTargetTexture || Mt.has(g)) {
        const Ne = Mt.get(g), Me = Mt.get(L);
        mt.bindFramebuffer(w.READ_FRAMEBUFFER, el), mt.bindFramebuffer(w.DRAW_FRAMEBUFFER, nl);
        for (let ye = 0; ye < ut; ye++) ae ? w.framebufferTextureLayer(w.READ_FRAMEBUFFER, w.COLOR_ATTACHMENT0, Ne.__webglTexture, U, vt + ye) : w.framebufferTexture2D(w.READ_FRAMEBUFFER, w.COLOR_ATTACHMENT0, w.TEXTURE_2D, Ne.__webglTexture, U), Ee ? w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER, w.COLOR_ATTACHMENT0, Me.__webglTexture, tt, oe + ye) : w.framebufferTexture2D(w.DRAW_FRAMEBUFFER, w.COLOR_ATTACHMENT0, w.TEXTURE_2D, Me.__webglTexture, tt), U !== 0 ? w.blitFramebuffer(Tt, wt, ct, pt, Gt, $t, ct, pt, w.COLOR_BUFFER_BIT, w.NEAREST) : Ee ? w.copyTexSubImage3D(re, tt, Gt, $t, oe + ye, Tt, wt, ct, pt) : w.copyTexSubImage2D(re, tt, Gt, $t, Tt, wt, ct, pt);
        mt.bindFramebuffer(w.READ_FRAMEBUFFER, null), mt.bindFramebuffer(w.DRAW_FRAMEBUFFER, null);
      } else Ee ? g.isDataTexture || g.isData3DTexture ? w.texSubImage3D(re, tt, Gt, $t, oe, ct, pt, ut, Zt, Et, le.data) : L.isCompressedArrayTexture ? w.compressedTexSubImage3D(re, tt, Gt, $t, oe, ct, pt, ut, Zt, le.data) : w.texSubImage3D(re, tt, Gt, $t, oe, ct, pt, ut, Zt, Et, le) : g.isDataTexture ? w.texSubImage2D(w.TEXTURE_2D, tt, Gt, $t, ct, pt, Zt, Et, le.data) : g.isCompressedTexture ? w.compressedTexSubImage2D(w.TEXTURE_2D, tt, Gt, $t, le.width, le.height, Zt, le.data) : w.texSubImage2D(w.TEXTURE_2D, tt, Gt, $t, ct, pt, Zt, Et, le);
      w.pixelStorei(w.UNPACK_ROW_LENGTH, Wt), w.pixelStorei(w.UNPACK_IMAGE_HEIGHT, Ce), w.pixelStorei(w.UNPACK_SKIP_PIXELS, Vn), w.pixelStorei(w.UNPACK_SKIP_ROWS, Pe), w.pixelStorei(w.UNPACK_SKIP_IMAGES, pi), tt === 0 && L.generateMipmaps && w.generateMipmap(re), mt.unbindTexture();
    }, this.initRenderTarget = function(g) {
      Mt.get(g).__webglFramebuffer === void 0 && Dt.setupRenderTarget(g);
    }, this.initTexture = function(g) {
      g.isCubeTexture ? Dt.setTextureCube(g, 0) : g.isData3DTexture ? Dt.setTexture3D(g, 0) : g.isDataArrayTexture || g.isCompressedArrayTexture ? Dt.setTexture2DArray(g, 0) : Dt.setTexture2D(g, 0), mt.unbindTexture();
    }, this.resetState = function() {
      z = 0, b = 0, M = null, mt.reset(), R.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return je;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(t) {
    this._outputColorSpace = t;
    const e = this.getContext();
    e.drawingBufferColorSpace = Xt._getDrawingBufferColorSpace(t), e.unpackColorSpace = Xt._getUnpackColorSpace();
  }
}
const xo = { type: "change" }, sa = { type: "start" }, jo = { type: "end" }, rs = new Ms(), _o = new Mn(), Ep = Math.cos(70 * $l.DEG2RAD), de = new N(), Ae = 2 * Math.PI, Kt = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, nr = 1e-6;
class yp extends Ic {
  constructor(t, e = null) {
    super(t, e), this.state = Kt.NONE, this.target = new N(), this.cursor = new N(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: ii.ROTATE, MIDDLE: ii.DOLLY, RIGHT: ii.PAN }, this.touches = { ONE: ei.ROTATE, TWO: ei.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new N(), this._lastQuaternion = new On(), this._lastTargetPosition = new N(), this._quat = new On().setFromUnitVectors(t.up, new N(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Wa(), this._sphericalDelta = new Wa(), this._scale = 1, this._panOffset = new N(), this._rotateStart = new Nt(), this._rotateEnd = new Nt(), this._rotateDelta = new Nt(), this._panStart = new Nt(), this._panEnd = new Nt(), this._panDelta = new Nt(), this._dollyStart = new Nt(), this._dollyEnd = new Nt(), this._dollyDelta = new Nt(), this._dollyDirection = new N(), this._mouse = new Nt(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = Ap.bind(this), this._onPointerDown = Tp.bind(this), this._onPointerUp = wp.bind(this), this._onContextMenu = Ip.bind(this), this._onMouseWheel = Pp.bind(this), this._onKeyDown = Dp.bind(this), this._onTouchStart = Lp.bind(this), this._onTouchMove = Up.bind(this), this._onMouseDown = Rp.bind(this), this._onMouseMove = Cp.bind(this), this._interceptControlDown = Np.bind(this), this._interceptControlUp = Fp.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
  }
  connect(t) {
    super.connect(t), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: false }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: true, capture: true }), this.domElement.style.touchAction = "none";
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
  listenToKeyEvents(t) {
    t.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = t;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(xo), this.update(), this.state = Kt.NONE;
  }
  update(t = null) {
    const e = this.object.position;
    de.copy(e).sub(this.target), de.applyQuaternion(this._quat), this._spherical.setFromVector3(de), this.autoRotate && this.state === Kt.NONE && this._rotateLeft(this._getAutoRotationAngle(t)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, s = this.maxAzimuthAngle;
    isFinite(n) && isFinite(s) && (n < -Math.PI ? n += Ae : n > Math.PI && (n -= Ae), s < -Math.PI ? s += Ae : s > Math.PI && (s -= Ae), n <= s ? this._spherical.theta = Math.max(n, Math.min(s, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + s) / 2 ? Math.max(n, this._spherical.theta) : Math.min(s, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = a != this._spherical.radius;
    }
    if (de.setFromSpherical(this._spherical), de.applyQuaternion(this._quatInverse), e.copy(this.target).add(de), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const o = de.length();
        a = this._clampDistance(o * this._scale);
        const c = o - a;
        this.object.position.addScaledVector(this._dollyDirection, c), this.object.updateMatrixWorld(), r = !!c;
      } else if (this.object.isOrthographicCamera) {
        const o = new N(this._mouse.x, this._mouse.y, 0);
        o.unproject(this.object);
        const c = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = c !== this.object.zoom;
        const l = new N(this._mouse.x, this._mouse.y, 0);
        l.unproject(this.object), this.object.position.sub(l).add(o), this.object.updateMatrixWorld(), a = de.length();
      } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
      a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (rs.origin.copy(this.object.position), rs.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(rs.direction)) < Ep ? this.object.lookAt(this.target) : (_o.setFromNormalAndCoplanarPoint(this.object.up, this.target), rs.intersectPlane(_o, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), a !== this.object.zoom && (this.object.updateProjectionMatrix(), r = true);
    }
    return this._scale = 1, this._performCursorZoom = false, r || this._lastPosition.distanceToSquared(this.object.position) > nr || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > nr || this._lastTargetPosition.distanceToSquared(this.target) > nr ? (this.dispatchEvent(xo), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
  }
  _getAutoRotationAngle(t) {
    return t !== null ? Ae / 60 * this.autoRotateSpeed * t : Ae / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(t) {
    const e = Math.abs(t * 0.01);
    return Math.pow(0.95, this.zoomSpeed * e);
  }
  _rotateLeft(t) {
    this._sphericalDelta.theta -= t;
  }
  _rotateUp(t) {
    this._sphericalDelta.phi -= t;
  }
  _panLeft(t, e) {
    de.setFromMatrixColumn(e, 0), de.multiplyScalar(-t), this._panOffset.add(de);
  }
  _panUp(t, e) {
    this.screenSpacePanning === true ? de.setFromMatrixColumn(e, 1) : (de.setFromMatrixColumn(e, 0), de.crossVectors(this.object.up, de)), de.multiplyScalar(t), this._panOffset.add(de);
  }
  _pan(t, e) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const s = this.object.position;
      de.copy(s).sub(this.target);
      let r = de.length();
      r *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * t * r / n.clientHeight, this.object.matrix), this._panUp(2 * e * r / n.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(t * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(e * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = false);
  }
  _dollyOut(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _dollyIn(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _updateZoomParameters(t, e) {
    if (!this.zoomToCursor) return;
    this._performCursorZoom = true;
    const n = this.domElement.getBoundingClientRect(), s = t - n.left, r = e - n.top, a = n.width, o = n.height;
    this._mouse.x = s / a * 2 - 1, this._mouse.y = -(r / o) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(t) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, t));
  }
  _handleMouseDownRotate(t) {
    this._rotateStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownDolly(t) {
    this._updateZoomParameters(t.clientX, t.clientX), this._dollyStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownPan(t) {
    this._panStart.set(t.clientX, t.clientY);
  }
  _handleMouseMoveRotate(t) {
    this._rotateEnd.set(t.clientX, t.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(Ae * this._rotateDelta.x / e.clientHeight), this._rotateUp(Ae * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(t) {
    this._dollyEnd.set(t.clientX, t.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(t) {
    this._panEnd.set(t.clientX, t.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(t) {
    this._updateZoomParameters(t.clientX, t.clientY), t.deltaY < 0 ? this._dollyIn(this._getZoomScale(t.deltaY)) : t.deltaY > 0 && this._dollyOut(this._getZoomScale(t.deltaY)), this.update();
  }
  _handleKeyDown(t) {
    let e = false;
    switch (t.code) {
      case this.keys.UP:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(Ae * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), e = true;
        break;
      case this.keys.BOTTOM:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(-Ae * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), e = true;
        break;
      case this.keys.LEFT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(Ae * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), e = true;
        break;
      case this.keys.RIGHT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(-Ae * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), e = true;
        break;
    }
    e && (t.preventDefault(), this.update());
  }
  _handleTouchStartRotate(t) {
    if (this._pointers.length === 1) this._rotateStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), s = 0.5 * (t.pageY + e.y);
      this._rotateStart.set(n, s);
    }
  }
  _handleTouchStartPan(t) {
    if (this._pointers.length === 1) this._panStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), s = 0.5 * (t.pageY + e.y);
      this._panStart.set(n, s);
    }
  }
  _handleTouchStartDolly(t) {
    const e = this._getSecondPointerPosition(t), n = t.pageX - e.x, s = t.pageY - e.y, r = Math.sqrt(n * n + s * s);
    this._dollyStart.set(0, r);
  }
  _handleTouchStartDollyPan(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enablePan && this._handleTouchStartPan(t);
  }
  _handleTouchStartDollyRotate(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enableRotate && this._handleTouchStartRotate(t);
  }
  _handleTouchMoveRotate(t) {
    if (this._pointers.length == 1) this._rotateEnd.set(t.pageX, t.pageY);
    else {
      const n = this._getSecondPointerPosition(t), s = 0.5 * (t.pageX + n.x), r = 0.5 * (t.pageY + n.y);
      this._rotateEnd.set(s, r);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(Ae * this._rotateDelta.x / e.clientHeight), this._rotateUp(Ae * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(t) {
    if (this._pointers.length === 1) this._panEnd.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), s = 0.5 * (t.pageY + e.y);
      this._panEnd.set(n, s);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(t) {
    const e = this._getSecondPointerPosition(t), n = t.pageX - e.x, s = t.pageY - e.y, r = Math.sqrt(n * n + s * s);
    this._dollyEnd.set(0, r), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const a = (t.pageX + e.x) * 0.5, o = (t.pageY + e.y) * 0.5;
    this._updateZoomParameters(a, o);
  }
  _handleTouchMoveDollyPan(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enablePan && this._handleTouchMovePan(t);
  }
  _handleTouchMoveDollyRotate(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enableRotate && this._handleTouchMoveRotate(t);
  }
  _addPointer(t) {
    this._pointers.push(t.pointerId);
  }
  _removePointer(t) {
    delete this._pointerPositions[t.pointerId];
    for (let e = 0; e < this._pointers.length; e++) if (this._pointers[e] == t.pointerId) {
      this._pointers.splice(e, 1);
      return;
    }
  }
  _isTrackingPointer(t) {
    for (let e = 0; e < this._pointers.length; e++) if (this._pointers[e] == t.pointerId) return true;
    return false;
  }
  _trackPointer(t) {
    let e = this._pointerPositions[t.pointerId];
    e === void 0 && (e = new Nt(), this._pointerPositions[t.pointerId] = e), e.set(t.pageX, t.pageY);
  }
  _getSecondPointerPosition(t) {
    const e = t.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[e];
  }
  _customWheelEvent(t) {
    const e = t.deltaMode, n = { clientX: t.clientX, clientY: t.clientY, deltaY: t.deltaY };
    switch (e) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
        break;
    }
    return t.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
  }
}
function Tp(i) {
  this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(i.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(i) && (this._addPointer(i), i.pointerType === "touch" ? this._onTouchStart(i) : this._onMouseDown(i)));
}
function Ap(i) {
  this.enabled !== false && (i.pointerType === "touch" ? this._onTouchMove(i) : this._onMouseMove(i));
}
function wp(i) {
  switch (this._removePointer(i), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(i.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(jo), this.state = Kt.NONE;
      break;
    case 1:
      const t = this._pointers[0], e = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: e.x, pageY: e.y });
      break;
  }
}
function Rp(i) {
  let t;
  switch (i.button) {
    case 0:
      t = this.mouseButtons.LEFT;
      break;
    case 1:
      t = this.mouseButtons.MIDDLE;
      break;
    case 2:
      t = this.mouseButtons.RIGHT;
      break;
    default:
      t = -1;
  }
  switch (t) {
    case ii.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseDownDolly(i), this.state = Kt.DOLLY;
      break;
    case ii.ROTATE:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(i), this.state = Kt.PAN;
      } else {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(i), this.state = Kt.ROTATE;
      }
      break;
    case ii.PAN:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(i), this.state = Kt.ROTATE;
      } else {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(i), this.state = Kt.PAN;
      }
      break;
    default:
      this.state = Kt.NONE;
  }
  this.state !== Kt.NONE && this.dispatchEvent(sa);
}
function Cp(i) {
  switch (this.state) {
    case Kt.ROTATE:
      if (this.enableRotate === false) return;
      this._handleMouseMoveRotate(i);
      break;
    case Kt.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseMoveDolly(i);
      break;
    case Kt.PAN:
      if (this.enablePan === false) return;
      this._handleMouseMovePan(i);
      break;
  }
}
function Pp(i) {
  this.enabled === false || this.enableZoom === false || this.state !== Kt.NONE || (i.preventDefault(), this.dispatchEvent(sa), this._handleMouseWheel(this._customWheelEvent(i)), this.dispatchEvent(jo));
}
function Dp(i) {
  this.enabled !== false && this._handleKeyDown(i);
}
function Lp(i) {
  switch (this._trackPointer(i), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case ei.ROTATE:
          if (this.enableRotate === false) return;
          this._handleTouchStartRotate(i), this.state = Kt.TOUCH_ROTATE;
          break;
        case ei.PAN:
          if (this.enablePan === false) return;
          this._handleTouchStartPan(i), this.state = Kt.TOUCH_PAN;
          break;
        default:
          this.state = Kt.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case ei.DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;
          this._handleTouchStartDollyPan(i), this.state = Kt.TOUCH_DOLLY_PAN;
          break;
        case ei.DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;
          this._handleTouchStartDollyRotate(i), this.state = Kt.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = Kt.NONE;
      }
      break;
    default:
      this.state = Kt.NONE;
  }
  this.state !== Kt.NONE && this.dispatchEvent(sa);
}
function Up(i) {
  switch (this._trackPointer(i), this.state) {
    case Kt.TOUCH_ROTATE:
      if (this.enableRotate === false) return;
      this._handleTouchMoveRotate(i), this.update();
      break;
    case Kt.TOUCH_PAN:
      if (this.enablePan === false) return;
      this._handleTouchMovePan(i), this.update();
      break;
    case Kt.TOUCH_DOLLY_PAN:
      if (this.enableZoom === false && this.enablePan === false) return;
      this._handleTouchMoveDollyPan(i), this.update();
      break;
    case Kt.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === false && this.enableRotate === false) return;
      this._handleTouchMoveDollyRotate(i), this.update();
      break;
    default:
      this.state = Kt.NONE;
  }
}
function Ip(i) {
  this.enabled !== false && i.preventDefault();
}
function Np(i) {
  i.key === "Control" && (this._controlActive = true, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function Fp(i) {
  i.key === "Control" && (this._controlActive = false, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
/**
* lil-gui
* https://lil-gui.georgealways.com
* @version 0.21.0
* @author George Michael Brower
* @license MIT
*/
class Ke {
  constructor(t, e, n, s, r = "div") {
    this.parent = t, this.object = e, this.property = n, this._disabled = false, this._hidden = false, this.initialValue = this.getValue(), this.domElement = document.createElement(r), this.domElement.classList.add("lil-controller"), this.domElement.classList.add(s), this.$name = document.createElement("div"), this.$name.classList.add("lil-name"), Ke.nextNameID = Ke.nextNameID || 0, this.$name.id = `lil-gui-name-${++Ke.nextNameID}`, this.$widget = document.createElement("div"), this.$widget.classList.add("lil-widget"), this.$disable = this.$widget, this.domElement.appendChild(this.$name), this.domElement.appendChild(this.$widget), this.domElement.addEventListener("keydown", (a) => a.stopPropagation()), this.domElement.addEventListener("keyup", (a) => a.stopPropagation()), this.parent.children.push(this), this.parent.controllers.push(this), this.parent.$children.appendChild(this.domElement), this._listenCallback = this._listenCallback.bind(this), this.name(n);
  }
  name(t) {
    return this._name = t, this.$name.textContent = t, this;
  }
  onChange(t) {
    return this._onChange = t, this;
  }
  _callOnChange() {
    this.parent._callOnChange(this), this._onChange !== void 0 && this._onChange.call(this, this.getValue()), this._changed = true;
  }
  onFinishChange(t) {
    return this._onFinishChange = t, this;
  }
  _callOnFinishChange() {
    this._changed && (this.parent._callOnFinishChange(this), this._onFinishChange !== void 0 && this._onFinishChange.call(this, this.getValue())), this._changed = false;
  }
  reset() {
    return this.setValue(this.initialValue), this._callOnFinishChange(), this;
  }
  enable(t = true) {
    return this.disable(!t);
  }
  disable(t = true) {
    return t === this._disabled ? this : (this._disabled = t, this.domElement.classList.toggle("lil-disabled", t), this.$disable.toggleAttribute("disabled", t), this);
  }
  show(t = true) {
    return this._hidden = !t, this.domElement.style.display = this._hidden ? "none" : "", this;
  }
  hide() {
    return this.show(false);
  }
  options(t) {
    const e = this.parent.add(this.object, this.property, t);
    return e.name(this._name), this.destroy(), e;
  }
  min(t) {
    return this;
  }
  max(t) {
    return this;
  }
  step(t) {
    return this;
  }
  decimals(t) {
    return this;
  }
  listen(t = true) {
    return this._listening = t, this._listenCallbackID !== void 0 && (cancelAnimationFrame(this._listenCallbackID), this._listenCallbackID = void 0), this._listening && this._listenCallback(), this;
  }
  _listenCallback() {
    this._listenCallbackID = requestAnimationFrame(this._listenCallback);
    const t = this.save();
    t !== this._listenPrevValue && this.updateDisplay(), this._listenPrevValue = t;
  }
  getValue() {
    return this.object[this.property];
  }
  setValue(t) {
    return this.getValue() !== t && (this.object[this.property] = t, this._callOnChange(), this.updateDisplay()), this;
  }
  updateDisplay() {
    return this;
  }
  load(t) {
    return this.setValue(t), this._callOnFinishChange(), this;
  }
  save() {
    return this.getValue();
  }
  destroy() {
    this.listen(false), this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.controllers.splice(this.parent.controllers.indexOf(this), 1), this.parent.$children.removeChild(this.domElement);
  }
}
class Op extends Ke {
  constructor(t, e, n) {
    super(t, e, n, "lil-boolean", "label"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "checkbox"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$widget.appendChild(this.$input), this.$input.addEventListener("change", () => {
      this.setValue(this.$input.checked), this._callOnFinishChange();
    }), this.$disable = this.$input, this.updateDisplay();
  }
  updateDisplay() {
    return this.$input.checked = this.getValue(), this;
  }
}
function $r(i) {
  let t, e;
  return (t = i.match(/(#|0x)?([a-f0-9]{6})/i)) ? e = t[2] : (t = i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/)) ? e = parseInt(t[1]).toString(16).padStart(2, 0) + parseInt(t[2]).toString(16).padStart(2, 0) + parseInt(t[3]).toString(16).padStart(2, 0) : (t = i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) && (e = t[1] + t[1] + t[2] + t[2] + t[3] + t[3]), e ? "#" + e : false;
}
const Bp = { isPrimitive: true, match: (i) => typeof i == "string", fromHexString: $r, toHexString: $r }, Ri = { isPrimitive: true, match: (i) => typeof i == "number", fromHexString: (i) => parseInt(i.substring(1), 16), toHexString: (i) => "#" + i.toString(16).padStart(6, 0) }, zp = { isPrimitive: false, match: (i) => Array.isArray(i) || ArrayBuffer.isView(i), fromHexString(i, t, e = 1) {
  const n = Ri.fromHexString(i);
  t[0] = (n >> 16 & 255) / 255 * e, t[1] = (n >> 8 & 255) / 255 * e, t[2] = (n & 255) / 255 * e;
}, toHexString([i, t, e], n = 1) {
  n = 255 / n;
  const s = i * n << 16 ^ t * n << 8 ^ e * n << 0;
  return Ri.toHexString(s);
} }, Vp = { isPrimitive: false, match: (i) => Object(i) === i, fromHexString(i, t, e = 1) {
  const n = Ri.fromHexString(i);
  t.r = (n >> 16 & 255) / 255 * e, t.g = (n >> 8 & 255) / 255 * e, t.b = (n & 255) / 255 * e;
}, toHexString({ r: i, g: t, b: e }, n = 1) {
  n = 255 / n;
  const s = i * n << 16 ^ t * n << 8 ^ e * n << 0;
  return Ri.toHexString(s);
} }, kp = [Bp, Ri, zp, Vp];
function Gp(i) {
  return kp.find((t) => t.match(i));
}
class Hp extends Ke {
  constructor(t, e, n, s) {
    super(t, e, n, "lil-color"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "color"), this.$input.setAttribute("tabindex", -1), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$text = document.createElement("input"), this.$text.setAttribute("type", "text"), this.$text.setAttribute("spellcheck", "false"), this.$text.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("lil-display"), this.$display.appendChild(this.$input), this.$widget.appendChild(this.$display), this.$widget.appendChild(this.$text), this._format = Gp(this.initialValue), this._rgbScale = s, this._initialValueHexString = this.save(), this._textFocused = false, this.$input.addEventListener("input", () => {
      this._setValueFromHexString(this.$input.value);
    }), this.$input.addEventListener("blur", () => {
      this._callOnFinishChange();
    }), this.$text.addEventListener("input", () => {
      const r = $r(this.$text.value);
      r && this._setValueFromHexString(r);
    }), this.$text.addEventListener("focus", () => {
      this._textFocused = true, this.$text.select();
    }), this.$text.addEventListener("blur", () => {
      this._textFocused = false, this.updateDisplay(), this._callOnFinishChange();
    }), this.$disable = this.$text, this.updateDisplay();
  }
  reset() {
    return this._setValueFromHexString(this._initialValueHexString), this;
  }
  _setValueFromHexString(t) {
    if (this._format.isPrimitive) {
      const e = this._format.fromHexString(t);
      this.setValue(e);
    } else this._format.fromHexString(t, this.getValue(), this._rgbScale), this._callOnChange(), this.updateDisplay();
  }
  save() {
    return this._format.toHexString(this.getValue(), this._rgbScale);
  }
  load(t) {
    return this._setValueFromHexString(t), this._callOnFinishChange(), this;
  }
  updateDisplay() {
    return this.$input.value = this._format.toHexString(this.getValue(), this._rgbScale), this._textFocused || (this.$text.value = this.$input.value.substring(1)), this.$display.style.backgroundColor = this.$input.value, this;
  }
}
class ir extends Ke {
  constructor(t, e, n) {
    super(t, e, n, "lil-function"), this.$button = document.createElement("button"), this.$button.appendChild(this.$name), this.$widget.appendChild(this.$button), this.$button.addEventListener("click", (s) => {
      s.preventDefault(), this.getValue().call(this.object), this._callOnChange();
    }), this.$button.addEventListener("touchstart", () => {
    }, { passive: true }), this.$disable = this.$button;
  }
}
class Wp extends Ke {
  constructor(t, e, n, s, r, a) {
    super(t, e, n, "lil-number"), this._initInput(), this.min(s), this.max(r);
    const o = a !== void 0;
    this.step(o ? a : this._getImplicitStep(), o), this.updateDisplay();
  }
  decimals(t) {
    return this._decimals = t, this.updateDisplay(), this;
  }
  min(t) {
    return this._min = t, this._onUpdateMinMax(), this;
  }
  max(t) {
    return this._max = t, this._onUpdateMinMax(), this;
  }
  step(t, e = true) {
    return this._step = t, this._stepExplicit = e, this;
  }
  updateDisplay() {
    const t = this.getValue();
    if (this._hasSlider) {
      let e = (t - this._min) / (this._max - this._min);
      e = Math.max(0, Math.min(e, 1)), this.$fill.style.width = e * 100 + "%";
    }
    return this._inputFocused || (this.$input.value = this._decimals === void 0 ? t : t.toFixed(this._decimals)), this;
  }
  _initInput() {
    this.$input = document.createElement("input"), this.$input.setAttribute("type", "text"), this.$input.setAttribute("aria-labelledby", this.$name.id), window.matchMedia("(pointer: coarse)").matches && (this.$input.setAttribute("type", "number"), this.$input.setAttribute("step", "any")), this.$widget.appendChild(this.$input), this.$disable = this.$input;
    const e = () => {
      let S = parseFloat(this.$input.value);
      isNaN(S) || (this._stepExplicit && (S = this._snap(S)), this.setValue(this._clamp(S)));
    }, n = (S) => {
      const y = parseFloat(this.$input.value);
      isNaN(y) || (this._snapClampSetValue(y + S), this.$input.value = this.getValue());
    }, s = (S) => {
      S.key === "Enter" && this.$input.blur(), S.code === "ArrowUp" && (S.preventDefault(), n(this._step * this._arrowKeyMultiplier(S))), S.code === "ArrowDown" && (S.preventDefault(), n(this._step * this._arrowKeyMultiplier(S) * -1));
    }, r = (S) => {
      this._inputFocused && (S.preventDefault(), n(this._step * this._normalizeMouseWheel(S)));
    };
    let a = false, o, c, l, u, d;
    const f = 5, m = (S) => {
      o = S.clientX, c = l = S.clientY, a = true, u = this.getValue(), d = 0, window.addEventListener("mousemove", _), window.addEventListener("mouseup", v);
    }, _ = (S) => {
      if (a) {
        const y = S.clientX - o, A = S.clientY - c;
        Math.abs(A) > f ? (S.preventDefault(), this.$input.blur(), a = false, this._setDraggingStyle(true, "vertical")) : Math.abs(y) > f && v();
      }
      if (!a) {
        const y = S.clientY - l;
        d -= y * this._step * this._arrowKeyMultiplier(S), u + d > this._max ? d = this._max - u : u + d < this._min && (d = this._min - u), this._snapClampSetValue(u + d);
      }
      l = S.clientY;
    }, v = () => {
      this._setDraggingStyle(false, "vertical"), this._callOnFinishChange(), window.removeEventListener("mousemove", _), window.removeEventListener("mouseup", v);
    }, p = () => {
      this._inputFocused = true;
    }, h = () => {
      this._inputFocused = false, this.updateDisplay(), this._callOnFinishChange();
    };
    this.$input.addEventListener("input", e), this.$input.addEventListener("keydown", s), this.$input.addEventListener("wheel", r, { passive: false }), this.$input.addEventListener("mousedown", m), this.$input.addEventListener("focus", p), this.$input.addEventListener("blur", h);
  }
  _initSlider() {
    this._hasSlider = true, this.$slider = document.createElement("div"), this.$slider.classList.add("lil-slider"), this.$fill = document.createElement("div"), this.$fill.classList.add("lil-fill"), this.$slider.appendChild(this.$fill), this.$widget.insertBefore(this.$slider, this.$input), this.domElement.classList.add("lil-has-slider");
    const t = (h, S, y, A, P) => (h - S) / (y - S) * (P - A) + A, e = (h) => {
      const S = this.$slider.getBoundingClientRect();
      let y = t(h, S.left, S.right, this._min, this._max);
      this._snapClampSetValue(y);
    }, n = (h) => {
      this._setDraggingStyle(true), e(h.clientX), window.addEventListener("mousemove", s), window.addEventListener("mouseup", r);
    }, s = (h) => {
      e(h.clientX);
    }, r = () => {
      this._callOnFinishChange(), this._setDraggingStyle(false), window.removeEventListener("mousemove", s), window.removeEventListener("mouseup", r);
    };
    let a = false, o, c;
    const l = (h) => {
      h.preventDefault(), this._setDraggingStyle(true), e(h.touches[0].clientX), a = false;
    }, u = (h) => {
      h.touches.length > 1 || (this._hasScrollBar ? (o = h.touches[0].clientX, c = h.touches[0].clientY, a = true) : l(h), window.addEventListener("touchmove", d, { passive: false }), window.addEventListener("touchend", f));
    }, d = (h) => {
      if (a) {
        const S = h.touches[0].clientX - o, y = h.touches[0].clientY - c;
        Math.abs(S) > Math.abs(y) ? l(h) : (window.removeEventListener("touchmove", d), window.removeEventListener("touchend", f));
      } else h.preventDefault(), e(h.touches[0].clientX);
    }, f = () => {
      this._callOnFinishChange(), this._setDraggingStyle(false), window.removeEventListener("touchmove", d), window.removeEventListener("touchend", f);
    }, m = this._callOnFinishChange.bind(this), _ = 400;
    let v;
    const p = (h) => {
      if (Math.abs(h.deltaX) < Math.abs(h.deltaY) && this._hasScrollBar) return;
      h.preventDefault();
      const y = this._normalizeMouseWheel(h) * this._step;
      this._snapClampSetValue(this.getValue() + y), this.$input.value = this.getValue(), clearTimeout(v), v = setTimeout(m, _);
    };
    this.$slider.addEventListener("mousedown", n), this.$slider.addEventListener("touchstart", u, { passive: false }), this.$slider.addEventListener("wheel", p, { passive: false });
  }
  _setDraggingStyle(t, e = "horizontal") {
    this.$slider && this.$slider.classList.toggle("lil-active", t), document.body.classList.toggle("lil-dragging", t), document.body.classList.toggle(`lil-${e}`, t);
  }
  _getImplicitStep() {
    return this._hasMin && this._hasMax ? (this._max - this._min) / 1e3 : 0.1;
  }
  _onUpdateMinMax() {
    !this._hasSlider && this._hasMin && this._hasMax && (this._stepExplicit || this.step(this._getImplicitStep(), false), this._initSlider(), this.updateDisplay());
  }
  _normalizeMouseWheel(t) {
    let { deltaX: e, deltaY: n } = t;
    return Math.floor(t.deltaY) !== t.deltaY && t.wheelDelta && (e = 0, n = -t.wheelDelta / 120, n *= this._stepExplicit ? 1 : 10), e + -n;
  }
  _arrowKeyMultiplier(t) {
    let e = this._stepExplicit ? 1 : 10;
    return t.shiftKey ? e *= 10 : t.altKey && (e /= 10), e;
  }
  _snap(t) {
    let e = 0;
    return this._hasMin ? e = this._min : this._hasMax && (e = this._max), t -= e, t = Math.round(t / this._step) * this._step, t += e, t = parseFloat(t.toPrecision(15)), t;
  }
  _clamp(t) {
    return t < this._min && (t = this._min), t > this._max && (t = this._max), t;
  }
  _snapClampSetValue(t) {
    this.setValue(this._clamp(this._snap(t)));
  }
  get _hasScrollBar() {
    const t = this.parent.root.$children;
    return t.scrollHeight > t.clientHeight;
  }
  get _hasMin() {
    return this._min !== void 0;
  }
  get _hasMax() {
    return this._max !== void 0;
  }
}
class Xp extends Ke {
  constructor(t, e, n, s) {
    super(t, e, n, "lil-option"), this.$select = document.createElement("select"), this.$select.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("lil-display"), this.$select.addEventListener("change", () => {
      this.setValue(this._values[this.$select.selectedIndex]), this._callOnFinishChange();
    }), this.$select.addEventListener("focus", () => {
      this.$display.classList.add("lil-focus");
    }), this.$select.addEventListener("blur", () => {
      this.$display.classList.remove("lil-focus");
    }), this.$widget.appendChild(this.$select), this.$widget.appendChild(this.$display), this.$disable = this.$select, this.options(s);
  }
  options(t) {
    return this._values = Array.isArray(t) ? t : Object.values(t), this._names = Array.isArray(t) ? t : Object.keys(t), this.$select.replaceChildren(), this._names.forEach((e) => {
      const n = document.createElement("option");
      n.textContent = e, this.$select.appendChild(n);
    }), this.updateDisplay(), this;
  }
  updateDisplay() {
    const t = this.getValue(), e = this._values.indexOf(t);
    return this.$select.selectedIndex = e, this.$display.textContent = e === -1 ? t : this._names[e], this;
  }
}
class Yp extends Ke {
  constructor(t, e, n) {
    super(t, e, n, "lil-string"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "text"), this.$input.setAttribute("spellcheck", "false"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$input.addEventListener("input", () => {
      this.setValue(this.$input.value);
    }), this.$input.addEventListener("keydown", (s) => {
      s.code === "Enter" && this.$input.blur();
    }), this.$input.addEventListener("blur", () => {
      this._callOnFinishChange();
    }), this.$widget.appendChild(this.$input), this.$disable = this.$input, this.updateDisplay();
  }
  updateDisplay() {
    return this.$input.value = this.getValue(), this;
  }
}
var qp = `.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "\u2195";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "\u25BE";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "\u25B8";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "\u2713";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;
function $p(i) {
  const t = document.createElement("style");
  t.innerHTML = i;
  const e = document.querySelector("head link[rel=stylesheet], head style");
  e ? document.head.insertBefore(t, e) : document.head.appendChild(t);
}
let go = false;
class ra {
  constructor({ parent: t, autoPlace: e = t === void 0, container: n, width: s, title: r = "Controls", closeFolders: a = false, injectStyles: o = true, touchStyles: c = true } = {}) {
    if (this.parent = t, this.root = t ? t.root : this, this.children = [], this.controllers = [], this.folders = [], this._closed = false, this._hidden = false, this.domElement = document.createElement("div"), this.domElement.classList.add("lil-gui"), this.$title = document.createElement("button"), this.$title.classList.add("lil-title"), this.$title.setAttribute("aria-expanded", true), this.$title.addEventListener("click", () => this.openAnimated(this._closed)), this.$title.addEventListener("touchstart", () => {
    }, { passive: true }), this.$children = document.createElement("div"), this.$children.classList.add("lil-children"), this.domElement.appendChild(this.$title), this.domElement.appendChild(this.$children), this.title(r), this.parent) {
      this.parent.children.push(this), this.parent.folders.push(this), this.parent.$children.appendChild(this.domElement);
      return;
    }
    this.domElement.classList.add("lil-root"), c && this.domElement.classList.add("lil-allow-touch-styles"), !go && o && ($p(qp), go = true), n ? n.appendChild(this.domElement) : e && (this.domElement.classList.add("lil-auto-place", "autoPlace"), document.body.appendChild(this.domElement)), s && this.domElement.style.setProperty("--width", s + "px"), this._closeFolders = a;
  }
  add(t, e, n, s, r) {
    if (Object(n) === n) return new Xp(this, t, e, n);
    const a = t[e];
    switch (typeof a) {
      case "number":
        return new Wp(this, t, e, n, s, r);
      case "boolean":
        return new Op(this, t, e);
      case "string":
        return new Yp(this, t, e);
      case "function":
        return new ir(this, t, e);
    }
    console.error(`gui.add failed
	property:`, e, `
	object:`, t, `
	value:`, a);
  }
  addColor(t, e, n = 1) {
    return new Hp(this, t, e, n);
  }
  addFolder(t) {
    const e = new ra({ parent: this, title: t });
    return this.root._closeFolders && e.close(), e;
  }
  load(t, e = true) {
    return t.controllers && this.controllers.forEach((n) => {
      n instanceof ir || n._name in t.controllers && n.load(t.controllers[n._name]);
    }), e && t.folders && this.folders.forEach((n) => {
      n._title in t.folders && n.load(t.folders[n._title]);
    }), this;
  }
  save(t = true) {
    const e = { controllers: {}, folders: {} };
    return this.controllers.forEach((n) => {
      if (!(n instanceof ir)) {
        if (n._name in e.controllers) throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);
        e.controllers[n._name] = n.save();
      }
    }), t && this.folders.forEach((n) => {
      if (n._title in e.folders) throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);
      e.folders[n._title] = n.save();
    }), e;
  }
  open(t = true) {
    return this._setClosed(!t), this.$title.setAttribute("aria-expanded", !this._closed), this.domElement.classList.toggle("lil-closed", this._closed), this;
  }
  close() {
    return this.open(false);
  }
  _setClosed(t) {
    this._closed !== t && (this._closed = t, this._callOnOpenClose(this));
  }
  show(t = true) {
    return this._hidden = !t, this.domElement.style.display = this._hidden ? "none" : "", this;
  }
  hide() {
    return this.show(false);
  }
  openAnimated(t = true) {
    return this._setClosed(!t), this.$title.setAttribute("aria-expanded", !this._closed), requestAnimationFrame(() => {
      const e = this.$children.clientHeight;
      this.$children.style.height = e + "px", this.domElement.classList.add("lil-transition");
      const n = (r) => {
        r.target === this.$children && (this.$children.style.height = "", this.domElement.classList.remove("lil-transition"), this.$children.removeEventListener("transitionend", n));
      };
      this.$children.addEventListener("transitionend", n);
      const s = t ? this.$children.scrollHeight : 0;
      this.domElement.classList.toggle("lil-closed", !t), requestAnimationFrame(() => {
        this.$children.style.height = s + "px";
      });
    }), this;
  }
  title(t) {
    return this._title = t, this.$title.textContent = t, this;
  }
  reset(t = true) {
    return (t ? this.controllersRecursive() : this.controllers).forEach((n) => n.reset()), this;
  }
  onChange(t) {
    return this._onChange = t, this;
  }
  _callOnChange(t) {
    this.parent && this.parent._callOnChange(t), this._onChange !== void 0 && this._onChange.call(this, { object: t.object, property: t.property, value: t.getValue(), controller: t });
  }
  onFinishChange(t) {
    return this._onFinishChange = t, this;
  }
  _callOnFinishChange(t) {
    this.parent && this.parent._callOnFinishChange(t), this._onFinishChange !== void 0 && this._onFinishChange.call(this, { object: t.object, property: t.property, value: t.getValue(), controller: t });
  }
  onOpenClose(t) {
    return this._onOpenClose = t, this;
  }
  _callOnOpenClose(t) {
    this.parent && this.parent._callOnOpenClose(t), this._onOpenClose !== void 0 && this._onOpenClose.call(this, t);
  }
  destroy() {
    this.parent && (this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.folders.splice(this.parent.folders.indexOf(this), 1)), this.domElement.parentElement && this.domElement.parentElement.removeChild(this.domElement), Array.from(this.children).forEach((t) => t.destroy());
  }
  controllersRecursive() {
    let t = Array.from(this.controllers);
    return this.folders.forEach((e) => {
      t = t.concat(e.controllersRecursive());
    }), t;
  }
  foldersRecursive() {
    let t = Array.from(this.folders);
    return this.folders.forEach((e) => {
      t = t.concat(e.foldersRecursive());
    }), t;
  }
}
class jp {
  constructor(t) {
    this.app = t, this.renderer = null, this.scene = null, this.camera = null, this.controls = null, this.pointsObj = null, this.poleGroup = null, this.sphereRef = null, this.gui = null, this.pointGroups = {}, this.params = { depth: 6, starts: 60, pointSize: 2, rotateScene: true, angleR: Math.PI * (Math.sqrt(2) - 1), angleU: Math.PI * (Math.sqrt(5) - 2), show: { identity: true, R: true, L: true, U: true, D: true }, showAxes: true }, this.palette = { "": new Bt("#00c853"), R: new Bt("#e53935"), L: new Bt("#8e24aa"), U: new Bt("#fb8c00"), D: new Bt("#3949ab") }, this.inv = { R: "L", L: "R", U: "D", D: "U" }, this.clock = new Lc(), this._onResize = this.onResize.bind(this), this._tick = this.tick.bind(this);
  }
  init() {
    this.setupThree(), this.setupGUI(), this.build(), window.addEventListener("resize", this._onResize), requestAnimationFrame(this._tick);
  }
  setupThree() {
    this.renderer = new Sp({ antialias: true }), this.renderer.setSize(window.innerWidth, window.innerHeight), this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2)), document.body.appendChild(this.renderer.domElement), this.scene = new vc(), this.scene.background = new Bt(0), this.camera = new Be(55, window.innerWidth / window.innerHeight, 0.1, 100), this.camera.position.set(0, 0, 4), this.controls = new yp(this.camera, this.renderer.domElement), this.controls.enableDamping = true, this.sphereRef = new Ze(new gs(1, 64, 32), new ms({ color: 2236962, wireframe: true, transparent: true, opacity: 0.25 })), this.scene.add(this.sphereRef), this.axes = new Uc(1.5), this.scene.add(this.axes);
  }
  setupGUI() {
    this.gui = new ra(), this.gui.add(this.params, "depth", 1, 8, 1).name("Word depth").onFinishChange(() => this.build()), this.gui.add(this.params, "starts", 6, 200, 1).name("Starting points").onFinishChange(() => this.build()), this.gui.add(this.params, "pointSize", 1, 6, 0.1).name("Point size").onChange(() => this.updatePointSize()), this.gui.add(this.params, "rotateScene").name("Auto-rotate"), this.gui.add(this.params, "angleR", 0.1, Math.PI * 1.9, 1e-4).name("Angle R (z)").onFinishChange(() => this.build()), this.gui.add(this.params, "angleU", 0.1, Math.PI * 1.9, 1e-4).name("Angle U (x)").onFinishChange(() => this.build());
    const t = this.gui.addFolder("Show colors");
    t.add(this.params.show, "identity").name("Identity (G)").onChange(() => this.updateVisibility()), t.add(this.params.show, "R").name("R").onChange(() => this.updateVisibility()), t.add(this.params.show, "L").name("L").onChange(() => this.updateVisibility()), t.add(this.params.show, "U").name("U").onChange(() => this.updateVisibility()), t.add(this.params.show, "D").name("D").onChange(() => this.updateVisibility()), this.gui.add(this.params, "showAxes").name("Show axes").onChange(() => {
      this.axes.visible = this.params.showAxes;
    });
  }
  rotX(t) {
    const e = new ie(), n = Math.cos(t), s = Math.sin(t);
    return e.set(1, 0, 0, 0, 0, n, -s, 0, 0, s, n, 0, 0, 0, 0, 1), e;
  }
  rotZ(t) {
    const e = new ie(), n = Math.cos(t), s = Math.sin(t);
    return e.set(n, -s, 0, 0, s, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), e;
  }
  generateWords(t) {
    const e = [{ letters: "", mat: new ie().identity(), last: null }];
    let n = e.slice(0);
    const s = [{ key: "R", mat: () => this.rotZ(this.params.angleR) }, { key: "L", mat: () => this.rotZ(-this.params.angleR) }, { key: "U", mat: () => this.rotX(this.params.angleU) }, { key: "D", mat: () => this.rotX(-this.params.angleU) }];
    for (let r = 1; r <= t; r++) {
      const a = [];
      for (const o of n) for (const c of s) {
        if (o.last && c.key === this.inv[o.last]) continue;
        const l = o.mat.clone().premultiply(c.mat());
        a.push({ letters: c.key + o.letters, mat: l, last: c.key });
      }
      e.push(...a), n = a;
    }
    return e;
  }
  fibonacciSphere(t) {
    const e = [], n = Math.PI * (3 - Math.sqrt(5));
    for (let s = 0; s < t; s++) {
      const r = 1 - s / (t - 1) * 2, a = Math.sqrt(1 - r * r), o = s * n;
      e.push(new N(Math.cos(o) * a, r, Math.sin(o) * a));
    }
    return e;
  }
  build() {
    this.pointsObj && (this.scene.remove(this.pointsObj), this.pointsObj.traverse((a) => {
      var _a2, _b, _c2;
      a.isPoints && ((_a2 = a.geometry) == null ? void 0 : _a2.dispose(), (_c2 = (_b = a.material) == null ? void 0 : _b.dispose) == null ? void 0 : _c2.call(_b));
    }), this.pointsObj = null), this.poleGroup && (this.scene.remove(this.poleGroup), this.poleGroup.children.forEach((a) => {
      a.geometry.dispose(), a.material.dispose();
    }), this.poleGroup = null), this.pointGroups = {}, this.pointsObj = new ni(), this.scene.add(this.pointsObj);
    const t = this.generateWords(this.params.depth), e = this.fibonacciSphere(this.params.starts), n = { identity: [], R: [], L: [], U: [], D: [] };
    for (const a of t) {
      const o = a.last ?? "identity";
      for (const c of e) {
        const l = c.clone().applyMatrix4(a.mat).normalize();
        n[o].push(l.x, l.y, l.z);
      }
    }
    const s = this.makeCircleTexture(64, 1.6), r = (a) => this.params.show && a in this.params.show ? this.params.show[a] : true;
    for (const a of Object.keys(n)) {
      const o = n[a];
      if (!o.length) continue;
      const c = new Ie();
      c.setAttribute("position", new Ve(new Float32Array(o), 3));
      const l = this.palette[a === "identity" ? "" : a], u = new Float32Array(o.length / 3 * 3);
      for (let m = 0; m < u.length; m += 3) u[m] = l.r, u[m + 1] = l.g, u[m + 2] = l.b;
      c.setAttribute("color", new Ve(u, 3));
      const d = new ko({ size: this.params.pointSize / 100, vertexColors: true, sizeAttenuation: true, map: s, transparent: true, alphaTest: 0.5, depthWrite: false }), f = new Ac(c, d);
      f.visible = r(a), this.pointsObj.add(f), this.pointGroups[a] = f;
    }
    this.addPoles();
  }
  addPoles() {
    this.poleGroup = new ni();
    const t = [new N(0, 0, 1), new N(0, 0, -1), new N(1, 0, 0), new N(-1, 0, 0)], e = new ms({ color: 16771899 }), n = new gs(0.02, 16, 8);
    t.forEach((s) => {
      const r = new Ze(n, e);
      r.position.copy(s.multiplyScalar(1.001)), this.poleGroup.add(r);
    }), this.scene.add(this.poleGroup);
  }
  updatePointSize() {
    this.pointsObj && (this.pointsObj.material.size = this.params.pointSize / 100);
  }
  tick() {
    const t = this.clock.getElapsedTime();
    this.params.rotateScene && (this.sphereRef.rotation.y = t * 0.15, this.pointsObj && (this.pointsObj.rotation.y = t * 0.15), this.poleGroup && (this.poleGroup.rotation.y = t * 0.15)), this.controls.update(), this.renderer.render(this.scene, this.camera), requestAnimationFrame(this._tick);
  }
  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight, this.camera.updateProjectionMatrix(), this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
  destroy() {
    var _a2;
    window.removeEventListener("resize", this._onResize), (_a2 = this.gui) == null ? void 0 : _a2.destroy(), this.scene.traverse((t) => {
      var _a3, _b, _c2;
      t.isMesh && ((_a3 = t.geometry) == null ? void 0 : _a3.dispose(), (_c2 = (_b = t.material) == null ? void 0 : _b.dispose) == null ? void 0 : _c2.call(_b));
    }), this.renderer.dispose();
  }
  makeCircleTexture(t = 64, e = 1.5) {
    const n = document.createElement("canvas");
    n.width = n.height = t;
    const s = n.getContext("2d"), r = t * 0.5, a = s.createRadialGradient(r, r, r / e, r, r, r);
    a.addColorStop(0, "rgba(255,255,255,1)"), a.addColorStop(1, "rgba(255,255,255,0)"), s.fillStyle = a, s.beginPath(), s.arc(r, r, r, 0, Math.PI * 2), s.fill();
    const o = new wc(n);
    return o.generateMipmaps = true, o.needsUpdate = true, o;
  }
  updateVisibility() {
    for (const t in this.pointGroups) this.pointGroups[t].visible = this.params.show[t];
  }
}
class Kp {
  constructor(t) {
    this.env = t, this.test = new jp(this);
  }
  init() {
    this.test.init();
  }
}
const Zp = { BASE_URL: "/", DEV: false, MODE: "production", PROD: true, SSR: false, VITE_SITE: "picinfiniti.net" }, Jp = Zp, Qp = new Kp(Jp);
Qp.init();
