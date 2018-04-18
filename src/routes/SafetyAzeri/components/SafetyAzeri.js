import React from 'react'
import { IndexLink, Link } from 'react-router'
import './SafetyAzeri.scss'
import { createMarkup, replaceAmp } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import _ from '../../../components/Helpers/underscore'

export const SafetyAzeri = () => (
	<div className={'container page safety_azeri'}>
		<div className="page-content">
			<h1>Safety Azeri</h1>
			<p><u><strong>TƏHLÜKƏSİZLİK QAYDALARI</strong></u></p>
			<p><u><strong>Yaşadığınız məkan LGBTQ fərdləri üçün təhlükəlidirsə, Grindr-dan istifadə zamanı aşağıdakı vacib qaydalara riayət etməyinizi məsləhət görürük:</strong></u></p>
			<ol>
				<li><u><strong>Üzünüzün aydın görünən şəklini yükləməyin.</strong></u> Sizin hobbilərinizi və ya xarakterinizi ifadə edən şəkilləri yükləyin</li>
				<li><u><strong>Yalnız ortaq tanışınız olan insanlarla görüşün.</strong></u> Görüşdən əvvəl, görüşəyəcəyiniz şəxsin LGBTQ fərdi olduğunu yoxlayın. Ortaq dost və tanışlardan onun kimliyini təsdiqləyin.</li>
				<li><u><strong>Əvvəlcə Skayp-da və ya təhlükəsiz məkanda görüşün.</strong></u> Ev ünvanınızı paylaşmaq risklidir. Əvəzində, görüşəyəcəyiniz insanla daha yaxından tanış olmaq üçün onunla Skaypda danışın və ya LGBTQ fərdlərinə qarşı dözümlü olan kafelərin birində görüşün.</li>
				<li><u><strong>Görüşdən əvvəl yaxın dostunuza haraya gedəcəyiniz və kiminlə görüşəcəyiniz haqqında məlumat verin.</strong></u> Fövqəlada hal baş versə təcili əlaqə nömrəsi və bütün vacib məlumatlar dostunuzda olmalıdır.</li>
				<li><u><strong>Saxlandığınız və ya həbs olunduğunuz halda heç nəyi boynunuza almayın.</strong></u> Onlarda sübut olsa belə, ən yaxşı taktika - danışmamaqdır.</li>
				<li><u><strong>Kiminləsə ilk dəfə görüşəndə özünüzlə mümkün qədər az əşya götürün.</strong></u> Bank kartlarını evdə qoyun. Yalnız lazım olacaq sənədlər üzərinizdə olsun.</li>
				<li><u><strong>HİV/QİCS və digər yoluxucu xəstəliklərə qarşı tez-tez tibbi müainədən keçin.</strong></u>  Ən azından ildə üç dəfə tibbi testlərdən keçin. Görüşəcəyiniz şəxsdən də eyni şeyi tələb edin.</li>
				<li><u><strong>Xoşagəlməz hadisə baş verərsə, yardım üçün İnsan Hüquqları Müdafiəçilərinə və ya LGBTQ təşkilatlarına müraciət edin.</strong></u> Yaşadığınız məkanda Hüquq Müdafiəçisi və ya LGBTQ təşkilatların əlaqə məlumatlarını əvvəlcədən araşdırın və qeyd edin.</li>
			</ol>		
		</div>
	</div>
)

export default SafetyAzeri
