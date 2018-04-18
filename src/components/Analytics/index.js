import React from 'react'
import ReactGA from 'react-ga'

const addTrailingSlash = () => {
   //If there is no trailing shash after the path in the url add it
    if (window.location.pathname.endsWith('/') === false) {
        var url = window.location.protocol + '//' + 
                window.location.host + 
                window.location.pathname + '/' + 
                window.location.search;
        return url
    }else{
    	return window.location.href
    }
}


ReactGA.initialize('UA-53192310-1')

export const logPageView = () => {
	console.log(addTrailingSlash())
	ReactGA.set({ page: addTrailingSlash() });
	ReactGA.pageview(addTrailingSlash());
}

export const logEvent = (ga_event) => {
	ReactGA.event({
		category: ga_event.category,
		action: ga_event.action,
		label: ga_event.label
	})
}

export const logSliderEvent = (ga_event) => {
	ReactGA.event({
		category: ga_event.category,
		action: ga_event.action,
		label: ga_event.label,
		value: ga_event.viewed
	})
}