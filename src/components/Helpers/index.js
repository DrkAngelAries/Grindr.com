import React from 'react'
import DocumentMeta from 'react-document-meta'
import $ from 'jquery'
import _ from './underscore'

const isMobile = $('body').hasClass('mobile')

const getMobileImg = (url) => {
	//url = url.replace(/(\.[\w\d_-]+)$/i, '-300x127$1');
	return url
	//console.log(url)
}

export const getInto = (state) => {
	return state.posts.filter((post) => {
		if(!isFeaturedProduct(post.custom_fields)) {
			return post.categories[0].slug === 'into'
		}
	})
}

export const isFeaturedProduct = (a) => {
	if (a.hasOwnProperty('featured_product_banner')) {
		if (a.featured_product_banner[0]==='1') {
			return true
		}else{
			return false
		}
	}else{
		return false
	}
}

export const TEMPBG = () => (
	<svg width='580' height='400' xmlns='http://www.w3.org/2000/svg'>
	    <defs>
	        <radialgradient spreadmethod='pad' id='svg_1'>
	            <stop offset='.156' stopColor='#fff' />
	            <stop offset='1' stopOpacity='.992' stopColor='#ffd8ff' />
	            <stop offset='1' stopOpacity='0' stopColor='0' />
	        </radialgradient>
	    </defs>
	    <rect fill='#fff' id='canvas_background' height='402' width='582' y='-1'
	    x='-1' />
	    <rect fill='url(#gridpattern)' strokeWidth='0' height='100%' width='100%'
	    display='none' overflow='visible' id='canvasGrid' />
	    <g>
	        <rect id='svg_2' height='404' width='587' y='-1.5' x='-2' strokeWidth='1.5'
	        stroke='#000' fill='url(#svg_1)' />
	    </g>
	</svg>
)

export const addDeviceClassToBody = () => {
	if ( screen.width>=768 && navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPad/i) ){
		document.body.classList.add("tablet")
	}
	if( navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i)
	){
		document.body.classList.add("mobile")
	}else{
		document.body.classList.add("desktop")
	}
}

export const forceTrailingSlash = ()=>{
   //If there is no trailing shash after the path in the url add it
    if (window.location.pathname.endsWith('/') === false) {
        var url = window.location.protocol + '//' + 
                window.location.host + 
                window.location.pathname + '/' + 
                window.location.search;

        window.history.replaceState(null, document.title, url);
    }
}

export const forceTrailingSlashOnChange = (prevState, nextState, replace) => {
  forceTrailingSlash(nextState, replace);
}




export const limitWords = (textToLimit, wordLimit) => {
	var finalText = "";
	var text2 = textToLimit.replace(/\s+/g, ' ');
	var text3 = text2.split(' ');
	var numberOfWords = text3.length;
	var i=0;
	if(numberOfWords > wordLimit){
		for(i=0; i< wordLimit; i++)
			finalText = finalText+" "+ text3[i];
		return finalText+"...";
	}
	else return textToLimit;
}

export const convertToS3 = (url) => {
	if (isMobile) url = getMobileImg(url)
	var pathArray = url.split( '/' );
	var converted = S3_PATH+pathArray[pathArray.length-1]
	//console.log(url, converted)
	return converted

}

export const limitChars = (textToLimit, background) => {
	var charLimit = 0
	switch(background){
		case 'landscape':
			charLimit = 300
			break;
		case 'square':
			charLimit = 120
			break;
		case 'land-square':
			charLimit = 120
			break;
		case 'tall':
			charLimit = 140
			break;
		default:
			charLimit = 140
			break;
	}

	return textToLimit.substring(0,charLimit)+"..."
}

export const getImage = (arr, img) => {
	var img = arr.attachments.filter(function(v) {
		return +v.id === +img
	})
	/* make sure img was found in json and prevent site from breaking if not */
	if (img.length!== 0) {
		return img[0].url
	}else{
		return TEMPBG
	}
}

export const getSimpleImage  = (arr) => {

	/* make sure img was found in json and prevent site from breaking if not */
	if (arr.attachments.length) {
		return arr.attachments[0].url
	}else{
		return TEMPBG
	}
}

export const setBackgroundStyle = (arr, img) => {
	return  {backgroundImage: 'url(' + getImage(arr, img)+')'}
}


/* Full Div Image Background */
export const setCoverBackgroundStyle = (arr, img) => {
	return  {
		background: '#f0f1f3 url(' + getImage(arr, img)+') no-repeat center center', 
		backgroundSize: 'cover'
	}
}

export const setSimpleBackgroundStyle = (img) => {
	return  {backgroundImage: 'url('+img+')'}
}

export const setSimpleCoverBackgroundStyle = (img) => {
	return  {
		background: 'url('+ img +') no-repeat center center', 
		backgroundSize: 'cover'
	}
}

export const createMarkup = (html) => {
	return {__html: html}
}

export const createMarkupWBR = (html) => {
	return {__html: html.replace(/\n/g,"<br />")}
}

export const getContributors = (users, cf) => {
	let l = +cf.contributors[0]
	let arr = [];
	for(let i=0;i<l;i++){
		let temp = {
			'user': users.filter(function(v) {
				//console.log(v.custom_fields.contributor[0], +cf['contributors_'+i+'_user'][0], v.title)
				if(+v.custom_fields.contributor[0] == +cf['contributors_'+i+'_user'][0]) return v.title
 			}),
			'role': cf['contributors_'+i+'_contributor_role'][0],
		}
		arr.push(temp)
	}
	return arr
}

export const replaceAmp = (str) =>  str.toString().replace(/&#(\d+);/g, function(match, match2) {return String.fromCharCode(+match2)})
export const putMetaData = (item) => {
	const meta = {
		title: replaceAmp(item.title),
		description: item.custom_fields.excerpt,
		canonical: 'http://www.grindr.com/download',
		meta: {
			charSet: 'utf-8',
			name: {
				keywords: replaceAmp(item.title)
			},
			itemProp: {
				name: replaceAmp(item.title),
				description: item.custom_fields.excerpt,
		canonical: 'http://www.grindr.com/download',
			},
			property: {
				'og:title': replaceAmp(item.title),
				'og:type': 'article',
				'og:site_name': 'Gay Dating App & Social Network – Chat & Date on Grindr',
				'og:url': 'http://www.grindr.com/',
				'og:image': getImage(item, item.custom_fields.main_image[0]),
				'twitter:site': '@Grindr',
				'twitter:title': replaceAmp(item.title),
				'twitter:image': getImage(item, item.custom_fields.main_image[0]),
				'twitter:card': 'summary',
				'twitter:description': item.custom_fields.excerpt,
			}
		},
		auto: {
			ograph: true
		}
    }
	return <DocumentMeta {...meta} />
}

export const getArticleTags = (tags) => {
	var l = tags.length-1
	var comma;
	return (
		tags.map(function(a, i){
			(i<l) ? comma=', ' : comma=''
			return (
				<span id={a.id} key={a.id} className={'tag'}>{a.title}{comma }&nbsp;</span>
			)
		})
	)
}

const getTags = (tags) => {
	return (
		tags.map(function(a, i){
			return (
				a.title
			)
		})
	)
}