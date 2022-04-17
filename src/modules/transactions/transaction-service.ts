import AccountService from '../account/account-service';
import CreateTransactionDto from './db/dtos/create-transaction.dto';
import { iTransaction, Transaction } from './db/models/Transaction';
class TransactionService {
  private readonly accountService = new AccountService()

  async create(transactionDto: CreateTransactionDto): Promise<iTransaction> {
    const hasAccountUpdated = await this.accountService.updateBalance(
      transactionDto.account,
      transactionDto.value,
      transactionDto.type
    )

    if (!hasAccountUpdated) throw new Error('Account not updated!');

    const transactionCreated = await Transaction.create(transactionDto)
    console.log('LOG TRANSACTION CREATED: ', transactionCreated)
    return transactionCreated
  }

  async search(page = '1', limit = '10', query = ''): Promise<iTransaction[]> {
    const limitParsed = Number(limit)
    const pageParsed = Number(page)
    const result = await Transaction.find({
      name: { $regex: query, $options: 'i' }
    })
      .populate({
        path: 'account',
        populate: ['institution']
      })
      .populate('category')
      .skip((pageParsed - 1) * limitParsed)
      .limit(limitParsed)

    return result
  }
}

export default TransactionService
