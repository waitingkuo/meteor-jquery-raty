Package.describe({
  summary: 'Raty - A jQuery star Rating Plugin'
})

Package.on_use(function (api) {

  api.use('jquery', 'client');
  api.imply('jquery', 'client');
  api.add_files([
    'raty/lib/fonts/raty.eot',
    'raty/lib/fonts/raty.svg',
    'raty/lib/fonts/raty.ttf',
    'raty/lib/fonts/raty.woff',
    'raty/lib/images/cancel-off.png',
    'raty/lib/images/cancel-on.png',
    'raty/lib/images/star-half.png',
    'raty/lib/images/star-off.png',
    'raty/lib/images/star-on.png',
    'raty/lib/jquery.raty.css',
    'raty/lib/jquery.raty.js'
  ],
    'client'
  )

});
