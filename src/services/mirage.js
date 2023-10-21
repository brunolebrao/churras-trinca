import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    models: {
      event: Model
    },
    seeds(server) {
      server.db.loadData({
        events: [
          {
            id: 1,
            name: 'Festa da casa',
            date: '20/10/2023',
            peoples: [
              {
                id: 1,
                name: 'Bruno',
                amount: 20
              },
              {
                id: 2,
                name: 'Gabriela',
                amount: 20
              }
            ],
            type: 'deposit',
            category: 'SEMBEBIDAS',
            amount: 20,
            createdAt: new Date('2021-09-24 09:00:00')
          },
          {
            id: 2,
            name: 'Festa do Mozi',
            date: '18/10/2023',
            peoples: [
              {
                id: 1,
                name: 'Bruno',
                amount: 20
              },
              {
                id: 2,
                name: 'Gabriela',
                amount: 20
              }
            ],
            type: 'deposit',
            category: 'COMBEBIDA',
            amount: 20,
            createdAt: new Date('2021-09-24 09:00:00')
          }
        ]
      });
    },
    routes() {
      this.namespace = 'api';

      this.get('/events', () => {
        return this.schema.all('event');
      });

      this.get('/auth', (schema, request) => {
        console.log('%c⧭', 'color: #917399', request);
        console.log('%c⧭', 'color: #0088cc', schema);
        if (request.queryParams.email && request.queryParams.password) {
          console.log('%c⧭', 'color: #ffa640', 'AQUI');
          return { token: true };
        }
      });

      this.post('/events', (schema, request) => {
        const data = JSON.parse(request.requestBody);

        return schema.create('event', data);
      });
    }
  });

  return server;
}
