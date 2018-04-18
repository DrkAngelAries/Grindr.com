import React from 'react'
import { IndexLink, Link } from 'react-router'
import './KurdistanRefugeesArabic.scss'
import { createMarkup, replaceAmp } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import _ from '../../../components/Helpers/underscore'

export const KurdistanRefugeesArabic = () => (
	<div className={'container page safety_kurdistan_refugees_arabic'}>
		<div className="page-content">
			<h1>Kurdistan Refugees Arabic</h1>
			<p>إذا كنت لاجئا وتعيش في كردستان وترغب في الحصول على مزيد من المعلومات فيما يتعلق بإجراءات إعادة التوطين (أي السفر إلى مكان آمن بطريقة قانونية) فبإمكانك إرسال رسالة إلكترونية إلى <a href="mailto:lgbtrefugeekurdistan@gmail.com" target="_blank">lgbtrefugeekurdistan@gmail.com</a>. كل الرسائل سرية. </p>
		</div>
	</div>
)

export default KurdistanRefugeesArabic
