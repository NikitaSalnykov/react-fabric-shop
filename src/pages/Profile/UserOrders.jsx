import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../Redux/orders/ordersSelectors';
import { getUser } from '../../Redux/auth/auth-selectors';
import { useEffect } from 'react';
import { fetchOrders } from '../../Redux/orders/ordersOperation';
import { formattedDate } from '../../helpers/formattedDate';

export const UserOrders = () => {
  const dispatch = useDispatch();

  const orders = useSelector(getOrders) || {};
  const user = useSelector(getUser) || {};

  console.log(orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const userOreders = (orders) => {
    return orders.filter((el) => el.order.user?._id === user._id);
  };

  return (
    <div className="py-4">
      <h3 className="mb-4 text-md font-medium text-gray-900 title-font">
        Мои заказы:
      </h3>
      <div>
        {orders && orders.length > 0 ? (
          userOreders(orders).map((el, index) => (
            <div key={el._id}>
              <p>{index + 1}</p>
              <div>
                <p>
                  Номер заказа: <strong>{el.order.orderNumber}</strong>
                </p>
                <p>
                  Дата заказа: <strong>{formattedDate(el.updatedAt)}</strong>
                </p>
                <p>
                  Указанная доставка:{' '}
                  <strong>
                    {el.order.delivery ? el.order.delivery : 'Не указано'}
                  </strong>
                </p>
                <p>
                  Общая стоимость:{' '}
                  <strong>{el.order.total ? el.order.total : '-'}</strong>
                </p>
              </div>
            </div>
          ))
        ) : (
          <div>no</div>
        )}
      </div>
    </div>
  );
};
