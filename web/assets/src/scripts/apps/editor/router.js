define(['marionette'], function(Marionette) {
  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      'projects/:projectSlug/translate': 'translate',
      'projects/:projectSlug/translate/:source': 'translate',
      'projects/:projectSlug/translate/:source/:target': 'translate',
      'projects/:projectSlug/translate/:source/:target/:translationId': 'translate',
    }
  });

  return Router;
});
