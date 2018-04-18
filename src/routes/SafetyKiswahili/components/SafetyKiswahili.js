import React from 'react'
import { IndexLink, Link } from 'react-router'
import './SafetyKiswahili.scss'
import { createMarkup, replaceAmp } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import _ from '../../../components/Helpers/underscore'

export const SafetyKiswahili = () => (
	<div className={'container page safety_kiswahili'}>
		<div className="page-content">
			<h1>Safety Kiswahili</h1>
			<p><u><strong>USALAMA</strong></u></p>
			<p><strong>Iwapo unaishi mahali ambako jinsia na ufumu wako wa mapenzi(LGBTQ) unakutia kweye hatari, hizi ni  ni hatua muhimu ambazo unaweza kuchukua ili kuhakikisha usalama wako wakati unapotumia Grindr</strong></p>
			<ol>
				<li><u><strong>Usiweke picha ya uso wako.</strong></u> Jaribu kutumia picha inayokuwakilisha kwa namna tofauti, kwa mfano picha ambasyo inaambatana na starehe zako, mambo uyapendayo na hisia zako za kipekee</li>
				<li><u><strong>Hakikisha kwamba unakutana na marafiki wa marafiki.</strong></u> Kabla ya kukutana na mtu yeyoye, ni vyema  kuhakikisha kuwa yeyé pia ni LGBTQ kupitia rafiki mwingine anayeaminika au rafiki wa rafiki.</li>
				<li><u><strong>Kutana kwa Skype au mahali palipo salama kwanza.</strong></u> Kupatiana anwani yako huenda kuwa hatari. Badala yake, mjue mwenzio kwa kukutana naye kwenye mkahawa ulio kisiwa kuwa rafiki kwa LGBTQ au zungumza kwenye Skype.</li>
				<li><u><strong>Mjulishe rafiki unakoenda kukutana kwa sababu za dharura.</strong></u> Ni vyema watu kujua ulikoenda na pia kuwa na taarifa yoyote ya mawasiliano ya dharura iwapo unayo</li>
				<li><u><strong>Ukimatwa , kamwe usikiri au kukubali chochote.</strong></u> Hata kama wana ushahidi, kukaa kimya ndilo jambo la busara unaloweza kufanya.</li>
				<li><u><strong>Wakati wa kwanza kukutana na mtu, beba vitu vya thamani kidogo kama iwezekanavyo.</strong></u> Usibebe kadi ya ATM na kadi zinginezo za pesa ila tu nyaraka za kitambulisho ambazo unapangia kutumia.</li>
				<li><u><strong>Hakikisha kwamba unapimwa mara kwa mara kwa virusi vya UKIMWI na magonjwa mengine ya ngono.</strong></u> Hakikisha unafanya hivyo angalau mara tatu kwa mwaka, na pia uwe na mazungumzo na wapenzi unaoakutana nao kuhusu matarajio yako ya usalama.</li>
				<li><u><strong>Jambo lolote usilotarajia likitokea, nenda kwenye shirika la haki za binadamu au shirika la LGBTQ kwa usaidizi.</strong></u> Pata maelezo na habari kamili kuhusu mashirika yanayotoa huduma za kisheria moja kwa moja katika eneo.Mashirika haya ni kama yale ya LGBTQ au mashirika ya haki za binadamu</li>
			</ol>			
		</div>
	</div>
)

export default SafetyKiswahili
