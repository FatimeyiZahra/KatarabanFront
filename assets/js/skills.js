$( document ).ready( function() {

    var entries = [ 
        
        { label: 'JavaScript', url: 'http://niklasknaack.blogspot.de/', target: '_top' },
        { label: 'HTML', url: 'http://www.flashforum.de/', target: '_top' },
        { label: 'CSS(Sass)', url: 'http://www.jqueryscript.net/', target: '_top' },
        { label: 'WPF', url: 'http://forum.jswelt.de/', target: '_top' },
        { label: 'WinForm', url: 'https://jsfiddle.net/user/NiklasKnaack/fiddles/', target: '_top' },
        { label: 'C#', url: 'http://codepen.io/', target: '_top' },
        { label: 'ASP.NET', url: 'http://threejs.org/', target: '_top' },
        { label: '.Net Core', url: 'http://webglstudio.org/', target: '_top' },
        { label: 'JQuery', url: 'http://jscompress.com/', target: '_top' },
        { label: 'MS SQL', url: 'https://tinypng.com/', target: '_top' },
        { label: 'Bootstrap', url: 'http://caniuse.com/', target: '_top' },
        { label: 'C++', url: 'https://goo.gl/', target: '_top' },
        { label: 'Photoshop', url: 'http://www.opinionatedgeek.com/DotNet/Tools/HTMLEncode/Encode.aspx', target: '_top' },
        { label: 'CorelDRAW', url: 'https://twitter.com/niklaswebdev', target: '_top' },
        { label: 'EntityFrame', url: 'http://nkunited.deviantart.com/', target: '_top' },
        { label: '​Drawing', url: 'http://gulpjs.com/', target: '_top' },
        { label: 'Psychology', url: 'https://www.browsersync.io/', target: '_top' },
        { label: 'GitHub', url: 'https://github.com/', target: '_top' },
        { label: 'Writing', url: 'https://www.shadertoy.com/', target: '_top' },
        { label: 'Sculpture', url: 'http://gamua.com/starling/', target: '_top' },
        { label: 'Ajax', url: 'http://jsperf.com/', target: '_top' },
        { label: 'NodeJs', url: 'http://foundation.zurb.com/', target: '_top' },
        { label: 'Angular', url: 'http://createjs.com/', target: '_top' },
        { label: 'ReactJs', url: 'http://julian.com/research/velocity/', target: '_top' },
        { label: 'Es5/Es6', url: 'https://greensock.com/docs/#/HTML5/GSAP/TweenLite/', target: '_top' },
        { label: 'TypeScript', url: 'https://jquery.com/', target: '_top' },
        { label: 'Rest Api', url: 'http://www.jqueryrain.com/', target: '_top' },
        { label: 'jQuery Plugins', url: 'http://jquery-plugins.net/', target: '_top' },
    ];

    var settings = {

        entries: entries,
        width: 480,
        height: 480,
        radius: '65%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: '#040404',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: 2,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '15',
        fontColor: '#fff',
        fontWeight: 'normal',//bold
        fontStyle: 'normal',//italic 
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: true,
        tooltipFontFamily: 'Oswald, Arial, sans-serif',
        tooltipFontSize: '11',
        tooltipFontColor: '#fff',
        tooltipFontWeight: 'normal',//bold
        tooltipFontStyle: 'normal',//italic 
        tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: 'left',
        tooltipDiffX: 0,
        tooltipDiffY: 10

    };

    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    $( '#holder' ).svg3DTagCloud( settings );

} );
