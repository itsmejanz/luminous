document.getElementById('divisionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const id = document.getElementById('id').value;
    
    // Data JSON yang diberikan
    const data = [
            {"id": "12442", "nama": "Nur Rashid Arilsyah", "kelas": "X-1", "divisi": "Humas Internal"},
            {"id": "12670", "nama": "Aura Salsabila", "kelas": "X-8", "divisi": "Humas Internal"},
            {"id": "12424", "nama": "Gayatri Putri Prameshvari", "kelas": "X-1", "divisi": "Humas Internal"},
            {"id": "12672", "nama": "Azzam Al Rasyid", "kelas": "X-8", "divisi": "Humas Internal"},
            {"id": "12500", "nama": "Jerrymi Petter Aprian Yapari", "kelas": "X-3", "divisi": "Humas Internal"},
            {"id": "12479", "nama": "Raihana Lavania Mansur", "kelas": "X-2", "divisi": "Humas Internal"},
            {"id": "12454", "nama": "Annisa Dewi Maharani", "kelas": "X-2", "divisi": "Humas Eksternal"},
            {"id": "12671", "nama": "Aurelya Natasha", "kelas": "X-8", "divisi": "Humas Eksternal"},
            {"id": "12474", "nama": "Muhammad Razzan Triswiandi", "kelas": "X-2", "divisi": "Humas Eksternal"},
            {"id": "12708", "nama": "Daviona Putri Setiawan", "kelas": "X-9", "divisi": "Humas Eksternal"},
            {"id": "12475", "nama": "Muhammad Rumman Nadhif", "kelas": "X-2", "divisi": "Humas Eksternal"},
            {"id": "12619", "nama": "Najla Mumtaz Gitanegara", "kelas": "X-6", "divisi": "Humas Eksternal"},
            {"id": "12417", "nama": "Arya Bima Pandia", "kelas": "X-1", "divisi": "Humas Eksternal"},
            {"id": "12572", "nama": "Kanaia Kosashi", "kelas": "X-5", "divisi": "Humas Eksternal"},
            {"id": "12591", "nama": "Tara Ivanka Adjani", "kelas": "X-5", "divisi": "Humas Eksternal"},
            {"id": "12476", "nama": "Nabila Yuan Kiskee Nur R", "kelas": "X-2", "divisi": "Humas Eksternal"},
            {"id": "12681", "nama": "Kiara Zalfa Alika", "kelas": "X-8", "divisi": "Humas Media"},
            {"id": "12532", "nama": "Deanaura Hanindya Siregar", "kelas": "X-4", "divisi": "Humas Media"},
            {"id": "12524", "nama": "Alisha Salma Nuur", "kelas": "X-4", "divisi": "Humas Media"},
            {"id": "12528", "nama": "Bunga Sukma Ayu", "kelas": "X-4", "divisi": "Humas Media"},
            {"id": "12647", "nama": "Khayyirah Talifa Sakhi", "kelas": "X-7", "divisi": "Humas Media"},
            {"id": "12488", "nama": "Albert Sidarta Kartasasmita", "kelas": "X-3", "divisi": "Humas Media"},
            {"id": "12580", "nama": "Nabila Syifa Wirahadikusuma", "kelas": "X-5", "divisi": "Humas Media"},
            {"id": "12322", "nama": "Naufal Alam Taqi", "kelas": "XI-4", "divisi": "Humas Media"},
            {"id": "12547", "nama": "Pritdska Annisa Brilianty", "kelas": "X-4", "divisi": "Humas Media"},
            {"id": "12270", "nama": "Dimas Ali Sigit", "kelas": "X-2", "divisi": "Humas Media"},
            {"id": "12299", "nama": "Azizah Mulyaningsih As", "kelas": "XI-2", "divisi": "Humas Media"},
            {"id": "12544", "nama": "Nabila Galih Putri", "kelas": "X-4", "divisi": "News Cetak"},
            {"id": "12516", "nama": "Salwa Puspa Khairani", "kelas": "X-3", "divisi": "News Cetak"},
            {"id": "12735", "nama": "Violetta Echassy Aurorazzahra", "kelas": "X-9", "divisi": "News Cetak"},
            {"id": "12648", "nama": "Kirana Aidha Arya Putri", "kelas": "X-7", "divisi": "News Cetak"},
            {"id": "12727", "nama": "Oktavianus Yericho Dwi Saputra", "kelas": "X-9", "divisi": "News Cetak"},
            {"id": "12697", "nama": "Salwa Zahratusyita Fitriany", "kelas": "X-8", "divisi": "News Cetak"},
            {"id": "12651", "nama": "Marsha Ruela Hadi", "kelas": "X-7", "divisi": "News Cetak"},
            {"id": "12246", "nama": "Mochammad Alfa Rizki", "kelas": "XI-2", "divisi": "News Cetak"},
            {"id": "12428", "nama": "Khayla Zahrah Nurussana", "kelas": "X-1", "divisi": "News Cetak"},
            {"id": "12685", "nama": "Muhammad Andra Salisd", "kelas": "X-8", "divisi": "News Online"},
            {"id": "12430", "nama": "Lembayung Puspa Langit", "kelas": "X-1", "divisi": "News Online"},
            {"id": "12477", "nama": "Nabilatul Azkiyah", "kelas": "X-2", "divisi": "News Online"},
            {"id": "12520", "nama": "Vania Shakinah Sabila", "kelas": "X-3", "divisi": "News Online"},
            {"id": "12443", "nama": "Putri Azahra", "kelas": "X-1", "divisi": "News Online"},
            {"id": "12545", "nama": "Nadya Ulya Melvarina", "kelas": "X-4", "divisi": "News Online"},
            {"id": "12309", "nama": "Jilzyan Andira", "kelas": "XI-1", "divisi": "News Online"},
            {"id": "12565", "nama": "Danis Almira Nareswari", "kelas": "X-5", "divisi": "News Online"},
            {"id": "12603", "nama": "Deyla Oktaviera", "kelas": "X-6", "divisi": "News Online"},
            {"id": "12531", "nama": "Cindy Novita Yasmin", "kelas": "X-4", "divisi": "News Online"},
            {"id": "12661", "nama": "Sabrina Dwi Febriyani", "kelas": "X-7", "divisi": "P-Channel"},
            {"id": "12576", "nama": "Malika Alisha Ayu Wiryawan", "kelas": "X-5", "divisi": "P-Channel"},
            {"id": "12497", "nama": "Fathiya El Myza Nauli", "kelas": "X-3", "divisi": "P-Channel"},
            {"id": "12549", "nama": "Ratu Nur Faizah ilmi", "kelas": "X-4", "divisi": "P-Channel"},
            {"id": "12493", "nama": "Chrisnathania Athalia", "kelas": "X-3", "divisi": "P-Channel"},
            {"id": "12664", "nama": "Thea Juvena Hosiana", "kelas": "X-7", "divisi": "P-Channel"},
            {"id": "12427", "nama": "Keysa Liani Zafirah", "kelas": "X-1", "divisi": "P-Channel"},
            {"id": "12525", "nama": "Andriana Queena Olivia", "kelas": "X-4", "divisi": "P-Channel"},
            {"id": "12680", "nama": "Khadijah", "kelas": "X-8", "divisi": "P-Channel"},
            {"id": "12496", "nama": "Ellen Shalomitha Fransisca", "kelas": "X-3", "divisi": "P-Voice"},
            {"id": "12452", "nama": "Almira Siti Dwi Khalifah", "kelas": "X-2", "divisi": "P-Voice"},
            {"id": "12614", "nama": "Mayra Rahma Aprilia", "kelas": "X-6", "divisi": "P-Voice"},
            {"id": "12546", "nama": "Nazwa Syahara Alifah Bahra", "kelas": "X-4", "divisi": "P-Voice"},
            {"id": "12440", "nama": "Nalini Danisha Nugraha", "kelas": "X-1", "divisi": "P-Voice"},
            {"id": "12420", "nama": "Dhini Tri Handayani", "kelas": "X-1", "divisi": "P-Voice"},
            {"id": "12589", "nama": "Salwa Fitriyani", "kelas": "X-5", "divisi": "P-Voice"},
            {"id": "12713", "nama": "Jilly Agustin Rahmawati", "kelas": "X-9", "divisi": "P-Voice"},
            {"id": "12678", "nama": "Fathur Raihan AL Khisyami", "kelas": "X-8", "divisi": "P-Voice"},
            {"id": "12419", "nama": "Carissa Batari Mahardika", "kelas": "X-1", "divisi": "CDMS"},
            {"id": "12711", "nama": "Gendis Karenina", "kelas": "X-9", "divisi": "CDMS"},
            {"id": "12629", "nama": "Yohanes Mario Swandaru", "kelas": "X-6", "divisi": "CDMS"},
            {"id": "12326", "nama": "Raihan Juan Praja", "kelas": "XI-7", "divisi": "CDMS"},
            {"id": "12446", "nama": "Rifat Altair Rudini", "kelas": "X-1", "divisi": "CDMS"},
            {"id": "12328", "nama": "Sulthan Thoriq Andhifa", "kelas": "XI-7", "divisi": "P-Channel"},
            {"id": "12296", "nama": "Admiral Muhammad Aghasi", "kelas": "XI-6", "divisi": "P-Channel"}          
    ];

    const resultDiv = document.getElementById('result');
    const resultContent = document.getElementById('result-content');
    resultDiv.style.display = 'block';

    const student = data.find(student => student.id === id);

    if (student) {
        resultDiv.className = 'result success';
        resultContent.innerHTML = `<p><strong>Nama:</strong> ${student.nama}</p>
                                   <p><strong>Kelas Asal:</strong> ${student.kelas}</p>
                                   <p><strong>Diterima Di:</strong> ${student.divisi}</p>`;
    } else {
        resultDiv.className = 'result fail';
        resultContent.innerHTML = `<p>Data tidak ditemukan untuk NIS: ${id}</p>`;
    }
});
