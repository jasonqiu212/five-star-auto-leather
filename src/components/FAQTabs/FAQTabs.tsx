import React from 'react';
import { useState } from 'react';
import { Tabs, Accordion, MantineProvider, TextInput } from '@mantine/core';
import { IconSearch, IconX } from '@tabler/icons-react';
import { FAQCategory, FAQCategoryLabels, faqs, type FAQItem } from '@/components/FAQTabs/faqs';

import '@mantine/core/styles.css';

export const FAQTabs = (): React.ReactElement => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchFAQs = (items: FAQItem[], query: string) => {
    if (!query.trim()) return items;
    const lowerQuery = query.toLowerCase();
    return items.filter(
      (item) =>
        item.question.toLowerCase().includes(lowerQuery) ||
        (typeof item.answer === 'string' && item.answer.toLowerCase().includes(lowerQuery)),
    );
  };

  const allFilteredItems = searchQuery ? searchFAQs(faqs, searchQuery) : [];

  const renderAccordion = (items: FAQItem[]) => {
    if (items.length === 0) {
      return (
        <div className="py-5 text-center text-gray-600">No FAQs found matching your search.</div>
      );
    }

    return (
      <Accordion variant="separated" radius="md">
        {items.map((item) => (
          <Accordion.Item key={item.key} value={item.key}>
            <Accordion.Control>
              <p className="font-medium">{item.question}</p>
            </Accordion.Control>
            <Accordion.Panel>{item.answer}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    );
  };

  return (
    <MantineProvider>
      <div>
        <TextInput
          variant="unstyled"
          placeholder="Search FAQs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.currentTarget.value)}
          leftSection={<IconSearch size={16} />}
          rightSection={
            searchQuery && (
              <IconX size={16} className="cursor-pointer" onClick={() => setSearchQuery('')} />
            )
          }
          size="md"
          radius="md"
          className="mb-4"
          styles={{
            input: {
              border: '1px solid var(--color-gray-300)',
            },
          }}
        />

        {searchQuery ? (
          <div>
            <p className="mb-3 text-gray-600">Search Results ({allFilteredItems.length})</p>
            {renderAccordion(allFilteredItems)}
          </div>
        ) : (
          <Tabs
            variant="pills"
            radius="lg"
            color="black"
            defaultValue={FAQCategory.ServiceAndProcess}
          >
            <Tabs.List justify="center">
              {Object.values(FAQCategory).map((category) => (
                <Tabs.Tab key={category} value={category}>
                  {FAQCategoryLabels[category]}
                </Tabs.Tab>
              ))}
            </Tabs.List>

            {Object.values(FAQCategory).map((category) => (
              <Tabs.Panel key={category} value={category} className="pt-4">
                {renderAccordion(faqs.filter((faq) => faq.categories.includes(category)))}
              </Tabs.Panel>
            ))}
          </Tabs>
        )}
      </div>
    </MantineProvider>
  );
};
