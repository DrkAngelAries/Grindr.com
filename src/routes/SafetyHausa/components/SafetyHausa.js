import React from 'react'
import { IndexLink, Link } from 'react-router'
import './SafetyHausa.scss'
import { createMarkup, replaceAmp } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import _ from '../../../components/Helpers/underscore'

export const SafetyHausa = () => (
	<div className={'container page safety_hausa'}>
		<div className="page-content">
			<h1>Safety Hausa</h1>
			<p><u><strong>HATTARA</strong></u></p>
			<p><strong>Idan kana zaune a  wurin da madugo, luwadi, masu canza jinzi, mata-maza (LGBTQ) ke sa ka cikin haɗari, ga wasu matakai masu muhimmanci da za ka iya ɗauka domin tabbatar da lafiyarka yayin amfani da Grindr.</strong></p>
			<ol>
				<li>Kada ka sanya hoton fuskarka. Gwada amfani da hoton da yake wakiltar ka a wata hanya dabam kamar wanda ya danganci abbubuwar da kake so ko hali.</li>
				<li>Ka sadu da abokai na abokai. Kafin ka sadu da wani, za ka tabbatar da cewa su mutane madugo, luwadi, masu canza jinzi, mata-maza (LGBTQ) ne tare da wani aboki amintacce ko abokin aboki.</li>
				<li>Ka sadu da su ta Skype ko a tabattacen wuri a farko. Kada ka fada adireshin gidan ka domin yana da hatsai. Maimakon haka, sai ka sadu da shi a wurin hutawa ko kuma yin magana akan Skype</li>
				<li>Ka gayama wani abokin ka inda kuke haduwa. Yana da kyau mutanen su san inda ka tafi da kuma duk wani bayani da za ka iya bayar.</li>
				<li>Idan an kama ka, kada ka furta ko fada wani abu ko da suna da hujja.</li>
				<li>A lokacin da ka sadu da wani, kada ka dauki abubbuwa da yawa. Kada ka ɗauki katunan kuɗi saidai takardun shaida wanda za ka yi amfani.</li>
				<li>Kayi gwaji na kangamau da wadansu cuttutuka a kai a kai. Ayi shi aƙalla sau uku a kowace shekara, kuma koyaushe ka tattaunawa da mutanen da kake saduwa game da lura.</li>
			</ol>
		</div>
	</div>
)

export default SafetyHausa
