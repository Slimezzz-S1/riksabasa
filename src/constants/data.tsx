import { ThemedText } from "@/components/themed-text"
import { ThemedView } from "@/components/themed-view"
import { Image, StyleSheet, View } from "react-native"
import { Colors } from "./theme"
import { CarouselItemProps, HeroCarouselItem } from "@/components/ui/hero-carousel"
import { QuestionsData } from "./types"

const styles = StyleSheet.create({
    root : {
        position : "relative",
        width : 480,
        height : 350,
        backgroundColor : Colors.light.accentColor,
        padding : 24,
        paddingBottom : 0,
        borderRadius : 20,
        flexDirection : "row",
        justifyContent : "space-between",
        overflow : "hidden"
    },
    TextWrapper : {
        display : "flex",
        justifyContent : "center",
        width : "50%",
    },
    text : {
        color : "white",
        fontSize : 30,
        lineHeight : 30 * 1.15
    },
    background: {
        position: "absolute",
        top: 0,
        left : "-50%",
        resizeMode: "contain",
    },
    imageWrapper: {
        width: 200,
        height: "100%",
        overflow: "hidden",
    },
    image: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        aspectRatio: 2 / 3,
    },
})

export const indexItems : CarouselItemProps[] = [
    {
        id : "1",
        element : (
            <ThemedView style={styles.root}>
                <Image source={require("@/assets/index/hero-background.jpeg")} style={styles.background} />

                <View style={styles.TextWrapper}>
                    <ThemedText style={styles.text}>
                        {"Uji Kemampuan Bahasa,\nLestarikan Sastra dan Budaya"}
                    </ThemedText>
                </View>

                <View style={styles.imageWrapper}>
                    <Image source={require("@/assets/index/student.png")} style={styles.image} />
                </View>
            </ThemedView>
        )
    },
    {
        id : "2",
        element : (
            <ThemedView style={styles.root}>
                <Image source={require("@/assets/index/hero-background.jpeg")} style={styles.background} />

                <View style={styles.TextWrapper}>
                    <ThemedText style={styles.text}>
                        {"Lorem ipsum dolor sit elit. Dolor consectetur."}
                    </ThemedText>
                </View>

                <View style={styles.imageWrapper}>
                    <Image source={require("@/assets/index/student.png")} style={styles.image} />
                </View>
            </ThemedView>
        )
    },
]

