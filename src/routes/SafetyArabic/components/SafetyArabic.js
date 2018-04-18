import React from 'react'
import { IndexLink, Link } from 'react-router'
import './SafetyArabic.scss'
import { createMarkup, replaceAmp } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import _ from '../../../components/Helpers/underscore'

export const SafetyArabic = () => (
	<div className={'container page safety_arabic'}>
		<div className="page-content">
			<h1>Safety Arabic</h1>
			<p className="align_center"><u>دواعي السلامة</u></p>
			<p>إذا كنت تعیش في مكان ما بحیث تكون مُعرض للخطر بسبب میولك الجنسیة أو ھویتك الجندریة ، فنُقدم لك فیما یلي بعض الخطوات المھمة التي یمكنك اتخاذھا لضمان سلامتك أثناء استخدام تطبیق جریندر</p>
			<ol>
				<li><u>لا تنشر صورة وجهك</u>. حاول استخدام صورة تمثلك بطريقة مختلفة، على سبيل المثال صورة تُعبر عن هواياتك أو شخصيتك.</li>
				<li><u>لا تُقابل سوى أصدقاء الأصدقاء</u><strong>. </strong>قبل مقابلة شخص ما، ربما تحتاج إلى التحقق مما إذا كانوا من مجتمع الميم (مثليين ، مثليات، مزدوجي الميل الجنسي والترانس/عابري وعابرات النوع الاجتماعي) من خلال صديق موثوق به آخر أو صديق صديقك.</li>
				<li><u>أجرى مقابلاتك لأول مرة من خلال برنامج سكايب أو في مكان آمن</u>. قد تكون مشاركة عنوان منزلك محفوفة بالمخاطر. وبدلًا من ذلك، تعرف على شخص ما بشكل أفضل من خلال مقابلته على موقع مجتمع الميم (مثليين ، مثليات، مزدوجي الميل الجنسي والترانس/عابري وعابرات النوع الاجتماعي) أو أجري حديثًا معه على برنامج سكايب.</li>
				<li><u>أخبر أحد أصدقائك بمكان مقابلاتك كمحاولة لتجنب الخطر</u>. إنها لفكرة جيدة أن تبقى أصدقائك دائمًا على علم بمكان ذهابك وأن تزودهم بأي معلومات اتصال في حالات الطوارئ.</li>
				<li><u>إذا تم القبض عليك</u>، لا تعترف أو تقر بأي شيء على الإطلاق. حتى إذا كان لديهم دليل، فصمتك هو أفضل ما تقوم به.</li>
				<li><u>خلال لقائك الأول مع شخص ما، ينبغي أن يكون بحوزتك المال القليل فقط بقدر المستطاع</u>. لا تأخذ بطاقة الائتمان وبطاقات الصراف الآلي الخاصة بك، أحضر فقط وثائق الهوية التي تخطط لاستخدامها.</li>
				<li><u>أجري تحاليل فيروس نقص المناعة البشرية والأمراض الأخرى المنقولة جنسياً بانتظام</u>. قم بإجراء هذه التحليلات ثلاث مرات على الأقل في السنة، ودائمًا تحدث مع ممن تقابلهم عن توقعات سلامتك.</li>
				<li><u>إذا تضررت بسبب أي خطأ، انتقل إلى إحدى منظمات حقوق الإنسان أو منظماتمجتمع الميم (مثليين ، مثليات، مزدوجي الميل الجنسي والترانس/عابري وعابرات النوع الاجتماعي</u><u>)</u><u> للحصول على المساعدة</u><strong>.</strong> تعرف في منطقتك على الأماكن التي تقدم خدمات قانونية مباشرة، مثل منظمات مجتمع الميم (مثليين ، مثليات، مزدوجي الميل الجنسي والترانس/عابري وعابرات النوع الاجتماعي) أو منظمات حقوق إنسان أكثر عمومية.</li>
			</ol>
		</div>
	</div>
)

export default SafetyArabic
