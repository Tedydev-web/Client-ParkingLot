export const DecodeGeometry = (t, e) => {
  for (var n, r, i = 0, o = 0, s = 0, a = [], u = 0, c = 0, l = null, f = Math.pow(10, e || 5); i < t.length;) {
    l = null, u = 0, c = 0;
    do l = t.charCodeAt(i++) - 63, c |= (31 & l) << u, u += 5; while (l >= 32);
    n = 1 & c ? ~(c >> 1) : c >> 1, u = c = 0;
    do l = t.charCodeAt(i++) - 63, c |= (31 & l) << u, u += 5; while (l >= 32);
    r = 1 & c ? ~(c >> 1) : c >> 1, o += n, s += r, a.push([s / f, o / f])
  }
  return a;
}
