import React from 'react'
import { IndexLink, Link } from 'react-router'
import './SafetyBengali.scss'
import { createMarkup, replaceAmp } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import _ from '../../../components/Helpers/underscore'

export const SafetyBengali = () => (
	<div className={'container page safety_bengali'}>
		<div className="page-content">
			<h1>Safety Bengali</h1>
			<p><strong><u>নিরাপত্তা</u></strong></p>
			<p><strong>আপনি</strong> <strong>যদি</strong> <strong>এমন</strong> <strong>কোন</strong> <strong>জায়গায়</strong> <strong>থাকেন</strong> <strong>যেখানে</strong><strong> LGBTQ </strong><strong>হওয়ায়</strong> <strong>আপনাকে</strong> <strong>বিপদের</strong> <strong>সম্মুখীন</strong> <strong>হতে</strong> <strong>হয়</strong><strong>, </strong><strong>তাহলে</strong><strong> Grindr </strong><strong>ব্যবহার</strong> <strong>করার</strong> <strong>সময়</strong> <strong>আপনার</strong> <strong>নিরাপত্তার</strong> <strong>জন্য</strong> <strong>নিচে</strong> <strong>কিছু</strong> <strong>পরামর্শ</strong> <strong>দেওয়া</strong> <strong>হল</strong><strong>।</strong></p>
			<ol>
			<li><strong><u>আপনার</u></strong> <strong><u>মুখের</u></strong> <strong><u>ছবি</u></strong> <strong><u>পোস্ট</u></strong> <strong><u>করবেন</u></strong> <strong><u>না</u></strong>। এমন একটা ছবি ব্যবহার করার চেষ্টা করুন যেটা আপনাকে কিছটা অন্যরকম ভাবে উপস্থাপিত করে যেমন আপনার শখ এবং ব্যক্তিত্বের সঙ্গে সম্পর্কযুক্ত কিছু।</li>
			<li><strong><u>শুধুমাত্র</u></strong> <strong><u>বন্ধুদের</u></strong> <strong><u>বন্ধুদের</u></strong> <strong><u>সঙ্গেই</u></strong> <strong><u>মিলিত</u></strong> <strong><u>হোন</u></strong>। কারো সঙ্গে মিলিত হবার আগে, তাঁরা অন্য একজন বিশ্বস্ত বন্ধুর বা বন্ধুর বন্ধুর LGBTQ লোকজন কিনা তা যাচাই করে নিন।</li>
			<li><strong><u>প্রথমে</u></strong> <strong><u>স্কাইপে</u></strong> <strong><u>বা</u></strong> <strong><u>কোন</u></strong> <strong><u>একটি</u></strong> <strong><u>নিরাপদ</u></strong> <strong><u>স্থানে</u></strong> <strong><u>মিলিত</u></strong> <strong><u>হয়ে</u></strong> <strong><u>নিন</u></strong>। আপনার বাড়ির ঠিকানা দেওয়াটা কিন্তু বিপদজনক হতে পারে। পরিবর্তে, কোন LGBT-বান্ধব কেফেতে মিলিত হয়ে তাঁর সঙ্গে ভালভাবে পরিচিত হয়ে নিন অথবা স্কাইপের মাধ্যমে কথা বলে নিন।</li>
			<li><strong><u>যদি</u></strong> <strong><u>ধরুন</u></strong> <strong><u>মিলিত</u></strong> <strong><u>হনই</u></strong> <strong><u>তাহলে</u></strong> <strong><u>আপনার</u></strong> <strong><u>কোন</u></strong> <strong><u>একজন</u></strong> <strong><u>বন্ধুকে</u></strong> <strong><u>আপনাদের</u></strong> <strong><u>মিলিত</u></strong> <strong><u>হবার</u></strong> <strong><u>স্থান</u></strong> <strong><u>জানিয়ে</u></strong> <strong><u>রাখুন</u></strong><strong><u>।</u></strong> এটা সবসময়েই ভাল হয় যদি আপনার যদি এমন কোন একজন ব্যক্তি থাকে যিনি জানবেন আপনারা কোথায় গেছে এবং আপনাকে জরুরিকালীনভাবে যোগযোগের নম্বর তাঁর কাছে থাকে।</li>
			<li><strong><u>আপনাদের</u></strong> <strong><u>যদি</u></strong> <strong><u>গ্রফতার</u></strong> <strong><u>করা</u></strong> <strong><u>হয়</u></strong><strong><u>, </u></strong><strong><u>তাহলে</u></strong> <strong><u>কখনই</u></strong><strong><u>, </u></strong><strong><u>কোনভাবেই</u></strong> <strong><u>কোন</u></strong> <strong><u>কিছু</u></strong> <strong><u>করার</u></strong> <strong><u>ব্যাপারে</u></strong> <strong><u>স্বীকারোক্তি</u></strong> <strong><u>করবেন</u></strong> <strong><u>না</u></strong><strong><u>।</u></strong> তাঁদের কাছে যদি কোন প্রমাণও থাকে, তাহলেও মুখে কুলুপ এঁটে থাকাটাই আপনার জন্য সবচেয়ে ভাল বাজি হতে পারে।</li>
			<li><strong><u>যখন</u></strong> <strong><u>প্রথমবারের</u></strong> <strong><u>জন্য</u></strong> <strong><u>কারো</u></strong> <strong><u>সঙ্গে</u></strong> <strong><u>মিলিত</u></strong> <strong><u>হবেন</u></strong><strong><u>, </u></strong><strong><u>আপনার</u></strong> <strong><u>সঙ্গে</u></strong> <strong><u>যত</u></strong> <strong><u>কম</u></strong> <strong><u>করে</u></strong> <strong><u>পারেন</u></strong> <strong><u>টাকা</u></strong><strong><u>-</u></strong><strong><u>পয়সা</u></strong> <strong><u>রাখুন</u></strong>। আপনার সঙ্গে আপনার ক্রেডিট কার্ড বা এটিম কার্ডগুলো নিয়ে যাবেন না, শুধুমাত্র আপনি ব্যবহার করবেন বলে পরিকল্পনা করে রেখেছেন এমন পরিচিতিপত্রগুলোই নিয়ে যাবেন।</li>
			<li><strong><u>নিয়মিতভাবে</u></strong> <strong><u>এইচআইভি</u></strong> <strong><u>এবং</u></strong> <strong><u>অন্যান্য</u></strong> <strong><u>যৌন</u></strong> <strong><u>সংবাহিত</u></strong> <strong><u>রোগের</u></strong> <strong><u>পরীক্ষা</u></strong><strong><u>-</u></strong><strong><u>নিরীক্ষাগুলো</u></strong> <strong><u>করান</u></strong>। এগুলো বছরে অন্তত তিনবার করে করান এবং আপনি যে সমস্ত পুরুষদের সঙ্গে মিলিত হবেন তাঁদেরকে সঙ্গে আপনার সুরক্ষা সংক্রান্ত প্রত্যাশাগুলোর ব্যাপারে আলাপ-আলোচনা করে নিন।</li>
			<li><strong><u>কোন</u></strong> <strong><u>বিপদ</u></strong> <strong><u>যদি</u></strong> <strong><u>ঘটেই</u></strong> <strong><u>যায়</u></strong><strong><u>, </u></strong><strong><u>তাহলে</u></strong> <strong><u>কোন</u></strong> <strong><u>মানবাধিকার</u></strong> <strong><u>সংগঠন</u></strong> <strong><u>বা</u></strong><strong><u> LGBTQ </u></strong><strong><u>সংগঠনের</u></strong> <strong><u>কাছে</u></strong> <strong><u>সাহায্যের</u></strong> <strong><u>জন্য</u></strong> <strong><u>যান</u></strong><strong><u>।</u></strong> আপনার অঞ্চলের এমন কোন জায়গার খোঁজ করুন যারা সরাসরি আইনি সহায়তা দিয়ে থাকে যেমন LGBTQ সংগঠনগুলো বা আরও সাধারণ স্তরের মানবাধিকার সংগঠনগুলো।</li>
			</ol>
		</div>
	</div>
)

export default SafetyBengali
