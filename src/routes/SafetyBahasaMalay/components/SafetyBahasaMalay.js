import React from 'react'
import { IndexLink, Link } from 'react-router'
import './SafetyBahasaMalay.scss'
import { createMarkup, replaceAmp } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import _ from '../../../components/Helpers/underscore'

export const SafetyBahasaMalay = () => (
	<div className={'container page safety_bahasa_malay'}>
		<div className="page-content">
			<h1>Safety Bahasa Malay</h1>
			<p><strong><u>KESELAMATAN</u></strong></p>
			<p><strong>Jika anda tinggal di sebuah kawasan di mana status anda sebagai seorang LGBTQ boleh membahayakan, berikut adalah beberapa langkah penting yang boleh diambil untuk memastikan keselamatan anda semasa menggunakan Grindr.</strong></p>
			<ol>
				<li><strong><u>Jangan muat naik gambar wajah anda</u></strong>. Cuba gunakan gambar yang mencerminkan diri anda dari sudut yang berbeza contohnya gambar berkaitan hobi atau personaliti anda.</li>
				<li><strong><u>Hanya bertemu rakan kepada rakan anda</u></strong>. Sebelum anda bertemu seseorang, anda mungkin mahu mengenal pasti status LGBTQ mereka melalui rakan yang anda percayai atau rakan kepada rakan anda.</li>
				<li><strong><u>Bertemu melalui Skype atau di lokasi yang selamat terlebih dahulu</u></strong>. Tindakan berkongsi alamat rumah anda mungkin agak berisiko. Cuba kenali seseorang dengan lebih rapat melalui janji temu di kafe yang mesra LGBT atau berbual melalui Skype.</li>
				<li><strong><u>Maklumkan seorang rakan tentang tempat janji temu sebagai langkah berjaga-jaga</u></strong>. Lebih baik anda memaklumkan seseorang tentang tempat yang ingin dituju dan berikan nombor untuk dihubungi jika ada kecemasan.</li>
				<li><strong><u>Jika anda ditangkap, jangan sekali-kali membuat pengakuan atau bersetuju dengan apa-apa tuduhan.</u></strong> Walaupun mereka mempunyai bukti, mengambil langkah berdiam diri adalah lebih selamat.</li>
				<li><strong><u>Apabila bertemu seseorang buat pertama kali, bawa barang-barang penting sahaja</u></strong>. Jangan bawa kad kredit atau ATM, bawa dokumen pengenalan yang perlu sahaja.</li>
				<li><strong><u>Buat pemeriksaan HIV dan STI lain secara kerap</u></strong>. Lakukan pemeriksaan sekurang-kurangnya tiga kali setahun dan selalu berbincang tentang faktor keselamatan dengan rakan-rakan yang ditemui.</li>
				<li><strong><u>Jika sesuatu yang tidak diingini berlaku, minta bantuan daripada organisasi hak asasi manusia atau LGBTQ. </u></strong>Ketahui tentang tempat-tempat terdekat yang menyediakan khidmat nasihat undang-undang seperti organisasi LGBTQ atau organisasi hak asasi manusia lain.</li>
			</ol>
		</div>
	</div>
)

export default SafetyBahasaMalay
