const express = require('express');
const router = express.Router();

const generateRandomToken = () => {
  return Math.random().toString(36).substring(2);
};

const predefinedTags = ['nice', 'developer', 'winner', 'cool', 'teacher', 'friendly', 'designer', 'creative', 'manager', 'brilliant', 'engineer', 'smart', 'hardworking', 'kind', 'talented', 'enthusiastic', 'experienced', 'cheerful', 'focused', 'motivated', 'knowledgeable', 'innovative', 'dedicated', 'reliable'];

const generateRandomTags = () => {
  const numberOfTags = Math.floor(Math.random() * 3) + 1; // генерируем от 1 до 3 тегов
  const tags = [];
  for (let i = 0; i < numberOfTags; i++) {
    const randomTag = predefinedTags[Math.floor(Math.random() * predefinedTags.length)];
    if (!tags.includes(randomTag)) {
      tags.push(randomTag);
    }
  }
  return tags;
};

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'manager' && password === 'crmdemo5@') {
    const token = generateRandomToken();
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

router.post('/logout', (req, res) => {
  res.status(200).json({ message: 'Logout successful' });
});

const clients = [
  { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', tags: ['nice', 'developer'], createdAt: '2024-07-01T10:00:00Z' },
  { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', tags: ['winner'], createdAt: '2024-07-02T11:30:00Z' },
  { key: '3', name: 'Joe Black', age: 32, address: 'Sydney No. 1 Lake Park', tags: ['cool', 'teacher'], createdAt: '2024-07-03T14:15:00Z' },
  { key: '4', name: 'Anna Smith', age: 28, address: 'Paris No. 1 Lake Park', tags: ['friendly', 'designer'], createdAt: '2024-07-04T16:45:00Z' },
  { key: '5', name: 'Emily Johnson', age: 36, address: 'Berlin No. 1 Lake Park', tags: ['creative', 'manager'], createdAt: '2024-07-05T09:00:00Z' },
  { key: '6', name: 'Michael Brown', age: 40, address: 'Rome No. 1 Lake Park', tags: ['brilliant', 'engineer'], createdAt: '2024-07-06T12:00:00Z' },
  { key: '7', name: 'Jessica Williams', age: 25, address: 'Tokyo No. 1 Lake Park', tags: ['smart', 'developer'], createdAt: '2024-07-07T13:30:00Z' },
  { key: '8', name: 'William Jones', age: 45, address: 'Beijing No. 1 Lake Park', tags: ['hardworking', 'manager'], createdAt: '2024-07-08T15:45:00Z' },
  { key: '9', name: 'Linda Garcia', age: 30, address: 'Moscow No. 1 Lake Park', tags: ['kind', 'designer'], createdAt: '2024-07-09T08:15:00Z' },
  { key: '10', name: 'David Martinez', age: 35, address: 'Dubai No. 1 Lake Park', tags: ['talented', 'teacher'], createdAt: '2024-07-10T17:00:00Z' },
  { key: '11', name: 'Sophia Brown', age: 29, address: 'Istanbul No. 1 Lake Park', tags: ['enthusiastic', 'developer'], createdAt: '2024-07-11T11:00:00Z' },
  { key: '12', name: 'Daniel Wilson', age: 50, address: 'Amsterdam No. 1 Lake Park', tags: ['experienced', 'manager'], createdAt: '2024-07-12T14:30:00Z' },
  { key: '13', name: 'Olivia Martinez', age: 27, address: 'Bangkok No. 1 Lake Park', tags: ['cheerful', 'teacher'], createdAt: '2024-07-13T10:15:00Z' },
  { key: '14', name: 'James Anderson', age: 33, address: 'Toronto No. 1 Lake Park', tags: ['focused', 'developer'], createdAt: '2024-07-14T13:45:00Z' },
  { key: '15', name: 'Isabella Thomas', age: 38, address: 'Barcelona No. 1 Lake Park', tags: ['motivated', 'designer'], createdAt: '2024-07-15T12:45:00Z' },
  { key: '16', name: 'Matthew Jackson', age: 48, address: 'Mumbai No. 1 Lake Park', tags: ['knowledgeable', 'engineer'], createdAt: '2024-07-16T15:15:00Z' },
  { key: '17', name: 'Ava White', age: 22, address: 'Seoul No. 1 Lake Park', tags: ['innovative', 'developer'], createdAt: '2024-07-17T16:30:00Z' },
  { key: '18', name: 'Joshua Harris', age: 41, address: 'Mexico City No. 1 Lake Park', tags: ['dedicated', 'manager'], createdAt: '2024-07-18T09:45:00Z' },
  { key: '19', name: 'Mia Clark', age: 31, address: 'Buenos Aires No. 1 Lake Park', tags: ['creative', 'teacher'], createdAt: '2024-07-19T08:30:00Z' },
  { key: '20', name: 'Alexander Lewis', age: 39, address: 'Cape Town No. 1 Lake Park', tags: ['reliable', 'designer'], createdAt: '2024-07-20T11:15:00Z' }
];

const orders = [
  { key: '1', orderNumber: 'ORD001', client: 'John Brown', total: 100, status: 'Completed', createdAt: '2024-07-01T10:00:00Z' },
  { key: '2', orderNumber: 'ORD002', client: 'Jim Green', total: 150, status: 'Processing', createdAt: '2024-07-02T11:30:00Z' },
  { key: '3', orderNumber: 'ORD003', client: 'Joe Black', total: 200, status: 'Completed', createdAt: '2024-07-03T14:15:00Z' },
  { key: '4', orderNumber: 'ORD004', client: 'Anna Smith', total: 250, status: 'Cancelled', createdAt: '2024-07-04T16:45:00Z' },
  { key: '5', orderNumber: 'ORD005', client: 'Emily Johnson', total: 300, status: 'Processing', createdAt: '2024-07-05T09:00:00Z' },
  { key: '6', orderNumber: 'ORD006', client: 'Michael Brown', total: 350, status: 'Completed', createdAt: '2024-07-06T12:00:00Z' },
  { key: '7', orderNumber: 'ORD007', client: 'Jessica Williams', total: 400, status: 'Processing', createdAt: '2024-07-07T13:30:00Z' },
  { key: '8', orderNumber: 'ORD008', client: 'William Jones', total: 450, status: 'Cancelled', createdAt: '2024-07-08T15:45:00Z' },
  { key: '9', orderNumber: 'ORD009', client: 'Linda Garcia', total: 500, status: 'Completed', createdAt: '2024-07-09T08:15:00Z' },
  { key: '10', orderNumber: 'ORD010', client: 'David Martinez', total: 550, status: 'Processing', createdAt: '2024-07-10T17:00:00Z' },
  { key: '11', orderNumber: 'ORD011', client: 'Sophia Brown', total: 600, status: 'Completed', createdAt: '2024-07-11T11:00:00Z' },
  { key: '12', orderNumber: 'ORD012', client: 'Daniel Wilson', total: 650, status: 'Cancelled', createdAt: '2024-07-12T14:30:00Z' },
  { key: '13', orderNumber: 'ORD013', client: 'Olivia Martinez', total: 700, status: 'Processing', createdAt: '2024-07-13T10:15:00Z' },
  { key: '14', orderNumber: 'ORD014', client: 'James Anderson', total: 750, status: 'Completed', createdAt: '2024-07-14T13:45:00Z' },
  { key: '15', orderNumber: 'ORD015', client: 'Isabella Thomas', total: 800, status: 'Cancelled', createdAt: '2024-07-15T12:45:00Z' },
  { key: '16', orderNumber: 'ORD016', client: 'Matthew Jackson', total: 850, status: 'Processing', createdAt: '2024-07-16T15:15:00Z' },
  { key: '17', orderNumber: 'ORD017', client: 'Ava White', total: 900, status: 'Completed', createdAt: '2024-07-17T16:30:00Z' },
  { key: '18', orderNumber: 'ORD018', client: 'Joshua Harris', total: 950, status: 'Processing', createdAt: '2024-07-18T09:45:00Z' },
  { key: '19', orderNumber: 'ORD019', client: 'Mia Clark', total: 1000, status: 'Cancelled', createdAt: '2024-07-19T08:30:00Z' },
  { key: '20', orderNumber: 'ORD020', client: 'Alexander Lewis', total: 1050, status: 'Completed', createdAt: '2024-07-20T11:15:00Z' }
];

// Новый маршрут для получения данных заказов
router.get('/getOrders', (req, res) => {
  res.json(orders);
});

// Новый маршрут для получения данных клиентов
router.get('/getClients', (req, res) => {
  res.json(clients);
});

// Новый маршрут для удаления заказа
router.delete('/deleteOrder/:key', (req, res) => {
  const { key } = req.params;
  const index = orders.findIndex(order => order.key === key);
  if (index !== -1) {
    orders.splice(index, 1);
    res.status(200).json({ message: 'Order deleted successfully' });
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
});

// Новый маршрут для изменения заказа
router.put('/updateOrder/:key', (req, res) => {
  const { key } = req.params;
  const { orderNumber, client, total, status, createdAt } = req.body;
  const index = orders.findIndex(order => order.key === key);
  if (index !== -1) {
    orders[index] = { key, orderNumber, client, total, status, createdAt };
    res.status(200).json({ message: 'Order updated successfully' });
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
});

// Новый маршрут для добавления заказа
router.post('/addOrder', (req, res) => {
  const { orderNumber, client, total, status, createdAt } = req.body;
  const key = (orders.length + 1).toString();
  orders.push({ key, orderNumber, client, total, status, createdAt });
  res.status(201).json({ message: 'Order added successfully' });
});

// Новый маршрут для удаления клиента
router.delete('/deleteClient/:key', (req, res) => {
  const { key } = req.params;
  const index = clients.findIndex(client => client.key === key);
  if (index !== -1) {
    clients.splice(index, 1);
    res.status(200).json({ message: 'Client deleted successfully' });
  } else {
    res.status(404).json({ message: 'Client not found' });
  }
});

// Новый маршрут для изменения клиента
router.put('/updateClient/:key', (req, res) => {
  const { key } = req.params;
  const { name, age, address, tags, createdAt } = req.body;
  const index = clients.findIndex(client => client.key === key);
  if (index !== -1) {
    clients[index] = { key, name, age, address, tags, createdAt };
    res.status(200).json({ message: 'Client updated successfully' });
  } else {
    res.status(404).json({ message: 'Client not found' });
  }
});

// Новый маршрут для добавления клиента
router.post('/addClient', (req, res) => {
  const { name, age, address } = req.body;
  const tags = generateRandomTags();
  const createdAt = new Date().toISOString();
  const key = (clients.length + 1).toString();
  clients.push({ key, name, age, address, tags, createdAt });
  res.status(201).json({ message: 'Client added successfully' });
});

module.exports = router;
