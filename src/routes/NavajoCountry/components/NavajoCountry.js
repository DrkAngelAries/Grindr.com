import React from 'react'
import { IndexLink, Link } from 'react-router'
import './NavajoCountry.scss'
import { createMarkup, replaceAmp } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import _ from '../../../components/Helpers/underscore'

export const NavajoCountry = () => (
	<div className={'container page navajo_country'}>
		<div className="page-content">
			<h1>PrEP &amp; HIV Testing in Navajo Country</h1>
			<p><a href="http://men.prepfacts.org/" target="_blank" rel="noopener noreferrer">PrEP</a>, or pre-exposure prophylaxis, is a daily pill that prevents HIV infection for people who are currently HIV-negative. Truvada is the medication currently recommended to prevent HIV infection, but there may be more options available in the future.</p>
			<p>The only way to know whether you are HIV-negative or HIV positive is to get tested.  It is recommended that everyone get tested at least once for HIV and that some people should be tested more often.  Knowing your status is an important part of keeping your body healthy.</p>
			<p>For those who are HIV-negative, there are three clinics in the Navajo area where you can go to get PrEP prescribed and reduce your anxiety about HIV: - reduce your HIV risk</p>
			<p><strong>Gallup Indian Medical Center</strong></p>
			<p>516 East Nizhoni Blvd, Gallup NM 87301<br />
				Contact the confidential pharmacy PrEP line for more information about PrEP at <br />
				505-399-9552</p>
				<p><strong>Tsehootsooi Medical Center</strong></p>
			<p>On the corner of routes N12 and N7 in Fort Defiance, AZ 86504<br />
				Please contact nurse Grace Murphy at 928-729-8479 if you are interested in PrEP.</p>
				<p><strong>Northern Navajo Medical Center</strong></p>
			<p>Located on Highway 491 North in Shiprock, NM 87420<br />
				If you are interested in PrEP but do not have a primary care doctor, please be seen in the Urgent Care Clinic or Emergency Department.  If you have a primary care provider, please ask your doctor if PrEP is right for you</p>
				<p><strong>Chinle Comprehensive Health Care Facility</strong></p>
			<p>Located on Highway 191 and Hospital Drive in Chinle, NM 87503<br />
				If you are interested in PrEP, please call the Internal Medicine clinic (928-674-7086 or 928-674-7069) and ask to make an appointment with either Jacqueline Selig or Nurit Harari to discuss PrEP.</p>
				<p><strong>Frequently Asked Questions</strong></p>
			<p>Each of the following questions is answered in a short, one minute video.</p>
			<ul>
				<li><a href="https://www.youtube.com/watch?v=9CyW09S5Le8&amp;list=PLMg9scXawOhSfl47qGX7v-pZm6vmQd5jJ&amp;index=24" target="_blank" rel="noopener noreferrer">Is PrEP right for me?</a></li>
				<li><a href="https://www.youtube.com/watch?v=NvKYHgWbtPg&amp;list=PLMg9scXawOhSfl47qGX7v-pZm6vmQd5jJ&amp;index=25" target="_blank" rel="noopener noreferrer">Can I start and stop PrEP?</a></li>
				<li><a href="https://www.youtube.com/watch?v=GiPtow38cww&amp;list=PLMg9scXawOhSfl47qGX7v-pZm6vmQd5jJ&amp;index=27" target="_blank" rel="noopener noreferrer">What if I miss a dose of PrEP?</a></li>
				<li><a href="https://www.youtube.com/watch?v=_pnUWbC8dtc&amp;list=PLMg9scXawOhSfl47qGX7v-pZm6vmQd5jJ&amp;index=30" target="_blank" rel="noopener noreferrer">Why do I have to get an HIV test every three months while on PrEP?</a></li>
				<li><a href="https://www.youtube.com/watch?v=dfjvVrYLCgo&amp;list=PLMg9scXawOhSfl47qGX7v-pZm6vmQd5jJ&amp;index=33" target="_blank" rel="noopener noreferrer">Will PrEP conflict with my anti-depressants?</a></li>
				<li><a href="https://www.youtube.com/watch?v=FwUtFwkWBpc&amp;list=PLMg9scXawOhSfl47qGX7v-pZm6vmQd5jJ&amp;index=34" target="_blank" rel="noopener noreferrer">Will PrEP conflict with my trans-related hormone replacement therapy?</a></li>
				<li><a href="https://www.youtube.com/watch?v=vAoc4t9e1KQ&amp;list=PLMg9scXawOhSfl47qGX7v-pZm6vmQd5jJ&amp;index=36" target="_blank" rel="noopener noreferrer">What is PEP or post-exposure prophylaxis?</a></li>
			</ul>
		</div>
	</div>
)

export default NavajoCountry
