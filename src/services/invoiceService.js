import httpRequest from '~/utils/httpRequest';

const createInvoice = async (data) => {
    return await httpRequest.post('/invoices', data);
};

export { createInvoice };
