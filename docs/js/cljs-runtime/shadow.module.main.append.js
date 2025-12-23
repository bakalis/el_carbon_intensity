
shadow.cljs.devtools.client.env.module_loaded('main');

try { test_app.main.init(); } catch (e) { console.error("An error occurred when calling (test-app.main/init)"); console.error(e); }