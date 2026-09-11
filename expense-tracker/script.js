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

const filterByCategory = (list, category) => 
  list.filter(t => t.category === category);

const findMaxExpense = (list) => {
  if (list.length === 0) return null;
  return list.reduce((max, t) => t.amount > max.amount ? t : max, list[0]);
};

const generateReport = (list) => {
  const valid = cleanTransactions(list);
  if (valid.length === 0) {
    return '没有有效的消费记录';
  }
  const total = calculateTotal(valid);
  const max = findMaxExpense(valid);
  const categories = getUniqueCategories(valid).join('、');
  return `共记录${valid.length}笔消费，总支出${total.toFixed(2)}元。
最大单笔支出：${max.amount}元（${max.category} - ${max.note}）。
涉及类别：${categories}`;
};

try {
  console.log('清洗后数据：', cleanTransactions(transactions));
  console.log('总支出：', calculateTotal(cleanTransactions(transactions)).toFixed(2));
  console.log('消费类别：', getUniqueCategories(cleanTransactions(transactions)));
  console.log('餐饮类明细：', filterByCategory(cleanTransactions(transactions), '餐饮'));
  console.log('\n--- 最终报告 ---');
  console.log(generateReport(transactions));
  
  console.log('\n--- 空数据测试 ---');
  console.log(generateReport([]));
} catch (err) {
  console.error('程序运行出错：', err.message);
}ories(validData));