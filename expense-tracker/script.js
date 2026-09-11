const transactions = [
  { id: 1, category: '餐饮', amount: 45.5, note: '午餐' },
  { id: 2, category: '交通', amount: 12,   note: '地铁' },
  { id: 3, category: '购物', amount: 299,  note: '衣服' },
  { id: 4, category: '餐饮', amount: -20,  note: '非法负数' },
  { id: 5, category: '娱乐', amount: 150,  note: '电影' },
  { id: 6, category: '交通', amount: 'abc',note: '非法字符串' },
  { id: 7, category: '餐饮', amount: 88,   note: '聚餐' }
];

const cleanTransactions = (list) => 
  list.filter(t => typeof t.amount === 'number' && t.amount > 0);

const calculateTotal = (list) => 
  list.reduce((sum, t) => sum + t.amount, 0);

const getUniqueCategories = (list) => 
  [...new Set(list.map(t => t.category))];

const validData = cleanTransactions(transactions);
console.log('清洗后数据：', validData);
console.log('总支出：', calculateTotal(validData).toFixed(2));
console.log('消费类别：', getUniqueCategories(validData));