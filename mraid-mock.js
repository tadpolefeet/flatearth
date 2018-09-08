 var vungleMraidMock = {
     isViewable: function() {
         return true;
     },
     isReady: function() {
        return true;
     },
     getState: function() {
         return 'ready';
     },
     open: function(link) {
         // console.log('overide mraid open ' + link); 
         callSDK('download');
     },
     getScreenSize: function() {
         return {
             width: document.body.clientWidth,
             height: document.body.clientHeight
         }
     },
     addEventListener: function(eventName, fn) {

         if (eventName === 'sizeChange') {
             window.addEventListener('resize', fn, !0)
         }
     },
     removeEventListener: function(eventName, fn) {
     },
     getVersion: function() {
        return '1.0';
     },
     useCustomClose: function() {
     }
 };