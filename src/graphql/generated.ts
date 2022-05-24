import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Message = {
  __typename?: 'Message';
  body: Scalars['String'];
  id: Scalars['ID'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  createMessage: Message;
  createUser: User;
  deleteMessage: Message;
};


export type MutationCreateMessageArgs = {
  body: Scalars['String'];
  username: Scalars['ID'];
};


export type MutationCreateUserArgs = {
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  username: Scalars['ID'];
};


export type MutationDeleteMessageArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  message: Message;
  messages: Array<Message>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
};


export type QueryMessageArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  username: Scalars['ID'];
};

export type Subscription = {
  __typename?: 'Subscription';
  _?: Maybe<Scalars['Boolean']>;
  messageAdded?: Maybe<Message>;
};


export type SubscriptionMessageAddedArgs = {
  username: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  messages?: Maybe<Array<Message>>;
  username: Scalars['ID'];
};

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', username: string }> | null };

export type GetUserMessagesQueryVariables = Exact<{
  username: Scalars['ID'];
}>;


export type GetUserMessagesQuery = { __typename?: 'Query', user?: { __typename?: 'User', messages?: Array<{ __typename?: 'Message', body: string }> | null } | null };

export type AddUserMutationVariables = Exact<{
  username: Scalars['ID'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
}>;


export type AddUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', username: string, first_name: string, last_name: string } };

export type AddMessageMutationVariables = Exact<{
  username: Scalars['ID'];
  body: Scalars['String'];
}>;


export type AddMessageMutation = { __typename?: 'Mutation', createMessage: { __typename?: 'Message', body: string, user: { __typename?: 'User', username: string } } };


export const AllUsersDocument = `
    query AllUsers {
  users {
    username
  }
}
    `;
export const useAllUsersQuery = <
      TData = AllUsersQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: AllUsersQueryVariables,
      options?: UseQueryOptions<AllUsersQuery, TError, TData>
    ) =>
    useQuery<AllUsersQuery, TError, TData>(
      variables === undefined ? ['AllUsers'] : ['AllUsers', variables],
      fetcher<AllUsersQuery, AllUsersQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, AllUsersDocument, variables),
      options
    );
export const GetUserMessagesDocument = `
    query GetUserMessages($username: ID!) {
  user(username: $username) {
    messages {
      body
    }
  }
}
    `;
export const useGetUserMessagesQuery = <
      TData = GetUserMessagesQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: GetUserMessagesQueryVariables,
      options?: UseQueryOptions<GetUserMessagesQuery, TError, TData>
    ) =>
    useQuery<GetUserMessagesQuery, TError, TData>(
      ['GetUserMessages', variables],
      fetcher<GetUserMessagesQuery, GetUserMessagesQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetUserMessagesDocument, variables),
      options
    );
export const AddUserDocument = `
    mutation AddUser($username: ID!, $first_name: String!, $last_name: String!) {
  createUser(username: $username, first_name: $first_name, last_name: $last_name) {
    username
    first_name
    last_name
  }
}
    `;
export const useAddUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<AddUserMutation, TError, AddUserMutationVariables, TContext>
    ) =>
    useMutation<AddUserMutation, TError, AddUserMutationVariables, TContext>(
      ['AddUser'],
      (variables?: AddUserMutationVariables) => fetcher<AddUserMutation, AddUserMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, AddUserDocument, variables)(),
      options
    );
export const AddMessageDocument = `
    mutation AddMessage($username: ID!, $body: String!) {
  createMessage(username: $username, body: $body) {
    user {
      username
    }
    body
  }
}
    `;
export const useAddMessageMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<AddMessageMutation, TError, AddMessageMutationVariables, TContext>
    ) =>
    useMutation<AddMessageMutation, TError, AddMessageMutationVariables, TContext>(
      ['AddMessage'],
      (variables?: AddMessageMutationVariables) => fetcher<AddMessageMutation, AddMessageMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, AddMessageDocument, variables)(),
      options
    );