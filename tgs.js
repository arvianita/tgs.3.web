// a. Segitiga
const segitiga = (a, t, s1, s2, s3) =>
  console.log("Segitiga:", "Luas =", 0.5 * a * t, "Keliling =", s1 + s2 + s3);

// b. Persegi panjang
const persegiPanjang = (p, l) =>
  console.log("Persegi Panjang:", "Luas =", p * l, "Keliling =", 2 * (p + l));

// c. Prisma segitiga
const prisma = (a, t, s1, s2, s3, tp) => {
  const la = 0.5 * a * t;
  console.log("Prisma:", "Luas Permukaan =", 2 * la + (s1 + s2 + s3) * tp, "Volume =", la * tp);
};

// d. Limas segi empat
const limas = (s, t) => {
  const ts = Math.sqrt(t * 2 + (s / 2) * 2);
  console.log("Limas:", "Luas Permukaan =", s * 2 + 2 * s * ts, "Volume =", (s * 2 * t) / 3);
};

// e. Segitiga sembarang (rumus Heron)
const sembarang = (a, b, c) => {
  const s = (a + b + c) / 2;
  console.log("Segitiga Sembarang:", "Keliling =", a + b + c, "Luas =", Math.sqrt(s * (s - a) * (s - b) * (s - c)));
};

segitiga(6, 4, 5, 5, 6);
persegiPanjang(10, 5);
prisma(6, 4, 5, 5, 6, 10);
limas(6, 8);
sembarang(7, 8, 9);