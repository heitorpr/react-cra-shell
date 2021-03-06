import { Workbox } from 'workbox-window';

export default function registerServiceWorker() {

  if ( 'production' !== process.env.NODE_ENV ) {
    return;
  }
  // Check if the serviceWorker Object exists in the navigator object ( means if browser supports SW )
  if ('serviceWorker' in navigator) {
    const wb = new Workbox(`${process.env.PUBLIC_URL}/service-worker.js`);

    wb.addEventListener('installed', event => {
      /**
       * We have the condition - event.isUpdate because we don't want to show
       * this message on the very first service worker installation,
       * only on the updated
       */
      if (event.isUpdate) {
        if (confirm(`New app update is available!. Click OK to refresh`)) {
          window.location.reload();
        }
      }
    });

    // wb.addEventListener('message', (event) => {
    //   if (event.data.meta === 'workbox-broadcast-update') {
    //     const { updatedURL } = event.data.payload;

    //     if (confirm(`Your api ${updatedURL} has new content!`)) {
    //       window.location.reload();
    //     }
    //   }
    // });

    wb.register();
  }
}
