import CoreLayout from '../layouts/CoreLayout'
import Download from './Download'
import { injectReducer } from '../store/reducers'

export const createRoutes = (store) => ({
	path		: '/',
	component	: CoreLayout,
	indexRoute	: require('./Download').default(store),
	getChildRoutes (location, cb) {
		require.ensure([], (require) => {
			cb(null, [
				require('./About').default(store),
				require('./Advertise').default(store),
				require('./AdvertiseForm').default(store),
				require('./Blog').default(store),
				require('./Contact').default(store),
				require('./Download').default(store),
				require('./Error').default(store),
				require('./G4e').default(store),
				require('./Community').default(store),
				require('./SafetyArabic').default(store),
				require('./SafetyFarsi').default(store),
				require('./SafetyBahasaIndonesia').default(store),
				require('./SafetyBahasaMalay').default(store),
				require('./SafetyBengali').default(store),
				require('./SafetyEnglish').default(store),
				require('./SafetyFrench').default(store),
				require('./SafetyKenya').default(store),
				require('./SafetyRussian').default(store),
				require('./SafetySpanish').default(store),
				require('./SafetyUrdu').default(store),
				require('./SafetyHausa').default(store),
				require('./SafetyYoruba').default(store),
				require('./SafetyIgbo').default(store),
				require('./SafetyNigerianPidgin').default(store),
				require('./SafetyTajik').default(store),
				require('./SafetyKiswahili').default(store),
				require('./SafetyAzeri').default(store),
				require('./Sweepstakes').default(store),
				require('./Gaymoji1').default(store),
				require('./TurkeyRefugeesFarsi').default(store),
				require('./TurkeyRefugeesArabic').default(store),
				require('./KurdistanRefugeesArabic').default(store),
				require('./KurdistanRefugeesKurdish').default(store),
				require('./NavajoCountry').default(store),
				require('./GrindrLabs').default(store),
				require('./GrindTheVote').default(store),
				require('./IntoItem').default(store),
				require('./Jobs').default(store),
				require('./Careers').default(store),
				require('./Press').default(store),
				require('./PrivacyPolicy').default(store),
				require('./ProfileGuidelines').default(store),
				require('./StyleGuide').default(store),
				require('./TermsOfService').default(store),
				require('./PageNotFound').default(store),
			])
		})
	}

})


export default createRoutes
