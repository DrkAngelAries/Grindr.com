import React from 'react'
import { IndexLink, Link } from 'react-router'
import './SafetyYoruba.scss'
import { createMarkup, replaceAmp } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import _ from '../../../components/Helpers/underscore'

export const SafetyYoruba = () => (
	<div className={'container page safety_yoruba'}>
		<div className="page-content">
			<h1>Safety Yoruba</h1>
			<p><u><strong>ÌKÌLỌ̀</strong></u></p>
			<p><strong>Bí o bá ń gbé ní ibi ti jíjẹ́ ọkùnrin tó fẹ́ràn ọkùnrin, tàbí obìnrin tó fẹ́ràn obìnrin (LGBTQ) le fi ẹ́ sí inú ewu, èyí ni àwọn ìgbésẹ̀ pàtàkì tí o lè gbé láti dáàbòbo ara rẹ tí o bá ń lo Grindr.</strong></p>
			<ol>
				<li>Má fi fọ́tò ojú ẹ síbẹ̀. Lo fọ́tò tí ó n fi ẹ́ hàn ní irú ọ̀nà míràn, fún àpẹẹrẹ, bíi oun tí o fẹ́ràn, tàbí irú ẹni tí o jẹ́.</li>
				<li>Pàdé àwọn ọ̀rẹ́ẹ ọ̀rẹ́ ẹ nìkan. Kí o tó pàdé ẹnikẹ́ni, gbìyànjú láti mọ̀ pé wọ́n jẹ́ ọmọ ènìyàn LGBTQ people pẹ̀lú àwọn ọ̀rẹ́ mìràn tí o gbẹ́kẹ̀lé, tàbí òrẹ́ẹ-ọ̀rẹ́ẹ̀ rẹ.</li>
				<li>Pàdée wọn lórí Skype tàbí ní ibi tí kò léwu kan ná. Fífi àdírẹ́sì ilé rẹ síbẹ̀ le léwu púpọ̀. Dípò èyí, kọ́kọ́ mọ ẹni yìí dáadáa nípa pípàdé wọn ní ilé oúnjẹ tàbi ilé kọfí tí ó faramọ́ irú àwọn ènìyàn LGBT bíi tìrẹ tàbí kí ẹ sọ̀rọ̀ lórí Skype.</li>
				<li>Jẹ́ kí ọ̀rẹ́ rẹ kan mọ ibi tí o ti ń ṣe ìpàdé aìíbaámọ̀. Ó máa dára kí o ní ẹnìkan tó mọ ibi tí o lọ. O sì yẹ kí o ní ẹnìkan tí o lè pè ní ìgbà pàjáwìrì.</li>
				<li>Bí awọn ọlọ́pàá bá tì ọ́ mọ́lé, máṣe sọ ǹkankan tàbi jẹ́wọ́ ǹkankan. Bí wọ́n bá tilẹ̀ ní ẹ̀rí kankan, dídákẹ́ ni ó dára jù fún ẹ.</li>
				<li>Ti o bá ń pàdé ẹnìkan fún ìgbà àkọ́kọ́, má mú ǹkan púpọ̀ dání. Máṣe mú káàdì ìnáwó tàbí ATM rẹ dání. Mú àwọn ìwé ìdánimọ̀ rẹ ǹkan dání tí o lérò láti lò</li>
				<li>Máa yẹ ara rẹ wò ní ìgbàdégbà fún HIV àti àwọn àrùn ìbálòpọ̀ (STI) mìíràn. Ṣeẹ́ ní, ó kéré tán, ẹ̀ẹ̀mẹta lọ́dún. Kí o sì máa ní ìjíròrò pẹ̀lú àwọn ọkùnrin tí o bá pàdé nípa àwọn oun tí o ń reti gẹ́gẹ́ bíi ìdáàbòbò.</li>
			</ol>
		</div>
	</div>
)

export default SafetyYoruba
