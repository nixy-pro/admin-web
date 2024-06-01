@import url("https://fonts.googleapis.com/css?family=Roboto:400,400i,700");
* {
	font-family: "Roboto", sans-serif;
}
button.wh-ap-btn {
	outline: none;
	width: 60px;
	height: 60px;
	border: 0;
	background-color: #4153F1;
	padding: 0;
	border-radius: 100%;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	cursor: pointer;
	transition: opacity 0.3s, background 0.3s, box-shadow 0.3s;
}

button.wh-ap-btn::after {
	content: "";
	background-image: url("WhatsApp.png");
	background-position: center center;
	background-repeat: no-repeat;
	background-size: 100%;
	width: 100%;
	height: 100%;
	display: block;
	opacity: 1;
}

button.wh-ap-btn:hover {
	opacity: 1;
	
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.wh-api {
	position: fixed;
	bottom: 0;
	left: 0;
}

.wh-fixed {
	margin-left: 15px;
	margin-bottom: 15px;
}

.wh-fixed > a {
	display: block;
	text-decoration: none;
}

button.wh-ap-btn::before {
	content: "Chat with me";
	display: block;
	position: absolute;
	margin-left: -130px;
	margin-top: 16px;
	height: 25px;
	background: #4153F1;
	color: #fff;
	font-weight: 400;
	font-size: 15px;
	border-radius: 3px;
	width: 0;
	opacity: 0;
	padding: 0;
	transition: opacity 0.4s, width 0.4s, padding 0.5s;
	padding-top: 7px;
	border-radius: 30px;
	box-shadow: 0 1px 15px rgba(32, 33, 36, 0.28);
}

.wh-fixed > a:hover button.wh-ap-btn::before {
	opacity: 1;
	width: auto;
	padding-top: 7px;
	padding-left: 10px;
	padding-left: 10px;
	width: 100px;
}

/* animacion pulse */

.whatsapp-pulse {
	width: 60px;
	height: 60px;
	left: 10px;
	bottom: 10px;
	background: #4153F1;
	position: fixed;
	text-align: center;
	color: #ffffff;
	cursor: pointer;
	border-radius: 50%;
	z-index: 99;
	display: inline-block;
	line-height: 65px;
}

.whatsapp-pulse:before {
	position: absolute;
	content: " ";
	z-index: -1;
	bottom: -15px;
	left: -15px;
	background-color: #4153F1;
	width: 90px;
	height: 90px;
	border-radius: 100%;
	animation-fill-mode: both;
	-webkit-animation-fill-mode: both;
	opacity: 0.6;
	-webkit-animation: pulse 1s ease-out;
	animation: pulse 1.8s ease-out;
	-webkit-animation-iteration-count: infinite;
	animation-iteration-count: infinite;
}

@-webkit-keyframes pulse {
	0% {
		-webkit-transform: scale(0);
		opacity: 0;
	}
	25% {
		-webkit-transform: scale(0.3);
		opacity: 1;
	}
	50% {
		-webkit-transform: scale(0.6);
		opacity: 0.6;
	}
	75% {
		-webkit-transform: scale(0.9);
		opacity: 0.3;
	}
	100% {
		-webkit-transform: scale(1);
		opacity: 0;
	}
}

@keyframes pulse {
	0% {
		transform: scale(0);
		opacity: 0;
	}
	25% {
		transform: scale(0.3);
		opacity: 1;
	}
	50% {
		transform: scale(0.6);
		opacity: 0.6;
	}
	75% {
		transform: scale(0.9);
		opacity: 0.3;
	}
	100% {
		transform: scale(1);
		opacity: 0;
	}
    }