export const questionsData : QuestionsData = {
    "bahasa-indonesia":  {
        easy : {
            material : [

            ],
            questions : [
                {
                    question: "Kata baku yang tepat adalah?",
                    answers: ["Resiko", "Ijin", "Aktivitas", "Apotik"],
                    correctAnswer: 2,
                },
                {
                    question: "Penulisan tanda baca yang benar adalah",
                    answers: ['Ayah berkata "Belajarlah dengan rajin"', 'Ayah berkata, "Belajarlah dengan rajin"', 'Ayah berkata. "Belajarlah dengan rajin"', 'Ayah berkata; "Belajarlah dengan rajin"'],
                    correctAnswer: 1,
                },
                {
                    question: "Sinonim kata indah adalah",
                    answers: ["Buruk", "Elok", "Kusam", "Suram"],
                    correctAnswer: 1,
                },
                {
                    question: "Kata yang merupakan antonim dari optimis adalah",
                    answers: ["Semangat", "Percaya", "Pesimis", "Berani"],
                    correctAnswer: 2,
                },
                {
                    question: "Kalimat yang efektif adalah",
                    answers: ["Para siswa sedang mengikuti upacara", "Semua peserta-peserta hadir tepat waktu", "Siswa mengikuti kegiatan dengan tertib", "Mereka saling tolong menolong satu sama lain"],
                    correctAnswer: 2,
                },
                {
                    question: "Kata yang memiliki makna sama dengan kata inovasi adalah",
                    answers: ["Peniruan", "Pembaruan", "Pengulangan", "Penghapusan"],
                    correctAnswer: 1,
                },
                {
                    question: "Kata yang termasuk kata sifat adalah",
                    answers: [" Menyapu ", "Kelembutan", "Cerdas", "Buku"],
                    correctAnswer: 2,
                },
                {
                    question: " Penulisan kata yang benar terdapat pada",
                    answers: ["Jadwal", "jaddwal", "Jadual", "Jadhwal"],
                    correctAnswer: 0,
                },
                {
                    question: "Kata yang memiliki arti berlawanan dengan luas adalah",
                    answers: ["Lebar", "Besar", "Sempit", "Panjang"],
                    correctAnswer: 2,
                },
                {
                    question: " Kalimat yang menggunakan kata tanya dengan tepat adalah",
                    answers: ["Siapa yang mengerjakan tugas tersebut? ", " Mengapa nama kamu siapa?", "Kapan mengapa acara dimulai?", " Bagaimana siapa yang datang?"],
                    correctAnswer: 0,
                },
                {
                    question: "Kata yang termasuk kata benda adalah",
                    answers: ["Memikikrkan", "Kujujuran", "Berjalan", "Cepat"],
                    correctAnswer: 1,
                },
                {
                    question: 'Kata yang tepat untuk melengkapi kalimat berikut adalah "Siswa harus menjaga ___ saat mengikuti kegiatan pembelajaran"',

                    answers: ["Kedisiplinan", "Mendisiplinkan", "Disiplinlah", "Disiplinisasi"],
                    correctAnswer: 0,
                },
                {
                    question: "Kalimat yang menggunakan kata serapan dengan benar adalah",
                    answers: ["Kami mengakses informasi melalui internet", "Kami mengaksess informasi melalui internet", "Kami mengaksees informasi melalui internet", " Kami mengakkses informasi melalui internet"],
                    correctAnswer: 0,
                },
                {
                    question: "Kata yang memiliki makna sama dengan cenderung adalah",
                    answers: ["Condong", "menolak", "Berhenti", "Menyimpang"],
                    correctAnswer: 0,
                },
                {
                    question: "Kalimat yang menggunakan kata keterangan waktu adalah",
                    answers: ["Adik membeli sepatu baru", "Mereka berlatih kemarin sore", "Buku itu sangat tebal", " Rumahnya berwarna putih."],
                    correctAnswer: 1,
                },
            ],
        },
        intermediate : {
            material : [

            ],
            questions : [
                {
                    question: "Penulisan kata depan yang benar adalah",
                    answers: ["adik bermain di lapangan", "Buku disimpan di lemari", "Ayah bekerja di rumah", "Mereka tinggal di bandung"],
                    correctAnswer: 1,
                },
                {
                    question: "Kata yang tepat untuk melengkapi kalimat di bawah ini adalah\n Ia tetap berangkat sekolah ____ hujan turun deras",
                    answers: ["Karena", "Sehingga", "Meskipun", "Agar"],
                    correctAnswer: 2,
                },
                {
                    question: "Kalimat yang menggunakan kata baku adalah",
                    answers: ["Ibu memberi ijin kepada anaknya", "Kakak sedang menganalisa data", "Kami melakukan praktik di laboratorium", "Mereka merubah keputusan"],
                    correctAnswer: 2,
                },
                {
                    question: "Kata implementasi memiliki makna",
                    answers: ["Penghapusan", "Penerapan", "Penolakan", "Perencanaan"],
                    correctAnswer: 1,
                },
                {
                    question: "Kalimat yang menggunakan tanda koma dengan tepat adalah",
                    answers: ["jika hujan turun, kami tidak jadi pergi", "Jika, hujan turun kami tidak jadi pergi", "jika hujan, turun kami tidak jadi pergi", "Jika hujan turun kami, tidak jadi pergi"],
                    correctAnswer: 0,
                },
                {
                    question: "Kata yang memiliki makna denotatif adalah",
                    answers: ["Kambing hitam", "Tangan kanan", "Bunga desa", "Bunga mawar"],
                    correctAnswer: 3,
                },
                {
                    question: "Kata berimbuhan yang benar terdapat pada",
                    answers: ["Mensukseskan", "Mempengaruhi", "Mengubah", "Merubah"],
                    correctAnswer: 2,
                },
                {
                    question: "Kata yang memiliki makna sama dengan validasi adalah ...",
                    answers: ["Pengabaian", "Pengesahan", "Pengurangan", "Penolakan"],
                    correctAnswer: 1,
                },
                {
                    question: "Kalimat yang menggunakan kata depan secara tepat adalah ...",
                    answers: [
                        "Surat itu dikirim kepada kepala sekolah.",
                        "Surat itu dikirim ke-pada kepala sekolah.",
                        "Surat itu dikirim kep ada kepala sekolah.",
                        "Surat itu dikirim kepadakepala sekolah."
                    ],
                    correctAnswer: 0,
                },
                {
                    question: "Kata yang memiliki makna berlawanan dengan permanen adalah ...",
                    answers: ["Tetap", "Abadi", "Sementara", "Kokoh"],
                    correctAnswer: 2,
                },
                {
                    question: "Kalimat yang menggunakan kata berimbuhan dengan benar adalah ...",
                    answers: [
                        "Pemerintah memperluaskan jalan tersebut.",
                        "Pemerintah memperlebar jalan tersebut.",
                        "Pemerintah melebarkan luas jalan tersebut.",
                        "Pemerintah memperlebarkan jalan tersebut."
                    ],
                    correctAnswer: 1,
                },
                {
                    question: "Kata yang tepat untuk melengkapi kalimat berikut adalah ... Pihak panitia telah _____ seluruh peserta yang mengikuti perlombaan.",
                    answers: ["Mendata", "Data", "Pendataan", "Terdata"],
                    correctAnswer: 0,
                },
                {
                    question: "Kalimat yang mengandung kata bermakna kiasan adalah ...",
                    answers: [
                        "Kakak mencuci tangan di kamar mandi.",
                        "Adik memegang tangan ibu.",
                        "Ia menjadi tangan kanan pimpinan perusahaan.",
                        "Tangan saya terkena tinta."
                    ],
                    correctAnswer: 2,
                },
                {
                    question: "Kata yang memiliki makna sama dengan esensial adalah ...",
                    answers: ["Tambahan", "Pokok", "Sementara", "Sederhana"],
                    correctAnswer: 1,
                },
                {
                    question: "Kalimat yang menggunakan kata penghubung tujuan adalah ...",
                    answers: [
                        "Mereka berdiskusi agar menemukan solusi.",
                        "Mereka berdiskusi ketika guru datang.",
                        "Mereka berdiskusi karena tugasnya sulit.",
                        "Mereka berdiskusi, tetapi belum selesai."
                    ],
                    correctAnswer: 0,
                },
                {
                    question: "Penulisan kata yang benar adalah ...",
                    answers: ["Apresiasi", "Apresiasy", "Apresiasie", "Apresiasii"],
                    correctAnswer: 0,
                },
                {
                    question: "Kalimat yang menggunakan kata secara tepat adalah ...",
                    answers: [
                        "Keputusan itu bersifat final dan masih bisa berubah.",
                        "Keputusan itu bersifat final dan tidak dapat diubah lagi.",
                        "Keputusan itu bersifat final untuk sementara saja.",
                        "Keputusan itu final tetapi belum diputuskan."
                    ],
                    correctAnswer: 1,
                },
            ],
        },
        medium : {
            material : [

            ],
            questions : [
                {
                    question: "Kalimat yang paling efektif adalah",
                    answers: ["Para siswa semuanya berkumpul bersama di aula", "Siswa berkumpul di aula", "Semua siswa-siswa berkumpul di aula", "Siswa-siswa semuanya bersama berkumpul"],
                    correctAnswer: 1,
                },
                {
                    question: "Kata absurd memiliki makna",
                    answers: ["masuk akal", "Tidak masuk akal", "Teratur", "Terencana"],
                    correctAnswer: 1,
                },
                {
                    question: "Penulisan huruf kapital yang benar adalah ",
                    answers: ["Kami berlibur ke danau toba", "Kami berlibur ke Danau Toba", "Kami berlibur ke Danau toba", "Kami berlibur ke danau Toba"],
                    correctAnswer: 1,
                },
                {
                    question: "Kalimat yang mengandung majas personifikasi adalah",
                    answers: ["Wajahnya cantik seperti bunga", "Angin berbisik lembut di malam hari", "Ia berjalan dengan cepat", "Rumah itu sangat besar"],
                    correctAnswer: 1,
                },
                {
                    question: "Kata namun digunakan untuk menyatakan ",
                    answers: ["Penambahan", "Sebab", "Pertentangan", "Tujuan"],
                    correctAnswer: 2,
                },
                {
                    question: "Kalimat yang mengandung pleonasme adalah",
                    answers: ["Ia naik ke atas panggung", "Mereka belajar bersama", "Ibu memasak nasi", "Siswa membaca buku"],
                    correctAnswer: 0,
                },
                {
                    question: "Bentuk kata yang tepat dari kata dasar sapu dengan imbuhan me- adalah",
                    answers: ["Mensapu", "Menyapu", "Mesapu", "Mengsapu"],
                    correctAnswer: 1,
                },
                {
                    question: "Kalimat yang menggunakan konjungsi sebab-akibat adalah",
                    answers: ["Ia belajar, tetapi nilai nya rendah", "Ia tidak masuk karena sakit", "Ia belajar dan membaca", "Ia datang ketika hujan"],
                    correctAnswer: 1,
                },
                {
                    question: "Kata kredibel memiliki makna ",
                    answers: ["Dapat dipercaya", "Tidak jelas", "Meragukan", "Tidak penting"],
                    correctAnswer: 0,
                },
                {
                    question: "Kalimat yang menggunakan kata secara tepat adalah",
                    answers: ["Ia menonton film itu dengan seksama", "Ia menonton film itu dengan saksama", "Ia menonton film itu dengan sesak mata", "Ia menonton film itu dengan sesakamaan"],
                    correctAnswer: 1,
                },
                {
                question: "Kata yang memiliki makna sama dengan relevan adalah ...",
                answers: ["Berkaitan", "Bertentangan", "Terpisah", "Terabaikan"],
                correctAnswer: 0,
                },
                {
                question: "Kalimat yang menggunakan kata berimbuhan secara tepat adalah ...",
                answers: [
                    "Petugas mengkoordinir kegiatan tersebut.",
                    "Petugas mengoordinasikan kegiatan tersebut.",
                    "Petugas koordinasikan kegiatan tersebut.",
                    "Petugas mengkoordinasikan kegiatan tersebut."
                ],
                correctAnswer: 1,
                },
                {
                question: "Makna kata sporadis adalah ...",
                answers: [
                    "Teratur dan berkelanjutan",
                    "Terjadi secara merata",
                    "Terjadi sesekali atau tidak teratur",
                    "Dilakukan secara bersama-sama"
                ],
                correctAnswer: 2,
                },
                {
                question: "Kalimat yang menggunakan majas litotes adalah ...",
                answers: [
                    "Silakan mampir ke gubuk sederhana kami.",
                    "Suaranya menggelegar hingga seluruh ruangan.",
                    "Langit menangis sepanjang malam.",
                    "Ia berlari secepat kilat."
                ],
                correctAnswer: 0,
                },
                {
                question: "Kata yang memiliki makna berlawanan dengan ekspansif adalah ...",
                answers: ["Meluas", "Berkembang", "Menyebar", "Menyempit"],
                correctAnswer: 3,
                },
                {
                question: "Kalimat yang menggunakan konjungsi konsesif adalah ...",
                answers: [
                    "Ia tetap mengikuti lomba sekalipun sedang kurang sehat.",
                    "Ia mengikuti lomba karena ingin menang.",
                    "Ia mengikuti lomba agar mendapat pengalaman.",
                    "Ia mengikuti lomba setelah mendaftar."
                ],
                correctAnswer: 0,
                },
                {
                question: "Kata yang memiliki makna sama dengan akumulasi adalah ...",
                answers: ["Pembagian", "Penumpukan", "Pengurangan", "Pemisahan"],
                correctAnswer: 1,
                },
                {
                question: "Kalimat yang menggunakan kata berpasangan secara tepat adalah ...",
                answers: [
                    "Baik guru atau siswa harus mematuhi aturan.",
                    "Baik guru maupun siswa harus mematuhi aturan.",
                    "Baik guru serta maupun siswa harus mematuhi aturan.",
                    "Baik guru dan maupun siswa harus mematuhi aturan."
                ],
                correctAnswer: 1,
                },
                {
                question: "Makna kata distorsi adalah ...",
                answers: [
                    "Penyempurnaan",
                    "Penguatan",
                    "Penyimpangan atau perubahan bentuk",
                    "Penyesuaian yang tepat"
                ],
                correctAnswer: 2,
                },
                {
                question: "Kalimat yang memiliki penggunaan kata paling tepat adalah ...",
                answers: [
                    "Pendapat itu dapat dikonfirmasi melalui sumber terpercaya.",
                    "Pendapat itu dapat dikonfirmasikan melalui sumber terpercaya.",
                    "Pendapat itu dapat mengkonfirmasi melalui sumber terpercaya.",
                    "Pendapat itu dapat konfirmasi melalui sumber terpercaya."
                ],
                correctAnswer: 0,
                },
                    ],
                },
            hard : {
             material : [

            ],
            questions : [
                {
                    question: "Kalimat yang mengandung ambiguitas adalah",
                    answers: ["Siswa membaca buku di perpustakaan", "Ibu membeli buah di pasr", "Dita melihat pria dengan teropong", "Ayah menanam pohon di kalaman"],
                    correctAnswer: 2,
                },
                {
                    question: 'Perbaikan kalimat "Para siswa diwajibkan untuk supaya memakai seragam"adalah',
                    answers: ["Para siswa diwajibkan supaya memakai seragam", "Siswa diwajibkan memakai seragam", "Para siswa untyk memakai seragam", "Siswa diwajibkan untuk supaya seragam"],
                    correctAnswer: 1,
                },
                {
                    question: "Penulisan kata serapan yang benar adalah",
                    answers: ["Sistim", "Analisa", "Resiko", "obyek"],
                    correctAnswer: 2,
                },
                {
                    question: "Kalimat yang menggunakan majas hiperbola adalah ",
                    answers: ["Suaranya terdengar lembut", "Aku menunggumu selama seribu tahun", "Ia berjalan menuju rumah", "Matahari terbitpagi ini"],
                    correctAnswer: 1,
                },
                {   
                    question: "Kata kontemporer memiliki makna",
                    answers: ["Kuno", "Masa lampau", "Masa kini", "Tradisional"],
                    correctAnswer: 2,
                },
                {   
                    question: "Kalimat yang benar secara struktur adalah",
                    answers: ["karena ia terlambat sehingga tidak mengikuti ujian", "Ia terlambat, sehingga gidak mengikuti ujian", "Karena terlambat, ia tiadk mengikuti ujian", "Ia karena terlambat tidak mengikuti ujian sehingga"],
                    correctAnswer: 2,
                },
                {   
                    question: "Penulisan tanda titik dua yang benar adalah",
                    answers: ["ia membawa : buku, pensil, dan penghapus", "Ia membawa beberapa alat tulis : Buku, pensil dan penghapus", "Ia : membawa buku, pensil, dan penghapus", "Ia membawa buku : Pensil : dan penghapus"],
                    correctAnswer: 1,
                },
                {   
                    question: "Kata efisien memiliki makna ",
                    answers: ["Menghabiskan banyak sumber daya ", "berhasil tanpatujuan", "menghasilkan sesuatu dengan tepat dan tidak membuang sumber daya", "Tidak teratur"],
                    correctAnswer: 2,
                },
                {   
                    question: "Kalimat yang mengandung kesalahan penggunaan imbuhan adalah",
                    answers: ["mereka mempelajari materi tersebut", "Ia megkritik hasil pekerjaan", "guru mensosialisaikan atyran sekolah", "ibu mengkonsumsi makanan sehat"],
                    correctAnswer: 3,
                },
                {   
                    question: 'Perbaikan kalimat "Bagi siswa yang terlambat harap melapor" agar lebih efektif adalah',
                    answers: ["Bagi siswa yang terlambat harap melapor", "Siswa yang terlambat diharapkan melapor", "untuk siswa terlambat harap melapor", "Siswa terlambat bagi harap melapo"],
                    correctAnswer: 1,
                },
                {
                    question: "Kata implisit memiliki makna ",
                    answers: ["Disampaikan secara langsung", "Tersurat dengan jelas", "Terkandung secara tidak langsung", "Tidak memiliki arti"],
                    correctAnswer: 2,
                },
                {
                    question: 'Kalimat yang menggunakan kata "daripada"dengan benar adalah',
                    answers: ["Ia lebih tinggi daripada adiknya", "Daripada belajar, ia tidur", "Buku itu daripada meja", "Saya darpada ia pergi"],
                    correctAnswer: 0,
                },
                {
                    question: "Kalimat yang menggandung kesalahan logika adalah",
                    answers: ["Semua manusia membutuhkan air", "Sebagian siswa mengikuti lomba", "Semua ikan hidup di air, termasuk ikan yang hidup di darat", "Ayah bekerja setiap hari"],
                    correctAnswer: 2,
                },
                {
                question: "Kalimat yang mengandung ketidaktepatan pemilihan diksi adalah ...",
                answers: [
                    "Peneliti mengumpulkan data melalui wawancara.",
                    "Siswa menyusun laporan berdasarkan hasil pengamatan.",
                    "Narasumber memberikan jawaban yang sangat aktual terhadap pertanyaan sejarah masa lalu.",
                    "Pihak sekolah menyampaikan pengumuman secara tertulis."
                ],
                correctAnswer: 2,
                },
                {
                question: "Makna kata tendensius adalah ...",
                answers: [
                    "Netral dan tidak memihak.",
                    "Cenderung memihak atau mengarahkan pada pandangan tertentu.",
                    "Berdasarkan fakta yang lengkap.",
                    "Bersifat terbuka terhadap semua pendapat."
                ],
                correctAnswer: 1,
                },
                {
                question: "Kalimat yang paling tepat dari segi penggunaan diksi adalah ...",
                answers: [
                    "Para ahli memberikan masukan untuk mengoreksi kekurangan program tersebut.",
                    "Para ahli memberikan masukan untuk memperbaiki kekurangan program tersebut.",
                    "Para ahli memberikan masukan untuk membenarkan kekurangan program tersebut.",
                    "Para ahli memberikan masukan untuk menyalahkan kekurangan program tersebut."
                ],
                correctAnswer: 1,
                },
                {
                question: "Kata yang memiliki makna sama dengan inferensi adalah ...",
                answers: [
                    "Kesimpulan yang diperoleh dari penalaran.",
                    "Pernyataan yang tidak memiliki bukti.",
                    "Pendapat yang disampaikan secara langsung.",
                    "Pengamatan tanpa tujuan."
                ],
                correctAnswer: 0,
                },
                {
                question: "Kalimat yang mengandung kesalahan penggunaan kata adalah ...",
                answers: [
                "Ia mengemukakan pendapat dalam forum diskusi.",
                "Kami menelaah dokumen tersebut secara mendalam.",
                "Mereka mengabsahkan keputusan yang sudah disepakati.",
                "Pihak sekolah mengimplementasikan kebijakan tersebut."
                ],
                correctAnswer: 2,
                },
                {
                question: "Makna kata konvergen adalah ...",
                answers: [
                    "Menyebar ke berbagai arah.",
                    "Mengarah pada titik atau tujuan yang sama.",
                    "Berjalan tanpa arah.",
                    "Bertentangan secara menyeluruh."
                ],
                correctAnswer: 1,
                },
                {
                question: "Kalimat yang memiliki hubungan perbandingan paling tepat adalah ...",
                answers: [
                    "Hasil penelitian ini berbeda dengan penelitian sebelumnya.",
                    "Hasil penelitian ini lebih akurat dibandingkan hasil penelitian sebelumnya.",
                    "Hasil penelitian ini karena penelitian sebelumnya.",
                    "Hasil penelitian ini meskipun penelitian sebelumnya."
                ],
                correctAnswer: 1,
                },
                {
                question: "Kata yang memiliki makna berlawanan dengan substansial adalah ...",
                answers: ["Penting", "Pokok", "Mendasar", "Sepele"],
                correctAnswer: 3,
                },
                {
                question: "Kalimat yang mengandung kesalahan penggunaan kata penghubung adalah ...",
                answers: [
                    "Ia tidak hanya menguasai teori, tetapi juga mampu menerapkannya.",
                    "Mereka memilih belajar mandiri daripada bergantung pada orang lain.",
                    "Selain bekerja keras, ia juga menjaga kedisiplinan.",
                    "Meskipun tugasnya berat, namun ia menyelesaikannya tepat waktu."
                ],
                correctAnswer: 3,
                },
                {
                question: "Makna kata akuntabel adalah ...",
                answers: [
                    "Dapat dipertanggungjawabkan.",
                    "Mudah dipengaruhi.",
                    "Tidak memiliki tujuan.",
                    "Bersifat rahasia."
                ],
                correctAnswer: 0,
                },
            ],
        },
        expert : {
            material : [

            ],
            questions : [
                {
                    question: "Kalimat yang paling efektif dan sesuai kaidah bahasa indonesia adalah ",
                    answers: ["Berdasarkan hasil penelitian menunjukan bahwa kebiasaan membaca meningkat", "Hasil penelitian menunjukan bahwa kebiasaan membaca meningkat", "Dari hasil penelitian menunjukan kebiasaan membaca meningkat", "Penelitian berdasarkan hasil menunjukan membaca meningkat"],
                    correctAnswer: 1,
                },
                {
                    question: "Perhatikan kalimat berikut \n\n Dia merupakan seesorang yang sangat amat berpengalaman\n\n Perbaikan paling tepat adalah",
                    answers: ["Dia merupakan seseorang yang sangat berpengalaman", "Dia sangat amat berpengalaman sekali", "Dia berpengalaman sangat amat", "Dia adalah merupakan orang berpengalaman"],
                    correctAnswer: 0,
                },
                {
                    question: "Kata paradoks memiliki makna",
                    answers: ["Pernyataan yang selalu benar", "Pernyataan yang tampak bertentangan, tetapi dapat mengandung kebenaran", "Pernyataan yang tidak memiliki makna", "Pernyataan yang berupa fakta mutlak"],
                    correctAnswer: 1,
                },
                {
                    question: "Kalimat yang mengandung kesalahan penggunaan konjungsi adalah",
                    answers: ["Ia belajar agar memperoleh nilai baik", "Meslipun lelah, ia tetap bekerja", "Karena hujan deras, sehingga jalan terbenam", "Ia pergi setelah menyelesaikan tugas"],
                    correctAnswer: 2,
                },
                {
                    question: "Perhatkan kalimat beriku \n\n Pemerintah perlu mengkaji ulang kebijakn tersebut secara komprehensif  \n\n Makna kata komprehensif adalah ",
                    answers: ["Sebagian saja", "menyeluruh", "sederhana", "Singkat"],
                    correctAnswer: 1,
                },
                {
                    question: "Kalimat yang paling tepat secara gramatikal adlah",
                    answers: ["sehubungan dengan hal tersebut, maka kegiatan ditunda", "sehubungan hal tersebut kegiatan ditunda", "Sehubungan dengan hal tersebut, kegiatan ditunda", "Sehubungan hal tersebut, maka kegiatan ditunda"],
                    correctAnswer: 2,
                },
                {
                    question: "Penulisan kalimat langsung dengan benar adalah",
                    answers: ['"Saya akan pergi", kata rani', '"Saya akan pergi," kata rani', '"Saya akan pergi" kata rani', 'Saya akan pergi,"kata rani"'],
                    correctAnswer: 1,
                },
                {
                    question: "Kalimat yang mengandung majas ironi adalah",
                    answers: ["Wah, rajin sekali kamu, tugas yang kemarin saja belum selesai!", "Ia bekerja dengan sangat tekun", "Matahari bersinar dengan terang", "suaranya merdu"],
                    correctAnswer: 0,
                },
                {
                    question: "perhatikan kalimat berikut! \n\n Pihak sekolah melakukan evaluasi terhadap siswa guna untuk mengetahui perkembangan pembelajaran \n\n Perbaikan paling tepat adalah",
                    answers: ["Pihak sekolah melakukan evaluasi terhadap siswa guna mengetahui perkembangan pembelajaran", "Pihak sekolah melakukan evaluasi siswa guna untuk perkembangan pembelajaran", "Pihak sekolah evaluasi siswa untuk guna mengetahui perkembangan pembelajaran", "Pihak sekolah melakukan evaluasi terhadap siswa untuk guna mengetahui pembelajaran"],
                    correctAnswer: 0,
                },
                {
                    question: "Kata resip lokal memiliki makna ",
                    answers: ["Sepihak", "Timbal balik", "Berlawanan", "Berulang"],
                    correctAnswer: 1,
                },
                {
                    question: "Kalimat yangmemiliki makna konotatif adalah",
                    answers: ["Ia membeli bunga di toko", "Bunga itu berwarna merah", "Ia menjadi bunga desa di kampungnya", "Bunga mawar itu harum"],
                    correctAnswer: 2,
                },
                {
                    question: "Perhatikan kalimat berikut! \n\n Setiap peserta diwajibkan membawa identitas masing-masing \n\n kalimat tersebut ",
                    answers: ['Tidak efektif karena kata "setiap" tidak boleh digunakan', "Efektif dan jelas", "Tidak efektif karena kata identitas tidak baku", 'Tidak efektif karena "masing-masing" harus dihilangkan'],
                    correctAnswer: 1,
                },
                {
                    question: "Penulisan kata yang tepat adalah ",
                    answers: ["Pertanggung jawaban ", "Pertanggungjawaban", "Pertanggung-jawaban", "Pertanggung Jawaban"],
                    correctAnswer: 1,
                },
                {
                    question: "Kalimat yang memiliki struktur paling jelas adalah ",
                    answers: ["Setelah membaca buku itu, pikiran saya lebih terbuka", "Setelah membaca buku itu, buku tersebut memberikan wawasan ", "Setelah membaca buku itu, wawsan menjadi buku", "Setelah membaca buku itu, pembaca itu menjadi buku"],
                    correctAnswer: 0,
                },
                {
                    question: "Perhatikan kalimat berikut! \n\n Tidak semua informasi yang viral merupakan informasi yang valid \n\n Makna yang paling tepat adalah",
                    answers: ["Semua informasi viral pasti benar", "Informasi viral selalu salah", "popularitas informasi tidak menjamin kebenarannya ", "Informasi valid harus sealalu viral"],
                    correctAnswer: 2,
                },
                {
                    question: "Kalimat yang paling tepat dalam penggunaan diksi dan struktur adalah ...",
                    answers: [
                        "Perubahan tersebut berdampak terhadap peningkatan produktivitas.",
                        "Perubahan tersebut memberikan dampak dalam peningkatan produktivitas.",
                        "Perubahan tersebut berdampak pada peningkatan produktivitas.",
                        "Perubahan tersebut adalah berdampak peningkatan produktivitas."
                    ],
                    correctAnswer: 2,
                    },
                    {
                    question: "Makna kata eklektik adalah ...",
                    answers: [
                        "Menggunakan satu pendekatan secara mutlak.",
                        "Memilih dan menggabungkan unsur dari berbagai sumber atau pendekatan.",
                        "Menolak seluruh pendapat yang berbeda.",
                        "Mengikuti pola yang sama tanpa perubahan."
                    ],
                    correctAnswer: 1,
                    },
                    {
                    question: "Kalimat yang menunjukkan ketidaktepatan penggunaan kata adalah ...",
                    answers: [
                        "Ia menyimpulkan hasil penelitian berdasarkan data.",
                        "Penulis menguraikan masalah secara sistematis.",
                        "Tim melakukan analisis terhadap kondisi lapangan.",
                        "Mereka mengkalkulasi perkiraan hasil secara estimasi."
                    ],
                    correctAnswer: 3,
                    },
                    {
                    question: "Makna kata ambivalen adalah ...",
                    answers: [
                        "Memiliki dua perasaan atau sikap yang bertentangan terhadap sesuatu.",
                        "Memiliki pendirian yang selalu sama.",
                        "Menolak seluruh bentuk perubahan.",
                        "Tidak memiliki pendapat sama sekali."
                    ],
                    correctAnswer: 0,
                    },
                    {
                    question: "Kalimat yang paling tepat untuk menyatakan pembatasan suatu pendapat adalah ...",
                    answers: [
                        "Semua orang pasti menyetujui hasil tersebut.",
                        "Hasil tersebut selalu berlaku dalam setiap keadaan.",
                        "Hasil tersebut dapat berlaku dalam kondisi tertentu.",
                        "Hasil tersebut tidak membutuhkan pertimbangan lain."
                    ],
                    correctAnswer: 2,
                    },
                    {
                    question: "Kata yang memiliki makna sama dengan mitigasi adalah ...",
                    answers: [
                        "Peningkatan",
                        "Pengurangan risiko",
                        "Penyebaran",
                        "Penguatan dampak"
                    ],
                    correctAnswer: 1,
                    },
                    {
                    question: "Kalimat yang paling tepat berdasarkan kejelasan rujukan kata adalah ...",
                    answers: [
                        "Rina menyerahkan laporan kepada Dita setelah ia selesai mengerjakannya.",
                        "Setelah selesai mengerjakan laporan, Rina menyerahkannya kepada Dita.",
                        "Rina menyerahkan laporan setelah ia kepada Dita selesai.",
                        "Dita menyerahkan Rina laporan setelah selesai mengerjakan."
                    ],
                    correctAnswer: 1,
                    },
                    {
                    question: "Makna kata anomali adalah ...",
                    answers: [
                        "Keadaan yang sesuai dengan pola umum.",
                        "Perubahan yang direncanakan.",
                        "Penyimpangan dari keadaan atau pola normal.",
                        "Kesamaan antara dua keadaan."
                    ],
                    correctAnswer: 2,
                    },
                    {
                    question: "Kalimat yang paling tepat dalam penggunaan bahasa formal adalah ...",
                    answers: [
                        "Berdasarkan pertimbangan yang matang, keputusan tersebut perlu ditinjau kembali.",
                        "Berdasarkan pertimbangan matang, maka keputusan tersebut perlu ditinjau kembali.",
                        "Pertimbangan matang berdasarkan keputusan perlu ditinjau kembali.",
                        "Keputusan tersebut berdasarkan pertimbangan yang matang maka ditinjau kembali."
                    ],
                    correctAnswer: 0,
                    },
                    {
                    question: "Perhatikan kalimat berikut! Keberadaan data yang melimpah tidak serta-merta menjamin ketepatan interpretasi, sebab kualitas analisis turut menentukan validitas kesimpulan. Makna kata interpretasi pada kalimat tersebut adalah ...",
                    answers: [
                        "Pengumpulan informasi secara acak.",
                        "Penafsiran terhadap informasi atau data.",
                        "Penghapusan data yang tidak digunakan.",
                        "Penyajian data tanpa penjelasan."
                    ],
                    correctAnswer: 1,
                    },
            ],
        },
    },
    "bahasa-sunda":  {
        easy : {
            material : [

            ],
            questions : [
                {
                    question: 'Basa Sunda tina kecap "makan" nyaeta...',
                    answers: ["Sare", "Dahar", "Ulin", "Leumpang"],
                    correctAnswer: 1,
                },
                {
                    question: 'Basa Sunda tina kecap "rumah" nyaeta...',
                    answers: ["Imah", "Sakola", "Jalan", "Kebon"],
                    correctAnswer: 0,
                },
                {
                    question: 'kecap "Hatur nuhun" dina basa Indonesia hartina...',
                    answers: ["Selamat pagi", "Terima Kasih", "Sampai Jumpa", "Maaf"],
                    correctAnswer: 1,
                },
                {
                    question: 'Basa Sunda tina kecap "Tidur" nyaeta...',
                    answers: ["Ngadenge", "Nulis", "Maca", "Sare"],
                    correctAnswer: 3,
                },
                {
                    question: 'Kecap "Punten" biasana diucapkeun nalika...',
                    answers: ["Ngahaturkeun nuhun", "Menta izin atawa permisi", "Ngajak ulin", "Ngambek"],
                    correctAnswer: 1,
                },
                        {
                            question: 'Kecap basa Sunda tina "Minum" nyaeta...',
                            answers: ["Nginum","Dahar","Maca","Sare"],
                            correctAnswer: 0,
                        },
                        {
                            question: 'Kecap "Sakola" dina bahasa Sunda hartina...',
                            answers: ["Rumah","Sekolah","Pasar","Kebun"],
                            correctAnswer: 1,
                        },
                        {
                            question: "Lamun papanggih jeung babaturan dina waktu sore, salam anu merenah nyaeta...",
                            answers: ["Wilujeng wengi","Wilujeng enjing","Wilujeng Sonten","Wilujeng kulem"],
                            correctAnswer: 2,
                        },
                        {
                            question: 'Kecap basa Sunda tina "bermain" nyaeta...',
                            answers: ["Nulis","Ulin","Lumpat","Ngadenge"],
                            correctAnswer: 1,
                        },
                        {
                            question: 'Kecap "hapunten" biasana dipake pikeun...',
                            answers: ["Menta hampura","Ngajak dahar","Ngucapkeun salam","Ngajak indit"],
                            correctAnswer: 0,
                        },
            ],
        },
        intermediate : {
            material : [

            ],
            questions : [
                {
                    question: 'Basa sunda lemes tina kecap"makan" nyaeta...',
                    answers: ["Neda", "Dahar", "Nyatu", "Ngadahar"],
                    correctAnswer: 0,
                },
                {
                    question: 'Kecap "Abdi" dina basa Indonesia hartina...',
                    answers: ["Kamu", "Dia", "Saya", "Mereka"],
                    correctAnswer: 2,
                },
                {
                    question: 'Basa sunda tina kecap "berbicara" nyaeta...',
                    answers: ["Ngadahar", "Nyalira", "Nyarios", "Ngadenge"],
                    correctAnswer: 2,
                },
                {
                    question: 'Kecap "Anjeunna" hartina...',
                    answers: ["Saya", "Kamu", "Mereka", "Dia"],
                    correctAnswer: 3,
                },
                {
                    question: 'Basa sunda tina kecap "Berjalan" nyaeta...',
                    answers: ["Leumpang", "Lumpat", "Ulin", "Leuleumpangan"],
                    correctAnswer: 0,
                },
                {
                    question: 'kecap "wilujeng enjing" hartina...',
                    answers: ["Selamat malam", "Selamat siang", "Selamat pagi", "Selamat sore"],
                    correctAnswer: 2,
                },
                {
                    question: 'Basa lemes tina "tidur" nyaeta...',
                    answers: ["Sare", "Kulem", "Ulin", "Ngaso"],
                    correctAnswer: 1,
                },
                        {
                            question: "Dina paguneman jeung jalma anu leuwih kolot, ragam basa anu leuwih merenah digunakeun nyaeta...",
                            answers: ["Basa Kasar","Basa Loma","basa Lemes","Basa Gaul"],
                            correctAnswer: 2,
                        },
                        {
                            question: 'Kecap "Tuang" dina basa sunda kaasup kana ragam...',
                            answers: ["Basa kasar","Basa lemes","Basa loma","Basa sapopoe"],
                            correctAnswer: 1,
                        },
                        {
                            question: "Kecap gaganti jalma kahiji jamak dina basa sunda nyaeta...",
                            answers: ["Urang","Manehna","Anjeunna","Anjeun"],
                            correctAnswer: 0,
                        },
                        {
                            question: 'Dina basa Sunda, kecap "anjeunna" dipake pikeun nyebut...',
                            answers: ["Jalma kahiji","Jalma kadua","Jalma katilu","Jalma loba"],
                            correctAnswer: 2,
                        },
                        {
                            question: "Salah sahiji tujuan ngagunakeun basa lemes nyaeta...",
                            answers: ["Nembongkeun rasa hormat","Ngabedakeun asal daerah","Ngagampangkeun basa sapopoe","Ngagampangkeun tulisan"],
                            correctAnswer: 0,
                        },
                        {
                            question: 'Kecap "Wilujeung wengi" biasana dipake nalika...',
                            answers: ["Isuk-isuk","Beurang","Sore","Peuting"],
                            correctAnswer: 3,
                        },
                        {
                            question: "Dina komunikasi basa Sunda, pilihan kecap kudu diperhatikeun dumasar kana...",
                            answers: ["Warna pakean","Umur jeung hubungan jeung lawan nyarita","Tempat meuli kadaharan","Jenis kaulinan"],
                            correctAnswer: 1,
                        },
            ], 
        },
        medium : {
            material : [

            ],
            questions : [
                {
                    question: 'Babasan "Gede hulu" hartina...',
                    answers: ["Sombong", "Rajin", "Bangor", "Polontong"],
                    correctAnswer: 0,
                },
                {
                    question: 'Babasan "Panjang leungeun" hartina...',
                    answers: ["Suka membantu", "Suka mencuri", "Suka kamu", "Suka bekerja"],
                    correctAnswer: 1,
                },
                {
                    question: 'Babasan "Beurat-birit" hartina...',
                    answers: ["Sika membantu", "Mudah marah", "Malas", "Suka berbicara"],
                    correctAnswer: 2,
                },
                {
                    question: 'Babasan "Hampang leungeun" hartina...',
                    answers: ["Suka membantu", "Suka tidur", "Suka marah", "Suka berbohong"],
                    correctAnswer: 0,
                },
                {
                    question: 'Babasan "tiis ceuli panas mata" hartina...',
                    answers: ["Suka melihat", "Tidak peduli", "Suka mendengar", "Merasa kesal atau terganggu"],
                    correctAnswer: 3,
                },
                {
                    question: 'Babasan "cicing dina meja" lain babasan anu bener, sedengkeun "cicing dina pangkonan" bisa ngagambarkeun...',
                    answers: ["Berjalan jauh", "Duduk atau diam dalam pangkuan", "Berlari cepat", "Tidur di jalan"],
                    correctAnswer: 1,
                },
                {
                    question: 'Babasan "amis budi" hartina...',
                    answers: ["Baik hati dan ramah", "Suka marah", "Suka menipu", "Malas"],
                    correctAnswer: 0,
                },
                {
                    question: 'Babasan "Kawas kacang poho ka kulitna" hartina...',
                    answers: ["Suka menolong", "Tidak mudah menyerah", "Lupa asal-usul", "Rajin bekerja"],
                    correctAnswer: 2,
                },
                {
                    question: 'Babasan "kandeul kulit beungeut" hartrina...',
                    answers: ["Pemalu", "Tidak tahu malu", "Sopan", "Baik hati"],
                    correctAnswer: 1,
                },
                {
                    question: 'Babasan "ngukur ka kujur, nimbang ka awak" hartina...',
                    answers: ["Bertindak sesuai dengan kempuan diri sendiri", "Mengukur tinggi badan", "Suka membandingkan orang", "Suka berbuat seenaknya"],
                    correctAnswer: 0,
                },
                        {
                            question: 'Babasan "handap asor" ngagambarkeun jalma anu...',
                            answers: ["Sombong jeung adigung","rendah hati jeung henteu sombong","Gampang ambek","Teu daek gaul"],
                            correctAnswer: 1,
                        },
                        {
                            question: 'Jalma anu disebut "Panjang akal" nyaeta jalma anu...',
                            answers: ["Boga loba akal pikeun ngarengsekeun masalah","Gampang poho","teu resep diajar","Sok ngalakukeun"],
                            correctAnswer: 0,
                        },
                        {
                            question: 'Babasan "Hampang birit" ngagambarkeun jalma anu...',
                            answers: ["Gampang cape","Teu resep gawe","Rajin jeung daek ngalakukeun pagawean","Gampang ambek"],
                            correctAnswer: 2,
                        },
                        {
                            question: 'Ungkara "Hade tata hade basa" raket patalina jeung...',
                            answers: ["Kaahlian olahraga","Kasopanan dina paripolah jeung nyarita","Kabeungharan","Kapinteuran ngagambar"],
                            correctAnswer: 1,
                        },
                        {
                            question: 'Jalma anu miboga sipat "gede ambek" biasana...',
                            answers: ["Gampang seuri","Gampang ambek","sabar pisan","Handap asor"],
                            correctAnswer: 1,
                        },
                        {
                            question: 'Babasan "beungeut nyanghareup, ati mungkir" ngandung harti...',
                            answers: ["Jalma anu jujur","Jalma anu bageur","Jalma anu teu sajalan antara omongan jeung hatena","Jalma nau rajin"],
                            correctAnswer: 2,
                        },
                        {
                            question: 'Babasan "leuleus jeujeur liat tali" ngagambarkeun sipat...',
                            answers: ["Teguh dina prinsip tapi bisa nyaluyukeun diri","Gampang nyerah","Teu boga pamadegan","Sok ngabohong"],
                            correctAnswer: 0,
                        },
                        {
                            question: 'Jalma anu miboga sipat "someah" biasana...',
                            answers: ["Sombong ka batur","Ramah jeung resep nyapa","Gampang ambek","teu daek nulungan"],
                            correctAnswer: 1,
                        },
                        {
                            question: 'Babasan "Gede hate" bisa ngagambarkeun jalma anu...',
                            answers: ["Gampang sieun","Gampang nyerah","Wani jeung boga kayakinan","Teu percaya diri"],
                            correctAnswer: 2,
                        },
                        {
                            question: "Dina kahirupan sapopoe, babasan biasana dipake pikeun...",
                            answers: ["Ngaganti sakabeh kecap dina kalimah","Ngagambarkeun sipat atawa kaayaan sacara kiasan","Nyebutkeun jumlah barang","Ngitung jumlah barang"],
                            correctAnswer: 1,
                        },
            ],
        },
        hard : {
            material : [

            ],
            questions : [
                {
                    question: "Kota bandung mengrupa ibu kota...",
                    answers: ["Jawa Tengah", "Jawa Timur", "Jawa Barat", "Banten"],
                    correctAnswer: 2,
                },
                {
                    question: "Situ Patenggang aya di wilayah...",
                    answers: ["Ciwidey", "Lembang", "Cianjur", "Sumedang"],
                    correctAnswer: 0,
                },
                {
                    question: "Gunung Tangkuban Parahu aya di wilayah...",
                    answers: ["Garut", "Lembang", "Ciamis", "Majalengka"],
                    correctAnswer: 1,
                },
                {
                    question: "Waduk Jatiluhur aya di Kabupaten...",
                    answers: ["bandung", "Sumedang", "Bogor", "Purwakarta"],
                    correctAnswer: 3,
                },
                {
                    question: "Pangandaran ka sohor minangka tempat...",
                    answers: ["Wisata Pantai", "Wisata gunung", "Wisata sawah", "Wisata kota"],
                    correctAnswer: 0,
                },
                {
                    question: "Kota Bogor ka sohor ku...",
                    answers: ["Pantai", "Kebun raya Bogor", "Candi", "Tambang Lauk"],
                    correctAnswer: 1,
                },
                {
                    question: "Gunung Papandayan aya di Kabupaten...",
                    answers: ["Garut", "Cirebon", "Bogor", "Karawang"],
                    correctAnswer: 0,
                },
                {
                    question: "Kota Cirebon kasohor ku budaya...",
                    answers: ["Betawi", "Batak", "Minang", "Sunda jeung Jawa"],
                    correctAnswer: 3,
                },
                {
                    question: "Situs Sajarah Astana Gede Kawali aya di kabupaten...",
                    answers: ["Ciamis", "Bandung", "Bogor", "Sukabumi"],
                    correctAnswer: 0,
                },
                {
                    question: "Gunung Galanggung aya di wilayah...",
                    answers: ["Sukabumi", "Tasikmalaya", "Sumedang", "Karawang"],
                    correctAnswer: 1,
                },
                {
                    question: "Kota Sukabumi aya di bagian____Jawa Barat...",
                    answers: ["Timur", "Utara", "Barat", "Tengah"],
                    correctAnswer: 2,
                },
                {
                    question: "curug Cimahi kasohor minangka tempat wisata...",
                    answers: ["Air terjun", "Pantai", "Danau", "Guha"],
                    correctAnswer: 0,
                },
                {
                    question: "Kota Sumedang kasohor ku kadaharan khas nyaeta...",
                    answers:["Pempek","Gudeg","Rendang","Tahu"],
                    correctAnswer: 3,
                },
                        {
                            question: "Gunung Ciremai mangrupa gunung anu aya di wewengkon...",
                            answers: ["Kuningan jeung Majalengka","Bogor jeung Depok","Garut jeug Tasikmalaya","Ciamis jeung Pangandaran"],
                            correctAnswer: 0,
                        },
                        {
                            question: "Waduk Jatigede mangrupa tempat wisata anu aya di Kabupaten ...",
                            answers: ["Cianjur", "Sumedang", "Sukabumi", "Karawang"],
                            correctAnswer: 1,
                        },
                        {
                            question: "Kawah Putih mangrupa tempat wisata alam anu kasohor ku ...",
                            answers: ["Cai laut anu hérang", "Situ anu loba laukna", "Kawah jeung cai anu warnana bodas kehijauan", "Leuweung pinus anu lega"],
                            correctAnswer: 2,
                        },
                        {
                            question: "Karaton Kasepuhan mangrupa salah sahiji tempat sajarah anu aya di ...",
                            answers: ["Cirebon", "Bandung", "Garut", "Bogor"],
                            correctAnswer: 0,
                        },
                        {
                            question: "Kota Indramayu kasohor minangka salah sahiji daérah panghasil ...",
                            answers: ["Apel", "Mangga", "Stroberi", "Salak Bali"],
                            correctAnswer: 1,
                        },
                        {
                            question: "Curug Malela mangrupa wisata alam anu aya di Kabupaten ...",
                            answers: ["Bandung Barat", "Ciamis", "Cirebon", "Subang"],
                            correctAnswer: 0,
                        },
                        {
                            question: "Situ Cileunca perenahna di wewengkon ...",
                            answers: ["Pangalengan", "Jatinangor", "Cibinong", "Palabuhanratu"],
                            correctAnswer: 0,
                        },
                        {
                            question: "Kadaharan khas Garut anu geus dipikawanoh ku masarakat nyaéta ...",
                            answers: ["Dodol", "Pempek", "Kerak telor", "Gudeg"],
                            correctAnswer: 0,
                        },
                        {
                            question: "Taman Nasional Gunung Gede Pangrango ngawengku kawasan pagunungan anu aya di sabudeureun ...",
                            answers: ["Cianjur, Sukabumi, jeung Bogor", "Cirebon, Indramayu, jeung Subang", "Garut, Ciamis, jeung Kuningan", "Karawang, Bekasi, jeung Depok"],
                            correctAnswer: 0,
                        },
                        {
                            question: "Basisir Ujung Genteng mangrupa salah sahiji tempat wisata laut anu aya di Kabupaten ...",
                            answers: ["Bogor", "Sukabumi", "Sumedang", "Majalengka"],
                            correctAnswer: 1,
                        },
                        {
                            question: "Kabupatén Subang kasohor ku hasil tatanénna, utamana ...",
                            answers: ["Nanas", "Gandum", "Kurma", "Anggur"],
                            correctAnswer: 0,
                        },
                        {
                            question: "Walungan Citarum miboga mangpaat pikeun kahirupan masarakat, salah sahijina nyaéta ...",
                            answers: ["Tempat ngawangun gunung", "Sumber cai pikeun irigasi jeung kabutuhan séjén", "Tempat melak tangkal di laut", "Jalan pikeun kandaraan darat"],
                            correctAnswer: 1,
                        },
                        {
                            question: "Salah sahiji ciri lingkungan alam di Jawa Barat nyaéta ...",
                            answers: ["Sakabéh wilayahna mangrupa gurun", "Teu miboga pagunungan", "Miboga rupa-rupa bentang alam ti pagunungan nepi ka basisir", "Sakabéh wilayahna mangrupa lautan"],
                            correctAnswer: 2,
                        },
                    ],
        },
        expert : {
            material : [

            ],
            questions : [
                {
                    question: "Aksara Sunda ᮊ dibaca...",
                    answers: ["Ba", "Ka", "Ra", "Sa"],
                    correctAnswer: 1,
                },
                {
                    question: "Aksara Sunda ᮘ dibaca...",
                    answers: ["Ma", "Ta", "Ba", "Ra"],
                    correctAnswer: 2,
                },
                {
                    question: "Aksara Sunda ᮔ dibaca...",
                    answers: ["Pa", "Na", "Wa", "Ja"],
                    correctAnswer: 1,
                },
                {
                    question: "Aksara sunda ᮙ dibaca...",
                    answers: ["Ma", "Ga", "Ha", "Ca"],
                    correctAnswer: 0,
                },
                {
                    question: "Imah adat Sunda anu bentuk hateupna siga jangjang manuk keur ngembang disebut...",
                    answers: ["Jolopong", "Julang Ngapak", "badak Heuay", "Parahu Kumereb"],
                    correctAnswer: 1,
                },
                {
                    question: "Imah adat Sunda anu wangun hateupna siga parahu nangkub disebut...",
                    answers: ["Tagog Anjing", "Julang Ngapak", "Parahu Kumereb", "Jolopong"],
                    correctAnswer: 2,
                },
                {
                    question: "Imah adat Sunda anu hateupna wangun pelana Panjang sarta basajan disebut...",
                    answers: ["Jolopong", "Badak Heuay", "Julang Ngapak", "Parahu Kumereb"],
                    correctAnswer: 0,
                },
                {
                    question: "Wangun hateup imah adat Badak Heuay miboga ciri...",
                    answers: ["Siga Jangjang Manuk", "Siga Manuk ngapung", "Siga Gunung", "Siga Batu"],
                    correctAnswer: 2,
                },
                {
                    question: "Imah adat Sunda umumna diwangun ku bahan...",
                    answers: ["Beton jeung kaca", "Baja jeung plastik", "Kai jeung awi", "Taneh liat jeung batu"],
                    correctAnswer: 2,
                },
                {
                    question: "Kampung Naga perenahna di Kabupaten...",
                    answers: ["Tasikmalaya", "Sumedang", "Bandung", "Karawang"],
                    correctAnswer: 0,
                },
                {
                    question: "Kampung Baduy aya di wilayah...",
                    answers: ["Bandung", "Tasikmalaya", "Banten", "Garut"],
                    correctAnswer: 2,
                },
                {
                    question: "Kampung adat anu aya di Kabupaten Ciamis sarta kasohor ku aturan adatna nyaeta...",
                    answers: ["Kampung Naga", "Kampung Kuta", "Kampung Baduy", "Kampung Paseh"],
                    correctAnswer: 1,
                },
                {
                    question: "Kampung Cikondang mangrupa kampung adat anu aya di wilayah...",
                    answers: ["Kabupaten Bandung", "Kabupaten Garut", "Kabupaten Sumedang", "Kabupaten Sukabumi"],
                    correctAnswer: 0,
                },
                {
                    question: "Salah sahiji tujuan ngajaga kampung adat jeung imah tradisional Sunda nyaeta...",
                    answers: ["Ngaleungitkeun kabudayaan lokal", "Ngaganti kabiasaan masarakat", "Ngamumule budaya jeung tradisi", "Ngahindarkeun kagiatan adat"],
                    correctAnswer: 2,
                },
                        {
                            question: "Aksara Sunda ᮌ dibaca ...",
                            answers: ["Ga", "Ka", "Da", "Ma"],
                            correctAnswer: 0,
                        },
                        {
                            question: "Aksara Sunda ᮛ dibaca ...",
                            answers: ["La", "Ra", "Wa", "Ya"],
                            correctAnswer: 1,
                        },
                        {
                            question: "Aksara Sunda ᮃ mangrupa aksara swara anu dibaca ...",
                            answers: ["I", "U", "A", "O"],
                            correctAnswer: 2,
                        },
                        {
                            question: "Dina sistem tulisan Sunda, aksara swara digunakeun pikeun nuliskeun ...",
                            answers: ["Sora vokal", "Angka", "Tanda baca", "Ngaran tempat"],
                            correctAnswer: 0,
                        },
                        {
                            question: "Rarangkén dina aksara Sunda miboga fungsi pikeun ...",
                            answers: ["Ngarobah atawa nambahkeun sora dina aksara dasar", "Ngaganti sakabéh aksara", "Nulis angka wungkul", "Ngagambar wangun imah"],
                            correctAnswer: 0,
                        },
                        {
                            question: "Imah adat Sunda anu wangun wangunanna diwangun di luhur taneuh disebut ...",
                            answers: ["Imah susun", "Imah panggung", "Imah gedong", "Imah susun batu"],
                            correctAnswer: 1,
                        },
                        {
                            question: "Bagian handap imah panggung anu aya di antara taneuh jeung lanté disebut ...",
                            answers: ["Kolong", "Jandéla", "Panto", "Hateup"],
                            correctAnswer: 0,
                        },
                        {
                            question: "Bahan anyaman tina awi anu mindeng dipaké pikeun témbok imah tradisional Sunda disebut ...",
                            answers: ["Beton", "Bilik", "Kaca", "Keramik"],
                            correctAnswer: 1,
                        },
                        {
                            question: "Salah sahiji tujuan wangunan imah panggung nyaéta ...",
                            answers: ["Ngajaga imah tina kaayaan taneuh anu baseuh", "Ngahalangan cahaya panonpoé sagemblengna", "Ngaleungitkeun sirkulasi hawa", "Ngajadikeun imah teu boga lanté"],
                            correctAnswer: 0,
                        },
                        {
                            question: "Dina kahirupan masarakat Sunda baheula, imah adat biasana miboga fungsi minangka ...",
                            answers: ["Tempat hiburan wungkul", "Tempat cicing jeung ngumpul kulawarga", "Tempat dagang wungkul", "Tempat nyimpen kandaraan"],
                            correctAnswer: 1,
                        },
                        {
                            question: "Kampung adat Kasepuhan Ciptagelar perenahna di wewengkon ...",
                            answers: ["Sukabumi", "Cirebon", "Sumedang", "Karawang"],
                            correctAnswer: 0,
                        },
                        {
                            question: "Kampung Dukuh mangrupa kampung adat anu aya di Kabupaten ...",
                            answers: ["Garut", "Bogor", "Bandung", "Kuningan"],
                            correctAnswer: 0,
                        },
                        {
                            question: "Kampung Urug mangrupa salah sahiji kampung adat anu aya di wilayah ...",
                            answers: ["Bogor", "Pangandaran", "Cirebon", "Majalengka"],
                            correctAnswer: 0,
                        },
                        {
                            question: "Kampung Mahmud mangrupa kampung adat anu aya di wewengkon ...",
                            answers: ["Kabupaten Bandung", "Kabupaten Subang", "Kabupaten Ciamis", "Kabupaten Indramayu"],
                            correctAnswer: 0,
                        },
                        {
                            question: "Salah sahiji cara pikeun ngajaga kalestarian kampung adat nyaéta ...",
                            answers: ["Ngarobah sakabéh tradisi karuhun", "Ngahapus aturan adat", "Ngajaga lingkungan jeung ngalaksanakeun tradisi anu diwariskeun", "Ninggalkeun kabudayaan lokal"],
                            correctAnswer: 2,
                        },

            ],
        },
    },
    "sastra-indonesia":  {
        easy : {
            material : [

            ],
            questions : [
                {
                    question: 'Arti pribahasa"Bagai air di daun talas" Adalah?',
                    answers: ["Orang yang hidup sederhana", "Orang yang tidak memiliki pendirian yang tetap", "Orang yang selalu membantu", "Orang yang rajin bekerja"],
                    correctAnswer: 1,
                },
                {
                    question: 'Peribahasa "Besar pasak daripada tiang" Memiliki arti',
                    answers: ["Pendapatan lebih besar daripada pengeluaran", "Hidup dengan penuh kesabaran", "Pengeluaran lebih besar dari pendapatan", "Berusaha mencapai cita-cita"],
                    correctAnswer: 2,
                },
                {
                    question: 'Arti peribahasa "ada udang di balik batu" adalah ?',
                    answers: ["Ada maksud tersembunyi di balik suatu tindakan", "Selalu bersikap jujur", "Suka membantu orang lain", "Tidak memiliki tujuan"],
                    correctAnswer: 0,
                },
                {
                    question: "Peribahasa yang bermakna bahwa kebaikan seseorang akan selalu di kenang adalah ?",
                    answers: ["Air beriak tanda tak dalam", "Gajah mati meninggalkan gading, Harimau mati meninggalkan gelang", "Tong kosong nyaring bunyinya", "Bagai pinang di belah dua"],
                    correctAnswer: 1,
                },
                {
                    question: 'Arti peribahasa "Tong kosong nyaring bunyinya" adalah ?',
                    answers: ["Orang pendiam biasanya bijaksana", "Orang yang banyak bicara tetapi sedikit pengetahuan", "Orang yang rajin belajar", "Orang yang selalu menepati janji"],
                    correctAnswer: 1,
                },
                // Tambahan soal
                {
                    question: 'Arti peribahasa "Berat sama dipikul, ringan sama dijinjing" adalah ?',
                    answers: [" Pekerjaan yang berat sebaiknya dikerjakan sendirian.", "Suka dan duka ditanggung bersama-sama.", " Memilih pekerjaan yang paling ringan", " Saling melempar tanggung jawab."],
                    correctAnswer: 1,
                },
                {
                    question: 'Peribahasa "Malas berkayuh perahu hanyut" memiliki makna ?',
                    answers: ["Oang yang rajin bekerja akan mendapat hasil melimpah. ", " Orang yang malas berusaha tidak akan mencapai kemajuan atau kesuksesan. ", "Kapal yang rusak tidak bisa digunakan berlayar.", "Menunda pekerjaan membuat waktu terasa cepat."],
                    correctAnswer: 1,
                },
                {
                    question: 'Arti peribahasa "Lain ladang lain belalang, lain lubuk lain ikannya" adalah ?',
                    answers: ["Setiap daerah memiliki adat istiadat dan aturan yang berbeda-beda.", "Hewan di setiap tempat memiliki ukuran yang sama.", "Orang yang suka berpindah-pindah tempat tinggal.", " Hasil panen bergantung pada musim."],
                    correctAnswer: 0,
                },
                {
                    question: "Peribahasa yang bermakna bahwa ilmu pengetahuan akan terus bertambah jika diamalkan adalah ?",
                    answers: ["Ilmu padi, makin berisi makin runduk.", "Menuntut ilmu sampai ke negeri Cina. ", "Ilmu yang tidak diamalkan bagai pohon tak berbuah.", "Bagai pungguk merindukan bulan."],
                    correctAnswer: 2,
                },
                {
                    question: 'Arti peribahasa "Sedikit-sedikit lama-lama menjadi bukit" adalah ?',
                    answers: ["Usaha atau tabungan yang dilakukan secara tekun dan bertahap akan membuahkan hasil besar.", "Tanah yang ditumpuk akan berubah menjadi gunung.", "Pekerjaan kecil tidak akan pernah selesai. ", "Mengumpulkan barang bekas untuk dijual."],
                    correctAnswer: 0,
                },
            ],
        },
        intermediate : {
            material : [

            ],
            questions : [
                {
                    question: "Peribahasa yang tepat untuk seseorang yang selalu ikut-ikutan tanpa pendirian adalah ?",
                    answers: ["Bagai air di daun talas", "Bagai pinang di belah dua", "Air susu dibalas oleh air tuba", "Tak ada gading yang tak retak"],
                    correctAnswer:0 ,
                },
                {
                    question: 'Arti "Air susu dibalas air tuba" adalah ?',
                    answers: ["Kebaikan dibalas dengan kebaikan", "Kasih sayang yang tulus", "Kebaikan dibalas dengan kejahatan", "Hidup penuh dengan kebahagiaan"],
                    correctAnswer: 2,
                },
                {
                    question: 'Peribahasa "Tak ada gading yang tak retak" memiliki arti ?',
                    answers: ["Semua orang memiliki kekurangan", "Semua orang harus sempurna", "Kesalahan tidak boleh di lakukan", "Hidup selalu menyenangkan"],
                    correctAnswer: 0,
                },
                {
                    question: ' " Bagai pinang di belah dua " berarti ?',
                    answers: ["Dua orang yang selalu bertengkar", "Dua orang yang sangat mirip", "Dua orang berbeda pendapat", "Dua orang yang tidak saling mengenal"],
                    correctAnswer: 1,
                },
                {
                    question: "Peribahasa yang tepat untuk menggambarkan seseorang yang banyak bicara tetapi tidak memiliki bukti atau pengetahuan adalah",
                    answers: ["Tong kosong nyaring bunyinya", "Sambil menyelam minum air", "Habis manis sepah dibuang", "Berat sama dipikul ringan sama dijinjing"],
                    correctAnswer: 0,
                },
                {
                    question: 'Arti " Habis manis sepah di buang" adalah ?',
                    answers: [" Seseorang selalu menghargai orang lain", "Seseorang di manfaatkan lalu di tinggalkan", "Seseorang bekerja dengan baik", "Seseorang tidak pernah menyerah"],
                    correctAnswer: 1,
                },
                {
                    question: 'Peribahasa "Sambil menyelam minum air" berarti ?',
                    answers: ["Melakukan pekerjaan dengan tergesa-gesa", "Mendapatkan dua manfaat dalam satu kegiatan", "Melakukan pekerjaan yang sia-sia", "Menghinadari tanggung jawab"],
                    correctAnswer: 1,
                },
                // Tambahan soal
               
                {
                    question: 'Peribahasa "Bagai anjing dengan kucing" digunakan untuk menggambarkan ...',
                    answers: [
                        'Dua sahabat yang selalu akur.',
                        'Dua orang yang selalu bertengkar jika bertemu.',
                        'Hewan peliharaan yang sangat penurut.',
                        'Orang yang suka memelihara binatang.',
                    ],
                    correctAnswer: 1,
                    },
                    {
                    question: 'Arti "Di mana bumi dipijak, di situ langit dijunjung" adalah ...',
                    answers: [
                        'Kita harus selalu melihat ke atas saat berjalan.',
                        'Kita wajib menghormati dan mematuhi adat istiadat tempat kita tinggal.',
                        'Setiap negara memiliki batas wilayah yang jelas.',
                        'Bumi dan langit tidak dapat dipisahkan.',
                    ],
                    correctAnswer: 1,
                    },
                    {
                    question: 'Peribahasa "Bagaikan kacang lupa akan kulitnya" memiliki arti ...',
                    answers: [
                        'Seseorang yang melupakan asal-usulnya atau orang yang pernah berjasa kepadanya.',
                        'Seseorang yang selalu bersyukur atas nikmat yang diterima.',
                        'Makanan yang sudah tidak layak konsumsi.',
                        'Seseorang yang rajin menabung sejak kecil.',
                    ],
                    correctAnswer: 0,
                    },
                    {
                    question: 'Arti peribahasa "Malu bertanya sesat di jalan" adalah ...',
                    answers: [
                        'Orang yang pemalu tidak boleh bepergian jauh.',
                        'Jika tidak mau bertanya atau belajar, seseorang akan mengalami kesulitan atau kesalahan.',
                        'Bertanya kepada orang asing sangat berbahaya.',
                        'Penunjuk jalan sering kali membingungkan.',
                    ],
                    correctAnswer: 1,
                    },
                    {
                    question: 'Peribahasa "Bagai kerbau dicucuk hidung" menggambarkan seseorang yang ...',
                    answers: [
                        'Sangat kuat dan pekerja keras.',
                        'Selalu menuruti kemauan orang lain tanpa berpikir kritis.',
                        'Keras kepala dan sulit dinasihati.',
                        'Suka bekerja di sawah sejak pagi.',
                    ],
                    correctAnswer: 1,
                    },
                    {
                    question: 'Arti "Sekali merengkuh dayung, dua tiga pulau terlampaui" adalah ...',
                    answers: [
                        'Menyelesaikan beberapa pekerjaan atau tujuan sekaligus dalam satu waktu.',
                        'Berlayar mengelilingi pulau-pulau kecil.',
                        'Bekerja keras tanpa mengenal lelah.',
                        'Melakukan perjalanan jauh dengan perahu kayu.',
                    ],
                    correctAnswer: 0,
                    },
                    {
                    question: 'Peribahasa "Air tenang menghanyutkan" berarti ...',
                    answers: [
                        'Sungai yang dalam sangat berbahaya untuk direnangi.',
                        'Orang yang pendiam biasanya memiliki banyak pengetahuan atau kemampuan.',
                        'Suasana yang hening membuat orang mudah mengantuk.',
                        'Masalah kecil tidak perlu dibesar-besarkan.',
                    ],
                    correctAnswer: 1,
                    },

                                
            ],
        },
        medium : {
            material : [

            ],
            questions : [
                {
                    question: "Seseorang selalu menyombongkan dirinya, padahal sebenarnya tidak memiliki kemampuan yang cukup. Peribahasa yang tepat adalah ?",
                    answers: ["Air beriak tanda tak dalam", "Bagai aur dengan tebing", "Berat sama dipikul", "Bagai pinang di belah dua"],
                    correctAnswer: 0,
                },
                {
                    question: ' Arti "bersatu kita teguh bercerai kita runtuh" adalah ?',
                    answers: ["Persatuan meoerkuat, perpecahan melemahkan", "Perbedaan harus di hindari", "Setiap orang harus bekerja sendiri", "Persatuan tidak diperlukan"],
                    correctAnswer: 0,
                },
                {
                    question: "Peribahasa yang menggambarkan seseorang yang mengahdapi kesulitan tetapi tetap berusaha adalah ?",
                    answers: ["Bagai pungguk merindukan bulan", "Tak lekang oleh panas, tak lapuk oleh hujan", "Bagai telur di ujung tanduk", "Gali lubang tutup lubang"],
                    correctAnswer: 1,
                },
                {
                    question: 'Arti "Bagai Pungguk merindukan bulan" adalah ?',
                    answers: ["Mengharapkan sesuatu yang sulit atau tidak mungkin dicapai", "Berusaha dengan tekun", "mendapatkan keberuntungan", "Menyesali kesalahan"],
                    correctAnswer: 0,
                },
                {
                    question: 'Peribahasa " Bagai telur di ujung tanduk" menggambarkan keadaan ?',
                    answers: ["Sangat aman", "Sangat berbahaya atau dalam keadaan genting", "Penuh kebahagiaan", " Mudah di selesaikan"],
                    correctAnswer: 1,
                },
                {
                    question: '"Berakit-rakit ke hulu, berenang-renang ketepian" memiliki makna ?',
                    answers: ["Bersusah-susah dahulu, bersenang-senang kemudian ", "Hidup harus selalu bersantai", "Kesulitan tidak perlu di hadapi", "kesenangan harus didahulukan"],
                    correctAnswer: 0,
                },
                {
                    question: "Peribahasa yang tepat untuk seseorang yang menyesali perbuatannya setelah terlambat adalah",
                    answers: ["Nasi sudah menjadi bubur", "Ada gula ada semut", "Bagai aur dengan tebing", "Seperti katak dalam tempurung"],
                    correctAnswer: 0,
                },
                {
                    question: 'Arti "Bagai aur dengan tebing" adalah ?',
                    answers: ["Saling bertentangan", "Saling membantu dan mendukung", "Saling menyalahkan", "Saling menghindari"],
                    correctAnswer: 1,
                },
                {
                    question: '"Seperti katak dalam tempurung" menggambarkan seseorang yang ?',
                    answers: ["Memiliki wawasan luas", "Berani menghadapi tantangan", "Berwawasan sempit karena kurang mengenal dunia luar", "Selalu bersifat terbuka"],
                    correctAnswer: 2,
                },
                {
                    question: 'Peribahasa "ada gula ada semut" berarti ?',
                    answers: ["Orang akan datang ke tempat yang memiliki sesuatu yang menarik atau menguntungkan", "Orang selalu hidup sederhana", "Semua orang suka makanan manis", "orang tidak memiliki tujuan"],
                    correctAnswer: 0,
                },
                //Tambahan soal
                {
                question: 'Dika selalu memaksakan diri membeli barang mewah demi gengsi meskipun gajinya pas-pasan. Peribahasa yang tepat untuk Dika adalah ...',
                answers: [
                    'Bergantung pada akar lapuk.',
                    'Mengukur baju di badan sendiri.',
                    'Besar pasak daripada tiang.',
                    'Biar lambat asal selamat.',
                ],
                correctAnswer: 2,
                },
                {
                question: 'Arti peribahasa "Bagai mencurah garam ke laut" adalah ...',
                answers: [
                    'Melakukan pekerjaan atau memberikan sesuatu yang sia-sia dan tidak terasa manfaatnya.',
                    'Menambah penghasilan dari hasil laut.',
                    'Membantu orang yang sedang kesusahan.',
                    'Menyimpan rahasia dengan sangat rapat.',
                ],
                correctAnswer: 0,
                },
                {
                question: 'Peribahasa yang tepat untuk menggambarkan orang yang tidak pernah merasa puas meskipun sudah mendapat banyak keuntungan adalah ...',
                answers: [
                    'Diberi betis hendak paha.',
                    'Bagai pinang dibelah dua.',
                    'Tak ada rotan akar pun jadi.',
                    'Sedia payung sebelum hujan.',
                ],
                correctAnswer: 0,
                },
                {
                question: 'Arti "Sedia payung sebelum hujan" adalah ...',
                answers: [
                    'Selalu membawa perlengkapan saat musim hujan.',
                    'Mempersiapkan diri dan waspada sebelum bahaya atau masalah datang.',
                    'Menghindari perjalanan saat cuaca mendung.',
                    'Menyesali kejadian yang sudah berlalu.',
                ],
                correctAnswer: 1,
                },
                {
                question: 'Peribahasa "Bagai makan buah simalakama" menggambarkan keadaan ...',
                answers: [
                    'Sangat menyukai makanan tradisional.',
                    'Berada dalam posisi serba salah karena pilihan mana pun membawa akibat buruk.',
                    'Mendapatkan keberuntungan yang tidak terduga.',
                    'Kesulitan memilih hadiah untuk teman.',
                ],
                correctAnswer: 1,
                },
                {
                question: '"Biar lambat asal selamat" memiliki makna ...',
                answers: [
                    'Tidak perlu terburu-buru dalam mengerjakan sesuatu asalkan hasilnya baik dan aman.',
                    'Orang yang lamban selalu tertinggal dari orang lain.',
                    'Keselamatan hanya bisa didapat jika berjalan pelan.',
                    'Pekerjaan berat sebaiknya ditunda.',
                ],
                correctAnswer: 0,
                },
                {
                question: 'Peribahasa yang tepat untuk orang yang menuduh orang lain berbuat curang untuk menutupi kecurangannya sendiri adalah ...',
                answers: [
                    'Lempar batu sembunyi tangan.',
                    'Maling teriak maling.',
                    'Air beriak tanda tak dalam.',
                    'Bagai aur dengan tebing.',
                ],
                correctAnswer: 1,
                },
                {
                question: 'Arti "Lempar batu sembunyi tangan" adalah ...',
                answers: [
                    'Melakukan perbuatan buruk atau membuat masalah, lalu berpura-pura tidak tahu.',
                    'Bermain lempar batu bersama teman-teman.',
                    'Menyembunyikan barang bukti kejahatan.',
                    'Takut mengakui kekalahan dalam perlombaan.',
                ],
                correctAnswer: 0,
                },
                {
                question: '"Bagai mendapat durian runtuh" menggambarkan seseorang yang ...',
                answers: [
                    'Tertimpa musibah secara tiba-tiba.',
                    'Mendapatkan rezeki atau keuntungan besar secara tidak terduga.',
                    'Bekerja keras memanen buah di kebun.',
                    'Kehilangan barang berharga di jalan.',
                ],
                correctAnswer: 1,
                },
                {
                question: 'Peribahasa "Hemat pangkal kaya, rajin pangkal pandai" berarti ...',
                answers: [
                    'Kekayaan dan kepandaian hanya dimiliki orang tertentu.',
                    'Membiasakan hidup hemat dan rajin belajar akan membawa kesejahteraan dan kecerdasan.',
                    'Orang kaya tidak perlu rajin belajar lagi.',
                    'Menabung di bank lebih aman daripada di rumah.',
                ],
                correctAnswer: 1,
                },

            ],
        },
        hard : {
            material : [

            ],
            questions : [
                {
                    question: "Rani selalu mengingatkan temannya untuk bersikap baik, tetapi dirinya sendiri sering berbuat buruk. Peribahasa yang tepat adalah ?",
                    answers: ["Bagai air di daun talas", "Ketam mengajar anaknya berjalan lurus", "Bagai aur dengan tebing", "Taka ada gading yang tak retak"],
                    correctAnswer: 1,
                },
                {
                    question: 'Arti peribahasa "Mulutmu harimaumu" adalah ?',
                    answers: ["Perkataan dapat membawa akibat buruk bagi diri sendiri", "Mulut adalah bagian tubuh yang paling kuat", "seseorang harus selalu berbicara", "Perkataan tidak memiliki pengaruh"],
                    correctAnswer: 0,
                },
                {
                    question: 'Peribahasa "anjing menggonggong, kafilah berlalu" memiliki makna ?',
                    answers: ["Menghindari semua orang", "Tetap melanjutkan tujuan meskipun mendapat kritik atau gangguan", "membalas setiap kritik", "Tidak pernah menerima pendapat"],
                    correctAnswer: 1,
                },
                {
                    question: '"Panas setahun di hapus hujan sehari" menggambarkan ?',
                    answers: ["Kebaikan yang selalu di kenang", "Usaha panjang yang hilang karena satu kesalahan", "kesulitan yang mudah di atasi", "Persahabatan yang kuat"],
                    correctAnswer: 1,
                },
                {
                    question: "Peribahasa untuk seseorang yang berpura-pura baik tetapi memiliki niat buruk adalah",
                    answers: ["Musang berbulu ayam", "Bagai pinag di belah dua", "Sambil menyelam minum air", "Berat sama dipikul"],
                    correctAnswer: 0,
                },
                {
                    question: 'Arti "Gali lubang tutup lubang" adalah ?',
                    answers: ["Mengatasi masalah dengan solusi yang menimbulkan masalah baru", "Menabung untuk masa depan", "Bekerja dengan teratur", "Memperbaiki keadaan dengan secara menyeluruh"],
                    correctAnswer: 0,
                },
                {
                    question: "Seseorang yang berusaha menyelesaikan masalah kecil, tetapi justru menimbulkan masalah lebih besar, cocok digambarkan dengan ? ",
                    answers: ["Bagai di daun talas", "Bagaikan membakar rumah untuk mengusir tikus", "Bagain aur dengan tebing", "Bersatu kita teguh"],
                    correctAnswer: 1,
                },
                {
                    question: '"dalam laut dapat diduga, dalam hati siapa tahu" berarti ? ',
                    answers: ["Laut selalu berbahaya", "isi hati sesorang sulit diketahui", "Semua orang memiliki perasan yang sama", "Seseorang harus terbuka"],
                    correctAnswer: 1,
                },
                {
                    question: 'arti "Kalah jadi abu, menang jadi arang" adalah?',
                    answers: ["Perselisihan yang membuat pihak sama-sama rugi", "Kemenangan membawa kebahagiaan", "Kekalahan selalu menguntungkan", "Perselisihan mudah di selesaikan"],
                    correctAnswer: 0,
                },
                {
                    question: '"Sepandai-pandainya tupai melompat akhirnya jatuh juga" berarti ?',
                    answers: ["Orang yang pandi selalu berhasil", "Kesalahan akhirnya dapat terjadi meskipun seseorang sangat ahli", "Semua orang harus berhati-hati", "Seseorang tidak boleh mencoba"],
                    correctAnswer: 1,
                },
                {
                    question: 'Peribahasa "Menepuk air di dulang, terpecik muka sendiri" berarti ?',
                    answers: ["Membicarakan kebrukan orang lain yang akhirnya merugikan diri sendiri", "Membantu orang lain dengan tulu", "Perbaiki kesalaha", "Mendapatkan keuntungan"],
                    correctAnswer: 0,
                },
                {
                    question: 'Arti "Pata tumbuh, hilang berganti" adalah ?',
                    answers: ["Sesuatu yang hilang tidakakan kembali", "selalu ada peganti bagi sesuatu yang hilang", "Kehilangan tidak dapat di atasi", "Semua hal akan berakhir"],
                    correctAnswer: 1,
                },
                {
                    question: "Peribahasa yang tepat untuk seseorang yang memiliki kesempatan tetapi tidak memanfaatkannya adalah ?",
                    answers: ["Bagai pungguk merinduka bulan", "Bagai ayam bertelur di padi", "Bagai aur dengan tebing", "hadis manis sepah di buang"],
                    correctAnswer: 1,
                },

                //Tambahan
                {
                question: 'Pak Budi mengharapkan bantuan modal usaha dari rekannya yang ternyata juga sedang bangkrut. Peribahasa yang sesuai adalah ...',
                answers: [
                    'Bergantung pada akar lapuk.',
                    'Bagai pungguk merindukan bulan.',
                    'Harapkan pagar, pagar makan tanaman.',
                    'Ada udang di balik batu.',
                ],
                correctAnswer: 0,
                },
                {
                question: 'Arti "Buruk muka cermin dibelah" adalah ...',
                answers: [
                    'Menyalahkan orang lain atau keadaan atas kesalahan dan kekurangan diri sendiri.',
                    'Tidak suka melihat bayangan sendiri di cermin.',
                    'Memperbaiki penampilan sebelum pergi ke pesta.',
                    'Barang yang rusak harus segera diganti.',
                ],
                correctAnswer: 0,
                },
                {
                question: 'Peribahasa "Ke mana tumpahnya kuah kalau tidak ke nasi" memiliki makna ...',
                answers: [
                    'Makanan yang enak harus disajikan selagi hangat.',
                    'Sifat dan perilaku anak umumnya tidak jauh berbeda dari orang tuanya.',
                    'Kesalahan kecil akan berdampak pada hasil akhir.',
                    'Setiap masalah pasti ada jalan keluarnya.',
                ],
                correctAnswer: 1,
                },
                {
                question: '"Karena nila setitik, rusak susu sebelanga" menggambarkan ...',
                answers: [
                    'Satu kesalahan kecil dapat merusak seluruh kebaikan atau nama baik yang telah dibangun.',
                    'Minuman yang tercemar tidak boleh dikonsumsi.',
                    'Kebersihan dapur harus selalu dijaga.',
                    'Kebaikan seseorang akan menutupi kesalahannya.',
                ],
                correctAnswer: 0,
                },
                {
                question: 'Peribahasa yang tepat untuk seseorang yang berpura-pura menolong padahal sebenarnya ingin mengambil keuntungan adalah ...',
                answers: [
                    'Menangguk di air keruh.',
                    'Sambil menyelam minum air.',
                    'Bagai pinang dibelah dua.',
                    'Berat sama dipikul.',
                ],
                correctAnswer: 0,
                },
                {
                question: 'Arti "Menari di atas penderitaan orang lain" (atau menangguk di air keruh) dalam konteks musibah adalah ...',
                answers: [
                    'Menghibur teman yang sedang bersedih.',
                    'Mencari keuntungan pribadi di tengah kesusahan atau kekacauan yang dialami orang lain.',
                    'Merayakan keberhasilan bersama keluarga.',
                    'Membantu korban bencana alam.',
                ],
                correctAnswer: 1,
                },
                {
                question: 'Seseorang yang mencoba memberi nasihat kepada orang yang sangat keras kepala dan tidak mau mendengar digambarkan dengan peribahasa ...',
                answers: [
                    'Bagai menulis di atas air.',
                    'Bagai air di daun talas.',
                    'Bagai aur dengan tebing.',
                    'Tak ada gading yang tak retak.',
                ],
                correctAnswer: 0,
                },
                {
                question: '"Ada asap ada api" berarti ...',
                answers: [
                    'Kebakaran hutan sering terjadi saat musim kemarau.',
                    'Setiap isu, kabar, atau akibat pasti memiliki sebab atau asal-usulnya.',
                    'Orang yang marah wajahnya akan memerah.',
                    'Pekerjaan yang berat membutuhkan tenaga besar.',
                ],
                correctAnswer: 1,
                },
                {
                question: 'Peribahasa yang tepat untuk seseorang yang berusaha menyembunyikan sesuatu yang sudah diketahui banyak orang adalah ...',
                answers: [
                    'Menyembunyikan bangkai gajah dengan nyiru.',
                    'Ada udang di balik batu.',
                    'Dalam laut dapat diduga.',
                    'Menepuk air di dulang.',
                ],
                correctAnswer: 0,
                },
                {
                question: 'Arti "Bagai anak ayam kehilangan induk" adalah ...',
                answers: [
                    'Kebingungan, panik, dan bercerai-berai karena kehilangan pemimpin atau pelindung.',
                    'Anak-anak yang sedang bermain di halaman.',
                    'Seseorang yang mandiri sejak usia muda.',
                    'Hewan ternak yang lepas dari kandang.',
                ],
                correctAnswer: 0,
                },
                {
                question: '"Alah bisa karena biasa" memiliki makna ...',
                answers: [
                    'Sesuatu yang awalnya sulit akan terasa mudah jika sudah sering dilakukan.',
                    'Kekalahan adalah hal yang wajar dalam pertandingan.',
                    'Orang yang biasa bekerja keras tidak pernah mengeluh.',
                    'Kebiasaan buruk sulit untuk dihilangkan.',
                ],
                correctAnswer: 0,
                },
                {
                question: 'Peribahasa "Bagaikan anjing menggonggong tulang" menggambarkan ...',
                answers: [
                    'Orang yang sangat setia kepada tuannya.',
                    'Orang tamak yang ingin menguasai sesuatu namun tidak bisa menikmatinya.',
                    'Penjaga rumah yang sangat waspada.',
                    'Seseorang yang suka berbagi makanan.',
                ],
                correctAnswer: 1,
                },
                {
                question: 'Arti "Lain di bibir lain di hati" adalah ...',
                answers: [
                    'Ucapan yang tidak sesuai dengan isi hati atau niat yang sebenarnya (munafik).',
                    'Orang yang pandai berpidato di depan umum.',
                    'Kesulitan mengungkapkan perasaan cinta.',
                    'Perkataan yang selalu jujur dan apa adanya.',
                ],
                correctAnswer: 0,
                },
 
            ],
        },
        expert : {
            material : [

            ],
            questions : [
                {
                    question: "Seseorang ingin mendapatkan hasil besar, tetapi tidak mau berusaha dan hanya berharap keberuntungan. Peribahasa yang paling tepat adalah",
                    answers: ["Bagai pungguk merindukan bulan", "Bagai ayam bertelur di padi", "Sambil menyelam minum air", "Bagai aur dengan tebing"],
                    correctAnswer: 0,
                },
                {
                    question: 'Peribahasa "Takkan lari gunung dikejar" memiliki makna ',
                    answers: ["Pekerjaan harus diselesaikan dengan cepat", "Sesuatu yang sudah pasti atau tersedia tidak perlu dikejar dengan tergesa-gesa", "Gunung tidak dapat dipindahkan", "Semua kesempatan akan hilang"],
                    correctAnswer: 1,
                },
                {
                    question: "Seseorang yang memiliki ilmu sedikit tetapi merasa paling hebat cocok digambarkan dengan",
                    answers: ["Air beriak tanda tak dalam", "Bagai aur dengan tebing", "Berat sama dipikul", "Tak ada gading yang tak retak"],
                    correctAnswer: 0,
                },
                {
                    question: 'Arti "Harapkan pagar, pagar makan tanaman" adalah ',
                    answers: ["Orang yang dipercaya justru melakukan pengkhianatan", "Orang yang selalu menjaga amanah", "Orang yang bekerja keras", "Orang yang membantu tetangga"],
                    correctAnswer: 0,
                },
                {
                    question: 'Peribahasa "Bagaikan api dalam sekam" menggambarkan',
                    answers: ["Kemarahan atau masalah yang tersembunyi tetapi berpotensi muncul", "Kebahagiaan yang terlihat", "Kesulitan yang mudah diselesaikan", "Persahabatan yang kuat"],
                    correctAnswer: 0,
                },
                {
                    question: "Seseorang terus mengungkit kesalahan lama temannya meskipun sudah meminta maaf. Peribahasa yang paling sesuai untuk menasihati agar tidak demikian adalah",
                    answers: ["Luka lama jangan dibangkitkan", "da gula ada semut", " Bagai pinang dibelah dua", "Gali lubang tutup lubang"],
                    correctAnswer: 0,
                },
                {
                    question: '"Cacing menjadi naga" memiliki makna ',
                    answers: ["Orang kecil atau sederhana berubah menjadi orang besar atau berpengaruh", "Orang kaya menjadi miskin", "Orang berkuasa kehilangan kekuasaan", "Orang tidak memiliki tujuan"],
                    correctAnswer: 0,
                },
                {
                    question: "Peribahasa yang menggambarkan seseorang yang berbuat baik kepada orang lain, tetapi tidak dihargai adalah ",
                    answers: ["Air susu dibalas air tuba", "Bagai aur dengan tebing", "Bersatu kita teguh", "Sambil menyelam minum air"],
                    correctAnswer: 0,
                },
                {
                    question: 'Arti "Bagaikan menegakkan benang basah" adalah',
                    answers: ["Melakukan pekerjaan yang mudah", "Mengerjakan sesuatu yang sangat sulit atau hampir mustahil", "Menyelesaikan pekerjaan dengan cepat", "Menghindari pekerjaan"],
                    correctAnswer: 1,
                },
                {
                    question: 'Peribahasa "Jika tidak ada rotan, akar pun jadi" berarti',
                    answers: ["Tidak ada pilihan lain", "Memanfaatkan sesuatu yang tersedia sebagai pengganti", "Semua barang harus dibeli", "Menolak bantuan"],
                    correctAnswer: 1,
                },
                {
                    question: " Seseorang yang membalas kejahatan dengan kebaikan dapat digambarkan dengan sikap",
                    answers: ["Dendam kesumat", "Air susu dibalas air tuba", "Memaafkan dan membalas dengan kebaikan", "Kalah jadi abu"],
                    correctAnswer: 2,
                },
                {
                    question: ' "Bagaikan padi, semakin berisi semakin merunduk" berarti ',
                    answers: [" Orang berilmu semakin rendah hati", "Orang kaya semakin sombong", " Orang tidak memiliki pendirian", "Orang selalu menghindari tanggung jawab"],
                    correctAnswer: 0,
                },
                {
                    question: ' Peribahasa "Jauh panggang dari api" berarti',
                    answers: ["Sesuatu yang sangat sesuai", "Sesuatu yang tidak sesuai dengan harapan atau kenyataan", "Sesuatu yang mudah dicapai", "Sesuatu yang sangat dekat"],
                    correctAnswer: 1,
                },
                {
                    question: "Seseorang yang menginginkan sesuatu yang mustahil tanpa usaha nyata dapat digambarkan dengan",
                    answers: ["Bagai pungguk merindukan bulan", "Bagai aur dengan tebing", "Bersatu kita teguh", "Gajah mati meninggalkan gading"],
                    correctAnswer: 0,
                },
                {
                    question: 'Peribahasa "Gajah di pelupuk mata tak tampak, semut di seberang lautan tampak" berarti',
                    answers: ["Seseorang mudah melihat kesalahan orang lain tetapi sulit melihat kesalahan sendiri", "Seseorang memiliki penglihatan yang baik", "Seseorang selalu bersikap adil", "Seseorang tidak peduli terhadap lingkungan"],
                    correctAnswer: 0,
                },

                // Tambahan soal
                // Level 5 - Hard (15 Soal)
                {
                question: 'Seseorang yang membesar-besarkan masalah kecil sehingga menjadi rumit digambarkan dengan peribahasa ...',
                answers: [
                    'Biduk lalu kiambang bertaut.',
                    'Membesarkan kerak nasi.',
                    'Bagai pungguk merindukan bulan.',
                    'Patah tumbuh hilang berganti.',
                ],
                correctAnswer: 1,
                },
                {
                question: 'Peribahasa "Biduk lalu kiambang bertaut" memiliki makna ...',
                answers: [
                    'Perselisihan antaranggota keluarga atau sahabat yang segera rukun kembali setelah masalah berlalu.',
                    'Perahu yang karam di tengah sungai.',
                    'Hubungan yang putus dan tidak bisa disambung lagi.',
                    'Kerja sama yang menghasilkan keuntungan besar.',
                ],
                correctAnswer: 0,
                },
                {
                question: 'Seseorang yang tidak memiliki pendirian dan selalu berpihak kepada pihak yang sedang menang cocok digambarkan dengan ...',
                answers: [
                    'Bagai baling-baling di atas bukit.',
                    'Air beriak tanda tak dalam.',
                    'Bagai aur dengan tebing.',
                    'Tak ada gading yang tak retak.',
                ],
                correctAnswer: 0,
                },
                {
                question: 'Arti "Kuman di seberang lautan tampak, gajah di pelupuk mata tak tampak" adalah ...',
                answers: [
                    'Kesalahan kecil orang lain sangat mudah terlihat, sedangkan kesalahan besar diri sendiri tidak disadari.',
                    'Penglihatan seseorang yang sangat tajam dari jarak jauh.',
                    'Hewan kecil lebih berbahaya daripada hewan besar.',
                    'Seseorang yang selalu introspeksi diri setiap hari.',
                ],
                correctAnswer: 0,
                },
                {
                question: 'Peribahasa "Bagai bumi dengan langit" menggambarkan ...',
                answers: [
                    'Dua hal atau dua orang yang memiliki perbedaan sangat jauh dan bertolak belakang.',
                    'Pemandangan alam yang sangat indah di sore hari.',
                    'Hubungan yang saling melengkapi satu sama lain.',
                    'Cita-cita yang sangat tinggi untuk diraih.',
                ],
                correctAnswer: 0,
                },
                {
                question: 'Seseorang yang baru mendapatkan sedikit kekuasaan atau jabatan lalu bertindak sombong dan semena-mena digambarkan dengan ...',
                answers: [
                    'Seperti kera mendapat bunga.',
                    'Bagai kadal naik ke atas batang.',
                    'Bagai pinang dibelah dua.',
                    'Gali lubang tutup lubang.',
                ],
                correctAnswer: 1,
                },
                {
                question: '"Seperti kera mendapat bunga" memiliki makna ...',
                answers: [
                    'Seseorang yang diberi barang berharga atau indah, tetapi tidak tahu cara menghargai dan memanfaatkannya.',
                    'Hewan yang sangat menyukai keindahan alam.',
                    'Hadiah istimewa untuk orang terkasih.',
                    'Seseorang yang pandai merawat tanaman hias.',
                ],
                correctAnswer: 0,
                },
                {
                question: 'Peribahasa yang menggambarkan keadaan seseorang yang sudah terlanjur basah atau terlanjur melakukan kesalahan sehingga sekalian saja diteruskan adalah ...',
                answers: [
                    'Alang-alang mandi biar basah.',
                    'Sambil menyelam minum air.',
                    'Air tenang menghanyutkan.',
                    'Bagai air di daun talas.',
                ],
                correctAnswer: 0,
                },
                {
                question: 'Arti "Guru kencing berdiri, murid kencing berlari" adalah ...',
                answers: [
                    'Teladan buruk yang dicontohkan oleh pemimpin atau guru akan ditiru secara lebih parah oleh bawahan atau muridnya.',
                    'Murid harus lebih aktif bergerak daripada gurunya.',
                    'Olahraga lari sangat baik untuk kesehatan tubuh.',
                    'Peraturan sekolah wajib dipatuhi oleh semua siswa.',
                ],
                correctAnswer: 0,
                },
                {
                question: 'Peribahasa "Terlepas dari mulut buaya, masuk ke mulut harimau" berarti ...',
                answers: [
                    'Selamat dari satu bahaya atau musibah, tetapi langsung masuk ke dalam bahaya lain yang sama beratnya.',
                    'Keberanian menghadapi hewan buas di hutan.',
                    'Keberuntungan yang datang berturut-turut.',
                    'Berhasil menyelesaikan dua ujian sulit sekaligus.',
                ],
                correctAnswer: 0,
                },
                {
                question: 'Seseorang yang terlihat tenang di luar padahal hatinya sedang gelisah atau menderita digambarkan dengan peribahasa ...',
                answers: [
                    'Bagai api dalam sekam.',
                    'Manis di luar pahit di dalam.',
                    'Bagai cacing kepanasan.',
                    'Seperti kerbau dicucuk hidung.',
                ],
                correctAnswer: 1,
                },
                {
                question: '"Bagai cacing kepanasan" berarti ...',
                answers: [
                    'Orang yang sangat gelisah, panik, dan tidak bisa diam karena cemas atau takut.',
                    'Tanah yang terlalu kering saat musim kemarau.',
                    'Pekerja keras yang tahan banting di bawah terik matahari.',
                    'Seseorang yang sedang demam tinggi.',
                ],
                correctAnswer: 0,
                },
                {
                question: 'Peribahasa "Di mana ada kemauan, di situ ada jalan" berarti ...',
                answers: [
                    'Setiap jalan raya pasti menuju ke kota besar.',
                    'Jika seseorang memiliki tekad yang kuat, ia pasti akan menemukan cara untuk mencapai tujuannya.',
                    'Perjalanan jauh membutuhkan peta yang akurat.',
                    'Kemauan saja tidak cukup tanpa bantuan orang lain.',
                ],
                correctAnswer: 1,
                },
                {
                question: 'Seseorang yang meminta sesuatu yang mustahil atau tidak masuk akal digambarkan dengan peribahasa ...',
                answers: [
                    'Menanti kucing bertanduk.',
                    'Bagai aur dengan tebing.',
                    'Bersatu kita teguh.',
                    'Gajah mati meninggalkan gading.',
                ],
                correctAnswer: 0,
                },
                {
                question: 'Peribahasa "Tak ada rotan, akar pun jadi" memiliki makna yang sejalan dengan peribahasa ...',
                answers: [
                    'Tiada gading yang tak retak.',
                    'Tiada emas, bungkal diasah.',
                    'Berat sama dipikul, ringan sama dijinjing.',
                    'Air susu dibalas air tuba.',
                ],
                correctAnswer: 1,
                },

            ],
        },
    },
}