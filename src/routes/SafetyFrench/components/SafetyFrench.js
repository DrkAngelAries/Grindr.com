import React from 'react'
import { IndexLink, Link } from 'react-router'
import './SafetyFrench.scss'
import { createMarkup, replaceAmp } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import _ from '../../../components/Helpers/underscore'

export const SafetyFrench = () => (
	<div className={'container page safety_french'}>
		<div className="page-content">
			<h1>Safety French</h1>
			<p><strong><u>SÉCURITÉ</u></strong></p>
			<p><strong>Si vous vivez dans un endroit où être LGBTQ vous met en danger, voici quelques mesures importantes que vous pouvez prendre pour utiliser Grindr en toute sécurité.</strong></p>
			<ol>
				<li><strong><u>Ne publiez pas de photo de votre visage</u></strong><strong>. </strong>Utilisez plutôt une image qui vous représente d'une manière différente, par exemple liée à vos passe-temps ou votre personnalité.</li>
				<li><strong><u>Ne rencontrez que des amis d'amis</u></strong><strong>. </strong>Avant de rencontrer quelqu'un, il serait préférable de vérifier qu'il est LGBTQ par l'intermédiaire d'un ami ou d'un ami d'ami de confiance.</li>
				<li><strong><u>Rencontrez-vous d'abord par Skype ou dans un endroit sûr</u></strong><strong>. </strong>Il peut être risqué de communiquer l'adresse de votre domicile. Faites plutôt davantage connaissance dans un café accueillant envers les LGBT ou sur Skype.</li>
				<li><strong><u>Informez un ami de votre lieu de rencontre, juste au cas où</u></strong><strong>. </strong>C'est toujours une bonne idée d'informer quelqu'un du lieu où vous allez et de tous les renseignements en cas d'urgence que vous puissiez fournir.</li>
				<li><strong><u>En cas d'arrestation, n'avouez ou n'admettez jamais quoi que ce soit</u></strong><strong>. </strong>Même si les autorités détiennent des preuves, garder le silence est votre meilleur pari.</li>
				<li><strong><u>Lors de votre première rencontre avec quelqu'un, emmenez aussi peu que possible avec vous</u></strong><strong>. </strong>Ne prenez pas vos cartes de crédit et de guichet, mais seulement les documents d'identification que vous prévoyez utiliser.</li>
				<li><strong><u>Faites-vous tester régulièrement pour le VIH et autres IST</u></strong><strong>. </strong>Faites-le au moins trois fois par an, et ayez toujours une conversation avec les personnes que vous rencontrez au sujet de vos attentes en matière de sécurité.</li>
				<li><strong><u>Si quelque chose tourne mal, demandez de l'aide à un organisme LGBTQ ou de défense des droits de la personne</u></strong><strong>. </strong>Renseignez-vous sur les endroits dans votre région où sont offerts des services juridiques directs, tels que des organismes LGBTQ ou de défense des droits de la personne.</li>
			</ol>
		</div>
	</div>
)

export default SafetyFrench
