class Pendaftar {
    constructor(nama, umur, uangSaku) {
      this.nama = nama;
      this.umur = umur;
      this.uangSaku = uangSaku;
    }
  }
  
  let pendaftarList = [];
  const resumeUmur = document.getElementById("resume-umur");
  const resumeUangSungu = document.getElementById("resume-uang-sungu");

  function averageUmur() {
    let total = 0;
    
    for (let i = 0; i < pendaftarList.length; i++) {
      total += Number(pendaftarList[i].umur);
    }
    
    return total / pendaftarList.length;
  }

  function averageUangSungu() {
    let total = 0;
    
    for (let i = 0; i < pendaftarList.length; i++) {
      total += Number(pendaftarList[i].uangSaku);
    }
    
    return total / pendaftarList.length;
  }
  
  function renderPendaftar() {
    let pendaftarTable = document.querySelector('#pendaftar-list');
    pendaftarTable.innerHTML = '';
    
    for (let i = 0; i < pendaftarList.length; i++) {
      let pendaftar = pendaftarList[i];
      pendaftarTable.innerHTML += `
        <tr>
          <td>${pendaftar.nama}</td>
          <td>${pendaftar.umur}</td>
          <td>${pendaftar.uangSaku}</td>
        </tr>
      `;
    }
    resumeUmur.innerHTML = `Rata-rata umur: ${averageUmur()}`;
    resumeUangSungu.innerHTML = `Rata-rata uang sungu: ${averageUangSungu()}`;
  }
  
  let form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let nama = form.querySelector('#nama').value;
    let umur = form.querySelector('#umur').value;
    let uangSaku = form.querySelector('#uangSaku').value;
   
    if (nama.length < 10) {
      alert('Nama minimal harus 10 karakter');
      return;
    }
    
    if (umur < 25) {
      alert('Umur minimal harus 25 tahun');
      return;
    }
    
    if (uangSaku < 100000 || uangSaku > 1000000) {
      alert('Uang saku harus antara 100 ribu sampai 1 juta');
      return;
    }
    
    let pendaftar = new Pendaftar(nama, umur, uangSaku);
    pendaftarList.push(pendaftar);

    renderPendaftar(); 
  });