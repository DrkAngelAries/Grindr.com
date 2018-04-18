import React from 'react'
import { IndexLink, Link } from 'react-router'
import './TurkeyRefugeesFarsi.scss'
import { createMarkup, replaceAmp } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import _ from '../../../components/Helpers/underscore'

export const TurkeyRefugeesFarsi = () => (
	<div className={'container page safety_turkey_refugees_farsi'}>
		<div className="page-content">
			<h1>Turkey Refugees Farsi</h1>
			<p>اگر شما در ترکیه مهاجر استید و میخواهید در مورد پروسۀ اسکان مجدد (سفر به یک جای امن از طریق مسیر قانونی) آن معلومات بیشتری را حاصل کنید، لطفأ به این ایمیل آدرس ایمیل کنید <a href="mailto:LGBTRefugeeTurkey@gmail.com" target="_blank" rel="noopener">LGBTRefugeeTurkey@gmail.com</a>. همۀ ایمیل های محرم حفظ می شود.</p>		
		</div>
	</div>
)

export default TurkeyRefugeesFarsi
