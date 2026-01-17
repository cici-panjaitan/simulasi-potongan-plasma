function hitung() {

  const jumlahTandan = parseFloat(document.getElementById("jumlahTandan").value) || 0;
  const bruto = parseFloat(document.getElementById("bruto").value) || 0;
  const tarra = parseFloat(document.getElementById("tarra").value) || 0;
  const berondolan = parseFloat(document.getElementById("berondolan").value) || 0;

  const mentah = parseFloat(document.getElementById("mentah").value) || 0;
  const lewatMatang = parseFloat(document.getElementById("lewatMatang").value) || 0;
  const tankos = parseFloat(document.getElementById("tankos").value) || 0;
  const tangkai = parseFloat(document.getElementById("tangkai").value) || 0;
  const tbs3 = parseFloat(document.getElementById("tbs3").value) || 0;
  const basah = parseFloat(document.getElementById("basah").value) || 0;

  const adaSampah = document.getElementById("adaSampah").value;

  const netto = bruto - tarra;
  if (netto <= 0 || jumlahTandan <= 0) {
    alert("Bruto, Tarra, dan Jumlah Tandan harus benar");
    return;
  }

  /* === BERAT SAMPAH BERONDOLAN === */
  let beratSampah = 0;
  if (adaSampah === "ya") {
    beratSampah = berondolan * 0.02;
  }
  document.getElementById("sampah").value = beratSampah.toFixed(2);

  /* === POTONGAN === */

  // Berondolan
  const persenBerondolan = (berondolan / netto) * 100;
  const potBerondolan = persenBerondolan >= 10 ? 0 : (10 - persenBerondolan) * 0.3;

  // Mentah
  const potMentah = (mentah / jumlahTandan * 100) * 0.5;

  // Lewat Matang
  const persenLewat = (lewatMatang / jumlahTandan) * 100;
  const potLewat = persenLewat <= 5 ? 0 : (persenLewat - 5) * 0.25;

  // Tankos
  const potTankos = (tankos / jumlahTandan) * 100;

  // Tangkai Panjang
  const potTangkai = (tangkai / jumlahTandan * 100) * 0.01;

  // Sampah Berondolan
  const potSampah = (beratSampah / netto) * 100;

  // TBS < 3 Kg
  const persenTbs3 = (tbs3 / jumlahTandan) * 100;
  const potTbs3 = persenTbs3 <= 0 ? 0 : ((tbs3 * 3) * 0.7) / netto * 100;

  /* === TOTAL === */
  const totalPotongan =
    potBerondolan +
    potMentah +
    potLewat +
    potTankos +
    potTangkai +
    potSampah +
    potTbs3 +
    basah;

  document.getElementById("totalPotongan").value =
    totalPotongan.toFixed(2) + " %";
}
