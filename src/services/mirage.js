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
            name: 'Festa de Natal',
            date: '2023-12-25',
            description: 'Tragam o que forem beber',
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
            name: 'Churras de ano novo',
            date: '2023-12-31',
            description: 'Tragam apenas a fome',
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
              },
              {
                id: 3,
                name: 'Matheo',
                amount: 10
              },
              {
                id: 4,
                name: 'Enrico',
                amount: 20
              }
            ],
            type: 'deposit',
            category: 'COMBEBIDAS',
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
      this.get('/events/:id', (schema, request) => {
        const id = request.params.id;
        return schema.events.find(id);
      });

      this.get('/auth', (schema, request) => {
        if (request.queryParams.email && request.queryParams.password) {
          return { token: true };
        }
      });

      this.post('/events', (schema, request) => {
        const data = JSON.parse(request.requestBody);
        delete data.id;

        return schema.create('event', data);
      });

      this.patch('/events/:id', (schema, request) => {
        const id = request.params.id;

        const data = JSON.parse(request.requestBody);

        schema.events.find(id).update(data);

        return this.schema.all('event');
      });

      this.delete('/events/:id', (schema, request) => {
        const id = request.params.id;

        schema.events.find(id).destroy();

        return this.schema.all('event');
      });
    }
  });

  return server;
}
