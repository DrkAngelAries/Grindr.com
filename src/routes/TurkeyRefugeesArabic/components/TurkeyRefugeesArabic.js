import React from 'react'
import { IndexLink, Link } from 'react-router'
import './TurkeyRefugeesArabic.scss'
import { createMarkup, replaceAmp } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import _ from '../../../components/Helpers/underscore'

export const TurkeyRefugeesArabic = () => (
	<div className={'container page safety_turkey_refugees_arabic'}>
		<div className="page-content">
			<h1>Turkey Refugees Arabic</h1>
			<p>إذا كنت لاجئا وتعيش في تركيا وترغب في الحصول على مزيد من المعلومات فيما يتعلق بإجراءات إعادة التوطين (أي السفر إلى مكان آمن بطريقة قانونية) فبإمكانك إرسال رسالة إلكترونية إلى <a href="mailto:LGBTRefugeeTurkey@gmail.com" target="_blank">LGBTRefugeeTurkey@gmail.com</a>. كل الرسائل سرية. </p>	
		</div>
	</div>
)

export default TurkeyRefugeesArabic
