import React from 'react'
import { IndexLink, Link } from 'react-router'
import './SafetyBahasaIndonesia.scss'
import { createMarkup, replaceAmp } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import _ from '../../../components/Helpers/underscore'

export const SafetyBahasaIndonesia = () => (
	<div className={'container page safety_bahasa_indonesia'}>
		<div className="page-content">
			<h1>Safety Bahasa Indonesia</h1>
			<p><strong><u>KESELAMATAN</u></strong></p>
			<p><strong>Jika Anda tinggal di suatu tempat yang membahayakan Anda sebagai seorang LGBTQ, berikut beberapa langkah penting yang bisa diambil untuk memastikan keselamatan Anda sewaktu menggunakan Grindr.</strong></p>
			<ol>
				<li><strong><u>Jangan pasang foto muka Anda</u></strong>. Cobalah menggunakan foto yang mewakili diri Anda dengan cara lain seperti yang berhubungan dengan hobi atau kepribadian Anda.</li>
				<li><strong><u>Hanya bertemu dengan temannya teman</u></strong>. Sebelum Anda menemui seseorang, Anda mungkin ingin memverifikasi dengan teman lain yang Anda percayai atau temannya teman bahwa mereka juga LGBTQ.</li>
				<li><strong><u>Bertemu melalui Skype atau di lokasi yang aman terlebih dahulu</u></strong>. Membagi alamat rumah Anda dapat berisiko. Sebaliknya, kenali orang tersebut dengan lebih baik melalui cara menemuinya di kafe yang ramah LGBT atau mengobrol di Skype.</li>
				<li><strong><u>Beri tahu tempat pertemuan Anda ke seorang teman untuk berjaga-jaga</u></strong>. Selalu merupakan ide yang bagus untuk membiarkan orang lain tahu ke mana Anda pergi dan informasi kontak apa pun yang bisa Anda berikan.</li>
				<li><strong><u>Jika Anda ditangkap, jangan pernah mengaku atau membenarkan sesuatu.</u></strong> Bahkan jika mereka memiliki bukti, tetap diam adalah cara yang terbaik.</li>
				<li><strong><u>Ketika bertemu seseorang untuk pertama kalinya, bawalah barang sesedikit mungkin</u></strong>. Jangan bawa kartu kredit dan kartu ATM, hanya kartu identitas yang Anda rencanakan untuk digunakan.</li>
				<li><strong><u>Lakukan tes HIV dan Penyakit Menular Seksual (PMS) lainnya secara rutin</u></strong>. Lakukan setidaknya tiga kali setahun, dan selalu melakukan percakapan dengan orang-orang yang Anda temui mengenai harapan keselamatan Anda.</li>
				<li><strong><u>Jika ada sesuatu yang salah, datangi Komnas HAM atau organisasi LGBTQ untuk meminta bantuan.</u></strong> Ketahui tentang tempat-tempat di wilayah Anda yang memberi jasa bantuan hukum langsung seperti organisasi LGBTQ atau organisasi hak asasi manusia yang lebih umum.</li>
			</ol>
		</div>
	</div>
)

export default SafetyBahasaIndonesia
