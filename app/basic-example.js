import { observable, autorun } from 'mobx';

export default function() {
  const store = observable({
    counter: 0
  });

  autorun(() => document.querySelector('#basic-example .output')
                        .innerHTML = store.counter );

  document.querySelector('#basic-example button')
          .addEventListener('click',
            () => store.counter++ );
}
