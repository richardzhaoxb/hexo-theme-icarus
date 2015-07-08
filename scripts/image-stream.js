hexo.extend.tag.register('stream', function(args, content){
	var result = '<div class="hexo-img-stream">';
	result += '<style type="text/css">';
	result += '.hexo-img-stream{column-width:320px;column-gap:15px;width:90%;max-width:1100px;margin:50px auto}div.hexo-img-stream figure{background:#fefefe;border:2px solid #fcfcfc;box-shadow:0 1px 2px rgba(34,25,25,0.4);margin:0 2px 15px;padding:15px;padding-bottom:10px;display:inline-block;column-break-inside:avoid}div.hexo-img-stream figure img{border-bottom:1px solid #ccc;padding-bottom:15px;margin-bottom:5px;max-width:150px}div.hexo-img-stream figure figcaption{font-size:.9rem;color:#444;line-height:1.5}div.hexo-img-stream small{font-size:1rem;float:right;text-transform:uppercase;color:#aaa}div.hexo-img-stream small a{color:#666;text-decoration:none;transition:.4s color}@media screen and (max-width:750px){.hexo-img-stream{column-gap:0}.hexo-img-stream figure{width:100%}}';
	result += '</style>';
	result += content;
	result += '</div>';
	return result;
}, {ends: true});

hexo.extend.tag.register('figure', function(args){
	
	var imgUrl = args.shift();
	var title = args.join(' ');

	var result = '<figure>';
	result += '<img src="' + imgUrl + '"/>';
	result += '<figcaption>' + hexo.render.renderSync({text: title, engine: 'markdown'}).replace(/<p>|<\/p>/, '') + '</figcaption>';
	result += '</figure>';
	return result;
});