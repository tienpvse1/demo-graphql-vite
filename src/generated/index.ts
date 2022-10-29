import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;

export const DeleteCustomer1Document = gql`
    mutation DeleteCustomer1($where: laundry_service_customers_bool_exp!) {
  delete_laundry_service_customers(where: $where) {
    affected_rows
  }
}
    `;
export type DeleteCustomer1MutationFn = Apollo.MutationFunction<DeleteCustomer1Mutation, DeleteCustomer1MutationVariables>;

/**
 * __useDeleteCustomer1Mutation__
 *
 * To run a mutation, you first call `useDeleteCustomer1Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCustomer1Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCustomer1Mutation, { data, loading, error }] = useDeleteCustomer1Mutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteCustomer1Mutation(baseOptions?: Apollo.MutationHookOptions<DeleteCustomer1Mutation, DeleteCustomer1MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCustomer1Mutation, DeleteCustomer1MutationVariables>(DeleteCustomer1Document, options);
      }
export type DeleteCustomer1MutationHookResult = ReturnType<typeof useDeleteCustomer1Mutation>;
export type DeleteCustomer1MutationResult = Apollo.MutationResult<DeleteCustomer1Mutation>;
export type DeleteCustomer1MutationOptions = Apollo.BaseMutationOptions<DeleteCustomer1Mutation, DeleteCustomer1MutationVariables>;
export const CreateCustomerDocument = gql`
    mutation CreateCustomer($object: laundry_service_customers_insert_input!) {
  insert_laundry_service_customers_one(object: $object) {
    phone
    email
  }
}
    `;
export type CreateCustomerMutationFn = Apollo.MutationFunction<CreateCustomerMutation, CreateCustomerMutationVariables>;

/**
 * __useCreateCustomerMutation__
 *
 * To run a mutation, you first call `useCreateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCustomerMutation, { data, loading, error }] = useCreateCustomerMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useCreateCustomerMutation(baseOptions?: Apollo.MutationHookOptions<CreateCustomerMutation, CreateCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCustomerMutation, CreateCustomerMutationVariables>(CreateCustomerDocument, options);
      }
export type CreateCustomerMutationHookResult = ReturnType<typeof useCreateCustomerMutation>;
export type CreateCustomerMutationResult = Apollo.MutationResult<CreateCustomerMutation>;
export type CreateCustomerMutationOptions = Apollo.BaseMutationOptions<CreateCustomerMutation, CreateCustomerMutationVariables>;
export const UpdateCustomerDocument = gql`
    mutation UpdateCustomer($object: laundry_service_customers_set_input!, $where: laundry_service_customers_bool_exp!) {
  update_laundry_service_customers(_set: $object, where: $where) {
    affected_rows
  }
}
    `;
export type UpdateCustomerMutationFn = Apollo.MutationFunction<UpdateCustomerMutation, UpdateCustomerMutationVariables>;

/**
 * __useUpdateCustomerMutation__
 *
 * To run a mutation, you first call `useUpdateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCustomerMutation, { data, loading, error }] = useUpdateCustomerMutation({
 *   variables: {
 *      object: // value for 'object'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateCustomerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCustomerMutation, UpdateCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCustomerMutation, UpdateCustomerMutationVariables>(UpdateCustomerDocument, options);
      }
export type UpdateCustomerMutationHookResult = ReturnType<typeof useUpdateCustomerMutation>;
export type UpdateCustomerMutationResult = Apollo.MutationResult<UpdateCustomerMutation>;
export type UpdateCustomerMutationOptions = Apollo.BaseMutationOptions<UpdateCustomerMutation, UpdateCustomerMutationVariables>;
export const CustomerDocument = gql`
    query Customer {
  laundry_service_customers {
    email
    fullname
    phone
    fullname
    phone
    customer_id
  }
}
    `;

/**
 * __useCustomerQuery__
 *
 * To run a query within a React component, call `useCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomerQuery({
 *   variables: {
 *   },
 * });
 */
export function useCustomerQuery(baseOptions?: Apollo.QueryHookOptions<CustomerQuery, CustomerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CustomerQuery, CustomerQueryVariables>(CustomerDocument, options);
      }
export function useCustomerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CustomerQuery, CustomerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CustomerQuery, CustomerQueryVariables>(CustomerDocument, options);
        }
export type CustomerQueryHookResult = ReturnType<typeof useCustomerQuery>;
export type CustomerLazyQueryHookResult = ReturnType<typeof useCustomerLazyQuery>;
export type CustomerQueryResult = Apollo.QueryResult<CustomerQuery, CustomerQueryVariables>;
export const FindCustomerDocument = gql`
    query FindCustomer($email: String!) {
  laundry_service_customers(where: {email: {_ilike: $email}}) {
    email
  }
}
    `;

/**
 * __useFindCustomerQuery__
 *
 * To run a query within a React component, call `useFindCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCustomerQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useFindCustomerQuery(baseOptions: Apollo.QueryHookOptions<FindCustomerQuery, FindCustomerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCustomerQuery, FindCustomerQueryVariables>(FindCustomerDocument, options);
      }
export function useFindCustomerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCustomerQuery, FindCustomerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCustomerQuery, FindCustomerQueryVariables>(FindCustomerDocument, options);
        }
export type FindCustomerQueryHookResult = ReturnType<typeof useFindCustomerQuery>;
export type FindCustomerLazyQueryHookResult = ReturnType<typeof useFindCustomerLazyQuery>;
export type FindCustomerQueryResult = Apollo.QueryResult<FindCustomerQuery, FindCustomerQueryVariables>;
export const OrderDocument = gql`
    query Order {
  laundry_service_orders {
    order_id
    staff_id
    manager_id
  }
}
    `;

/**
 * __useOrderQuery__
 *
 * To run a query within a React component, call `useOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderQuery({
 *   variables: {
 *   },
 * });
 */
export function useOrderQuery(baseOptions?: Apollo.QueryHookOptions<OrderQuery, OrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
      }
export function useOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrderQuery, OrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
        }
export type OrderQueryHookResult = ReturnType<typeof useOrderQuery>;
export type OrderLazyQueryHookResult = ReturnType<typeof useOrderLazyQuery>;
export type OrderQueryResult = Apollo.QueryResult<OrderQuery, OrderQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  float8: any;
  timestamp: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

/** columns and relationships of "laundry_service.customers" */
export type Laundry_Service_Customers = {
  __typename?: 'laundry_service_customers';
  /** An array relationship */
  CustomerOrder: Array<Laundry_Service_Orders>;
  /** An aggregate relationship */
  CustomerOrder_aggregate: Laundry_Service_Orders_Aggregate;
  active: Scalars['Boolean'];
  address: Scalars['String'];
  customer_id: Scalars['Int'];
  email: Scalars['String'];
  fullname: Scalars['String'];
  phone: Scalars['String'];
};


/** columns and relationships of "laundry_service.customers" */
export type Laundry_Service_CustomersCustomerOrderArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orders_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
};


/** columns and relationships of "laundry_service.customers" */
export type Laundry_Service_CustomersCustomerOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orders_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
};

/** aggregated selection of "laundry_service.customers" */
export type Laundry_Service_Customers_Aggregate = {
  __typename?: 'laundry_service_customers_aggregate';
  aggregate?: Maybe<Laundry_Service_Customers_Aggregate_Fields>;
  nodes: Array<Laundry_Service_Customers>;
};

/** aggregate fields of "laundry_service.customers" */
export type Laundry_Service_Customers_Aggregate_Fields = {
  __typename?: 'laundry_service_customers_aggregate_fields';
  avg?: Maybe<Laundry_Service_Customers_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Laundry_Service_Customers_Max_Fields>;
  min?: Maybe<Laundry_Service_Customers_Min_Fields>;
  stddev?: Maybe<Laundry_Service_Customers_Stddev_Fields>;
  stddev_pop?: Maybe<Laundry_Service_Customers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Laundry_Service_Customers_Stddev_Samp_Fields>;
  sum?: Maybe<Laundry_Service_Customers_Sum_Fields>;
  var_pop?: Maybe<Laundry_Service_Customers_Var_Pop_Fields>;
  var_samp?: Maybe<Laundry_Service_Customers_Var_Samp_Fields>;
  variance?: Maybe<Laundry_Service_Customers_Variance_Fields>;
};


