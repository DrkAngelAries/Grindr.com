import React from 'react'
import { IndexLink, Link } from 'react-router'
import './SafetySpanish.scss'
import { createMarkup, replaceAmp } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import _ from '../../../components/Helpers/underscore'

export const SafetySpanish = () => (
	<div className={'container page safety_spanish'}>
		<div className="page-content">
			<h1>Safety Spanish</h1>
			<p><strong><u>SEGURIDAD</u></strong></p>
			<p><strong>Si vives en algún lugar donde ser LGBTQ te pone en peligro, estas son algunas medidas que puedes tomar para garantizar tu seguridad al utilizar Grindr.</strong></p>
			<ol>
				<li><strong><u>No publiques fotos de tu cara.</u></strong> Trata de utilizar una foto que te represente de otra manera, como una relacionada con tus pasatiempos o tu personalidad.</li>
				<li><strong><u>Solo reúnete con amigos de amigos.</u></strong> Antes de conocer a alguien en persona, sería ideal que puedas verificar que son personas LGBTQ con otro amigo de confianza o amigo de un amigo.</li>
				<li><strong><u>Conócete por Skype o en un lugar seguro primero.</u></strong> Compartir tu dirección puede ser riesgoso. En lugar de hacer esto, conoce mejor a alguien citándolos en un café seguro para LGBT o ten una charla por Skype.</li>
				<li><strong><u>Hazle saber a un amigo dónde te reunirás por las dudas.</u></strong> Siempre es una buena idea que alguien sepa dónde has ido y algún contacto de emergencia que puedas proveer.</li>
				<li><strong><u>Si te arrestan, nunca confieses o admitas nada.</u></strong> Incluso si tienen pruebas, permanecer callado es lo mejor que puedes hacer.</li>
				<li><strong><u>Cuando conoces a alguien por primera vez, lleva contigo lo menos posible</u></strong>. No lleves tus tarjetas de crédito y débito, solo lleva los documentos de identificación que planeas usar.</li>
				<li><strong><u>Realízate exámenes de VIH y otras enfermedades de transmisión sexual con regularidad.</u></strong> Hazlo al menos tres veces al año, y siempre ten conversaciones con las personas con las que sales acerca de tus expectativas de seguridad.</li>
				<li><strong><u>Si algo sale mal, dirígete a una organización de derechos humanos o LGBTQ para pedir ayuda. </u></strong>Averigua los lugares en tu área que provean servicios legales directos como una organización de LGBTQ o una organización de derechos humanos más general.</li>
			</ol>
		</div>
	</div>
)

export default SafetySpanish
