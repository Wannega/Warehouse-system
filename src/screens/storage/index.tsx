'use client'

import { Section } from '@common'
import { Diagram } from '@components/diagram'
import { Forecast } from '@components/forecast'
import { BalanceIcon, OutcomeIcon } from '@icons'
import { IncomesIcon } from '@icons/incomes'
import { NearestDeliveryIcon } from '@icons/nearest-delivery'
import { RowModel, Table } from '@tanstack/react-table'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import Image from 'next/image'
import styled from 'styled-components'

export const StoragePage: React.FC = () => {
  const table = useReactTable({
    data: [
      {
        number: 1,
        status: 'completed',
        weight: 200,
        date: '21.02.10',
        time: '6:06 AM',
      },
      {
        number: 1,
        status: 'completed',
        weight: 200,
        date: '21.02.10',
        time: '6:06 AM',
      },
      {
        number: 1,
        status: 'completed',
        weight: 200,
        date: '21.02.10',
        time: '6:06 AM',
      },
      {
        number: 1,
        status: 'completed',
        weight: 200,
        date: '21.02.10',
        time: '6:06 AM',
      },
      {
        number: 1,
        status: 'completed',
        weight: 200,
        date: '21.02.10',
        time: '6:06 AM',
      },
    ],
    columns: [
      {
        id: 'Name',

        footer: (props) => props.column.id,
        columns: [
          {
            accessorFn: (row) => '',
            id: 'Click',
            cell: (info) => info.getValue(),
            header: () => <span></span>,
            footer: (props) => props.column.id,
          },
          {
            accessorFn: (row) => row.number,
            id: 'Delivery',
            cell: (info) => info.getValue(),
            header: () => <Subtitle>Номер доставки</Subtitle>,
            footer: (props) => props.column.id,
          },
          {
            accessorFn: (row) => row.status,
            id: 'Status',
            cell: (info) => info.getValue(),
            header: () => <Subtitle>Статус</Subtitle>,
            footer: (props) => props.column.id,
          },
          {
            accessorFn: (row) => row.weight,
            id: 'Weight',
            cell: (info) => info.getValue(),
            header: () => <Subtitle>Вес</Subtitle>,
            footer: (props) => props.column.id,
          },
          {
            accessorFn: (row) => row.date,
            id: 'Date',
            cell: (info) => info.getValue(),
            header: () => <Subtitle>Дата</Subtitle>,
            footer: (props) => props.column.id,
          },
          {
            accessorFn: (row) => row.time,
            id: 'Time',
            cell: (info) => info.getValue(),
            header: () => <Subtitle>Время</Subtitle>,
            footer: (props) => props.column.id,
          },
        ],
      },
    ],
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <Content>
      <Section>
        <Title>Товары</Title>
        <TableArea>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer select-none'
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      )}
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table
              .getRowModel()
              .rows.slice(0, 10)
              .map((row) => {
                return (
                  <Row key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <Body key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </Body>
                      )
                    })}
                  </Row>
                )
              })}
          </tbody>
        </TableArea>
      </Section>
    </Content>
  )
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  background-color: ${({ theme }) => theme.content.bg};
  padding: 1.25em;
  height: 100%;
`

const Title = styled.h1``
const TableArea = styled.table`
  border-collapse: separate;
  border-spacing: 0 1em;
  border-radius: 90px;
`
const Subtitle = styled.h4`
  color: gray;
  font-weight: 400;
`
const Body = styled.td`
  padding: 15px 10px;
  text-align: center;
  font-weight: 300;
`
const Row = styled.tr`
  background-color: #f8f9fe;
`