/** aggregate fields of "laundry_service.customers" */
export type Laundry_Service_Customers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Laundry_Service_Customers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "laundry_service.customers" */
export type Laundry_Service_Customers_Aggregate_Order_By = {
  avg?: InputMaybe<Laundry_Service_Customers_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Laundry_Service_Customers_Max_Order_By>;
  min?: InputMaybe<Laundry_Service_Customers_Min_Order_By>;
  stddev?: InputMaybe<Laundry_Service_Customers_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Laundry_Service_Customers_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Laundry_Service_Customers_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Laundry_Service_Customers_Sum_Order_By>;
  var_pop?: InputMaybe<Laundry_Service_Customers_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Laundry_Service_Customers_Var_Samp_Order_By>;
  variance?: InputMaybe<Laundry_Service_Customers_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "laundry_service.customers" */
export type Laundry_Service_Customers_Arr_Rel_Insert_Input = {
  data: Array<Laundry_Service_Customers_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Laundry_Service_Customers_On_Conflict>;
};

/** aggregate avg on columns */
export type Laundry_Service_Customers_Avg_Fields = {
  __typename?: 'laundry_service_customers_avg_fields';
  customer_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "laundry_service.customers" */
export type Laundry_Service_Customers_Avg_Order_By = {
  customer_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "laundry_service.customers". All fields are combined with a logical 'AND'. */
export type Laundry_Service_Customers_Bool_Exp = {
  CustomerOrder?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
  _and?: InputMaybe<Array<Laundry_Service_Customers_Bool_Exp>>;
  _not?: InputMaybe<Laundry_Service_Customers_Bool_Exp>;
  _or?: InputMaybe<Array<Laundry_Service_Customers_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  address?: InputMaybe<String_Comparison_Exp>;
  customer_id?: InputMaybe<Int_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  fullname?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "laundry_service.customers" */
export enum Laundry_Service_Customers_Constraint {
  /** unique or primary key constraint on columns "customer_id" */
  CustomersPkey = 'customers_pkey'
}

/** input type for incrementing numeric columns in table "laundry_service.customers" */
export type Laundry_Service_Customers_Inc_Input = {
  customer_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "laundry_service.customers" */
export type Laundry_Service_Customers_Insert_Input = {
  CustomerOrder?: InputMaybe<Laundry_Service_Orders_Arr_Rel_Insert_Input>;
  active?: InputMaybe<Scalars['Boolean']>;
  address?: InputMaybe<Scalars['String']>;
  customer_id?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Laundry_Service_Customers_Max_Fields = {
  __typename?: 'laundry_service_customers_max_fields';
  address?: Maybe<Scalars['String']>;
  customer_id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "laundry_service.customers" */
export type Laundry_Service_Customers_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  fullname?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Laundry_Service_Customers_Min_Fields = {
  __typename?: 'laundry_service_customers_min_fields';
  address?: Maybe<Scalars['String']>;
  customer_id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "laundry_service.customers" */
export type Laundry_Service_Customers_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  fullname?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "laundry_service.customers" */
export type Laundry_Service_Customers_Mutation_Response = {
  __typename?: 'laundry_service_customers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Laundry_Service_Customers>;
};

/** on_conflict condition type for table "laundry_service.customers" */
export type Laundry_Service_Customers_On_Conflict = {
  constraint: Laundry_Service_Customers_Constraint;
  update_columns?: Array<Laundry_Service_Customers_Update_Column>;
  where?: InputMaybe<Laundry_Service_Customers_Bool_Exp>;
};

/** Ordering options when selecting data from "laundry_service.customers". */
export type Laundry_Service_Customers_Order_By = {
  CustomerOrder_aggregate?: InputMaybe<Laundry_Service_Orders_Aggregate_Order_By>;
  active?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  fullname?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
};

/** primary key columns input for table: laundry_service.customers */
export type Laundry_Service_Customers_Pk_Columns_Input = {
  customer_id: Scalars['Int'];
};

/** select columns of table "laundry_service.customers" */
export enum Laundry_Service_Customers_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Address = 'address',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Email = 'email',
  /** column name */
  Fullname = 'fullname',
  /** column name */
  Phone = 'phone'
}

/** input type for updating data in table "laundry_service.customers" */
export type Laundry_Service_Customers_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  address?: InputMaybe<Scalars['String']>;
  customer_id?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Laundry_Service_Customers_Stddev_Fields = {
  __typename?: 'laundry_service_customers_stddev_fields';
  customer_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "laundry_service.customers" */
export type Laundry_Service_Customers_Stddev_Order_By = {
  customer_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Laundry_Service_Customers_Stddev_Pop_Fields = {
  __typename?: 'laundry_service_customers_stddev_pop_fields';
  customer_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "laundry_service.customers" */
export type Laundry_Service_Customers_Stddev_Pop_Order_By = {
  customer_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Laundry_Service_Customers_Stddev_Samp_Fields = {
  __typename?: 'laundry_service_customers_stddev_samp_fields';
  customer_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "laundry_service.customers" */
export type Laundry_Service_Customers_Stddev_Samp_Order_By = {
  customer_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "laundry_service_customers" */
export type Laundry_Service_Customers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Laundry_Service_Customers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Laundry_Service_Customers_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  address?: InputMaybe<Scalars['String']>;
  customer_id?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Laundry_Service_Customers_Sum_Fields = {
  __typename?: 'laundry_service_customers_sum_fields';
  customer_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "laundry_service.customers" */
export type Laundry_Service_Customers_Sum_Order_By = {
  customer_id?: InputMaybe<Order_By>;
};

/** update columns of table "laundry_service.customers" */
export enum Laundry_Service_Customers_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Address = 'address',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Email = 'email',
  /** column name */
  Fullname = 'fullname',
  /** column name */
  Phone = 'phone'
}

export type Laundry_Service_Customers_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Laundry_Service_Customers_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Laundry_Service_Customers_Set_Input>;
  where: Laundry_Service_Customers_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Laundry_Service_Customers_Var_Pop_Fields = {
  __typename?: 'laundry_service_customers_var_pop_fields';
  customer_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "laundry_service.customers" */
export type Laundry_Service_Customers_Var_Pop_Order_By = {
  customer_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Laundry_Service_Customers_Var_Samp_Fields = {
  __typename?: 'laundry_service_customers_var_samp_fields';
  customer_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "laundry_service.customers" */
export type Laundry_Service_Customers_Var_Samp_Order_By = {
  customer_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Laundry_Service_Customers_Variance_Fields = {
  __typename?: 'laundry_service_customers_variance_fields';
  customer_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "laundry_service.customers" */
export type Laundry_Service_Customers_Variance_Order_By = {
  customer_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "laundry_service.equipment" */
export type Laundry_Service_Equipment = {
  __typename?: 'laundry_service_equipment';
  /** An array relationship */
  EquipmentOrderDetail: Array<Laundry_Service_Orderdetail>;
  /** An aggregate relationship */
  EquipmentOrderDetail_aggregate: Laundry_Service_Orderdetail_Aggregate;
  equipment_description: Scalars['String'];
  equipment_id: Scalars['Int'];
  equipment_name: Scalars['String'];
  equipment_price: Scalars['String'];
};


/** columns and relationships of "laundry_service.equipment" */
export type Laundry_Service_EquipmentEquipmentOrderDetailArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orderdetail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orderdetail_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orderdetail_Bool_Exp>;
};


/** columns and relationships of "laundry_service.equipment" */
export type Laundry_Service_EquipmentEquipmentOrderDetail_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orderdetail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orderdetail_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orderdetail_Bool_Exp>;
};

/** aggregated selection of "laundry_service.equipment" */
export type Laundry_Service_Equipment_Aggregate = {
  __typename?: 'laundry_service_equipment_aggregate';
  aggregate?: Maybe<Laundry_Service_Equipment_Aggregate_Fields>;
  nodes: Array<Laundry_Service_Equipment>;
};

/** aggregate fields of "laundry_service.equipment" */
export type Laundry_Service_Equipment_Aggregate_Fields = {
  __typename?: 'laundry_service_equipment_aggregate_fields';
  avg?: Maybe<Laundry_Service_Equipment_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Laundry_Service_Equipment_Max_Fields>;
  min?: Maybe<Laundry_Service_Equipment_Min_Fields>;
  stddev?: Maybe<Laundry_Service_Equipment_Stddev_Fields>;
  stddev_pop?: Maybe<Laundry_Service_Equipment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Laundry_Service_Equipment_Stddev_Samp_Fields>;
  sum?: Maybe<Laundry_Service_Equipment_Sum_Fields>;
  var_pop?: Maybe<Laundry_Service_Equipment_Var_Pop_Fields>;
  var_samp?: Maybe<Laundry_Service_Equipment_Var_Samp_Fields>;
  variance?: Maybe<Laundry_Service_Equipment_Variance_Fields>;
};


/** aggregate fields of "laundry_service.equipment" */
export type Laundry_Service_Equipment_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Laundry_Service_Equipment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "laundry_service.equipment" */
export type Laundry_Service_Equipment_Aggregate_Order_By = {
  avg?: InputMaybe<Laundry_Service_Equipment_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Laundry_Service_Equipment_Max_Order_By>;
  min?: InputMaybe<Laundry_Service_Equipment_Min_Order_By>;
  stddev?: InputMaybe<Laundry_Service_Equipment_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Laundry_Service_Equipment_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Laundry_Service_Equipment_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Laundry_Service_Equipment_Sum_Order_By>;
  var_pop?: InputMaybe<Laundry_Service_Equipment_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Laundry_Service_Equipment_Var_Samp_Order_By>;
  variance?: InputMaybe<Laundry_Service_Equipment_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "laundry_service.equipment" */
export type Laundry_Service_Equipment_Arr_Rel_Insert_Input = {
  data: Array<Laundry_Service_Equipment_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Laundry_Service_Equipment_On_Conflict>;
};

/** aggregate avg on columns */
export type Laundry_Service_Equipment_Avg_Fields = {
  __typename?: 'laundry_service_equipment_avg_fields';
  equipment_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "laundry_service.equipment" */
export type Laundry_Service_Equipment_Avg_Order_By = {
  equipment_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "laundry_service.equipment". All fields are combined with a logical 'AND'. */
export type Laundry_Service_Equipment_Bool_Exp = {
  EquipmentOrderDetail?: InputMaybe<Laundry_Service_Orderdetail_Bool_Exp>;
  _and?: InputMaybe<Array<Laundry_Service_Equipment_Bool_Exp>>;
  _not?: InputMaybe<Laundry_Service_Equipment_Bool_Exp>;
  _or?: InputMaybe<Array<Laundry_Service_Equipment_Bool_Exp>>;
  equipment_description?: InputMaybe<String_Comparison_Exp>;
  equipment_id?: InputMaybe<Int_Comparison_Exp>;
  equipment_name?: InputMaybe<String_Comparison_Exp>;
  equipment_price?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "laundry_service.equipment" */
export enum Laundry_Service_Equipment_Constraint {
  /** unique or primary key constraint on columns "equipment_id" */
  EquipmentPkey = 'equipment_pkey'
}

/** input type for incrementing numeric columns in table "laundry_service.equipment" */
export type Laundry_Service_Equipment_Inc_Input = {
  equipment_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "laundry_service.equipment" */
export type Laundry_Service_Equipment_Insert_Input = {
  EquipmentOrderDetail?: InputMaybe<Laundry_Service_Orderdetail_Arr_Rel_Insert_Input>;
  equipment_description?: InputMaybe<Scalars['String']>;
  equipment_id?: InputMaybe<Scalars['Int']>;
  equipment_name?: InputMaybe<Scalars['String']>;
  equipment_price?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Laundry_Service_Equipment_Max_Fields = {
  __typename?: 'laundry_service_equipment_max_fields';
  equipment_description?: Maybe<Scalars['String']>;
  equipment_id?: Maybe<Scalars['Int']>;
  equipment_name?: Maybe<Scalars['String']>;
  equipment_price?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "laundry_service.equipment" */
export type Laundry_Service_Equipment_Max_Order_By = {
  equipment_description?: InputMaybe<Order_By>;
  equipment_id?: InputMaybe<Order_By>;
  equipment_name?: InputMaybe<Order_By>;
  equipment_price?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Laundry_Service_Equipment_Min_Fields = {
  __typename?: 'laundry_service_equipment_min_fields';
  equipment_description?: Maybe<Scalars['String']>;
  equipment_id?: Maybe<Scalars['Int']>;
  equipment_name?: Maybe<Scalars['String']>;
  equipment_price?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "laundry_service.equipment" */
export type Laundry_Service_Equipment_Min_Order_By = {
  equipment_description?: InputMaybe<Order_By>;
  equipment_id?: InputMaybe<Order_By>;
  equipment_name?: InputMaybe<Order_By>;
  equipment_price?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "laundry_service.equipment" */
export type Laundry_Service_Equipment_Mutation_Response = {
  __typename?: 'laundry_service_equipment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Laundry_Service_Equipment>;
};

/** on_conflict condition type for table "laundry_service.equipment" */
export type Laundry_Service_Equipment_On_Conflict = {
  constraint: Laundry_Service_Equipment_Constraint;
  update_columns?: Array<Laundry_Service_Equipment_Update_Column>;
  where?: InputMaybe<Laundry_Service_Equipment_Bool_Exp>;
};

/** Ordering options when selecting data from "laundry_service.equipment". */
export type Laundry_Service_Equipment_Order_By = {
  EquipmentOrderDetail_aggregate?: InputMaybe<Laundry_Service_Orderdetail_Aggregate_Order_By>;
  equipment_description?: InputMaybe<Order_By>;
  equipment_id?: InputMaybe<Order_By>;
  equipment_name?: InputMaybe<Order_By>;
  equipment_price?: InputMaybe<Order_By>;
};

/** primary key columns input for table: laundry_service.equipment */
export type Laundry_Service_Equipment_Pk_Columns_Input = {
  equipment_id: Scalars['Int'];
};

/** select columns of table "laundry_service.equipment" */
export enum Laundry_Service_Equipment_Select_Column {
  /** column name */
  EquipmentDescription = 'equipment_description',
  /** column name */
  EquipmentId = 'equipment_id',
  /** column name */
  EquipmentName = 'equipment_name',
  /** column name */
  EquipmentPrice = 'equipment_price'
}

/** input type for updating data in table "laundry_service.equipment" */
export type Laundry_Service_Equipment_Set_Input = {
  equipment_description?: InputMaybe<Scalars['String']>;
  equipment_id?: InputMaybe<Scalars['Int']>;
  equipment_name?: InputMaybe<Scalars['String']>;
  equipment_price?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Laundry_Service_Equipment_Stddev_Fields = {
  __typename?: 'laundry_service_equipment_stddev_fields';
  equipment_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "laundry_service.equipment" */
export type Laundry_Service_Equipment_Stddev_Order_By = {
  equipment_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Laundry_Service_Equipment_Stddev_Pop_Fields = {
  __typename?: 'laundry_service_equipment_stddev_pop_fields';
  equipment_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "laundry_service.equipment" */
export type Laundry_Service_Equipment_Stddev_Pop_Order_By = {
  equipment_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Laundry_Service_Equipment_Stddev_Samp_Fields = {
  __typename?: 'laundry_service_equipment_stddev_samp_fields';
  equipment_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "laundry_service.equipment" */
export type Laundry_Service_Equipment_Stddev_Samp_Order_By = {
  equipment_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "laundry_service_equipment" */
export type Laundry_Service_Equipment_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Laundry_Service_Equipment_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Laundry_Service_Equipment_Stream_Cursor_Value_Input = {
  equipment_description?: InputMaybe<Scalars['String']>;
  equipment_id?: InputMaybe<Scalars['Int']>;
  equipment_name?: InputMaybe<Scalars['String']>;
  equipment_price?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Laundry_Service_Equipment_Sum_Fields = {
  __typename?: 'laundry_service_equipment_sum_fields';
  equipment_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "laundry_service.equipment" */
export type Laundry_Service_Equipment_Sum_Order_By = {
  equipment_id?: InputMaybe<Order_By>;
};

/** update columns of table "laundry_service.equipment" */
export enum Laundry_Service_Equipment_Update_Column {
  /** column name */
  EquipmentDescription = 'equipment_description',
  /** column name */
  EquipmentId = 'equipment_id',
  /** column name */
  EquipmentName = 'equipment_name',
  /** column name */
  EquipmentPrice = 'equipment_price'
}

export type Laundry_Service_Equipment_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Laundry_Service_Equipment_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Laundry_Service_Equipment_Set_Input>;
  where: Laundry_Service_Equipment_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Laundry_Service_Equipment_Var_Pop_Fields = {
  __typename?: 'laundry_service_equipment_var_pop_fields';
  equipment_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "laundry_service.equipment" */
export type Laundry_Service_Equipment_Var_Pop_Order_By = {
  equipment_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Laundry_Service_Equipment_Var_Samp_Fields = {
  __typename?: 'laundry_service_equipment_var_samp_fields';
  equipment_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "laundry_service.equipment" */
export type Laundry_Service_Equipment_Var_Samp_Order_By = {
  equipment_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Laundry_Service_Equipment_Variance_Fields = {
  __typename?: 'laundry_service_equipment_variance_fields';
  equipment_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "laundry_service.equipment" */
export type Laundry_Service_Equipment_Variance_Order_By = {
  equipment_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "laundry_service.feedback" */
export type Laundry_Service_Feedback = {
  __typename?: 'laundry_service_feedback';
  /** An array relationship */
  FeedbackOrder: Array<Laundry_Service_Orders>;
  /** An aggregate relationship */
  FeedbackOrder_aggregate: Laundry_Service_Orders_Aggregate;
  content: Scalars['String'];
  feedback_id: Scalars['Int'];
  rating: Scalars['Int'];
};


/** columns and relationships of "laundry_service.feedback" */
export type Laundry_Service_FeedbackFeedbackOrderArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orders_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
};


/** columns and relationships of "laundry_service.feedback" */
export type Laundry_Service_FeedbackFeedbackOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orders_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
};

/** aggregated selection of "laundry_service.feedback" */
export type Laundry_Service_Feedback_Aggregate = {
  __typename?: 'laundry_service_feedback_aggregate';
  aggregate?: Maybe<Laundry_Service_Feedback_Aggregate_Fields>;
  nodes: Array<Laundry_Service_Feedback>;
};

/** aggregate fields of "laundry_service.feedback" */
export type Laundry_Service_Feedback_Aggregate_Fields = {
  __typename?: 'laundry_service_feedback_aggregate_fields';
  avg?: Maybe<Laundry_Service_Feedback_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Laundry_Service_Feedback_Max_Fields>;
  min?: Maybe<Laundry_Service_Feedback_Min_Fields>;
  stddev?: Maybe<Laundry_Service_Feedback_Stddev_Fields>;
  stddev_pop?: Maybe<Laundry_Service_Feedback_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Laundry_Service_Feedback_Stddev_Samp_Fields>;
  sum?: Maybe<Laundry_Service_Feedback_Sum_Fields>;
  var_pop?: Maybe<Laundry_Service_Feedback_Var_Pop_Fields>;
  var_samp?: Maybe<Laundry_Service_Feedback_Var_Samp_Fields>;
  variance?: Maybe<Laundry_Service_Feedback_Variance_Fields>;
};


/** aggregate fields of "laundry_service.feedback" */
export type Laundry_Service_Feedback_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Laundry_Service_Feedback_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "laundry_service.feedback" */
export type Laundry_Service_Feedback_Aggregate_Order_By = {
  avg?: InputMaybe<Laundry_Service_Feedback_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Laundry_Service_Feedback_Max_Order_By>;
  min?: InputMaybe<Laundry_Service_Feedback_Min_Order_By>;
  stddev?: InputMaybe<Laundry_Service_Feedback_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Laundry_Service_Feedback_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Laundry_Service_Feedback_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Laundry_Service_Feedback_Sum_Order_By>;
  var_pop?: InputMaybe<Laundry_Service_Feedback_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Laundry_Service_Feedback_Var_Samp_Order_By>;
  variance?: InputMaybe<Laundry_Service_Feedback_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "laundry_service.feedback" */
export type Laundry_Service_Feedback_Arr_Rel_Insert_Input = {
  data: Array<Laundry_Service_Feedback_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Laundry_Service_Feedback_On_Conflict>;
};

/** aggregate avg on columns */
export type Laundry_Service_Feedback_Avg_Fields = {
  __typename?: 'laundry_service_feedback_avg_fields';
  feedback_id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "laundry_service.feedback" */
export type Laundry_Service_Feedback_Avg_Order_By = {
  feedback_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "laundry_service.feedback". All fields are combined with a logical 'AND'. */
export type Laundry_Service_Feedback_Bool_Exp = {
  FeedbackOrder?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
  _and?: InputMaybe<Array<Laundry_Service_Feedback_Bool_Exp>>;
  _not?: InputMaybe<Laundry_Service_Feedback_Bool_Exp>;
  _or?: InputMaybe<Array<Laundry_Service_Feedback_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  feedback_id?: InputMaybe<Int_Comparison_Exp>;
  rating?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "laundry_service.feedback" */
export enum Laundry_Service_Feedback_Constraint {
  /** unique or primary key constraint on columns "feedback_id" */
  FeedbackPkey = 'feedback_pkey'
}

/** input type for incrementing numeric columns in table "laundry_service.feedback" */
export type Laundry_Service_Feedback_Inc_Input = {
  feedback_id?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "laundry_service.feedback" */
export type Laundry_Service_Feedback_Insert_Input = {
  FeedbackOrder?: InputMaybe<Laundry_Service_Orders_Arr_Rel_Insert_Input>;
  content?: InputMaybe<Scalars['String']>;
  feedback_id?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Laundry_Service_Feedback_Max_Fields = {
  __typename?: 'laundry_service_feedback_max_fields';
  content?: Maybe<Scalars['String']>;
  feedback_id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "laundry_service.feedback" */
export type Laundry_Service_Feedback_Max_Order_By = {
  content?: InputMaybe<Order_By>;
  feedback_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Laundry_Service_Feedback_Min_Fields = {
  __typename?: 'laundry_service_feedback_min_fields';
  content?: Maybe<Scalars['String']>;
  feedback_id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "laundry_service.feedback" */
export type Laundry_Service_Feedback_Min_Order_By = {
  content?: InputMaybe<Order_By>;
  feedback_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "laundry_service.feedback" */
export type Laundry_Service_Feedback_Mutation_Response = {
  __typename?: 'laundry_service_feedback_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Laundry_Service_Feedback>;
};

/** on_conflict condition type for table "laundry_service.feedback" */
export type Laundry_Service_Feedback_On_Conflict = {
  constraint: Laundry_Service_Feedback_Constraint;
  update_columns?: Array<Laundry_Service_Feedback_Update_Column>;
  where?: InputMaybe<Laundry_Service_Feedback_Bool_Exp>;
};

/** Ordering options when selecting data from "laundry_service.feedback". */
export type Laundry_Service_Feedback_Order_By = {
  FeedbackOrder_aggregate?: InputMaybe<Laundry_Service_Orders_Aggregate_Order_By>;
  content?: InputMaybe<Order_By>;
  feedback_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** primary key columns input for table: laundry_service.feedback */
export type Laundry_Service_Feedback_Pk_Columns_Input = {
  feedback_id: Scalars['Int'];
};

/** select columns of table "laundry_service.feedback" */
export enum Laundry_Service_Feedback_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  FeedbackId = 'feedback_id',
  /** column name */
  Rating = 'rating'
}

/** input type for updating data in table "laundry_service.feedback" */
export type Laundry_Service_Feedback_Set_Input = {
  content?: InputMaybe<Scalars['String']>;
  feedback_id?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Laundry_Service_Feedback_Stddev_Fields = {
  __typename?: 'laundry_service_feedback_stddev_fields';
  feedback_id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "laundry_service.feedback" */
export type Laundry_Service_Feedback_Stddev_Order_By = {
  feedback_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Laundry_Service_Feedback_Stddev_Pop_Fields = {
  __typename?: 'laundry_service_feedback_stddev_pop_fields';
  feedback_id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "laundry_service.feedback" */
export type Laundry_Service_Feedback_Stddev_Pop_Order_By = {
  feedback_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Laundry_Service_Feedback_Stddev_Samp_Fields = {
  __typename?: 'laundry_service_feedback_stddev_samp_fields';
  feedback_id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "laundry_service.feedback" */
export type Laundry_Service_Feedback_Stddev_Samp_Order_By = {
  feedback_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "laundry_service_feedback" */
export type Laundry_Service_Feedback_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Laundry_Service_Feedback_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Laundry_Service_Feedback_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['String']>;
  feedback_id?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Laundry_Service_Feedback_Sum_Fields = {
  __typename?: 'laundry_service_feedback_sum_fields';
  feedback_id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "laundry_service.feedback" */
export type Laundry_Service_Feedback_Sum_Order_By = {
  feedback_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** update columns of table "laundry_service.feedback" */
export enum Laundry_Service_Feedback_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  FeedbackId = 'feedback_id',
  /** column name */
  Rating = 'rating'
}

export type Laundry_Service_Feedback_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Laundry_Service_Feedback_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Laundry_Service_Feedback_Set_Input>;
  where: Laundry_Service_Feedback_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Laundry_Service_Feedback_Var_Pop_Fields = {
  __typename?: 'laundry_service_feedback_var_pop_fields';
  feedback_id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "laundry_service.feedback" */
export type Laundry_Service_Feedback_Var_Pop_Order_By = {
  feedback_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Laundry_Service_Feedback_Var_Samp_Fields = {
  __typename?: 'laundry_service_feedback_var_samp_fields';
  feedback_id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "laundry_service.feedback" */
export type Laundry_Service_Feedback_Var_Samp_Order_By = {
  feedback_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Laundry_Service_Feedback_Variance_Fields = {
  __typename?: 'laundry_service_feedback_variance_fields';
  feedback_id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "laundry_service.feedback" */
export type Laundry_Service_Feedback_Variance_Order_By = {
  feedback_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** columns and relationships of "laundry_service.manager" */
export type Laundry_Service_Manager = {
  __typename?: 'laundry_service_manager';
  /** An array relationship */
  ManagerOrder: Array<Laundry_Service_Orders>;
  /** An aggregate relationship */
  ManagerOrder_aggregate: Laundry_Service_Orders_Aggregate;
  /** An array relationship */
  ManagerProcess: Array<Laundry_Service_Process>;
  /** An aggregate relationship */
  ManagerProcess_aggregate: Laundry_Service_Process_Aggregate;
  /** An array relationship */
  ManagerStaff: Array<Laundry_Service_Staff>;
  /** An aggregate relationship */
  ManagerStaff_aggregate: Laundry_Service_Staff_Aggregate;
  /** An array relationship */
  ManagerVendor: Array<Laundry_Service_Vendor>;
  /** An aggregate relationship */
  ManagerVendor_aggregate: Laundry_Service_Vendor_Aggregate;
  /** An array relationship */
  ManagerWSchedule: Array<Laundry_Service_Workschedule>;
  /** An aggregate relationship */
  ManagerWSchedule_aggregate: Laundry_Service_Workschedule_Aggregate;
  email: Scalars['String'];
  fullname: Scalars['String'];
  manager_id: Scalars['Int'];
  password: Scalars['String'];
  phone: Scalars['String'];
  vendor_id: Scalars['Int'];
};


/** columns and relationships of "laundry_service.manager" */
export type Laundry_Service_ManagerManagerOrderArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orders_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
};


/** columns and relationships of "laundry_service.manager" */
export type Laundry_Service_ManagerManagerOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orders_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
};


/** columns and relationships of "laundry_service.manager" */
export type Laundry_Service_ManagerManagerProcessArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Process_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Process_Order_By>>;
  where?: InputMaybe<Laundry_Service_Process_Bool_Exp>;
};


/** columns and relationships of "laundry_service.manager" */
export type Laundry_Service_ManagerManagerProcess_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Process_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Process_Order_By>>;
  where?: InputMaybe<Laundry_Service_Process_Bool_Exp>;
};


/** columns and relationships of "laundry_service.manager" */
export type Laundry_Service_ManagerManagerStaffArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Staff_Order_By>>;
  where?: InputMaybe<Laundry_Service_Staff_Bool_Exp>;
};


/** columns and relationships of "laundry_service.manager" */
export type Laundry_Service_ManagerManagerStaff_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Staff_Order_By>>;
  where?: InputMaybe<Laundry_Service_Staff_Bool_Exp>;
};


/** columns and relationships of "laundry_service.manager" */
export type Laundry_Service_ManagerManagerVendorArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Vendor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Vendor_Order_By>>;
  where?: InputMaybe<Laundry_Service_Vendor_Bool_Exp>;
};


/** columns and relationships of "laundry_service.manager" */
export type Laundry_Service_ManagerManagerVendor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Vendor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Vendor_Order_By>>;
  where?: InputMaybe<Laundry_Service_Vendor_Bool_Exp>;
};


/** columns and relationships of "laundry_service.manager" */
export type Laundry_Service_ManagerManagerWScheduleArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Workschedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Workschedule_Order_By>>;
  where?: InputMaybe<Laundry_Service_Workschedule_Bool_Exp>;
};


/** columns and relationships of "laundry_service.manager" */
export type Laundry_Service_ManagerManagerWSchedule_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Workschedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Workschedule_Order_By>>;
  where?: InputMaybe<Laundry_Service_Workschedule_Bool_Exp>;
};

/** aggregated selection of "laundry_service.manager" */
export type Laundry_Service_Manager_Aggregate = {
  __typename?: 'laundry_service_manager_aggregate';
  aggregate?: Maybe<Laundry_Service_Manager_Aggregate_Fields>;
  nodes: Array<Laundry_Service_Manager>;
};

/** aggregate fields of "laundry_service.manager" */
export type Laundry_Service_Manager_Aggregate_Fields = {
  __typename?: 'laundry_service_manager_aggregate_fields';
  avg?: Maybe<Laundry_Service_Manager_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Laundry_Service_Manager_Max_Fields>;
  min?: Maybe<Laundry_Service_Manager_Min_Fields>;
  stddev?: Maybe<Laundry_Service_Manager_Stddev_Fields>;
  stddev_pop?: Maybe<Laundry_Service_Manager_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Laundry_Service_Manager_Stddev_Samp_Fields>;
  sum?: Maybe<Laundry_Service_Manager_Sum_Fields>;
  var_pop?: Maybe<Laundry_Service_Manager_Var_Pop_Fields>;
  var_samp?: Maybe<Laundry_Service_Manager_Var_Samp_Fields>;
  variance?: Maybe<Laundry_Service_Manager_Variance_Fields>;
};


/** aggregate fields of "laundry_service.manager" */
export type Laundry_Service_Manager_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Laundry_Service_Manager_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "laundry_service.manager" */
export type Laundry_Service_Manager_Aggregate_Order_By = {
  avg?: InputMaybe<Laundry_Service_Manager_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Laundry_Service_Manager_Max_Order_By>;
  min?: InputMaybe<Laundry_Service_Manager_Min_Order_By>;
  stddev?: InputMaybe<Laundry_Service_Manager_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Laundry_Service_Manager_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Laundry_Service_Manager_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Laundry_Service_Manager_Sum_Order_By>;
  var_pop?: InputMaybe<Laundry_Service_Manager_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Laundry_Service_Manager_Var_Samp_Order_By>;
  variance?: InputMaybe<Laundry_Service_Manager_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "laundry_service.manager" */
export type Laundry_Service_Manager_Arr_Rel_Insert_Input = {
  data: Array<Laundry_Service_Manager_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Laundry_Service_Manager_On_Conflict>;
};

/** aggregate avg on columns */
export type Laundry_Service_Manager_Avg_Fields = {
  __typename?: 'laundry_service_manager_avg_fields';
  manager_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "laundry_service.manager" */
export type Laundry_Service_Manager_Avg_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "laundry_service.manager". All fields are combined with a logical 'AND'. */
export type Laundry_Service_Manager_Bool_Exp = {
  ManagerOrder?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
  ManagerProcess?: InputMaybe<Laundry_Service_Process_Bool_Exp>;
  ManagerStaff?: InputMaybe<Laundry_Service_Staff_Bool_Exp>;
  ManagerVendor?: InputMaybe<Laundry_Service_Vendor_Bool_Exp>;
  ManagerWSchedule?: InputMaybe<Laundry_Service_Workschedule_Bool_Exp>;
  _and?: InputMaybe<Array<Laundry_Service_Manager_Bool_Exp>>;
  _not?: InputMaybe<Laundry_Service_Manager_Bool_Exp>;
  _or?: InputMaybe<Array<Laundry_Service_Manager_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  fullname?: InputMaybe<String_Comparison_Exp>;
  manager_id?: InputMaybe<Int_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  vendor_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "laundry_service.manager" */
export enum Laundry_Service_Manager_Constraint {
  /** unique or primary key constraint on columns "manager_id" */
  ManagerPkey = 'manager_pkey'
}

/** input type for incrementing numeric columns in table "laundry_service.manager" */
export type Laundry_Service_Manager_Inc_Input = {
  manager_id?: InputMaybe<Scalars['Int']>;
  vendor_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "laundry_service.manager" */
export type Laundry_Service_Manager_Insert_Input = {
  ManagerOrder?: InputMaybe<Laundry_Service_Orders_Arr_Rel_Insert_Input>;
  ManagerProcess?: InputMaybe<Laundry_Service_Process_Arr_Rel_Insert_Input>;
  ManagerStaff?: InputMaybe<Laundry_Service_Staff_Arr_Rel_Insert_Input>;
  ManagerVendor?: InputMaybe<Laundry_Service_Vendor_Arr_Rel_Insert_Input>;
  ManagerWSchedule?: InputMaybe<Laundry_Service_Workschedule_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  manager_id?: InputMaybe<Scalars['Int']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  vendor_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Laundry_Service_Manager_Max_Fields = {
  __typename?: 'laundry_service_manager_max_fields';
  email?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  manager_id?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  vendor_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "laundry_service.manager" */
export type Laundry_Service_Manager_Max_Order_By = {
  email?: InputMaybe<Order_By>;
  fullname?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Laundry_Service_Manager_Min_Fields = {
  __typename?: 'laundry_service_manager_min_fields';
  email?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  manager_id?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  vendor_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "laundry_service.manager" */
export type Laundry_Service_Manager_Min_Order_By = {
  email?: InputMaybe<Order_By>;
  fullname?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "laundry_service.manager" */
export type Laundry_Service_Manager_Mutation_Response = {
  __typename?: 'laundry_service_manager_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Laundry_Service_Manager>;
};

/** on_conflict condition type for table "laundry_service.manager" */
export type Laundry_Service_Manager_On_Conflict = {
  constraint: Laundry_Service_Manager_Constraint;
  update_columns?: Array<Laundry_Service_Manager_Update_Column>;
  where?: InputMaybe<Laundry_Service_Manager_Bool_Exp>;
};

/** Ordering options when selecting data from "laundry_service.manager". */
export type Laundry_Service_Manager_Order_By = {
  ManagerOrder_aggregate?: InputMaybe<Laundry_Service_Orders_Aggregate_Order_By>;
  ManagerProcess_aggregate?: InputMaybe<Laundry_Service_Process_Aggregate_Order_By>;
  ManagerStaff_aggregate?: InputMaybe<Laundry_Service_Staff_Aggregate_Order_By>;
  ManagerVendor_aggregate?: InputMaybe<Laundry_Service_Vendor_Aggregate_Order_By>;
  ManagerWSchedule_aggregate?: InputMaybe<Laundry_Service_Workschedule_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  fullname?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: laundry_service.manager */
export type Laundry_Service_Manager_Pk_Columns_Input = {
  manager_id: Scalars['Int'];
};

/** select columns of table "laundry_service.manager" */
export enum Laundry_Service_Manager_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Fullname = 'fullname',
  /** column name */
  ManagerId = 'manager_id',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  VendorId = 'vendor_id'
}

/** input type for updating data in table "laundry_service.manager" */
export type Laundry_Service_Manager_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  manager_id?: InputMaybe<Scalars['Int']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  vendor_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Laundry_Service_Manager_Stddev_Fields = {
  __typename?: 'laundry_service_manager_stddev_fields';
  manager_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "laundry_service.manager" */
export type Laundry_Service_Manager_Stddev_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Laundry_Service_Manager_Stddev_Pop_Fields = {
  __typename?: 'laundry_service_manager_stddev_pop_fields';
  manager_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "laundry_service.manager" */
export type Laundry_Service_Manager_Stddev_Pop_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Laundry_Service_Manager_Stddev_Samp_Fields = {
  __typename?: 'laundry_service_manager_stddev_samp_fields';
  manager_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "laundry_service.manager" */
export type Laundry_Service_Manager_Stddev_Samp_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "laundry_service_manager" */
export type Laundry_Service_Manager_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Laundry_Service_Manager_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Laundry_Service_Manager_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  manager_id?: InputMaybe<Scalars['Int']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  vendor_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Laundry_Service_Manager_Sum_Fields = {
  __typename?: 'laundry_service_manager_sum_fields';
  manager_id?: Maybe<Scalars['Int']>;
  vendor_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "laundry_service.manager" */
export type Laundry_Service_Manager_Sum_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** update columns of table "laundry_service.manager" */
export enum Laundry_Service_Manager_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Fullname = 'fullname',
  /** column name */
  ManagerId = 'manager_id',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  VendorId = 'vendor_id'
}

export type Laundry_Service_Manager_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Laundry_Service_Manager_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Laundry_Service_Manager_Set_Input>;
  where: Laundry_Service_Manager_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Laundry_Service_Manager_Var_Pop_Fields = {
  __typename?: 'laundry_service_manager_var_pop_fields';
  manager_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "laundry_service.manager" */
export type Laundry_Service_Manager_Var_Pop_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Laundry_Service_Manager_Var_Samp_Fields = {
  __typename?: 'laundry_service_manager_var_samp_fields';
  manager_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "laundry_service.manager" */
export type Laundry_Service_Manager_Var_Samp_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Laundry_Service_Manager_Variance_Fields = {
  __typename?: 'laundry_service_manager_variance_fields';
  manager_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "laundry_service.manager" */
export type Laundry_Service_Manager_Variance_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "laundry_service.orderdetail" */
export type Laundry_Service_Orderdetail = {
  __typename?: 'laundry_service_orderdetail';
  /** An array relationship */
  OrderDetailEquipment: Array<Laundry_Service_Equipment>;
  /** An aggregate relationship */
  OrderDetailEquipment_aggregate: Laundry_Service_Equipment_Aggregate;
  /** An array relationship */
  OrderDetailOrder: Array<Laundry_Service_Orders>;
  /** An aggregate relationship */
  OrderDetailOrder_aggregate: Laundry_Service_Orders_Aggregate;
  /** An array relationship */
  OrderDetailProcess: Array<Laundry_Service_Process>;
  /** An aggregate relationship */
  OrderDetailProcess_aggregate: Laundry_Service_Process_Aggregate;
  /** An array relationship */
  OrderDetailProduct: Array<Laundry_Service_Product>;
  /** An aggregate relationship */
  OrderDetailProduct_aggregate: Laundry_Service_Product_Aggregate;
  /** An array relationship */
  OrderDetailService: Array<Laundry_Service_Service>;
  /** An aggregate relationship */
  OrderDetailService_aggregate: Laundry_Service_Service_Aggregate;
  /** An array relationship */
  OrderDetailVoucher: Array<Laundry_Service_Voucher>;
  /** An aggregate relationship */
  OrderDetailVoucher_aggregate: Laundry_Service_Voucher_Aggregate;
  equipment_id: Scalars['Int'];
  order_detail_id: Scalars['Int'];
  order_id: Scalars['Int'];
  product_id: Scalars['Int'];
  quantity?: Maybe<Scalars['Int']>;
  service_id: Scalars['Int'];
  voucher_id?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['float8']>;
};


/** columns and relationships of "laundry_service.orderdetail" */
export type Laundry_Service_OrderdetailOrderDetailEquipmentArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Equipment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Equipment_Order_By>>;
  where?: InputMaybe<Laundry_Service_Equipment_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orderdetail" */
export type Laundry_Service_OrderdetailOrderDetailEquipment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Equipment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Equipment_Order_By>>;
  where?: InputMaybe<Laundry_Service_Equipment_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orderdetail" */
export type Laundry_Service_OrderdetailOrderDetailOrderArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orders_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orderdetail" */
export type Laundry_Service_OrderdetailOrderDetailOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orders_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orderdetail" */
export type Laundry_Service_OrderdetailOrderDetailProcessArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Process_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Process_Order_By>>;
  where?: InputMaybe<Laundry_Service_Process_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orderdetail" */
export type Laundry_Service_OrderdetailOrderDetailProcess_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Process_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Process_Order_By>>;
  where?: InputMaybe<Laundry_Service_Process_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orderdetail" */
export type Laundry_Service_OrderdetailOrderDetailProductArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Product_Order_By>>;
  where?: InputMaybe<Laundry_Service_Product_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orderdetail" */
export type Laundry_Service_OrderdetailOrderDetailProduct_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Product_Order_By>>;
  where?: InputMaybe<Laundry_Service_Product_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orderdetail" */
export type Laundry_Service_OrderdetailOrderDetailServiceArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Service_Order_By>>;
  where?: InputMaybe<Laundry_Service_Service_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orderdetail" */
export type Laundry_Service_OrderdetailOrderDetailService_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Service_Order_By>>;
  where?: InputMaybe<Laundry_Service_Service_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orderdetail" */
export type Laundry_Service_OrderdetailOrderDetailVoucherArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Voucher_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Voucher_Order_By>>;
  where?: InputMaybe<Laundry_Service_Voucher_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orderdetail" */
export type Laundry_Service_OrderdetailOrderDetailVoucher_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Voucher_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Voucher_Order_By>>;
  where?: InputMaybe<Laundry_Service_Voucher_Bool_Exp>;
};

/** aggregated selection of "laundry_service.orderdetail" */
export type Laundry_Service_Orderdetail_Aggregate = {
  __typename?: 'laundry_service_orderdetail_aggregate';
  aggregate?: Maybe<Laundry_Service_Orderdetail_Aggregate_Fields>;
  nodes: Array<Laundry_Service_Orderdetail>;
};

/** aggregate fields of "laundry_service.orderdetail" */
export type Laundry_Service_Orderdetail_Aggregate_Fields = {
  __typename?: 'laundry_service_orderdetail_aggregate_fields';
  avg?: Maybe<Laundry_Service_Orderdetail_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Laundry_Service_Orderdetail_Max_Fields>;
  min?: Maybe<Laundry_Service_Orderdetail_Min_Fields>;
  stddev?: Maybe<Laundry_Service_Orderdetail_Stddev_Fields>;
  stddev_pop?: Maybe<Laundry_Service_Orderdetail_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Laundry_Service_Orderdetail_Stddev_Samp_Fields>;
  sum?: Maybe<Laundry_Service_Orderdetail_Sum_Fields>;
  var_pop?: Maybe<Laundry_Service_Orderdetail_Var_Pop_Fields>;
  var_samp?: Maybe<Laundry_Service_Orderdetail_Var_Samp_Fields>;
  variance?: Maybe<Laundry_Service_Orderdetail_Variance_Fields>;
};


/** aggregate fields of "laundry_service.orderdetail" */
export type Laundry_Service_Orderdetail_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Laundry_Service_Orderdetail_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "laundry_service.orderdetail" */
export type Laundry_Service_Orderdetail_Aggregate_Order_By = {
  avg?: InputMaybe<Laundry_Service_Orderdetail_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Laundry_Service_Orderdetail_Max_Order_By>;
  min?: InputMaybe<Laundry_Service_Orderdetail_Min_Order_By>;
  stddev?: InputMaybe<Laundry_Service_Orderdetail_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Laundry_Service_Orderdetail_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Laundry_Service_Orderdetail_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Laundry_Service_Orderdetail_Sum_Order_By>;
  var_pop?: InputMaybe<Laundry_Service_Orderdetail_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Laundry_Service_Orderdetail_Var_Samp_Order_By>;
  variance?: InputMaybe<Laundry_Service_Orderdetail_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "laundry_service.orderdetail" */
export type Laundry_Service_Orderdetail_Arr_Rel_Insert_Input = {
  data: Array<Laundry_Service_Orderdetail_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Laundry_Service_Orderdetail_On_Conflict>;
};

/** aggregate avg on columns */
export type Laundry_Service_Orderdetail_Avg_Fields = {
  __typename?: 'laundry_service_orderdetail_avg_fields';
  equipment_id?: Maybe<Scalars['Float']>;
  order_detail_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  service_id?: Maybe<Scalars['Float']>;
  voucher_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "laundry_service.orderdetail" */
export type Laundry_Service_Orderdetail_Avg_Order_By = {
  equipment_id?: InputMaybe<Order_By>;
  order_detail_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "laundry_service.orderdetail". All fields are combined with a logical 'AND'. */
export type Laundry_Service_Orderdetail_Bool_Exp = {
  OrderDetailEquipment?: InputMaybe<Laundry_Service_Equipment_Bool_Exp>;
  OrderDetailOrder?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
  OrderDetailProcess?: InputMaybe<Laundry_Service_Process_Bool_Exp>;
  OrderDetailProduct?: InputMaybe<Laundry_Service_Product_Bool_Exp>;
  OrderDetailService?: InputMaybe<Laundry_Service_Service_Bool_Exp>;
  OrderDetailVoucher?: InputMaybe<Laundry_Service_Voucher_Bool_Exp>;
  _and?: InputMaybe<Array<Laundry_Service_Orderdetail_Bool_Exp>>;
  _not?: InputMaybe<Laundry_Service_Orderdetail_Bool_Exp>;
  _or?: InputMaybe<Array<Laundry_Service_Orderdetail_Bool_Exp>>;
  equipment_id?: InputMaybe<Int_Comparison_Exp>;
  order_detail_id?: InputMaybe<Int_Comparison_Exp>;
  order_id?: InputMaybe<Int_Comparison_Exp>;
  product_id?: InputMaybe<Int_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  service_id?: InputMaybe<Int_Comparison_Exp>;
  voucher_id?: InputMaybe<Int_Comparison_Exp>;
  weight?: InputMaybe<Float8_Comparison_Exp>;
};

/** unique or primary key constraints on table "laundry_service.orderdetail" */
export enum Laundry_Service_Orderdetail_Constraint {
  /** unique or primary key constraint on columns "order_detail_id" */
  OrderdetailPkey = 'orderdetail_pkey'
}

/** input type for incrementing numeric columns in table "laundry_service.orderdetail" */
export type Laundry_Service_Orderdetail_Inc_Input = {
  equipment_id?: InputMaybe<Scalars['Int']>;
  order_detail_id?: InputMaybe<Scalars['Int']>;
  order_id?: InputMaybe<Scalars['Int']>;
  product_id?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  service_id?: InputMaybe<Scalars['Int']>;
  voucher_id?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['float8']>;
};

/** input type for inserting data into table "laundry_service.orderdetail" */
export type Laundry_Service_Orderdetail_Insert_Input = {
  OrderDetailEquipment?: InputMaybe<Laundry_Service_Equipment_Arr_Rel_Insert_Input>;
  OrderDetailOrder?: InputMaybe<Laundry_Service_Orders_Arr_Rel_Insert_Input>;
  OrderDetailProcess?: InputMaybe<Laundry_Service_Process_Arr_Rel_Insert_Input>;
  OrderDetailProduct?: InputMaybe<Laundry_Service_Product_Arr_Rel_Insert_Input>;
  OrderDetailService?: InputMaybe<Laundry_Service_Service_Arr_Rel_Insert_Input>;
  OrderDetailVoucher?: InputMaybe<Laundry_Service_Voucher_Arr_Rel_Insert_Input>;
  equipment_id?: InputMaybe<Scalars['Int']>;
  order_detail_id?: InputMaybe<Scalars['Int']>;
  order_id?: InputMaybe<Scalars['Int']>;
  product_id?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  service_id?: InputMaybe<Scalars['Int']>;
  voucher_id?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['float8']>;
};

/** aggregate max on columns */
export type Laundry_Service_Orderdetail_Max_Fields = {
  __typename?: 'laundry_service_orderdetail_max_fields';
  equipment_id?: Maybe<Scalars['Int']>;
  order_detail_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  service_id?: Maybe<Scalars['Int']>;
  voucher_id?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['float8']>;
};

/** order by max() on columns of table "laundry_service.orderdetail" */
export type Laundry_Service_Orderdetail_Max_Order_By = {
  equipment_id?: InputMaybe<Order_By>;
  order_detail_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Laundry_Service_Orderdetail_Min_Fields = {
  __typename?: 'laundry_service_orderdetail_min_fields';
  equipment_id?: Maybe<Scalars['Int']>;
  order_detail_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  service_id?: Maybe<Scalars['Int']>;
  voucher_id?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['float8']>;
};

/** order by min() on columns of table "laundry_service.orderdetail" */
export type Laundry_Service_Orderdetail_Min_Order_By = {
  equipment_id?: InputMaybe<Order_By>;
  order_detail_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "laundry_service.orderdetail" */
export type Laundry_Service_Orderdetail_Mutation_Response = {
  __typename?: 'laundry_service_orderdetail_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Laundry_Service_Orderdetail>;
};

/** on_conflict condition type for table "laundry_service.orderdetail" */
export type Laundry_Service_Orderdetail_On_Conflict = {
  constraint: Laundry_Service_Orderdetail_Constraint;
  update_columns?: Array<Laundry_Service_Orderdetail_Update_Column>;
  where?: InputMaybe<Laundry_Service_Orderdetail_Bool_Exp>;
};

/** Ordering options when selecting data from "laundry_service.orderdetail". */
export type Laundry_Service_Orderdetail_Order_By = {
  OrderDetailEquipment_aggregate?: InputMaybe<Laundry_Service_Equipment_Aggregate_Order_By>;
  OrderDetailOrder_aggregate?: InputMaybe<Laundry_Service_Orders_Aggregate_Order_By>;
  OrderDetailProcess_aggregate?: InputMaybe<Laundry_Service_Process_Aggregate_Order_By>;
  OrderDetailProduct_aggregate?: InputMaybe<Laundry_Service_Product_Aggregate_Order_By>;
  OrderDetailService_aggregate?: InputMaybe<Laundry_Service_Service_Aggregate_Order_By>;
  OrderDetailVoucher_aggregate?: InputMaybe<Laundry_Service_Voucher_Aggregate_Order_By>;
  equipment_id?: InputMaybe<Order_By>;
  order_detail_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** primary key columns input for table: laundry_service.orderdetail */
export type Laundry_Service_Orderdetail_Pk_Columns_Input = {
  order_detail_id: Scalars['Int'];
};

/** select columns of table "laundry_service.orderdetail" */
export enum Laundry_Service_Orderdetail_Select_Column {
  /** column name */
  EquipmentId = 'equipment_id',
  /** column name */
  OrderDetailId = 'order_detail_id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  ServiceId = 'service_id',
  /** column name */
  VoucherId = 'voucher_id',
  /** column name */
  Weight = 'weight'
}

/** input type for updating data in table "laundry_service.orderdetail" */
export type Laundry_Service_Orderdetail_Set_Input = {
  equipment_id?: InputMaybe<Scalars['Int']>;
  order_detail_id?: InputMaybe<Scalars['Int']>;
  order_id?: InputMaybe<Scalars['Int']>;
  product_id?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  service_id?: InputMaybe<Scalars['Int']>;
  voucher_id?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['float8']>;
};

/** aggregate stddev on columns */
export type Laundry_Service_Orderdetail_Stddev_Fields = {
  __typename?: 'laundry_service_orderdetail_stddev_fields';
  equipment_id?: Maybe<Scalars['Float']>;
  order_detail_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  service_id?: Maybe<Scalars['Float']>;
  voucher_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "laundry_service.orderdetail" */
export type Laundry_Service_Orderdetail_Stddev_Order_By = {
  equipment_id?: InputMaybe<Order_By>;
  order_detail_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Laundry_Service_Orderdetail_Stddev_Pop_Fields = {
  __typename?: 'laundry_service_orderdetail_stddev_pop_fields';
  equipment_id?: Maybe<Scalars['Float']>;
  order_detail_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  service_id?: Maybe<Scalars['Float']>;
  voucher_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "laundry_service.orderdetail" */
export type Laundry_Service_Orderdetail_Stddev_Pop_Order_By = {
  equipment_id?: InputMaybe<Order_By>;
  order_detail_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Laundry_Service_Orderdetail_Stddev_Samp_Fields = {
  __typename?: 'laundry_service_orderdetail_stddev_samp_fields';
  equipment_id?: Maybe<Scalars['Float']>;
  order_detail_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  service_id?: Maybe<Scalars['Float']>;
  voucher_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "laundry_service.orderdetail" */
export type Laundry_Service_Orderdetail_Stddev_Samp_Order_By = {
  equipment_id?: InputMaybe<Order_By>;
  order_detail_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "laundry_service_orderdetail" */
export type Laundry_Service_Orderdetail_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Laundry_Service_Orderdetail_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Laundry_Service_Orderdetail_Stream_Cursor_Value_Input = {
  equipment_id?: InputMaybe<Scalars['Int']>;
  order_detail_id?: InputMaybe<Scalars['Int']>;
  order_id?: InputMaybe<Scalars['Int']>;
  product_id?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  service_id?: InputMaybe<Scalars['Int']>;
  voucher_id?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['float8']>;
};

/** aggregate sum on columns */
export type Laundry_Service_Orderdetail_Sum_Fields = {
  __typename?: 'laundry_service_orderdetail_sum_fields';
  equipment_id?: Maybe<Scalars['Int']>;
  order_detail_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  service_id?: Maybe<Scalars['Int']>;
  voucher_id?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "laundry_service.orderdetail" */
export type Laundry_Service_Orderdetail_Sum_Order_By = {
  equipment_id?: InputMaybe<Order_By>;
  order_detail_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** update columns of table "laundry_service.orderdetail" */
export enum Laundry_Service_Orderdetail_Update_Column {
  /** column name */
  EquipmentId = 'equipment_id',
  /** column name */
  OrderDetailId = 'order_detail_id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  ServiceId = 'service_id',
  /** column name */
  VoucherId = 'voucher_id',
  /** column name */
  Weight = 'weight'
}

export type Laundry_Service_Orderdetail_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Laundry_Service_Orderdetail_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Laundry_Service_Orderdetail_Set_Input>;
  where: Laundry_Service_Orderdetail_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Laundry_Service_Orderdetail_Var_Pop_Fields = {
  __typename?: 'laundry_service_orderdetail_var_pop_fields';
  equipment_id?: Maybe<Scalars['Float']>;
  order_detail_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  service_id?: Maybe<Scalars['Float']>;
  voucher_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "laundry_service.orderdetail" */
export type Laundry_Service_Orderdetail_Var_Pop_Order_By = {
  equipment_id?: InputMaybe<Order_By>;
  order_detail_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Laundry_Service_Orderdetail_Var_Samp_Fields = {
  __typename?: 'laundry_service_orderdetail_var_samp_fields';
  equipment_id?: Maybe<Scalars['Float']>;
  order_detail_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  service_id?: Maybe<Scalars['Float']>;
  voucher_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "laundry_service.orderdetail" */
export type Laundry_Service_Orderdetail_Var_Samp_Order_By = {
  equipment_id?: InputMaybe<Order_By>;
  order_detail_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Laundry_Service_Orderdetail_Variance_Fields = {
  __typename?: 'laundry_service_orderdetail_variance_fields';
  equipment_id?: Maybe<Scalars['Float']>;
  order_detail_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  service_id?: Maybe<Scalars['Float']>;
  voucher_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "laundry_service.orderdetail" */
export type Laundry_Service_Orderdetail_Variance_Order_By = {
  equipment_id?: InputMaybe<Order_By>;
  order_detail_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** columns and relationships of "laundry_service.orders" */
export type Laundry_Service_Orders = {
  __typename?: 'laundry_service_orders';
  /** An array relationship */
  OrderCustomer: Array<Laundry_Service_Customers>;
  /** An aggregate relationship */
  OrderCustomer_aggregate: Laundry_Service_Customers_Aggregate;
  /** An array relationship */
  OrderFeedback: Array<Laundry_Service_Feedback>;
  /** An aggregate relationship */
  OrderFeedback_aggregate: Laundry_Service_Feedback_Aggregate;
  /** An array relationship */
  OrderManager: Array<Laundry_Service_Manager>;
  /** An aggregate relationship */
  OrderManager_aggregate: Laundry_Service_Manager_Aggregate;
  /** An array relationship */
  OrderOrderDetail: Array<Laundry_Service_Orderdetail>;
  /** An aggregate relationship */
  OrderOrderDetail_aggregate: Laundry_Service_Orderdetail_Aggregate;
  /** An array relationship */
  OrderPayment: Array<Laundry_Service_Payment>;
  /** An aggregate relationship */
  OrderPayment_aggregate: Laundry_Service_Payment_Aggregate;
  /** An array relationship */
  OrderStaff: Array<Laundry_Service_Staff>;
  /** An aggregate relationship */
  OrderStaff_aggregate: Laundry_Service_Staff_Aggregate;
  /** An array relationship */
  OrderTrans: Array<Laundry_Service_Transaction>;
  /** An aggregate relationship */
  OrderTrans_aggregate: Laundry_Service_Transaction_Aggregate;
  /** An array relationship */
  OrderVendor: Array<Laundry_Service_Vendor>;
  /** An aggregate relationship */
  OrderVendor_aggregate: Laundry_Service_Vendor_Aggregate;
  /** An array relationship */
  TrackingOrders: Array<Laundry_Service_Trackingorder>;
  /** An aggregate relationship */
  TrackingOrders_aggregate: Laundry_Service_Trackingorder_Aggregate;
  customer_id: Scalars['Int'];
  feedback_id?: Maybe<Scalars['Int']>;
  manager_id: Scalars['Int'];
  order_id: Scalars['Int'];
  payment_id: Scalars['Int'];
  required_deliver_time: Scalars['timestamp'];
  required_giving_time: Scalars['timestamp'];
  staff_id: Scalars['Int'];
  vendor_id: Scalars['Int'];
};


/** columns and relationships of "laundry_service.orders" */
export type Laundry_Service_OrdersOrderCustomerArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Customers_Order_By>>;
  where?: InputMaybe<Laundry_Service_Customers_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orders" */
export type Laundry_Service_OrdersOrderCustomer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Customers_Order_By>>;
  where?: InputMaybe<Laundry_Service_Customers_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orders" */
export type Laundry_Service_OrdersOrderFeedbackArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Feedback_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Feedback_Order_By>>;
  where?: InputMaybe<Laundry_Service_Feedback_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orders" */
export type Laundry_Service_OrdersOrderFeedback_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Feedback_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Feedback_Order_By>>;
  where?: InputMaybe<Laundry_Service_Feedback_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orders" */
export type Laundry_Service_OrdersOrderManagerArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Manager_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Manager_Order_By>>;
  where?: InputMaybe<Laundry_Service_Manager_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orders" */
export type Laundry_Service_OrdersOrderManager_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Manager_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Manager_Order_By>>;
  where?: InputMaybe<Laundry_Service_Manager_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orders" */
export type Laundry_Service_OrdersOrderOrderDetailArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orderdetail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orderdetail_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orderdetail_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orders" */
export type Laundry_Service_OrdersOrderOrderDetail_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orderdetail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orderdetail_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orderdetail_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orders" */
export type Laundry_Service_OrdersOrderPaymentArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Payment_Order_By>>;
  where?: InputMaybe<Laundry_Service_Payment_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orders" */
export type Laundry_Service_OrdersOrderPayment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Payment_Order_By>>;
  where?: InputMaybe<Laundry_Service_Payment_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orders" */
export type Laundry_Service_OrdersOrderStaffArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Staff_Order_By>>;
  where?: InputMaybe<Laundry_Service_Staff_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orders" */
export type Laundry_Service_OrdersOrderStaff_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Staff_Order_By>>;
  where?: InputMaybe<Laundry_Service_Staff_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orders" */
export type Laundry_Service_OrdersOrderTransArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Transaction_Order_By>>;
  where?: InputMaybe<Laundry_Service_Transaction_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orders" */
export type Laundry_Service_OrdersOrderTrans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Transaction_Order_By>>;
  where?: InputMaybe<Laundry_Service_Transaction_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orders" */
export type Laundry_Service_OrdersOrderVendorArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Vendor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Vendor_Order_By>>;
  where?: InputMaybe<Laundry_Service_Vendor_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orders" */
export type Laundry_Service_OrdersOrderVendor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Vendor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Vendor_Order_By>>;
  where?: InputMaybe<Laundry_Service_Vendor_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orders" */
export type Laundry_Service_OrdersTrackingOrdersArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Trackingorder_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Trackingorder_Order_By>>;
  where?: InputMaybe<Laundry_Service_Trackingorder_Bool_Exp>;
};


/** columns and relationships of "laundry_service.orders" */
export type Laundry_Service_OrdersTrackingOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Trackingorder_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Trackingorder_Order_By>>;
  where?: InputMaybe<Laundry_Service_Trackingorder_Bool_Exp>;
};

/** aggregated selection of "laundry_service.orders" */
export type Laundry_Service_Orders_Aggregate = {
  __typename?: 'laundry_service_orders_aggregate';
  aggregate?: Maybe<Laundry_Service_Orders_Aggregate_Fields>;
  nodes: Array<Laundry_Service_Orders>;
};

/** aggregate fields of "laundry_service.orders" */
export type Laundry_Service_Orders_Aggregate_Fields = {
  __typename?: 'laundry_service_orders_aggregate_fields';
  avg?: Maybe<Laundry_Service_Orders_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Laundry_Service_Orders_Max_Fields>;
  min?: Maybe<Laundry_Service_Orders_Min_Fields>;
  stddev?: Maybe<Laundry_Service_Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Laundry_Service_Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Laundry_Service_Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Laundry_Service_Orders_Sum_Fields>;
  var_pop?: Maybe<Laundry_Service_Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Laundry_Service_Orders_Var_Samp_Fields>;
  variance?: Maybe<Laundry_Service_Orders_Variance_Fields>;
};


/** aggregate fields of "laundry_service.orders" */
export type Laundry_Service_Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Laundry_Service_Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "laundry_service.orders" */
export type Laundry_Service_Orders_Aggregate_Order_By = {
  avg?: InputMaybe<Laundry_Service_Orders_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Laundry_Service_Orders_Max_Order_By>;
  min?: InputMaybe<Laundry_Service_Orders_Min_Order_By>;
  stddev?: InputMaybe<Laundry_Service_Orders_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Laundry_Service_Orders_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Laundry_Service_Orders_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Laundry_Service_Orders_Sum_Order_By>;
  var_pop?: InputMaybe<Laundry_Service_Orders_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Laundry_Service_Orders_Var_Samp_Order_By>;
  variance?: InputMaybe<Laundry_Service_Orders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "laundry_service.orders" */
export type Laundry_Service_Orders_Arr_Rel_Insert_Input = {
  data: Array<Laundry_Service_Orders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Laundry_Service_Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type Laundry_Service_Orders_Avg_Fields = {
  __typename?: 'laundry_service_orders_avg_fields';
  customer_id?: Maybe<Scalars['Float']>;
  feedback_id?: Maybe<Scalars['Float']>;
  manager_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "laundry_service.orders" */
export type Laundry_Service_Orders_Avg_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  feedback_id?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "laundry_service.orders". All fields are combined with a logical 'AND'. */
export type Laundry_Service_Orders_Bool_Exp = {
  OrderCustomer?: InputMaybe<Laundry_Service_Customers_Bool_Exp>;
  OrderFeedback?: InputMaybe<Laundry_Service_Feedback_Bool_Exp>;
  OrderManager?: InputMaybe<Laundry_Service_Manager_Bool_Exp>;
  OrderOrderDetail?: InputMaybe<Laundry_Service_Orderdetail_Bool_Exp>;
  OrderPayment?: InputMaybe<Laundry_Service_Payment_Bool_Exp>;
  OrderStaff?: InputMaybe<Laundry_Service_Staff_Bool_Exp>;
  OrderTrans?: InputMaybe<Laundry_Service_Transaction_Bool_Exp>;
  OrderVendor?: InputMaybe<Laundry_Service_Vendor_Bool_Exp>;
  TrackingOrders?: InputMaybe<Laundry_Service_Trackingorder_Bool_Exp>;
  _and?: InputMaybe<Array<Laundry_Service_Orders_Bool_Exp>>;
  _not?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Laundry_Service_Orders_Bool_Exp>>;
  customer_id?: InputMaybe<Int_Comparison_Exp>;
  feedback_id?: InputMaybe<Int_Comparison_Exp>;
  manager_id?: InputMaybe<Int_Comparison_Exp>;
  order_id?: InputMaybe<Int_Comparison_Exp>;
  payment_id?: InputMaybe<Int_Comparison_Exp>;
  required_deliver_time?: InputMaybe<Timestamp_Comparison_Exp>;
  required_giving_time?: InputMaybe<Timestamp_Comparison_Exp>;
  staff_id?: InputMaybe<Int_Comparison_Exp>;
  vendor_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "laundry_service.orders" */
export enum Laundry_Service_Orders_Constraint {
  /** unique or primary key constraint on columns "order_id" */
  OrdersPkey = 'orders_pkey'
}

/** input type for incrementing numeric columns in table "laundry_service.orders" */
export type Laundry_Service_Orders_Inc_Input = {
  customer_id?: InputMaybe<Scalars['Int']>;
  feedback_id?: InputMaybe<Scalars['Int']>;
  manager_id?: InputMaybe<Scalars['Int']>;
  order_id?: InputMaybe<Scalars['Int']>;
  payment_id?: InputMaybe<Scalars['Int']>;
  staff_id?: InputMaybe<Scalars['Int']>;
  vendor_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "laundry_service.orders" */
export type Laundry_Service_Orders_Insert_Input = {
  OrderCustomer?: InputMaybe<Laundry_Service_Customers_Arr_Rel_Insert_Input>;
  OrderFeedback?: InputMaybe<Laundry_Service_Feedback_Arr_Rel_Insert_Input>;
  OrderManager?: InputMaybe<Laundry_Service_Manager_Arr_Rel_Insert_Input>;
  OrderOrderDetail?: InputMaybe<Laundry_Service_Orderdetail_Arr_Rel_Insert_Input>;
  OrderPayment?: InputMaybe<Laundry_Service_Payment_Arr_Rel_Insert_Input>;
  OrderStaff?: InputMaybe<Laundry_Service_Staff_Arr_Rel_Insert_Input>;
  OrderTrans?: InputMaybe<Laundry_Service_Transaction_Arr_Rel_Insert_Input>;
  OrderVendor?: InputMaybe<Laundry_Service_Vendor_Arr_Rel_Insert_Input>;
  TrackingOrders?: InputMaybe<Laundry_Service_Trackingorder_Arr_Rel_Insert_Input>;
  customer_id?: InputMaybe<Scalars['Int']>;
  feedback_id?: InputMaybe<Scalars['Int']>;
  manager_id?: InputMaybe<Scalars['Int']>;
  order_id?: InputMaybe<Scalars['Int']>;
  payment_id?: InputMaybe<Scalars['Int']>;
  required_deliver_time?: InputMaybe<Scalars['timestamp']>;
  required_giving_time?: InputMaybe<Scalars['timestamp']>;
  staff_id?: InputMaybe<Scalars['Int']>;
  vendor_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Laundry_Service_Orders_Max_Fields = {
  __typename?: 'laundry_service_orders_max_fields';
  customer_id?: Maybe<Scalars['Int']>;
  feedback_id?: Maybe<Scalars['Int']>;
  manager_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  payment_id?: Maybe<Scalars['Int']>;
  required_deliver_time?: Maybe<Scalars['timestamp']>;
  required_giving_time?: Maybe<Scalars['timestamp']>;
  staff_id?: Maybe<Scalars['Int']>;
  vendor_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "laundry_service.orders" */
export type Laundry_Service_Orders_Max_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  feedback_id?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  required_deliver_time?: InputMaybe<Order_By>;
  required_giving_time?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Laundry_Service_Orders_Min_Fields = {
  __typename?: 'laundry_service_orders_min_fields';
  customer_id?: Maybe<Scalars['Int']>;
  feedback_id?: Maybe<Scalars['Int']>;
  manager_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  payment_id?: Maybe<Scalars['Int']>;
  required_deliver_time?: Maybe<Scalars['timestamp']>;
  required_giving_time?: Maybe<Scalars['timestamp']>;
  staff_id?: Maybe<Scalars['Int']>;
  vendor_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "laundry_service.orders" */
export type Laundry_Service_Orders_Min_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  feedback_id?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  required_deliver_time?: InputMaybe<Order_By>;
  required_giving_time?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "laundry_service.orders" */
export type Laundry_Service_Orders_Mutation_Response = {
  __typename?: 'laundry_service_orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Laundry_Service_Orders>;
};

/** on_conflict condition type for table "laundry_service.orders" */
export type Laundry_Service_Orders_On_Conflict = {
  constraint: Laundry_Service_Orders_Constraint;
  update_columns?: Array<Laundry_Service_Orders_Update_Column>;
  where?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "laundry_service.orders". */
export type Laundry_Service_Orders_Order_By = {
  OrderCustomer_aggregate?: InputMaybe<Laundry_Service_Customers_Aggregate_Order_By>;
  OrderFeedback_aggregate?: InputMaybe<Laundry_Service_Feedback_Aggregate_Order_By>;
  OrderManager_aggregate?: InputMaybe<Laundry_Service_Manager_Aggregate_Order_By>;
  OrderOrderDetail_aggregate?: InputMaybe<Laundry_Service_Orderdetail_Aggregate_Order_By>;
  OrderPayment_aggregate?: InputMaybe<Laundry_Service_Payment_Aggregate_Order_By>;
  OrderStaff_aggregate?: InputMaybe<Laundry_Service_Staff_Aggregate_Order_By>;
  OrderTrans_aggregate?: InputMaybe<Laundry_Service_Transaction_Aggregate_Order_By>;
  OrderVendor_aggregate?: InputMaybe<Laundry_Service_Vendor_Aggregate_Order_By>;
  TrackingOrders_aggregate?: InputMaybe<Laundry_Service_Trackingorder_Aggregate_Order_By>;
  customer_id?: InputMaybe<Order_By>;
  feedback_id?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  required_deliver_time?: InputMaybe<Order_By>;
  required_giving_time?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: laundry_service.orders */
export type Laundry_Service_Orders_Pk_Columns_Input = {
  order_id: Scalars['Int'];
};

/** select columns of table "laundry_service.orders" */
export enum Laundry_Service_Orders_Select_Column {
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  FeedbackId = 'feedback_id',
  /** column name */
  ManagerId = 'manager_id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  PaymentId = 'payment_id',
  /** column name */
  RequiredDeliverTime = 'required_deliver_time',
  /** column name */
  RequiredGivingTime = 'required_giving_time',
  /** column name */
  StaffId = 'staff_id',
  /** column name */
  VendorId = 'vendor_id'
}

/** input type for updating data in table "laundry_service.orders" */
export type Laundry_Service_Orders_Set_Input = {
  customer_id?: InputMaybe<Scalars['Int']>;
  feedback_id?: InputMaybe<Scalars['Int']>;
  manager_id?: InputMaybe<Scalars['Int']>;
  order_id?: InputMaybe<Scalars['Int']>;
  payment_id?: InputMaybe<Scalars['Int']>;
  required_deliver_time?: InputMaybe<Scalars['timestamp']>;
  required_giving_time?: InputMaybe<Scalars['timestamp']>;
  staff_id?: InputMaybe<Scalars['Int']>;
  vendor_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Laundry_Service_Orders_Stddev_Fields = {
  __typename?: 'laundry_service_orders_stddev_fields';
  customer_id?: Maybe<Scalars['Float']>;
  feedback_id?: Maybe<Scalars['Float']>;
  manager_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "laundry_service.orders" */
export type Laundry_Service_Orders_Stddev_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  feedback_id?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Laundry_Service_Orders_Stddev_Pop_Fields = {
  __typename?: 'laundry_service_orders_stddev_pop_fields';
  customer_id?: Maybe<Scalars['Float']>;
  feedback_id?: Maybe<Scalars['Float']>;
  manager_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "laundry_service.orders" */
export type Laundry_Service_Orders_Stddev_Pop_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  feedback_id?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Laundry_Service_Orders_Stddev_Samp_Fields = {
  __typename?: 'laundry_service_orders_stddev_samp_fields';
  customer_id?: Maybe<Scalars['Float']>;
  feedback_id?: Maybe<Scalars['Float']>;
  manager_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "laundry_service.orders" */
export type Laundry_Service_Orders_Stddev_Samp_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  feedback_id?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "laundry_service_orders" */
export type Laundry_Service_Orders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Laundry_Service_Orders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Laundry_Service_Orders_Stream_Cursor_Value_Input = {
  customer_id?: InputMaybe<Scalars['Int']>;
  feedback_id?: InputMaybe<Scalars['Int']>;
  manager_id?: InputMaybe<Scalars['Int']>;
  order_id?: InputMaybe<Scalars['Int']>;
  payment_id?: InputMaybe<Scalars['Int']>;
  required_deliver_time?: InputMaybe<Scalars['timestamp']>;
  required_giving_time?: InputMaybe<Scalars['timestamp']>;
  staff_id?: InputMaybe<Scalars['Int']>;
  vendor_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Laundry_Service_Orders_Sum_Fields = {
  __typename?: 'laundry_service_orders_sum_fields';
  customer_id?: Maybe<Scalars['Int']>;
  feedback_id?: Maybe<Scalars['Int']>;
  manager_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  payment_id?: Maybe<Scalars['Int']>;
  staff_id?: Maybe<Scalars['Int']>;
  vendor_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "laundry_service.orders" */
export type Laundry_Service_Orders_Sum_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  feedback_id?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** update columns of table "laundry_service.orders" */
export enum Laundry_Service_Orders_Update_Column {
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  FeedbackId = 'feedback_id',
  /** column name */
  ManagerId = 'manager_id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  PaymentId = 'payment_id',
  /** column name */
  RequiredDeliverTime = 'required_deliver_time',
  /** column name */
  RequiredGivingTime = 'required_giving_time',
  /** column name */
  StaffId = 'staff_id',
  /** column name */
  VendorId = 'vendor_id'
}

export type Laundry_Service_Orders_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Laundry_Service_Orders_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Laundry_Service_Orders_Set_Input>;
  where: Laundry_Service_Orders_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Laundry_Service_Orders_Var_Pop_Fields = {
  __typename?: 'laundry_service_orders_var_pop_fields';
  customer_id?: Maybe<Scalars['Float']>;
  feedback_id?: Maybe<Scalars['Float']>;
  manager_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "laundry_service.orders" */
export type Laundry_Service_Orders_Var_Pop_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  feedback_id?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Laundry_Service_Orders_Var_Samp_Fields = {
  __typename?: 'laundry_service_orders_var_samp_fields';
  customer_id?: Maybe<Scalars['Float']>;
  feedback_id?: Maybe<Scalars['Float']>;
  manager_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "laundry_service.orders" */
export type Laundry_Service_Orders_Var_Samp_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  feedback_id?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Laundry_Service_Orders_Variance_Fields = {
  __typename?: 'laundry_service_orders_variance_fields';
  customer_id?: Maybe<Scalars['Float']>;
  feedback_id?: Maybe<Scalars['Float']>;
  manager_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "laundry_service.orders" */
export type Laundry_Service_Orders_Variance_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  feedback_id?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "laundry_service.payment" */
export type Laundry_Service_Payment = {
  __typename?: 'laundry_service_payment';
  /** An array relationship */
  PaymentTrans: Array<Laundry_Service_Transaction>;
  /** An aggregate relationship */
  PaymentTrans_aggregate: Laundry_Service_Transaction_Aggregate;
  payment_id: Scalars['Int'];
  payment_type: Scalars['String'];
};


/** columns and relationships of "laundry_service.payment" */
export type Laundry_Service_PaymentPaymentTransArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Transaction_Order_By>>;
  where?: InputMaybe<Laundry_Service_Transaction_Bool_Exp>;
};


/** columns and relationships of "laundry_service.payment" */
export type Laundry_Service_PaymentPaymentTrans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Transaction_Order_By>>;
  where?: InputMaybe<Laundry_Service_Transaction_Bool_Exp>;
};

/** aggregated selection of "laundry_service.payment" */
export type Laundry_Service_Payment_Aggregate = {
  __typename?: 'laundry_service_payment_aggregate';
  aggregate?: Maybe<Laundry_Service_Payment_Aggregate_Fields>;
  nodes: Array<Laundry_Service_Payment>;
};

/** aggregate fields of "laundry_service.payment" */
export type Laundry_Service_Payment_Aggregate_Fields = {
  __typename?: 'laundry_service_payment_aggregate_fields';
  avg?: Maybe<Laundry_Service_Payment_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Laundry_Service_Payment_Max_Fields>;
  min?: Maybe<Laundry_Service_Payment_Min_Fields>;
  stddev?: Maybe<Laundry_Service_Payment_Stddev_Fields>;
  stddev_pop?: Maybe<Laundry_Service_Payment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Laundry_Service_Payment_Stddev_Samp_Fields>;
  sum?: Maybe<Laundry_Service_Payment_Sum_Fields>;
  var_pop?: Maybe<Laundry_Service_Payment_Var_Pop_Fields>;
  var_samp?: Maybe<Laundry_Service_Payment_Var_Samp_Fields>;
  variance?: Maybe<Laundry_Service_Payment_Variance_Fields>;
};


/** aggregate fields of "laundry_service.payment" */
export type Laundry_Service_Payment_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Laundry_Service_Payment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "laundry_service.payment" */
export type Laundry_Service_Payment_Aggregate_Order_By = {
  avg?: InputMaybe<Laundry_Service_Payment_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Laundry_Service_Payment_Max_Order_By>;
  min?: InputMaybe<Laundry_Service_Payment_Min_Order_By>;
  stddev?: InputMaybe<Laundry_Service_Payment_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Laundry_Service_Payment_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Laundry_Service_Payment_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Laundry_Service_Payment_Sum_Order_By>;
  var_pop?: InputMaybe<Laundry_Service_Payment_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Laundry_Service_Payment_Var_Samp_Order_By>;
  variance?: InputMaybe<Laundry_Service_Payment_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "laundry_service.payment" */
export type Laundry_Service_Payment_Arr_Rel_Insert_Input = {
  data: Array<Laundry_Service_Payment_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Laundry_Service_Payment_On_Conflict>;
};

/** aggregate avg on columns */
export type Laundry_Service_Payment_Avg_Fields = {
  __typename?: 'laundry_service_payment_avg_fields';
  payment_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "laundry_service.payment" */
export type Laundry_Service_Payment_Avg_Order_By = {
  payment_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "laundry_service.payment". All fields are combined with a logical 'AND'. */
export type Laundry_Service_Payment_Bool_Exp = {
  PaymentTrans?: InputMaybe<Laundry_Service_Transaction_Bool_Exp>;
  _and?: InputMaybe<Array<Laundry_Service_Payment_Bool_Exp>>;
  _not?: InputMaybe<Laundry_Service_Payment_Bool_Exp>;
  _or?: InputMaybe<Array<Laundry_Service_Payment_Bool_Exp>>;
  payment_id?: InputMaybe<Int_Comparison_Exp>;
  payment_type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "laundry_service.payment" */
export enum Laundry_Service_Payment_Constraint {
  /** unique or primary key constraint on columns "payment_id" */
  PaymentPkey = 'payment_pkey'
}

/** input type for incrementing numeric columns in table "laundry_service.payment" */
export type Laundry_Service_Payment_Inc_Input = {
  payment_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "laundry_service.payment" */
export type Laundry_Service_Payment_Insert_Input = {
  PaymentTrans?: InputMaybe<Laundry_Service_Transaction_Arr_Rel_Insert_Input>;
  payment_id?: InputMaybe<Scalars['Int']>;
  payment_type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Laundry_Service_Payment_Max_Fields = {
  __typename?: 'laundry_service_payment_max_fields';
  payment_id?: Maybe<Scalars['Int']>;
  payment_type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "laundry_service.payment" */
export type Laundry_Service_Payment_Max_Order_By = {
  payment_id?: InputMaybe<Order_By>;
  payment_type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Laundry_Service_Payment_Min_Fields = {
  __typename?: 'laundry_service_payment_min_fields';
  payment_id?: Maybe<Scalars['Int']>;
  payment_type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "laundry_service.payment" */
export type Laundry_Service_Payment_Min_Order_By = {
  payment_id?: InputMaybe<Order_By>;
  payment_type?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "laundry_service.payment" */
export type Laundry_Service_Payment_Mutation_Response = {
  __typename?: 'laundry_service_payment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Laundry_Service_Payment>;
};

/** on_conflict condition type for table "laundry_service.payment" */
export type Laundry_Service_Payment_On_Conflict = {
  constraint: Laundry_Service_Payment_Constraint;
  update_columns?: Array<Laundry_Service_Payment_Update_Column>;
  where?: InputMaybe<Laundry_Service_Payment_Bool_Exp>;
};

/** Ordering options when selecting data from "laundry_service.payment". */
export type Laundry_Service_Payment_Order_By = {
  PaymentTrans_aggregate?: InputMaybe<Laundry_Service_Transaction_Aggregate_Order_By>;
  payment_id?: InputMaybe<Order_By>;
  payment_type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: laundry_service.payment */
export type Laundry_Service_Payment_Pk_Columns_Input = {
  payment_id: Scalars['Int'];
};

/** select columns of table "laundry_service.payment" */
export enum Laundry_Service_Payment_Select_Column {
  /** column name */
  PaymentId = 'payment_id',
  /** column name */
  PaymentType = 'payment_type'
}

/** input type for updating data in table "laundry_service.payment" */
export type Laundry_Service_Payment_Set_Input = {
  payment_id?: InputMaybe<Scalars['Int']>;
  payment_type?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Laundry_Service_Payment_Stddev_Fields = {
  __typename?: 'laundry_service_payment_stddev_fields';
  payment_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "laundry_service.payment" */
export type Laundry_Service_Payment_Stddev_Order_By = {
  payment_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Laundry_Service_Payment_Stddev_Pop_Fields = {
  __typename?: 'laundry_service_payment_stddev_pop_fields';
  payment_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "laundry_service.payment" */
export type Laundry_Service_Payment_Stddev_Pop_Order_By = {
  payment_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Laundry_Service_Payment_Stddev_Samp_Fields = {
  __typename?: 'laundry_service_payment_stddev_samp_fields';
  payment_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "laundry_service.payment" */
export type Laundry_Service_Payment_Stddev_Samp_Order_By = {
  payment_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "laundry_service_payment" */
export type Laundry_Service_Payment_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Laundry_Service_Payment_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Laundry_Service_Payment_Stream_Cursor_Value_Input = {
  payment_id?: InputMaybe<Scalars['Int']>;
  payment_type?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Laundry_Service_Payment_Sum_Fields = {
  __typename?: 'laundry_service_payment_sum_fields';
  payment_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "laundry_service.payment" */
export type Laundry_Service_Payment_Sum_Order_By = {
  payment_id?: InputMaybe<Order_By>;
};

/** update columns of table "laundry_service.payment" */
export enum Laundry_Service_Payment_Update_Column {
  /** column name */
  PaymentId = 'payment_id',
  /** column name */
  PaymentType = 'payment_type'
}

export type Laundry_Service_Payment_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Laundry_Service_Payment_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Laundry_Service_Payment_Set_Input>;
  where: Laundry_Service_Payment_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Laundry_Service_Payment_Var_Pop_Fields = {
  __typename?: 'laundry_service_payment_var_pop_fields';
  payment_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "laundry_service.payment" */
export type Laundry_Service_Payment_Var_Pop_Order_By = {
  payment_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Laundry_Service_Payment_Var_Samp_Fields = {
  __typename?: 'laundry_service_payment_var_samp_fields';
  payment_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "laundry_service.payment" */
export type Laundry_Service_Payment_Var_Samp_Order_By = {
  payment_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Laundry_Service_Payment_Variance_Fields = {
  __typename?: 'laundry_service_payment_variance_fields';
  payment_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "laundry_service.payment" */
export type Laundry_Service_Payment_Variance_Order_By = {
  payment_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "laundry_service.process" */
export type Laundry_Service_Process = {
  __typename?: 'laundry_service_process';
  /** An array relationship */
  ProcessManager: Array<Laundry_Service_Manager>;
  /** An aggregate relationship */
  ProcessManager_aggregate: Laundry_Service_Manager_Aggregate;
  /** An array relationship */
  ProcessOrderDetail: Array<Laundry_Service_Orderdetail>;
  /** An aggregate relationship */
  ProcessOrderDetail_aggregate: Laundry_Service_Orderdetail_Aggregate;
  /** An array relationship */
  ProcessStaff: Array<Laundry_Service_Staff>;
  /** An aggregate relationship */
  ProcessStaff_aggregate: Laundry_Service_Staff_Aggregate;
  manager_id: Scalars['Int'];
  order_detail_id: Scalars['Int'];
  process_id: Scalars['Int'];
  process_name: Scalars['String'];
  process_status: Scalars['String'];
  staff_id: Scalars['Int'];
};


/** columns and relationships of "laundry_service.process" */
export type Laundry_Service_ProcessProcessManagerArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Manager_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Manager_Order_By>>;
  where?: InputMaybe<Laundry_Service_Manager_Bool_Exp>;
};


/** columns and relationships of "laundry_service.process" */
export type Laundry_Service_ProcessProcessManager_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Manager_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Manager_Order_By>>;
  where?: InputMaybe<Laundry_Service_Manager_Bool_Exp>;
};


/** columns and relationships of "laundry_service.process" */
export type Laundry_Service_ProcessProcessOrderDetailArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orderdetail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orderdetail_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orderdetail_Bool_Exp>;
};


/** columns and relationships of "laundry_service.process" */
export type Laundry_Service_ProcessProcessOrderDetail_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orderdetail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orderdetail_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orderdetail_Bool_Exp>;
};


/** columns and relationships of "laundry_service.process" */
export type Laundry_Service_ProcessProcessStaffArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Staff_Order_By>>;
  where?: InputMaybe<Laundry_Service_Staff_Bool_Exp>;
};


/** columns and relationships of "laundry_service.process" */
export type Laundry_Service_ProcessProcessStaff_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Staff_Order_By>>;
  where?: InputMaybe<Laundry_Service_Staff_Bool_Exp>;
};

/** aggregated selection of "laundry_service.process" */
export type Laundry_Service_Process_Aggregate = {
  __typename?: 'laundry_service_process_aggregate';
  aggregate?: Maybe<Laundry_Service_Process_Aggregate_Fields>;
  nodes: Array<Laundry_Service_Process>;
};

/** aggregate fields of "laundry_service.process" */
export type Laundry_Service_Process_Aggregate_Fields = {
  __typename?: 'laundry_service_process_aggregate_fields';
  avg?: Maybe<Laundry_Service_Process_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Laundry_Service_Process_Max_Fields>;
  min?: Maybe<Laundry_Service_Process_Min_Fields>;
  stddev?: Maybe<Laundry_Service_Process_Stddev_Fields>;
  stddev_pop?: Maybe<Laundry_Service_Process_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Laundry_Service_Process_Stddev_Samp_Fields>;
  sum?: Maybe<Laundry_Service_Process_Sum_Fields>;
  var_pop?: Maybe<Laundry_Service_Process_Var_Pop_Fields>;
  var_samp?: Maybe<Laundry_Service_Process_Var_Samp_Fields>;
  variance?: Maybe<Laundry_Service_Process_Variance_Fields>;
};


/** aggregate fields of "laundry_service.process" */
export type Laundry_Service_Process_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Laundry_Service_Process_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "laundry_service.process" */
export type Laundry_Service_Process_Aggregate_Order_By = {
  avg?: InputMaybe<Laundry_Service_Process_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Laundry_Service_Process_Max_Order_By>;
  min?: InputMaybe<Laundry_Service_Process_Min_Order_By>;
  stddev?: InputMaybe<Laundry_Service_Process_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Laundry_Service_Process_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Laundry_Service_Process_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Laundry_Service_Process_Sum_Order_By>;
  var_pop?: InputMaybe<Laundry_Service_Process_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Laundry_Service_Process_Var_Samp_Order_By>;
  variance?: InputMaybe<Laundry_Service_Process_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "laundry_service.process" */
export type Laundry_Service_Process_Arr_Rel_Insert_Input = {
  data: Array<Laundry_Service_Process_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Laundry_Service_Process_On_Conflict>;
};

/** aggregate avg on columns */
export type Laundry_Service_Process_Avg_Fields = {
  __typename?: 'laundry_service_process_avg_fields';
  manager_id?: Maybe<Scalars['Float']>;
  order_detail_id?: Maybe<Scalars['Float']>;
  process_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "laundry_service.process" */
export type Laundry_Service_Process_Avg_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  order_detail_id?: InputMaybe<Order_By>;
  process_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "laundry_service.process". All fields are combined with a logical 'AND'. */
export type Laundry_Service_Process_Bool_Exp = {
  ProcessManager?: InputMaybe<Laundry_Service_Manager_Bool_Exp>;
  ProcessOrderDetail?: InputMaybe<Laundry_Service_Orderdetail_Bool_Exp>;
  ProcessStaff?: InputMaybe<Laundry_Service_Staff_Bool_Exp>;
  _and?: InputMaybe<Array<Laundry_Service_Process_Bool_Exp>>;
  _not?: InputMaybe<Laundry_Service_Process_Bool_Exp>;
  _or?: InputMaybe<Array<Laundry_Service_Process_Bool_Exp>>;
  manager_id?: InputMaybe<Int_Comparison_Exp>;
  order_detail_id?: InputMaybe<Int_Comparison_Exp>;
  process_id?: InputMaybe<Int_Comparison_Exp>;
  process_name?: InputMaybe<String_Comparison_Exp>;
  process_status?: InputMaybe<String_Comparison_Exp>;
  staff_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "laundry_service.process" */
export enum Laundry_Service_Process_Constraint {
  /** unique or primary key constraint on columns "process_id" */
  ProcessPkey = 'process_pkey'
}

/** input type for incrementing numeric columns in table "laundry_service.process" */
export type Laundry_Service_Process_Inc_Input = {
  manager_id?: InputMaybe<Scalars['Int']>;
  order_detail_id?: InputMaybe<Scalars['Int']>;
  process_id?: InputMaybe<Scalars['Int']>;
  staff_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "laundry_service.process" */
export type Laundry_Service_Process_Insert_Input = {
  ProcessManager?: InputMaybe<Laundry_Service_Manager_Arr_Rel_Insert_Input>;
  ProcessOrderDetail?: InputMaybe<Laundry_Service_Orderdetail_Arr_Rel_Insert_Input>;
  ProcessStaff?: InputMaybe<Laundry_Service_Staff_Arr_Rel_Insert_Input>;
  manager_id?: InputMaybe<Scalars['Int']>;
  order_detail_id?: InputMaybe<Scalars['Int']>;
  process_id?: InputMaybe<Scalars['Int']>;
  process_name?: InputMaybe<Scalars['String']>;
  process_status?: InputMaybe<Scalars['String']>;
  staff_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Laundry_Service_Process_Max_Fields = {
  __typename?: 'laundry_service_process_max_fields';
  manager_id?: Maybe<Scalars['Int']>;
  order_detail_id?: Maybe<Scalars['Int']>;
  process_id?: Maybe<Scalars['Int']>;
  process_name?: Maybe<Scalars['String']>;
  process_status?: Maybe<Scalars['String']>;
  staff_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "laundry_service.process" */
export type Laundry_Service_Process_Max_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  order_detail_id?: InputMaybe<Order_By>;
  process_id?: InputMaybe<Order_By>;
  process_name?: InputMaybe<Order_By>;
  process_status?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Laundry_Service_Process_Min_Fields = {
  __typename?: 'laundry_service_process_min_fields';
  manager_id?: Maybe<Scalars['Int']>;
  order_detail_id?: Maybe<Scalars['Int']>;
  process_id?: Maybe<Scalars['Int']>;
  process_name?: Maybe<Scalars['String']>;
  process_status?: Maybe<Scalars['String']>;
  staff_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "laundry_service.process" */
export type Laundry_Service_Process_Min_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  order_detail_id?: InputMaybe<Order_By>;
  process_id?: InputMaybe<Order_By>;
  process_name?: InputMaybe<Order_By>;
  process_status?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "laundry_service.process" */
export type Laundry_Service_Process_Mutation_Response = {
  __typename?: 'laundry_service_process_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Laundry_Service_Process>;
};

/** on_conflict condition type for table "laundry_service.process" */
export type Laundry_Service_Process_On_Conflict = {
  constraint: Laundry_Service_Process_Constraint;
  update_columns?: Array<Laundry_Service_Process_Update_Column>;
  where?: InputMaybe<Laundry_Service_Process_Bool_Exp>;
};

/** Ordering options when selecting data from "laundry_service.process". */
export type Laundry_Service_Process_Order_By = {
  ProcessManager_aggregate?: InputMaybe<Laundry_Service_Manager_Aggregate_Order_By>;
  ProcessOrderDetail_aggregate?: InputMaybe<Laundry_Service_Orderdetail_Aggregate_Order_By>;
  ProcessStaff_aggregate?: InputMaybe<Laundry_Service_Staff_Aggregate_Order_By>;
  manager_id?: InputMaybe<Order_By>;
  order_detail_id?: InputMaybe<Order_By>;
  process_id?: InputMaybe<Order_By>;
  process_name?: InputMaybe<Order_By>;
  process_status?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: laundry_service.process */
export type Laundry_Service_Process_Pk_Columns_Input = {
  process_id: Scalars['Int'];
};

/** select columns of table "laundry_service.process" */
export enum Laundry_Service_Process_Select_Column {
  /** column name */
  ManagerId = 'manager_id',
  /** column name */
  OrderDetailId = 'order_detail_id',
  /** column name */
  ProcessId = 'process_id',
  /** column name */
  ProcessName = 'process_name',
  /** column name */
  ProcessStatus = 'process_status',
  /** column name */
  StaffId = 'staff_id'
}

/** input type for updating data in table "laundry_service.process" */
export type Laundry_Service_Process_Set_Input = {
  manager_id?: InputMaybe<Scalars['Int']>;
  order_detail_id?: InputMaybe<Scalars['Int']>;
  process_id?: InputMaybe<Scalars['Int']>;
  process_name?: InputMaybe<Scalars['String']>;
  process_status?: InputMaybe<Scalars['String']>;
  staff_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Laundry_Service_Process_Stddev_Fields = {
  __typename?: 'laundry_service_process_stddev_fields';
  manager_id?: Maybe<Scalars['Float']>;
  order_detail_id?: Maybe<Scalars['Float']>;
  process_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "laundry_service.process" */
export type Laundry_Service_Process_Stddev_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  order_detail_id?: InputMaybe<Order_By>;
  process_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Laundry_Service_Process_Stddev_Pop_Fields = {
  __typename?: 'laundry_service_process_stddev_pop_fields';
  manager_id?: Maybe<Scalars['Float']>;
  order_detail_id?: Maybe<Scalars['Float']>;
  process_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "laundry_service.process" */
export type Laundry_Service_Process_Stddev_Pop_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  order_detail_id?: InputMaybe<Order_By>;
  process_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Laundry_Service_Process_Stddev_Samp_Fields = {
  __typename?: 'laundry_service_process_stddev_samp_fields';
  manager_id?: Maybe<Scalars['Float']>;
  order_detail_id?: Maybe<Scalars['Float']>;
  process_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "laundry_service.process" */
export type Laundry_Service_Process_Stddev_Samp_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  order_detail_id?: InputMaybe<Order_By>;
  process_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "laundry_service_process" */
export type Laundry_Service_Process_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Laundry_Service_Process_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Laundry_Service_Process_Stream_Cursor_Value_Input = {
  manager_id?: InputMaybe<Scalars['Int']>;
  order_detail_id?: InputMaybe<Scalars['Int']>;
  process_id?: InputMaybe<Scalars['Int']>;
  process_name?: InputMaybe<Scalars['String']>;
  process_status?: InputMaybe<Scalars['String']>;
  staff_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Laundry_Service_Process_Sum_Fields = {
  __typename?: 'laundry_service_process_sum_fields';
  manager_id?: Maybe<Scalars['Int']>;
  order_detail_id?: Maybe<Scalars['Int']>;
  process_id?: Maybe<Scalars['Int']>;
  staff_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "laundry_service.process" */
export type Laundry_Service_Process_Sum_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  order_detail_id?: InputMaybe<Order_By>;
  process_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
};

/** update columns of table "laundry_service.process" */
export enum Laundry_Service_Process_Update_Column {
  /** column name */
  ManagerId = 'manager_id',
  /** column name */
  OrderDetailId = 'order_detail_id',
  /** column name */
  ProcessId = 'process_id',
  /** column name */
  ProcessName = 'process_name',
  /** column name */
  ProcessStatus = 'process_status',
  /** column name */
  StaffId = 'staff_id'
}

export type Laundry_Service_Process_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Laundry_Service_Process_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Laundry_Service_Process_Set_Input>;
  where: Laundry_Service_Process_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Laundry_Service_Process_Var_Pop_Fields = {
  __typename?: 'laundry_service_process_var_pop_fields';
  manager_id?: Maybe<Scalars['Float']>;
  order_detail_id?: Maybe<Scalars['Float']>;
  process_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "laundry_service.process" */
export type Laundry_Service_Process_Var_Pop_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  order_detail_id?: InputMaybe<Order_By>;
  process_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Laundry_Service_Process_Var_Samp_Fields = {
  __typename?: 'laundry_service_process_var_samp_fields';
  manager_id?: Maybe<Scalars['Float']>;
  order_detail_id?: Maybe<Scalars['Float']>;
  process_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "laundry_service.process" */
export type Laundry_Service_Process_Var_Samp_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  order_detail_id?: InputMaybe<Order_By>;
  process_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Laundry_Service_Process_Variance_Fields = {
  __typename?: 'laundry_service_process_variance_fields';
  manager_id?: Maybe<Scalars['Float']>;
  order_detail_id?: Maybe<Scalars['Float']>;
  process_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "laundry_service.process" */
export type Laundry_Service_Process_Variance_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  order_detail_id?: InputMaybe<Order_By>;
  process_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "laundry_service.product" */
export type Laundry_Service_Product = {
  __typename?: 'laundry_service_product';
  /** An array relationship */
  ProductOrderDetail: Array<Laundry_Service_Orderdetail>;
  /** An aggregate relationship */
  ProductOrderDetail_aggregate: Laundry_Service_Orderdetail_Aggregate;
  product_id: Scalars['Int'];
  product_name: Scalars['String'];
  product_price?: Maybe<Scalars['float8']>;
};


/** columns and relationships of "laundry_service.product" */
export type Laundry_Service_ProductProductOrderDetailArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orderdetail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orderdetail_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orderdetail_Bool_Exp>;
};


/** columns and relationships of "laundry_service.product" */
export type Laundry_Service_ProductProductOrderDetail_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orderdetail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orderdetail_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orderdetail_Bool_Exp>;
};

/** aggregated selection of "laundry_service.product" */
export type Laundry_Service_Product_Aggregate = {
  __typename?: 'laundry_service_product_aggregate';
  aggregate?: Maybe<Laundry_Service_Product_Aggregate_Fields>;
  nodes: Array<Laundry_Service_Product>;
};

/** aggregate fields of "laundry_service.product" */
export type Laundry_Service_Product_Aggregate_Fields = {
  __typename?: 'laundry_service_product_aggregate_fields';
  avg?: Maybe<Laundry_Service_Product_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Laundry_Service_Product_Max_Fields>;
  min?: Maybe<Laundry_Service_Product_Min_Fields>;
  stddev?: Maybe<Laundry_Service_Product_Stddev_Fields>;
  stddev_pop?: Maybe<Laundry_Service_Product_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Laundry_Service_Product_Stddev_Samp_Fields>;
  sum?: Maybe<Laundry_Service_Product_Sum_Fields>;
  var_pop?: Maybe<Laundry_Service_Product_Var_Pop_Fields>;
  var_samp?: Maybe<Laundry_Service_Product_Var_Samp_Fields>;
  variance?: Maybe<Laundry_Service_Product_Variance_Fields>;
};


/** aggregate fields of "laundry_service.product" */
export type Laundry_Service_Product_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Laundry_Service_Product_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "laundry_service.product" */
export type Laundry_Service_Product_Aggregate_Order_By = {
  avg?: InputMaybe<Laundry_Service_Product_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Laundry_Service_Product_Max_Order_By>;
  min?: InputMaybe<Laundry_Service_Product_Min_Order_By>;
  stddev?: InputMaybe<Laundry_Service_Product_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Laundry_Service_Product_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Laundry_Service_Product_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Laundry_Service_Product_Sum_Order_By>;
  var_pop?: InputMaybe<Laundry_Service_Product_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Laundry_Service_Product_Var_Samp_Order_By>;
  variance?: InputMaybe<Laundry_Service_Product_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "laundry_service.product" */
export type Laundry_Service_Product_Arr_Rel_Insert_Input = {
  data: Array<Laundry_Service_Product_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Laundry_Service_Product_On_Conflict>;
};

/** aggregate avg on columns */
export type Laundry_Service_Product_Avg_Fields = {
  __typename?: 'laundry_service_product_avg_fields';
  product_id?: Maybe<Scalars['Float']>;
  product_price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "laundry_service.product" */
export type Laundry_Service_Product_Avg_Order_By = {
  product_id?: InputMaybe<Order_By>;
  product_price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "laundry_service.product". All fields are combined with a logical 'AND'. */
export type Laundry_Service_Product_Bool_Exp = {
  ProductOrderDetail?: InputMaybe<Laundry_Service_Orderdetail_Bool_Exp>;
  _and?: InputMaybe<Array<Laundry_Service_Product_Bool_Exp>>;
  _not?: InputMaybe<Laundry_Service_Product_Bool_Exp>;
  _or?: InputMaybe<Array<Laundry_Service_Product_Bool_Exp>>;
  product_id?: InputMaybe<Int_Comparison_Exp>;
  product_name?: InputMaybe<String_Comparison_Exp>;
  product_price?: InputMaybe<Float8_Comparison_Exp>;
};

/** unique or primary key constraints on table "laundry_service.product" */
export enum Laundry_Service_Product_Constraint {
  /** unique or primary key constraint on columns "product_id" */
  ProductPkey = 'product_pkey'
}

/** input type for incrementing numeric columns in table "laundry_service.product" */
export type Laundry_Service_Product_Inc_Input = {
  product_id?: InputMaybe<Scalars['Int']>;
  product_price?: InputMaybe<Scalars['float8']>;
};

/** input type for inserting data into table "laundry_service.product" */
export type Laundry_Service_Product_Insert_Input = {
  ProductOrderDetail?: InputMaybe<Laundry_Service_Orderdetail_Arr_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['Int']>;
  product_name?: InputMaybe<Scalars['String']>;
  product_price?: InputMaybe<Scalars['float8']>;
};

/** aggregate max on columns */
export type Laundry_Service_Product_Max_Fields = {
  __typename?: 'laundry_service_product_max_fields';
  product_id?: Maybe<Scalars['Int']>;
  product_name?: Maybe<Scalars['String']>;
  product_price?: Maybe<Scalars['float8']>;
};

/** order by max() on columns of table "laundry_service.product" */
export type Laundry_Service_Product_Max_Order_By = {
  product_id?: InputMaybe<Order_By>;
  product_name?: InputMaybe<Order_By>;
  product_price?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Laundry_Service_Product_Min_Fields = {
  __typename?: 'laundry_service_product_min_fields';
  product_id?: Maybe<Scalars['Int']>;
  product_name?: Maybe<Scalars['String']>;
  product_price?: Maybe<Scalars['float8']>;
};

/** order by min() on columns of table "laundry_service.product" */
export type Laundry_Service_Product_Min_Order_By = {
  product_id?: InputMaybe<Order_By>;
  product_name?: InputMaybe<Order_By>;
  product_price?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "laundry_service.product" */
export type Laundry_Service_Product_Mutation_Response = {
  __typename?: 'laundry_service_product_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Laundry_Service_Product>;
};

/** on_conflict condition type for table "laundry_service.product" */
export type Laundry_Service_Product_On_Conflict = {
  constraint: Laundry_Service_Product_Constraint;
  update_columns?: Array<Laundry_Service_Product_Update_Column>;
  where?: InputMaybe<Laundry_Service_Product_Bool_Exp>;
};

/** Ordering options when selecting data from "laundry_service.product". */
export type Laundry_Service_Product_Order_By = {
  ProductOrderDetail_aggregate?: InputMaybe<Laundry_Service_Orderdetail_Aggregate_Order_By>;
  product_id?: InputMaybe<Order_By>;
  product_name?: InputMaybe<Order_By>;
  product_price?: InputMaybe<Order_By>;
};

/** primary key columns input for table: laundry_service.product */
export type Laundry_Service_Product_Pk_Columns_Input = {
  product_id: Scalars['Int'];
};

/** select columns of table "laundry_service.product" */
export enum Laundry_Service_Product_Select_Column {
  /** column name */
  ProductId = 'product_id',
  /** column name */
  ProductName = 'product_name',
  /** column name */
  ProductPrice = 'product_price'
}

/** input type for updating data in table "laundry_service.product" */
export type Laundry_Service_Product_Set_Input = {
  product_id?: InputMaybe<Scalars['Int']>;
  product_name?: InputMaybe<Scalars['String']>;
  product_price?: InputMaybe<Scalars['float8']>;
};

/** aggregate stddev on columns */
export type Laundry_Service_Product_Stddev_Fields = {
  __typename?: 'laundry_service_product_stddev_fields';
  product_id?: Maybe<Scalars['Float']>;
  product_price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "laundry_service.product" */
export type Laundry_Service_Product_Stddev_Order_By = {
  product_id?: InputMaybe<Order_By>;
  product_price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Laundry_Service_Product_Stddev_Pop_Fields = {
  __typename?: 'laundry_service_product_stddev_pop_fields';
  product_id?: Maybe<Scalars['Float']>;
  product_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "laundry_service.product" */
export type Laundry_Service_Product_Stddev_Pop_Order_By = {
  product_id?: InputMaybe<Order_By>;
  product_price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Laundry_Service_Product_Stddev_Samp_Fields = {
  __typename?: 'laundry_service_product_stddev_samp_fields';
  product_id?: Maybe<Scalars['Float']>;
  product_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "laundry_service.product" */
export type Laundry_Service_Product_Stddev_Samp_Order_By = {
  product_id?: InputMaybe<Order_By>;
  product_price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "laundry_service_product" */
export type Laundry_Service_Product_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Laundry_Service_Product_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Laundry_Service_Product_Stream_Cursor_Value_Input = {
  product_id?: InputMaybe<Scalars['Int']>;
  product_name?: InputMaybe<Scalars['String']>;
  product_price?: InputMaybe<Scalars['float8']>;
};

/** aggregate sum on columns */
export type Laundry_Service_Product_Sum_Fields = {
  __typename?: 'laundry_service_product_sum_fields';
  product_id?: Maybe<Scalars['Int']>;
  product_price?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "laundry_service.product" */
export type Laundry_Service_Product_Sum_Order_By = {
  product_id?: InputMaybe<Order_By>;
  product_price?: InputMaybe<Order_By>;
};

/** update columns of table "laundry_service.product" */
export enum Laundry_Service_Product_Update_Column {
  /** column name */
  ProductId = 'product_id',
  /** column name */
  ProductName = 'product_name',
  /** column name */
  ProductPrice = 'product_price'
}

export type Laundry_Service_Product_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Laundry_Service_Product_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Laundry_Service_Product_Set_Input>;
  where: Laundry_Service_Product_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Laundry_Service_Product_Var_Pop_Fields = {
  __typename?: 'laundry_service_product_var_pop_fields';
  product_id?: Maybe<Scalars['Float']>;
  product_price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "laundry_service.product" */
export type Laundry_Service_Product_Var_Pop_Order_By = {
  product_id?: InputMaybe<Order_By>;
  product_price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Laundry_Service_Product_Var_Samp_Fields = {
  __typename?: 'laundry_service_product_var_samp_fields';
  product_id?: Maybe<Scalars['Float']>;
  product_price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "laundry_service.product" */
export type Laundry_Service_Product_Var_Samp_Order_By = {
  product_id?: InputMaybe<Order_By>;
  product_price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Laundry_Service_Product_Variance_Fields = {
  __typename?: 'laundry_service_product_variance_fields';
  product_id?: Maybe<Scalars['Float']>;
  product_price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "laundry_service.product" */
export type Laundry_Service_Product_Variance_Order_By = {
  product_id?: InputMaybe<Order_By>;
  product_price?: InputMaybe<Order_By>;
};

/** columns and relationships of "laundry_service.schedule" */
export type Laundry_Service_Schedule = {
  __typename?: 'laundry_service_schedule';
  /** An array relationship */
  ScheduleWSchedule: Array<Laundry_Service_Workschedule>;
  /** An aggregate relationship */
  ScheduleWSchedule_aggregate: Laundry_Service_Workschedule_Aggregate;
  date: Scalars['date'];
  schedule_id: Scalars['Int'];
  slot: Scalars['Int'];
};


/** columns and relationships of "laundry_service.schedule" */
export type Laundry_Service_ScheduleScheduleWScheduleArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Workschedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Workschedule_Order_By>>;
  where?: InputMaybe<Laundry_Service_Workschedule_Bool_Exp>;
};


/** columns and relationships of "laundry_service.schedule" */
export type Laundry_Service_ScheduleScheduleWSchedule_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Workschedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Workschedule_Order_By>>;
  where?: InputMaybe<Laundry_Service_Workschedule_Bool_Exp>;
};

/** aggregated selection of "laundry_service.schedule" */
export type Laundry_Service_Schedule_Aggregate = {
  __typename?: 'laundry_service_schedule_aggregate';
  aggregate?: Maybe<Laundry_Service_Schedule_Aggregate_Fields>;
  nodes: Array<Laundry_Service_Schedule>;
};

/** aggregate fields of "laundry_service.schedule" */
export type Laundry_Service_Schedule_Aggregate_Fields = {
  __typename?: 'laundry_service_schedule_aggregate_fields';
  avg?: Maybe<Laundry_Service_Schedule_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Laundry_Service_Schedule_Max_Fields>;
  min?: Maybe<Laundry_Service_Schedule_Min_Fields>;
  stddev?: Maybe<Laundry_Service_Schedule_Stddev_Fields>;
  stddev_pop?: Maybe<Laundry_Service_Schedule_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Laundry_Service_Schedule_Stddev_Samp_Fields>;
  sum?: Maybe<Laundry_Service_Schedule_Sum_Fields>;
  var_pop?: Maybe<Laundry_Service_Schedule_Var_Pop_Fields>;
  var_samp?: Maybe<Laundry_Service_Schedule_Var_Samp_Fields>;
  variance?: Maybe<Laundry_Service_Schedule_Variance_Fields>;
};


/** aggregate fields of "laundry_service.schedule" */
export type Laundry_Service_Schedule_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Laundry_Service_Schedule_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "laundry_service.schedule" */
export type Laundry_Service_Schedule_Aggregate_Order_By = {
  avg?: InputMaybe<Laundry_Service_Schedule_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Laundry_Service_Schedule_Max_Order_By>;
  min?: InputMaybe<Laundry_Service_Schedule_Min_Order_By>;
  stddev?: InputMaybe<Laundry_Service_Schedule_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Laundry_Service_Schedule_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Laundry_Service_Schedule_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Laundry_Service_Schedule_Sum_Order_By>;
  var_pop?: InputMaybe<Laundry_Service_Schedule_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Laundry_Service_Schedule_Var_Samp_Order_By>;
  variance?: InputMaybe<Laundry_Service_Schedule_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "laundry_service.schedule" */
export type Laundry_Service_Schedule_Arr_Rel_Insert_Input = {
  data: Array<Laundry_Service_Schedule_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Laundry_Service_Schedule_On_Conflict>;
};

/** aggregate avg on columns */
export type Laundry_Service_Schedule_Avg_Fields = {
  __typename?: 'laundry_service_schedule_avg_fields';
  schedule_id?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "laundry_service.schedule" */
export type Laundry_Service_Schedule_Avg_Order_By = {
  schedule_id?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "laundry_service.schedule". All fields are combined with a logical 'AND'. */
export type Laundry_Service_Schedule_Bool_Exp = {
  ScheduleWSchedule?: InputMaybe<Laundry_Service_Workschedule_Bool_Exp>;
  _and?: InputMaybe<Array<Laundry_Service_Schedule_Bool_Exp>>;
  _not?: InputMaybe<Laundry_Service_Schedule_Bool_Exp>;
  _or?: InputMaybe<Array<Laundry_Service_Schedule_Bool_Exp>>;
  date?: InputMaybe<Date_Comparison_Exp>;
  schedule_id?: InputMaybe<Int_Comparison_Exp>;
  slot?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "laundry_service.schedule" */
export enum Laundry_Service_Schedule_Constraint {
  /** unique or primary key constraint on columns "schedule_id" */
  SchedulePkey = 'schedule_pkey'
}

/** input type for incrementing numeric columns in table "laundry_service.schedule" */
export type Laundry_Service_Schedule_Inc_Input = {
  schedule_id?: InputMaybe<Scalars['Int']>;
  slot?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "laundry_service.schedule" */
export type Laundry_Service_Schedule_Insert_Input = {
  ScheduleWSchedule?: InputMaybe<Laundry_Service_Workschedule_Arr_Rel_Insert_Input>;
  date?: InputMaybe<Scalars['date']>;
  schedule_id?: InputMaybe<Scalars['Int']>;
  slot?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Laundry_Service_Schedule_Max_Fields = {
  __typename?: 'laundry_service_schedule_max_fields';
  date?: Maybe<Scalars['date']>;
  schedule_id?: Maybe<Scalars['Int']>;
  slot?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "laundry_service.schedule" */
export type Laundry_Service_Schedule_Max_Order_By = {
  date?: InputMaybe<Order_By>;
  schedule_id?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Laundry_Service_Schedule_Min_Fields = {
  __typename?: 'laundry_service_schedule_min_fields';
  date?: Maybe<Scalars['date']>;
  schedule_id?: Maybe<Scalars['Int']>;
  slot?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "laundry_service.schedule" */
export type Laundry_Service_Schedule_Min_Order_By = {
  date?: InputMaybe<Order_By>;
  schedule_id?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "laundry_service.schedule" */
export type Laundry_Service_Schedule_Mutation_Response = {
  __typename?: 'laundry_service_schedule_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Laundry_Service_Schedule>;
};

/** on_conflict condition type for table "laundry_service.schedule" */
export type Laundry_Service_Schedule_On_Conflict = {
  constraint: Laundry_Service_Schedule_Constraint;
  update_columns?: Array<Laundry_Service_Schedule_Update_Column>;
  where?: InputMaybe<Laundry_Service_Schedule_Bool_Exp>;
};

/** Ordering options when selecting data from "laundry_service.schedule". */
export type Laundry_Service_Schedule_Order_By = {
  ScheduleWSchedule_aggregate?: InputMaybe<Laundry_Service_Workschedule_Aggregate_Order_By>;
  date?: InputMaybe<Order_By>;
  schedule_id?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
};

/** primary key columns input for table: laundry_service.schedule */
export type Laundry_Service_Schedule_Pk_Columns_Input = {
  schedule_id: Scalars['Int'];
};

/** select columns of table "laundry_service.schedule" */
export enum Laundry_Service_Schedule_Select_Column {
  /** column name */
  Date = 'date',
  /** column name */
  ScheduleId = 'schedule_id',
  /** column name */
  Slot = 'slot'
}

/** input type for updating data in table "laundry_service.schedule" */
export type Laundry_Service_Schedule_Set_Input = {
  date?: InputMaybe<Scalars['date']>;
  schedule_id?: InputMaybe<Scalars['Int']>;
  slot?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Laundry_Service_Schedule_Stddev_Fields = {
  __typename?: 'laundry_service_schedule_stddev_fields';
  schedule_id?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "laundry_service.schedule" */
export type Laundry_Service_Schedule_Stddev_Order_By = {
  schedule_id?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Laundry_Service_Schedule_Stddev_Pop_Fields = {
  __typename?: 'laundry_service_schedule_stddev_pop_fields';
  schedule_id?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "laundry_service.schedule" */
export type Laundry_Service_Schedule_Stddev_Pop_Order_By = {
  schedule_id?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Laundry_Service_Schedule_Stddev_Samp_Fields = {
  __typename?: 'laundry_service_schedule_stddev_samp_fields';
  schedule_id?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "laundry_service.schedule" */
export type Laundry_Service_Schedule_Stddev_Samp_Order_By = {
  schedule_id?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "laundry_service_schedule" */
export type Laundry_Service_Schedule_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Laundry_Service_Schedule_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Laundry_Service_Schedule_Stream_Cursor_Value_Input = {
  date?: InputMaybe<Scalars['date']>;
  schedule_id?: InputMaybe<Scalars['Int']>;
  slot?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Laundry_Service_Schedule_Sum_Fields = {
  __typename?: 'laundry_service_schedule_sum_fields';
  schedule_id?: Maybe<Scalars['Int']>;
  slot?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "laundry_service.schedule" */
export type Laundry_Service_Schedule_Sum_Order_By = {
  schedule_id?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
};

/** update columns of table "laundry_service.schedule" */
export enum Laundry_Service_Schedule_Update_Column {
  /** column name */
  Date = 'date',
  /** column name */
  ScheduleId = 'schedule_id',
  /** column name */
  Slot = 'slot'
}

export type Laundry_Service_Schedule_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Laundry_Service_Schedule_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Laundry_Service_Schedule_Set_Input>;
  where: Laundry_Service_Schedule_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Laundry_Service_Schedule_Var_Pop_Fields = {
  __typename?: 'laundry_service_schedule_var_pop_fields';
  schedule_id?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "laundry_service.schedule" */
export type Laundry_Service_Schedule_Var_Pop_Order_By = {
  schedule_id?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Laundry_Service_Schedule_Var_Samp_Fields = {
  __typename?: 'laundry_service_schedule_var_samp_fields';
  schedule_id?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "laundry_service.schedule" */
export type Laundry_Service_Schedule_Var_Samp_Order_By = {
  schedule_id?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Laundry_Service_Schedule_Variance_Fields = {
  __typename?: 'laundry_service_schedule_variance_fields';
  schedule_id?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "laundry_service.schedule" */
export type Laundry_Service_Schedule_Variance_Order_By = {
  schedule_id?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
};

/** columns and relationships of "laundry_service.service" */
export type Laundry_Service_Service = {
  __typename?: 'laundry_service_service';
  /** An array relationship */
  ServiceOrderDetail: Array<Laundry_Service_Orderdetail>;
  /** An aggregate relationship */
  ServiceOrderDetail_aggregate: Laundry_Service_Orderdetail_Aggregate;
  /** An array relationship */
  ServiceVoucher: Array<Laundry_Service_Voucher>;
  /** An aggregate relationship */
  ServiceVoucher_aggregate: Laundry_Service_Voucher_Aggregate;
  max_weight: Scalars['Int'];
  min_weight: Scalars['Int'];
  service_description: Scalars['String'];
  service_id: Scalars['Int'];
  service_name: Scalars['String'];
  service_price: Scalars['float8'];
};


/** columns and relationships of "laundry_service.service" */
export type Laundry_Service_ServiceServiceOrderDetailArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orderdetail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orderdetail_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orderdetail_Bool_Exp>;
};


/** columns and relationships of "laundry_service.service" */
export type Laundry_Service_ServiceServiceOrderDetail_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orderdetail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orderdetail_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orderdetail_Bool_Exp>;
};


/** columns and relationships of "laundry_service.service" */
export type Laundry_Service_ServiceServiceVoucherArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Voucher_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Voucher_Order_By>>;
  where?: InputMaybe<Laundry_Service_Voucher_Bool_Exp>;
};


/** columns and relationships of "laundry_service.service" */
export type Laundry_Service_ServiceServiceVoucher_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Voucher_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Voucher_Order_By>>;
  where?: InputMaybe<Laundry_Service_Voucher_Bool_Exp>;
};

/** aggregated selection of "laundry_service.service" */
export type Laundry_Service_Service_Aggregate = {
  __typename?: 'laundry_service_service_aggregate';
  aggregate?: Maybe<Laundry_Service_Service_Aggregate_Fields>;
  nodes: Array<Laundry_Service_Service>;
};

/** aggregate fields of "laundry_service.service" */
export type Laundry_Service_Service_Aggregate_Fields = {
  __typename?: 'laundry_service_service_aggregate_fields';
  avg?: Maybe<Laundry_Service_Service_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Laundry_Service_Service_Max_Fields>;
  min?: Maybe<Laundry_Service_Service_Min_Fields>;
  stddev?: Maybe<Laundry_Service_Service_Stddev_Fields>;
  stddev_pop?: Maybe<Laundry_Service_Service_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Laundry_Service_Service_Stddev_Samp_Fields>;
  sum?: Maybe<Laundry_Service_Service_Sum_Fields>;
  var_pop?: Maybe<Laundry_Service_Service_Var_Pop_Fields>;
  var_samp?: Maybe<Laundry_Service_Service_Var_Samp_Fields>;
  variance?: Maybe<Laundry_Service_Service_Variance_Fields>;
};


/** aggregate fields of "laundry_service.service" */
export type Laundry_Service_Service_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Laundry_Service_Service_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "laundry_service.service" */
export type Laundry_Service_Service_Aggregate_Order_By = {
  avg?: InputMaybe<Laundry_Service_Service_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Laundry_Service_Service_Max_Order_By>;
  min?: InputMaybe<Laundry_Service_Service_Min_Order_By>;
  stddev?: InputMaybe<Laundry_Service_Service_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Laundry_Service_Service_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Laundry_Service_Service_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Laundry_Service_Service_Sum_Order_By>;
  var_pop?: InputMaybe<Laundry_Service_Service_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Laundry_Service_Service_Var_Samp_Order_By>;
  variance?: InputMaybe<Laundry_Service_Service_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "laundry_service.service" */
export type Laundry_Service_Service_Arr_Rel_Insert_Input = {
  data: Array<Laundry_Service_Service_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Laundry_Service_Service_On_Conflict>;
};

/** aggregate avg on columns */
export type Laundry_Service_Service_Avg_Fields = {
  __typename?: 'laundry_service_service_avg_fields';
  max_weight?: Maybe<Scalars['Float']>;
  min_weight?: Maybe<Scalars['Float']>;
  service_id?: Maybe<Scalars['Float']>;
  service_price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "laundry_service.service" */
export type Laundry_Service_Service_Avg_Order_By = {
  max_weight?: InputMaybe<Order_By>;
  min_weight?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  service_price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "laundry_service.service". All fields are combined with a logical 'AND'. */
export type Laundry_Service_Service_Bool_Exp = {
  ServiceOrderDetail?: InputMaybe<Laundry_Service_Orderdetail_Bool_Exp>;
  ServiceVoucher?: InputMaybe<Laundry_Service_Voucher_Bool_Exp>;
  _and?: InputMaybe<Array<Laundry_Service_Service_Bool_Exp>>;
  _not?: InputMaybe<Laundry_Service_Service_Bool_Exp>;
  _or?: InputMaybe<Array<Laundry_Service_Service_Bool_Exp>>;
  max_weight?: InputMaybe<Int_Comparison_Exp>;
  min_weight?: InputMaybe<Int_Comparison_Exp>;
  service_description?: InputMaybe<String_Comparison_Exp>;
  service_id?: InputMaybe<Int_Comparison_Exp>;
  service_name?: InputMaybe<String_Comparison_Exp>;
  service_price?: InputMaybe<Float8_Comparison_Exp>;
};

/** unique or primary key constraints on table "laundry_service.service" */
export enum Laundry_Service_Service_Constraint {
  /** unique or primary key constraint on columns "service_id" */
  ServicePkey = 'service_pkey'
}

/** input type for incrementing numeric columns in table "laundry_service.service" */
export type Laundry_Service_Service_Inc_Input = {
  max_weight?: InputMaybe<Scalars['Int']>;
  min_weight?: InputMaybe<Scalars['Int']>;
  service_id?: InputMaybe<Scalars['Int']>;
  service_price?: InputMaybe<Scalars['float8']>;
};

/** input type for inserting data into table "laundry_service.service" */
export type Laundry_Service_Service_Insert_Input = {
  ServiceOrderDetail?: InputMaybe<Laundry_Service_Orderdetail_Arr_Rel_Insert_Input>;
  ServiceVoucher?: InputMaybe<Laundry_Service_Voucher_Arr_Rel_Insert_Input>;
  max_weight?: InputMaybe<Scalars['Int']>;
  min_weight?: InputMaybe<Scalars['Int']>;
  service_description?: InputMaybe<Scalars['String']>;
  service_id?: InputMaybe<Scalars['Int']>;
  service_name?: InputMaybe<Scalars['String']>;
  service_price?: InputMaybe<Scalars['float8']>;
};

/** aggregate max on columns */
export type Laundry_Service_Service_Max_Fields = {
  __typename?: 'laundry_service_service_max_fields';
  max_weight?: Maybe<Scalars['Int']>;
  min_weight?: Maybe<Scalars['Int']>;
  service_description?: Maybe<Scalars['String']>;
  service_id?: Maybe<Scalars['Int']>;
  service_name?: Maybe<Scalars['String']>;
  service_price?: Maybe<Scalars['float8']>;
};

/** order by max() on columns of table "laundry_service.service" */
export type Laundry_Service_Service_Max_Order_By = {
  max_weight?: InputMaybe<Order_By>;
  min_weight?: InputMaybe<Order_By>;
  service_description?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  service_name?: InputMaybe<Order_By>;
  service_price?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Laundry_Service_Service_Min_Fields = {
  __typename?: 'laundry_service_service_min_fields';
  max_weight?: Maybe<Scalars['Int']>;
  min_weight?: Maybe<Scalars['Int']>;
  service_description?: Maybe<Scalars['String']>;
  service_id?: Maybe<Scalars['Int']>;
  service_name?: Maybe<Scalars['String']>;
  service_price?: Maybe<Scalars['float8']>;
};

/** order by min() on columns of table "laundry_service.service" */
export type Laundry_Service_Service_Min_Order_By = {
  max_weight?: InputMaybe<Order_By>;
  min_weight?: InputMaybe<Order_By>;
  service_description?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  service_name?: InputMaybe<Order_By>;
  service_price?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "laundry_service.service" */
export type Laundry_Service_Service_Mutation_Response = {
  __typename?: 'laundry_service_service_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Laundry_Service_Service>;
};

/** on_conflict condition type for table "laundry_service.service" */
export type Laundry_Service_Service_On_Conflict = {
  constraint: Laundry_Service_Service_Constraint;
  update_columns?: Array<Laundry_Service_Service_Update_Column>;
  where?: InputMaybe<Laundry_Service_Service_Bool_Exp>;
};

/** Ordering options when selecting data from "laundry_service.service". */
export type Laundry_Service_Service_Order_By = {
  ServiceOrderDetail_aggregate?: InputMaybe<Laundry_Service_Orderdetail_Aggregate_Order_By>;
  ServiceVoucher_aggregate?: InputMaybe<Laundry_Service_Voucher_Aggregate_Order_By>;
  max_weight?: InputMaybe<Order_By>;
  min_weight?: InputMaybe<Order_By>;
  service_description?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  service_name?: InputMaybe<Order_By>;
  service_price?: InputMaybe<Order_By>;
};

/** primary key columns input for table: laundry_service.service */
export type Laundry_Service_Service_Pk_Columns_Input = {
  service_id: Scalars['Int'];
};

/** select columns of table "laundry_service.service" */
export enum Laundry_Service_Service_Select_Column {
  /** column name */
  MaxWeight = 'max_weight',
  /** column name */
  MinWeight = 'min_weight',
  /** column name */
  ServiceDescription = 'service_description',
  /** column name */
  ServiceId = 'service_id',
  /** column name */
  ServiceName = 'service_name',
  /** column name */
  ServicePrice = 'service_price'
}

/** input type for updating data in table "laundry_service.service" */
export type Laundry_Service_Service_Set_Input = {
  max_weight?: InputMaybe<Scalars['Int']>;
  min_weight?: InputMaybe<Scalars['Int']>;
  service_description?: InputMaybe<Scalars['String']>;
  service_id?: InputMaybe<Scalars['Int']>;
  service_name?: InputMaybe<Scalars['String']>;
  service_price?: InputMaybe<Scalars['float8']>;
};

/** aggregate stddev on columns */
export type Laundry_Service_Service_Stddev_Fields = {
  __typename?: 'laundry_service_service_stddev_fields';
  max_weight?: Maybe<Scalars['Float']>;
  min_weight?: Maybe<Scalars['Float']>;
  service_id?: Maybe<Scalars['Float']>;
  service_price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "laundry_service.service" */
export type Laundry_Service_Service_Stddev_Order_By = {
  max_weight?: InputMaybe<Order_By>;
  min_weight?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  service_price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Laundry_Service_Service_Stddev_Pop_Fields = {
  __typename?: 'laundry_service_service_stddev_pop_fields';
  max_weight?: Maybe<Scalars['Float']>;
  min_weight?: Maybe<Scalars['Float']>;
  service_id?: Maybe<Scalars['Float']>;
  service_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "laundry_service.service" */
export type Laundry_Service_Service_Stddev_Pop_Order_By = {
  max_weight?: InputMaybe<Order_By>;
  min_weight?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  service_price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Laundry_Service_Service_Stddev_Samp_Fields = {
  __typename?: 'laundry_service_service_stddev_samp_fields';
  max_weight?: Maybe<Scalars['Float']>;
  min_weight?: Maybe<Scalars['Float']>;
  service_id?: Maybe<Scalars['Float']>;
  service_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "laundry_service.service" */
export type Laundry_Service_Service_Stddev_Samp_Order_By = {
  max_weight?: InputMaybe<Order_By>;
  min_weight?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  service_price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "laundry_service_service" */
export type Laundry_Service_Service_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Laundry_Service_Service_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Laundry_Service_Service_Stream_Cursor_Value_Input = {
  max_weight?: InputMaybe<Scalars['Int']>;
  min_weight?: InputMaybe<Scalars['Int']>;
  service_description?: InputMaybe<Scalars['String']>;
  service_id?: InputMaybe<Scalars['Int']>;
  service_name?: InputMaybe<Scalars['String']>;
  service_price?: InputMaybe<Scalars['float8']>;
};

/** aggregate sum on columns */
export type Laundry_Service_Service_Sum_Fields = {
  __typename?: 'laundry_service_service_sum_fields';
  max_weight?: Maybe<Scalars['Int']>;
  min_weight?: Maybe<Scalars['Int']>;
  service_id?: Maybe<Scalars['Int']>;
  service_price?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "laundry_service.service" */
export type Laundry_Service_Service_Sum_Order_By = {
  max_weight?: InputMaybe<Order_By>;
  min_weight?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  service_price?: InputMaybe<Order_By>;
};

/** update columns of table "laundry_service.service" */
export enum Laundry_Service_Service_Update_Column {
  /** column name */
  MaxWeight = 'max_weight',
  /** column name */
  MinWeight = 'min_weight',
  /** column name */
  ServiceDescription = 'service_description',
  /** column name */
  ServiceId = 'service_id',
  /** column name */
  ServiceName = 'service_name',
  /** column name */
  ServicePrice = 'service_price'
}

export type Laundry_Service_Service_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Laundry_Service_Service_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Laundry_Service_Service_Set_Input>;
  where: Laundry_Service_Service_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Laundry_Service_Service_Var_Pop_Fields = {
  __typename?: 'laundry_service_service_var_pop_fields';
  max_weight?: Maybe<Scalars['Float']>;
  min_weight?: Maybe<Scalars['Float']>;
  service_id?: Maybe<Scalars['Float']>;
  service_price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "laundry_service.service" */
export type Laundry_Service_Service_Var_Pop_Order_By = {
  max_weight?: InputMaybe<Order_By>;
  min_weight?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  service_price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Laundry_Service_Service_Var_Samp_Fields = {
  __typename?: 'laundry_service_service_var_samp_fields';
  max_weight?: Maybe<Scalars['Float']>;
  min_weight?: Maybe<Scalars['Float']>;
  service_id?: Maybe<Scalars['Float']>;
  service_price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "laundry_service.service" */
export type Laundry_Service_Service_Var_Samp_Order_By = {
  max_weight?: InputMaybe<Order_By>;
  min_weight?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  service_price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Laundry_Service_Service_Variance_Fields = {
  __typename?: 'laundry_service_service_variance_fields';
  max_weight?: Maybe<Scalars['Float']>;
  min_weight?: Maybe<Scalars['Float']>;
  service_id?: Maybe<Scalars['Float']>;
  service_price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "laundry_service.service" */
export type Laundry_Service_Service_Variance_Order_By = {
  max_weight?: InputMaybe<Order_By>;
  min_weight?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  service_price?: InputMaybe<Order_By>;
};

/** columns and relationships of "laundry_service.staff" */
export type Laundry_Service_Staff = {
  __typename?: 'laundry_service_staff';
  /** An array relationship */
  StaffManager: Array<Laundry_Service_Manager>;
  /** An aggregate relationship */
  StaffManager_aggregate: Laundry_Service_Manager_Aggregate;
  /** An array relationship */
  StaffOrder: Array<Laundry_Service_Orders>;
  /** An aggregate relationship */
  StaffOrder_aggregate: Laundry_Service_Orders_Aggregate;
  /** An array relationship */
  StaffProcess: Array<Laundry_Service_Process>;
  /** An aggregate relationship */
  StaffProcess_aggregate: Laundry_Service_Process_Aggregate;
  /** An array relationship */
  StaffVendor: Array<Laundry_Service_Vendor>;
  /** An aggregate relationship */
  StaffVendor_aggregate: Laundry_Service_Vendor_Aggregate;
  /** An array relationship */
  StaffWorkSchedules: Array<Laundry_Service_Workschedule>;
  /** An aggregate relationship */
  StaffWorkSchedules_aggregate: Laundry_Service_Workschedule_Aggregate;
  email: Scalars['String'];
  fullname: Scalars['String'];
  manager_id: Scalars['Int'];
  phone: Scalars['String'];
  staff_id: Scalars['Int'];
  staff_role: Scalars['String'];
  vendor_id: Scalars['Int'];
  working_status: Scalars['Boolean'];
};


/** columns and relationships of "laundry_service.staff" */
export type Laundry_Service_StaffStaffManagerArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Manager_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Manager_Order_By>>;
  where?: InputMaybe<Laundry_Service_Manager_Bool_Exp>;
};


/** columns and relationships of "laundry_service.staff" */
export type Laundry_Service_StaffStaffManager_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Manager_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Manager_Order_By>>;
  where?: InputMaybe<Laundry_Service_Manager_Bool_Exp>;
};


/** columns and relationships of "laundry_service.staff" */
export type Laundry_Service_StaffStaffOrderArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orders_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
};


/** columns and relationships of "laundry_service.staff" */
export type Laundry_Service_StaffStaffOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orders_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
};


/** columns and relationships of "laundry_service.staff" */
export type Laundry_Service_StaffStaffProcessArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Process_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Process_Order_By>>;
  where?: InputMaybe<Laundry_Service_Process_Bool_Exp>;
};


/** columns and relationships of "laundry_service.staff" */
export type Laundry_Service_StaffStaffProcess_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Process_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Process_Order_By>>;
  where?: InputMaybe<Laundry_Service_Process_Bool_Exp>;
};


/** columns and relationships of "laundry_service.staff" */
export type Laundry_Service_StaffStaffVendorArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Vendor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Vendor_Order_By>>;
  where?: InputMaybe<Laundry_Service_Vendor_Bool_Exp>;
};


/** columns and relationships of "laundry_service.staff" */
export type Laundry_Service_StaffStaffVendor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Vendor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Vendor_Order_By>>;
  where?: InputMaybe<Laundry_Service_Vendor_Bool_Exp>;
};


/** columns and relationships of "laundry_service.staff" */
export type Laundry_Service_StaffStaffWorkSchedulesArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Workschedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Workschedule_Order_By>>;
  where?: InputMaybe<Laundry_Service_Workschedule_Bool_Exp>;
};


/** columns and relationships of "laundry_service.staff" */
export type Laundry_Service_StaffStaffWorkSchedules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Workschedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Workschedule_Order_By>>;
  where?: InputMaybe<Laundry_Service_Workschedule_Bool_Exp>;
};

/** aggregated selection of "laundry_service.staff" */
export type Laundry_Service_Staff_Aggregate = {
  __typename?: 'laundry_service_staff_aggregate';
  aggregate?: Maybe<Laundry_Service_Staff_Aggregate_Fields>;
  nodes: Array<Laundry_Service_Staff>;
};

/** aggregate fields of "laundry_service.staff" */
export type Laundry_Service_Staff_Aggregate_Fields = {
  __typename?: 'laundry_service_staff_aggregate_fields';
  avg?: Maybe<Laundry_Service_Staff_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Laundry_Service_Staff_Max_Fields>;
  min?: Maybe<Laundry_Service_Staff_Min_Fields>;
  stddev?: Maybe<Laundry_Service_Staff_Stddev_Fields>;
  stddev_pop?: Maybe<Laundry_Service_Staff_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Laundry_Service_Staff_Stddev_Samp_Fields>;
  sum?: Maybe<Laundry_Service_Staff_Sum_Fields>;
  var_pop?: Maybe<Laundry_Service_Staff_Var_Pop_Fields>;
  var_samp?: Maybe<Laundry_Service_Staff_Var_Samp_Fields>;
  variance?: Maybe<Laundry_Service_Staff_Variance_Fields>;
};


/** aggregate fields of "laundry_service.staff" */
export type Laundry_Service_Staff_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Laundry_Service_Staff_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "laundry_service.staff" */
export type Laundry_Service_Staff_Aggregate_Order_By = {
  avg?: InputMaybe<Laundry_Service_Staff_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Laundry_Service_Staff_Max_Order_By>;
  min?: InputMaybe<Laundry_Service_Staff_Min_Order_By>;
  stddev?: InputMaybe<Laundry_Service_Staff_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Laundry_Service_Staff_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Laundry_Service_Staff_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Laundry_Service_Staff_Sum_Order_By>;
  var_pop?: InputMaybe<Laundry_Service_Staff_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Laundry_Service_Staff_Var_Samp_Order_By>;
  variance?: InputMaybe<Laundry_Service_Staff_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "laundry_service.staff" */
export type Laundry_Service_Staff_Arr_Rel_Insert_Input = {
  data: Array<Laundry_Service_Staff_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Laundry_Service_Staff_On_Conflict>;
};

/** aggregate avg on columns */
export type Laundry_Service_Staff_Avg_Fields = {
  __typename?: 'laundry_service_staff_avg_fields';
  manager_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "laundry_service.staff" */
export type Laundry_Service_Staff_Avg_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "laundry_service.staff". All fields are combined with a logical 'AND'. */
export type Laundry_Service_Staff_Bool_Exp = {
  StaffManager?: InputMaybe<Laundry_Service_Manager_Bool_Exp>;
  StaffOrder?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
  StaffProcess?: InputMaybe<Laundry_Service_Process_Bool_Exp>;
  StaffVendor?: InputMaybe<Laundry_Service_Vendor_Bool_Exp>;
  StaffWorkSchedules?: InputMaybe<Laundry_Service_Workschedule_Bool_Exp>;
  _and?: InputMaybe<Array<Laundry_Service_Staff_Bool_Exp>>;
  _not?: InputMaybe<Laundry_Service_Staff_Bool_Exp>;
  _or?: InputMaybe<Array<Laundry_Service_Staff_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  fullname?: InputMaybe<String_Comparison_Exp>;
  manager_id?: InputMaybe<Int_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  staff_id?: InputMaybe<Int_Comparison_Exp>;
  staff_role?: InputMaybe<String_Comparison_Exp>;
  vendor_id?: InputMaybe<Int_Comparison_Exp>;
  working_status?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "laundry_service.staff" */
export enum Laundry_Service_Staff_Constraint {
  /** unique or primary key constraint on columns "staff_id" */
  StaffPkey = 'staff_pkey'
}

/** input type for incrementing numeric columns in table "laundry_service.staff" */
export type Laundry_Service_Staff_Inc_Input = {
  manager_id?: InputMaybe<Scalars['Int']>;
  staff_id?: InputMaybe<Scalars['Int']>;
  vendor_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "laundry_service.staff" */
export type Laundry_Service_Staff_Insert_Input = {
  StaffManager?: InputMaybe<Laundry_Service_Manager_Arr_Rel_Insert_Input>;
  StaffOrder?: InputMaybe<Laundry_Service_Orders_Arr_Rel_Insert_Input>;
  StaffProcess?: InputMaybe<Laundry_Service_Process_Arr_Rel_Insert_Input>;
  StaffVendor?: InputMaybe<Laundry_Service_Vendor_Arr_Rel_Insert_Input>;
  StaffWorkSchedules?: InputMaybe<Laundry_Service_Workschedule_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  manager_id?: InputMaybe<Scalars['Int']>;
  phone?: InputMaybe<Scalars['String']>;
  staff_id?: InputMaybe<Scalars['Int']>;
  staff_role?: InputMaybe<Scalars['String']>;
  vendor_id?: InputMaybe<Scalars['Int']>;
  working_status?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Laundry_Service_Staff_Max_Fields = {
  __typename?: 'laundry_service_staff_max_fields';
  email?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  manager_id?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  staff_id?: Maybe<Scalars['Int']>;
  staff_role?: Maybe<Scalars['String']>;
  vendor_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "laundry_service.staff" */
export type Laundry_Service_Staff_Max_Order_By = {
  email?: InputMaybe<Order_By>;
  fullname?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  staff_role?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Laundry_Service_Staff_Min_Fields = {
  __typename?: 'laundry_service_staff_min_fields';
  email?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  manager_id?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  staff_id?: Maybe<Scalars['Int']>;
  staff_role?: Maybe<Scalars['String']>;
  vendor_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "laundry_service.staff" */
export type Laundry_Service_Staff_Min_Order_By = {
  email?: InputMaybe<Order_By>;
  fullname?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  staff_role?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "laundry_service.staff" */
export type Laundry_Service_Staff_Mutation_Response = {
  __typename?: 'laundry_service_staff_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Laundry_Service_Staff>;
};

/** on_conflict condition type for table "laundry_service.staff" */
export type Laundry_Service_Staff_On_Conflict = {
  constraint: Laundry_Service_Staff_Constraint;
  update_columns?: Array<Laundry_Service_Staff_Update_Column>;
  where?: InputMaybe<Laundry_Service_Staff_Bool_Exp>;
};

/** Ordering options when selecting data from "laundry_service.staff". */
export type Laundry_Service_Staff_Order_By = {
  StaffManager_aggregate?: InputMaybe<Laundry_Service_Manager_Aggregate_Order_By>;
  StaffOrder_aggregate?: InputMaybe<Laundry_Service_Orders_Aggregate_Order_By>;
  StaffProcess_aggregate?: InputMaybe<Laundry_Service_Process_Aggregate_Order_By>;
  StaffVendor_aggregate?: InputMaybe<Laundry_Service_Vendor_Aggregate_Order_By>;
  StaffWorkSchedules_aggregate?: InputMaybe<Laundry_Service_Workschedule_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  fullname?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  staff_role?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
  working_status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: laundry_service.staff */
export type Laundry_Service_Staff_Pk_Columns_Input = {
  staff_id: Scalars['Int'];
};

/** select columns of table "laundry_service.staff" */
export enum Laundry_Service_Staff_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Fullname = 'fullname',
  /** column name */
  ManagerId = 'manager_id',
  /** column name */
  Phone = 'phone',
  /** column name */
  StaffId = 'staff_id',
  /** column name */
  StaffRole = 'staff_role',
  /** column name */
  VendorId = 'vendor_id',
  /** column name */
  WorkingStatus = 'working_status'
}

/** input type for updating data in table "laundry_service.staff" */
export type Laundry_Service_Staff_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  manager_id?: InputMaybe<Scalars['Int']>;
  phone?: InputMaybe<Scalars['String']>;
  staff_id?: InputMaybe<Scalars['Int']>;
  staff_role?: InputMaybe<Scalars['String']>;
  vendor_id?: InputMaybe<Scalars['Int']>;
  working_status?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Laundry_Service_Staff_Stddev_Fields = {
  __typename?: 'laundry_service_staff_stddev_fields';
  manager_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "laundry_service.staff" */
export type Laundry_Service_Staff_Stddev_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Laundry_Service_Staff_Stddev_Pop_Fields = {
  __typename?: 'laundry_service_staff_stddev_pop_fields';
  manager_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "laundry_service.staff" */
export type Laundry_Service_Staff_Stddev_Pop_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Laundry_Service_Staff_Stddev_Samp_Fields = {
  __typename?: 'laundry_service_staff_stddev_samp_fields';
  manager_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "laundry_service.staff" */
export type Laundry_Service_Staff_Stddev_Samp_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "laundry_service_staff" */
export type Laundry_Service_Staff_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Laundry_Service_Staff_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Laundry_Service_Staff_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  manager_id?: InputMaybe<Scalars['Int']>;
  phone?: InputMaybe<Scalars['String']>;
  staff_id?: InputMaybe<Scalars['Int']>;
  staff_role?: InputMaybe<Scalars['String']>;
  vendor_id?: InputMaybe<Scalars['Int']>;
  working_status?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate sum on columns */
export type Laundry_Service_Staff_Sum_Fields = {
  __typename?: 'laundry_service_staff_sum_fields';
  manager_id?: Maybe<Scalars['Int']>;
  staff_id?: Maybe<Scalars['Int']>;
  vendor_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "laundry_service.staff" */
export type Laundry_Service_Staff_Sum_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** update columns of table "laundry_service.staff" */
export enum Laundry_Service_Staff_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Fullname = 'fullname',
  /** column name */
  ManagerId = 'manager_id',
  /** column name */
  Phone = 'phone',
  /** column name */
  StaffId = 'staff_id',
  /** column name */
  StaffRole = 'staff_role',
  /** column name */
  VendorId = 'vendor_id',
  /** column name */
  WorkingStatus = 'working_status'
}

export type Laundry_Service_Staff_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Laundry_Service_Staff_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Laundry_Service_Staff_Set_Input>;
  where: Laundry_Service_Staff_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Laundry_Service_Staff_Var_Pop_Fields = {
  __typename?: 'laundry_service_staff_var_pop_fields';
  manager_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "laundry_service.staff" */
export type Laundry_Service_Staff_Var_Pop_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Laundry_Service_Staff_Var_Samp_Fields = {
  __typename?: 'laundry_service_staff_var_samp_fields';
  manager_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "laundry_service.staff" */
export type Laundry_Service_Staff_Var_Samp_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Laundry_Service_Staff_Variance_Fields = {
  __typename?: 'laundry_service_staff_variance_fields';
  manager_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "laundry_service.staff" */
export type Laundry_Service_Staff_Variance_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "laundry_service.trackingorder" */
export type Laundry_Service_Trackingorder = {
  __typename?: 'laundry_service_trackingorder';
  /** An array relationship */
  TrackingOrder: Array<Laundry_Service_Orders>;
  /** An aggregate relationship */
  TrackingOrder_aggregate: Laundry_Service_Orders_Aggregate;
  order_id: Scalars['Int'];
  order_status: Scalars['String'];
  time: Scalars['timestamp'];
  tracking_id: Scalars['Int'];
};


/** columns and relationships of "laundry_service.trackingorder" */
export type Laundry_Service_TrackingorderTrackingOrderArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orders_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
};


/** columns and relationships of "laundry_service.trackingorder" */
export type Laundry_Service_TrackingorderTrackingOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orders_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
};

/** aggregated selection of "laundry_service.trackingorder" */
export type Laundry_Service_Trackingorder_Aggregate = {
  __typename?: 'laundry_service_trackingorder_aggregate';
  aggregate?: Maybe<Laundry_Service_Trackingorder_Aggregate_Fields>;
  nodes: Array<Laundry_Service_Trackingorder>;
};

/** aggregate fields of "laundry_service.trackingorder" */
export type Laundry_Service_Trackingorder_Aggregate_Fields = {
  __typename?: 'laundry_service_trackingorder_aggregate_fields';
  avg?: Maybe<Laundry_Service_Trackingorder_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Laundry_Service_Trackingorder_Max_Fields>;
  min?: Maybe<Laundry_Service_Trackingorder_Min_Fields>;
  stddev?: Maybe<Laundry_Service_Trackingorder_Stddev_Fields>;
  stddev_pop?: Maybe<Laundry_Service_Trackingorder_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Laundry_Service_Trackingorder_Stddev_Samp_Fields>;
  sum?: Maybe<Laundry_Service_Trackingorder_Sum_Fields>;
  var_pop?: Maybe<Laundry_Service_Trackingorder_Var_Pop_Fields>;
  var_samp?: Maybe<Laundry_Service_Trackingorder_Var_Samp_Fields>;
  variance?: Maybe<Laundry_Service_Trackingorder_Variance_Fields>;
};


/** aggregate fields of "laundry_service.trackingorder" */
export type Laundry_Service_Trackingorder_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Laundry_Service_Trackingorder_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "laundry_service.trackingorder" */
export type Laundry_Service_Trackingorder_Aggregate_Order_By = {
  avg?: InputMaybe<Laundry_Service_Trackingorder_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Laundry_Service_Trackingorder_Max_Order_By>;
  min?: InputMaybe<Laundry_Service_Trackingorder_Min_Order_By>;
  stddev?: InputMaybe<Laundry_Service_Trackingorder_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Laundry_Service_Trackingorder_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Laundry_Service_Trackingorder_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Laundry_Service_Trackingorder_Sum_Order_By>;
  var_pop?: InputMaybe<Laundry_Service_Trackingorder_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Laundry_Service_Trackingorder_Var_Samp_Order_By>;
  variance?: InputMaybe<Laundry_Service_Trackingorder_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "laundry_service.trackingorder" */
export type Laundry_Service_Trackingorder_Arr_Rel_Insert_Input = {
  data: Array<Laundry_Service_Trackingorder_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Laundry_Service_Trackingorder_On_Conflict>;
};

/** aggregate avg on columns */
export type Laundry_Service_Trackingorder_Avg_Fields = {
  __typename?: 'laundry_service_trackingorder_avg_fields';
  order_id?: Maybe<Scalars['Float']>;
  tracking_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "laundry_service.trackingorder" */
export type Laundry_Service_Trackingorder_Avg_Order_By = {
  order_id?: InputMaybe<Order_By>;
  tracking_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "laundry_service.trackingorder". All fields are combined with a logical 'AND'. */
export type Laundry_Service_Trackingorder_Bool_Exp = {
  TrackingOrder?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
  _and?: InputMaybe<Array<Laundry_Service_Trackingorder_Bool_Exp>>;
  _not?: InputMaybe<Laundry_Service_Trackingorder_Bool_Exp>;
  _or?: InputMaybe<Array<Laundry_Service_Trackingorder_Bool_Exp>>;
  order_id?: InputMaybe<Int_Comparison_Exp>;
  order_status?: InputMaybe<String_Comparison_Exp>;
  time?: InputMaybe<Timestamp_Comparison_Exp>;
  tracking_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "laundry_service.trackingorder" */
export enum Laundry_Service_Trackingorder_Constraint {
  /** unique or primary key constraint on columns "tracking_id" */
  TrackingorderPkey = 'trackingorder_pkey'
}

/** input type for incrementing numeric columns in table "laundry_service.trackingorder" */
export type Laundry_Service_Trackingorder_Inc_Input = {
  order_id?: InputMaybe<Scalars['Int']>;
  tracking_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "laundry_service.trackingorder" */
export type Laundry_Service_Trackingorder_Insert_Input = {
  TrackingOrder?: InputMaybe<Laundry_Service_Orders_Arr_Rel_Insert_Input>;
  order_id?: InputMaybe<Scalars['Int']>;
  order_status?: InputMaybe<Scalars['String']>;
  time?: InputMaybe<Scalars['timestamp']>;
  tracking_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Laundry_Service_Trackingorder_Max_Fields = {
  __typename?: 'laundry_service_trackingorder_max_fields';
  order_id?: Maybe<Scalars['Int']>;
  order_status?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['timestamp']>;
  tracking_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "laundry_service.trackingorder" */
export type Laundry_Service_Trackingorder_Max_Order_By = {
  order_id?: InputMaybe<Order_By>;
  order_status?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
  tracking_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Laundry_Service_Trackingorder_Min_Fields = {
  __typename?: 'laundry_service_trackingorder_min_fields';
  order_id?: Maybe<Scalars['Int']>;
  order_status?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['timestamp']>;
  tracking_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "laundry_service.trackingorder" */
export type Laundry_Service_Trackingorder_Min_Order_By = {
  order_id?: InputMaybe<Order_By>;
  order_status?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
  tracking_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "laundry_service.trackingorder" */
export type Laundry_Service_Trackingorder_Mutation_Response = {
  __typename?: 'laundry_service_trackingorder_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Laundry_Service_Trackingorder>;
};

/** on_conflict condition type for table "laundry_service.trackingorder" */
export type Laundry_Service_Trackingorder_On_Conflict = {
  constraint: Laundry_Service_Trackingorder_Constraint;
  update_columns?: Array<Laundry_Service_Trackingorder_Update_Column>;
  where?: InputMaybe<Laundry_Service_Trackingorder_Bool_Exp>;
};

/** Ordering options when selecting data from "laundry_service.trackingorder". */
export type Laundry_Service_Trackingorder_Order_By = {
  TrackingOrder_aggregate?: InputMaybe<Laundry_Service_Orders_Aggregate_Order_By>;
  order_id?: InputMaybe<Order_By>;
  order_status?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
  tracking_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: laundry_service.trackingorder */
export type Laundry_Service_Trackingorder_Pk_Columns_Input = {
  tracking_id: Scalars['Int'];
};

/** select columns of table "laundry_service.trackingorder" */
export enum Laundry_Service_Trackingorder_Select_Column {
  /** column name */
  OrderId = 'order_id',
  /** column name */
  OrderStatus = 'order_status',
  /** column name */
  Time = 'time',
  /** column name */
  TrackingId = 'tracking_id'
}

/** input type for updating data in table "laundry_service.trackingorder" */
export type Laundry_Service_Trackingorder_Set_Input = {
  order_id?: InputMaybe<Scalars['Int']>;
  order_status?: InputMaybe<Scalars['String']>;
  time?: InputMaybe<Scalars['timestamp']>;
  tracking_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Laundry_Service_Trackingorder_Stddev_Fields = {
  __typename?: 'laundry_service_trackingorder_stddev_fields';
  order_id?: Maybe<Scalars['Float']>;
  tracking_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "laundry_service.trackingorder" */
export type Laundry_Service_Trackingorder_Stddev_Order_By = {
  order_id?: InputMaybe<Order_By>;
  tracking_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Laundry_Service_Trackingorder_Stddev_Pop_Fields = {
  __typename?: 'laundry_service_trackingorder_stddev_pop_fields';
  order_id?: Maybe<Scalars['Float']>;
  tracking_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "laundry_service.trackingorder" */
export type Laundry_Service_Trackingorder_Stddev_Pop_Order_By = {
  order_id?: InputMaybe<Order_By>;
  tracking_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Laundry_Service_Trackingorder_Stddev_Samp_Fields = {
  __typename?: 'laundry_service_trackingorder_stddev_samp_fields';
  order_id?: Maybe<Scalars['Float']>;
  tracking_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "laundry_service.trackingorder" */
export type Laundry_Service_Trackingorder_Stddev_Samp_Order_By = {
  order_id?: InputMaybe<Order_By>;
  tracking_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "laundry_service_trackingorder" */
export type Laundry_Service_Trackingorder_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Laundry_Service_Trackingorder_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Laundry_Service_Trackingorder_Stream_Cursor_Value_Input = {
  order_id?: InputMaybe<Scalars['Int']>;
  order_status?: InputMaybe<Scalars['String']>;
  time?: InputMaybe<Scalars['timestamp']>;
  tracking_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Laundry_Service_Trackingorder_Sum_Fields = {
  __typename?: 'laundry_service_trackingorder_sum_fields';
  order_id?: Maybe<Scalars['Int']>;
  tracking_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "laundry_service.trackingorder" */
export type Laundry_Service_Trackingorder_Sum_Order_By = {
  order_id?: InputMaybe<Order_By>;
  tracking_id?: InputMaybe<Order_By>;
};

/** update columns of table "laundry_service.trackingorder" */
export enum Laundry_Service_Trackingorder_Update_Column {
  /** column name */
  OrderId = 'order_id',
  /** column name */
  OrderStatus = 'order_status',
  /** column name */
  Time = 'time',
  /** column name */
  TrackingId = 'tracking_id'
}

export type Laundry_Service_Trackingorder_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Laundry_Service_Trackingorder_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Laundry_Service_Trackingorder_Set_Input>;
  where: Laundry_Service_Trackingorder_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Laundry_Service_Trackingorder_Var_Pop_Fields = {
  __typename?: 'laundry_service_trackingorder_var_pop_fields';
  order_id?: Maybe<Scalars['Float']>;
  tracking_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "laundry_service.trackingorder" */
export type Laundry_Service_Trackingorder_Var_Pop_Order_By = {
  order_id?: InputMaybe<Order_By>;
  tracking_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Laundry_Service_Trackingorder_Var_Samp_Fields = {
  __typename?: 'laundry_service_trackingorder_var_samp_fields';
  order_id?: Maybe<Scalars['Float']>;
  tracking_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "laundry_service.trackingorder" */
export type Laundry_Service_Trackingorder_Var_Samp_Order_By = {
  order_id?: InputMaybe<Order_By>;
  tracking_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Laundry_Service_Trackingorder_Variance_Fields = {
  __typename?: 'laundry_service_trackingorder_variance_fields';
  order_id?: Maybe<Scalars['Float']>;
  tracking_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "laundry_service.trackingorder" */
export type Laundry_Service_Trackingorder_Variance_Order_By = {
  order_id?: InputMaybe<Order_By>;
  tracking_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "laundry_service.transaction" */
export type Laundry_Service_Transaction = {
  __typename?: 'laundry_service_transaction';
  /** An array relationship */
  TransOrder: Array<Laundry_Service_Orders>;
  /** An aggregate relationship */
  TransOrder_aggregate: Laundry_Service_Orders_Aggregate;
  /** An array relationship */
  TransPayment: Array<Laundry_Service_Payment>;
  /** An aggregate relationship */
  TransPayment_aggregate: Laundry_Service_Payment_Aggregate;
  order_id: Scalars['Int'];
  payment_id: Scalars['Int'];
  transaction_date: Scalars['timestamp'];
  transaction_id: Scalars['Int'];
};


/** columns and relationships of "laundry_service.transaction" */
export type Laundry_Service_TransactionTransOrderArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orders_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
};


/** columns and relationships of "laundry_service.transaction" */
export type Laundry_Service_TransactionTransOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orders_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
};


/** columns and relationships of "laundry_service.transaction" */
export type Laundry_Service_TransactionTransPaymentArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Payment_Order_By>>;
  where?: InputMaybe<Laundry_Service_Payment_Bool_Exp>;
};


/** columns and relationships of "laundry_service.transaction" */
export type Laundry_Service_TransactionTransPayment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Payment_Order_By>>;
  where?: InputMaybe<Laundry_Service_Payment_Bool_Exp>;
};

/** aggregated selection of "laundry_service.transaction" */
export type Laundry_Service_Transaction_Aggregate = {
  __typename?: 'laundry_service_transaction_aggregate';
  aggregate?: Maybe<Laundry_Service_Transaction_Aggregate_Fields>;
  nodes: Array<Laundry_Service_Transaction>;
};

/** aggregate fields of "laundry_service.transaction" */
export type Laundry_Service_Transaction_Aggregate_Fields = {
  __typename?: 'laundry_service_transaction_aggregate_fields';
  avg?: Maybe<Laundry_Service_Transaction_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Laundry_Service_Transaction_Max_Fields>;
  min?: Maybe<Laundry_Service_Transaction_Min_Fields>;
  stddev?: Maybe<Laundry_Service_Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Laundry_Service_Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Laundry_Service_Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Laundry_Service_Transaction_Sum_Fields>;
  var_pop?: Maybe<Laundry_Service_Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Laundry_Service_Transaction_Var_Samp_Fields>;
  variance?: Maybe<Laundry_Service_Transaction_Variance_Fields>;
};


/** aggregate fields of "laundry_service.transaction" */
export type Laundry_Service_Transaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Laundry_Service_Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "laundry_service.transaction" */
export type Laundry_Service_Transaction_Aggregate_Order_By = {
  avg?: InputMaybe<Laundry_Service_Transaction_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Laundry_Service_Transaction_Max_Order_By>;
  min?: InputMaybe<Laundry_Service_Transaction_Min_Order_By>;
  stddev?: InputMaybe<Laundry_Service_Transaction_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Laundry_Service_Transaction_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Laundry_Service_Transaction_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Laundry_Service_Transaction_Sum_Order_By>;
  var_pop?: InputMaybe<Laundry_Service_Transaction_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Laundry_Service_Transaction_Var_Samp_Order_By>;
  variance?: InputMaybe<Laundry_Service_Transaction_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "laundry_service.transaction" */
export type Laundry_Service_Transaction_Arr_Rel_Insert_Input = {
  data: Array<Laundry_Service_Transaction_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Laundry_Service_Transaction_On_Conflict>;
};

/** aggregate avg on columns */
export type Laundry_Service_Transaction_Avg_Fields = {
  __typename?: 'laundry_service_transaction_avg_fields';
  order_id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  transaction_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "laundry_service.transaction" */
export type Laundry_Service_Transaction_Avg_Order_By = {
  order_id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "laundry_service.transaction". All fields are combined with a logical 'AND'. */
export type Laundry_Service_Transaction_Bool_Exp = {
  TransOrder?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
  TransPayment?: InputMaybe<Laundry_Service_Payment_Bool_Exp>;
  _and?: InputMaybe<Array<Laundry_Service_Transaction_Bool_Exp>>;
  _not?: InputMaybe<Laundry_Service_Transaction_Bool_Exp>;
  _or?: InputMaybe<Array<Laundry_Service_Transaction_Bool_Exp>>;
  order_id?: InputMaybe<Int_Comparison_Exp>;
  payment_id?: InputMaybe<Int_Comparison_Exp>;
  transaction_date?: InputMaybe<Timestamp_Comparison_Exp>;
  transaction_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "laundry_service.transaction" */
export enum Laundry_Service_Transaction_Constraint {
  /** unique or primary key constraint on columns "transaction_id" */
  TransactionPkey = 'transaction_pkey'
}

/** input type for incrementing numeric columns in table "laundry_service.transaction" */
export type Laundry_Service_Transaction_Inc_Input = {
  order_id?: InputMaybe<Scalars['Int']>;
  payment_id?: InputMaybe<Scalars['Int']>;
  transaction_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "laundry_service.transaction" */
export type Laundry_Service_Transaction_Insert_Input = {
  TransOrder?: InputMaybe<Laundry_Service_Orders_Arr_Rel_Insert_Input>;
  TransPayment?: InputMaybe<Laundry_Service_Payment_Arr_Rel_Insert_Input>;
  order_id?: InputMaybe<Scalars['Int']>;
  payment_id?: InputMaybe<Scalars['Int']>;
  transaction_date?: InputMaybe<Scalars['timestamp']>;
  transaction_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Laundry_Service_Transaction_Max_Fields = {
  __typename?: 'laundry_service_transaction_max_fields';
  order_id?: Maybe<Scalars['Int']>;
  payment_id?: Maybe<Scalars['Int']>;
  transaction_date?: Maybe<Scalars['timestamp']>;
  transaction_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "laundry_service.transaction" */
export type Laundry_Service_Transaction_Max_Order_By = {
  order_id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  transaction_date?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Laundry_Service_Transaction_Min_Fields = {
  __typename?: 'laundry_service_transaction_min_fields';
  order_id?: Maybe<Scalars['Int']>;
  payment_id?: Maybe<Scalars['Int']>;
  transaction_date?: Maybe<Scalars['timestamp']>;
  transaction_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "laundry_service.transaction" */
export type Laundry_Service_Transaction_Min_Order_By = {
  order_id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  transaction_date?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "laundry_service.transaction" */
export type Laundry_Service_Transaction_Mutation_Response = {
  __typename?: 'laundry_service_transaction_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Laundry_Service_Transaction>;
};

/** on_conflict condition type for table "laundry_service.transaction" */
export type Laundry_Service_Transaction_On_Conflict = {
  constraint: Laundry_Service_Transaction_Constraint;
  update_columns?: Array<Laundry_Service_Transaction_Update_Column>;
  where?: InputMaybe<Laundry_Service_Transaction_Bool_Exp>;
};

/** Ordering options when selecting data from "laundry_service.transaction". */
export type Laundry_Service_Transaction_Order_By = {
  TransOrder_aggregate?: InputMaybe<Laundry_Service_Orders_Aggregate_Order_By>;
  TransPayment_aggregate?: InputMaybe<Laundry_Service_Payment_Aggregate_Order_By>;
  order_id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  transaction_date?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: laundry_service.transaction */
export type Laundry_Service_Transaction_Pk_Columns_Input = {
  transaction_id: Scalars['Int'];
};

/** select columns of table "laundry_service.transaction" */
export enum Laundry_Service_Transaction_Select_Column {
  /** column name */
  OrderId = 'order_id',
  /** column name */
  PaymentId = 'payment_id',
  /** column name */
  TransactionDate = 'transaction_date',
  /** column name */
  TransactionId = 'transaction_id'
}

/** input type for updating data in table "laundry_service.transaction" */
export type Laundry_Service_Transaction_Set_Input = {
  order_id?: InputMaybe<Scalars['Int']>;
  payment_id?: InputMaybe<Scalars['Int']>;
  transaction_date?: InputMaybe<Scalars['timestamp']>;
  transaction_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Laundry_Service_Transaction_Stddev_Fields = {
  __typename?: 'laundry_service_transaction_stddev_fields';
  order_id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  transaction_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "laundry_service.transaction" */
export type Laundry_Service_Transaction_Stddev_Order_By = {
  order_id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Laundry_Service_Transaction_Stddev_Pop_Fields = {
  __typename?: 'laundry_service_transaction_stddev_pop_fields';
  order_id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  transaction_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "laundry_service.transaction" */
export type Laundry_Service_Transaction_Stddev_Pop_Order_By = {
  order_id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Laundry_Service_Transaction_Stddev_Samp_Fields = {
  __typename?: 'laundry_service_transaction_stddev_samp_fields';
  order_id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  transaction_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "laundry_service.transaction" */
export type Laundry_Service_Transaction_Stddev_Samp_Order_By = {
  order_id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "laundry_service_transaction" */
export type Laundry_Service_Transaction_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Laundry_Service_Transaction_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Laundry_Service_Transaction_Stream_Cursor_Value_Input = {
  order_id?: InputMaybe<Scalars['Int']>;
  payment_id?: InputMaybe<Scalars['Int']>;
  transaction_date?: InputMaybe<Scalars['timestamp']>;
  transaction_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Laundry_Service_Transaction_Sum_Fields = {
  __typename?: 'laundry_service_transaction_sum_fields';
  order_id?: Maybe<Scalars['Int']>;
  payment_id?: Maybe<Scalars['Int']>;
  transaction_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "laundry_service.transaction" */
export type Laundry_Service_Transaction_Sum_Order_By = {
  order_id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** update columns of table "laundry_service.transaction" */
export enum Laundry_Service_Transaction_Update_Column {
  /** column name */
  OrderId = 'order_id',
  /** column name */
  PaymentId = 'payment_id',
  /** column name */
  TransactionDate = 'transaction_date',
  /** column name */
  TransactionId = 'transaction_id'
}

export type Laundry_Service_Transaction_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Laundry_Service_Transaction_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Laundry_Service_Transaction_Set_Input>;
  where: Laundry_Service_Transaction_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Laundry_Service_Transaction_Var_Pop_Fields = {
  __typename?: 'laundry_service_transaction_var_pop_fields';
  order_id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  transaction_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "laundry_service.transaction" */
export type Laundry_Service_Transaction_Var_Pop_Order_By = {
  order_id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Laundry_Service_Transaction_Var_Samp_Fields = {
  __typename?: 'laundry_service_transaction_var_samp_fields';
  order_id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  transaction_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "laundry_service.transaction" */
export type Laundry_Service_Transaction_Var_Samp_Order_By = {
  order_id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Laundry_Service_Transaction_Variance_Fields = {
  __typename?: 'laundry_service_transaction_variance_fields';
  order_id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  transaction_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "laundry_service.transaction" */
export type Laundry_Service_Transaction_Variance_Order_By = {
  order_id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "laundry_service.vendor" */
export type Laundry_Service_Vendor = {
  __typename?: 'laundry_service_vendor';
  /** An array relationship */
  VendorManager: Array<Laundry_Service_Manager>;
  /** An aggregate relationship */
  VendorManager_aggregate: Laundry_Service_Manager_Aggregate;
  /** An array relationship */
  VendorOrder: Array<Laundry_Service_Vendor>;
  /** An aggregate relationship */
  VendorOrder_aggregate: Laundry_Service_Vendor_Aggregate;
  /** An array relationship */
  VendorStaff: Array<Laundry_Service_Staff>;
  /** An aggregate relationship */
  VendorStaff_aggregate: Laundry_Service_Staff_Aggregate;
  city: Scalars['String'];
  district: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  street: Scalars['String'];
  vendor_id: Scalars['Int'];
  vendor_name: Scalars['String'];
  zip_code: Scalars['String'];
};


/** columns and relationships of "laundry_service.vendor" */
export type Laundry_Service_VendorVendorManagerArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Manager_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Manager_Order_By>>;
  where?: InputMaybe<Laundry_Service_Manager_Bool_Exp>;
};


/** columns and relationships of "laundry_service.vendor" */
export type Laundry_Service_VendorVendorManager_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Manager_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Manager_Order_By>>;
  where?: InputMaybe<Laundry_Service_Manager_Bool_Exp>;
};


/** columns and relationships of "laundry_service.vendor" */
export type Laundry_Service_VendorVendorOrderArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Vendor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Vendor_Order_By>>;
  where?: InputMaybe<Laundry_Service_Vendor_Bool_Exp>;
};


/** columns and relationships of "laundry_service.vendor" */
export type Laundry_Service_VendorVendorOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Vendor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Vendor_Order_By>>;
  where?: InputMaybe<Laundry_Service_Vendor_Bool_Exp>;
};


/** columns and relationships of "laundry_service.vendor" */
export type Laundry_Service_VendorVendorStaffArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Staff_Order_By>>;
  where?: InputMaybe<Laundry_Service_Staff_Bool_Exp>;
};


/** columns and relationships of "laundry_service.vendor" */
export type Laundry_Service_VendorVendorStaff_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Staff_Order_By>>;
  where?: InputMaybe<Laundry_Service_Staff_Bool_Exp>;
};

/** aggregated selection of "laundry_service.vendor" */
export type Laundry_Service_Vendor_Aggregate = {
  __typename?: 'laundry_service_vendor_aggregate';
  aggregate?: Maybe<Laundry_Service_Vendor_Aggregate_Fields>;
  nodes: Array<Laundry_Service_Vendor>;
};

/** aggregate fields of "laundry_service.vendor" */
export type Laundry_Service_Vendor_Aggregate_Fields = {
  __typename?: 'laundry_service_vendor_aggregate_fields';
  avg?: Maybe<Laundry_Service_Vendor_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Laundry_Service_Vendor_Max_Fields>;
  min?: Maybe<Laundry_Service_Vendor_Min_Fields>;
  stddev?: Maybe<Laundry_Service_Vendor_Stddev_Fields>;
  stddev_pop?: Maybe<Laundry_Service_Vendor_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Laundry_Service_Vendor_Stddev_Samp_Fields>;
  sum?: Maybe<Laundry_Service_Vendor_Sum_Fields>;
  var_pop?: Maybe<Laundry_Service_Vendor_Var_Pop_Fields>;
  var_samp?: Maybe<Laundry_Service_Vendor_Var_Samp_Fields>;
  variance?: Maybe<Laundry_Service_Vendor_Variance_Fields>;
};


/** aggregate fields of "laundry_service.vendor" */
export type Laundry_Service_Vendor_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Laundry_Service_Vendor_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "laundry_service.vendor" */
export type Laundry_Service_Vendor_Aggregate_Order_By = {
  avg?: InputMaybe<Laundry_Service_Vendor_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Laundry_Service_Vendor_Max_Order_By>;
  min?: InputMaybe<Laundry_Service_Vendor_Min_Order_By>;
  stddev?: InputMaybe<Laundry_Service_Vendor_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Laundry_Service_Vendor_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Laundry_Service_Vendor_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Laundry_Service_Vendor_Sum_Order_By>;
  var_pop?: InputMaybe<Laundry_Service_Vendor_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Laundry_Service_Vendor_Var_Samp_Order_By>;
  variance?: InputMaybe<Laundry_Service_Vendor_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "laundry_service.vendor" */
export type Laundry_Service_Vendor_Arr_Rel_Insert_Input = {
  data: Array<Laundry_Service_Vendor_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Laundry_Service_Vendor_On_Conflict>;
};

/** aggregate avg on columns */
export type Laundry_Service_Vendor_Avg_Fields = {
  __typename?: 'laundry_service_vendor_avg_fields';
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "laundry_service.vendor" */
export type Laundry_Service_Vendor_Avg_Order_By = {
  vendor_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "laundry_service.vendor". All fields are combined with a logical 'AND'. */
export type Laundry_Service_Vendor_Bool_Exp = {
  VendorManager?: InputMaybe<Laundry_Service_Manager_Bool_Exp>;
  VendorOrder?: InputMaybe<Laundry_Service_Vendor_Bool_Exp>;
  VendorStaff?: InputMaybe<Laundry_Service_Staff_Bool_Exp>;
  _and?: InputMaybe<Array<Laundry_Service_Vendor_Bool_Exp>>;
  _not?: InputMaybe<Laundry_Service_Vendor_Bool_Exp>;
  _or?: InputMaybe<Array<Laundry_Service_Vendor_Bool_Exp>>;
  city?: InputMaybe<String_Comparison_Exp>;
  district?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  street?: InputMaybe<String_Comparison_Exp>;
  vendor_id?: InputMaybe<Int_Comparison_Exp>;
  vendor_name?: InputMaybe<String_Comparison_Exp>;
  zip_code?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "laundry_service.vendor" */
export enum Laundry_Service_Vendor_Constraint {
  /** unique or primary key constraint on columns "vendor_id" */
  VendorPkey = 'vendor_pkey'
}

/** input type for incrementing numeric columns in table "laundry_service.vendor" */
export type Laundry_Service_Vendor_Inc_Input = {
  vendor_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "laundry_service.vendor" */
export type Laundry_Service_Vendor_Insert_Input = {
  VendorManager?: InputMaybe<Laundry_Service_Manager_Arr_Rel_Insert_Input>;
  VendorOrder?: InputMaybe<Laundry_Service_Vendor_Arr_Rel_Insert_Input>;
  VendorStaff?: InputMaybe<Laundry_Service_Staff_Arr_Rel_Insert_Input>;
  city?: InputMaybe<Scalars['String']>;
  district?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  vendor_id?: InputMaybe<Scalars['Int']>;
  vendor_name?: InputMaybe<Scalars['String']>;
  zip_code?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Laundry_Service_Vendor_Max_Fields = {
  __typename?: 'laundry_service_vendor_max_fields';
  city?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  vendor_id?: Maybe<Scalars['Int']>;
  vendor_name?: Maybe<Scalars['String']>;
  zip_code?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "laundry_service.vendor" */
export type Laundry_Service_Vendor_Max_Order_By = {
  city?: InputMaybe<Order_By>;
  district?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
  vendor_name?: InputMaybe<Order_By>;
  zip_code?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Laundry_Service_Vendor_Min_Fields = {
  __typename?: 'laundry_service_vendor_min_fields';
  city?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  vendor_id?: Maybe<Scalars['Int']>;
  vendor_name?: Maybe<Scalars['String']>;
  zip_code?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "laundry_service.vendor" */
export type Laundry_Service_Vendor_Min_Order_By = {
  city?: InputMaybe<Order_By>;
  district?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
  vendor_name?: InputMaybe<Order_By>;
  zip_code?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "laundry_service.vendor" */
export type Laundry_Service_Vendor_Mutation_Response = {
  __typename?: 'laundry_service_vendor_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Laundry_Service_Vendor>;
};

/** on_conflict condition type for table "laundry_service.vendor" */
export type Laundry_Service_Vendor_On_Conflict = {
  constraint: Laundry_Service_Vendor_Constraint;
  update_columns?: Array<Laundry_Service_Vendor_Update_Column>;
  where?: InputMaybe<Laundry_Service_Vendor_Bool_Exp>;
};

/** Ordering options when selecting data from "laundry_service.vendor". */
export type Laundry_Service_Vendor_Order_By = {
  VendorManager_aggregate?: InputMaybe<Laundry_Service_Manager_Aggregate_Order_By>;
  VendorOrder_aggregate?: InputMaybe<Laundry_Service_Vendor_Aggregate_Order_By>;
  VendorStaff_aggregate?: InputMaybe<Laundry_Service_Staff_Aggregate_Order_By>;
  city?: InputMaybe<Order_By>;
  district?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
  vendor_id?: InputMaybe<Order_By>;
  vendor_name?: InputMaybe<Order_By>;
  zip_code?: InputMaybe<Order_By>;
};

/** primary key columns input for table: laundry_service.vendor */
export type Laundry_Service_Vendor_Pk_Columns_Input = {
  vendor_id: Scalars['Int'];
};

/** select columns of table "laundry_service.vendor" */
export enum Laundry_Service_Vendor_Select_Column {
  /** column name */
  City = 'city',
  /** column name */
  District = 'district',
  /** column name */
  Email = 'email',
  /** column name */
  Phone = 'phone',
  /** column name */
  Street = 'street',
  /** column name */
  VendorId = 'vendor_id',
  /** column name */
  VendorName = 'vendor_name',
  /** column name */
  ZipCode = 'zip_code'
}

/** input type for updating data in table "laundry_service.vendor" */
export type Laundry_Service_Vendor_Set_Input = {
  city?: InputMaybe<Scalars['String']>;
  district?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  vendor_id?: InputMaybe<Scalars['Int']>;
  vendor_name?: InputMaybe<Scalars['String']>;
  zip_code?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Laundry_Service_Vendor_Stddev_Fields = {
  __typename?: 'laundry_service_vendor_stddev_fields';
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "laundry_service.vendor" */
export type Laundry_Service_Vendor_Stddev_Order_By = {
  vendor_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Laundry_Service_Vendor_Stddev_Pop_Fields = {
  __typename?: 'laundry_service_vendor_stddev_pop_fields';
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "laundry_service.vendor" */
export type Laundry_Service_Vendor_Stddev_Pop_Order_By = {
  vendor_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Laundry_Service_Vendor_Stddev_Samp_Fields = {
  __typename?: 'laundry_service_vendor_stddev_samp_fields';
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "laundry_service.vendor" */
export type Laundry_Service_Vendor_Stddev_Samp_Order_By = {
  vendor_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "laundry_service_vendor" */
export type Laundry_Service_Vendor_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Laundry_Service_Vendor_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Laundry_Service_Vendor_Stream_Cursor_Value_Input = {
  city?: InputMaybe<Scalars['String']>;
  district?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  vendor_id?: InputMaybe<Scalars['Int']>;
  vendor_name?: InputMaybe<Scalars['String']>;
  zip_code?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Laundry_Service_Vendor_Sum_Fields = {
  __typename?: 'laundry_service_vendor_sum_fields';
  vendor_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "laundry_service.vendor" */
export type Laundry_Service_Vendor_Sum_Order_By = {
  vendor_id?: InputMaybe<Order_By>;
};

/** update columns of table "laundry_service.vendor" */
export enum Laundry_Service_Vendor_Update_Column {
  /** column name */
  City = 'city',
  /** column name */
  District = 'district',
  /** column name */
  Email = 'email',
  /** column name */
  Phone = 'phone',
  /** column name */
  Street = 'street',
  /** column name */
  VendorId = 'vendor_id',
  /** column name */
  VendorName = 'vendor_name',
  /** column name */
  ZipCode = 'zip_code'
}

export type Laundry_Service_Vendor_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Laundry_Service_Vendor_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Laundry_Service_Vendor_Set_Input>;
  where: Laundry_Service_Vendor_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Laundry_Service_Vendor_Var_Pop_Fields = {
  __typename?: 'laundry_service_vendor_var_pop_fields';
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "laundry_service.vendor" */
export type Laundry_Service_Vendor_Var_Pop_Order_By = {
  vendor_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Laundry_Service_Vendor_Var_Samp_Fields = {
  __typename?: 'laundry_service_vendor_var_samp_fields';
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "laundry_service.vendor" */
export type Laundry_Service_Vendor_Var_Samp_Order_By = {
  vendor_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Laundry_Service_Vendor_Variance_Fields = {
  __typename?: 'laundry_service_vendor_variance_fields';
  vendor_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "laundry_service.vendor" */
export type Laundry_Service_Vendor_Variance_Order_By = {
  vendor_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "laundry_service.voucher" */
export type Laundry_Service_Voucher = {
  __typename?: 'laundry_service_voucher';
  /** An array relationship */
  VoucherOrder: Array<Laundry_Service_Orderdetail>;
  /** An aggregate relationship */
  VoucherOrder_aggregate: Laundry_Service_Orderdetail_Aggregate;
  /** An array relationship */
  VoucherService: Array<Laundry_Service_Service>;
  /** An aggregate relationship */
  VoucherService_aggregate: Laundry_Service_Service_Aggregate;
  condition_weight: Scalars['Int'];
  end_date: Scalars['date'];
  service_id: Scalars['Int'];
  start_date: Scalars['date'];
  voucher_description: Scalars['String'];
  voucher_id: Scalars['Int'];
  voucher_name: Scalars['String'];
  voucher_quantity: Scalars['Int'];
};


/** columns and relationships of "laundry_service.voucher" */
export type Laundry_Service_VoucherVoucherOrderArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orderdetail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orderdetail_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orderdetail_Bool_Exp>;
};


/** columns and relationships of "laundry_service.voucher" */
export type Laundry_Service_VoucherVoucherOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orderdetail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orderdetail_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orderdetail_Bool_Exp>;
};


/** columns and relationships of "laundry_service.voucher" */
export type Laundry_Service_VoucherVoucherServiceArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Service_Order_By>>;
  where?: InputMaybe<Laundry_Service_Service_Bool_Exp>;
};


/** columns and relationships of "laundry_service.voucher" */
export type Laundry_Service_VoucherVoucherService_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Service_Order_By>>;
  where?: InputMaybe<Laundry_Service_Service_Bool_Exp>;
};

/** aggregated selection of "laundry_service.voucher" */
export type Laundry_Service_Voucher_Aggregate = {
  __typename?: 'laundry_service_voucher_aggregate';
  aggregate?: Maybe<Laundry_Service_Voucher_Aggregate_Fields>;
  nodes: Array<Laundry_Service_Voucher>;
};

/** aggregate fields of "laundry_service.voucher" */
export type Laundry_Service_Voucher_Aggregate_Fields = {
  __typename?: 'laundry_service_voucher_aggregate_fields';
  avg?: Maybe<Laundry_Service_Voucher_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Laundry_Service_Voucher_Max_Fields>;
  min?: Maybe<Laundry_Service_Voucher_Min_Fields>;
  stddev?: Maybe<Laundry_Service_Voucher_Stddev_Fields>;
  stddev_pop?: Maybe<Laundry_Service_Voucher_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Laundry_Service_Voucher_Stddev_Samp_Fields>;
  sum?: Maybe<Laundry_Service_Voucher_Sum_Fields>;
  var_pop?: Maybe<Laundry_Service_Voucher_Var_Pop_Fields>;
  var_samp?: Maybe<Laundry_Service_Voucher_Var_Samp_Fields>;
  variance?: Maybe<Laundry_Service_Voucher_Variance_Fields>;
};


/** aggregate fields of "laundry_service.voucher" */
export type Laundry_Service_Voucher_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Laundry_Service_Voucher_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "laundry_service.voucher" */
export type Laundry_Service_Voucher_Aggregate_Order_By = {
  avg?: InputMaybe<Laundry_Service_Voucher_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Laundry_Service_Voucher_Max_Order_By>;
  min?: InputMaybe<Laundry_Service_Voucher_Min_Order_By>;
  stddev?: InputMaybe<Laundry_Service_Voucher_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Laundry_Service_Voucher_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Laundry_Service_Voucher_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Laundry_Service_Voucher_Sum_Order_By>;
  var_pop?: InputMaybe<Laundry_Service_Voucher_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Laundry_Service_Voucher_Var_Samp_Order_By>;
  variance?: InputMaybe<Laundry_Service_Voucher_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "laundry_service.voucher" */
export type Laundry_Service_Voucher_Arr_Rel_Insert_Input = {
  data: Array<Laundry_Service_Voucher_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Laundry_Service_Voucher_On_Conflict>;
};

/** aggregate avg on columns */
export type Laundry_Service_Voucher_Avg_Fields = {
  __typename?: 'laundry_service_voucher_avg_fields';
  condition_weight?: Maybe<Scalars['Float']>;
  service_id?: Maybe<Scalars['Float']>;
  voucher_id?: Maybe<Scalars['Float']>;
  voucher_quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "laundry_service.voucher" */
export type Laundry_Service_Voucher_Avg_Order_By = {
  condition_weight?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
  voucher_quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "laundry_service.voucher". All fields are combined with a logical 'AND'. */
export type Laundry_Service_Voucher_Bool_Exp = {
  VoucherOrder?: InputMaybe<Laundry_Service_Orderdetail_Bool_Exp>;
  VoucherService?: InputMaybe<Laundry_Service_Service_Bool_Exp>;
  _and?: InputMaybe<Array<Laundry_Service_Voucher_Bool_Exp>>;
  _not?: InputMaybe<Laundry_Service_Voucher_Bool_Exp>;
  _or?: InputMaybe<Array<Laundry_Service_Voucher_Bool_Exp>>;
  condition_weight?: InputMaybe<Int_Comparison_Exp>;
  end_date?: InputMaybe<Date_Comparison_Exp>;
  service_id?: InputMaybe<Int_Comparison_Exp>;
  start_date?: InputMaybe<Date_Comparison_Exp>;
  voucher_description?: InputMaybe<String_Comparison_Exp>;
  voucher_id?: InputMaybe<Int_Comparison_Exp>;
  voucher_name?: InputMaybe<String_Comparison_Exp>;
  voucher_quantity?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "laundry_service.voucher" */
export enum Laundry_Service_Voucher_Constraint {
  /** unique or primary key constraint on columns "voucher_id" */
  VoucherPkey = 'voucher_pkey'
}

/** input type for incrementing numeric columns in table "laundry_service.voucher" */
export type Laundry_Service_Voucher_Inc_Input = {
  condition_weight?: InputMaybe<Scalars['Int']>;
  service_id?: InputMaybe<Scalars['Int']>;
  voucher_id?: InputMaybe<Scalars['Int']>;
  voucher_quantity?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "laundry_service.voucher" */
export type Laundry_Service_Voucher_Insert_Input = {
  VoucherOrder?: InputMaybe<Laundry_Service_Orderdetail_Arr_Rel_Insert_Input>;
  VoucherService?: InputMaybe<Laundry_Service_Service_Arr_Rel_Insert_Input>;
  condition_weight?: InputMaybe<Scalars['Int']>;
  end_date?: InputMaybe<Scalars['date']>;
  service_id?: InputMaybe<Scalars['Int']>;
  start_date?: InputMaybe<Scalars['date']>;
  voucher_description?: InputMaybe<Scalars['String']>;
  voucher_id?: InputMaybe<Scalars['Int']>;
  voucher_name?: InputMaybe<Scalars['String']>;
  voucher_quantity?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Laundry_Service_Voucher_Max_Fields = {
  __typename?: 'laundry_service_voucher_max_fields';
  condition_weight?: Maybe<Scalars['Int']>;
  end_date?: Maybe<Scalars['date']>;
  service_id?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['date']>;
  voucher_description?: Maybe<Scalars['String']>;
  voucher_id?: Maybe<Scalars['Int']>;
  voucher_name?: Maybe<Scalars['String']>;
  voucher_quantity?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "laundry_service.voucher" */
export type Laundry_Service_Voucher_Max_Order_By = {
  condition_weight?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  voucher_description?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
  voucher_name?: InputMaybe<Order_By>;
  voucher_quantity?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Laundry_Service_Voucher_Min_Fields = {
  __typename?: 'laundry_service_voucher_min_fields';
  condition_weight?: Maybe<Scalars['Int']>;
  end_date?: Maybe<Scalars['date']>;
  service_id?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['date']>;
  voucher_description?: Maybe<Scalars['String']>;
  voucher_id?: Maybe<Scalars['Int']>;
  voucher_name?: Maybe<Scalars['String']>;
  voucher_quantity?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "laundry_service.voucher" */
export type Laundry_Service_Voucher_Min_Order_By = {
  condition_weight?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  voucher_description?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
  voucher_name?: InputMaybe<Order_By>;
  voucher_quantity?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "laundry_service.voucher" */
export type Laundry_Service_Voucher_Mutation_Response = {
  __typename?: 'laundry_service_voucher_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Laundry_Service_Voucher>;
};

/** on_conflict condition type for table "laundry_service.voucher" */
export type Laundry_Service_Voucher_On_Conflict = {
  constraint: Laundry_Service_Voucher_Constraint;
  update_columns?: Array<Laundry_Service_Voucher_Update_Column>;
  where?: InputMaybe<Laundry_Service_Voucher_Bool_Exp>;
};

/** Ordering options when selecting data from "laundry_service.voucher". */
export type Laundry_Service_Voucher_Order_By = {
  VoucherOrder_aggregate?: InputMaybe<Laundry_Service_Orderdetail_Aggregate_Order_By>;
  VoucherService_aggregate?: InputMaybe<Laundry_Service_Service_Aggregate_Order_By>;
  condition_weight?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  voucher_description?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
  voucher_name?: InputMaybe<Order_By>;
  voucher_quantity?: InputMaybe<Order_By>;
};

/** primary key columns input for table: laundry_service.voucher */
export type Laundry_Service_Voucher_Pk_Columns_Input = {
  voucher_id: Scalars['Int'];
};

/** select columns of table "laundry_service.voucher" */
export enum Laundry_Service_Voucher_Select_Column {
  /** column name */
  ConditionWeight = 'condition_weight',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  ServiceId = 'service_id',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  VoucherDescription = 'voucher_description',
  /** column name */
  VoucherId = 'voucher_id',
  /** column name */
  VoucherName = 'voucher_name',
  /** column name */
  VoucherQuantity = 'voucher_quantity'
}

/** input type for updating data in table "laundry_service.voucher" */
export type Laundry_Service_Voucher_Set_Input = {
  condition_weight?: InputMaybe<Scalars['Int']>;
  end_date?: InputMaybe<Scalars['date']>;
  service_id?: InputMaybe<Scalars['Int']>;
  start_date?: InputMaybe<Scalars['date']>;
  voucher_description?: InputMaybe<Scalars['String']>;
  voucher_id?: InputMaybe<Scalars['Int']>;
  voucher_name?: InputMaybe<Scalars['String']>;
  voucher_quantity?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Laundry_Service_Voucher_Stddev_Fields = {
  __typename?: 'laundry_service_voucher_stddev_fields';
  condition_weight?: Maybe<Scalars['Float']>;
  service_id?: Maybe<Scalars['Float']>;
  voucher_id?: Maybe<Scalars['Float']>;
  voucher_quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "laundry_service.voucher" */
export type Laundry_Service_Voucher_Stddev_Order_By = {
  condition_weight?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
  voucher_quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Laundry_Service_Voucher_Stddev_Pop_Fields = {
  __typename?: 'laundry_service_voucher_stddev_pop_fields';
  condition_weight?: Maybe<Scalars['Float']>;
  service_id?: Maybe<Scalars['Float']>;
  voucher_id?: Maybe<Scalars['Float']>;
  voucher_quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "laundry_service.voucher" */
export type Laundry_Service_Voucher_Stddev_Pop_Order_By = {
  condition_weight?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
  voucher_quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Laundry_Service_Voucher_Stddev_Samp_Fields = {
  __typename?: 'laundry_service_voucher_stddev_samp_fields';
  condition_weight?: Maybe<Scalars['Float']>;
  service_id?: Maybe<Scalars['Float']>;
  voucher_id?: Maybe<Scalars['Float']>;
  voucher_quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "laundry_service.voucher" */
export type Laundry_Service_Voucher_Stddev_Samp_Order_By = {
  condition_weight?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
  voucher_quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "laundry_service_voucher" */
export type Laundry_Service_Voucher_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Laundry_Service_Voucher_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Laundry_Service_Voucher_Stream_Cursor_Value_Input = {
  condition_weight?: InputMaybe<Scalars['Int']>;
  end_date?: InputMaybe<Scalars['date']>;
  service_id?: InputMaybe<Scalars['Int']>;
  start_date?: InputMaybe<Scalars['date']>;
  voucher_description?: InputMaybe<Scalars['String']>;
  voucher_id?: InputMaybe<Scalars['Int']>;
  voucher_name?: InputMaybe<Scalars['String']>;
  voucher_quantity?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Laundry_Service_Voucher_Sum_Fields = {
  __typename?: 'laundry_service_voucher_sum_fields';
  condition_weight?: Maybe<Scalars['Int']>;
  service_id?: Maybe<Scalars['Int']>;
  voucher_id?: Maybe<Scalars['Int']>;
  voucher_quantity?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "laundry_service.voucher" */
export type Laundry_Service_Voucher_Sum_Order_By = {
  condition_weight?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
  voucher_quantity?: InputMaybe<Order_By>;
};

/** update columns of table "laundry_service.voucher" */
export enum Laundry_Service_Voucher_Update_Column {
  /** column name */
  ConditionWeight = 'condition_weight',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  ServiceId = 'service_id',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  VoucherDescription = 'voucher_description',
  /** column name */
  VoucherId = 'voucher_id',
  /** column name */
  VoucherName = 'voucher_name',
  /** column name */
  VoucherQuantity = 'voucher_quantity'
}

export type Laundry_Service_Voucher_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Laundry_Service_Voucher_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Laundry_Service_Voucher_Set_Input>;
  where: Laundry_Service_Voucher_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Laundry_Service_Voucher_Var_Pop_Fields = {
  __typename?: 'laundry_service_voucher_var_pop_fields';
  condition_weight?: Maybe<Scalars['Float']>;
  service_id?: Maybe<Scalars['Float']>;
  voucher_id?: Maybe<Scalars['Float']>;
  voucher_quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "laundry_service.voucher" */
export type Laundry_Service_Voucher_Var_Pop_Order_By = {
  condition_weight?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
  voucher_quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Laundry_Service_Voucher_Var_Samp_Fields = {
  __typename?: 'laundry_service_voucher_var_samp_fields';
  condition_weight?: Maybe<Scalars['Float']>;
  service_id?: Maybe<Scalars['Float']>;
  voucher_id?: Maybe<Scalars['Float']>;
  voucher_quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "laundry_service.voucher" */
export type Laundry_Service_Voucher_Var_Samp_Order_By = {
  condition_weight?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
  voucher_quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Laundry_Service_Voucher_Variance_Fields = {
  __typename?: 'laundry_service_voucher_variance_fields';
  condition_weight?: Maybe<Scalars['Float']>;
  service_id?: Maybe<Scalars['Float']>;
  voucher_id?: Maybe<Scalars['Float']>;
  voucher_quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "laundry_service.voucher" */
export type Laundry_Service_Voucher_Variance_Order_By = {
  condition_weight?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
  voucher_quantity?: InputMaybe<Order_By>;
};

/** columns and relationships of "laundry_service.workschedule" */
export type Laundry_Service_Workschedule = {
  __typename?: 'laundry_service_workschedule';
  /** An array relationship */
  WScheduleManager: Array<Laundry_Service_Manager>;
  /** An aggregate relationship */
  WScheduleManager_aggregate: Laundry_Service_Manager_Aggregate;
  /** An array relationship */
  WScheduleSchedule: Array<Laundry_Service_Schedule>;
  /** An aggregate relationship */
  WScheduleSchedule_aggregate: Laundry_Service_Schedule_Aggregate;
  /** An array relationship */
  WScheduleStaff: Array<Laundry_Service_Staff>;
  /** An aggregate relationship */
  WScheduleStaff_aggregate: Laundry_Service_Staff_Aggregate;
  manager_id: Scalars['Int'];
  schedule_id: Scalars['Int'];
  staff_id: Scalars['Int'];
};


/** columns and relationships of "laundry_service.workschedule" */
export type Laundry_Service_WorkscheduleWScheduleManagerArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Manager_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Manager_Order_By>>;
  where?: InputMaybe<Laundry_Service_Manager_Bool_Exp>;
};


/** columns and relationships of "laundry_service.workschedule" */
export type Laundry_Service_WorkscheduleWScheduleManager_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Manager_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Manager_Order_By>>;
  where?: InputMaybe<Laundry_Service_Manager_Bool_Exp>;
};


/** columns and relationships of "laundry_service.workschedule" */
export type Laundry_Service_WorkscheduleWScheduleScheduleArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Schedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Schedule_Order_By>>;
  where?: InputMaybe<Laundry_Service_Schedule_Bool_Exp>;
};


/** columns and relationships of "laundry_service.workschedule" */
export type Laundry_Service_WorkscheduleWScheduleSchedule_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Schedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Schedule_Order_By>>;
  where?: InputMaybe<Laundry_Service_Schedule_Bool_Exp>;
};


/** columns and relationships of "laundry_service.workschedule" */
export type Laundry_Service_WorkscheduleWScheduleStaffArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Staff_Order_By>>;
  where?: InputMaybe<Laundry_Service_Staff_Bool_Exp>;
};


/** columns and relationships of "laundry_service.workschedule" */
export type Laundry_Service_WorkscheduleWScheduleStaff_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Staff_Order_By>>;
  where?: InputMaybe<Laundry_Service_Staff_Bool_Exp>;
};

/** aggregated selection of "laundry_service.workschedule" */
export type Laundry_Service_Workschedule_Aggregate = {
  __typename?: 'laundry_service_workschedule_aggregate';
  aggregate?: Maybe<Laundry_Service_Workschedule_Aggregate_Fields>;
  nodes: Array<Laundry_Service_Workschedule>;
};

/** aggregate fields of "laundry_service.workschedule" */
export type Laundry_Service_Workschedule_Aggregate_Fields = {
  __typename?: 'laundry_service_workschedule_aggregate_fields';
  avg?: Maybe<Laundry_Service_Workschedule_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Laundry_Service_Workschedule_Max_Fields>;
  min?: Maybe<Laundry_Service_Workschedule_Min_Fields>;
  stddev?: Maybe<Laundry_Service_Workschedule_Stddev_Fields>;
  stddev_pop?: Maybe<Laundry_Service_Workschedule_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Laundry_Service_Workschedule_Stddev_Samp_Fields>;
  sum?: Maybe<Laundry_Service_Workschedule_Sum_Fields>;
  var_pop?: Maybe<Laundry_Service_Workschedule_Var_Pop_Fields>;
  var_samp?: Maybe<Laundry_Service_Workschedule_Var_Samp_Fields>;
  variance?: Maybe<Laundry_Service_Workschedule_Variance_Fields>;
};


/** aggregate fields of "laundry_service.workschedule" */
export type Laundry_Service_Workschedule_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Laundry_Service_Workschedule_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "laundry_service.workschedule" */
export type Laundry_Service_Workschedule_Aggregate_Order_By = {
  avg?: InputMaybe<Laundry_Service_Workschedule_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Laundry_Service_Workschedule_Max_Order_By>;
  min?: InputMaybe<Laundry_Service_Workschedule_Min_Order_By>;
  stddev?: InputMaybe<Laundry_Service_Workschedule_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Laundry_Service_Workschedule_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Laundry_Service_Workschedule_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Laundry_Service_Workschedule_Sum_Order_By>;
  var_pop?: InputMaybe<Laundry_Service_Workschedule_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Laundry_Service_Workschedule_Var_Samp_Order_By>;
  variance?: InputMaybe<Laundry_Service_Workschedule_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "laundry_service.workschedule" */
export type Laundry_Service_Workschedule_Arr_Rel_Insert_Input = {
  data: Array<Laundry_Service_Workschedule_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Laundry_Service_Workschedule_On_Conflict>;
};

/** aggregate avg on columns */
export type Laundry_Service_Workschedule_Avg_Fields = {
  __typename?: 'laundry_service_workschedule_avg_fields';
  manager_id?: Maybe<Scalars['Float']>;
  schedule_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "laundry_service.workschedule" */
export type Laundry_Service_Workschedule_Avg_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  schedule_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "laundry_service.workschedule". All fields are combined with a logical 'AND'. */
export type Laundry_Service_Workschedule_Bool_Exp = {
  WScheduleManager?: InputMaybe<Laundry_Service_Manager_Bool_Exp>;
  WScheduleSchedule?: InputMaybe<Laundry_Service_Schedule_Bool_Exp>;
  WScheduleStaff?: InputMaybe<Laundry_Service_Staff_Bool_Exp>;
  _and?: InputMaybe<Array<Laundry_Service_Workschedule_Bool_Exp>>;
  _not?: InputMaybe<Laundry_Service_Workschedule_Bool_Exp>;
  _or?: InputMaybe<Array<Laundry_Service_Workschedule_Bool_Exp>>;
  manager_id?: InputMaybe<Int_Comparison_Exp>;
  schedule_id?: InputMaybe<Int_Comparison_Exp>;
  staff_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "laundry_service.workschedule" */
export enum Laundry_Service_Workschedule_Constraint {
  /** unique or primary key constraint on columns "schedule_id" */
  WorkschedulePkey = 'workschedule_pkey'
}

/** input type for incrementing numeric columns in table "laundry_service.workschedule" */
export type Laundry_Service_Workschedule_Inc_Input = {
  manager_id?: InputMaybe<Scalars['Int']>;
  schedule_id?: InputMaybe<Scalars['Int']>;
  staff_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "laundry_service.workschedule" */
export type Laundry_Service_Workschedule_Insert_Input = {
  WScheduleManager?: InputMaybe<Laundry_Service_Manager_Arr_Rel_Insert_Input>;
  WScheduleSchedule?: InputMaybe<Laundry_Service_Schedule_Arr_Rel_Insert_Input>;
  WScheduleStaff?: InputMaybe<Laundry_Service_Staff_Arr_Rel_Insert_Input>;
  manager_id?: InputMaybe<Scalars['Int']>;
  schedule_id?: InputMaybe<Scalars['Int']>;
  staff_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Laundry_Service_Workschedule_Max_Fields = {
  __typename?: 'laundry_service_workschedule_max_fields';
  manager_id?: Maybe<Scalars['Int']>;
  schedule_id?: Maybe<Scalars['Int']>;
  staff_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "laundry_service.workschedule" */
export type Laundry_Service_Workschedule_Max_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  schedule_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Laundry_Service_Workschedule_Min_Fields = {
  __typename?: 'laundry_service_workschedule_min_fields';
  manager_id?: Maybe<Scalars['Int']>;
  schedule_id?: Maybe<Scalars['Int']>;
  staff_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "laundry_service.workschedule" */
export type Laundry_Service_Workschedule_Min_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  schedule_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "laundry_service.workschedule" */
export type Laundry_Service_Workschedule_Mutation_Response = {
  __typename?: 'laundry_service_workschedule_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Laundry_Service_Workschedule>;
};

/** on_conflict condition type for table "laundry_service.workschedule" */
export type Laundry_Service_Workschedule_On_Conflict = {
  constraint: Laundry_Service_Workschedule_Constraint;
  update_columns?: Array<Laundry_Service_Workschedule_Update_Column>;
  where?: InputMaybe<Laundry_Service_Workschedule_Bool_Exp>;
};

/** Ordering options when selecting data from "laundry_service.workschedule". */
export type Laundry_Service_Workschedule_Order_By = {
  WScheduleManager_aggregate?: InputMaybe<Laundry_Service_Manager_Aggregate_Order_By>;
  WScheduleSchedule_aggregate?: InputMaybe<Laundry_Service_Schedule_Aggregate_Order_By>;
  WScheduleStaff_aggregate?: InputMaybe<Laundry_Service_Staff_Aggregate_Order_By>;
  manager_id?: InputMaybe<Order_By>;
  schedule_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: laundry_service.workschedule */
export type Laundry_Service_Workschedule_Pk_Columns_Input = {
  schedule_id: Scalars['Int'];
};

/** select columns of table "laundry_service.workschedule" */
export enum Laundry_Service_Workschedule_Select_Column {
  /** column name */
  ManagerId = 'manager_id',
  /** column name */
  ScheduleId = 'schedule_id',
  /** column name */
  StaffId = 'staff_id'
}

/** input type for updating data in table "laundry_service.workschedule" */
export type Laundry_Service_Workschedule_Set_Input = {
  manager_id?: InputMaybe<Scalars['Int']>;
  schedule_id?: InputMaybe<Scalars['Int']>;
  staff_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Laundry_Service_Workschedule_Stddev_Fields = {
  __typename?: 'laundry_service_workschedule_stddev_fields';
  manager_id?: Maybe<Scalars['Float']>;
  schedule_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "laundry_service.workschedule" */
export type Laundry_Service_Workschedule_Stddev_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  schedule_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Laundry_Service_Workschedule_Stddev_Pop_Fields = {
  __typename?: 'laundry_service_workschedule_stddev_pop_fields';
  manager_id?: Maybe<Scalars['Float']>;
  schedule_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "laundry_service.workschedule" */
export type Laundry_Service_Workschedule_Stddev_Pop_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  schedule_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Laundry_Service_Workschedule_Stddev_Samp_Fields = {
  __typename?: 'laundry_service_workschedule_stddev_samp_fields';
  manager_id?: Maybe<Scalars['Float']>;
  schedule_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "laundry_service.workschedule" */
export type Laundry_Service_Workschedule_Stddev_Samp_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  schedule_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "laundry_service_workschedule" */
export type Laundry_Service_Workschedule_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Laundry_Service_Workschedule_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Laundry_Service_Workschedule_Stream_Cursor_Value_Input = {
  manager_id?: InputMaybe<Scalars['Int']>;
  schedule_id?: InputMaybe<Scalars['Int']>;
  staff_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Laundry_Service_Workschedule_Sum_Fields = {
  __typename?: 'laundry_service_workschedule_sum_fields';
  manager_id?: Maybe<Scalars['Int']>;
  schedule_id?: Maybe<Scalars['Int']>;
  staff_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "laundry_service.workschedule" */
export type Laundry_Service_Workschedule_Sum_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  schedule_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
};

/** update columns of table "laundry_service.workschedule" */
export enum Laundry_Service_Workschedule_Update_Column {
  /** column name */
  ManagerId = 'manager_id',
  /** column name */
  ScheduleId = 'schedule_id',
  /** column name */
  StaffId = 'staff_id'
}

export type Laundry_Service_Workschedule_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Laundry_Service_Workschedule_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Laundry_Service_Workschedule_Set_Input>;
  where: Laundry_Service_Workschedule_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Laundry_Service_Workschedule_Var_Pop_Fields = {
  __typename?: 'laundry_service_workschedule_var_pop_fields';
  manager_id?: Maybe<Scalars['Float']>;
  schedule_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "laundry_service.workschedule" */
export type Laundry_Service_Workschedule_Var_Pop_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  schedule_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Laundry_Service_Workschedule_Var_Samp_Fields = {
  __typename?: 'laundry_service_workschedule_var_samp_fields';
  manager_id?: Maybe<Scalars['Float']>;
  schedule_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "laundry_service.workschedule" */
export type Laundry_Service_Workschedule_Var_Samp_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  schedule_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Laundry_Service_Workschedule_Variance_Fields = {
  __typename?: 'laundry_service_workschedule_variance_fields';
  manager_id?: Maybe<Scalars['Float']>;
  schedule_id?: Maybe<Scalars['Float']>;
  staff_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "laundry_service.workschedule" */
export type Laundry_Service_Workschedule_Variance_Order_By = {
  manager_id?: InputMaybe<Order_By>;
  schedule_id?: InputMaybe<Order_By>;
  staff_id?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "laundry_service.customers" */
  delete_laundry_service_customers?: Maybe<Laundry_Service_Customers_Mutation_Response>;
  /** delete single row from the table: "laundry_service.customers" */
  delete_laundry_service_customers_by_pk?: Maybe<Laundry_Service_Customers>;
  /** delete data from the table: "laundry_service.equipment" */
  delete_laundry_service_equipment?: Maybe<Laundry_Service_Equipment_Mutation_Response>;
  /** delete single row from the table: "laundry_service.equipment" */
  delete_laundry_service_equipment_by_pk?: Maybe<Laundry_Service_Equipment>;
  /** delete data from the table: "laundry_service.feedback" */
  delete_laundry_service_feedback?: Maybe<Laundry_Service_Feedback_Mutation_Response>;
  /** delete single row from the table: "laundry_service.feedback" */
  delete_laundry_service_feedback_by_pk?: Maybe<Laundry_Service_Feedback>;
  /** delete data from the table: "laundry_service.manager" */
  delete_laundry_service_manager?: Maybe<Laundry_Service_Manager_Mutation_Response>;
  /** delete single row from the table: "laundry_service.manager" */
  delete_laundry_service_manager_by_pk?: Maybe<Laundry_Service_Manager>;
  /** delete data from the table: "laundry_service.orderdetail" */
  delete_laundry_service_orderdetail?: Maybe<Laundry_Service_Orderdetail_Mutation_Response>;
  /** delete single row from the table: "laundry_service.orderdetail" */
  delete_laundry_service_orderdetail_by_pk?: Maybe<Laundry_Service_Orderdetail>;
  /** delete data from the table: "laundry_service.orders" */
  delete_laundry_service_orders?: Maybe<Laundry_Service_Orders_Mutation_Response>;
  /** delete single row from the table: "laundry_service.orders" */
  delete_laundry_service_orders_by_pk?: Maybe<Laundry_Service_Orders>;
  /** delete data from the table: "laundry_service.payment" */
  delete_laundry_service_payment?: Maybe<Laundry_Service_Payment_Mutation_Response>;
  /** delete single row from the table: "laundry_service.payment" */
  delete_laundry_service_payment_by_pk?: Maybe<Laundry_Service_Payment>;
  /** delete data from the table: "laundry_service.process" */
  delete_laundry_service_process?: Maybe<Laundry_Service_Process_Mutation_Response>;
  /** delete single row from the table: "laundry_service.process" */
  delete_laundry_service_process_by_pk?: Maybe<Laundry_Service_Process>;
  /** delete data from the table: "laundry_service.product" */
  delete_laundry_service_product?: Maybe<Laundry_Service_Product_Mutation_Response>;
  /** delete single row from the table: "laundry_service.product" */
  delete_laundry_service_product_by_pk?: Maybe<Laundry_Service_Product>;
  /** delete data from the table: "laundry_service.schedule" */
  delete_laundry_service_schedule?: Maybe<Laundry_Service_Schedule_Mutation_Response>;
  /** delete single row from the table: "laundry_service.schedule" */
  delete_laundry_service_schedule_by_pk?: Maybe<Laundry_Service_Schedule>;
  /** delete data from the table: "laundry_service.service" */
  delete_laundry_service_service?: Maybe<Laundry_Service_Service_Mutation_Response>;
  /** delete single row from the table: "laundry_service.service" */
  delete_laundry_service_service_by_pk?: Maybe<Laundry_Service_Service>;
  /** delete data from the table: "laundry_service.staff" */
  delete_laundry_service_staff?: Maybe<Laundry_Service_Staff_Mutation_Response>;
  /** delete single row from the table: "laundry_service.staff" */
  delete_laundry_service_staff_by_pk?: Maybe<Laundry_Service_Staff>;
  /** delete data from the table: "laundry_service.trackingorder" */
  delete_laundry_service_trackingorder?: Maybe<Laundry_Service_Trackingorder_Mutation_Response>;
  /** delete single row from the table: "laundry_service.trackingorder" */
  delete_laundry_service_trackingorder_by_pk?: Maybe<Laundry_Service_Trackingorder>;
  /** delete data from the table: "laundry_service.transaction" */
  delete_laundry_service_transaction?: Maybe<Laundry_Service_Transaction_Mutation_Response>;
  /** delete single row from the table: "laundry_service.transaction" */
  delete_laundry_service_transaction_by_pk?: Maybe<Laundry_Service_Transaction>;
  /** delete data from the table: "laundry_service.vendor" */
  delete_laundry_service_vendor?: Maybe<Laundry_Service_Vendor_Mutation_Response>;
  /** delete single row from the table: "laundry_service.vendor" */
  delete_laundry_service_vendor_by_pk?: Maybe<Laundry_Service_Vendor>;
  /** delete data from the table: "laundry_service.voucher" */
  delete_laundry_service_voucher?: Maybe<Laundry_Service_Voucher_Mutation_Response>;
  /** delete single row from the table: "laundry_service.voucher" */
  delete_laundry_service_voucher_by_pk?: Maybe<Laundry_Service_Voucher>;
  /** delete data from the table: "laundry_service.workschedule" */
  delete_laundry_service_workschedule?: Maybe<Laundry_Service_Workschedule_Mutation_Response>;
  /** delete single row from the table: "laundry_service.workschedule" */
  delete_laundry_service_workschedule_by_pk?: Maybe<Laundry_Service_Workschedule>;
  /** insert data into the table: "laundry_service.customers" */
  insert_laundry_service_customers?: Maybe<Laundry_Service_Customers_Mutation_Response>;
  /** insert a single row into the table: "laundry_service.customers" */
  insert_laundry_service_customers_one?: Maybe<Laundry_Service_Customers>;
  /** insert data into the table: "laundry_service.equipment" */
  insert_laundry_service_equipment?: Maybe<Laundry_Service_Equipment_Mutation_Response>;
  /** insert a single row into the table: "laundry_service.equipment" */
  insert_laundry_service_equipment_one?: Maybe<Laundry_Service_Equipment>;
  /** insert data into the table: "laundry_service.feedback" */
  insert_laundry_service_feedback?: Maybe<Laundry_Service_Feedback_Mutation_Response>;
  /** insert a single row into the table: "laundry_service.feedback" */
  insert_laundry_service_feedback_one?: Maybe<Laundry_Service_Feedback>;
  /** insert data into the table: "laundry_service.manager" */
  insert_laundry_service_manager?: Maybe<Laundry_Service_Manager_Mutation_Response>;
  /** insert a single row into the table: "laundry_service.manager" */
  insert_laundry_service_manager_one?: Maybe<Laundry_Service_Manager>;
  /** insert data into the table: "laundry_service.orderdetail" */
  insert_laundry_service_orderdetail?: Maybe<Laundry_Service_Orderdetail_Mutation_Response>;
  /** insert a single row into the table: "laundry_service.orderdetail" */
  insert_laundry_service_orderdetail_one?: Maybe<Laundry_Service_Orderdetail>;
  /** insert data into the table: "laundry_service.orders" */
  insert_laundry_service_orders?: Maybe<Laundry_Service_Orders_Mutation_Response>;
  /** insert a single row into the table: "laundry_service.orders" */
  insert_laundry_service_orders_one?: Maybe<Laundry_Service_Orders>;
  /** insert data into the table: "laundry_service.payment" */
  insert_laundry_service_payment?: Maybe<Laundry_Service_Payment_Mutation_Response>;
  /** insert a single row into the table: "laundry_service.payment" */
  insert_laundry_service_payment_one?: Maybe<Laundry_Service_Payment>;
  /** insert data into the table: "laundry_service.process" */
  insert_laundry_service_process?: Maybe<Laundry_Service_Process_Mutation_Response>;
  /** insert a single row into the table: "laundry_service.process" */
  insert_laundry_service_process_one?: Maybe<Laundry_Service_Process>;
  /** insert data into the table: "laundry_service.product" */
  insert_laundry_service_product?: Maybe<Laundry_Service_Product_Mutation_Response>;
  /** insert a single row into the table: "laundry_service.product" */
  insert_laundry_service_product_one?: Maybe<Laundry_Service_Product>;
  /** insert data into the table: "laundry_service.schedule" */
  insert_laundry_service_schedule?: Maybe<Laundry_Service_Schedule_Mutation_Response>;
  /** insert a single row into the table: "laundry_service.schedule" */
  insert_laundry_service_schedule_one?: Maybe<Laundry_Service_Schedule>;
  /** insert data into the table: "laundry_service.service" */
  insert_laundry_service_service?: Maybe<Laundry_Service_Service_Mutation_Response>;
  /** insert a single row into the table: "laundry_service.service" */
  insert_laundry_service_service_one?: Maybe<Laundry_Service_Service>;
  /** insert data into the table: "laundry_service.staff" */
  insert_laundry_service_staff?: Maybe<Laundry_Service_Staff_Mutation_Response>;
  /** insert a single row into the table: "laundry_service.staff" */
  insert_laundry_service_staff_one?: Maybe<Laundry_Service_Staff>;
  /** insert data into the table: "laundry_service.trackingorder" */
  insert_laundry_service_trackingorder?: Maybe<Laundry_Service_Trackingorder_Mutation_Response>;
  /** insert a single row into the table: "laundry_service.trackingorder" */
  insert_laundry_service_trackingorder_one?: Maybe<Laundry_Service_Trackingorder>;
  /** insert data into the table: "laundry_service.transaction" */
  insert_laundry_service_transaction?: Maybe<Laundry_Service_Transaction_Mutation_Response>;
  /** insert a single row into the table: "laundry_service.transaction" */
  insert_laundry_service_transaction_one?: Maybe<Laundry_Service_Transaction>;
  /** insert data into the table: "laundry_service.vendor" */
  insert_laundry_service_vendor?: Maybe<Laundry_Service_Vendor_Mutation_Response>;
  /** insert a single row into the table: "laundry_service.vendor" */
  insert_laundry_service_vendor_one?: Maybe<Laundry_Service_Vendor>;
  /** insert data into the table: "laundry_service.voucher" */
  insert_laundry_service_voucher?: Maybe<Laundry_Service_Voucher_Mutation_Response>;
  /** insert a single row into the table: "laundry_service.voucher" */
  insert_laundry_service_voucher_one?: Maybe<Laundry_Service_Voucher>;
  /** insert data into the table: "laundry_service.workschedule" */
  insert_laundry_service_workschedule?: Maybe<Laundry_Service_Workschedule_Mutation_Response>;
  /** insert a single row into the table: "laundry_service.workschedule" */
  insert_laundry_service_workschedule_one?: Maybe<Laundry_Service_Workschedule>;
  /** update data of the table: "laundry_service.customers" */
  update_laundry_service_customers?: Maybe<Laundry_Service_Customers_Mutation_Response>;
  /** update single row of the table: "laundry_service.customers" */
  update_laundry_service_customers_by_pk?: Maybe<Laundry_Service_Customers>;
  /** update multiples rows of table: "laundry_service.customers" */
  update_laundry_service_customers_many?: Maybe<Array<Maybe<Laundry_Service_Customers_Mutation_Response>>>;
  /** update data of the table: "laundry_service.equipment" */
  update_laundry_service_equipment?: Maybe<Laundry_Service_Equipment_Mutation_Response>;
  /** update single row of the table: "laundry_service.equipment" */
  update_laundry_service_equipment_by_pk?: Maybe<Laundry_Service_Equipment>;
  /** update multiples rows of table: "laundry_service.equipment" */
  update_laundry_service_equipment_many?: Maybe<Array<Maybe<Laundry_Service_Equipment_Mutation_Response>>>;
  /** update data of the table: "laundry_service.feedback" */
  update_laundry_service_feedback?: Maybe<Laundry_Service_Feedback_Mutation_Response>;
  /** update single row of the table: "laundry_service.feedback" */
  update_laundry_service_feedback_by_pk?: Maybe<Laundry_Service_Feedback>;
  /** update multiples rows of table: "laundry_service.feedback" */
  update_laundry_service_feedback_many?: Maybe<Array<Maybe<Laundry_Service_Feedback_Mutation_Response>>>;
  /** update data of the table: "laundry_service.manager" */
  update_laundry_service_manager?: Maybe<Laundry_Service_Manager_Mutation_Response>;
  /** update single row of the table: "laundry_service.manager" */
  update_laundry_service_manager_by_pk?: Maybe<Laundry_Service_Manager>;
  /** update multiples rows of table: "laundry_service.manager" */
  update_laundry_service_manager_many?: Maybe<Array<Maybe<Laundry_Service_Manager_Mutation_Response>>>;
  /** update data of the table: "laundry_service.orderdetail" */
  update_laundry_service_orderdetail?: Maybe<Laundry_Service_Orderdetail_Mutation_Response>;
  /** update single row of the table: "laundry_service.orderdetail" */
  update_laundry_service_orderdetail_by_pk?: Maybe<Laundry_Service_Orderdetail>;
  /** update multiples rows of table: "laundry_service.orderdetail" */
  update_laundry_service_orderdetail_many?: Maybe<Array<Maybe<Laundry_Service_Orderdetail_Mutation_Response>>>;
  /** update data of the table: "laundry_service.orders" */
  update_laundry_service_orders?: Maybe<Laundry_Service_Orders_Mutation_Response>;
  /** update single row of the table: "laundry_service.orders" */
  update_laundry_service_orders_by_pk?: Maybe<Laundry_Service_Orders>;
  /** update multiples rows of table: "laundry_service.orders" */
  update_laundry_service_orders_many?: Maybe<Array<Maybe<Laundry_Service_Orders_Mutation_Response>>>;
  /** update data of the table: "laundry_service.payment" */
  update_laundry_service_payment?: Maybe<Laundry_Service_Payment_Mutation_Response>;
  /** update single row of the table: "laundry_service.payment" */
  update_laundry_service_payment_by_pk?: Maybe<Laundry_Service_Payment>;
  /** update multiples rows of table: "laundry_service.payment" */
  update_laundry_service_payment_many?: Maybe<Array<Maybe<Laundry_Service_Payment_Mutation_Response>>>;
  /** update data of the table: "laundry_service.process" */
  update_laundry_service_process?: Maybe<Laundry_Service_Process_Mutation_Response>;
  /** update single row of the table: "laundry_service.process" */
  update_laundry_service_process_by_pk?: Maybe<Laundry_Service_Process>;
  /** update multiples rows of table: "laundry_service.process" */
  update_laundry_service_process_many?: Maybe<Array<Maybe<Laundry_Service_Process_Mutation_Response>>>;
  /** update data of the table: "laundry_service.product" */
  update_laundry_service_product?: Maybe<Laundry_Service_Product_Mutation_Response>;
  /** update single row of the table: "laundry_service.product" */
  update_laundry_service_product_by_pk?: Maybe<Laundry_Service_Product>;
  /** update multiples rows of table: "laundry_service.product" */
  update_laundry_service_product_many?: Maybe<Array<Maybe<Laundry_Service_Product_Mutation_Response>>>;
  /** update data of the table: "laundry_service.schedule" */
  update_laundry_service_schedule?: Maybe<Laundry_Service_Schedule_Mutation_Response>;
  /** update single row of the table: "laundry_service.schedule" */
  update_laundry_service_schedule_by_pk?: Maybe<Laundry_Service_Schedule>;
  /** update multiples rows of table: "laundry_service.schedule" */
  update_laundry_service_schedule_many?: Maybe<Array<Maybe<Laundry_Service_Schedule_Mutation_Response>>>;
  /** update data of the table: "laundry_service.service" */
  update_laundry_service_service?: Maybe<Laundry_Service_Service_Mutation_Response>;
  /** update single row of the table: "laundry_service.service" */
  update_laundry_service_service_by_pk?: Maybe<Laundry_Service_Service>;
  /** update multiples rows of table: "laundry_service.service" */
  update_laundry_service_service_many?: Maybe<Array<Maybe<Laundry_Service_Service_Mutation_Response>>>;
  /** update data of the table: "laundry_service.staff" */
  update_laundry_service_staff?: Maybe<Laundry_Service_Staff_Mutation_Response>;
  /** update single row of the table: "laundry_service.staff" */
  update_laundry_service_staff_by_pk?: Maybe<Laundry_Service_Staff>;
  /** update multiples rows of table: "laundry_service.staff" */
  update_laundry_service_staff_many?: Maybe<Array<Maybe<Laundry_Service_Staff_Mutation_Response>>>;
  /** update data of the table: "laundry_service.trackingorder" */
  update_laundry_service_trackingorder?: Maybe<Laundry_Service_Trackingorder_Mutation_Response>;
  /** update single row of the table: "laundry_service.trackingorder" */
  update_laundry_service_trackingorder_by_pk?: Maybe<Laundry_Service_Trackingorder>;
  /** update multiples rows of table: "laundry_service.trackingorder" */
  update_laundry_service_trackingorder_many?: Maybe<Array<Maybe<Laundry_Service_Trackingorder_Mutation_Response>>>;
  /** update data of the table: "laundry_service.transaction" */
  update_laundry_service_transaction?: Maybe<Laundry_Service_Transaction_Mutation_Response>;
  /** update single row of the table: "laundry_service.transaction" */
  update_laundry_service_transaction_by_pk?: Maybe<Laundry_Service_Transaction>;
  /** update multiples rows of table: "laundry_service.transaction" */
  update_laundry_service_transaction_many?: Maybe<Array<Maybe<Laundry_Service_Transaction_Mutation_Response>>>;
  /** update data of the table: "laundry_service.vendor" */
  update_laundry_service_vendor?: Maybe<Laundry_Service_Vendor_Mutation_Response>;
  /** update single row of the table: "laundry_service.vendor" */
  update_laundry_service_vendor_by_pk?: Maybe<Laundry_Service_Vendor>;
  /** update multiples rows of table: "laundry_service.vendor" */
  update_laundry_service_vendor_many?: Maybe<Array<Maybe<Laundry_Service_Vendor_Mutation_Response>>>;
  /** update data of the table: "laundry_service.voucher" */
  update_laundry_service_voucher?: Maybe<Laundry_Service_Voucher_Mutation_Response>;
  /** update single row of the table: "laundry_service.voucher" */
  update_laundry_service_voucher_by_pk?: Maybe<Laundry_Service_Voucher>;
  /** update multiples rows of table: "laundry_service.voucher" */
  update_laundry_service_voucher_many?: Maybe<Array<Maybe<Laundry_Service_Voucher_Mutation_Response>>>;
  /** update data of the table: "laundry_service.workschedule" */
  update_laundry_service_workschedule?: Maybe<Laundry_Service_Workschedule_Mutation_Response>;
  /** update single row of the table: "laundry_service.workschedule" */
  update_laundry_service_workschedule_by_pk?: Maybe<Laundry_Service_Workschedule>;
  /** update multiples rows of table: "laundry_service.workschedule" */
  update_laundry_service_workschedule_many?: Maybe<Array<Maybe<Laundry_Service_Workschedule_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_CustomersArgs = {
  where: Laundry_Service_Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_Customers_By_PkArgs = {
  customer_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_EquipmentArgs = {
  where: Laundry_Service_Equipment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_Equipment_By_PkArgs = {
  equipment_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_FeedbackArgs = {
  where: Laundry_Service_Feedback_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_Feedback_By_PkArgs = {
  feedback_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_ManagerArgs = {
  where: Laundry_Service_Manager_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_Manager_By_PkArgs = {
  manager_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_OrderdetailArgs = {
  where: Laundry_Service_Orderdetail_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_Orderdetail_By_PkArgs = {
  order_detail_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_OrdersArgs = {
  where: Laundry_Service_Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_Orders_By_PkArgs = {
  order_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_PaymentArgs = {
  where: Laundry_Service_Payment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_Payment_By_PkArgs = {
  payment_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_ProcessArgs = {
  where: Laundry_Service_Process_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_Process_By_PkArgs = {
  process_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_ProductArgs = {
  where: Laundry_Service_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_Product_By_PkArgs = {
  product_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_ScheduleArgs = {
  where: Laundry_Service_Schedule_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_Schedule_By_PkArgs = {
  schedule_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_ServiceArgs = {
  where: Laundry_Service_Service_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_Service_By_PkArgs = {
  service_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_StaffArgs = {
  where: Laundry_Service_Staff_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_Staff_By_PkArgs = {
  staff_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_TrackingorderArgs = {
  where: Laundry_Service_Trackingorder_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_Trackingorder_By_PkArgs = {
  tracking_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_TransactionArgs = {
  where: Laundry_Service_Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_Transaction_By_PkArgs = {
  transaction_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_VendorArgs = {
  where: Laundry_Service_Vendor_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_Vendor_By_PkArgs = {
  vendor_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_VoucherArgs = {
  where: Laundry_Service_Voucher_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_Voucher_By_PkArgs = {
  voucher_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_WorkscheduleArgs = {
  where: Laundry_Service_Workschedule_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Laundry_Service_Workschedule_By_PkArgs = {
  schedule_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_CustomersArgs = {
  objects: Array<Laundry_Service_Customers_Insert_Input>;
  on_conflict?: InputMaybe<Laundry_Service_Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_Customers_OneArgs = {
  object: Laundry_Service_Customers_Insert_Input;
  on_conflict?: InputMaybe<Laundry_Service_Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_EquipmentArgs = {
  objects: Array<Laundry_Service_Equipment_Insert_Input>;
  on_conflict?: InputMaybe<Laundry_Service_Equipment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_Equipment_OneArgs = {
  object: Laundry_Service_Equipment_Insert_Input;
  on_conflict?: InputMaybe<Laundry_Service_Equipment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_FeedbackArgs = {
  objects: Array<Laundry_Service_Feedback_Insert_Input>;
  on_conflict?: InputMaybe<Laundry_Service_Feedback_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_Feedback_OneArgs = {
  object: Laundry_Service_Feedback_Insert_Input;
  on_conflict?: InputMaybe<Laundry_Service_Feedback_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_ManagerArgs = {
  objects: Array<Laundry_Service_Manager_Insert_Input>;
  on_conflict?: InputMaybe<Laundry_Service_Manager_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_Manager_OneArgs = {
  object: Laundry_Service_Manager_Insert_Input;
  on_conflict?: InputMaybe<Laundry_Service_Manager_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_OrderdetailArgs = {
  objects: Array<Laundry_Service_Orderdetail_Insert_Input>;
  on_conflict?: InputMaybe<Laundry_Service_Orderdetail_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_Orderdetail_OneArgs = {
  object: Laundry_Service_Orderdetail_Insert_Input;
  on_conflict?: InputMaybe<Laundry_Service_Orderdetail_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_OrdersArgs = {
  objects: Array<Laundry_Service_Orders_Insert_Input>;
  on_conflict?: InputMaybe<Laundry_Service_Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_Orders_OneArgs = {
  object: Laundry_Service_Orders_Insert_Input;
  on_conflict?: InputMaybe<Laundry_Service_Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_PaymentArgs = {
  objects: Array<Laundry_Service_Payment_Insert_Input>;
  on_conflict?: InputMaybe<Laundry_Service_Payment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_Payment_OneArgs = {
  object: Laundry_Service_Payment_Insert_Input;
  on_conflict?: InputMaybe<Laundry_Service_Payment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_ProcessArgs = {
  objects: Array<Laundry_Service_Process_Insert_Input>;
  on_conflict?: InputMaybe<Laundry_Service_Process_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_Process_OneArgs = {
  object: Laundry_Service_Process_Insert_Input;
  on_conflict?: InputMaybe<Laundry_Service_Process_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_ProductArgs = {
  objects: Array<Laundry_Service_Product_Insert_Input>;
  on_conflict?: InputMaybe<Laundry_Service_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_Product_OneArgs = {
  object: Laundry_Service_Product_Insert_Input;
  on_conflict?: InputMaybe<Laundry_Service_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_ScheduleArgs = {
  objects: Array<Laundry_Service_Schedule_Insert_Input>;
  on_conflict?: InputMaybe<Laundry_Service_Schedule_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_Schedule_OneArgs = {
  object: Laundry_Service_Schedule_Insert_Input;
  on_conflict?: InputMaybe<Laundry_Service_Schedule_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_ServiceArgs = {
  objects: Array<Laundry_Service_Service_Insert_Input>;
  on_conflict?: InputMaybe<Laundry_Service_Service_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_Service_OneArgs = {
  object: Laundry_Service_Service_Insert_Input;
  on_conflict?: InputMaybe<Laundry_Service_Service_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_StaffArgs = {
  objects: Array<Laundry_Service_Staff_Insert_Input>;
  on_conflict?: InputMaybe<Laundry_Service_Staff_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_Staff_OneArgs = {
  object: Laundry_Service_Staff_Insert_Input;
  on_conflict?: InputMaybe<Laundry_Service_Staff_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_TrackingorderArgs = {
  objects: Array<Laundry_Service_Trackingorder_Insert_Input>;
  on_conflict?: InputMaybe<Laundry_Service_Trackingorder_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_Trackingorder_OneArgs = {
  object: Laundry_Service_Trackingorder_Insert_Input;
  on_conflict?: InputMaybe<Laundry_Service_Trackingorder_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_TransactionArgs = {
  objects: Array<Laundry_Service_Transaction_Insert_Input>;
  on_conflict?: InputMaybe<Laundry_Service_Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_Transaction_OneArgs = {
  object: Laundry_Service_Transaction_Insert_Input;
  on_conflict?: InputMaybe<Laundry_Service_Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_VendorArgs = {
  objects: Array<Laundry_Service_Vendor_Insert_Input>;
  on_conflict?: InputMaybe<Laundry_Service_Vendor_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_Vendor_OneArgs = {
  object: Laundry_Service_Vendor_Insert_Input;
  on_conflict?: InputMaybe<Laundry_Service_Vendor_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_VoucherArgs = {
  objects: Array<Laundry_Service_Voucher_Insert_Input>;
  on_conflict?: InputMaybe<Laundry_Service_Voucher_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_Voucher_OneArgs = {
  object: Laundry_Service_Voucher_Insert_Input;
  on_conflict?: InputMaybe<Laundry_Service_Voucher_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_WorkscheduleArgs = {
  objects: Array<Laundry_Service_Workschedule_Insert_Input>;
  on_conflict?: InputMaybe<Laundry_Service_Workschedule_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laundry_Service_Workschedule_OneArgs = {
  object: Laundry_Service_Workschedule_Insert_Input;
  on_conflict?: InputMaybe<Laundry_Service_Workschedule_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_CustomersArgs = {
  _inc?: InputMaybe<Laundry_Service_Customers_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Customers_Set_Input>;
  where: Laundry_Service_Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Customers_By_PkArgs = {
  _inc?: InputMaybe<Laundry_Service_Customers_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Customers_Set_Input>;
  pk_columns: Laundry_Service_Customers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Customers_ManyArgs = {
  updates: Array<Laundry_Service_Customers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_EquipmentArgs = {
  _inc?: InputMaybe<Laundry_Service_Equipment_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Equipment_Set_Input>;
  where: Laundry_Service_Equipment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Equipment_By_PkArgs = {
  _inc?: InputMaybe<Laundry_Service_Equipment_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Equipment_Set_Input>;
  pk_columns: Laundry_Service_Equipment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Equipment_ManyArgs = {
  updates: Array<Laundry_Service_Equipment_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_FeedbackArgs = {
  _inc?: InputMaybe<Laundry_Service_Feedback_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Feedback_Set_Input>;
  where: Laundry_Service_Feedback_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Feedback_By_PkArgs = {
  _inc?: InputMaybe<Laundry_Service_Feedback_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Feedback_Set_Input>;
  pk_columns: Laundry_Service_Feedback_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Feedback_ManyArgs = {
  updates: Array<Laundry_Service_Feedback_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_ManagerArgs = {
  _inc?: InputMaybe<Laundry_Service_Manager_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Manager_Set_Input>;
  where: Laundry_Service_Manager_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Manager_By_PkArgs = {
  _inc?: InputMaybe<Laundry_Service_Manager_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Manager_Set_Input>;
  pk_columns: Laundry_Service_Manager_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Manager_ManyArgs = {
  updates: Array<Laundry_Service_Manager_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_OrderdetailArgs = {
  _inc?: InputMaybe<Laundry_Service_Orderdetail_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Orderdetail_Set_Input>;
  where: Laundry_Service_Orderdetail_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Orderdetail_By_PkArgs = {
  _inc?: InputMaybe<Laundry_Service_Orderdetail_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Orderdetail_Set_Input>;
  pk_columns: Laundry_Service_Orderdetail_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Orderdetail_ManyArgs = {
  updates: Array<Laundry_Service_Orderdetail_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_OrdersArgs = {
  _inc?: InputMaybe<Laundry_Service_Orders_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Orders_Set_Input>;
  where: Laundry_Service_Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Orders_By_PkArgs = {
  _inc?: InputMaybe<Laundry_Service_Orders_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Orders_Set_Input>;
  pk_columns: Laundry_Service_Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Orders_ManyArgs = {
  updates: Array<Laundry_Service_Orders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_PaymentArgs = {
  _inc?: InputMaybe<Laundry_Service_Payment_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Payment_Set_Input>;
  where: Laundry_Service_Payment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Payment_By_PkArgs = {
  _inc?: InputMaybe<Laundry_Service_Payment_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Payment_Set_Input>;
  pk_columns: Laundry_Service_Payment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Payment_ManyArgs = {
  updates: Array<Laundry_Service_Payment_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_ProcessArgs = {
  _inc?: InputMaybe<Laundry_Service_Process_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Process_Set_Input>;
  where: Laundry_Service_Process_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Process_By_PkArgs = {
  _inc?: InputMaybe<Laundry_Service_Process_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Process_Set_Input>;
  pk_columns: Laundry_Service_Process_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Process_ManyArgs = {
  updates: Array<Laundry_Service_Process_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_ProductArgs = {
  _inc?: InputMaybe<Laundry_Service_Product_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Product_Set_Input>;
  where: Laundry_Service_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Product_By_PkArgs = {
  _inc?: InputMaybe<Laundry_Service_Product_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Product_Set_Input>;
  pk_columns: Laundry_Service_Product_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Product_ManyArgs = {
  updates: Array<Laundry_Service_Product_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_ScheduleArgs = {
  _inc?: InputMaybe<Laundry_Service_Schedule_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Schedule_Set_Input>;
  where: Laundry_Service_Schedule_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Schedule_By_PkArgs = {
  _inc?: InputMaybe<Laundry_Service_Schedule_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Schedule_Set_Input>;
  pk_columns: Laundry_Service_Schedule_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Schedule_ManyArgs = {
  updates: Array<Laundry_Service_Schedule_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_ServiceArgs = {
  _inc?: InputMaybe<Laundry_Service_Service_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Service_Set_Input>;
  where: Laundry_Service_Service_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Service_By_PkArgs = {
  _inc?: InputMaybe<Laundry_Service_Service_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Service_Set_Input>;
  pk_columns: Laundry_Service_Service_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Service_ManyArgs = {
  updates: Array<Laundry_Service_Service_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_StaffArgs = {
  _inc?: InputMaybe<Laundry_Service_Staff_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Staff_Set_Input>;
  where: Laundry_Service_Staff_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Staff_By_PkArgs = {
  _inc?: InputMaybe<Laundry_Service_Staff_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Staff_Set_Input>;
  pk_columns: Laundry_Service_Staff_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Staff_ManyArgs = {
  updates: Array<Laundry_Service_Staff_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_TrackingorderArgs = {
  _inc?: InputMaybe<Laundry_Service_Trackingorder_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Trackingorder_Set_Input>;
  where: Laundry_Service_Trackingorder_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Trackingorder_By_PkArgs = {
  _inc?: InputMaybe<Laundry_Service_Trackingorder_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Trackingorder_Set_Input>;
  pk_columns: Laundry_Service_Trackingorder_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Trackingorder_ManyArgs = {
  updates: Array<Laundry_Service_Trackingorder_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_TransactionArgs = {
  _inc?: InputMaybe<Laundry_Service_Transaction_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Transaction_Set_Input>;
  where: Laundry_Service_Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Transaction_By_PkArgs = {
  _inc?: InputMaybe<Laundry_Service_Transaction_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Transaction_Set_Input>;
  pk_columns: Laundry_Service_Transaction_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Transaction_ManyArgs = {
  updates: Array<Laundry_Service_Transaction_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_VendorArgs = {
  _inc?: InputMaybe<Laundry_Service_Vendor_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Vendor_Set_Input>;
  where: Laundry_Service_Vendor_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Vendor_By_PkArgs = {
  _inc?: InputMaybe<Laundry_Service_Vendor_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Vendor_Set_Input>;
  pk_columns: Laundry_Service_Vendor_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Vendor_ManyArgs = {
  updates: Array<Laundry_Service_Vendor_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_VoucherArgs = {
  _inc?: InputMaybe<Laundry_Service_Voucher_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Voucher_Set_Input>;
  where: Laundry_Service_Voucher_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Voucher_By_PkArgs = {
  _inc?: InputMaybe<Laundry_Service_Voucher_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Voucher_Set_Input>;
  pk_columns: Laundry_Service_Voucher_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Voucher_ManyArgs = {
  updates: Array<Laundry_Service_Voucher_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_WorkscheduleArgs = {
  _inc?: InputMaybe<Laundry_Service_Workschedule_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Workschedule_Set_Input>;
  where: Laundry_Service_Workschedule_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Workschedule_By_PkArgs = {
  _inc?: InputMaybe<Laundry_Service_Workschedule_Inc_Input>;
  _set?: InputMaybe<Laundry_Service_Workschedule_Set_Input>;
  pk_columns: Laundry_Service_Workschedule_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Laundry_Service_Workschedule_ManyArgs = {
  updates: Array<Laundry_Service_Workschedule_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "laundry_service.customers" */
  laundry_service_customers: Array<Laundry_Service_Customers>;
  /** fetch aggregated fields from the table: "laundry_service.customers" */
  laundry_service_customers_aggregate: Laundry_Service_Customers_Aggregate;
  /** fetch data from the table: "laundry_service.customers" using primary key columns */
  laundry_service_customers_by_pk?: Maybe<Laundry_Service_Customers>;
  /** fetch data from the table: "laundry_service.equipment" */
  laundry_service_equipment: Array<Laundry_Service_Equipment>;
  /** fetch aggregated fields from the table: "laundry_service.equipment" */
  laundry_service_equipment_aggregate: Laundry_Service_Equipment_Aggregate;
  /** fetch data from the table: "laundry_service.equipment" using primary key columns */
  laundry_service_equipment_by_pk?: Maybe<Laundry_Service_Equipment>;
  /** fetch data from the table: "laundry_service.feedback" */
  laundry_service_feedback: Array<Laundry_Service_Feedback>;
  /** fetch aggregated fields from the table: "laundry_service.feedback" */
  laundry_service_feedback_aggregate: Laundry_Service_Feedback_Aggregate;
  /** fetch data from the table: "laundry_service.feedback" using primary key columns */
  laundry_service_feedback_by_pk?: Maybe<Laundry_Service_Feedback>;
  /** fetch data from the table: "laundry_service.manager" */
  laundry_service_manager: Array<Laundry_Service_Manager>;
  /** fetch aggregated fields from the table: "laundry_service.manager" */
  laundry_service_manager_aggregate: Laundry_Service_Manager_Aggregate;
  /** fetch data from the table: "laundry_service.manager" using primary key columns */
  laundry_service_manager_by_pk?: Maybe<Laundry_Service_Manager>;
  /** fetch data from the table: "laundry_service.orderdetail" */
  laundry_service_orderdetail: Array<Laundry_Service_Orderdetail>;
  /** fetch aggregated fields from the table: "laundry_service.orderdetail" */
  laundry_service_orderdetail_aggregate: Laundry_Service_Orderdetail_Aggregate;
  /** fetch data from the table: "laundry_service.orderdetail" using primary key columns */
  laundry_service_orderdetail_by_pk?: Maybe<Laundry_Service_Orderdetail>;
  /** fetch data from the table: "laundry_service.orders" */
  laundry_service_orders: Array<Laundry_Service_Orders>;
  /** fetch aggregated fields from the table: "laundry_service.orders" */
  laundry_service_orders_aggregate: Laundry_Service_Orders_Aggregate;
  /** fetch data from the table: "laundry_service.orders" using primary key columns */
  laundry_service_orders_by_pk?: Maybe<Laundry_Service_Orders>;
  /** fetch data from the table: "laundry_service.payment" */
  laundry_service_payment: Array<Laundry_Service_Payment>;
  /** fetch aggregated fields from the table: "laundry_service.payment" */
  laundry_service_payment_aggregate: Laundry_Service_Payment_Aggregate;
  /** fetch data from the table: "laundry_service.payment" using primary key columns */
  laundry_service_payment_by_pk?: Maybe<Laundry_Service_Payment>;
  /** fetch data from the table: "laundry_service.process" */
  laundry_service_process: Array<Laundry_Service_Process>;
  /** fetch aggregated fields from the table: "laundry_service.process" */
  laundry_service_process_aggregate: Laundry_Service_Process_Aggregate;
  /** fetch data from the table: "laundry_service.process" using primary key columns */
  laundry_service_process_by_pk?: Maybe<Laundry_Service_Process>;
  /** fetch data from the table: "laundry_service.product" */
  laundry_service_product: Array<Laundry_Service_Product>;
  /** fetch aggregated fields from the table: "laundry_service.product" */
  laundry_service_product_aggregate: Laundry_Service_Product_Aggregate;
  /** fetch data from the table: "laundry_service.product" using primary key columns */
  laundry_service_product_by_pk?: Maybe<Laundry_Service_Product>;
  /** fetch data from the table: "laundry_service.schedule" */
  laundry_service_schedule: Array<Laundry_Service_Schedule>;
  /** fetch aggregated fields from the table: "laundry_service.schedule" */
  laundry_service_schedule_aggregate: Laundry_Service_Schedule_Aggregate;
  /** fetch data from the table: "laundry_service.schedule" using primary key columns */
  laundry_service_schedule_by_pk?: Maybe<Laundry_Service_Schedule>;
  /** fetch data from the table: "laundry_service.service" */
  laundry_service_service: Array<Laundry_Service_Service>;
  /** fetch aggregated fields from the table: "laundry_service.service" */
  laundry_service_service_aggregate: Laundry_Service_Service_Aggregate;
  /** fetch data from the table: "laundry_service.service" using primary key columns */
  laundry_service_service_by_pk?: Maybe<Laundry_Service_Service>;
  /** fetch data from the table: "laundry_service.staff" */
  laundry_service_staff: Array<Laundry_Service_Staff>;
  /** fetch aggregated fields from the table: "laundry_service.staff" */
  laundry_service_staff_aggregate: Laundry_Service_Staff_Aggregate;
  /** fetch data from the table: "laundry_service.staff" using primary key columns */
  laundry_service_staff_by_pk?: Maybe<Laundry_Service_Staff>;
  /** fetch data from the table: "laundry_service.trackingorder" */
  laundry_service_trackingorder: Array<Laundry_Service_Trackingorder>;
  /** fetch aggregated fields from the table: "laundry_service.trackingorder" */
  laundry_service_trackingorder_aggregate: Laundry_Service_Trackingorder_Aggregate;
  /** fetch data from the table: "laundry_service.trackingorder" using primary key columns */
  laundry_service_trackingorder_by_pk?: Maybe<Laundry_Service_Trackingorder>;
  /** fetch data from the table: "laundry_service.transaction" */
  laundry_service_transaction: Array<Laundry_Service_Transaction>;
  /** fetch aggregated fields from the table: "laundry_service.transaction" */
  laundry_service_transaction_aggregate: Laundry_Service_Transaction_Aggregate;
  /** fetch data from the table: "laundry_service.transaction" using primary key columns */
  laundry_service_transaction_by_pk?: Maybe<Laundry_Service_Transaction>;
  /** fetch data from the table: "laundry_service.vendor" */
  laundry_service_vendor: Array<Laundry_Service_Vendor>;
  /** fetch aggregated fields from the table: "laundry_service.vendor" */
  laundry_service_vendor_aggregate: Laundry_Service_Vendor_Aggregate;
  /** fetch data from the table: "laundry_service.vendor" using primary key columns */
  laundry_service_vendor_by_pk?: Maybe<Laundry_Service_Vendor>;
  /** fetch data from the table: "laundry_service.voucher" */
  laundry_service_voucher: Array<Laundry_Service_Voucher>;
  /** fetch aggregated fields from the table: "laundry_service.voucher" */
  laundry_service_voucher_aggregate: Laundry_Service_Voucher_Aggregate;
  /** fetch data from the table: "laundry_service.voucher" using primary key columns */
  laundry_service_voucher_by_pk?: Maybe<Laundry_Service_Voucher>;
  /** fetch data from the table: "laundry_service.workschedule" */
  laundry_service_workschedule: Array<Laundry_Service_Workschedule>;
  /** fetch aggregated fields from the table: "laundry_service.workschedule" */
  laundry_service_workschedule_aggregate: Laundry_Service_Workschedule_Aggregate;
  /** fetch data from the table: "laundry_service.workschedule" using primary key columns */
  laundry_service_workschedule_by_pk?: Maybe<Laundry_Service_Workschedule>;
};


export type Query_RootLaundry_Service_CustomersArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Customers_Order_By>>;
  where?: InputMaybe<Laundry_Service_Customers_Bool_Exp>;
};


export type Query_RootLaundry_Service_Customers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Customers_Order_By>>;
  where?: InputMaybe<Laundry_Service_Customers_Bool_Exp>;
};


export type Query_RootLaundry_Service_Customers_By_PkArgs = {
  customer_id: Scalars['Int'];
};


export type Query_RootLaundry_Service_EquipmentArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Equipment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Equipment_Order_By>>;
  where?: InputMaybe<Laundry_Service_Equipment_Bool_Exp>;
};


export type Query_RootLaundry_Service_Equipment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Equipment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Equipment_Order_By>>;
  where?: InputMaybe<Laundry_Service_Equipment_Bool_Exp>;
};


export type Query_RootLaundry_Service_Equipment_By_PkArgs = {
  equipment_id: Scalars['Int'];
};


export type Query_RootLaundry_Service_FeedbackArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Feedback_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Feedback_Order_By>>;
  where?: InputMaybe<Laundry_Service_Feedback_Bool_Exp>;
};


export type Query_RootLaundry_Service_Feedback_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Feedback_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Feedback_Order_By>>;
  where?: InputMaybe<Laundry_Service_Feedback_Bool_Exp>;
};


export type Query_RootLaundry_Service_Feedback_By_PkArgs = {
  feedback_id: Scalars['Int'];
};


export type Query_RootLaundry_Service_ManagerArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Manager_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Manager_Order_By>>;
  where?: InputMaybe<Laundry_Service_Manager_Bool_Exp>;
};


export type Query_RootLaundry_Service_Manager_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Manager_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Manager_Order_By>>;
  where?: InputMaybe<Laundry_Service_Manager_Bool_Exp>;
};


export type Query_RootLaundry_Service_Manager_By_PkArgs = {
  manager_id: Scalars['Int'];
};


export type Query_RootLaundry_Service_OrderdetailArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orderdetail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orderdetail_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orderdetail_Bool_Exp>;
};


export type Query_RootLaundry_Service_Orderdetail_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orderdetail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orderdetail_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orderdetail_Bool_Exp>;
};


export type Query_RootLaundry_Service_Orderdetail_By_PkArgs = {
  order_detail_id: Scalars['Int'];
};


export type Query_RootLaundry_Service_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orders_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
};


export type Query_RootLaundry_Service_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orders_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
};


export type Query_RootLaundry_Service_Orders_By_PkArgs = {
  order_id: Scalars['Int'];
};


export type Query_RootLaundry_Service_PaymentArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Payment_Order_By>>;
  where?: InputMaybe<Laundry_Service_Payment_Bool_Exp>;
};


export type Query_RootLaundry_Service_Payment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Payment_Order_By>>;
  where?: InputMaybe<Laundry_Service_Payment_Bool_Exp>;
};


export type Query_RootLaundry_Service_Payment_By_PkArgs = {
  payment_id: Scalars['Int'];
};


export type Query_RootLaundry_Service_ProcessArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Process_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Process_Order_By>>;
  where?: InputMaybe<Laundry_Service_Process_Bool_Exp>;
};


export type Query_RootLaundry_Service_Process_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Process_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Process_Order_By>>;
  where?: InputMaybe<Laundry_Service_Process_Bool_Exp>;
};


export type Query_RootLaundry_Service_Process_By_PkArgs = {
  process_id: Scalars['Int'];
};


export type Query_RootLaundry_Service_ProductArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Product_Order_By>>;
  where?: InputMaybe<Laundry_Service_Product_Bool_Exp>;
};


export type Query_RootLaundry_Service_Product_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Product_Order_By>>;
  where?: InputMaybe<Laundry_Service_Product_Bool_Exp>;
};


export type Query_RootLaundry_Service_Product_By_PkArgs = {
  product_id: Scalars['Int'];
};


export type Query_RootLaundry_Service_ScheduleArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Schedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Schedule_Order_By>>;
  where?: InputMaybe<Laundry_Service_Schedule_Bool_Exp>;
};


export type Query_RootLaundry_Service_Schedule_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Schedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Schedule_Order_By>>;
  where?: InputMaybe<Laundry_Service_Schedule_Bool_Exp>;
};


export type Query_RootLaundry_Service_Schedule_By_PkArgs = {
  schedule_id: Scalars['Int'];
};


export type Query_RootLaundry_Service_ServiceArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Service_Order_By>>;
  where?: InputMaybe<Laundry_Service_Service_Bool_Exp>;
};


export type Query_RootLaundry_Service_Service_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Service_Order_By>>;
  where?: InputMaybe<Laundry_Service_Service_Bool_Exp>;
};


export type Query_RootLaundry_Service_Service_By_PkArgs = {
  service_id: Scalars['Int'];
};


export type Query_RootLaundry_Service_StaffArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Staff_Order_By>>;
  where?: InputMaybe<Laundry_Service_Staff_Bool_Exp>;
};


export type Query_RootLaundry_Service_Staff_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Staff_Order_By>>;
  where?: InputMaybe<Laundry_Service_Staff_Bool_Exp>;
};


export type Query_RootLaundry_Service_Staff_By_PkArgs = {
  staff_id: Scalars['Int'];
};


export type Query_RootLaundry_Service_TrackingorderArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Trackingorder_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Trackingorder_Order_By>>;
  where?: InputMaybe<Laundry_Service_Trackingorder_Bool_Exp>;
};


export type Query_RootLaundry_Service_Trackingorder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Trackingorder_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Trackingorder_Order_By>>;
  where?: InputMaybe<Laundry_Service_Trackingorder_Bool_Exp>;
};


export type Query_RootLaundry_Service_Trackingorder_By_PkArgs = {
  tracking_id: Scalars['Int'];
};


export type Query_RootLaundry_Service_TransactionArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Transaction_Order_By>>;
  where?: InputMaybe<Laundry_Service_Transaction_Bool_Exp>;
};


export type Query_RootLaundry_Service_Transaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Transaction_Order_By>>;
  where?: InputMaybe<Laundry_Service_Transaction_Bool_Exp>;
};


export type Query_RootLaundry_Service_Transaction_By_PkArgs = {
  transaction_id: Scalars['Int'];
};


export type Query_RootLaundry_Service_VendorArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Vendor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Vendor_Order_By>>;
  where?: InputMaybe<Laundry_Service_Vendor_Bool_Exp>;
};


export type Query_RootLaundry_Service_Vendor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Vendor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Vendor_Order_By>>;
  where?: InputMaybe<Laundry_Service_Vendor_Bool_Exp>;
};


export type Query_RootLaundry_Service_Vendor_By_PkArgs = {
  vendor_id: Scalars['Int'];
};


export type Query_RootLaundry_Service_VoucherArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Voucher_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Voucher_Order_By>>;
  where?: InputMaybe<Laundry_Service_Voucher_Bool_Exp>;
};


export type Query_RootLaundry_Service_Voucher_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Voucher_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Voucher_Order_By>>;
  where?: InputMaybe<Laundry_Service_Voucher_Bool_Exp>;
};


export type Query_RootLaundry_Service_Voucher_By_PkArgs = {
  voucher_id: Scalars['Int'];
};


export type Query_RootLaundry_Service_WorkscheduleArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Workschedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Workschedule_Order_By>>;
  where?: InputMaybe<Laundry_Service_Workschedule_Bool_Exp>;
};


export type Query_RootLaundry_Service_Workschedule_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Workschedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Workschedule_Order_By>>;
  where?: InputMaybe<Laundry_Service_Workschedule_Bool_Exp>;
};


export type Query_RootLaundry_Service_Workschedule_By_PkArgs = {
  schedule_id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "laundry_service.customers" */
  laundry_service_customers: Array<Laundry_Service_Customers>;
  /** fetch aggregated fields from the table: "laundry_service.customers" */
  laundry_service_customers_aggregate: Laundry_Service_Customers_Aggregate;
  /** fetch data from the table: "laundry_service.customers" using primary key columns */
  laundry_service_customers_by_pk?: Maybe<Laundry_Service_Customers>;
  /** fetch data from the table in a streaming manner : "laundry_service.customers" */
  laundry_service_customers_stream: Array<Laundry_Service_Customers>;
  /** fetch data from the table: "laundry_service.equipment" */
  laundry_service_equipment: Array<Laundry_Service_Equipment>;
  /** fetch aggregated fields from the table: "laundry_service.equipment" */
  laundry_service_equipment_aggregate: Laundry_Service_Equipment_Aggregate;
  /** fetch data from the table: "laundry_service.equipment" using primary key columns */
  laundry_service_equipment_by_pk?: Maybe<Laundry_Service_Equipment>;
  /** fetch data from the table in a streaming manner : "laundry_service.equipment" */
  laundry_service_equipment_stream: Array<Laundry_Service_Equipment>;
  /** fetch data from the table: "laundry_service.feedback" */
  laundry_service_feedback: Array<Laundry_Service_Feedback>;
  /** fetch aggregated fields from the table: "laundry_service.feedback" */
  laundry_service_feedback_aggregate: Laundry_Service_Feedback_Aggregate;
  /** fetch data from the table: "laundry_service.feedback" using primary key columns */
  laundry_service_feedback_by_pk?: Maybe<Laundry_Service_Feedback>;
  /** fetch data from the table in a streaming manner : "laundry_service.feedback" */
  laundry_service_feedback_stream: Array<Laundry_Service_Feedback>;
  /** fetch data from the table: "laundry_service.manager" */
  laundry_service_manager: Array<Laundry_Service_Manager>;
  /** fetch aggregated fields from the table: "laundry_service.manager" */
  laundry_service_manager_aggregate: Laundry_Service_Manager_Aggregate;
  /** fetch data from the table: "laundry_service.manager" using primary key columns */
  laundry_service_manager_by_pk?: Maybe<Laundry_Service_Manager>;
  /** fetch data from the table in a streaming manner : "laundry_service.manager" */
  laundry_service_manager_stream: Array<Laundry_Service_Manager>;
  /** fetch data from the table: "laundry_service.orderdetail" */
  laundry_service_orderdetail: Array<Laundry_Service_Orderdetail>;
  /** fetch aggregated fields from the table: "laundry_service.orderdetail" */
  laundry_service_orderdetail_aggregate: Laundry_Service_Orderdetail_Aggregate;
  /** fetch data from the table: "laundry_service.orderdetail" using primary key columns */
  laundry_service_orderdetail_by_pk?: Maybe<Laundry_Service_Orderdetail>;
  /** fetch data from the table in a streaming manner : "laundry_service.orderdetail" */
  laundry_service_orderdetail_stream: Array<Laundry_Service_Orderdetail>;
  /** fetch data from the table: "laundry_service.orders" */
  laundry_service_orders: Array<Laundry_Service_Orders>;
  /** fetch aggregated fields from the table: "laundry_service.orders" */
  laundry_service_orders_aggregate: Laundry_Service_Orders_Aggregate;
  /** fetch data from the table: "laundry_service.orders" using primary key columns */
  laundry_service_orders_by_pk?: Maybe<Laundry_Service_Orders>;
  /** fetch data from the table in a streaming manner : "laundry_service.orders" */
  laundry_service_orders_stream: Array<Laundry_Service_Orders>;
  /** fetch data from the table: "laundry_service.payment" */
  laundry_service_payment: Array<Laundry_Service_Payment>;
  /** fetch aggregated fields from the table: "laundry_service.payment" */
  laundry_service_payment_aggregate: Laundry_Service_Payment_Aggregate;
  /** fetch data from the table: "laundry_service.payment" using primary key columns */
  laundry_service_payment_by_pk?: Maybe<Laundry_Service_Payment>;
  /** fetch data from the table in a streaming manner : "laundry_service.payment" */
  laundry_service_payment_stream: Array<Laundry_Service_Payment>;
  /** fetch data from the table: "laundry_service.process" */
  laundry_service_process: Array<Laundry_Service_Process>;
  /** fetch aggregated fields from the table: "laundry_service.process" */
  laundry_service_process_aggregate: Laundry_Service_Process_Aggregate;
  /** fetch data from the table: "laundry_service.process" using primary key columns */
  laundry_service_process_by_pk?: Maybe<Laundry_Service_Process>;
  /** fetch data from the table in a streaming manner : "laundry_service.process" */
  laundry_service_process_stream: Array<Laundry_Service_Process>;
  /** fetch data from the table: "laundry_service.product" */
  laundry_service_product: Array<Laundry_Service_Product>;
  /** fetch aggregated fields from the table: "laundry_service.product" */
  laundry_service_product_aggregate: Laundry_Service_Product_Aggregate;
  /** fetch data from the table: "laundry_service.product" using primary key columns */
  laundry_service_product_by_pk?: Maybe<Laundry_Service_Product>;
  /** fetch data from the table in a streaming manner : "laundry_service.product" */
  laundry_service_product_stream: Array<Laundry_Service_Product>;
  /** fetch data from the table: "laundry_service.schedule" */
  laundry_service_schedule: Array<Laundry_Service_Schedule>;
  /** fetch aggregated fields from the table: "laundry_service.schedule" */
  laundry_service_schedule_aggregate: Laundry_Service_Schedule_Aggregate;
  /** fetch data from the table: "laundry_service.schedule" using primary key columns */
  laundry_service_schedule_by_pk?: Maybe<Laundry_Service_Schedule>;
  /** fetch data from the table in a streaming manner : "laundry_service.schedule" */
  laundry_service_schedule_stream: Array<Laundry_Service_Schedule>;
  /** fetch data from the table: "laundry_service.service" */
  laundry_service_service: Array<Laundry_Service_Service>;
  /** fetch aggregated fields from the table: "laundry_service.service" */
  laundry_service_service_aggregate: Laundry_Service_Service_Aggregate;
  /** fetch data from the table: "laundry_service.service" using primary key columns */
  laundry_service_service_by_pk?: Maybe<Laundry_Service_Service>;
  /** fetch data from the table in a streaming manner : "laundry_service.service" */
  laundry_service_service_stream: Array<Laundry_Service_Service>;
  /** fetch data from the table: "laundry_service.staff" */
  laundry_service_staff: Array<Laundry_Service_Staff>;
  /** fetch aggregated fields from the table: "laundry_service.staff" */
  laundry_service_staff_aggregate: Laundry_Service_Staff_Aggregate;
  /** fetch data from the table: "laundry_service.staff" using primary key columns */
  laundry_service_staff_by_pk?: Maybe<Laundry_Service_Staff>;
  /** fetch data from the table in a streaming manner : "laundry_service.staff" */
  laundry_service_staff_stream: Array<Laundry_Service_Staff>;
  /** fetch data from the table: "laundry_service.trackingorder" */
  laundry_service_trackingorder: Array<Laundry_Service_Trackingorder>;
  /** fetch aggregated fields from the table: "laundry_service.trackingorder" */
  laundry_service_trackingorder_aggregate: Laundry_Service_Trackingorder_Aggregate;
  /** fetch data from the table: "laundry_service.trackingorder" using primary key columns */
  laundry_service_trackingorder_by_pk?: Maybe<Laundry_Service_Trackingorder>;
  /** fetch data from the table in a streaming manner : "laundry_service.trackingorder" */
  laundry_service_trackingorder_stream: Array<Laundry_Service_Trackingorder>;
  /** fetch data from the table: "laundry_service.transaction" */
  laundry_service_transaction: Array<Laundry_Service_Transaction>;
  /** fetch aggregated fields from the table: "laundry_service.transaction" */
  laundry_service_transaction_aggregate: Laundry_Service_Transaction_Aggregate;
  /** fetch data from the table: "laundry_service.transaction" using primary key columns */
  laundry_service_transaction_by_pk?: Maybe<Laundry_Service_Transaction>;
  /** fetch data from the table in a streaming manner : "laundry_service.transaction" */
  laundry_service_transaction_stream: Array<Laundry_Service_Transaction>;
  /** fetch data from the table: "laundry_service.vendor" */
  laundry_service_vendor: Array<Laundry_Service_Vendor>;
  /** fetch aggregated fields from the table: "laundry_service.vendor" */
  laundry_service_vendor_aggregate: Laundry_Service_Vendor_Aggregate;
  /** fetch data from the table: "laundry_service.vendor" using primary key columns */
  laundry_service_vendor_by_pk?: Maybe<Laundry_Service_Vendor>;
  /** fetch data from the table in a streaming manner : "laundry_service.vendor" */
  laundry_service_vendor_stream: Array<Laundry_Service_Vendor>;
  /** fetch data from the table: "laundry_service.voucher" */
  laundry_service_voucher: Array<Laundry_Service_Voucher>;
  /** fetch aggregated fields from the table: "laundry_service.voucher" */
  laundry_service_voucher_aggregate: Laundry_Service_Voucher_Aggregate;
  /** fetch data from the table: "laundry_service.voucher" using primary key columns */
  laundry_service_voucher_by_pk?: Maybe<Laundry_Service_Voucher>;
  /** fetch data from the table in a streaming manner : "laundry_service.voucher" */
  laundry_service_voucher_stream: Array<Laundry_Service_Voucher>;
  /** fetch data from the table: "laundry_service.workschedule" */
  laundry_service_workschedule: Array<Laundry_Service_Workschedule>;
  /** fetch aggregated fields from the table: "laundry_service.workschedule" */
  laundry_service_workschedule_aggregate: Laundry_Service_Workschedule_Aggregate;
  /** fetch data from the table: "laundry_service.workschedule" using primary key columns */
  laundry_service_workschedule_by_pk?: Maybe<Laundry_Service_Workschedule>;
  /** fetch data from the table in a streaming manner : "laundry_service.workschedule" */
  laundry_service_workschedule_stream: Array<Laundry_Service_Workschedule>;
};


export type Subscription_RootLaundry_Service_CustomersArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Customers_Order_By>>;
  where?: InputMaybe<Laundry_Service_Customers_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Customers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Customers_Order_By>>;
  where?: InputMaybe<Laundry_Service_Customers_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Customers_By_PkArgs = {
  customer_id: Scalars['Int'];
};


export type Subscription_RootLaundry_Service_Customers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Laundry_Service_Customers_Stream_Cursor_Input>>;
  where?: InputMaybe<Laundry_Service_Customers_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_EquipmentArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Equipment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Equipment_Order_By>>;
  where?: InputMaybe<Laundry_Service_Equipment_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Equipment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Equipment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Equipment_Order_By>>;
  where?: InputMaybe<Laundry_Service_Equipment_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Equipment_By_PkArgs = {
  equipment_id: Scalars['Int'];
};


export type Subscription_RootLaundry_Service_Equipment_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Laundry_Service_Equipment_Stream_Cursor_Input>>;
  where?: InputMaybe<Laundry_Service_Equipment_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_FeedbackArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Feedback_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Feedback_Order_By>>;
  where?: InputMaybe<Laundry_Service_Feedback_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Feedback_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Feedback_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Feedback_Order_By>>;
  where?: InputMaybe<Laundry_Service_Feedback_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Feedback_By_PkArgs = {
  feedback_id: Scalars['Int'];
};


export type Subscription_RootLaundry_Service_Feedback_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Laundry_Service_Feedback_Stream_Cursor_Input>>;
  where?: InputMaybe<Laundry_Service_Feedback_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_ManagerArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Manager_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Manager_Order_By>>;
  where?: InputMaybe<Laundry_Service_Manager_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Manager_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Manager_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Manager_Order_By>>;
  where?: InputMaybe<Laundry_Service_Manager_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Manager_By_PkArgs = {
  manager_id: Scalars['Int'];
};


export type Subscription_RootLaundry_Service_Manager_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Laundry_Service_Manager_Stream_Cursor_Input>>;
  where?: InputMaybe<Laundry_Service_Manager_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_OrderdetailArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orderdetail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orderdetail_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orderdetail_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Orderdetail_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orderdetail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orderdetail_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orderdetail_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Orderdetail_By_PkArgs = {
  order_detail_id: Scalars['Int'];
};


export type Subscription_RootLaundry_Service_Orderdetail_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Laundry_Service_Orderdetail_Stream_Cursor_Input>>;
  where?: InputMaybe<Laundry_Service_Orderdetail_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orders_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Orders_Order_By>>;
  where?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Orders_By_PkArgs = {
  order_id: Scalars['Int'];
};


export type Subscription_RootLaundry_Service_Orders_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Laundry_Service_Orders_Stream_Cursor_Input>>;
  where?: InputMaybe<Laundry_Service_Orders_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_PaymentArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Payment_Order_By>>;
  where?: InputMaybe<Laundry_Service_Payment_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Payment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Payment_Order_By>>;
  where?: InputMaybe<Laundry_Service_Payment_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Payment_By_PkArgs = {
  payment_id: Scalars['Int'];
};


export type Subscription_RootLaundry_Service_Payment_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Laundry_Service_Payment_Stream_Cursor_Input>>;
  where?: InputMaybe<Laundry_Service_Payment_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_ProcessArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Process_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Process_Order_By>>;
  where?: InputMaybe<Laundry_Service_Process_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Process_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Process_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Process_Order_By>>;
  where?: InputMaybe<Laundry_Service_Process_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Process_By_PkArgs = {
  process_id: Scalars['Int'];
};


export type Subscription_RootLaundry_Service_Process_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Laundry_Service_Process_Stream_Cursor_Input>>;
  where?: InputMaybe<Laundry_Service_Process_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_ProductArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Product_Order_By>>;
  where?: InputMaybe<Laundry_Service_Product_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Product_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Product_Order_By>>;
  where?: InputMaybe<Laundry_Service_Product_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Product_By_PkArgs = {
  product_id: Scalars['Int'];
};


export type Subscription_RootLaundry_Service_Product_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Laundry_Service_Product_Stream_Cursor_Input>>;
  where?: InputMaybe<Laundry_Service_Product_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_ScheduleArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Schedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Schedule_Order_By>>;
  where?: InputMaybe<Laundry_Service_Schedule_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Schedule_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Schedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Schedule_Order_By>>;
  where?: InputMaybe<Laundry_Service_Schedule_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Schedule_By_PkArgs = {
  schedule_id: Scalars['Int'];
};


export type Subscription_RootLaundry_Service_Schedule_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Laundry_Service_Schedule_Stream_Cursor_Input>>;
  where?: InputMaybe<Laundry_Service_Schedule_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_ServiceArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Service_Order_By>>;
  where?: InputMaybe<Laundry_Service_Service_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Service_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Service_Order_By>>;
  where?: InputMaybe<Laundry_Service_Service_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Service_By_PkArgs = {
  service_id: Scalars['Int'];
};


export type Subscription_RootLaundry_Service_Service_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Laundry_Service_Service_Stream_Cursor_Input>>;
  where?: InputMaybe<Laundry_Service_Service_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_StaffArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Staff_Order_By>>;
  where?: InputMaybe<Laundry_Service_Staff_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Staff_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Staff_Order_By>>;
  where?: InputMaybe<Laundry_Service_Staff_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Staff_By_PkArgs = {
  staff_id: Scalars['Int'];
};


export type Subscription_RootLaundry_Service_Staff_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Laundry_Service_Staff_Stream_Cursor_Input>>;
  where?: InputMaybe<Laundry_Service_Staff_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_TrackingorderArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Trackingorder_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Trackingorder_Order_By>>;
  where?: InputMaybe<Laundry_Service_Trackingorder_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Trackingorder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Trackingorder_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Trackingorder_Order_By>>;
  where?: InputMaybe<Laundry_Service_Trackingorder_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Trackingorder_By_PkArgs = {
  tracking_id: Scalars['Int'];
};


export type Subscription_RootLaundry_Service_Trackingorder_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Laundry_Service_Trackingorder_Stream_Cursor_Input>>;
  where?: InputMaybe<Laundry_Service_Trackingorder_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_TransactionArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Transaction_Order_By>>;
  where?: InputMaybe<Laundry_Service_Transaction_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Transaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Transaction_Order_By>>;
  where?: InputMaybe<Laundry_Service_Transaction_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Transaction_By_PkArgs = {
  transaction_id: Scalars['Int'];
};


export type Subscription_RootLaundry_Service_Transaction_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Laundry_Service_Transaction_Stream_Cursor_Input>>;
  where?: InputMaybe<Laundry_Service_Transaction_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_VendorArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Vendor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Vendor_Order_By>>;
  where?: InputMaybe<Laundry_Service_Vendor_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Vendor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Vendor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Vendor_Order_By>>;
  where?: InputMaybe<Laundry_Service_Vendor_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Vendor_By_PkArgs = {
  vendor_id: Scalars['Int'];
};


export type Subscription_RootLaundry_Service_Vendor_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Laundry_Service_Vendor_Stream_Cursor_Input>>;
  where?: InputMaybe<Laundry_Service_Vendor_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_VoucherArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Voucher_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Voucher_Order_By>>;
  where?: InputMaybe<Laundry_Service_Voucher_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Voucher_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Voucher_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Voucher_Order_By>>;
  where?: InputMaybe<Laundry_Service_Voucher_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Voucher_By_PkArgs = {
  voucher_id: Scalars['Int'];
};


export type Subscription_RootLaundry_Service_Voucher_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Laundry_Service_Voucher_Stream_Cursor_Input>>;
  where?: InputMaybe<Laundry_Service_Voucher_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_WorkscheduleArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Workschedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Workschedule_Order_By>>;
  where?: InputMaybe<Laundry_Service_Workschedule_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Workschedule_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laundry_Service_Workschedule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Laundry_Service_Workschedule_Order_By>>;
  where?: InputMaybe<Laundry_Service_Workschedule_Bool_Exp>;
};


export type Subscription_RootLaundry_Service_Workschedule_By_PkArgs = {
  schedule_id: Scalars['Int'];
};


export type Subscription_RootLaundry_Service_Workschedule_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Laundry_Service_Workschedule_Stream_Cursor_Input>>;
  where?: InputMaybe<Laundry_Service_Workschedule_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

export type DeleteCustomer1MutationVariables = Exact<{
  where: Laundry_Service_Customers_Bool_Exp;
}>;


export type DeleteCustomer1Mutation = { __typename?: 'mutation_root', delete_laundry_service_customers?: { __typename?: 'laundry_service_customers_mutation_response', affected_rows: number } | null };

export type CreateCustomerMutationVariables = Exact<{
  object: Laundry_Service_Customers_Insert_Input;
}>;


export type CreateCustomerMutation = { __typename?: 'mutation_root', insert_laundry_service_customers_one?: { __typename?: 'laundry_service_customers', phone: string, email: string } | null };

export type UpdateCustomerMutationVariables = Exact<{
  object: Laundry_Service_Customers_Set_Input;
  where: Laundry_Service_Customers_Bool_Exp;
}>;


export type UpdateCustomerMutation = { __typename?: 'mutation_root', update_laundry_service_customers?: { __typename?: 'laundry_service_customers_mutation_response', affected_rows: number } | null };

export type CustomerQueryVariables = Exact<{ [key: string]: never; }>;


export type CustomerQuery = { __typename?: 'query_root', laundry_service_customers: Array<{ __typename?: 'laundry_service_customers', email: string, fullname: string, phone: string, customer_id: number }> };

export type FindCustomerQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type FindCustomerQuery = { __typename?: 'query_root', laundry_service_customers: Array<{ __typename?: 'laundry_service_customers', email: string }> };

export type OrderQueryVariables = Exact<{ [key: string]: never; }>;


export type OrderQuery = { __typename?: 'query_root', laundry_service_orders: Array<{ __typename?: 'laundry_service_orders', order_id: number, staff_id: number, manager_id: number }> };
