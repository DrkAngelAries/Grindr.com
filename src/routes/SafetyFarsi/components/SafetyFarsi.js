import React from 'react'
import { IndexLink, Link } from 'react-router'
import './SafetyFarsi.scss'
import { createMarkup, replaceAmp } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import _ from '../../../components/Helpers/underscore'

export const SafetyFarsi = () => (
	<div className={'container page safety_farsi'}>
		<div className="page-content">
			<h1>Safety Farsi</h1>
			<p><strong><u>نکات ایمنی</u></strong></p>
			<p><strong>اگر جایی زندگی می کنید که همجنسگرا بودن، شما را به خطر می اندازد، توجه شما را به نکاتی مهم جلب میکنیم که از شما در هنگام استفاده از </strong><strong>Grindr</strong><strong> محافظت نماید.</strong></p>
			<ol>
				<li><strong><u>عکس از صورت خود را به اشتراک نگذارید</u></strong>. از عکسی استفاده کنید که نمایانگر بُعد دیگری از زندگی شما باشد، مثلا" عکسی که تفریحات و سرگرمی شما را نشان دهد و یا شخصیت شما را بیان کند.</li>
				<li><strong><u>تنها دوستان دوستان خود را ملاقات کنید</u></strong>. پیش از آنکه کسی را ملاقات کنید، بهتر است از طریق دوستی مشترک با دوستانتان مطمئن شوید که آن شخص نیز همجنس گراست.</li>
				<li><strong><u>ابتدا فرد را در اسکایپ یا یک محل امن ملاقات کنید</u></strong><u>. </u>در اختیار گذاشتن نشانی منزلتان می تواند خطرناک باشد. بنابراین بهتر است با ملاقات فرد در یک کافه مخصوص همجنس گرایان و یا اسکایپ با وی بیشتر آشنا شوید.</li>
				<li><strong><u>محل قرار خود را به یکی از دوستان خود اطلاع دهید.</u></strong> خوب است که فرد یا افرادی را در جریان قرار ملاقات خود قرار دهید و یا یک تلفن تماس ضروری به آنها بدهید.</li>
				<li><strong><u>اگر دستگیر شدید هرگز به چیزی اعتراف نکنید و یا اتهامی را نپذیرید.</u></strong> حتی اگر مدارکی علیه شما وجود داشته باشد، بهتر است تا آنجا که می توانید سکوت کنید.</li>
				<li><strong><u>اگر برای اولین بار کسی را ملاقات می کنید، تا جایی که امکان دارد وسایل و مدارک کمی همراه داشته باشید.</u></strong> کارت اعتباری و بانکی خود را همراهتان نبرید، فقط مدارکی را که می خواهید استفاده کنید به همراه داشته باشید.</li>
				<li><strong><u>به طور مرتب آزمایش ویروس </u></strong><strong><u>HIV</u></strong><strong><u> و عفونت حاصل از بیماریهای مقاربتی را انجام دهید.</u></strong> این آزمایشات را حداقل سه بار در سال تکرار کنید و همواره انتظارات خود را در مورد سلامت جنسی را با شریک جنسی خود مطرح نمایید.</li>
				<li><strong><u>اگر مشکلی به وجود آمد، از سازمان حقوق بشر و یا موسسه همجنسگرایان کمک بگیرید.</u></strong> مکان های موجود در منطقه خود را که خدمات حقوقی مستقیم ارائه می کنند نظیر موسسه همجنسگرایان یا موسسه حقوق بشر که قدری جنبه عمومی تر دارد شناسایی کنید.</li>
			</ol>
		</div>
	</div>
)

export default SafetyFarsi