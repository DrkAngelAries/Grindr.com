import React from 'react'
import { IndexLink, Link } from 'react-router'
import './SafetyIgbo.scss'
import { createMarkup, replaceAmp } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import _ from '../../../components/Helpers/underscore'

export const SafetyIgbo = () => (
	<div className={'container page safety_igbo'}>
		<div className="page-content">
			<h1>Safety Igbo</h1>
			<p><u><strong>NCHEKWADO</strong></u></p>
			<ol>
				<li>Ọbụrụ n'ị bi n'ebe dị aṅaa ịbụ LGBTQ na-etinyekarị gị n'ihe egwu, ndị a bụ ụfọdụ usoro dị mkpa ị nwere ike iji chekwado onwe gị mgbe ị nọ na Grindr.</li>
				<li>Ezipụna onyinyo ihu gị. Nwalee iji onyinyo nọchiri anya gị n'ụzọ ọzọ dịka nke gbasatara egwuriegwu ị huru n'anya m'ọbụ ụdị mmadụ ị bụ.</li>
				<li>Naanị enyi ndị enyi gị k'ị ga-ezukọrịta. Tupu ị zute mmadụ, ị nwere ike ịchọ ịjụ ese ma ha abụ ndị LGBTQ nọnyeere enyi ọzọ ị tụkwasara obi ma ọbụ enyi nke enyi gị.</li>
				<li>Zukọrịta site na Skype ma ọbụ n'ebe egwu adịghị n'oge izizi.  Ịnyekọrịta adreesị ebe obibi gị nwere ike ịdị njọ. Kama, mata kwuo onye ahụ  ọfụma site na-ịzute ha n'ebe ọgbakọ ndị LGBTQ ma ọbụ kwukọrịtagodi nụ na Skype.</li>
				<li>Mee ka otu enyi gị mara ebe unu na-ezukọrịta maka adị ama ama. Ọ na-abụkarị echiche ọma inwe mmadụ maara ebe ị gara ya na idobe akara a ga-eji nweta gị n’ekwenti n'oge ihe ntụmadị.</li>
				<li>Ọbụrụ na aka akpara gị, ekwupụtakwana ma ọbụ kwenye n'ihe ọbula. Ma ọbụrụgodi na ha nwere ihe ịrịba ama, ịgbachi nkịtị bu ihe kacha mma ịmee.</li>
				<li>Mgbe izizi ị ga ezute mmadụ, were ntakịrị ihe ị nwere ike ya. Ewena akwụkwọ itinye ma ọbụ ịdọrọ ego gị n'ụlọ akụ naanị akwụkwọ njiri mara gị ị kwadoro iji mee ihe.</li>
				<li>Na-enyocha ahụ gị mgbe niile maka ọrịa mmịnwụ na orịa nwoke na nwanyị. Mee ya opekata mpe ya bụrụ ugboro atọ n'afọ ma na-enwe mkpakọrịta ụka mgbe niile n'etiti gị na ndị nwoke ị na-ezute maka olile anya nchekwado gị.</li>
			</ol>
		</div>
	</div>
)

export default SafetyIgbo
